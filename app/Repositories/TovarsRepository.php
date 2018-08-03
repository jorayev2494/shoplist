<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Tovar;

class TovarsRepository extends Repository
{
    public function __construct(Tovar $tovar)
    {
        return $this->model = $tovar;
    }
}
