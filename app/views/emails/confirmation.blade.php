<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h2>Registrado con éxito</h2>

		{{$user->confirmation}}

		<div>
		
		<p>{{$user->confirmation}}</p>

			Estimado {{$user->name}} para activar tu cuenta pincha en el siguente {{$link}}

			<a href="{{$link}}">Haga clikc aqui.</a>
			
		</div>
	</body>
</html>