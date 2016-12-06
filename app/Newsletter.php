<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
  protected $fillable = ['id','email'];

  public function newsletters()
  {
      return $this->hasMany(Newsletter::class);
  }
}
