<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Day;

class DayDataTable extends DataTableController
{
    protected $model = Day::class;
    protected $columns = ['day'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $days = Day::query();
        return $this->applyScopes($days);
    }
}
