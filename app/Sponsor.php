<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
  protected $fillable = ['picture', 'name', 'link'];

  public function sponsors()
  {
      return $this->hasMany(Sponsor::class);
  }
}
