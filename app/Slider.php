<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $fillable = ['picture', 'layer1', 'layer2'];

    public function sliders()
    {
        return $this->hasMany(Slider::class);
    }
}
