<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Contest;

class ContestDataTable extends DataTableController
{
    protected $model = Contest::class;
    protected $image_columns = ['picture'];
    protected $columns = ['title', 'sub_title', 'content'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $contests = Contest::query();
        return $this->applyScopes($contests);
    }
}
