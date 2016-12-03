<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prize extends Model
{
  protected $fillable = ['picture', 'title', 'description'];

  public function prizes()
  {
      return $this->hasMany(Prize::class);
  }
}
