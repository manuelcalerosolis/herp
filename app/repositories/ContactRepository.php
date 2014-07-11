<?php
/**
 * Created by PhpStorm.
 * User: calero
 * Date: 08/07/2014
 * Time: 21:16
 */


class ContactRepository implements RepositoryInterface{

    protected $contact;
    protected $validator;

    public function __construct( \Contact $contact, \Validation\ContactValidator $validator )
    {
        $this->contact      = $contact;
        $this->validator    = $validator;
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

    public function store(array $input)
    {
        $this->validator->validate($input, 'create');

        $contact                    = new Contact;
        $contact->name              = $input[ 'name' ];
        $contact->fiscal_number     = $input[ 'fiscal_number'];

        return $contact->save();
    }

}

