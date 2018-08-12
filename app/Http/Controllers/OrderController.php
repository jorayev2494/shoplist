<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use App\Menu;
use App\Repositories\MenusRepository;
use App\Repositories\TovarsRepository;
use Validator;
use App\Customer;
use App\Order;

class OrderController extends MasterController
{



    public function __construct(TovarsRepository $tovars)
    {
        parent::__construct(new MenusRepository(new Menu));

        $this->tovar_r = $tovars;
    }

    /**
     * Форма Оформление заказа
     *
     * @return void
     */
    public function showOrderForm() {

        $itemCart = Session::get('cart');
        // dd($itemCart);
        $has = Session::has('cart');
        
        if ($has) {
            $data = array_except($itemCart, ['sum', 'count']);
        // dd($data);
            
            foreach($data as $id => $count) {
                $model = $this->tovar_r->getOnce("*", $id);         // Получить товар по ID из БД-х

                $this->cart[$id] = [                                // Ставить в корзину о информации товара
                    "info" => $model, 
                    "count" => $count['count'],                     // Получить Количество заказынного товара
                    "price" => $count['price'],
                    "summa" => $count['summa'],
                ];
            }
        }

        // return $this->outputView("pages.checkout", "cart", $this->cart);
        // dd($this->cart);

        return $this->outputView("pages.form_order", "cart", $this->cart);
    }

    public function postOrderCart(Request $request){
        $data = $request->except('_token');

        $validator = Validator::make($data, [
            "name" => "required|min:2",
            "email" => "required|email",
            "phone" => "required|min:5",
            "address" => "required|string|max:255",
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        $sessionCart = Session::get('cart');

        $customer = Customer::create([
            "cart_count" => $sessionCart['count'],
            "cart_sum" => $sessionCart['sum'],
            "name" => $data["name"],
            "email" => $data["email"],
            "phone" => $data["phone"],
            "address" => $data["address"],
        ]);

        // dd($customer->id);

        $orderCartTovars = array_except($sessionCart, ['sum', 'count']);
        // dd($orderCartTovars);

        foreach ($orderCartTovars as $id => $tovar) {
            Order::create([
                "customer_id" => $customer->id,
                "tovar_id" => $id,
                "count" => $tovar['count'],
                "sum" => $tovar['summa'],
                "price_once" => $tovar['price'],
            ]);
        }

        Session::forget('cart');
        
        Session::put('cart.count', 0);
        Session::put('cart.sum', 0);

        return redirect()->route('index')->with("success", "Ваш заказ в очереде будет обработан в блюжающий времия мы с вами свжемсья!");
    }
}
