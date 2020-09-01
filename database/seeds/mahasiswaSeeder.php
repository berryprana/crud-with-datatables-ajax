<?php

use App\Mahasiswa;
use Illuminate\Database\Seeder;


class mahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Mahasiswa::class, 70)->create();
    }
}
