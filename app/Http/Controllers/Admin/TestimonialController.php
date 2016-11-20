<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Testimonial;
use App\Http\Controllers\Api\DataTables\TestimonialDataTable;
use App\Http\Requests\Admin\TestimonialRequest;

class TestimonialController extends AdminController
{
    private $imageColumn = "picture";
    public function index(TestimonialDataTable $dataTable)
    {
        return $dataTable->render($this->viewPath());
    }

    public function store(TestimonialRequest $request)
    {
        return $this->createFlashRedirect(Testimonial::class, $request, $this->imageColumn);
    }

    public function show(Testimonial $testimonial)
    {
        return $this->viewPath("show", $testimonial);
    }

    public function edit(Testimonial $testimonial)
    {
        return $this->getForm($testimonial);
    }

    public function update(Testimonial $testimonial, TestimonialRequest $request)
    {
        return $this->saveFlashRedirect($testimonial, $request, $this->imageColumn);
    }

    public function destroy(Testimonial $testimonial)
    {
        return $this->destroyFlashRedirect($testimonial);
    }
}
