<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class DaysForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('day', 'text', [
              'label' => trans('admin.fields.day.day')
          ]);
      $this->addButtons();
    }
}
