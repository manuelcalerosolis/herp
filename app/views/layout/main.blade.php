@extends('layout.layout')

	</head>

    <body>
        @yield('content')
        
        {{ HTML::script('js/bootstrap.js') }}
        {{ HTML::script('//code.jquery.com/jquery-1.11.0.min.js' }}
        {{ HTML::script('//code.jquery.com/jquery-migrate-1.2.1.min.js' }}
        
    </body>

</html>