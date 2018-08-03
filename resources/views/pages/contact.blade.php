@extends('layouts.master')

@section('content')
	<div class="contact">
		<div class="container">
			<div class="contact-main">

				<div id='msg'>
					This message will be replaced using Ajax.
					Click the button to replace the message.
				</div>
				<button class="btn btn-warning" id="getRequest">Test Ajax</button>
				{{--  {!! Form::button('Replace Message',['onClick'=>'getMessage()']) !!}  --}}

				{{-- Подключение Вывод Сессии --}}
				@include("includes.session_alert")  
				
				<div class="contact-top">
					<h1>Contact Us</h1>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Cicero are reproduced.</p>
				</div>
				<div class="col-md-6 contact-left">
					<h2>Information</h2>
					<h4>Cicero are also reproduced in their exact original</h4>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English.</p>
					<ul>
						<li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"> </span>Professor at Hampden-Sydney</li>
						<li><span class="glyphicon glyphicon-phone" aria-hidden="true"> </span>+1284 485 978</li>			    	
						<li><span class="glyphicon glyphicon-envelope" aria-hidden="true"> </span><a href="mailto:info@example.com">@example.com</a></li>
					</ul>
				</div>
				<div class="col-md-6 contact-right">
					<h3>Feedback</h3>
				
					{!! Form::open(["url" => route('contact'), "method" => "POST"]) !!}
						
						{!! Form::text("name", old('name')) !!}
						
						{!! Form::text('email', old('email')) !!}
						
						{!! Form::textarea('message', old('message'), ['placeholder' => 'Message']) !!}
						
						{!! Form::submit(trans('langue.send')) !!}
					
					{!! Form::close() !!}

				</div>
			  <div class="clearfix"> </div>
			</div>
		</div>
	</div>
@endsection

