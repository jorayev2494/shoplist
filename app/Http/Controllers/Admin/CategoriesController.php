<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use Validator;
use App\Menu;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        // $categories = Category::orderBy('created_at','desc')->paginate(8);
        return view("admin.pages.categories.index", ["categories" => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $menus = Menu::get();
        return view("admin.pages.categories.create")->with("menus", $menus);
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
            "title" => "required|unique:categories|min:4|max:10",
            "prefix" => "required|unique:categories|min:2|max:10",
            "menu" => "required|integer",
        ]);
        
        
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        // dd($data);
        
        $category = Category::create([
            "title" => $data["title"],
            "prefix" => $data["prefix"],
            "menu_id" => $data["menu"],
        ]);

        return redirect()->route("categories.index")->with("success", "Категория успешно создан!");
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
        $category = Category::find($id);
        return view("admin.pages.categories.edit")->with(["category" => $category, "menus" => Menu::all()]);
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
        $data = $request->except("_token");

        $category = Category::find($id);

        $validator = Validator::make($data, [
            "title" => "required|unique:categories,title,$id|min:4|max:10",
            "prefix" => "required|unique:categories,prefix,$id|min:2|max:10",
            "menu" => "required|integer",
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        $category->update([
            "title" => $data["title"],
            "prefix" => $data["prefix"],
            "menu_id" => $data["menu"],
        ]);

        return redirect()->route("categories.index")->with("success", "Категория успешно обновлен!");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        dd($category);
        // $category->delete();
        $category->active = false;
        $category->save();

        if ($category) {
            return redirect()->route("categories.index")->with("success", "Категория успешно Удален!");
        }

        return redirect()->back();
    }
}
