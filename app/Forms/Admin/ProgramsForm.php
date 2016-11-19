<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;
use App\Day;
class ProgramsForm extends AdminForm
{
    public function selectDay(){

    }
    public function buildForm()
    {
      $day = Day::all('id','day');

      $this
          ->add('day_id', 'choice', [
              'choices' =>$this->data,
              'label' => trans('admin.fields.program.day_id')
          ])
          ->add('time', 'text', [
              'label' => trans('admin.fields.program.time')
          ])
          ->add('program', 'text', [
              'label' => trans('admin.fields.program.program')
          ])
          ->add('description', 'textarea', [
              'label' => trans('admin.fields.program.description')
          ])
          ->add('duration', 'text', [
              'label' => trans('admin.fields.program.duration')
          ])
          ->add('place', 'text', [
              'label' => trans('admin.fields.program.place')
          ]);
      $this->addButtons();
    }
}
