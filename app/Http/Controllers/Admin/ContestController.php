<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Contest;
use App\Http\Controllers\Api\DataTables\ContestDataTable;
use App\Http\Requests\Admin\ContestRequest;

class ContestController extends AdminController
{
  private $imageColumn = "picture";
  public function index(ContestDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(ContestRequest $request)
  {
      return $this->createFlashRedirect(Contest::class, $request, $this->imageColumn);
  }

  public function show(Contest $contest)
  {
      return $this->viewPath("show", $contest);
  }

  public function edit(Contest $contest)
  {
      return $this->getForm($contest);
  }

  public function update(Contest $contest, ContestRequest $request)
  {
      return $this->saveFlashRedirect($contest, $request, $this->imageColumn);
  }

  public function destroy(Contest $contest)
  {
      return $this->destroyFlashRedirect($contest);
  }
}
