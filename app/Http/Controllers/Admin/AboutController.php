<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Http\Requests\Admin\AboutRequest;
use App\About;

class AboutController extends AdminController
{
    public function getAbouts()
    {
        $about = About::firstOrFail();
        return $this->getForm($about);
    }
    public function patchAbouts(About $about, AboutRequest $request)
    {
        return $this->saveFlashRedirect($about,$request);
    }
}
