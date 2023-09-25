<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Estudiante extends Model
{
    use HasFactory;


    //Relacion uno a uno inversa
    public function user()
    {
    return $this->belongsTo(User::class);
    }


    //Relacion uno a muchos inversa
    public function carrera(): BelongsTo
    {
        return $this->belongsTo(Carrera::class);
    }
}
