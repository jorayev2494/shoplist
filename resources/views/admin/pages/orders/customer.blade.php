@extends('admin.layouts.admin_master')

@section('content')
    {{-- <div class="content-wrapper"> --}}
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
                    {{-- <div class="form-group">
                        <a href="create.html" class="btn btn-success">Добавить</a>
                    </div> --}}
 
                    
                     <h3>Имя заказчика: {{ $customer->name }}</h3>
                    <h3>Количества заказов ({{ count($customer->orders) }}) </h3>
                    <br>

                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Название</th>
                                <th>Модель</th>
                                <th>Картинка</th>
                                <th>Цена</th>
                                <th>Количества</th>
                                <th>Итого</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>

                        {{-- {{ dd($customer->orders[0]->tovar) }} --}}
                            
                            @foreach ($customer->orders as $id =>  $order)
                                <tr>
                                    <td>{{ ++$id }}</td>
                                    <td>{{ $order->tovar->name }}</td>
                                    <td>{{ $order->tovar->model }}</td>
                                    <td>
                                        <img src="{{ $order->tovar->getImage() }}" alt="{{ $order->tovar->getImage() }}" width="100">
                                    </td>
                                    <td>{{ $order->tovar->price }} $</td>
                                    <td>{{ $order->count }} (штк)</td>
                                    <td>{{ $order->sum }} $</td>
                                    <td>
                                        <a href="#" class="fa fa-pencil"></a>
                                        <a href="#" class="fa fa-remove"></a>
                                    </td>
                                </tr>
                            @endforeach

                            {{-- {{ dd($customer) }} --}}

                        </tbody>
                        <tfoot>

                                <tr>
                                    <td>Всего</td>
                                    <td> -- {{-- $order->tovar->name --}}</td>
                                    <td> -- {{-- $order->tovar->model --}}</td>
                                    <td> -- </td>
                                    <td> -- {{-- $order->sum --}}</td>
                                    <td>{{ $customer->cart_count }} (штк)</td>
                                    <td>{{ $customer->cart_sum }} $</td>
                                    <td> -- 
                                        {{-- <a href="edit.html" class="fa fa-pencil"></a>
                                        <a href="#" class="fa fa-remove"></a> --}}
                                    </td>
                                </tr>
                            
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

