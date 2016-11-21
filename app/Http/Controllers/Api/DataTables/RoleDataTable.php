<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Role;

class roleDataTable extends DataTableController
{
    protected $model = Role::class;
    protected $columns = ['id','role'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $roles = Role::query();
        return $this->applyScopes($roles);
    }
}
