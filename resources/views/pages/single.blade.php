@extends('layouts.master')

@section('content')
	<div class="single">
		<div class="container">
			<div class="single-main">
				<div class="single-top-main">
					<div class="col-md-5 single-top">	
						<div class="flexslider">
							<ul class="slides">

								<li data-thumb="{{ $tovar->getImage() }}">
									<div class="thumb-image"> 
										<img src="{{ $tovar->getImage() }}" data-imagezoom="true" alt="{{ $tovar->getImage() }}" class="img-responsive"> 
									</div>
								</li>

								<li data-thumb="{{ $tovar->getImage() }}">
									<div class="thumb-image"> 
										<img src="{{ $tovar->getImage() }}" data-imagezoom="true" alt="{{ $tovar->getImage() }}" class="img-responsive"> 
									</div>
								</li>

								<li data-thumb="{{ $tovar->getImage() }}">
									<div class="thumb-image"> 
										<img src="{{ $tovar->getImage() }}" data-imagezoom="true" alt="{{ $tovar->getImage() }}" class="img-responsive"> 
									</div>
								</li> 

							</ul>
						</div>
					</div>

					<div class="col-md-7 single-top-left simpleCart_shelfItem">
						<h2>Undercover</h2>
						<h1>{{ $tovar->name }}</h1>
						<h3>{{ $tovar->model }}</h3>
						<h6 class="item_price">$ <span id="price" data-price="{{ $tovar->price }}">{{ $tovar->price }}</span></h6>			
						<p>{{ $tovar->description }}</p>
						<br><br>
						<ul class="bann-btns">
							<li>
								<button class="add-cart item_add btn-buy" data-id="{{ $tovar->id }}" id="add_to_cart">@lang("langue.buy")</button>
							</li>					
						</ul>
					</div>
				<div class="clearfix"> </div>
			</div>

				{{-- Предлогать товары под этой категории --}}
				@include('includes.singlepage')

			</div>
		</div>
	</div>
@endsection

