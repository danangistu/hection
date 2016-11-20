<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
  protected $fillable = ['picture', 'testimonial', 'name', 'role'];

  public function testimonials()
  {
      return $this->hasMany(Testimonial::class);
  }
}
