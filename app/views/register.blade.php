@extends('layout.main')

@section('content')

	<style>

        /* http://css-tricks.com/perfect-full-page-background-image/ */
        #img-background {
            background: url(images/wall2.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 100%;
        }

        body{
        	margin: 0;
        	padding: 0;
        }

        .form-signin{
        	max-width: 370px;
        	padding: 15px;
        	margin: 0 auto;
        }
        	
        .title{
        	font-family:  "Abel", Arial, sans-serif;
        	font-size: 7em;
        	color: white;
        	margin-top: 70px;
        	text-align: center;
        	-webkit-text-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          		text-shadow: 0 3px 9px rgba(0, 0, 0, .5);
        }



	</style>

	<div id="img-background">
	
		<div class="container" >

				<p class="title"><b>h-ERP</b></p>    

			
			<div class="form-signin" ><!--  panel panel-default"> -->	

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

		<footer>
			<a href="{{ URL::route('login') }}" class="btn btn-primary"> {{Lang::get('messages.submit')}} </a>
			<a href="{{ URL::route('lang', array( 'es') ) }}" class="btn btn-default"> español </a>
			<a href="{{ URL::route('lang', array( 'en') ) }}" class="btn btn-default"> english </a>
	    </footer>

	</div>

@stop

