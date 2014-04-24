@extends('layout.layout')

    <style>

        /* http://css-tricks.com/perfect-full-page-background-image/ */
        html {
            background: url(images/wall.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

    </style>

	</head>

    <body>
        @yield('content')
        
        {{ HTML::script('js/bootstrap.js') }}
    </body>

</html>