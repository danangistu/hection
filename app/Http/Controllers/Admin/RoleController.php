<?php

namespace App\Http\Controllers\Admin;

use App\Base\Controllers\AdminController;
use App\Role;
use App\Http\Controllers\Api\DataTables\RoleDataTable;
use App\Http\Requests\Admin\RoleRequest;

class RoleController extends AdminController
{
  public function index(RoleDataTable $dataTable)
  {
      return $dataTable->render($this->viewPath());
  }

  public function store(RoleRequest $request)
  {
      return $this->createFlashRedirect(Role::class, $request);
  }

  public function show(Role $role)
  {
      return $this->viewPath("show", $role);
  }

  public function edit(Role $role)
  {
      return $this->getForm($role);
  }

  public function update(Role $role, RoleRequest $request)
  {
      return $this->saveFlashRedirect($role, $request);
  }

  public function destroy(Role $role)
  {
      return $this->destroyFlashRedirect($role);
  }
}
