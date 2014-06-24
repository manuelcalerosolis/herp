@extends('layout.menu')

@section('ico')
	<i class="fa fa-user"></i>
@stop

@section('create')
	<a class="btn btn-success" href="{{ URL::route('contact.create') }}"><i class="glyphicon glyphicon-plus"></i> {{ Lang::get('contacts.create') }} </a>
@stop

@section('delete')
<a class="btn btn-danger" id="btnDelete"  href="{{ URL::route('contact.destroy') }}"><i class="glyphicon glyphicon-remove"></i> {{ Lang::get('contacts.delete') }} </a>
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

