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
    
            {{-- {{ dd($orders[0]->customer) }} --}}

            <!-- Default box -->
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Листинг сущности</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="form-group">
                        <a href="create.html" class="btn btn-success">Добавить</a>
                    </div>
                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Заказчик</th>
                                <th>Email</th>
                                <th>Кол-во</th>
                                <th>Сумма</th>
                                <th>Действия</th>
                                {{-- <th>Заказчик</th> --}}
                                {{-- <th>Товар</th> --}}
                                {{-- <th>Цена на ед</th> --}}
                            </tr>
                        </thead>
                        <tbody>

                                {{-- {{ dd($customers[16]->orders) }} --}}
                            @foreach ($customers as $id => $customer)
                                {{-- {{ dd($customer[16]->orders) }} --}}
                                <tr>
                                    <td>{{ ++$id }}</td>
                                    <td>
                                        <a href="{{ route('orders.show', ['show' => $customer->id]) }}">{{ $customer->name }}</a>
                                    </td>
                                    <td>{{ $customer->email }}</td>
                                    <td>{{ $customer->cart_count }} (штк)</td>
                                    <td>{{ $customer->cart_sum }} $</td>
                                    {{-- <td>{{ $customer->sum }}</td> --}}
                                    <td>
                                        <a href="#" class="fa fa-thumbs-o-up"></a>
                                        <a href="#" class="fa fa-remove"></a>
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

