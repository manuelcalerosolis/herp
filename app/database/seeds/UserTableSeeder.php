<?php

class UserTableSeeder extends Seeder {

	public function run()
	{
		//DB::table('Users')->delete();

		// users
		User::create(array(
				'name' => 'demo',
				'email' => 'demo@demo.com',
				'password' => Hash::make('demo')
			));
	}
}