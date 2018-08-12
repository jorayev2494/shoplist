<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\MenusRepository;
use App\Repositories\TovarsRepository;
use View;
use Session;


class MasterController extends Controller   
{

    protected $menu_r;                  // 
    protected $tovar_r;                 //
    protected $category_r;              //

    protected $template;                //
    protected $vars = array();          //
    protected $cart = array();          // 

    public function __construct(MenusRepository $menus)
    {
        $this->menu_r = $menus;
        $menus = $this->menu_r->get();
        $this->vars = array_add($this->vars, "menus", $menus);
    }

    public function outputView($template, $dataName = false, $data = false) {

        if ($dataName) {
            $this->vars = array_add($this->vars, $dataName, $data);
        }

        return View::make($template, $this->vars);
    }


    public function addToCart($tovar, $qty = 1) {

        if (Session::has('cart.' . $tovar->id)) {
            Session::push('cart.' . $tovar->id . '.qty', ++$qty);
            // return "true";  
        } else {
            
            $data = [
                "qty" => $qty,
                "name" => $tovar->name,
                "price" => $tovar->price,
                "img" => $tovar->img,
            ];

            Session::put('cart.' . $tovar->id, $data);
        }

        // Session::has('cart.qty') ? Session::push('cart.qty', +$qty) : Session::push('cart.qty', $qty);
        // Session::has('cart.sum') ? Session::push('cart.sum', +$qty * $tovar->price) : Session::push('cart.qty', $qty * $tovar->price);

        return Session::get('cart');

        // return "_false";
    }

}
