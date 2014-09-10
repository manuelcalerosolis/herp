<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Adress extends Eloquent
{

    use SoftDeletingTrait;

    protected $dates    = array('deleted_at');

    protected $table    = "adresses";

    protected $fillable = array('name', 'address', 'city', 'state', 'postal_code', 'website', 'phone', 'email' );

    public function Contact()
    {
        return $this->belongsTo('Contact', 'id', 'address_id');
    }

}

?>
