<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class GalleriesForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('picture', 'file', [
              'label' => trans('admin.fields.gallery.picture'),
              'attr' => ['class' => '']
          ])
          ->add('title', 'text', [
              'label' => trans('admin.fields.gallery.title')
          ])
          ->add('description', 'textarea', [
              'label' => trans('admin.fields.gallery.description')
          ]);
      $this->addButtons();
    }
}
