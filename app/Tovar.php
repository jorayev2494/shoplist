<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tovar extends Model
{
    protected $fillable = ["name", "model", "description", "img", "category_id", "active", "price"];

    public function category()
    {
        return $this->belongsTo('App\Category', "category_id");
    }

    /**
     * Получить Изображение товаров
     *
     * @return string
     */
    public function getImage() {
        if($this->img != null) {
            return asset(env("APP_NAME")) . "/images/tovars/" . $this->category->prefix . "/" . $this->name . "/image/" . $this->img;
        }

        return asset("default") . "/photo.png";
    }



}
