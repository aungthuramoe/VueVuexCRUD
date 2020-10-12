<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i < 11; $i++) { 
            DB::table('products')->insert([
                'name' => 'Title '.$i,
                'price' => $i*100,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
    	}
    }
}
