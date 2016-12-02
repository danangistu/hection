<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Winner;

class winnerDataTable extends DataTableController
{
    protected $model = Winner::class;
    protected $image_columns = ['picture'];
    protected $columns = ['school', 'title', 'description'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $winners = Winner::query();
        return $this->applyScopes($winners);
    }
}
