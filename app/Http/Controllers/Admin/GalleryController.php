<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Gallery;
use App\Http\Controllers\Api\DataTables\GalleryDataTable;
use App\Http\Requests\Admin\GalleryRequest;

class GalleryController extends AdminController
{
  private $imageColumn = "picture";
  public function index(GalleryDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(GalleryRequest $request)
  {
      return $this->createFlashRedirect(Gallery::class, $request, $this->imageColumn);
  }

  public function show(Gallery $gallery)
  {
      return $this->viewPath("show", $gallery);
  }

  public function edit(Gallery $gallery)
  {
      return $this->getForm($gallery);
  }

  public function update(Gallery $gallery, GalleryRequest $request)
  {
      return $this->saveFlashRedirect($gallery, $request, $this->imageColumn);
  }

  public function destroy(Gallery $gallery)
  {
      return $this->destroyFlashRedirect($gallery);
  }
}
