<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\TovarsRepository;
use App\Repositories\MenusRepository;
use App\Category;
use App\Tovar;
use App\Menu;
use App\Repositories\CategoryRepository;

class IndexController extends MasterController
{
    public function __construct(TovarsRepository $tovars, CategoryRepository $categories)
    {
        parent::__construct(new MenusRepository(new Menu));
        $this->tovar_r = $tovars;
        $this->category_r = $categories;
    }

    public function index() {
        $tovars = $this->tovar_r->get();
        return $this->outputView("pages.index", "tovars", $tovars);
    }

    public function show($menu, $category) {
        $tovars = $this->menu_r->showMenuCategory($menu, $category);
        return $this->outputView("pages.product", "tovars", $tovars);
    }

    public function single($category, $id) {
        $tovar = $this->tovar_r->singleTovar($id);
        $tovars = $this->category_r->getCategoryTovars($category);
        $this->vars = array_add($this->vars, "tovars", $tovars);
        return $this->outputView("pages.single", "tovar", $tovar);
    }
}
