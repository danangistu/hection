<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Slider;
use App\Http\Controllers\Api\DataTables\SliderDataTable;
use App\Http\Requests\Admin\SliderRequest;

class SliderController extends AdminController
{
    private $imageColumn = "picture";
    public function index(SliderDataTable $dataTable)
    {
        return $dataTable->render($this->viewPath());
    }

    public function store(SliderRequest $request)
    {
        return $this->createFlashRedirect(Slider::class, $request, $this->imageColumn);
    }

    public function show(Slider $slider)
    {
        return $this->viewPath("show", $slider);
    }

    public function edit(Slider $slider)
    {
        return $this->getForm($slider);
    }

    public function update(Slider $slider, SliderRequest $request)
    {
        return $this->saveFlashRedirect($slider, $request, $this->imageColumn);
    }

    public function destroy(Slider $slider)
    {
        return $this->destroyFlashRedirect($slider);
    }
}
