<div class="form-group">
    {{ Form::label($name, $label) }}
    {{ $control }}
    @if ($error)
        {{ Form::label( $error, $error, array( "class" => "error_message" ) ) }}
    @endif
</div>