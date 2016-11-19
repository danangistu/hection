<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Day;
use App\Program;
use App\Http\Controllers\Api\DataTables\ProgramDataTable;
use App\Http\Requests\Admin\ProgramRequest;

class ProgramController extends AdminController
{
  public function index(ProgramDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(ProgramRequest $request)
  {
      return $this->createFlashRedirect(Program::class, $request);
  }

  public function show(Program $program)
  {
      return $this->viewPath("show", $program);
  }

  public function edit(Program $program)
  {
      return $this->getForm($program);
  }

  public function update(Program $program, ProgramRequest $request)
  {
      return $this->saveFlashRedirect($program, $request);
  }

  public function destroy(Program $program)
  {
      return $this->destroyFlashRedirect($program);
  }
  protected function getSelectList()
  {
      return Day::pluck('day', 'id')->all();
  }
}
