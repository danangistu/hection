<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Http\Controllers\Api\DataTables\WinnerDataTable;
use App\Http\Requests\Admin\WinnerRequest;
use App\Winner;
class WinnerController extends AdminController
{
  private $imageColumn = "picture";
  public function index(WinnerDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(WinnerRequest $request)
  {
      return $this->createFlashRedirect(Winner::class, $request, $this->imageColumn);
  }

  public function show(Winner $winner)
  {
      return $this->viewPath("show", $winner);
  }

  public function edit(Winner $winner)
  {
      return $this->getForm($winner);
  }

  public function update(Winner $winner, WinnerRequest $request)
  {
      return $this->saveFlashRedirect($winner, $request, $this->imageColumn);
  }

  public function destroy(Winner $winner)
  {
      return $this->destroyFlashRedirect($winner);
  }

}
