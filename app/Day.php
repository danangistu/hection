<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
  protected $fillable = ['id','day'];

  public function sliders()
  {
      return $this->hasMany(Day::class);
  }
}
