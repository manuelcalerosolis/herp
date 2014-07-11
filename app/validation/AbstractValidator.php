<?php

namespace Validation;

use Illuminate\Validation\Factory as ValidationFactory;

/**
 * Abstract Validation service to be extended by concrete validation services.
 *
 * Abstract validation should extend this class and include a $rules array at the very minimum.
 * They can also provide an $messages array and $fields array to use custom validation error messages and to normalise input respectively.
 *
 * @package Euantorano\Validation
 */
abstract class AbstractValidator
{
    /** @var ValidationFactory $validatorFactory */
    private $validatorFactory;
    /**
     * An array of rules for validation.
     *
     * Can be either a single dimensional array or a multi dimensional array in the form
     *
     * <code>'validationScenario' => array($rules)</code>
     *
     * @var array
     */
    protected $rules = array();
    /**
     * An array of validation messages to be used.
     *
     * @var array
     */
    protected $messages = array();
    /**
     * An array of valid fields for different scenarios.
     *
     * Can be either a single dimensional array or a multi dimensional array in the form
     *
     * <code>'validationScenario' => array($fields)</code>
     *
     * If empty, all fields are validated and returned by the validator.
     *
     * @var mixed
     */
    protected $fields = array();

    /**
     * Create a new validator instance.
     *
     * @param ValidationFactory $validatorFactory A validator factory instance to use.
     *
     * @return AbstractValidator
     */
    public function __construct(ValidationFactory $validatorFactory)
    {
        $this->validatorFactory = $validatorFactory;
    }

    /**
     * Validate an array of $input against the validation rules set for $scenario.
     *
     * @param array  $input    The input to validate.
     * @param string $scenario The scenario to validate against.
     *
     * @return array The validated an normalized input.
     *
     * @throws \InvalidArgumentException Thrown when the given scenario does not exist and rules is not a flat array.
     * @throws ValidationException Thrown when there is an error with the validation.
     */
    public function validate(array $input, $scenario = 'update')
    {
        $rules = $this->getRules($scenario);

        if (empty($rules)) {
            throw new \InvalidArgumentException('Invalid scenario');
        }

        /** @var \Illuminate\Validation\Validator $validator */
        $validator = $this->validatorFactory->make($input, $rules);

        if (!empty($this->messages)) {
            $validator->setCustomMessages($this->messages);
        }

        $fields = $this->getFields($scenario);

        $inputToReturn = $input;

        if (!empty($fields)) {
            $inputToReturn = $this->normalizeInput($input, $fields);
        }

        if ($validator->passes()) {
            return $inputToReturn;
        } else {
            throw new ValidationException('Validation failed', $validator->messages());
        }
    }

    /**
     * Normalize an input against a list of fields expected.
     *
     * @param array $input  The input to normalize.
     * @param array $fields The fields required.
     *
     * @return array The normalized input.
     */
    public function normalizeInput(array $input, array $fields)
    {
        $newInput = array();
        foreach ($fields as $field) {
            if (isset($input[$field])) {
                $newInput[$field] = $input[$field];
            }
        }

        return $newInput;
    }

    /**
     * Get the messages for the validator.
     *
     * @return array The defined messages.
     */
    public function getMessages()
    {
        return $this->messages;
    }

    /**
     * Get the rules for the validator.
     *
     * @param string $scenario The scenario to fetch rules for. Defaults to all rules ("*").
     *
     * @return array The defined rules.
     */
    public function getRules($scenario = '*')
    {
        $scenario = (string) $scenario;

        $rules = $this->rules;

        if ($scenario == '*') {
            $rules = $this->rules;
        } else {
            if (array_key_exists($scenario, $this->rules)) {
                $rules = $this->rules[$scenario];
            } else {
                if (count($this->rules) == count($this->rules, COUNT_RECURSIVE)) {
                    $rules = $this->rules;
                }
            }
        }

        return $rules;
    }

    /**
     * Get the filter fields for a given scenario.
     *
     * @param string $scenario The name of the scenario to fetch the filter fields for. Defaults to all ("*").
     *
     * @return array The filter fields.
     */
    public function getFields($scenario = '*')
    {
        $scenario = (string) $scenario;

        $fields = array();

        if ($scenario == '*') {
            $fields = $this->fields;
        } else {
            if (array_key_exists($scenario, $this->fields)) {
                $fields = $this->fields[$scenario];
            } else {
                if (count($this->rules) == count($this->rules, COUNT_RECURSIVE)) {
                    $fields = $this->fields;
                }
            }
        }

        return $fields;
    }

    /**
     * Magic method allowing the calling of validation using methods such as "validateUpdate" where "Update" is a defined scenario.
     *
     * @param string $name      The name of the method called.
     * @param array  $arguments The arguments passed to the method - in this case should only be the input array.
     *
     * @return bool The result of the call to validate.
     *
     * @see validate
     */
    public function __call($name = '', array $arguments)
    {
        if (substr($name, 0, 8) == 'validate') {
            $scenario = strtolower(substr($name, 8));

            if (count($arguments) > 0) {
                return $this->validate($arguments[0], $scenario);
            }
        }
    }
}