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
        ),
    );

    protected $fields = array(
        'create'    => array(
            'name',
            'fiscal_number',
        ),
    );

    protected $messages = array(
        'create'    => array(
            'name.required'             => 'contacts.name_required',
            'fiscal_number.required'    => 'contacts.fiscal_number_required'
        ),
    );

}
