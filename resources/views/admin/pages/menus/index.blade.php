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
                        <a href="{{ route('menus.create') }}" class="btn btn-success">Добавить</a>
                    </div>

                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                {{-- <th>Менью</th> --}}
                                <th>Название</th>
                                <th>Количества</th>
                                <th>Активный</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            @foreach ($menus as $key => $menu)
                                <tr>
                                    <td>{{ ++$key }}</td>
                                    {{-- <td>{{ $menu->categories->pluck("title") }} </td> --}}
                                    <td>{{ $menu->title }}</td>
                                    <td>{{ count($menu->categories) }}</td>
                                    <td>{{ $menu->active }}</td>
                                    <td>
                                        <a href="{{ route('menus.edit', $menu->id) }}" style="float:left; margin-right:5px;" class="btn btn-success">Редактировать</a>
                                        {{-- <a href="{{ route('menus.edit', $menu->id) }}" class="fa fa-pencil"></a> --}}
        
                                        {{-- <a class="fa fa-remove"> --}}
                                            {!! Form::open(["url" => route("menus.destroy", $menu->id), "method" => "DELETE"]) !!}
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

