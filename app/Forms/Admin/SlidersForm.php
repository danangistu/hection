<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class SlidersForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('picture', 'file', [
              'label' => trans('admin.fields.slider.picture'),
              'attr' => ['class' => '']
          ])
          ->add('layer1', 'textarea', [
              'label' => trans('admin.fields.slider.layer1')
          ])
          ->add('layer2', 'textarea', [
              'label' => trans('admin.fields.slider.layer2')
          ]);
      $this->addButtons();
    }
}
