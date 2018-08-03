
@extends('layouts.master')


@section('content')
	<div class="login">
		<div class="container">
			<div class="login-main">
				  <h1>Login</h1>
			  <div class="col-md-6 login-left">
				<h2>Existing User</h2>
				
				{!! Form::open(["url" => route('login'), "method" => "POST"]) !!}
				
					{!! Form::text("email", old('email'), ["placeholder" => "Email"]) !!}
					{{-- <input type="text" placeholder="Username" required=""> --}}
					{!! Form::password("password", ["placeholder" => "Password"]) !!}
					{{-- <input type="password" placeholder="Password" required=""> --}}<input type="submit" value="Login">
				
				{!! Form::close() !!}
				
			  </div>
			  <div class="col-md-6 login-right">
				   <h3>New User? Create an Account</h3>
				   <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. and expound the actual teachings of the great.</p>
				 <a href="{{ route('register') }}" class="login-btn">Create an Account </a>
			  </div>
			  <div class="clearfix"> </div>
			</div>
		</div>
	</div>
@endsection

