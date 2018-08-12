<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cart_count')->unsigned()->coment("Кол-во тов в Корзине");
            $table->integer('catr_sum')->unsigned()->coment("Общая сумма в Корзине");
            $table->integer('status')->unsigned()->default(0);
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->integer('phone')->unsigned()->nullable();
            $table->string('address')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
