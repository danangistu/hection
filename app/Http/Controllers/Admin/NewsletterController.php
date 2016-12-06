<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\newsletter;
use App\Http\Controllers\Api\DataTables\NewsletterDataTable;
use App\Http\Requests\Admin\NewsletterRequest;

class NewsletterController extends AdminController
{
  public function index(NewsletterDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(NewsletterRequest $request)
  {
      return $this->createFlashRedirect(Newsletter::class, $request);
  }

  public function show(Newsletter $newsletter)
  {
      return $this->viewPath("show", $newsletter);
  }

  public function edit(Newsletter $newsletter)
  {
      return $this->getForm($newsletter);
  }

  public function update(Newsletter $newsletter, NewsletterRequest $request)
  {
      return $this->saveFlashRedirect($newsletter, $request);
  }

  public function destroy(Newsletter $newsletter)
  {
      return $this->destroyFlashRedirect($newsletter);
  }
}
