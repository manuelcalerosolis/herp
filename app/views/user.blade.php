@extends('layout')

{{ HTML::style('css/signin.css') }}

@section('content')

	<div class="container">
	
		@if(Session::has('errors'))
			<div class="alert alert-danger">
				<p>{{$errors->first('name')}}</p>
			</div>
		@endif
	
	    {{ Form::model($user, array( 'method' => 'PUT', 'route' => array( 'user.update', $user->id ))) }}
	    	
			{{ Form::email('email', null, array('class'=>'form-control')) }}
			
	    	{{ Form::text('name', null, array('class'=>'form-control')) }}

			{{ Form::text('password', null, array('class'=>'form-control')) }}

			{{ Form::submit(Lang::get('messages.register'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

		{{ Form::close() }}

	</div>

@stop

