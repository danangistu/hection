<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class SponsorsForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('name', 'text', [
              'label' => trans('admin.fields.sponsor.name')
          ])
          ->add('picture', 'file', [
            'label' => trans('admin.fields.sponsor.picform'),
            'attr' => ['class' => '']
          ])
          ->add('link', 'text', [
              'label' => trans('admin.fields.sponsor.link')
          ]);
      $this->addButtons();
    }
}
