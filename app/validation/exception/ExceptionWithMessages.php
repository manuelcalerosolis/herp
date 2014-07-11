<?php

namespace Validation\Exception;

use Illuminate\Support\MessageBag;

/**
 * Base class for an exception with a MessageBag of messages attached.
 *
 * @package Euantorano\LaravelTools
 */
abstract class ExceptionWithMessages extends \Exception
    implements \Illuminate\Support\Contracts\MessageProviderInterface
{
    /**
     * @var MessageBag
     */
    protected $messages;

    /**
     * Create a new exception with a set of messages.
     * @param string       $message The message for the exception.
     * @param MessageBag $messages A MessageBag of messages attached to the exception.
     * @param int        $code The error code of the exception.
     * @param \Exception $previous THe parent of the exception.
     */
    public function __construct($message = '', MessageBag $messages = null, $code = 0, \Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);

        if (isset($messages)) {
            $this->messages = $messages;
        } else {
            $this->messages = new MessageBag();
        }
    }

    /**
     * Set the validation messages that occurred.
     *
     * @param MessageBag $errors A MessageBag of messages from the validator.
     *
     * @return $this
     */
    public function setMessages(MessageBag $errors)
    {
        $this->messages = $errors;

        return $this;
    }

    /**
     * Returns whether the exception ahs a MessageBag of messages attached or not.
     *
     * @return bool
     */
    public function hasMessages()
    {
        return !$this->messages->isEmpty();
    }

    /**
     * Get the validation messages that were returned by the validator.
     *
     * @return MessageBag
     */
    public function getMessages()
    {
        return $this->messages;
    }

    /**
     * Get the messages for the instance.
     *
     * @return \Illuminate\Support\MessageBag
     */
    public function getMessageBag()
    {
        return $this->getMessages();
    }
}