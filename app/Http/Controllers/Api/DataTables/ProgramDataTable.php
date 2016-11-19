<?php

namespace App\Http\Controllers\Api\DataTables;

use App\Base\Controllers\DataTableController;
use App\Program;

class ProgramDataTable extends DataTableController
{
    /**
     * @var string
     */
    protected $model = Program::class;
    protected $columns = ['time','program','description','duration','place','day'];
    protected $common_columns = ['created_at', 'updated_at'];

    public function query()
    {
        $programs = Program::select('programs.id','time','program','description','duration','place', 'day_id','day','programs.created_at','programs.updated_at')
          ->join('days','days.id','=','programs.day_id');
        return $this->applyScopes($programs);
    }
}
