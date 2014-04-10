<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h2>Registrado con éxito</h2>

		{{$user->confirmation}}

		<div>
		<p>{{URL::route('registerConfirmation', $confirmation)}}</p>
		<p>{{$user->confirmation}}</p>
			Estimado {{$user->name}} para activar tu cuenta pincha en el siguente {{URL::route('registerConfirmation',$confirmation)}} {{$user->confirmation}}

			 <a href="{{URL::route('registerConfirmation')}}/{{$user->confirmation}}"> enlace </a>
		</div>
	</body>
</html>