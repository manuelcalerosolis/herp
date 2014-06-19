<?php

class Contact extends Eloquent  {

	protected $table = "contacts";

	protected $fillable = array('name', 'fiscal_number', 'user_id');

    protected $validator;

	public function User(){
        return $this->belongsTo('User', 'user_id');
    }

    public static function getRules()
    {
        return array(   'name'                      => 'required',
                        'fiscal_number'             => 'required' );
    }

    public static function getMessages()
    {
        return  array(  'name.required'             => Lang::get('contacts.name_required'),
                        'fiscal_number.required'    => Lang::get('contacts.fiscal_number_required') );
    }

    public static function storeFails()
    {

        $contact                    = new Contact;

        $contact->name              = Input::get('name');
        $contact->fiscal_number     = Input::get('fiscal_number');

        return !$contact->save();

    }

    public function validatorFails()
    {

        $this->validator = Validator::make( Input::all(), $this->getRules(), $this->getMessages() ); 

        return $this->validator->fails();

    }

    public function getValidator()
    {

        return $this->validator;

    }
    
}

?>







