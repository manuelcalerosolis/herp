@extends('layout.login')

@section('content')
	
	<div class="container" >

		<div class="col-md-4 col-md-offset-4 offset4 span4" ><!--  panel panel-default"> -->	

			<div class="row">

			    <h1>
					<p class="text-center">hERP</p>
			    </h1>


		
			    {{ Form::open(array('url' => 'login/check', 'role'=>'form')) }}
			    	
					{{ Form::email('email', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.email')))}}
					
					{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password'))) }}
					
					@if(Session::has('error_message'))
						<div class="alert alert-warning fade in">
  							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							{{ Session::get('error_message') }}
						</div>
					@endif

					{{ Form::submit(Lang::get('messages.submit'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

				{{ Form::close() }}

			</div>

		</div>

	</div>
	
	<footer>
		<a href="{{ URL::route('register') }}" class="btn btn-primary"> {{Lang::get('messages.register')}} </a>
		<a href="{{ URL::route('lang', array( 'es') ) }}" class="btn btn-default"> español </a>
		<a href="{{ URL::route('lang', array( 'en') ) }}" class="btn btn-default"> english </a>
    </footer>

@stop