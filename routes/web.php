<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', ["uses" => "IndexController@index", "as" => "index"]);
Route::get('show/{menu}/{category}', ["uses" => "IndexController@show", "as" => "show.category"]);
Route::get('single/{category}/{id}', ["uses" => "IndexController@single", "as" => "show.single"]);

Route::post('contact', ["uses" => "ContactController@post", "as" => "contact.send"]);
Route::get("contact", ["uses" => "ContactController@show", "as" => "contact"]);




Route::get('/get_cart', ['uses' => 'CartController@getCatr', "as" => "cart.get"]);
// Показать корзину 
Route::get('/cart', ['uses' => 'CartController@show', 'as' => 'cart.index']);
// Добавить тоапр в корзину
Route::post('/add_cart', ['uses' => 'CartController@add', 'as' => 'cart.add']);
// Удалить товат из Корзины
Route::post('/del_cart', ['uses' => 'CartController@destroy', 'as' => 'cart.destroy']);
// Очистит Корзину
Route::post('/clear_cart', ['uses' => 'CartController@clear', 'as' => 'cart.destroy']);


// Форма Оформление заказа
Route::get('/form_order', ['uses' => 'OrderController@showOrderForm', 'as' => 'cart.order']);
// 
Route::post('/form_order', ['uses' => 'OrderController@postOrderCart', 'as' => 'cart.form']);




Route::post('subscribe', ['uses' => 'SubscribeController@post', 'as' => 'subscribe']);

Route::get('add_cart', function (Request $request) {
    if (Request::ajax()) {
        return response()->json([Request::all(), "Response /add_cart"]);
    }
});


Route::group(['prefix' => 'admin', "middleware" => ["auth", "admin"]], function () {
    // admin/dashboard
    Route::get('/dashboard', ["uses" => "Admin\IndexController@index", "as" => "admin.index"]);
    // admin/users
    Route::resource('users', 'Admin\UsersController');
    // admin/tovars
    Route::resource("tovars", "Admin\TovarsController");
    // admin/categories
    Route::resource('categories', 'Admin\CategoriesController');
    // admin/menus
    Route::resource('menus', 'Admin\MenusController');
    // admin/orders
    Route::resource('orders', 'Admin\OrdersController');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
