<?php

namespace App\Http\Controllers;


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

        $validator = Validator::make(
            $request->all(),
            [
                "codigo" => "required|int",
                "password" => "required|min:8"
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ], 400);
        }
        $codigo = $request->codigo;
        $controller = new Controller();
        $response = $controller->apiUser($codigo);
        if ($response->successful()) {
            $api = $response->json();
            $user = new user();
            $user->user_name = $api['nombre'] . '_' . $user->id;
            $user->email = $api['email'];
            $user->codigo = $api['codigo'];
            $user->password = Hash::make($request->password);
            if ($api['tipo'] == 'Estudiante') {
                $user->rol_id = 2;
            } elseif ($api['api'] == 'Profesor') {
                $user->rol_id = 3;
            }
            $user->save();
            return response()->json([
                'status' => true,
                'message' => 'create',
                'token' => $user->createToken('API TOKEN')->plainTextToken
            ], 200);
        }
        if ($response->status() == 404) {
            return response()->json([
                'status' => false,
                'errors' => 'No existente'
            ], 404);
        }
        if ($response->status() == 405) {
            return response()->json([
                'status' => false,
                'errors' => 'Accion no permitida'
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $controller = new Controller();
        $controller->existePersona($id);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
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
        //Reglas del request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        //Validaciones del request
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ], 400);
        }
        //Validar si el usuario existe
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'status' => false,
                'errors' => ['Unauthorized']
            ], 401);
        }

        try {
            //Buscar al usuario autentificado y crear un token
            $user = User::where('email', $request->email)->first();
            return response()->json([
                'status' => true,
                'message' => 'Looged',
                'data' => $user,
                'rol' => $user->rol_id,
                'token' => $user->createToken('API TOKEN')->plainTextToken
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 500);
        }
    }

    public function logout()
    {
        try {
            // Obtén al usuario autenticado actual
            $user = Auth::user();
            if (!$user) {
                return $response = response()->json([
                    'status' => false,
                    'error' => 'No hay login'
                ], 404);
            }

            // Revoca todos los tokens de acceso del usuario
            $user->tokens->each(function ($token, $key) {
                $token->delete();
            });

            return response()->json([
                'status' => true,
                'message' => 'Logout exitoso'
            ], 200);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function userLogueado()
    {
        $user = Auth::user();
        $controller = new Controller();
        $response = $controller->apiUser($user->codigo);
        if (!$user) {
            return response()->json([
                'status' => false,
                'errors' => 'No hay usuario logueado'
            ], 404);
        }
        $api = $response->json();
        return response()->json([
            'status' =>  true,
            'message' => 'exitos',
            'data' => $user,
            'apiUser' => $api
        ], 200);
    }


}
