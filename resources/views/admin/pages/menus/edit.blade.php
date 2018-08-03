
@extends('admin.layouts.admin_master')


@section('content')
    <!-- Content Header (Page header) -->
    <section class="content-header">

        {{-- Подключение Вывод Сессии --}}
        @include("includes.session_alert") 

        <h1>
            Добавить категорию
            <small>приятные слова..</small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">

        
        {!! Form::open(["url" => route('menus.update', $menu->id), "method" => "PUT"]) !!}
            
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Меняем категорию</h3>
                </div>
                <div class="box-body">
                    <div class="col-md-6">

                        <div class="form-group">
                            <label for="exampleInputEmail1">Название</label>
                            <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{ $menu->title }}">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Префикс: {{ $menu->prefix }}/</label>
                            <input type="text" name="prefix" class="form-control" id="exampleInputEmail1" placeholder="" value="{{ $menu->prefix }}">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail3">
                                <input type="checkbox" {{ ($menu->active) ? "checked" : null }} name="active" id="exampleInputEmail3" class="minimal">
                            </label>
                            <label for="exampleInputEmail3">
                                Активный
                            </label>
                        </div>
                        
                    </div>

                    <div class="col-md-6">
                        
                        @foreach ($menu->categories as $mCategory)
                            <p>{{ env("APP_URL") . "/{" . $menu->prefix . "/" . $mCategory->prefix . "}"}}</p>
                        @endforeach
                        
                    </div>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <a href="{{ route('categories.index') }}" class="btn btn-default">Назад</a>
                    
                    {!! Form::submit("Изменить", ["class" => "btn btn-warning pull-right"]) !!}
                    
                    {{-- <button class="btn btn-warning pull-right">Изменить</button> --}}
                </div>
                <!-- /.box-footer-->
            </div>
            <!-- /.box -->
        
            
        {!! Form::close() !!}

    </section>
    <!-- /.content -->
@endsection

