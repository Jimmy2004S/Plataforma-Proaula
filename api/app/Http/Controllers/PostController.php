<?php

namespace App\Http\Controllers;

use App\Models\Post;


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
        $post = Post::all();
        return response()->json($post);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "descripcion" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ]);
        }
        $post = new Post();
        $post->descripcion = $request->descripcion;
        $post->user_id = 2;
        $post->save();
        return response()->json([
            'status' => true,
            'message' => 'create'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
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
        $posts = DB::select('select * from post where user_id = ?', [$user->id]);
        return response()->json([
            'status' => true,
            'message' => 'Exitos',
            'data' => $posts
        ], 200);
    }


    public function filtrarProyectos($busqueda)
    {

        $controller = new Controller();
        $response = $controller->filtrarEstudiantes('Ad');
        $api = $response->json();
        $posts = DB::table('posts as p')
            ->join('users as u', 'p.user_id', '=', 'u.id')
            ->where('u.user_name', 'like', '%' . $busqueda . '%')
            ->orWhere('p.user_id' , '=' , $api['id'] )
            ->orderBy('p.created_at', 'desc')
            ->select('p.*', 'u.user_name as user_name')
            ->get();


        if (!$posts) {
            return response()->json([
                'status' => true,
                'message' => 'No se encontraron coincidencias'
            ], 400);
        }

        return response()->json([
            'status' => true,
            'data' => $posts
        ], 200);
    }
}
