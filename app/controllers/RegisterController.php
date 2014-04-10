<?php

class RegisterController extends BaseController {

    /**
     * Instantiate a new UserController instance.
     */

    public $user ;

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

    public function confirmation($confirmation){
        
        $user = User::where('confirmation', '=', $confirmation)->where('active', '=', 0)->first()
        if ($user->id)
        {
            $user->active = 1;
            $user->confirmation = '';
            $user->save();            
        }

    }

    public function createUser()
    {
        $this->user               = new User;
        
        $this->user->email        = Input::get('email');
        $this->user->name         = Input::get('name');
        $this->user->password     = Hash::make(Input::get('password'));
        $this->user->confirmation = str_random(60);
        $this->user->active       = 0;

        if ( !$this->user->save() )
        {
            return Redirect::intended('register')
                ->withErrors($this->user->errors()->all(':message'))
                ->withInput();            
        }

    }

    public function sendMailConfirmation()
    {
        Mail::send('emails.confirmation', array( 'user' => $this->user ), function($message)
        {
            $message->to($this->user->email, $this->user->name )
                    ->subject('Welcome!');
        });       
    }
     
}

?>