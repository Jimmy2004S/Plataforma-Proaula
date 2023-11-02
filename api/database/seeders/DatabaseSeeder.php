<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\Controller;
use App\Models\Carrera;
use App\Models\Departamento;
use App\Models\Estudiante;
use App\Models\Profesor;
use App\Models\Role;
use App\Models\User;
use App\Models\Perfil;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Symfony\Component\HttpKernel\Profiler\Profile;

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
        User::create([
            'user_name' => 'El admin',
            'email' => 'jimmisiitho450@gmail.com',
            'estado' => 1,
            'email_verified_at' => now(),
            'password' => bcrypt('admin'), // Puedes establecer una contraseña fija o generar una aleatoria
            'rol_id' => 1
        ]);

        $controller = new Controller();
        $response = $controller->apiUsers();

        $api = $response->json();

        //User::factory()->has(Post::factory()->count(3), 'posts')->create();


    }
}

