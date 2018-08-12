<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\TovarsRepository;
use App\Repositories\MenusRepository;
use App\Category;
use App\Tovar;
use App\Menu;
use App\Repositories\CategoryRepository;
Use Session;

class IndexController extends MasterController
{
    public function __construct(TovarsRepository $tovars, CategoryRepository $categories)
    {
        parent::__construct(new MenusRepository(new Menu));
        $this->tovar_r = $tovars;
        $this->category_r = $categories;
    }

    public function index() {

        // $customer = \App\Customer::first();
        // $orders = \App\Customer::first()->orders;
        // dd([$customer, $orders]);

        // dd(Session::all());
        // Session::flush();

        $tovars = $this->tovar_r->get();
        // dd($tovars);
        return $this->outputView("pages.index", "tovars", $tovars);
    }

    public function show($menu, $category) {
        $tovars = $this->menu_r->showMenuCategory($menu, $category);
        return $this->outputView("pages.product", "tovars", $tovars);
    }

    public function single($category, $id) {

        // dd(Session::all());
        // Session::flush();

        $tovar = $this->tovar_r->singleTovar($id);
        $tovars = $this->category_r->getCategoryTovars($category, $id);
        $this->vars = array_add($this->vars, "tovars", $tovars);
        return $this->outputView("pages.single", "tovar", $tovar);
    }
}
