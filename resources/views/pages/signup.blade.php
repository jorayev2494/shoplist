
@extends('layouts.master')


@section('content')
	<div class="signin">
		<div class="container">
			<div class="signin-main">
				<h1>@lang('langue.sign_up')</h1>
				<h2>{{ __("langue.informations") }}</h2>
				
				{!! Form::open(['use' => route('register'), "method" => "POST"]) !!}
				
					{{-- <input type="text" placeholder="Username"> --}}
					
					{!! Form::text("name", old('name'), ["placeholder" => "Username"]) !!}
					
					{{-- <input type="text" class="no-margin" placeholder="E-mail"> --}}
					
					{!! Form::text("email", old('email'), ["class" => "no-margin",'placeholder' => "E-mail"]) !!}

					{{-- <input type="password" placeholder="Password" required=""/> --}}
					
					{!! Form::password("password", ['placeholder' => "Password"]) !!}

					{{-- <input type="password" class="no-margin" placeholder="Confirm Password" required=""/> --}}
					
					{!! Form::password("password_confirmation", ["class" => "no-margin","placeholder" => "Confirm Password"]) !!}
					
					{{-- <span class="checkbox1">
					 <label class="checkbox"><input type="checkbox" name="" checked=""><i> </i>i agree terms of "use and" privacy</label>
				   </span> --}}

				   <a href="{{ route('password.request') }}">Вы забыли пороль?</a>

					<input type="submit" value="@lang('langue.send')">
				
				{!! Form::close() !!}
				
			</div>
		</div>
	</div>
@endsection

