<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
  protected $fillable = ['picture', 'title', 'description'];

  public function galleries()
  {
      return $this->hasMany(Gallery::class);
  }
}
