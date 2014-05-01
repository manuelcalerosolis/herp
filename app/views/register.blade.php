@extends('layout.login')

@section('content')

	<div class="container" >

		<div class="col-md-4 col-md-offset-4 offset4 span4" ><!--  panel panel-default"> -->	

			<div class="row">

			    
					<img src="images/captura2.png">
			    

			
			    {{ Form::open(array('url' => 'register/check', 'role'=>'form')) }}
			    	
					{{ Form::email('email', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.email')))}}
					
			    	{{ Form::text('name', '', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.name')))}}

					{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password'))) }}

					{{ Form::password('password_confirmation', array('class'=>'form-control', 'placeholder'=>Lang::get('messages.password_confirmation'))) }}

					@if(Session::has('errors'))
						<div class="alert alert-warning alert-dismissable">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
							@foreach ($errors->all() as $error)
								<p>{{$error}}</p>
							@endforeach
						</div>
					@endif
					
					{{ Form::submit(Lang::get('messages.register'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

				{{ Form::close() }}

			</div>

		</div>

	</div>

	<footer>
		<a href="{{ URL::route('login') }}" class="btn btn-primary"> {{Lang::get('messages.submit')}} </a>
		<a href="{{ URL::route('lang', array( 'es') ) }}" class="btn btn-default"> español </a>
		<a href="{{ URL::route('lang', array( 'en') ) }}" class="btn btn-default"> english </a>
    </footer>

@stop

