<?php

class RegisterController extends BaseController {

    /**
     * Instantiate a new UserController instance.
     */

    public function __construct()
    {
        $this->beforeFilter(function()
        {
            //
        });
    }

    public function Check()
    {

        $conditions = array( 
            'email'                 => 'required|email|unique:users',
            'name'                  => 'required|unique:users',
            'password'              => 'required|min:8|confirmed',
            'password_confirmation' => 'required'

        );

        $messages = array(
            'email.required'                 => Lang::get('messages.email_required'),
            'email.email'                    => Lang::get('messages.email_email'),
            'email.unique'                   => Lang::get('messages.email_unique'),
            'name.required'                  => Lang::get('messages.name_required'),
            'name.unique'                    => Lang::get('messages.name_unique'),
            'password.required'              => Lang::get('messages.password_required'),
            'password.min'                   => Lang::get('messages.password_min'),
            'password.confirmed'             => Lang::get('messages.password_confirmed'),
            'password_confirmation.required' => Lang::get('messages.password_confirmation')
        );

		$validator = Validator::make( Input::all(), $conditions, $messages );    	

		if ($validator->fails())
		{
     		return Redirect::intended('register')
                ->withErrors($validator) 
                ->withInput();
        }
        else
        {
            $this->createUser();
            $this->sendMailConfirmation();            
            
            return 'Registrado';
        }
    }

    public function createUser()
    {
        $user               = new User;
        
        $user->email        = Input::get('email');
        $user->name         = Input::get('name');
        $user->password     = Hash::make(Input::get('password'));

        if ( !$user->save() )
        {
            return Redirect::intended('register')
                ->withErrors($user->errors()->all(':message'))
                ->withInput();            
        }

    }

    public function sendMailConfirmation()
    {
        Mail::send('emails.confirmation', Input::all(), function($message)
        {
            $message->to(Input::get('email'), Input::get('name'))->subject('Welcome!');
        });       
    }
     
}

?>