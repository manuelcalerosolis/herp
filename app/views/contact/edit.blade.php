@extends('layout.menu')

@section('ico')
	<i class="fa fa-user"></i>
@stop

@section('title')
	{{ Lang::get('contacts.contact')}}
@stop

@section('subtitle')
	{{ Lang::get('contacts.create')}}
@stop

@section('content')

	<div class="col-xs-12">	

		{{ Form::open(array('url' => 'contact/'. $contact->id, 'role'=>'form')) }}

			<div class="col-xs-5">

				@if(Session::has('errors'))
					<div class="alert alert-warning alert-dismissable">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						@foreach ($errors->all() as $error)
							<p>{{$error}}</p>
						@endforeach
					</div>
				@endif

				<h4>{{ Lang::get('contacts.contact_name') }}</h4>
				
				{{ Form::text('name', $contact->name, array('class'=>'form-control')) }}

				<h4>{{ Lang::get('contacts.fiscal_number') }}</h4>
				
				{{ Form::text('fiscal_number', $contact->fiscal_number, array('class'=>'form-control')) }}

				{{ Form::submit(Lang::get('contacts.edit'), array('id'=>'btn-margin', 'class'=>'btn btn-lg btn-primary pull-right')) }}

			</div>

		{{ Form::close() }}

	</div>

@stop