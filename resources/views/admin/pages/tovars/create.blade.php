
@extends('admin.layouts.admin_master')


@section('content')

    <!-- Content Header (Page header) -->
    <section class="content-header">

        {{-- Подключение Вывод Сессии --}}
        @include("includes.session_alert")

        <h1>
            Добавить статью
            <small>приятные слова..</small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">

            
            {!! Form::open(["url" => route('tovars.store'), "method" => "POST", "enctype"=>"multipart/form-data"]) !!}

                <div class="box-header with-border">
                    <h3 class="box-title">Добавляем статью</h3>
                </div>
                
                <div class="box-body">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Название</label>
                            <input type="text" name="name" class="form-control" id="exampleInputEmail1" name="{{ old('name') }}">
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleInputEmail1">Модель</label>
                            <input type="text" name="model" class="form-control" id="exampleInputEmail1" name="{{ old('model') }}">
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleInputFile">Картинка товара</label>
                            <input type="file" name="image" id="exampleInputFile">
                        </div>
                        
                        <div class="form-group">
                            <label>Категория</label>
                            <select name="category" class="form-control select2" style="width: 100%;">

                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->title }}</option>
                                @endforeach
                                
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Цена</label>
                            <input type="text" name="price" class="form-control" id="exampleInputEmail1" name="{{ old('price') }}">
                        </div>

                        <!-- checkbox -->
                        <div class="form-group">
                            <label>
                                <input type="checkbox" checked name="active" class="minimal">
                            </label>
                            <label>
                                Активный
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="description">Описание товара</label>
                            <textarea name="description" id="description" cols="30" rows="10" class="form-control">{{ old("description") }}</textarea>
                        </div>
                    </div>
                </div>
                
                <!-- /.box-body -->
                <div class="box-footer">
                    <a href="{{ route('tovars.index') }}" class="btn btn-default">Назад</a>
                    
                    {!! Form::submit("Добавить", ["class" => "btn btn-success pull-right"]) !!}
                    
                    {{-- <button class="btn btn-success pull-right">Добавить</button> --}}
                </div>
                <!-- /.box-footer-->
            
            {!! Form::close() !!}
            
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
    
@endsection

