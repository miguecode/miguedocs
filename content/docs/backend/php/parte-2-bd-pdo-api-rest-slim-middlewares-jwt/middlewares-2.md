---
title: "Middlewares 2"
description: "En Slim 4, un middleware es una función (o clase) que recibe un objeto Request y un RequestHandler, y debe retornar una respuesta (Response)."
---


## 💻 Implementación de Middleware

En Slim 4, un middleware es una función (o clase) que recibe un objeto **Request** y un **RequestHandler**, y debe retornar una respuesta (**Response**).

### Estructura Básica (Closure)

```php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;
use Slim\Psr7\Response;

$mwUno = function (Request $request, Handler $handler) : Response {
    // 1. Acciones ANTES de la ruta
    $antes = "Middleware 1: Antes del proceso...<br>";

    // 2. Delegar a la siguiente capa (Invocación)
    $response = $handler->handle($request);
    
    // 3. Obtener el cuerpo de la respuesta generada por la siguiente capa
    $contenidoAPI = (string) $response->getBody();

    // 4. Acciones DESPUÉS de la ruta
    $despues = "Middleware 1: Después del proceso...<br>";

    // 5. Generar la respuesta final combinada
    $nuevaResponse = new Response();
    $nuevaResponse->getBody()->write("{$antes} {$contenidoAPI} {$despues}");

    return $nuevaResponse;
};
```

---

### 📍 Formas de Registro

#### A nivel Aplicación
Se ejecuta en **todas** las rutas de la aplicación.
```php
$app->add($mwUno);
```

#### A nivel de Ruta
Solo se ejecuta para una ruta específica.
```php
$app->get('/usuarios', function ($request, $response) {
    // Lógica de la ruta
})->add($mwUno);
```

#### A nivel de Grupo o Map
Aplica a todas las rutas dentro de un grupo determinado.
```php
$app->group('/admin', function ($group) {
    $group->get('/config', ...);
    $group->post('/update', ...);
})->add($mwAdmin);
```

---

### 📦 Middlewares basados en Clases

Podemos organizar nuestros middlewares en clases para mayor limpieza. Podemos invocar métodos específicos o usar el método mágico `__invoke`.

```php
// Invocando un método específico
$app->add(\MiClase::class . ':metodoMiddleware');

// Usando __invoke (ejecuta la clase directamente)
$app->add(new \MiClase());
```

---

### ⏳ Orden de Ejecución

Slim añade los middlewares en una **Pila (Stack)**. El último middleware agregado es el **primero** en ejecutarse al entrar la petición.

1. Se lanza la petición.
2. Se ejecuta el último middleware registrado (`add`).
3. Este llama al siguiente con `handle()`.
4. ... así hasta llegar a la lógica de la Ruta (Controller).
5. Las respuestas regresan en orden inverso.

> [!TIP]
> Si agregas un middleware de "Logging" y luego uno de "Autenticación", el de Autenticación se ejecutará primero. Si falla, el de Logging (que está por fuera) igual podrá registrar que hubo un intento fallido.
