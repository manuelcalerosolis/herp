<?php

class ContactController extends \BaseController{

    public function index()
    {

        return View::Make('contact.index');

    }

    public function create(){

        return View::Make('contact.create');
    }

    public function store(){

        $validator = Validator::make( Input::all(), Contact::getValidator(), Contact::getMessages() );  


        if ($validator->fails())
        {
            return Redirect::to( URL::previous() )
                ->withErrors($validator) 
                ->withInput();
        }
        else
        {

            $contact                    = new Contact;

            $contact->name              = Input::get('name');
            $contact->fiscal_number     = Input::get('fiscal_number');

            if ( !$contact->save() )
            {
                return Redirect::to( URL::previous() )
                    ->withErrors($contact->errors()->all(':message'))
                    ->withInput();            
            }


            return Redirect::route('contact.index');
        }      


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
                ->showColumns('id')
                ->addColumn('name',function($model)
                {
                    return link_to_route('contact.edit', $model->name, $model->id );
                })
                ->addColumn('fiscal_number',function($model)
                {
                    return link_to_route('contact.edit', $model->fiscal_number, $model->id );
                })
                ->searchColumns('name', 'fiscal_number')
                ->orderColumns('id', 'name', 'fiscal_number')
                ->make();

    }
}