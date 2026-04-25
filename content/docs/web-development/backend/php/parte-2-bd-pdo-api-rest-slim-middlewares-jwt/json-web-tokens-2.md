---
title: "JSON Web Tokens 2"
description: "Ejemplo de Código -"
---


- Ejemplo de Código -

JWT en Slim
La creación de un JWT se realiza mediante el método estático encode de la clase Firebase\JWT

Primero vamos a asegurarnos de tener todos los datos que queramos.
$datos = $request->getparsedBody();
$ahora = time();

Ahora, un payload
$payload = array(
```typescript
...
```
);

$token = JWT::encode($payload, "miClaveSecreta", "HS256");

La creación de un JWT se realiza mediante el método estático decode de la clase Firebase\JWT.

Ejemplo explicado:
El Token es como la pulserita que nos ponen cuando entramos al Lollapalooza. Le entrada serían nuestras credenciales (usuario y contraseña), y después de la entrada nos dan una pulsera (nuestro JWT). 
Entonces, como dijimos antes, el JWT sirve para que el Servidor SEPA que eso que está recibiendo (el JWT o la pulsera) es algo propio nuestro y que tiene validez (ya que nosotros lo creamos).