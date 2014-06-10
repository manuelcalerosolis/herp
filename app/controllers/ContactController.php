<?php

class ContactController extends \BaseController{

    public function index()
    {

        return View::Make('contact.index');

    }

    public function create(){

        return View::Make('contact.create');
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

            return Datatable::collection(Contact::all( array('id', 'name', 'fiscal_number')))
                ->showColumns('id', 'name', 'fiscal_number')
                ->searchColumns('name', 'fiscal_number')
                ->orderColumns('id', 'name', 'fiscal_number')
                ->make();

    }
}