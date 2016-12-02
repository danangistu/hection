<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Winner extends Model
{
  protected $fillable = ['picture', 'school', 'title', 'description'];

  public function Winners()
  {
      return $this->hasMany(Winner::class);
  }
}
