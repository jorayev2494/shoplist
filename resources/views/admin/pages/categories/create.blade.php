
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

        
        {!! Form::open(["url" => route('categories.store'), "method" => "POST"]) !!}
            
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Меняем категорию</h3>
                </div>
                <div class="box-body">
                    <div class="col-md-6">

                        <div class="form-group">
                            <label>Меню</label>
                            <select name="menu" class="form-control select2 select2-hidden-accessible" style="width: 100%;" select2-hidden-accessible="">
                                
                                @foreach ($menus as $menu)
                                    <option value="{{ $menu->id }}">{{ $menu->title }}</option>
                                @endforeach
                                                                    
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Название</label>
                            <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{ old('title') }}">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Префикс: menuname/you_prefix</label>
                            <input type="text" name="prefix" class="form-control" id="exampleInputEmail1" placeholder="" value="{{ old('prefix') }}">
                        </div>
                    </div>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <a href="{{ route('categories.index') }}" class="btn btn-default">Назад</a>
                    
                    {!! Form::submit("Добавит", ["class" => "btn btn-success pull-right"]) !!}
                    
                    {{-- <button class="btn btn-warning pull-right">Изменить</button> --}}
                </div>
                <!-- /.box-footer-->
            </div>
            <!-- /.box -->
        
            
        {!! Form::close() !!}

    </section>
    <!-- /.content -->
@endsection

