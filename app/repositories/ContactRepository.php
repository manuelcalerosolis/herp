<?php
/**
 * Created by PhpStorm.
 * User: calero
 * Date: 08/07/2014
 * Time: 21:16
 */

use Illuminate\Database\Eloquent\ModelNotFoundException;


class ContactRepository implements RepositoryInterface
{

    protected $contact;
    protected $validator;

    public function __construct(\Contact $contact, \Validation\ContactValidator $validator)
    {
        $this->contact = $contact;
        $this->validator = $validator;
    }

    public function all()
    {
        return $this->contact->all();
    }

    public function get($id)
    {
        return $this->contact->where('id', $id)->get();
    }

    public function find($id)
    {
        return $this->contact->find($id);
    }

    public function findOrFail($id)
    {
        return $this->contact->findOrFail($id);
    }

    public function delete($ids)
    {

        $deleted = true;

        foreach ($ids as $id) {
            $contact = $this->find($id);

            if (isset($contact)) {
                $contact->delete();
            } else {
                $deleted = false;
            }

        }

        return ($deleted);

    }

    public function store(array $input)
    {
        $this->validator->validate($input, 'create');

        $contact                = new Contact;
        $contact->name          = $input['name'];
        $contact->fiscal_number = $input['fiscal_number'];

        return $contact->save();
    }

    public function update($id)
    {
        try
        {
            $contact                = $this->findOrFail($id);

            $contact->name          = Input::get('name');
            $contact->fiscal_number = Input::get('fiscal_number');

            return $contact->save();
        }

        catch (ModelNotFoundException $e)
        {
            dd($e->getMessage());
            return false;
        }

    }

}

