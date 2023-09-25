<?php

namespace App\Http\Controllers;

use App\Models\Carrera;
use App\Models\Departamento;
use App\Models\Estudiante;
use App\Models\Profesor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
    {
        $users = User::with('estudiante', 'profesor')->get();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return "hola";
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        DB::beginTransaction();
        try {
            // Primera consulta
            $user = new User();
            $user -> nombre = $request -> nombre;
            $user -> apellidos = $request -> apellidos;
            $user -> email = $request -> email;
            $user -> identificacion = $request -> identificacion;
            $user -> password = $request -> password;
            $user -> rol_id = $request -> rol_id;
            $user -> save();

            // Segunda consulta
            if($user -> rol_id == '2'){
                $carrera = Carrera::where('nombre', $request->estudiante['carrera'])->first();
                $estudiante = new Estudiante();
                $estudiante -> semestre = $request->estudiante['semestre'];
                $estudiante -> carrera_id = $carrera -> id;
                $estudiante -> user_id = $user -> id;
                $estudiante -> save();
            }elseif($user -> rol_id == '3'){
                $departamento = Departamento::where('nombre', $request->profesor['departamento'])->first();
                $profesor = new Profesor();
                $profesor -> departamento_id = $departamento -> id;
                $profesor -> user_id = $user -> id;
                $profesor -> save();
            }
            // Si todo ha ido bien, confirma la transacción
            DB::commit();
            return response()->json(['message' => 'Transacción completada exitosamente'], 200);
        } catch (\Exception $e) {
            // Si ocurre algún error, revierte la transacción
            DB::rollback();
            return response()->json(['message' => 'Error en la transacción: ' . $e->getMessage()], 500);
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
}
