<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\MenusRepository;
use Validator;
use App\Menu;
use Mail;
use App\Mail\ContactMail;

class ContactController extends MasterController
{
    public function __construct(MenusRepository $menus)
    {
        parent::__construct(new MenusRepository(new Menu));
    }

    public function show() {
        // return view('pages.contact')->with($this->vars);
        return $this->outputView("pages.contact");  
    }

    public function post(Request $request) {
        $data = $request->except('_token');

        $validator = Validator::make($data, [
            "name" => "required|min:3",
            "email" => "required|email",
            "message" => "required|max:225",
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        $mail = Mail::to("jorayev2494@mail.com")->send(new ContactMail($data));
        
        return redirect()->route('index')->with('success', 'Спасибо Ваше сообщение отправлена!');
    }

    public function ajax(Request $request) {
        $msg = "Controller Messages";

        // dd($request);

        return response()->json(["msg" => $msg], 200);
    }
}
