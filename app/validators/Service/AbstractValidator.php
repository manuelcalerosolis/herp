<?php namespace Validators;

abstract class AbstractValidator {

    protected $validator;

    protected $data = array();

    protected $rules = array();

    protected $errors;

    protected function with( array $data)
    {
        $this->data = $data;

        return $this;
    }

    abstract function passes();

    public function errors()
    {
        return $this->errors;
    }

}