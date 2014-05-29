<?php

class Contact extends Eloquent  {

	protected $table = "contacts";

	protected $fillable = array('name', 'fiscal_number', 'user_id');

	public function User(){
        return $this->hasMany('User', 'user_id');
    }

	protected $rules = array(   'name'                  	=> 'required',
                                'fiscal_number'             => 'required',
                                'user_id' 					=> 'required');

    
}

?>







