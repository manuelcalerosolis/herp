<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Contact extends Eloquent  {

    use SoftDeletingTrait;

    protected $dates    = array('deleted_at');

	protected $table    = "contacts";

	protected $fillable = array('name', 'fiscal_number', 'user_id');

	public function User()
    {
        return $this->belongsTo('User', 'user_id');
    }

    public static function storeFails(array $input)
    {

        $contact                    = new Contact;

        $contact->name              = $input[ 'name' ];
        $contact->fiscal_number     = $input[ 'fiscal_number'];

        return !$contact->save();
    }

}

?>







