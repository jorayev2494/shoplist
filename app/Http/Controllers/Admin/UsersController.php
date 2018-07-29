<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Role;
use Validator;
use Illuminate\Validation\Rule;



class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('created_at','desc')->paginate(8);
        return view("admin.pages.users.index", ["users" => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::get();
        return view("admin.pages.users.create")->with("roles", $roles);
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
            "name" => "required|min:4|max:30",
            "lastname" => "required|min:4|max:30",
            "email" => "required|string|email|max:255|unique:users",
            "address" => "required|max:255",
            "password" => "required|min:6",
            "role" => "required|integer",
            "avatar" => "image"
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        $avatar = $request->file("avatar");  

        $user = User::create([
            "name" => $data["name"],
            "lastname" => $data["lastname"],
            "email" => $data["email"],
            "address" => $data["address"],
            "password" => bcrypt($data["password"]),
        ]);

        /**
         *  Опртделение Роли Пользвателья
         */
        $user->roles()->attach([
            "role_id" => $data["role"],
        ]);

        if ($request->hasFile("avatar")) {
            $input["avatar"] = $avatar->getClientOriginalName();

            $avatar->move(public_path("users/") .  $data["name"] . "/avatar/", $input["avatar"]);
            $user->avatar = $input["avatar"];
            $user->save();
        }

        return redirect()->route("users.index")->with("success", "Пользователь успешно создан!");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        return view("admin.pages.users.edit")->with(["user" => $user, "roles" => Role::all()]);
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

        $user = User::find($id);

        $validator = Validator::make($data, [
            "name" => "required|min:4|max:30",
            "lastname" => "required|min:4|max:30",
            "email" => "email|unique:users,email,$user->id",
            // "email" => [
            //                 "required",
            //                 Rule::unique('users')->ignore($id)
            //             ],
            "address" => "required|max:255",
            "role" => "required|integer",
            "password" => "max:200",
            "avatar" => "image"
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput($data);
        }

        $avatar = $request->file("avatar"); 

        $user->update([
            "name" => $data["name"],
            "lastname" => $data["lastname"],
            "email" => $data["email"],
            "address" => $data["address"],
            "password" => bcrypt($data["password"]),
        ]);

        $user->roles()->attach([
            "role_id" => $data["role"],
        ]);

        if ($request->hasFile("avatar")) {
            $input["avatar"] = $avatar->getClientOriginalName();

            $avatar->move(public_path("users/") .  $data["name"] . "/avatar/", $input["avatar"]);
            $user->avatar = $input["avatar"];
            $user->save();
        }

        return redirect()->route("users.index")->with("success", "Пользователь успешно обновлен!");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->roles()->detach();
        $user->delete();

        if ($user) {
            return redirect()->route("users.index")->with("success", "Пользователь успешно Удален!");
        }

        return redirect()->back();
    }
}
