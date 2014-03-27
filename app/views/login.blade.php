@extends('layout')

{{ HTML::style('css/signin.css') }}

@section('content')
	
	<div class="container">
	
		@if(Session::has('error_message'))
			<div class="alert alert-danger">
				{{ Session::get('error_message') }}
			</div>
		@endif
	
	    {{ Form::open(array('url' => 'login/check', 'class'=>'form-signin', 'role'=>'form')) }}
	    	
			{{ Form::email('email', '', array('class'=>'form-control', 'placeholder'=>'Correo electrónico')) }}
			
			{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>'Contraseña')) }}
			
			{{ Form::submit('Iniciar sesión', array('class'=>'btn btn-lg btn-primary btn-block')) }}

		{{ Form::close() }}

	</div>

@stop