<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class TestimonialRequest extends FormRequest
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
          'picture'      => 'sometimes|max:2048|image',
          'testimonial'  => 'required',
          'name'         => 'required|string|max:255',
          'role'         => 'required|string|max:255'
        ];
    }
}
