<?php namespace Validators\Service;

use Illuminate\Support\MessageBag;
use Illuminate\Support\ServiceProvider;
use Validators\UserCreateValidator;

class ValidatorsServiceProvider extends ServiceProvider {

    public function register()
    {
        $this->registerUserValidation();
    }

    /**
     * Register User Validation
     */
    protected function registerUserValidation()
    {
        $this->app->bind('Validators\UserCreateValidator', function($app)
        {
            return new UserCreateValidator( $app['validator'] );
        });
    }

}