<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Tovar;
use Validator;
use Illuminate\Routing\Redirector;
use Config;

class TovarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tovars = Tovar::orderBy('created_at','desc')->paginate(Config::get('settings.count_tovars'));
        return view("admin.pages.tovars.index")->with("tovars", $tovars);
    }

    /** 
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::get();
        return view("admin.pages.tovars.create", ["categories" => $categories]);
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

        $validator = Validator::make($data, [
            "name" => "required|min:5|max:60",
            "model" => "required|min:5|max:60",
            "description" => "required|min:5|max:255",
            "category" => "required|integer",
            "price" => "required|numeric",
        ]);


        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }


        $image = $request->file("image");  

        $tovar = Tovar::create([
            "name" => $data["name"],
            "model" => $data["model"],
            "description" => $data["description"],
            "category_id" => $data["category"],
            // "category_id" => 1,
            "price" => $data["price"],
        ]);

        if ($request->hasFile("image")) {
            $input["image"] = $image->getClientOriginalName();
            $image->move(public_path(env("APP_NAME")) . "/images/tovars/" . $tovar->category->prefix . "/" . $data["name"] . "/image/", $input["image"]);
            $tovar->img = $input["image"];
            $tovar->save();
        }

        if ($request->input('active')) {
            $tovar->active = true;
            $tovar->save();
        }

        return redirect()->route("tovars.index")->with("succes", "Товар успешно добавлен!");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tovar = Tovar::find($id);
        return view("admin.pages.tovars.edit")->with(["tovar" => $tovar, "categories" => Category::all()]);
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
        $data = $request->except("_token", "_method");

        $tovar = Tovar::find($id);

        // dd($data);

        $validator = Validator::make($data, [
            "name" => "required|unique:tovars,name,$tovar->id|min:4|max:50",
            "model" => "required|min:4|max:50",
            "category" => "required|integer",
            "price" => "required|numeric",
            "description" => "required|max:255",
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        // dd($data);
        
        $tovar->update([
            "name" => $data["name"],
            "model" => $data["model"],
            "category_id" => $data["category"],
            "description" => $data["description"],
            "active" => false,
            "price" => $data["price"],
        ]);


        if ($request->hasFile("image")) {
            $image = $request->file("image"); 
            $input["image"] = $image->getClientOriginalName();
            $image->move(public_path(env("APP_NAME")) . "/images/tovars/" . $tovar->category->prefix . "/" . $data["name"] . "/image/", $input["image"]);
            $tovar->img = $input["image"];
            $tovar->save();
        }

        // dd($data);

        if ($request->input('active')) {
            $tovar->active = true;
            $tovar->save();
        }

        return redirect()->route("tovars.index")->with("success", "Товар успешно обновлен!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tovar = Tovar::find($id);
        $tovar->delete();

        if ($tovar) {
            return redirect()->route("tovars.index")->with("success", "Товар успешно Удален!");
        }

        return redirect()->back();
    }
}
