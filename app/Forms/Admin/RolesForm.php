<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class RolesForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('role', 'text', [
              'label' => trans('admin.fields.role.role')
          ]);
      $this->addButtons();
    }
}
