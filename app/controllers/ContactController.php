<?php

class ContactController extends \BaseController{

    protected $contactRepository;

    public function __construct(ContactRepository $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function index()
    {

        return View::Make('contact.index');

    }

    public function create()
    {
        return View::Make('contact.create');
    }

    public function store()
    {
        try
        {
            $this->contactRepository->store(Input::all());
        }

        catch ( validation\ValidationException $e)
        {
            return Redirect::back()
                ->withInput()
                ->withErrors($e->getMessages());
        }

        return Redirect::route('contact.index');
    }

    public function edit($id)
    {

        $contact    = $this->contactRepository->findOrFail($id);

        if( isset($contact))
        {
            return View::Make('contact.edit')->with('contact', $contact);
        }

    }

    public function update($id)
    {
/*
        $contact                    = $this->contactRepository->findOrFail($id);

        $contact->name              = Input::get('name');
        $contact->fiscal_number     = Input::get('fiscal_number');
*/
        if ( !$this->contactRepository->update($id) )
        {
            return Redirect::to( URL::previous() )
                ->withErrors($contact->errors()->all(':message'))
                ->withInput();
        }

        return Redirect::route('contact.index');
    }

    public function delete()
    {

        $ids = Input::get('ids');

        if ($this->contactRepository->delete($ids))
        {
            return Redirect::route('contact.index');
        }
        else
        {
            return Redirect::route('contact.index')
                ->withErrors('Error al borrarlo');
        }
       // dd( $input );

    }

    public function getDatatable()
    {

            return Datatable::collection(Contact::all( array('id', 'name', 'fiscal_number')))
                ->addColumn('checkbox', function($model)
                {
                    // return  '<input type="checkbox" class="selectAll"/>';
                    return Form::checkbox('ids[]', $model->id);
                })
                ->addColumn('name',function($model)
                {
                    return link_to_route('contact.edit', $model->name, $model->id );
                })
                ->addColumn('fiscal_number',function($model)
                {
                    return $model->fiscal_number;
                })
                ->searchColumns('name', 'fiscal_number')
                ->orderColumns('name', 'fiscal_number')
                ->make();

    }

    public function test()
    {

        return View::Make('contact.test');

    }

}