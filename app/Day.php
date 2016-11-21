<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
  protected $fillable = ['id','day'];

  public function days()
  {
      return $this->hasMany(Day::class);
  }
}
