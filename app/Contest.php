<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
  protected $fillable = ['title', 'sub_title', 'content', 'picture'];

  public function contest()
  {
      return $this->hasMany(Contest::class);
  }
}
