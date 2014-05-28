<?php namespace Validators\Service;

use Illuminate\Validation\Factory;
use Validators\AbstractValidator;
use Validators\Service;

abstract class LaravelValidator extends  AbstractValidator{

    protected $validator;

    public function __construct(Factory $validator)
    {
        $this->validator = $validator;
    }

    public function replace()
    {
        $data   = $this->data;
        $rules  = $this->rules;

        array_walk($rules, function(&$rule) use ($data)
        {
            preg_match_all('/\{^.*?}/', $rule, $matches);

            foreach ($matches[0] as $key => $placeholder)
            {
                if(isset($data[$matches[1][$key]]))
                {
                    $rule = str_replace($placeholder, $data[$matches[1][$key]], $rule);
                }
            }
        });
    }

    public function passes()
    {
        $rules      = $this->replace();

        $validator  = $this->validator->make($this->data, $rules);

        if($validator->passes())
        {
            return true;
        }

        $this->errors = $validator->messages();

    }
}