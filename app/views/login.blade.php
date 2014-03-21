@extends('layout')

@section('content')
    {{ Form::open(array('url' => 'login/check')) }}
    	
		{{ Form::text('email', 'demo@demo.com') }}
		{{ Form::password('password') }}

		{{ Form::submit('Iniciar sesión') }}

	{{ Form::close() }}
@stop