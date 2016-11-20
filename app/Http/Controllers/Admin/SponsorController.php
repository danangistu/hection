<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Http\Controllers\Api\DataTables\sponsorDataTable;
use App\Http\Requests\Admin\SponsorRequest;
use App\Sponsor;
class SponsorController extends AdminController
{
  private $imageColumn = "picture";
  public function index(SponsorDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(SponsorRequest $request)
  {
      return $this->createFlashRedirect(Sponsor::class, $request, $this->imageColumn);
  }

  public function show(Sponsor $sponsor)
  {
      return $this->viewPath("show", $sponsor);
  }

  public function edit(Sponsor $sponsor)
  {
      return $this->getForm($sponsor);
  }

  public function update(Sponsor $sponsor, SponsorRequest $request)
  {
      return $this->saveFlashRedirect($sponsor, $request, $this->imageColumn);
  }

  public function destroy(Sponsor $sponsor)
  {
      return $this->destroyFlashRedirect($sponsor);
  }

}
