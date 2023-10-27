<?php

namespace App\Http\Controllers;

use App\Models\Carrera;
use App\Models\Departamento;
use App\Models\Estudiante;
use App\Models\Profesor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
    {
        $users = User::all();
        return response()->json($users);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),
        [
            "codigo" => "required|int",
            "password" => "required|min:8"
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ],400);
        }
            $codigo = $request->codigo;
            $response = http::get("http://localhost/api_uni/api.php?action=get_user&codigo=$codigo");
            if($response -> successful()){
                $api = $response->json();
                $user = new user();
                $user -> user_name = $api['nombre'] . '_' . $user->id;
                $user -> email = $api['email'];
                $user -> password = Hash::make($request->password);
                if($api['tipo'] == 'Estudiante'){
                    $user -> rol_id = 2;
                }elseif($api['api'] == 'Profesor'){
                    $user -> rol_id = 3;
                }
                $user -> save();
                return response()->json([
                    'status' => true,
                    'message' => 'create',
                    'token' => $user->createToken('API TOKEN')->plainTextToken
                ],200);
            }else{
                return response()->json([
                    'status' => false,
                    'errors' => ['Unauthorized']
                ], 401);
            }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
            if($validator->fails()){
                return response()->json([
                    'status' => false,
                    'errors' => $validator -> errors()->all()
                ], 400);
            }
            if(!Auth::attempt($request->only('email' , 'password'))){
                return response()->json([
                    'status' => false,
                    'errors' => ['Unauthorized']
                ],401);
            }
            $user = User::where('email', $request->email)->first();
            return response()->json([
                'status' => true,
                'message' => 'Looged',
                'data' => $user,
                'token' => $user->createToken('API TOKEN')->plainTextToken
            ], 200);
    }

    public function logout(){
         // Obtén al usuario autenticado actual
        $user = Auth::user();

        // Revoca todos los tokens de acceso del usuario
        $user->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([
            'status' => true,
            'message' => 'Logout exitoso'
        ], 200);
    }
}
