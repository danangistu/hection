<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Testimonial;

class TestimonialDataTable extends DataTableController
{
    protected $model = Testimonial::class;
    protected $image_columns = ['picture'];
    protected $columns = ['testimonial', 'name', 'role'];

    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $testimonials = Testimonial::query();
        return $this->applyScopes($testimonials);
    }
}
