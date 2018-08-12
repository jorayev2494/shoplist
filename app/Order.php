<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $fillable = ["customer_id", "tovar_id", "count", "sum", "price_once"];

    public function customer()
    {
        return $this->belongsTo('App\Customer');  // , 'foreign_key', 'other_key'
    }


    public function tovar()
    {
        return $this->hasOne('App\Tovar', 'id', 'tovar_id');  //, 'foreign_key', 'local_key'
    }


}
