<table id="{{ $id }}" class="{{ $class }}">

    <colgroup>
        @for ($i = 0; $i < count($columns); $i++)
            <col class="con{{ $i }}" />
        @endfor
    </colgroup>

    <thead>
        <tr>
            @foreach($columns as $i => $c)
                <th align="center" valign="middle" class="head{{ $i }}"
                    @if ($c == 'Checkbox')
                        style="width:20px; padding:10px"
                    @endif
                >
                    @if ($c == 'Checkbox' && $hasCheckboxes = true)
                        <input type="checkbox" class="selectAll" />
                    @else
                        {{ $c }}
                    @endif
                </th>
            @endforeach
        </tr>
    </thead>

    <tbody>
        @foreach($data as $d)
        <tr>
            @foreach($d as $dd)
                <td>{{ $dd }}</td>
            @endforeach
        </tr>
        @endforeach
    </tbody>

</table>

@include('layout.javascript', array('id' => $id, 'class' => $class, 'hasCheckboxes' => $hasCheckboxes, 'options' => $options, 'callbacks' =>  $callbacks))

@section('script')

    window.onDatatableReady = function() 
    {      

        $('tbody :checkbox').click(function()
        {
            setDeleteEnabled();
        }); 

        $('tbody tr').click(function(event)
        {
            if (event.target.type !== 'checkbox' && event.target.type !== 'button' && event.target.tagName.toLowerCase() !== 'a')
            {
                $checkbox = $(this).closest('tr').find(':checkbox');
                var checked = $checkbox.prop('checked');
                $checkbox.prop('checked', !checked);
                setDeleteEnabled();
            }
        });

    }   

    $('.selectAll').click(function()
    {
        $(this).closest('table').find(':checkbox').prop('checked', this.checked);
        setDeleteEnabled();
    });

    function onClickDelete()
    {
        if (!confirm('¿Desea borrar los registros seleccionados?'))
        {
            return;
        }

        $('#idForm').submit();
    };

    function setDeleteEnabled()
    {
        var checked = $('tbody :checkbox:checked').length > 0;
        $('#btnDelete').attr("disabled", !checked);
    }

@stop

