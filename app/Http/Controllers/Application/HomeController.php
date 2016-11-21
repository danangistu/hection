<?php

namespace App\Http\Controllers\Application;

use App\Base\Controllers\ApplicationController;
use App\Slider;
use App\About;
use App\Contest;
use App\Day;
use App\Sponsor;
use App\Testimonial;
use App\Gallery;
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
        $sliders  = Slider::orderBy('id')->get();
        $about    = About::firstOrFail();
        $contests = Contest::orderBy('id')->get();
        $days     = Day::orderBy('id')->get();
        $sponsors      = Sponsor::orderBy('id')->get();
        $testimonials  = Testimonial::orderBy('id')->get();
        $galleries     = Gallery::orderBy('id')->get();
        return view('layouts.frontend', [
          'sliders'   => $sliders,
          'about'     => $about,
          'contests'  => $contests,
          'days'      => $days,
          'testimonials'=> $testimonials,
          'sponsors'  => $sponsors,
          'galleries'  => $galleries
        ]);
    }
}
