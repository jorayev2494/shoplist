<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    public function tovars()
    {
        return $this->hasMany('App\Tovar');
    }
    
}
