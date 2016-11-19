<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
  protected $fillable = ['id','day_id', 'time', 'program', 'description', 'duration', 'place'];

  public function programs()
  {
    return $this->hasMany(Program::class);
  }
}
