<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use \Symfony\Component\HttpFoundation\Request;
use App\Tovar;
use App\Menu;
use Session;
use Validator;
Use App\Repositories\TovarsRepository;
Use App\Repositories\CategoryRepository;
Use App\Repositories\MenusRepository;

class CartController extends MasterController
{
    public $cart = array();

    public function __construct(TovarsRepository $tovars, CategoryRepository $categories)
    {
        parent::__construct(new MenusRepository(new Menu));
        $this->tovar_r = $tovars;
        $this->category_r = $categories;
    }


    public function getCatr(Request $request) {
        $cartCounts = Session::get('cart.count');                   // Получить из Сесси Количества товаров в Корзине
        $cartSums = Session::get('cart.sum');                       // Получить из Сесси Общий цену в Корзине
            
        return response()->json([$cartCounts, $cartSums], 200);     // Отпраавим ответ к пользователью
    }

    /**
     * показать Корзину
     *
     * @param Request $request
     * @return data
     */
    public function show(Request $request) {

        $itemCart = Session::get('cart');               // Получаем нашу Корзину из Сесси
        $has = Session::has('cart');                    // Проверяем есть ли в Сесси наш Корзина
        
        if ($has) {
            $data = array_except($itemCart, ['sum', 'count']);      // (true) то тогда исключаем наш общий Сумму и общию Кол-ву из наш массива
            
            foreach($data as $id => $order) {                       // И получаем каждую по отделбносьтю

                $model = $this->tovar_r->getOnce("*", $id);         // Получить товар по ID из БД-х через Репозитории

                $this->cart[$id] = [                                // Ставить в корзину о информации товара
                    "info" => $model,                               // Получаем Модель товарв
                    "count" => $order['count'],                     // Получить Количество заказынного товара
                    "price" => $order['price'],                     // Получить Цену заказынного товара
                    "summa" => $order['summa'],                     // Получить Сумму заказынного товара
                ];
            }
        }

        return $this->outputView("pages.checkout", "cart", $this->cart); // всё это передаем к клиенту (view) 
    }

    /**
     * Добавить товар в Корзину
     *
     * @param Request $request
     * @return json()
     */
    public function add(Request $request) {

        if ($request->ajax()) {                                     // Проверка запроса

            $data = [                                               // загртоака добавление данные
                'count' => (int)$request->count_tov,                // полученные кол-во
                'price' => $request->price_tov,                     // полученные цена товара
                'summa' => (int)$request->count_tov * $request->price_tov,  // Умножение цены на кол-во купленного товара
            ];

            $cart = Session::get('cart');                           // Получить Корзину из Сесси
                                                    // Проверяем есть ли у нас Корзина
            if (!$request->session()->has('cart')) {                // Если false то создаем Корзину
                Session::put('cart.' . $request->id_tov, $data);    // Создаем Корзину и ставим наш первый товар 
            } else {                                // то тогда добоаляем товар в Корзину
                $hasItem = array_has($cart, (int)$request->id_tov); 

                if ($hasItem) {      // Проверяем ест ли такой товар в крозине

                    $count = Session::get("cart." . (int)$request->id_tov . ".count");
                    Session::put("cart." . (int)$request->id_tov . ".count", $count + (int)$request->count_tov); // Если есть (true) то поменяем количеству 

                    Session::put("cart." . (int)$request->id_tov . ".price", $request->price_tov); // Если есть (true) то умножим цену на новую
                    
                    $count = Session::get("cart." . (int)$request->id_tov . ".count");
                    $price = Session::get("cart." . (int)$request->id_tov . ".price");
                    Session::put("cart." . (int)$request->id_tov . ".summa", $count * $price);      // Если есть (true) то умножим Сумму товара и сохраняем в Сесси 

                } else {
                    Session::put('cart.' . (int)$request->id_tov, $data);    // Если нет (false) тогда добавляем новый товар в корзину
                }        
            }

            // Посчитать Количеставу товара
            $hasCount = Session::has('cart.count'); 

            if ($hasCount) {
                $count = Session::get('cart.count');                        // Получить кло-ву товароа из Корзины
                Session::put('cart.count', $count + $request->count_tov);   // Добавить на старую кол-ву тов + новую полученную
            } else {
                Session::put('cart.count', $request->count_tov);            // Если нет товаров в Корзине то создаем и встовляем наш товар в Корзину
            }
            

            // Посчитать Сумму товара
            $hasSum = Session::has('cart.sum');                     

            if ($hasSum) {                                                          // проверяем есть ли такой товар и такой цена в Корзине
                $count = Session::get("cart." . (int)$request->id_tov . ".count");      // (true) тогда поучаем наш старую Кол-ву из Сесси
                $price = Session::get("cart." . (int)$request->id_tov . ".price");      // (true) и поучаем наш старую Цену из Сесси
                $sum = Session::get('cart.sum');                                        // (true) и поучаем наш старую Сумму из Сесси
                Session::put('cart.sum', $sum + ($request->count_tov * $price));        // (true) и все полученные Кол-ву, Сумму из Сесси сохроняем в старую Сумму в Сессию
            } else {
                Session::put('cart.sum', $request->count_tov * $request->price_tov);    // (false) то тогда просто умножим и вставим на наш Сессию сумму Корзины
            }

            $cartCounts = Session::get('cart.count');
            $cartSums = Session::get('cart.sum');
            $cartTotal = Session::get('cart.' . $request->id_tov . ".summa");
            
            return response()->json([$cartCounts, $cartSums, $cartTotal], 200);         // Отпраавим ответ к View пользователью 

        }
    }

    /**
     * Удаление товара
     *
     * @param Request $request
     * @param integer $id
     * @return json
     */
    public function destroy(Request $request) {

        if($request->ajax()) {

            $id_tov = $request->id_tov;                 // получаем наший ID что бы удобно работать

            $count = Session::get('cart.count');        // получаем обшую Кол-ву из Корзины
            $sum = Session::get('cart.sum');            // получаем обшую Сумму из Корзины

            $del_tov_count = Session::get('cart.' . $id_tov . '.count');    // получаем Кол-ву по ID из Корзины 
            $del_tov_summa = Session::get('cart.' . $id_tov . '.summa');    // получаем Сумму  по ID из Корзины 
            
            Session::put('cart.sum', $sum - $del_tov_summa);                // И отнимаем (-) сумму из Общей Суммы нащего Корзины
            Session::put('cart.count', $count - $del_tov_count);            // И отнимаем (-) кол-ву из Общей Кол-ве нащего Корзины

            $del_tovar = Session::forget('cart.' . $id_tov);                // И Удоляем проиделенный товар по ID из Корзины

            return response()->json(["Товар Удален: cart." . $id_tov, Session::get('cart'), $request->all()], 200); // передаем данные в View нашему клиенту
        }

        abort(404);
        
    }


    /**
     * Очистить корзину
     *
     * @param Request $request
     * @return void
     */
    public function clear(Request $request) {

        Session::forget('cart');            // Очистем наш Корзину из Сесси
        
        Session::put('cart.count', 0);      // Обнулим общий кол-ву тов в Сесси
        Session::put('cart.sum', 0);        // Обнулим общий сумму тов в Сесси

        $all = Session::all();              // Полоучаем всю Сессию

        return response()->json($all, 200); // отправим ответ к Клиенту и к View для отображение в Корзине
        
    }

    
}
