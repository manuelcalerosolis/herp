<?php

class DatabaseSeeder extends Seeder {

	public function run()
	{
		Eloquent::unguard();

		$this->call('SetupHErpSeeder');
		$this->command->info('HErp database seeded!');
	}
}