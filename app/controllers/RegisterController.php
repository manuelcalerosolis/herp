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
    		'name' => 'required'
    	);

		$messages = array(
		    'name.required' => Lang::get('messages.name_required')
		);

		$validator = Validator::make( Input::all(), $conditions, $messages );    	

		if ($validator->fails())
		{
     	
     		return Redirect::intended('register')
                ->withErrors($validator) 
                ->withInput();
        }
     

        // $email      = Input::get('email');
        // $password   = Input::get('password');
        // //$password   = Hash::make($password);

        //  if ( Auth::attempt(array('email' => $email, 'password' => $password)))
        //  {
        //      return "Bienvenido";
        //  }
        //  else
        //  {
        //     
        

    }

}

?>