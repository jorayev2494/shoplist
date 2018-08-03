<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Menu;

class MenusRepository extends Repository
{
    public function __construct(Menu $menu) {
        return $this->model = $menu;
    }

    public function test() {
        echo __METHOD__;
    }

}
