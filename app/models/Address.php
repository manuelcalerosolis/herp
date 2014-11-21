<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Address extends Eloquent
{

    use SoftDeletingTrait;

    protected $dates    = array('deleted_at');

    protected $table    = "addreses";

    protected $fillable = array('name', 'address_main', 'city', 'state', 'postal_code', 'website', 'phone', 'email' );

    public function Contact()
    {
        return $this->belongsTo('Contact');
    }

}

?>
