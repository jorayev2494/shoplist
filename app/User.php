<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', "lastname", "address", "phone", "avatar"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     *  Отношение с Ролями
     */
    public function roles()
    {
        return $this->belongsToMany('App\Role', 'role_user', 'user_id', 'role_id');
    }

    /**
     * Получение Аватар Пользователея
     *
     * @return void
     */
    public function getAvatar(){
        if ($this->avatar !== null) {
            return asset("users/") . "/" . $this->name . "/avatar/" . $this->avatar;
        }

        return asset("default") . "/photo.png";
    }

    /**
     * Получение Роль Пользователея
     *
     * @return void
     */
    public function getRole() {
        if (count($this->roles) > 0) {
            return $this->roles->first();
        }
        return null;
    }
}
