<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Table specific configuration options.
    |--------------------------------------------------------------------------
    |
    */

    'table' => array(

        /*
        |--------------------------------------------------------------------------
        | Table class
        |--------------------------------------------------------------------------
        |
        | Class(es) added to the table
        | Supported: string
        |
        */

        'class' => 'table table-bordered col-lg-12',

        /*
        |--------------------------------------------------------------------------
        | Table ID
        |--------------------------------------------------------------------------
        |
        | ID given to the table. Used for connecting the table and the Datatables
        | jQuery plugin. If left empty a random ID will be generated.
        | Supported: string
        |
        */

        'id' => 'idTable',

        /*
        |--------------------------------------------------------------------------
        | DataTable options
        |--------------------------------------------------------------------------
        |
        | jQuery dataTable plugin options. The array will be json_encoded and
        | passed through to the plugin. See https://datatables.net/usage/options
        | for more information.
        | Supported: array
        |
        */

        'options' => array(

            "sPaginationType" => "two_button",

            "bProcessing" => false

        ),

        /*
        |--------------------------------------------------------------------------
        | DataTable callbacks
        |--------------------------------------------------------------------------
        |
        | jQuery dataTable plugin callbacks. The array will be json_encoded and
        | passed through to the plugin. See https://datatables.net/usage/callbacks
        | for more information.
        | Supported: array
        |
        */

        'callbacks' => array(),

        /*
        |--------------------------------------------------------------------------
        | Skip javascript in table template
        |--------------------------------------------------------------------------
        |
        | Determines if the template should echo the javascript
        | Supported: boolean
        |
        */

        'noScript' => false,


        /*
        |--------------------------------------------------------------------------
        | Table view
        |--------------------------------------------------------------------------
        |
        | Template used to render the table
        | Supported: string
        |
        */

        'table_view' => 'layout.datatable', // ''datatable::template',


        /*
        |--------------------------------------------------------------------------
        | Script view
        |--------------------------------------------------------------------------
        |
        | Template used to render the javascript
        | Supported: string
        |
        */

        'script_view' => 'datatable::javascript',


    ),


    /*
    |--------------------------------------------------------------------------
    | Engine specific configuration options.
    |--------------------------------------------------------------------------
    |
    */

    'engine' => array(

        /*
        |--------------------------------------------------------------------------
        | Search for exact words
        |--------------------------------------------------------------------------
        |
        | If the search should be done with exact matching
        | Supported: boolean
        |
        */

        'exactWordSearch' => false,

    )


);
