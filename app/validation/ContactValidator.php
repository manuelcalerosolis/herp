<?php
/**
 * Created by PhpStorm.
 * User: calero
 * Date: 10/07/2014
 * Time: 18:28
 */

namespace Validation;


class ContactValidator extends AbstractValidator
{

    protected $rules = array(
        'create'    => array(
            'name'          => 'required',
            'fiscal_number' => 'required',
            'email'         => 'required|email|unique:Contacts'
        ),
        'update'    => array(
            'name'          => 'required',
            'fiscal_number' => 'required',
            'email'         => 'required|email'
        )
    );

    protected $fields = array(
        'create'    => array(
            'name',
            'fiscal_number',
            'email'
        ),
        'update'    => array(
            'name',
            'fiscal_number',
            'email'
        ),
    );

    protected $messages = array(
        'create'    => array(
            'name.required'             => 'contacts.name_required',
            'fiscal_number.required'    => 'contacts.fiscal_number_required',
            'email.required'            => 'contacts.email_required',
            'email.email'               => 'contacts.email_email',
            'email.unique'              => 'contacts.email_unique'
        ),
        'update'    => array(
            'name.required'             => 'contacts.name_required',
            'fiscal_number.required'    => 'contacts.fiscal_number_required',
            'email.required'            => 'contacts.email_required',
            'email.email'               => 'contacts.email_email'
        ),
    );

}
