@extends('layouts.master')

@section('content')
	<div class="product">
		<div class="container">
			<div class="product-main">
				{{-- <div class=" product-menu-bar"> --}}
					
					{{-- Подкючение Сайдбар --}}
					{{-- @include("includes.sidebar") --}}
					
				{{-- </div>	 --}}
				<div class="col-md-12 product-block">

					@foreach ($tovars as $tovar)
						<div class="col-md-3 home-grid">
							<div class="home-product-main">
								<div class="home-product-top" style="height: 245px;">
									<a href="{{ route('show.single', ['category' => $tovar->category->prefix, $tovar->id]) }}">
										<img src="{{ $tovar->getImage() }}" alt="{{ $tovar->getImage() }}" class="img-responsive zoom-img">
									</a>
								</div>
								<div class="home-product-bottom">
									<h3>
										{{-- {{ dd( $tovar->category) }} --}}
										<a href="{{ route('show.single', ['category' => $tovar->category->prefix, $tovar->id]) }}">{{ $tovar->name }}</a>
									</h3>
									<p>{{ $tovar->model }}</p>						
								</div>
								<div class="srch">
									<span>$ {{ $tovar->price }}</span>
								</div>
							</div>
						</div>

					@endforeach
						
						<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	</div>
@endsection

