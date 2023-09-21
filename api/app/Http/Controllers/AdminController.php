<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
}
