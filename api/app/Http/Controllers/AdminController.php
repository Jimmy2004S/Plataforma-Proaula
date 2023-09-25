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
            if($user -> estados == '1'){
                $user -> estados = '2';
            }elseif($user -> estados == '2'){
                $user -> estados = '1';
            }
            $user -> save();
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error : ' . $e->getMessage()], 500);
        }
        return response()->json($user);
    }

    public function eliminarRegistroUsuario(User $user){
        try{
            $userToDelete = User::find($user->id);
            $userToDelete->delete;
            return 'eliminado';
        }catch(\Exception $e){
            return 'Error';
        }

    }
}
