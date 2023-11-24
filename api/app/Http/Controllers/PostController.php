<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Expr\Cast\Object_;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        try {
            $post = Post::all();
            return response()->json([
                'status' => true,
                'data' => $post
            ], 200)->header('Content-Type', 'application/json');
        } catch (Exception $e) {
            return response()->json([
                'status' => true,
                'message' => $e
            ], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            "descripcion" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ], 400);
        }
        try {
            $post = new Post();
            $post->descripcion = $request->descripcion;
            $post->user_id = $user->id;
            $post->save();
            return response()->json([
                'status' => true,
                'message' => 'create'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 401);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {

        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            "descripcion" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ], 400);
        }
        try {
            $post->descripcion = $request->descripcion;
            $post->user_id = $user->id;
            $post->save();
            return response()->json([
                'status' => true,
                'message' => 'updated'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {

        $post->delete();
        return response()->json([
            'status' => true,
            'message' => 'Post eliminado'
        ], 200);
    }

    public function misPosts()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario no logueado'
            ], 401);
        }
        try {
            $posts = DB::select('select * from posts where user_id = ?', [3]);
            return response()->json([
                'status' => true,
                'message' => 'Exitos',
                'data' => $posts
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error en el servidor: ' . $e
            ]);
        }
    }


    public function filtrarProyectos($busqueda)
    {
        $controller = new Controller();
        $response = $controller->filtrarEstudiantes($busqueda);
        $api = $response->json();
        $ids = [];
        if ($api) {
            foreach ($api as $userdata) {
                $ids[] = $userdata['id'];
            }
            $posts = DB::table('posts as p')
                ->join('users as u', 'p.user_id', '=', 'u.id')
                ->where('u.user_name', 'like', '%' . $busqueda . '%')
                ->orWhere('u.codigo', 'like', '%' . $busqueda . '%')
                ->orWhereIn('p.user_id', $ids)
                ->orderBy('p.created_at', 'desc')
                ->select(
                    'p.descripcion',
                    'u.user_name as user_name',
                    'p.user_id',
                    'p.created_at as fecha_publicacion'
                )
                ->get();
        }

        $data = [];

        foreach ($api as $userData) {
            foreach ($posts as $post) {
                if ($post->user_id == $userData['id']) {
                    $data = [
                        "descripcion_proyecto" => $post->descripcion,
                        "user_name" => $post->user_name,
                        "semestre" => $userData['semestre'],
                        "carrera" => $userData['nombre_carrera'],
                        "fecha_publicacion" => $post->fecha_publicacion,
                        "user_id" => $post->user_id
                    ];
                }
            }
        }

        if (!$posts) {
            return response()->json([
                'status' => false,
                'message' => 'No se encontraron coincidencias'
            ], 400);
        }


        return response()->json([
            'status' => true,
            'data' => $data,
        ], 200);
    }
}
