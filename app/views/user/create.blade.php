@extends('layout.main')

{{ HTML::style('css/signin.css') }}

@section('content')

	<div class="container-fluid">

		<div clss="row">

			<div class="col-md-6 col-md-offset-3">

			    {{ Form::open( array( 'method' => 'PUT', 'route' => array( 'user.create' ))) }}

                {{ Field::text( 'name' ) }}

                {{ Form::submit('Save', array('class'=>'btn btn-primary')) }}

				{{ Form::close() }}

			</div>
		
		</div>

	</div>

@stop

