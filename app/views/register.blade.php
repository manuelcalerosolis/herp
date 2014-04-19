@extends('layout-login')

@section('content')

	<div class="container" >

		<div class="col-md-6 col-md-offset-3 offset3 span6" ><!--  panel panel-default"> -->	

			<div class="row">

			    <h1>
					<p class="text-center">hERP</p>
			    </h1>
	
				@if(Session::has('errors'))
					<div class="alert alert-danger form-signin">
						@foreach ($errors->all() as $error)
							<p>{{$error}}</p>
						@endforeach
					</div>
				@endif
			
			    {{ Form::open(array('url' => 'register/check', 'class'=>'form-signin', 'role'=>'form')) }}
			    	
					{{ Form::email('email', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.email')))}}
					
			    	{{ Form::text('name', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.name')))}}

					{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password'))) }}

					{{ Form::password('password_confirmation', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password_confirmation'))) }}
					
					{{ Form::submit(Lang::get('messages.register'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

				{{ Form::close() }}

			</div>

		</div>

	</div>

<!-- 	<div class="footer"> 
		<a href="{{ URL::route('login')}}" class="btn btn-primary"> {{Lang::get('messages.submit')}} </a>
	</div>
 -->
	<div id="footer">
      	<div class="container">
			<a href="{{ URL::route('login') }}" class="btn btn-primary"> {{Lang::get('messages.submit')}} </a>
			<a href="{{ URL::route('lang', array( 'es') ) }}" class="btn btn-default"> español </a>
			<a href="{{ URL::route('lang', array( 'en') ) }}" class="btn btn-default"> english </a>
      	</div>
    </div>

@stop

