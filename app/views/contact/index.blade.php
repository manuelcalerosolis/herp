@extends('layout.menu')

@section('openForm')
    {{ Form::open(array('route' => 'contact.delete', 'id' => 'idForm', 'role' => 'form' )) }}
@stop

@section('closeForm')
    {{ Form::close() }}
@stop

@section('ico')
	<i class="fa fa-user"></i>
@stop

@section('create')
	<a class="btn btn-success" href="{{ URL::route('contact.create') }}"><i class="glyphicon glyphicon-plus"></i> {{ Lang::get('contacts.create') }} </a>
@stop

@section('delete')
    <a class="btn btn-danger" id="btnDelete" disabled="" href="javascript:onClickDelete()"><i class="glyphicon glyphicon-remove"></i> {{ Lang::get('contacts.delete') }} </a>
@stop

@section('deleteSubmit')
    {{ Form::submit(Lang::get('contacts.delete'), array('id'=>'btnDelete', 'class'=>'btn btn-danger')) }}
@stop

@section('title')
    {{ Lang::get('contacts.contact')}}
@stop

@section('subtitle')
    {{ Lang::get('contacts.contact_list')}}
@stop

@section('content')

    {{ Datatable::table()
        ->addColumn('Checkbox',
                    'Name',
                    'Nif')                      // these are the column headings to be shown
        ->setId('datatableId')
        ->setUrl(route('api.contact'))          // this is the route where data will be retrieved
        ->render('layout.datatable') }}

@stop