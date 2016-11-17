<?php

namespace App\Forms\Admin;

use App\Base\Forms\AdminForm;

class AboutsForm extends AdminForm
{
    public function buildForm()
    {
      $this
          ->add('title', 'text', [
              'label' => trans('admin.fields.about.title')
          ])
          ->add('about', 'textarea', [
              'label' => trans('admin.fields.about.about')
          ])
          ->add('pur_1', 'text', [
              'label' => trans('admin.fields.about.pur_1')
          ])
          ->add('pur_text_1', 'textarea', [
              'label' => trans('admin.fields.about.pur_text_1')
          ])
          ->add('pur_2', 'text', [
              'label' => trans('admin.fields.about.pur_2')
          ])
          ->add('pur_text_2', 'textarea', [
              'label' => trans('admin.fields.about.pur_text_2')
          ])
          ->add('pur_3', 'text', [
              'label' => trans('admin.fields.about.pur_3')
          ])
          ->add('pur_text_3', 'textarea', [
              'label' => trans('admin.fields.about.pur_text_3')
          ])
          ->add('pur_4', 'text', [
              'label' => trans('admin.fields.about.pur_4')
          ])
          ->add('pur_text_4', 'textarea', [
              'label' => trans('admin.fields.about.pur_text_4')
          ]);
      $this->addButtons();
    }
}
