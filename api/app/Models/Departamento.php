<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Departamento extends Model
{
    use HasFactory;

    //Relacion uno a muchos
    public function profesores(): HasMany
    {
        return $this->hasMany(Profesor::class);
    }
}
