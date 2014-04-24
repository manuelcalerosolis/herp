@extends('layout.main')

{{ HTML::style('css/signin.css') }}

@section('content')

	<div class="container-fluid">

		<div clss="row">

			<div class="col-md-6 col-md-offset-3">

				@if(Session::has('errors'))
					<div class="alert alert-danger">
						@foreach ($errors->all() as $error)
							<p>{{$error}}</p>
						@endforeach
					</div>
				@endif

			    {{ Form::model($user, array( 'method' => 'PUT', 'route' => array( 'user.update', $user->id ))) }}

					<div class="form-group">
			    		{{ Form::label('email', '', array( 'class'=>'col-sm-2 control-label'))}}
			    		<div class="col-sm-10">
							{{ Form::email('email', null, array('class'=>'form-control')) }}
						</div>
					</div>

					<div class="form-group">
			    		{{ Form::label('name', '', array( 'class'=>'col-sm-2 control-label'))}}
			    		<div class="col-sm-10">
				    		{{ Form::text('name', null, array('class'=>'form-control')) }}
						</div>
					</div>

					<div class="form-group">
						{{ Form::label('active', '', array( 'class'=>'col-sm-2 control-label'))}}
	   					<div class="col-sm-10">
	   						<label>
								{{ Form::checkbox('active') }}
							</label>
	  					</div>					
					</div>

					<div class="form-group">

						<center class ='buttons'>
							{{ Form::submit('Save', array('class'=>'btn btn-primary')) }}
							<a href="{{ URL::previous() }}" class="btn btn-danger">Cancel
								<span class="glyphicon glyphicon-remove"></span>
							</a>
						</center>

					</div>

				{{ Form::close() }}

			</div>
		
		</div>

	</div>

@stop

