<?php namespace hErp\Components;


use Illuminate\Support\ServiceProvider;

class fieldServiceProvider extends ServiceProvider {
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app['Field'] = $this->app->share(function($app)
        {
            $fieldBuilder = new fieldBuilder();
            return $fieldBuilder;
        });
    }


} 