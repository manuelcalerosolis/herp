@extends('layout')

{{ HTML::style('css/signin.css') }}

@section('content')
	
	<div class="container">

		<div class="col-md-6 col-md-offset-3 panel panel-default">	

			<div class="row">

		    <h1>HERP</h1>

			<div>
				<a href="lang/es"> español </a>
				<a href="lang/en"> english </a>
			</div>

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

			<div class="footer"> 
				<a href="{{ URL::route('register')}}" class="btn btn-primary"> {{Lang::get('messages.register')}} </a>
			</div>
			
			</div>

		</div>

	</div>

@stop