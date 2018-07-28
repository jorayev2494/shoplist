<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index() {
        $user = \App\User::find(1);
        // dd($user->roles);
        return view("admin.dashboard");
    }
}
