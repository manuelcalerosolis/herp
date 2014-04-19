<html>
	<head>
		{{ HTML::style('css/bootstrap.css') }}
		{{ HTML::style('//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css') }}
		{{ HTML::style('http://fonts.googleapis.com/css?family=Abel|Open+Sans:400,600') }}

    <style>

        /* http://css-tricks.com/perfect-full-page-background-image/ */
        html {
            background: url(images/wall.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        body {
            padding-top: 20px;
            font-size: 16px;
            font-family: "Open Sans",serif;
            background: transparent;
        }

        h1 {
            font-family: "Abel", Arial, sans-serif;
            font-weight: 400;
            font-size: 40px;
        }

        /* Override B3 .panel adding a subtly transparent background */
        .panel {
            background-color: rgba(255, 255, 255, 0.3);
        }

        .margin-base-vertical {
            margin: 40px 0;
        }

    </style>

	</head>

    <body>
        @yield('content')
        
        {{ HTML::script('js/bootstrap.js') }}
    </body>
</html>