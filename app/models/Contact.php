<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

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

    public function Adresses()
    {
        return$this->hasMany('Adress', 'id');
    }

}

?>







