@extends('admin.layouts.admin_master')

@section('content')
    {{-- <div class="content-wrapper"> --}}
        <!-- Content Header (Page header) -->
        <section class="content-header">
            {{-- Подключение Вывод Сессии --}}
            @include("includes.session_alert")  

            <h1>
            Blank page
            <small>it all starts here</small>
            </h1>
            <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
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
                        <a href="{{ route('categories.create') }}" class="btn btn-success">Добавить</a>
                    </div>

                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Менью</th>
                                <th>Название</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            @foreach ($categories as $key => $category)
                                <tr>
                                    <td>{{ ++$key }}</td>
                                    <td>{{ $category->menu->title }} /</td>
                                    <td>{{ $category->title }}</td>
                                    <td>
                                        <a href="{{ route('categories.edit', $category->id) }}" style="margin-right: 5px; float: left;" class="btn btn-success">Редактировать</a>
        
                                        {{-- <a class="fa fa-remove"> --}}
                                            {!! Form::open(["url" => route("categories.destroy", $category->id), "method" => "DELETE"]) !!}
                                                {{-- <a href="#" class="fa fa-remove"></a> --}}
                                                {{-- {!! Form::submit("Удалить", ["class" => "btn btn-danger fa fa-remove"]) !!} --}}
                                                {{-- {!! Form::submit(null, ["class" => "fa fa-remove"]) !!} --}}
                                                <button class="btn btn-danger" type="submit">Удалить</button>
                                            {!! Form::close() !!}
                                        {{-- </a> --}}
                                    </td>
                                </tr>
                            @endforeach
                            
                        </tfoot>
                    </table>

                </div>
                <!-- /.box-body -->

            </div>
            <!-- /.box -->

        </section>
        <!-- /.content -->
    {{-- </div> --}}
@endsection

