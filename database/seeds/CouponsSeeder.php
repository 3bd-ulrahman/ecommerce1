<?php

use App\Models\Coupon;
use Illuminate\Database\Seeder;

use function PHPSTORM_META\type;

class CouponsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Coupon::create([
            'code' => 'ABC123',
            'type' => 'fixed',
            'value' => 30
        ]);

        Coupon::create([
            'code' => 'DEF456',
            'type' => 'percent',
            'value' => 50
        ]);
    }
}
