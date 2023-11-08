<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function apiUser($codigo)
    {
        $response = Http::get("http://localhost/api_uni/api.php?action=get_user&codigo=$codigo");
        return $response;
    }

    public function apiUsers()
    {
        // Realiza la solicitud HTTP a la API
        $response = Http::get('http://localhost/api_uni/api.php?action=list_users');
        return $response;

        // Verifica si la solicitud fue exitosa (código de respuesta 200)
        /*if ($response->successful()) {
            // Decodifica la respuesta JSON


            // Devuelve una respuesta HTTP desde tu controlador
            /*return response()->json([
                'status' => true,
                'message' => 'Usuarios obtenidos exitosamente',
                'data' => $data,
            ]);
        } else {
            // Si la solicitud no fue exitosa, puedes manejar el error de alguna manera
            return response()->json([
                'status' => false,
                'message' => 'Error al obtener usuarios desde la API',
            ], 500); // Usualmente se usa código 500 para errores internos del servidor
        }*/
    }


    public function existePersona(int $id)
    {
        $user = User::findOrFail($id);
        if (!$user) {
            return response()->json([
                'status' => false,
                'errors' => 'No existente'
            ]);
        }
        return response()->json([
            'status' => 200,
            'data' => $user,
            'message' => 'Exito'
        ]);
    }
}
