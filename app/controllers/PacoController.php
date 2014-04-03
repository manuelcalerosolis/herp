<?php

class UserController extends BaseController {

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

    public function Edit($id)
    {
        $user = User::findOrFail($id);

   		return View::make('user', compact('user'));
    }

    public function Update($id)
    {
        $user = User::findOrFail($id);

        return 'user';
    }

}

?>