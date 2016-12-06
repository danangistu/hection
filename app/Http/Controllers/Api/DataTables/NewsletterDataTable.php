<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Newsletter;

class NewsletterDataTable extends DataTableController
{
    protected $model = Newsletter::class;
    protected $columns = ['email'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $newsletters = Newsletter::query();
        return $this->applyScopes($newsletters);
    }
}
