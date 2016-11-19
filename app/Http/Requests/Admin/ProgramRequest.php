<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ProgramRequest extends FormRequest
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
          'time'              => 'required',
          'day_id'            => 'required',
          'program'           => 'string|max:200',
          'description'       => 'required',
          'duration'          => 'string|max:200',
          'place'             => 'string|max:200'
        ];
    }
}
