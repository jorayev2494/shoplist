@extends('layouts.master')

@section('content')
<div class="single">
	<div class="container">
			<div class="single-main">
				<div class="single-top-main">
					<div class="col-md-5 single-top">	
						<div class="flexslider">
							<ul class="slides">

								{{-- {{ dd($tovar->getImage()) }} --}}

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

						{{-- {{ session()->flush() }} --}}
						{{-- {{ dd(session()->all())	 }} --}}
						{{-- {{ dd(session()->get("cart.3.qty"))	 }} --}}
						
						{{-- <h5 id="idTovar" style="display: none;">{{ $tovar->id }}</h5> --}}
						<h2>Undercover</h2>
						<h1>{{ $tovar->name }}</h1>
						<h3>{{ $tovar->model }}</h3>
						<h6 class="item_price">$ <span id="price">{{ $tovar->price }}</span></h6>			
						<p>{{ $tovar->description }}</p>
						<br><br>
						{{-- <h4>Size Charts</h4> --}}
						<ul class="bann-btns">
							{{-- <li><select class="bann-size">
								<option value="select your location">Size</option>
								<option value="saab">Small</option>
								<option value="fiat">Medium</option>
								<option value="audi">Large</option>
							</select>
							</li> --}}
							<li><a class="item_add" data-id="{{ $tovar->id }}" id="add_to_cart">Add To Cart</a></li>					
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

