<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Category;

class CategoryRepository extends Repository
{
    public function __construct(Category $category)
    {
        return $this->model = $category;
    }
}
