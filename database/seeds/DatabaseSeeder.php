<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
        $this->call(ProductsSeeder::class);
        $this->call(CouponsSeeder::class);

        // this is what come with voyager
        // $this->call(VoyagerDatabaseSeeder::class);

        // $this->call(UsersTableSeeder::class);

        // this is custom for voyager
        $this->call(CustomVoyager::class);


    }
}
