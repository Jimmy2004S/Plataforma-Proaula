<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Carrera extends Model
{
    use HasFactory;


    //Relacion uno a muchos
    public function estudiantes(): HasMany
    {
        return $this->hasMany(Estudiante::class);
    }
}
