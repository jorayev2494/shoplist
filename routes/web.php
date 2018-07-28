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

Route::get('/', ["uses" => "MasterController@index", "as" => "index"]);


Route::group(['prefix' => 'admin'], function () {
    Route::get("/dashboard", ["uses" => "Admin\IndexController@index", "as" => "admin.index"]);
    Route::resource('users', 'Admin\UsersController');
    
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
