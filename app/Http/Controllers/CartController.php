<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Request;
use App\Tovar;

class CartController extends MasterController
{
    public $cart = array();

    public function show(Request $request) {

        // return response()->json([$request->method(), "Response Controller"], 200);;

        // if (Request::ajax()) {
            // return response()->json([__METHOD__, "Response Controller"], 200);
        // }
        // return "Not Ajax in " . __METHOD__;

        return $this->outputView("pages.checkout");
    }

    public function add(Request $request) {
        $id = $request->tId;
        $name = $request->tName;
        $model = $request->tModel;
        $price = $request->tPrice;

        $result = array($id, $name, $model, $price);

        $tovar = Tovar::find($id);

        $t = $this->addToCart($tovar);

						// {{ dd(session()->all()) }}

        // return $request->session()->get("cart");


        // if(!$tovar) {
        //     return response()->json(["t" => $t, "test" => $request->method(), false], 200);
        // }
        // return response()->json(["t" => $t, "test" => $request->method(), $tovar], 200);





        // if (empty($tovar)) {
        //     return false;
        // }



        // $this->cart[0] = $id;


        // $request->session()->put('Tovar', $id);

        // $data = $request->session()->get("Tovar");

        // $tovarCart = $this->tovar_r->otCart($id);
        // dd($tovarCart);
        // if ($request->ajax()) {
            // return response()->json(__METHOD__, 200);
        // }
        // return response()->json(["Session" => $data, "test" => $request->method(), $tovar], 200);

    }
}
