<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Http\Requests\Admin\VenueRequest;
use App\Venue;

class VenueController extends AdminController
{
    private $imageColumn = "picture";
    public function getVenues()
    {
        $venue = Venue::firstOrFail();
        return $this->getForm($venue);
    }
    public function patchVenues(Venue $venue, VenueRequest $request)
    {
        return $this->saveFlashRedirect($venue,$request,$this->imageColumn);
    }
}
