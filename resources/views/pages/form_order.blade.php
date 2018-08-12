
@extends('layouts.master')


@section('content')

<div class="ckeckout">
    <div class="container">
        <div class="ckeckout-top">
            <div class=" cart-items heading">
                
                <center>
                    <h1>Оформлени заказ.</h1>
                </center> 
                
                <a href="{{ route('cart.index') }}" class="add-cart cart-check item_add">&larr; @lang('langue.back') </a>
                <div class="clearfix"></div>

                <div class="in-check">
                    
                    {!! Form::open(['url' => route('cart.form'), 'method' => 'POST']) !!}
                    
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">{{ trans('langue.name') }}</label>
                                {!! Form::text("name", old("name"), ["class" => "form-control", "id" => "name", "placeholder" => "Андрей"]) !!}
                                {{--  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">  --}}
                            </div>

                            <div class="form-group col-md-6">
                                <label for="email">Email</label>
                                {!! Form::email("email", old('email'), ["class" => "form-control", "id" => "email", "placeholder" => "user@user.com"]) !!}
                                {{--  <input type="email" class="form-control" id="inputEmail4" placeholder="Email">  --}}
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="phone">@lang('langue.phone')</label>
                                {!! Form::text("phone", old('phone'), ["class" => "form-control", "id" => "phone", "placeholder" => "+98 (095) 123 45 67"]) !!}
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">@lang('langue.address')</label>
                                {!! Form::text("address", old("address"), ["class" => "form-control", "id" => "address", "placeholder" => "Ukraine"]) !!}
                            </div>
                            {{--  <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>  --}}
                        </div>

                        <div class="form-row">

                            {{--  <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                    Check me out
                                    </label>
                                </div>
                            </div>  --}}

                            <div class="form-group col-md-2">
                                <button type="submit" style="border: none;" class="add-cart cart-check">@lang('langue.to_order')</button>
                            </div>
                        </div>

                    {!! Form::close() !!}

                </div>

                <div class="form-row col-md" style="float: right;" >
                    <h1>Итого: <span id="cart_total_cart">0</span> $</h1>
                    {{--  <h1>Count: <span id="cart_count_cart">0</span></h1>  --}}
                </div>

            </div>
        </div>
    </div>
</div>
@endsection

