<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;
use Validator;

class SubscribeController extends MasterController
{
    public function post(Request $request) {
        $data = $request->except('_token');

        // dd($data);

        $validator = Validator::make($data, [
            "email" => "required|email"
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        Subscribe::create([
            "email" => $data['email'],
            "token" => str_random(30),
        ]);

        return redirect()->route('index')->with("success", "Вы успешно подписаны!");

    }
}
