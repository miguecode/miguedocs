---
title: "Crear una API REST usando JSON Server"
description: "Vamos a crear una 'base de datos' usando JSON Server."
---


## Crear una "base de datos" con JSON Server

Usamos Mockaroo para crear un array de personas y lo ponemos en la carpeta del proyecto.

La recomendación es que el archivo se llame `db.json` y lo escribimos así:

```json
{
	"personas": [
		{ "id": 1, "nombre": "Juan", "apellido": "Gomez" },
		{ "id": 2, "...": "..." }
	]
}
```

Mockaroo lo escribe como si fuera un array, así que lo modificamos para que quede así. Ahora quedó como un par clave valor. La "key" es "personas" y su "value" es un array con todas las personas.

Esto sería como una tabla "personas" que tiene las columnas "id", "nombre" y "apellido". Y si yo quisiera tener varias tablas, pondría una " , " después del cierre de corchete `]`.

Recordemos que, como habíamos definido antes, JSON Server funciona con una fuente de datos (un archivo json), que no es literalmente una base de datos, pero es la "data" que vamos a precisar, y a la cual vamos a obtener mediante las peticiones que hagamos.

En este caso, ese archivo `db.json` es nuestra data.

## API REST

Que una API sea REST significa que las peticiones deben ser únicas e independientes, es decir: nosotros hacemos una única petición, y el servidor la procesa y nos devuelve lo que solicitamos sin importar qué vamos a hacer con lo que nos devolvió, y sin importar qué solicitamos anteriormente.

También significa que tiene un único endpoint: es decir, que expone un único recurso. Es decir, la URL no va a tener al final un `/bajapersona`, `/altapersona`, `/modificarpersona`, etc. Sino que el server va a devolver un único recurso y va a saber qué queremos hacer dependiendo del verbo con el que hagamos la solicitud. Un GET va a ser para traer data, un POST para hacer un alta, un PUT o PATCH es una modificación, un DELETE es una eliminación, etc. El servidor lo hará todo a partir de un único endpoint.

Los endpoint van a ser los nombres de las tablas de la DB: "personas", "mascotas", "autos", etc. Cada nombre de la tabla (cada endpoint) sería como una ventanita del local (del servidor).

## CRUD: Create - Read - Update - Delete

Estos verbos se relacionan con los verbos HTTP: GET, POST, DELETE, PUT, etc.
El único verbo que no modifica a la base de datos es GET. Todos los demás, sí la modifican.

### Vamos a levantar el Servidor de JSON-Server

Para levantarlo, usamos el comando `-w` así:

```bash
json-server -w db.json -d 2500
```

`json-server` es el nombre de lo que queremos levantar. Cuando estamos en la terminal y queremos levantar un programa, lo primero que escribimos es su nombre. El `-w` viene de *watch*, y `db.json` (la data que creamos con Mockaroo) es el archivo al que queremos que "watchee" el servidor. El `-d` significa *delay*, entonces le estamos diciendo que cada vez que hagamos una petición, tenga un delay de 2500 milisegundos (2 segundos y medio).

Entonces, con el comando `json-server -w db.json -d 2500` lo que hacemos es levantar el servidor. Pero no está bueno que cada vez que lo queramos levantar, tengamos que escribir todo eso en la terminal. Para evitarlo, podemos usar un atajo:

En el `package.json` hay una key llamada "scripts". Le vamos a agregar un script nuevo:

```json
"scripts": {
  "start": "json-server -w db.json -d 2500"
}
```

A la "key" la llamamos "start" y en el "value" le ponemos el string: `"json-server -w db.json -d 2500"`.

Ahora, cada vez que ejecutemos el siguiente comando:

```bash
npm start
```

Es como si escribiéramos: `json-server -w db.json -d 2500`.

Por defecto, se abre en el puerto 3000. No tendríamos problema porque sabemos que el Live Server lo hace por defecto en el 5500. Pero si por algún motivo ambos fueran el mismo puerto, habría un conflicto de puertos. Y para evitarlo podemos especificar en qué puerto levantar el servidor, y para eso tenemos que agrerar lo siguiente en el comando para levantar el servidor: `-p 3001`, así se abriría en el 3001.

Cuando lo levantamos, vamos a ver que en la terminal nos sale todo un mensajito, y además una URL "Home" a la cual podemos acceder haciéndole CTRL + clic. Nos abre el navegador. También vamos a tener un recurso (Resource) por cada endpoint existente. Si tenemos la data solo con "personas", va a estar ese endpoint únicamente. Si también tenemos "mascotas", van a estar ambas URL's:

```text
http://localhost:3000/personas
http://localhost:3000/mascotas
```

Si vamos a `localhost:3000/personas`, nos va a mostrar literalmente toda la data de personas.
Si escribimos `localhost:3000/personas/3`, nos va a mostrar la persona con ID 3. 
Todo lo que escribamos en la URL del navegador, por defecto va a ser un GET.

## Ejemplos de consultas

```http
GET http://localhost:3000/personas?nombre=Juan
GET http://localhost:3000/personas?_sort=nombre&_order=asc
GET http://localhost:3000/personas?_page=1&_limit=5
```