<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;


class AdminController extends Controller
{


    public function estadoUsuario(User $user)
    {
        try{
            if(!$user){
                return response()->json([
                    'status' => false,
                    'errors' => 'Peticcion denegada'
                ], 404);
            }
            if($user -> estados == '0'){
                $user -> estados = '1';
                return response()->json([
                    'status' => true,
                    'message' => 'exitos'
                ],200);
            }elseif($user -> estados == 1){
                $user -> estados = '0';
                return response()->json([
                    'status' => true,
                    'message' => 'exitos'
                ],200);
            }
            $user -> save();
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error : ' . $e->getMessage()], 500);
        }
    }

    public function eliminarRegistroUsuario(User $user){
        try{
            $userToDelete = User::find($user->id);
            $userToDelete->delete();
            return 'eliminado';
        }catch(\Exception $e){
            return 'Error';
        }

    }
}
