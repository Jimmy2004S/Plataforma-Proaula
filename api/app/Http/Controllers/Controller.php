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

    public function apiUser($codigo){
        $response = Http::get("http://localhost/api_uni/api.php?action=get_user&codigo=$codigo");
        return $response;
    }

    public function apiUsers(){
        $response = Http::get("http://localhost/api_uni/api.php?action=list_users");
        return $response;
    }

    public function existePersona(int $id){
        $user = User::findOrFail($id);
        if(!$user){
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
