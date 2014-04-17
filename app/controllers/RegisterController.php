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
		$validator = Validator::make( Input::all(), User::getValidator(), User::getMessages() );    	

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

    public function confirmation($confirmation)
    {
        $user = User::where('confirmation', '=', $confirmation)->where('active', '=', 0)->first();
        
        if ($user)
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
        $link   = URL::route('registerConfirmation', $this->user->confirmation);

        Mail::send('emails.confirmation', array('link' => $link, 'user' => $this->user), function($message)
        {
            $message->to($this->user->email, $this->user->name )
                    ->subject('Welcome!');
        });       
    }

}

?>