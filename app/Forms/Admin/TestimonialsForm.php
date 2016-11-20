<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class TestimonialsForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('picture', 'file', [
              'label' => trans('admin.fields.testimonial.picform'),
              'attr' => ['class' => '']
          ])
          ->add('testimonial', 'textarea', [
              'label' => trans('admin.fields.testimonial.testimonial')
          ])
          ->add('name', 'text', [
              'label' => trans('admin.fields.testimonial.name')
          ])
          ->add('role', 'text', [
              'label' => trans('admin.fields.testimonial.role')
          ]);
      $this->addButtons();
    }
}
