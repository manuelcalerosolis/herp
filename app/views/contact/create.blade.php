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

<<<<<<< HEAD
=======
@section('content')

	<div class="col-xs-12">	

		{{ Form::open(array('route' => 'contact.store', 'role'=>'form')) }}

			<div class="col-xs-5">

				<h4>{{ Lang::get('contacts.contact_name') }}</h4>
				
				{{ Form::text('name', '', array('class'=>'form-control')) }}

				<h4>{{ Lang::get('contacts.fiscal_number') }}</h4>
				
				{{ Form::text('fiscal_number', '', array('class'=>'form-control')) }}

				@if(Session::has('errors'))
					<div class="alert alert-warning alert-dismissable">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						@foreach ($errors->all() as $error)
							<p>{{$error}}</p>
						@endforeach
					</div>
				@endif

				{{ Form::submit(Lang::get('contacts.create'), array('class'=>'btn btn-lg btn-primary btn-floatR')) }}
				
			</div>

		{{ Form::close() }}

	</div>

@stop
>>>>>>> origin/master
