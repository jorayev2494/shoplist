<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $fillable = ["title", "prefix", "menu_id"];

    public function tovars()
    {
        return $this->hasMany('App\Tovar');
    }

    public function menu()
    {
        return $this->belongsTo('App\Menu', 'menu_id', 'id');
    }
    
}
