<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CarreraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $carreras = ['Carrera 1', 'Carrera 2', 'Carrera 3', 'Carrera 4', 'Carrera 5']; // Lista de carreras

        return [
            'nombre' => $this ->faker->unique()->randomElement($carreras)
        ];
    }
}
