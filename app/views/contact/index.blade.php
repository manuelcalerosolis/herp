@extends('layout.menu')

{{ HTML::style('css/jquery.dataTables.css') }}

@section('title')
    {{ Lang::get('contacts.contact')}}
@stop

@section('subtitle')
    {{ Lang::get('contacts.contact_list')}}
@stop

@section('content')

    {{ Datatable::table()
        ->addColumn('id','Name')            // these are the column headings to be shown
        ->setUrl(route('api.contact'))      // this is the route where data will be retrieved
        ->render() }}

@stop

{{ HTML::script('js/jquery.dataTables.js', array('type' => 'text/javascript')) }}
