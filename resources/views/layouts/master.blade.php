<!DOCTYPE HTML>
<html>
	<head>
		<title>ShopList | Home</title>
		<link href="{{ asset('shoplist') }}/css/style.css" rel="stylesheet" type="text/css" media="all">
		{{-- <script src="{{ asset('shoplist') }}/js/js.js"></script> --}}

		<!-- jQuery (necessary for Bootstraps JavaScript plugins) -->
		<script src="{{ asset('shoplist') }}/js/jquery-1.11.0.min.js"></script>

		{{--  LAravel Token  --}}
		<meta name="csrf-token" id="token" content="{{ csrf_token() }}">

		<!-- Custom Theme files -->
		{{-- <link href="css/style.css" rel="stylesheet" type="text/css" media="all"/> --}}

		<!-- Custom Theme files -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<!--Google Fonts-->
		<link href='//fonts.googleapis.com/css?family=Hind:400,500,300,600,700' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'>

		{{--  Ajax  --}}
		<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

		<!-- start-smoth-scrolling -->
		{{-- <script type="text/javascript" src="js/move-top.js"></script> --}}
		{{-- <script type="text/javascript" src="js/easing.js"></script> --}}

		<script src="{{ asset('shoplist') }}/js/master.js"></script>


		<!-- //end-smoth-scrolling -->
		<script src="{{ asset('shoplist') }}/js/simpleCart.min.js"></script>
		<script src="{{ asset('shoplist') }}/js/bootstrap.min.js"></script>

		<!--flex slider-->
		<script defer src="{{ asset('shoplist') }}/js/jquery.flexslider.js"></script>



		<script type="text/javasctipt" src="{{ asset('js') }}/jQuery.js"></script>



	</head>
	<body>
		<!--header strat here-->
			@include("includes.header")
		<!--header end here-->

		{{-- Подключение Вывод Сессии --}}
		@include("includes.session_alert")

		<!--block-layer2 start here-->
			@if (Route::currentRouteName() == "index")
				<div class="blc-layer2">
					<div class="container">

						<div class="blc-layer2-main">
							<div class="col-md-6 blc-layer2-left">
								<h3>voluptatem sequi nesciunt.</h3>
								<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
							</div>
							<div class="col-md-6 blc-layer2-right">
								
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
			@endif
		<!--block-layer2 end here-->

		<!--home-block start here-->
			@yield('content')
		<!--home block end here-->

		<!--footer strat here-->
			@include("includes.footer")
		<!--footer end here-->
	</body>
</html>