<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    protected $fillable = ["cart_count", "cart_sum", "status", "name", "email", "phone", "address"];

    
    public function orders()
    {
        return $this->hasMany('App\Order', 'customer_id', 'id');  // , 'foreign_key', 'local_key'
    }
}
