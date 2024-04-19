<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public $table = "profile";

    protected $fillable = [
        'nama', 'tanggal', 'kelamin', 'alamat', 'category'
    ];
    use HasFactory;
}
