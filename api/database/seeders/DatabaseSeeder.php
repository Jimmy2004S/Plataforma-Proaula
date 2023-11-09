<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Http\Controllers\Controller;
use App\Models\Estudiante;
use App\Models\Profesor;
use App\Models\Role;
use App\Models\User;
use App\Models\Post;
use Carbon\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
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
            foreach ($api as $userData) {
                $rol_id = 0;
                if($userData['tipo']  == 'Estudiante'){
                    $rol_id = 2;
                }elseif($userData['tipo']  == 'Profesor'){
                    $rol_id = 3;
                }
                // Crea un nuevo usuario en tu base de datos.
                $nombre =  $userData['nombre'].$userData['id'];
                $email = $userData['email'];
                $user = User::create([
                    'user_name' => $nombre,
                    'email' => $email,
                    'password' => bcrypt('password'), // Ajusta la contraseña según tus necesidades.
                    'email_verified_at' => now(),
                    'rol_id' => $rol_id,
                ]);
                // Asocia tres publicaciones (posts) al usuario recién creado.
                $posts = Post::factory(1)->create([
                    'user_id' => $user->id
                ]);
                $user->posts()->saveMany($posts);
            }

    }
}

