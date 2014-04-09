<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		
		$this->down(); //Schema::dropIfExist('Users');

		Schema::create('Users', function(Blueprint $table) {
			$table->increments('id');
			$table->string('name')->unique();
			$table->string('email')->unique();
			$table->string('password');
			$table->boolean('active');
			$table->string('confirmation');
			$table->timestamps();
			$table->softDeletes();
		});

		DB::table('Users')->insert(
			array(	'name' 		=> 'demo',
					'email' 	=> 'demo@demo.com',
					'password' 	=> Hash::make('demo'),
					'active' 	=> 1 ) );
	}

	public function down()
	{
		Schema::dropIfExists('Users');
	}
}