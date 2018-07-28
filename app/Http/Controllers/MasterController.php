<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MasterController extends Controller
{
    public function index() {
        $user = \App\User::find(1);
        // dd($user->roles);
        return view("admin.dashboard");
    }
}
