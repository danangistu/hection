<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Day;
use App\Http\Controllers\Api\DataTables\dayDataTable;
use App\Http\Requests\Admin\DayRequest;

class DayController extends AdminController
{
    public function index(DayDataTable $dataTable)
    {
        return $dataTable->render($this->viewPath());
    }

    public function store(DayRequest $request)
    {
        return $this->createFlashRedirect(Day::class, $request);
    }

    public function show(Day $day)
    {
        return $this->viewPath("show", $day);
    }

    public function edit(Day $day)
    {
        return $this->getForm($day);
    }

    public function update(Day $day, DayRequest $request)
    {
        return $this->saveFlashRedirect($day, $request);
    }

    public function destroy(Day $day)
    {
        return $this->destroyFlashRedirect($day);
    }
}
