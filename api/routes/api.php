<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Models\Perfil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::middleware(['auth:sanctum'])->group(function(){
    Route::controller(PostController::class)->group(function(){
        Route::get('post' , 'index');
        Route::post('post' , 'store');
        Route::delete('post/{post}' , 'destroy');
        Route::get('user/misPosts' , 'misPosts');
        Route::get('filtrar/{busqueda}' , 'filtrarProyectos');
        Route::post('post/{post}/update', 'update');
    });
    Route::controller(UserController::class)->group(function(){
        Route::get('user' , 'index');
        Route::get('user/{user}' , 'show');
        Route::put('user/{user}' , 'update');
        Route::delete('user/desactivarCuenta/{user}' , 'destroy');
        Route::post('user' , 'store');
        Route::get('userLogueado' ,  'userLogueado');
        Route::get('logout' ,  'logout');
    });
    Route::controller(AdminController::class)->group(function(){
        Route::put('admin/user-estado/{user}' , 'estadoUsuario');
        Route::delete('admin/user-registro/{user}', 'eliminarRegistroUsuario');
    });
});


Route::controller(UserController::class)->group(function(){
    Route::post('login' , 'login');
    Route::post('user' , 'store');
});









