<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequest extends FormRequest
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
        $emailValidation = auth()->user() ? 'email' : 'email|unique:users,email';

        return [
            '*' => 'required',
            'name_on_card' => 'nullable',
            'email' => $emailValidation
        ];
    }

    public function messages()
    {
        $loginRoute = route('login');

        return [
            'email.unique' => "you already have an account with this email. please <a href='${loginRoute}'>login</a> to continue."
        ];
    }
}
