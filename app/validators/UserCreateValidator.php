<?php namespace Validators\User;

use Validators\Service\Validable;
use Validators\Service\LaravelValidator;

class UserCreateValidator extends LaravelValidator implements Validable {

    /**
     * Validation rules
     *
     * @var array
     */
    protected $rules = array(
        'email'     => 'required|email|unique:users,email',
        'password'  => 'required'
    );

}