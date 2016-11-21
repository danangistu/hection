<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Gallery;

class GalleryDataTable extends DataTableController
{
    protected $model = Gallery::class;
    protected $image_columns = ['picture'];
    protected $columns = ['title', 'description'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $galleries = Gallery::query();
        return $this->applyScopes($galleries);
    }
}
