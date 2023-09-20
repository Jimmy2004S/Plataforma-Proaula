<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DepartamentoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $nombres = ['Departamento 1' , 'Departamento 2',  'Departamento 3'];
        return [
            'nombre' => $this -> faker -> unique() -> randomElement($nombres),
        ];
    }
}
