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

<script type="text/javascript">
    jQuery(document).ready(function(){
        // dynamic table
        jQuery('.{{ $class }}').dataTable({
            "bAutoWidth": false,
            @if (isset($hasCheckboxes) && $hasCheckboxes)
                'aaSorting': [['1', 'asc']],
                // Disable sorting on the first column
                "aoColumnDefs": [ {
                    'bSortable': false,
                    'aTargets': [ 0, {{ count($columns) - 1 }} ]
                    } ],
            @endif

    @foreach ($options as $k => $o)
    {{ json_encode($k) }}: {{ json_encode($o) }},
    @endforeach

    @foreach ($callbacks as $k => $o)
    {{ json_encode($k) }}: {{ $o }},
    @endforeach


    /*
    "fnDrawCallback": function(oSettings) {
        if (window.onDatatableReady) {
            window.onDatatableReady();
        }
    }

    */


    window.onDatatableReady = function() {
        $(':checkbox').click(function () {
            setDeleteEnabled();
        });

        $('tbody tr').click(function (event) {
            if (event.target.type !== 'checkbox' && event.target.type !== 'button' && event.target.tagName.toLowerCase() !== 'a') {
                $checkbox = $(this).closest('tr').find(':checkbox');
                var checked = $checkbox.prop('checked');
                $checkbox.prop('checked', !checked);
                setDeleteEnabled();
            }
        });
    };

    function setDeleteEnabled() {

        var checked = $('tbody :checkbox:checked').length > 0;

        $('#btnDelete > button').prop('disabled', !checked);
    }


    });
    });


/*

*/


</script>

<!--
//@if (!$noScript)
//    @include('datatable::javascript', array('id' => $id, 'options' => $options, 'callbacks' =>  $callbacks))
// @endif
-->

@section('script')

$('.selectAll').click(function() {
    $(this).closest('table').find(':checkbox').prop('checked', this.checked);
});



@stop

