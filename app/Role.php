<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  protected $fillable = ['id','role'];

  public function roles()
  {
      return $this->hasMany(Role::class);
  }
}
