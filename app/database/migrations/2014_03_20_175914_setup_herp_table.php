<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class SetupHErpTable extends Migration {

	public function up()
	{

        $this->down(); //Schema::dropIfExist('Users');

        // Users

        Schema::create('Users', function(Blueprint $table) {
			$table->increments('id');
			$table->string('name')->unique();
			$table->string('email')->unique();
			$table->string('password');
			$table->boolean('active');
			$table->string('confirmation');
			$table->string('remember_token');
			$table->timestamps();
			$table->softDeletes();
		});

        //Countries

        Schema::create('Countries', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('capital', 255)->nullable();
            $table->string('citizenship', 255)->nullable();
            $table->string('country_code', 3)->default('');
            $table->string('currency', 255)->nullable();
            $table->string('currency_code', 255)->nullable();
            $table->string('currency_sub_unit', 255)->nullable();
            $table->string('full_name', 255)->nullable();
            $table->string('iso_3166_2', 2)->default('');
            $table->string('iso_3166_3', 3)->default('');
            $table->string('name', 255)->default('');
            $table->string('region_code', 3)->default('');
            $table->string('sub_region_code', 3)->default('');
            $table->boolean('eea')->default(0);
        });

        // Address

        Schema::create('Address', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('postal_code');
            $table->string('website');
            $table->string('phone');
            $table->string('email');
            $table->unsignedInteger('country_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('country_id')->references('id')->on('Countries');
        });

        // Contacts

        Schema::create('Contacts', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('fiscal_number');

            $table->unsignedInteger('user_id');
            $table->unsignedInteger('address_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('address_id')->references('id')->on('Address')->onDelete('cascade');
        });

	}

	public function down()
	{
		Schema::dropIfExists('Users');
        Schema::dropIfExists('Contacts');
        Schema::dropIfExists('Address');
        Schema::dropIfExists('Countries');
	}
}