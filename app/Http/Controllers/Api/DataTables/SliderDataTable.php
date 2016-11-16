<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Slider;

class SliderDataTable extends DataTableController
{
    protected $model = Slider::class;
    protected $image_columns = ['picture'];
    protected $columns = ['layer1', 'layer2'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $sliders = Slider::query();
        return $this->applyScopes($sliders);
    }
}
