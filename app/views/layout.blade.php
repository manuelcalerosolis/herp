<html>
	{{ HTML::style('css/bootstrap.css') }}
    <body>
        <h1>HERP</h1>

        @yield('content')
        
        {{ HTML::script('js/bootstrap.js') }}
    </body>
</html>