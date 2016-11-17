<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AboutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      return [
          'title'             => 'string|max:200',
          'about'             => 'required',
          'pur_1'             => 'string|max:200',
          'pur_2'             => 'string|max:200',
          'pur_3'             => 'string|max:200',
          'pur_4'             => 'string|max:200',
          'pur_text_1'        => 'required',
          'pur_text_2'        => 'required',
          'pur_text_3'        => 'required',
          'pur_text_4'        => 'required'

      ];
    }
}
