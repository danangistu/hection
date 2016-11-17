<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
  protected $fillable = ['title', 'about', 'pur_1', 'pur_text_1', 'pur_2', 'pur_text_2', 'pur_3', 'pur_text_3', 'pur_4', 'pur_text_4'];

  public function abouts()
  {
      return $this->hasMany(About::class);
  }
}
