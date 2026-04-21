---
title: "Middlewares 2"
---

Middleware en código

Todos los middleware tienen que tener en su firma el Request y el RequestHandler. Y devuelven un tipo 'ResponseMW'.

Ejemplo:

$mwUno = function (Request $request, RequestHandler $handler) : ResponseMW {
	//EJECUTO ACCIONES ANTES DE INVOCAR AL VERBO
	$antes = ' en MW_UNO antes del callabe <br>';
	
	//INVOCO AL VERBO
	$response = $handler->handle($request);
	//'handle' lo que hace es llamar a la próxima capa. Le paso el request.
	//La próxima capa puede ser un middleware, o el verbo de la API (el TraerUno, por ej.).
	//Entonces, ese 'handle' es como literalmente invocar a la siguiente acción. Por lo tanto,
	//El código de este middleware se FRENA en esa línea. No va a continuar hasta que 
	//se termine toda la acción del middleware que invocamos/del verbo de la API que invocamos
	
	//Cuando ya terminó todo, recién ahora continúa este código:
	//Obviamente lo que devuelva el handle quedó guardado en $response
	
	//OBTENGO LA RESPUESTA DEL VERBO
	$contenidoAPI = (string) $response->getBody();
	//guardamos lo que guardamos en el $response en $contenidoAPI en forma de string
	
	
	//GENERO UNA NUEVA RESPUESTA
	$response = new ResponseMW();
	
	//EJECUTO ACCIONES DESPUES DE INVOCAR AL VERBO
	$despues = " en MW_UNO después del callable <br>";
	
	$response->getBody()->write("{$antes} {$contenidoAPI} <br> {$despues}");
	
	return $response;
};

Esto es una función Middleware.
Bien, ahora, para agregarla hay que hacer esto:

$app->add($mwUno);
//Esto es agregarla a nivel aplicación. Por lo tanto, antes de cada ruta se ejecuta este middleware.

Middlewares de Ruta
Se ejecuta inmediatamente después de invocar cualquiera de los métodos de enrutamiento de la aplicación Slim (por ej. Get o Post).

$app->put( ...  {
	...
})->add( [middleware]); 

Middlewares para Group y Maps
Así como podemos crear grupos de rutas, podemos aplicarle Middlewares a esos grupos de rutas.
Para aplicarlo en el Group, simplemente  ponemos el add después del group.
Lo mismo podemos hacer en un map. (El map era cuando quiero agrupar 2 verbos HTTP distintos).

Podemos hacer una clase con funciones middleware. Podemos agregarlos así:

->add(\MiClase::class . ":MostrarInstancia");
//'MostrarInstancia' sería un middleware definido en una clase 'MiClase'.

__invoke es un método mágico de PHP que significa que cuando yo instancie esa clase, va a retornar la función __invoke.

Siempre se aplica primero el último middleware agregado. Y así se van pasando la pelota hasta llegar al controller.
