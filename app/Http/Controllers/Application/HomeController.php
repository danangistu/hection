<?php

namespace App\Http\Controllers\Application;

use App\Base\Controllers\ApplicationController;
use App\Slider;
class HomeController extends ApplicationController
{
    /**
     * Show the application homepage to the user.
     *
     * @return Response
     */
    public function index()
    {
        //$articles = session('current_lang')->articles()->published()->orderBy('published_at', 'desc')->paginate(5);
        $sliders = Slider::orderBy('id')->get();
        return view('layouts.frontend', [
          'sliders' => $sliders
        ]);
    }
}
