@extends('layout.menu')

@section('title')
	Contacts
@stop

@section('subtitle')
	listado de contactos
@stop

@section('content')

	<div class="col-xs-12">	

		{{ Form::open(array('url' => '#', 'role'=>'form')) }}

			<div class="col-xs-5">

				<h4>{{ Lang::get('contacts.contact_name') }}</h4>
				
				{{ Form::text('name', '', array('class'=>'form-control')) }}

				<h4>{{ Lang::get('contacts.fiscal_number') }}</h4>
				
				{{ Form::text('fiscal_number', '', array('class'=>'form-control')) }}		

			</div>





		{{ Form::close() }}

	</div>

@stop