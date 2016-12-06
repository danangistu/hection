<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class NewslettersForm extends AdminForm
{
    public function buildForm()
    {
      $this
        ->add('email', 'text', [
            'label' => trans('admin.fields.newsletter.email')
        ]);
      $this->addButtons();
    }
}
