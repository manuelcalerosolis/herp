@extends('layout.layout')

    <style>

        /* http://css-tricks.com/perfect-full-page-background-image/ */
        html {
            background: url(images/wall2.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

    </style>

	</head>

    <body>
        @yield('content')
       
    </body>

</html>