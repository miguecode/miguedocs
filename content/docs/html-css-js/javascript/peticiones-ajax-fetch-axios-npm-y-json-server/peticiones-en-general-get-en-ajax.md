---
title: "Peticiones en general. GET en AJAX"
description: "Vamos a ver cómo hacer peticiones en general, y en particular, peticiones GET en AJAX."
---


## Peticiones

Para el ejemplo de todo esto, vamos a crearnos un proyecto con 2 carpetas: `client` y `server`. En `server`, vamos a levantar un JSON server usando un archivo `db.json` como fuente de datos. Este archivo va dentro de la carpeta `server`. Y en `client`, vamos a hacer un HTML plano sin más, y con distintos botones para hacer pruebas de peticiones.

La idea es centrarnos en cómo escribir el código JavaScript para realizarle peticiones al servidor (que en este caso, el servidor va a ser nuestra propia máquina). Es decir, nosotros vamos a ser los clientes y los servidores a la vez, ya que esto es sólo a modo de prueba.

Para ello, vamos a ver peticiones por AJAX, que es la tecnología nativa para hacer peticiones (usa callbacks). También vamos a ver el API FETCH, que también es nativo de los navegadores y también sirve para hacer peticiones asíncronas (usa promesas). Y también vamos a utilizar una biblioteca de terceros llamada AXIOS, la cual utiliza callbacks y devuelve promesas.

## Ajax

Ajax es un acrónimo que significa **JavaScript asíncrono y XML**. Ajax es una tecnología de programación que se utiliza para crear páginas web más interactivas. Con Ajax, podemos crear páginas que actualicen su contenido comunicándose directamente con el servidor, todo sin necesidad de que la página se vuelva a cargar. Esto hace referencia a lo que es **SPA**.

SPA significa **Single Page Application** (aplicación de página simple). Aparece el concepto de no recargar la página. El mismo `index.html` que nos envía el servidor por primera vez va a ser el marco de nuestra aplicación, y con eso conseguimos que se recarguen ciertas partes de la página, y no que se recargue la página completa (el pestañeo de la página). Es como si fuera una aplicación de ventana, para que nunca se recargue la página.

En el `index.html` vamos a poner un gif a modo de loader. Esto nos va a servir para cuando simulemos la latencia de nuestro servidor. 

## 1. Peticiones en AJAX. Ejemplo con el verbo GET

Antes, había que arreglarse únicamente con el formulario para hacer las peticiones. Esto con el tiempo cambió, con la idea de que las páginas sean SPA. Un programador de Microsoft quería hacer una SPA para la bandeja de entrada de Outlook, él quería que no se recargue la página cuando llegaba un nuevo mail. Que simplemente se actualice la página con el nuevo mail, pero sin recargarse todo desde cero.

Entonces, así se inventó Ajax y el "prevent default" para suprimir el comportamiento por default del submit del formulario. Esa persona usó "xhr". Es una variable de tipo `XMLHttpRequest`. Es un objeto petición.

```javascript
const xhr = new XMLHttpRequest();
```

Este objeto `xhr` de tipo `XMLHttpRequest` es el que vamos a utilizar para realizar la petición. Vamos a usar callbacks para manejar la asincronía. 

```javascript
console.log(xhr.readyState);
```

Así podemos ver el estado de la petición, la cual puede tener distintos estados:

Cuando se envía una petición, el `readyState` cambia 5 veces, del 0 al 4:
- **0 - UNSENT**: se creó el client.
- **1 - OPENED**: se llamó a la función `open()`.
- **2 - HEADERS_RECEIVED**: se llamó a la función `send()` y se recibieron los headers.
- **3 - LOADING**: se está descargando la data.
- **4 - DONE**: se completó la operación.

El único estado que nos importa a nosotros es el **4 (Done)**.

Cada vez que cambie el `readyState`, nosotros queremos hacer algo. Y ese `readyState` nos importa cuando está en el paso 4 (Done). Lo vamos a hacer así:

```javascript
xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState == 4) {
		// Si está en DONE, hago algo
	} else {
		// Si no está en DONE, hago algo
	}
});
```

El evento `readystatechange` escucha a la petición `xhr`. El evento se dispara cada vez que cambia de estado de la petición, es decir, su `readyState`. Recordemos que "DONE" no necesariamente significa que la petición tuvo un estado exitoso. Significa que la petición ya tiene respuesta, sea positiva o negativa. Por eso es ese el momento en el que tenemos que actuar.

Para comprobar que funciona el evento, podemos hacer esto:

```javascript
xhr.onreadystatechange = () => { console.log("Cambió el estado"); }
```

## Códigos de respuesta

Las peticiones tienen distintos códigos de respuesta numéricos, donde cada uno tiene su significado. Una página para aprenderlos con gatitos es [http.cat](https://http.cat/). Pero en resumen, los podemos agrupar así:

- **100-199**: estados informativos.
- **200-299**: estados exitosos.
- **300-399**: estados de redirecciones.
- **400-499**: estados de errores del lado del cliente.
- **500-599**: estados de errores del lado del servidor.

El "200" es el más común, es el OK. Si hacemos un POST nos debería devolver un "201", si hacemos un DELETE debería devolver un "204", etc. Una redirección sería que, por ejemplo, nosotros entremos a `www.google.com`, y en el proceso, nos mande a `www.google.com.ar` porque se da cuenta de que estamos en Argentina. El "400" es una petición mal armada, "401" que no tenemos acceso, el "404" (el más famoso) es cuando estamos solicitando un recurso que no existe en el servidor.

Obviamente, a nosotros nos interesa que nuestra API nos responda siempre desde el 200 al 299.

**Por eso, vamos a mejorar más la lógica del evento**: 

```javascript
xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState == 4) {
		if (xhr.status >= 200 && xhr.status <= 299) {
			// Si el resultado es exitoso, hago algo
			const data = JSON.parse(xhr.responseText);
			console.log(data);
			// Si me manda la respuesta en tipo JSON, hay que usar "responseText".
		} else {
			// Si el resultado no es exitoso, hago algo
			console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
		}
	} else {
		// Si no llegó a DONE, hago algo
	}
});
```

En este caso, hacemos lo mismo que antes, pero le agregamos una condición más. Si el `readyState` de la petición es 4 (DONE), a partir de ahí lo que hacemos es actuar en base a la respuesta de la petición. Si es un estado entre el 200 y el 299, sabemos que es una respuesta exitosa. Entonces, obtenemos el contenido de la respuesta accediendo a `xhr.responseText` (ya que la respuesta es en tipo JSON). Si no está entre el 200 y el 299, significa que falló la petición, y por ende, mostramos el mensaje del error.

## Métodos open y send

```javascript
xhr.open("GET", URL); 
```

Con el método `open`, abrimos la petición. Esto sirve para indicar el verbo con el que la vamos a realizar, y su destino (la URL `http://localhost:3000/personas`). 

```javascript
xhr.send();
```

Finalmente, con el método `send` enviamos la petición. Recordemos que `xhr` es nuestro objeto petición.

Y eso es todo. Para hacer la prueba de todo esto, está el archivo en esta carpeta. Aún así, la explicación sería crear un botón con HTML, y ponerle un evento clic. Cuando le hacemos clic, tenemos que ejecutar una función que nosotros creemos, llamada -en este caso- `getPersonas`. Y esa función lo que tiene que hacer es crear la petición, enviarla, y manejar su respuesta. Es decir, lo que vimos recién.

Además, podemos agregar lógica DOM para manejar la imagen "loader" que habíamos dicho al principio que íbamos a agregar. Entonces, lo que tenemos que hacer es que la imagen (un gif de carga) se MUESTRE durante el tiempo que tarda en ejecutarse la petición (es decir, los 2.5 segundos de latencia con el que levantamos el servidor). Y que cuando ya haya respuesta, el gif desaparezca.

### GET específico

Así como con GET podemos traernos todas las personas, también podemos traernos una sola. Para esto, vamos a crear un nuevo botón, y una nueva función llamada `getPersona(id)`. Lógicamente, la persona específica que vamos a traer va a ser la del ID que le pasamos a la función.

La lógica de la función es la misma que `getPersonas()`, pero cambiando lo que le pasamos al método `open`:

```javascript
xhr.open("GET", URL + "/" + id);
```

El open se hace así, pasando la URL a la que queremos apuntar. Eso que escribimos ahí, se traduciría como: `http://localhost:3000/personas/id`.

Después, todo se hace igual, con el `xhr.send()`, y el evento escuchador.