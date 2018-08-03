
@extends('layouts.master')


@section('content')
	<div class="ckeckout">
		<div class="container">
			<div class="ckeckout-top">
			<div class=" cart-items heading">
			 <h1>My Shopping Bag (3)</h1>
				<script>$(document).ready(function(c) {
					$('.close1').on('click', function(c){
						$('.cart-header').fadeOut('slow', function(c){
							$('.cart-header').remove();
						});
						});	  
					});
			   </script>
			<script>$(document).ready(function(c) {
					$('.close2').on('click', function(c){
						$('.cart-header1').fadeOut('slow', function(c){
							$('.cart-header1').remove();
						});
						});	  
					});
			   </script>
			   <script>$(document).ready(function(c) {
					$('.close3').on('click', function(c){
						$('.cart-header2').fadeOut('slow', function(c){
							$('.cart-header2').remove();
						});
						});	  
					});
			   </script>
				
			<div class="in-check" >
				<ul class="unit">
					<li><span>Item</span></li>
					<li><span>Product Name</span></li>		
					<li><span>Unit Price</span></li>
					<li><span>Delivery Details</span></li>
					<li> </li>
					<div class="clearfix"> </div>
				</ul>
				<ul class="cart-header simpleCart_shelfItem">
					<div class="close1"> </div>
						<li class="ring-in"><a href="single.html" ><img src="images/c.jpg" class="img-responsive" alt=""></a>
						</li>
						<li><span>Bracelets</span></li>
						<li><span class="item_price">$ 290.00</span></li>
						<li> <a href="#" class="add-cart cart-check item_add">Add to cart</a></li>				
					<div class="clearfix"> </div>
				</ul>
				<ul class=" cart-header1 simpleCart_shelfItem">
					<div class="close2"> </div>
						<li class="ring-in"><a href="single.html" ><img src="images/c2.jpg" class="img-responsive" alt=""></a>
						</li>
						<li><span>Watches</span></li>
						<li><span class="item_price">$ 300.00</span></li>
						<li> <a href="#" class="add-cart cart-check item_add">Add to cart</a></li>						
						<div class="clearfix"> </div>
				</ul>
				<ul class="cart-header2 simpleCart_shelfItem">
					<div class="close3"> </div>
						<li class="ring-in"><a href="single.html" ><img src="images/c3.jpg" class="img-responsive" alt=""></a>
						</li>
						<li><span>Handbag</span></li>
						<li><span class="item_price">$ 360.00</span></li>
						<li> <a href="#" class="add-cart cart-check item_add">Add to cart</a></li>						
						<div class="clearfix"> </div>
				</ul>
			</div>
			</div>  
		 </div>
		</div>
	</div>
@endsection
