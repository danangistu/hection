<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
  protected $fillable = ['picture', 'place', 'description','address'];

  public function venues()
  {
      return $this->hasMany(Venue::class);
  }
}
