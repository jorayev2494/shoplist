<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Menu;
use Validator;

class MenusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menus = Menu::all();
        // $menus = Category::orderBy('created_at','desc')->paginate(8);
        return view("admin.pages.menus.index", ["menus" => $menus]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("admin.pages.menus.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->except("_token");

        // dd($data);

        $validator = Validator::make($data, [
            "title" => "required|unique:menus|min:4|max:10",
            "prefix" => "required|unique:menus|min:2|max:10",
            // "active" => "required",
        ]);
        
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        // dd($data);
        
        $menu = Menu::create([
            "title" => $data["title"],
            "prefix" => $data["prefix"],
            "active" => false,
        ]);

        if ($request->input('active')) {
            $menu->active = true;
            $menu->save();
        }

        // dd($data);

        return redirect()->route("menus.index")->with("success", "Меню успешно создан!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        echo __METHOD__;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $menu = Menu::find($id);
        return view("admin.pages.menus.edit")->with(["menu" => $menu]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->except(["_token", "_method"]);

        $menu = Menu::find($id);

        // dd($data);

        $validator = Validator::make($data, [
            "title" => "required|min:4|max:10",
            "prefix" => "required|min:2|max:10",
            // "active" => "required",
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }


        $menu->update([
            "title" => $data["title"],
            "prefix" => $data["prefix"],
            "active" => false,
        ]);

        if ($request->input('active')) {
            $menu->active = true;
            $menu->save();
        }
        // dd($data);

        return redirect()->route("menus.index")->with("success", "Категория успешно обновлен!");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu = Menu::find($id);
        // dd($menu);
        // $menu->delete();
        $menu->active = false;
        $menu->save();

        if ($menu) {
            return redirect()->route("menus.index")->with("success", "Меню успешно Отключен!");
        }

        return redirect()->back();
    }
}
