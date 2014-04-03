@extends('layout')

{{ HTML::style('css/signin.css') }}

@section('content')
	<div>
		<a href="lang/es" ><img src = "..\vendor\swiftmailer\swiftmailer\test-suite\templates\sweety\images\spain.jpg" /></a>
		<a href="lang/en"> english </a>
		{{ App::getLocale()}}
	</div>
	
	<div class="container">
	
		@if(Session::has('error_message'))
			<div class="alert alert-danger">
				{{ Session::get('error_message') }}
			</div>
		@endif
	
	    {{ Form::open(array('url' => 'login/check', 'class'=>'form-signin', 'role'=>'form')) }}
	    	
			{{ Form::email('email', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.email')))}}
			
			{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password'))) }}
			
			{{ Form::submit(Lang::get('messages.submit'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

		{{ Form::close() }}

	</div>

	<div class="footer"> 
		<a href="register" class="btn btn-primary"> {{Lang::get('messages.register')}} </a>
	</div>

@stop