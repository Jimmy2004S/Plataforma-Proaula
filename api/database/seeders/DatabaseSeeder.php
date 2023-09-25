<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Carrera;
use App\Models\Departamento;
use App\Models\Estudiante;
use App\Models\Profesor;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Role::factory(3) -> create();
        $carrera = Carrera::factory(5) -> create();
        $departamento = Departamento::factory(3) -> create();


        User::create([
            'nombre' => 'El admin',
            'apellidos' => 'Si es',
            'email' => 'dsadad@hdokd.com',
            'identificacion' => '1234567890',
            'estados' => 1,
            'email_verified_at' => now(),
            'password' => bcrypt('admin'), // Puedes establecer una contraseña fija o generar una aleatoria
            'rol_id' => 1
        ]);

        // Crea usuarios estudiantes.
        User::factory(25)->create([
            'rol_id' => 2
        ])->each(function ($usuario) use ($carrera) {
            $carreraAleatoria = $carrera->random()->id; // Elige una carrera al azar de las creadas anteriormente.
            Estudiante::factory()->create(['user_id' => $usuario->id, 'carrera_id' => $carreraAleatoria]);
            // Asigna el rol "estudiante" al usuario.
            //$usuario->update(['rol_id' => 2]);
        });

        // Crea usuarios profesores.
        User::factory(10)->create([
            'rol_id' => 3
        ])->each(function ($usuario) use ($departamento) {
            $departamentoaleatorio = $departamento ->random() -> id;
            Profesor::factory()->create(['user_id' => $usuario->id , 'departamento_id' => $departamentoaleatorio]);
            // Asigna el rol "profesor" al usuario.
            //$usuario->update(['rol_id' => 3]);
        });

    }
}
