@extends('admin.layouts.admin_master')

@section('content')
    <!-- Content Header (Page header) -->
    <section class="content-header">

        {{-- Подключение Вывод Сессии --}}
        @include("includes.session_alert")

        <h1>
            Blank page
            <small>it all starts here</small>
        </h1>
        <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">Blank page</li>
        </ol>
    </section>
    
    <!-- Main content -->
    <section class="content">
    
        <!-- Default box -->
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Листинг сущности</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="form-group">
                    <a href="{{ route('tovars.create') }}" class="btn btn-success">Добавить</a>
                </div>
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Название</th>
                            <th>Модель</th>
                            <th>Категория</th>
                            <th>Описание</th>
                            <th>Картинка</th>
                            <th>Активный</th>
                            <th>Цена</th>
                            <th>Действия</th>
                        </tr>
                    </thead>

                    <tbody>

                        @foreach($tovars as $tovar)
                            <tr>
                                <td>{{ $tovar->id }}</td>
                                <td>{{ $tovar->name }}</td>
                                <td>{{ $tovar->model }}</td>
                                <td>{{ $tovar->category->title }}</td>
                                <td>{{ $tovar->description }}</td>
                                <td>
                                    <img src="{{ $tovar->getImage() }}" alt="{{ $tovar->getImage() }}" width="75">
                                </td>
                                <td>{{ $tovar->active }}</td>
                                <td>{{ $tovar->price }}</td>
                                <td>
                                    <a href="{{ route('tovars.edit', $tovar->id) }}" class="fa fa-pencil"></a>

                                    {!! Form::open(["url" => route("tovars.destroy", $tovar->id), "method" => "DELETE"]) !!}
                                        {{-- <a href="#" class="fa fa-remove"></a> --}}
                                        {{-- {!! Form::submit("Удалить", ["class" => "btn btn-danger fa fa-remove"]) !!} --}}
                                        {!! Form::submit(null, ["class" => "fa fa-remove"]) !!}
                                    {!! Form::close() !!}
                                </td>
                            </tr>   
                        @endforeach
                        
                    </tfoot>
                </table>
                <div style="float: right;">
                    {{ $tovars->links() }}
                </div>
            </div>
            <!-- /.box-body -->
            </div>
        <!-- /.box -->
    
    </section>
    <!-- /.content -->
@endsection

