<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class VenuesForm extends AdminForm
{
    public function buildForm()
    {
      $this
        ->add('picture', 'file', [
          'label' => trans('admin.fields.venue.picture'),
          'attr' => ['class' => '']
        ])
        ->add('place', 'text', [
          'label' => trans('admin.fields.venue.place')
        ])
        ->add('description', 'textarea', [
            'label' => trans('admin.fields.venue.description')
        ])
        ->add('address', 'textarea', [
            'label' => trans('admin.fields.venue.address')
        ]);
      $this->addButtons();
    }
}
