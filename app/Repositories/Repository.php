<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Config;

abstract class Repository
{
    public $model;

    public function get($select = "*") {
        $bulider = $this->model->where("active", true)->select($select)->get();
        return $bulider;
    }

    // Поучить только один товар из БД-х
    public function getOnce($select = "*", $id) {
        $builder = $this->model->where("active", true)->select($select)->find($id);
        return $builder;
    }

    
    public function showMenuCategory($menu, $category) {
        $builderMenu = $this->model->where("prefix", $menu)->first();
        $builderCategory = $builderMenu->categories->where("prefix", $category)->first();
        $builderTovars = $builderCategory->tovars->where('active', true);
        return $builderTovars;
    }

    public function singleTovar($id) {
        $builder = $this->model->where('active', true)->find($id);
        return $builder;
    }

    public function getCategoryTovars($category){
        $builderCategory = $this->model->where("prefix", $category)->first();
        $builderTovars = $builderCategory->tovars->where("active", true)->take(Config::get('settings.count_single_tovars'));
        return $builderTovars;
    }


}
