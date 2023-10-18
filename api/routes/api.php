<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(UserController::class)->group(function(){
    Route::get('user' , 'index');
    Route::post('user' , 'store');
    Route::get('user/create' , 'create');
    Route::get('user/{user}' , 'show');
    Route::put('user/{user}' , 'update');
    Route::delete('user/desactivarCuenta/{user}' , 'destroy');
    Route::get('user/{user}/edit' , 'edit');
});

Route::controller(AdminController::class)->group(function(){
    Route::put('admin/user-estado/{user}' , 'estadoUsuario');
    Route::delete('admin/user-registro/{user}', 'eliminarRegistroUsuario');
});

