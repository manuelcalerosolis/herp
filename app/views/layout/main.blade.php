@extends('layout.layout')

    <body>
        
        {{ HTML::script('../js/bootstrap.js') }}

		<!-- Add custom CSS here -->
		{{ HTML::style('css/sb-admin.css') }}
		{{ HTML::style('fonts/css/font-awesome.min.css') }}

		<!-- Page Specific CSS -->
		{{ HTML::style('http://cdn.oesmith.co.uk/morris-0.4.3.min.css') }}
		
		{{ HTML::style('//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css') }}
        {{ HTML::style('http://fonts.googleapis.com/css?family=Abel|Open+Sans:400,600') }}

        
    </body>

</html>