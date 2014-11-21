<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Contact extends Eloquent
{

    use SoftDeletingTrait;

    protected $dates    = array('deleted_at');

	protected $table    = "contacts";

	protected $fillable = array('name', 'fiscal_number', 'user_id');

    public function User()
    {
        return $this->belongsTo('User', 'user_id');
    }

    public function Addreses()
    {
        return $this->hasMany('Address');
    }

}

?>







