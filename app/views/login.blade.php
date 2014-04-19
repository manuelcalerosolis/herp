@extends('layout-login')

@section('content')
	
	<div class="container" >

		<div class="col-md-6 col-md-offset-3 offset3 span6" ><!--  panel panel-default"> -->	

			<div class="row">

			    <h1>
					<p class="text-center">hERP</p>
			    </h1>

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

		</div>

	</div>

	<div id="footer">
      	<div class="container">
			<a href="{{ URL::route('register') }}" class="btn btn-primary"> {{Lang::get('messages.register')}} </a>
			<a href="{{ URL::route('lang', array( 'es') ) }}" class="btn btn-default"> español </a>
			<a href="{{ URL::route('lang', array( 'en') ) }}" class="btn btn-default"> english </a>
      	</div>
    </div>

@stop