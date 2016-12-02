<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class WinnersForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('school', 'text', [
              'label' => trans('admin.fields.winner.school')
          ])
          ->add('title', 'text', [
              'label' => trans('admin.fields.winner.title')
          ])
          ->add('description', 'textarea', [
              'label' => trans('admin.fields.winner.description')
          ])
          ->add('picture', 'file', [
            'label' => trans('admin.fields.winner.picform'),
            'attr' => ['class' => '']
          ]);
      $this->addButtons();
    }
}
