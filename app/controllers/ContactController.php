<?php

class ContactController extends \BaseController{

    public function index()
    {
    $usuario = Contact::find(10)->User()->first()->name ;
        return "el contacto con id 10 ha sido creado por el usuario ".$usuario;

    }

    public function create(){

        return "crear nuevo contacto";
    }

    public function edit($id)
    {
        return "editar el contacto ".$id;
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {
        return "borrar contacto con id " . $id;

    }
}