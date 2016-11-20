<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class ContestsForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('title', 'text', [
              'label' => trans('admin.fields.contest.title')
          ])
          ->add('sub_title', 'text', [
              'label' => trans('admin.fields.contest.sub_title')
          ])
          ->add('picture', 'file', [
              'label' => trans('admin.fields.contest.picform'),
              'attr' => ['class' => '']
          ])
          ->add('content', 'textarea', [
              'label' => trans('admin.fields.contest.content')
          ]);
      $this->addButtons();
    }
}
