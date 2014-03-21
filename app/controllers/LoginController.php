<?php


class LoginController extends BaseController {

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

        $email      = Input::get('email');
        $password   = Input::get('password');
        //$password   = Hash::make($password);

         if ( Auth::attempt(array('email' => $email, 'password' => $password)))
         {
             return "Bienvenido";
         }
         else
         {
            return "Fuera";
         }
        

    }

}

?>