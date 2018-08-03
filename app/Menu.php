<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = ["title", "prefix", "active"];

    public function categories()
    {
        return $this->hasMany('App\Category');
        // return $this->hasMany('App\Category', 'foreign_key', 'local_key');
    }
}
