<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'nombre' => 'required|max:45',
            'cantidad' => 'required|numeric|min:2',
            'precio' => 'required|min:3|'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El :attribute es olbigatorio',
            'cantidad.required' => 'añade un :attribute',
            'precio.min' => 'El :attribute debe ser minimo de 3 cifras'
        ];
    }
}
