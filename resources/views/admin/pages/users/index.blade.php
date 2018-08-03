
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
                <a href="{{ route('users.create') }}" class="btn btn-success">Добавить</a>
            </div>
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>E-mail</th>
                    <th>Телфон</th>
                    <th>Аватар</th>
                    <th>Адрес</th>
                    <th>Роль</th>
                    <th>Действия</th>
                    </tr>
                </thead>
                <tbody>

                    @foreach ($users as $key => $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->lastname }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->phone }}</td>
                            <td>
                                <img src="{{ $user->getAvatar() }}" alt="{{ $user->getAvatar() }}" class="img-responsive" width="50">
                            </td>
                            <td>{{ $user->address }}</td>
                            <td>{{ ($user->getRole()) ? $user->getRole()->title : "Пусто" }}</td>

                            <td>
                                <a href="{{ route('users.edit', $user->id) }}" style="margin-bottom: 5px;" class="btn btn-success">Редактировать</a>

                                {!! Form::open(["url" => route("users.destroy", $user->id), "method" => "DELETE"]) !!}
                                    {{-- <a href="#" class="fa fa-remove"></a> --}}
                                    {{-- {!! Form::submit("Удалить", ["class" => "btn btn-danger fa fa-remove"]) !!} --}}
                                    {!! Form::submit(null, ["class" => "btn btn-danger"]) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                    
                </tfoot>
            </table>
                <div style="float: right;">
                    {{ $users->links() }}
                </div>
            </div>

            <!-- /.box-body -->
        </div>
    <!-- /.box -->

    </section>
    <!-- /.content -->
    {{-- </div> --}}
@endsection
