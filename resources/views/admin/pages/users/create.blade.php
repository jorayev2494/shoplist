
@extends('admin.layouts.admin_master')
    
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
            Добавить пользователя
            <small>приятные слова..</small>
            </h1>
        </section>
    
        <!-- Main content -->
        <section class="content">
    
            <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
                {{ csrf_field() }}
                <!-- Default box -->
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Добавляем пользователя</h3>
                    </div>
                    <div class="box-body">
                    
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Имя</label>
                                    <input type="text" name="name" class="form-control" id="exampleInputEmail1" placeholder="">
                                </div>
            
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Фамилья</label>
                                    <input type="text" name="lastname" class="form-control" id="exampleInputEmail1" placeholder="">
                                </div>
            
                                <div class="form-group">
                                    <label for="exampleInputEmail1">E-mail</label>
                                    <input type="text" name="email" class="form-control" id="exampleInputEmail1" placeholder="">
                                </div>
            
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Адрес</label>
                                    <input type="text" name="address" class="form-control" id="exampleInputEmail1" placeholder="">
                                </div>
            
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Пароль</label>
                                    <input type="password" name="password" class="form-control" id="exampleInputEmail1" placeholder="">
                                </div>
            
                                <div class="form-group">
                                    <label for="exampleInputFile">Аватар</label>
                                    <input type="file" name="avatar" id="exampleInputFile">
                    
                                    <p class="help-block">Какое-нибудь уведомление о форматах..</p>
                                </div>
                            </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <button class="btn btn-default">Назад</button>
                        <button class="btn btn-success pull-right">Добавить</button>
                    </div>
                    <!-- /.box-footer-->
                </div>
                <!-- /.box -->
            </form>
        
        </section>
        <!-- /.content -->
        </div>
@stop
    