<?php

namespace App\Http\Controllers\Application;

use App\Base\Controllers\ApplicationController;
use App\Slider;
use App\About;
use App\Contest;
use App\Day;
use App\Sponsor;
use App\Winner;
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
        $sliders        = Slider::orderBy('id')->get();
        $about          = About::firstOrFail();
        $contests       = Contest::orderBy('id')->get();
        $count_contest  = Contest::count();
        $days           = Day::orderBy('id')->get();
        $sponsors       = Sponsor::orderBy('id')->get();
        $winners         = Winner::orderBy('title')->get();
        $testimonials   = Testimonial::orderBy('id')->get();
        $galleries      = Gallery::orderBy('id')->get();
        return view('frontend.content', [
          'sliders'       => $sliders,
          'about'         => $about,
          'contests'      => $contests,
          'count_contest' => $count_contest,
          'days'          => $days,
          'testimonials'  => $testimonials,
          'sponsors'      => $sponsors,
          'winners'       => $winners,
          'galleries'     => $galleries
        ]);
    }
}
