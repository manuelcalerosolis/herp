<h1>Hola</h1>

<!-- 
@extends('layout.menu')

@section('title')
	Contacts
@stop

@section('subtitle')
	listado de contactos
@stop

@section('content')
	

	{{ Form::open(array('url' => 'contact/create', 'role'=>'form')) }}
		
		{{ Form::text('name', '', array('class'=>'form-control', 'placeholder'=>Lang::get('contacts.contact_name')))}}
		
		{{ Form::text('fiscal_number', array('class'=>'form-control', 'placeholder'=>Lang::get('contacts.fiscal_number'))) }}
	

		{{ Form::submit(Lang::get('messages.submit'), array('class'=>'btn btn-lg btn-primary btn-block')) }}

	{{ Form::close() }}

@stop -->