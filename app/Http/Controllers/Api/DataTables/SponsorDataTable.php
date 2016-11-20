<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Sponsor;

class SponsorDataTable extends DataTableController
{
    protected $model = Sponsor::class;
    protected $image_columns = ['picture'];
    protected $columns = ['name', 'link'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $sponsors = Sponsor::query();
        return $this->applyScopes($sponsors);
    }
}
