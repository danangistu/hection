<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class PrizesForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('picture', 'file', [
              'label' => trans('admin.fields.prize.picture'),
              'attr' => ['class' => '']
          ])
          ->add('title', 'text', [
              'label' => trans('admin.fields.prize.title')
          ])
          ->add('description', 'textarea', [
              'label' => trans('admin.fields.prize.description')
          ]);
      $this->addButtons();
    }
}
