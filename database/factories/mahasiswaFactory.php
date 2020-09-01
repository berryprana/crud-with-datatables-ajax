<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Mahasiswa;
use Faker\Generator as Faker;

$factory->define(Mahasiswa::class, function (Faker $faker) {
    return [
        'nama_mahasiswa' => $faker->name,
        'kelas' => $faker->numerify('4KA###'),
        'umur' => $faker->numberBetween($min = 20, $max = 40),
        'alamat' => $faker->address,

    ];
});
