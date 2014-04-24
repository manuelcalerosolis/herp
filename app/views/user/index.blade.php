@extends('layout.main')

@section('content')

  	<h1>Lista de usuarios</h1>
  
  	<p>
    	<a href="{{ route('user.create') }}" class="btn btn-primary">Crear un nuevo usuario</a>
  	</p>

	<div class="bs-example">
    	<div class="table-responsive">
      		<table class="table">
        		<thead>
          			<tr>
			            <th>

							Name

							<a href="{{route('user.index', array('sort' => 'name', 'order' => 'asc'))}}">
								<span class="glyphicon glyphicon-chevron-up" ></span>
							</a>

							<a href="{{route('user.index', array('sort' => 'name', 'order' => 'desc'))}}">
								<span class="glyphicon glyphicon-chevron-down" ></span>
							</a>

			            </th>
	        		    <th>
							Mail

							<a href="{{route('user.index', array('sort' => 'email', 'order' => 'asc'))}}">
								<span class="glyphicon glyphicon-chevron-up" ></span>
							</a>

							<a href="{{route('user.index', array('sort' => 'email', 'order' => 'desc'))}}">
								<span class="glyphicon glyphicon-chevron-down" ></span>
							</a>

	        		    </th>
	        		    <th>Active</th>
			            <th></th>
	          		</tr>
	        	</thead>
	        
	        	<tbody>
				    @foreach ($users as $user)
				    <tr>
				        <td>{{ $user->name }}</td>
				        <td>{{ $user->email }}</td>
				        <td>{{ $user->getTextActive() }}</td>
				        <td>
				        	<a href="{{ route('user.edit', $user->id) }}" class="btn btn-primary">
								<span class="glyphicon glyphicon-pencil"></span>
				        	</a>
				        	<a href="{{ route('user.destroy', $user->id) }}" class="btn btn-danger">
								<span class="glyphicon glyphicon-remove"></span>
				        	</a>
				        </td>
				    </tr>
				    @endforeach
	    		</tbody>
			</table>
	    </div><!-- /.table-responsive -->
  	</div>  	

@stop

