<?php

class ContactController extends \BaseController{

    public function index()
    {

        return View::Make('contact.index');

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

    public function getDatatable()
    {

            return Datatable::collection(Contact::all())
                ->showColumns('id', 'name')
                ->searchColumns('name')
                ->orderColumns('id', 'name')
                ->make();

    }
}