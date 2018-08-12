@extends('layouts.master')

@section('content')
	<div class="ckeckout">
		<div class="container">

			@include("includes.session_alert")

			<div class="ckeckout-top">
				<div class=" cart-items heading">
					{{--  <h1>My Shopping Bag ({{ $cart ? count($cart) : 0 }}) <span id="cart_total"></span> </h1>  --}}
					<h1>Total: <span id="cart_total_cart">0 $</span></h1>
					<h1>Count: <span id="cart_count_cart">0</span></h1>

					{{--  <script>$(document).ready(function(c) {
						$('.close1').on('click', function(c){
							$('.cart-header').fadeOut('slow', function(c){
								$('.cart-header').remove();
							});
							});	  
						});
					</script> --}}
						
					<div class="in-check">
					
						<ul class="unit" style="margin-bottom: 1.5em;">
							<li><span>{{ trans('langue.image') }}</span></li>
							<li><span> @lang("langue.product_name") </span></li>		
							<li><span>{{ trans('langue.price') }}</span></li> {{-- Unit Price --}}
							<li><span>{{ trans('langue.count') }}</span></li>
							<li><span>{{ trans('langue.total') }}</span></li>
							<li style="width: 17%;"><span>{{ trans('langue.add_to_cart') }}</span></li>
							<li></li>
							<div class="clearfix"></div>
						</ul>

						@if (!empty($cart))

							@foreach ($cart as $id => $tovar)

								<ul id="del-tovar-{{ $tovar['info']->id }}" class="cart-header simpleCart_shelfItem">
									<div data-id="{{ $tovar['info']->id }}" class="btn-del"></div>
									
										<li class="ring-in">
											<a href="single.html">
												<img src="{{ $tovar['info']->getImage() }}" class="img-responsive" alt="{{ $tovar['info']->getImage() }}" width="90" height="90">
											</a>
										</li>
										<li><span>{{ $tovar['info']->name }}</span></li>
										<li>
											<span class="item_price" id="price" data-price="{{ $tovar['info']->price }}" >$ {{ $tovar['info']->price }}</span>
										</li>
										<li>
											<span>
												<input type="text" name="count" id="count_tov" value="{{ $tovar['count'] }}">
											</span>
										</li>
										<li>
											<span class="item_price" id="cart_tovar_summ" data-summa="{{ $tovar['summa'] }}" >$ {{ $tovar['summa'] }}</span>
										</li>
										<li>
											<button data-id="{{ $tovar['info']->id }}" class="add-cart cart-check item_add btn-buy">Add to cart</button>
										</li>
										
									<div class="clearfix"></div>
								</ul>
											
							@endforeach

							<a href="{{ route('cart.order') }}" data-id="{{ $tovar['info']->id }}" class="add-cart" style="float: right;" >@lang('langue.place_an_order') &rarr; </a>
							
						@else

							<center style="margin: 80px 0;">
								<h1>Корзина пусто!</h1>
							</center>
							
						@endif

					</div>
				</div>  
		 	</div>
		</div>
	</div>
@endsection
