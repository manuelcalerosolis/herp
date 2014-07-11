<script type="text/javascript">

    jQuery(document).ready(function()
    {
        // dynamic table
        jQuery('.{{ $class }}').dataTable(
        {
            "bAutoWidth": false,
            @if (isset($hasCheckboxes) && $hasCheckboxes)
                'aaSorting': [['1', 'asc']],
                "aoColumnDefs": [
                    {
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

            "fnDrawCallback": function(oSettings) 
                {
                if (window.onDatatableReady)
                    {
                    window.onDatatableReady();
                    }
                }

        });
    });


</script>


