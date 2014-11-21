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

        try
        {
            $contact    = $this->contactRepository->findOrFail($id);

            if( isset($contact))
            {
                return View::Make('contact.edit')->with('contact', $contact);
            }

        }

        catch ( validation\ValidationException $e)
        {
            return Redirect::back()
                ->withInput()
                ->withErrors($e->getMessages());
        }

        return Redirect::route('contact.index');

    }

    public function update($id)
    {

        try
        {
            $this->contactRepository->update($id, Input::all());
        }

        catch ( validation\ValidationException $e)
        {
            return Redirect::back()
                ->withInput()
                ->withErrors($e->getMessages());
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

    }

    public function getDatatable()
    {

        return Datatable::collection($this->contactRepository->all( array('id', 'name', 'fiscal_number', 'email')))
            ->addColumn('checkbox', function($model)
            {
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
            ->addColumn('email',function($model)
            {
                return $model->email;
            })
            ->addColumn('dropdown', function($model)
            {

                return  '<div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">'.
                            Lang::get("messages.action").
                            '<span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" href="' . URL::route('contact.edit', $model->id) . '">'.
                                    Lang::get("messages.edit").
                                    '</a>
                                </li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                                <li role="presentation" class="divider"></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                            </ul>
                        </div>';

            })
            ->searchColumns('name', 'fiscal_number', 'email')
            ->orderColumns('name', 'fiscal_number', 'email')
            ->make();

    }

    public function test($id)
    {

        $contact        = $this->contactRepository->findOrFail($id);

        if(isset($contact))
        {
            $addreses   = $contact->Addreses; // Contact::find(151)

            echo '<p> cominezo foreach </p>';

            foreach ($addreses as $address){
                echo '<p>'.$address->name.'</p>';
            }

            echo '<p> fin foreach </p>';
        }

    }

}