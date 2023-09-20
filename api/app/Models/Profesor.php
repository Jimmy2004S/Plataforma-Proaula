<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profesor extends Model
{
    use HasFactory;
    protected $table = 'profesores';

    //Relacion uno a muchos inversa
    public function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }
}
