<?php namespace hErp\Components;

use Illuminate\Support\Facades\Form;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\File;

class fieldBuilder {

    protected $defaultClass = array(
        'default' => 'form-control',
        'checkbox' => ''
    );

    public function getDefaultClass($type)
    {
        if(isset($this->defaultClass[$type]))
        {
            return $this->defaultClass[$type];
        }

        return $this->defaultClass['default'];
    }

    public function buildCssClass($type, & $attributes)
    {
        $defaultClasses = $this->getDefaultClass($type);

        if(isset($attributes['class']))
        {
            $attributes['class'] .= ' ' . $defaultClasses;
        }
        else
        {
            $attributes['class'] = $defaultClasses;
        }
    }

    public function buildLabel($name)
    {
        if (Lang::has( 'validation.attributes.' . $name ))
        {
            $label = Lang::get( 'validation.attributes.' . $name);
        }
        else
        {
            $label = str_replace( '_', ' ', $name);
        }

        return ucfirst($label);
    }

    public function buildErrors($name)
    {
        $error = null;

        if( Session::has('errors'))
        {
            $errors = Session::get('errors');
            if( $errors->has($name) )
            {
                $error = $errors->first($name);
            }
        }
        return $error;
    }

    public function buildTemplate($template)
    {
        if (File::exists('app/views/fields' . $template . 'blade.php'))
        {
            return 'fields' . $template;
        }
        return 'field/default';
    }

    public function buildControl($type, $name, $value = null, $attributes = array(), $options = array())
    {
        switch($type)
        {
            case 'select':
                return Form::select($name, $options, $value, $attributes);
            case 'password':
                return Form::password($name, $attributes);
            case 'checkbox':
                return Form::checkbox($name);
            default:
                return Form::input($type, $name, $value, $attributes);
        }
    }

    public function input($type, $name, $value = null, $attributes = array(), $options = array() )
    {
        $this->buildCssClass($type, $attributes);

        $label      = $this->buildLabel($name);
        $control    = $this->buildControl($type, $name, $value, $attributes, $options);
        $error      = $this->buildErrors($name);
        $template   = $this->buildTemplate($type);

        return View::make( $template, compact( 'name', 'label', 'control', 'error'));
    }

    public function text( $name, $value = null, $attributes = array(), $options = array() )
    {
        return $this->input( 'text', $name, $value, $attributes, $options );
    }

}
