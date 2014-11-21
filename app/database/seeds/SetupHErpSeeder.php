<?php

class SetupHErpSeeder extends Seeder {

	public function run()
	{
		DB::table('Users')->delete();

		// users
		User::create(array(
				'name' => 'demo',
				'email' => 'demo@demo.com',
				'password' => Hash::make('demo'),
                'active'   => 1
			));

        //Empty the countries table

        DB::table('countries')->delete();

        //Get all of the countries

        $countries = Countries::getList();

        foreach ($countries as $countryId => $country){

            DB::table('countries')->insert(array(
                'id' => $countryId,
                'capital' => ((isset($country['capital'])) ? $country['capital'] : null),
                'citizenship' => ((isset($country['citizenship'])) ? $country['citizenship'] : null),
                'country_code' => $country['country-code'],
                'currency' => ((isset($country['currency'])) ? $country['currency'] : null),
                'currency_code' => ((isset($country['currency_code'])) ? $country['currency_code'] : null),
                'currency_sub_unit' => ((isset($country['currency_sub_unit'])) ? $country['currency_sub_unit'] : null),
                'full_name' => ((isset($country['full_name'])) ? $country['full_name'] : null),
                'iso_3166_2' => $country['iso_3166_2'],
                'iso_3166_3' => $country['iso_3166_3'],
                'name' => $country['name'],
                'region_code' => $country['region-code'],
                'sub_region_code' => $country['sub-region-code'],
                'eea' => (bool)$country['eea']
            ));
        }

        DB::table('contacts')->delete();

        $faker = new Faker\Generator();
        $faker->addProvider(new Faker\Provider\pl_PL\Person($faker));
        $faker->addProvider(new Faker\Provider\Internet($faker));
         
        for ($i = 0; $i < 50; $i++)
        {
            $contacts = Contact::create(array(
                'name' => $faker->name,
                'fiscal_number' => $faker->personalIdentityNumber,
                'email' => 'manuelcalerosolis@gmail.com',
                'user_id' => 1
            ));
        }

        DB::table('addreses')->delete();
         
        for ($i = 0; $i < 10; $i++)
        {
            $contacts = Address::create(array(
                'name' => 'Central',
                'address_main' => "Cl. Real",
                'contact_id' => 1
            ));
        }











	}
}