
@extends('admin.layouts.admin_master')

@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
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
                    <th>Действия</th>
                    </tr>
                </thead>
                <tbody>

                    
                    @foreach ($users as $user)
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

                            <td><a href="edit.html" class="fa fa-pencil"></a> <a href="#" class="fa fa-remove"></a></td>
                        </tr>
                    @endforeach
                    
                    {{--  <tr>
                        <td>1</td>
                        <td>Рахим</td>
                        <td>rahim@marlindev.ru</td>
                        <td>
                            <img src="../assets/dist/img/photo1.png" alt="" class="img-responsive" width="150">
                        </td>
                        <td><a href="edit.html" class="fa fa-pencil"></a> <a href="#" class="fa fa-remove"></a></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Джеймс</td>
                        <td>james@example.com</td>
                        <td>
                            <img src="../assets/dist/img/photo2.png" alt="" class="img-responsive" width="150">
                        </td>
                        <td><a href="edit.html" class="fa fa-pencil"></a> <a href="#" class="fa fa-remove"></a></td>
                    </tr>  --}}
                </tfoot>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
      <!-- /.box -->

    </section>
    <!-- /.content -->
  </div>
@endsection
