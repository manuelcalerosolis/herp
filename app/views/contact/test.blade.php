@extends('layout.menu')

@section('content')

<p>Welcome to the testing area!</p>

{{ Form::open(array('route' => 'contact.destroy', 'id' => 'idForm', 'role' => 'form' )) }}

{{ Form::close() }}

<a class="btn btn-danger" id="btnDelete" href=""><i class="glyphicon glyphicon-remove"></i> {{ Lang::get('contacts.delete') }} </a>

<!--
<button id="btnDelete" class="btn btn-primary">Eliminar!</button>
-->

<script>
    $('#btnDelete').click(function()
    {
        if (!confirm('¿Desea borrar los registros seleccionados?'))
        {
            return;
        }

        $('#idForm').submit();
    });
</script>

@stop