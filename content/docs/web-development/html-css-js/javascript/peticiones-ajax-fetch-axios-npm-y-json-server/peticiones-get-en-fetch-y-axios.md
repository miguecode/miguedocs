---
title: "Peticiones GET en FETCH y AXIOS"
description: "Vamos a probar la forma de hacer peticiones usando el método FETCH. La idea va a ser la misma que con AJAX, vamos a trabajar bajo los mismo archivos, funciones,..."
---


## FETCH

- Vamos a probar la forma de hacer peticiones usando el método FETCH. La idea va a ser la misma que con AJAX, vamos a trabajar bajo los mismo archivos, funciones, servidor y datos de Personas. En este apunte vamos a ver cómo se hace el GET, y en otro vamos a ver los demás verbos.


2) FETCH - Verbo GET

- El método fetch retorna una promesa. Nosotros tenemos que pasarle una URL y un objeto de opciones. Si no le paso ese objeto, por default será "GET". Veamos:

```typescript
fetch(URL)
.then((res) => {
	console.log(res); 
})
.catch((err) => {})
.finally(()=>{});
```
- Como vemos acá, le pasamos la URL por parámetro al método then. Y como devuelve una promesa, colocamos un "then" y un "catch". Además, agregamos un finally opcional. En él, la idea es hacer la acción de ocultar el gif loader.

- Las respuestas de fetch son todas iguales. Devuelve un objeto Response el cual contiene un body, headers, status, url, entre otros elementos. Lo que no trae es el JSON. Es decir, no trae la data (lo que sí hacía AJAX). Por lo tanto, no podemos hacer un JSON.parse como hacíamos antes.

- Para extraerle la data, vemos que el objeto Response (de prototipo Response), tiene un método llamado JSON. Es un método asincrónico que devuelve una promesa. Acá es cuando aparecen las promesas enlazadas. 

- Lo que más nos importa a nosotros para saber si tenemos que llamar o no al método JSON, es el campo "ok". Si está en "true", significa que está todo bien. Si por ejemplo le pasamos mal la URL a propósito, el campo "ok" va a estar en "false". Entonces ahí nos va a dar error. Veamos:


```typescript
fetch(URL)
	.then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(res);
		})
		.then((data) => { 
			console.log(data); 
		})
		.catch((err) =>{
			console.log("Error: ${err.status} - ${err.statusText}"); 
		})
		.finally (() => {
		        $loader.classList.add("oculto");
		}
```
- Así es como se hace. Primero, un then para capturar la promesa que siempre nos retorna el método fetch. A este then le pasamos un callback, el cual va a retornar 2 posibles valores. El JSON de la respuesta (en caso de que "ok" sea true, o el método reject (en caso de que "ok" sea false). Después, a esta promesa que retornamos le volvemos a hacer un then y un catch, y un finally opcional.

- Como vimos, en el primer then hicimos un if-else. Eso está bien, pero podemos resumirlo con un operador ternario, así:

```typescript
return res.ok ? res.json() : Promise.reject(res);
```
- Y si queremos resumirlo todavía más, también podemos reducir las arrow functions, sacándole las llaves { } y el "return" explícito. Esto lo podemos hacer gracias a que todas (en este caso) tienen solo una línea de código.

```typescript
fetch(URL)
	.then((res) => res.ok ? res.json() : Promise.reject(res))
	.then((data) => console.log(data))
	.catch((err) => console.error(`Error: ${err.status} - ${err.statusText}`))
	.finally(() => $loader.classList.add("oculto"));
```
### Verbo GET con ASYNC

- Si bien esto último que hicimos es asincrónico, estamos haciendo un "Promise Hell". Quizá no es tan notorio, pero sí es cierto que estamos anidando promesas. Entonces, como vimos en otros apuntes, esto se puede evitar usando "async" y "await". Ojo: el resultado sigue siendo el mismo: llevar a cabo la asincronía.

- **Se hace así**: 

```typescript
const getPersonasAsync = async () => {
    try {
        $loader.classList.remove("oculto");
        let res = await fetch(URL);
        if (!res.ok) throw Error(`Error: ${res.status} - ${res.statusText}`);
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally {
        $loader.classList.add("oculto");
    }
};
```
- Como vemos, sigue siendo lo mismo pero usando los async y await. Además, usamos un bloque try-catch, agregándole un finally. Esto último es muy recomendable para manejar los errores.


### FETCH - Verbo GET específico

- Así como vimos como hacer un GET global para traer a todas las personas, con GET también podemos traernos a una en específica. La lógica es la misma: usar promesas o usar async y await. Pero a la función (que en este caso sería getPersona()), le tenemos que pasar también un ID por parámetro. Obviamente es la ID de la persona que queremos traer.

```typescript
	    fetch(URL + "/" + id)
```
- Eso es lo -ÚNICO- que cambia. Tanto para la función con promesas, como con la función async.


## AXIOS - Verbo GET

- Vamos a probar la forma de hacer peticiones usando el objeto AXIOS. La idea va a ser la misma que con AJAX y FETCH: vamos a trabajar bajo los mismo archivos, funciones, servidor y datos de Personas. En este apunte vamos a ver cómo se hace el GET, y en otro vamos a ver los demás verbos.

- Antes de empezar, tenemos que hacer que CDN significa "Content Delivery Network", es decir, servidores que están en internet para los archivos más comunes. 

- Para usar AXIOS, necesitamos su CDN. Lo buscamos en la página npmjs.com, en el readme de "axios".
Va a ser una URL .js, así que en nuestro index tenemos que vincular ese script. Y obviamente lo tenemos que poner antes de vincular el script de axios.js, para que lo pueda usar, así:

```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
<script src="./js/axios.js" defer></script>
```
- AXIOS lo que hace es devolver una promesa como lo haría FETCH, pero internamente trabaja con AJAX. Es decir, toma AJAX original y lo transforma en promesa.

```typescript
const getPersonas = () => {
	$loader.classList.remove("oculto");
	axios.get(URL)
	.then((res) =>{
		console.log(res.data);
	})
	.catch((err) =>{
		console.error(err.message);
	})
	.finally(()=>{
		$loader.classList.add("oculto");
	});
};
```
- Axios hace el JSON() por nosotros. Por eso directamente podemos usar "res.data". Funciona como AJAX, pero sin la necesidad de usar el método json(). Se da cuenta de que lo que viene es un array y nos devuelve un objeto DATA. Si vemos el prototipo de data, vamos a ver que es un XMLHTTPRequest, literalmente el tipo de peticiones que usamos en AJAX.

- Ese objeto DATA, al ser rechazado, va a tener un elemento "message", que va a contener literalmente el mensaje del error.

- AXIOS, al trabajar con promesas, también puede tener su contraparte "función asíncronca" (async). Esto es así al igual que FETCH.

```typescript
const getPersonasAsync = async () => {
    try {
        $loader.classList.remove("oculto");
        let {data} = await axios.get(URL); //Si es exitosa, va a devolver "res". Y de res, nos quedamos su data
        console.log(data);
    } catch(err) {
        console.error(err.message);
    } finally {
	$loader.classList.add("oculto");
    }
};
```
### AXIOS - Verbo GET específico

- Así como vimos como hacer un GET global para traer a todas las personas, con GET también podemos traernos a una en específica. La lógica es la misma: usar promesas o usar async y await. Pero a la función (que en este caso sería getPersona()), le tenemos que pasar también un ID por parámetro. Obviamente es la ID de la persona que queremos traer.

```typescript
	    axios.get(URL + "/" + id)
```
- Eso es lo -ÚNICO- que cambia. Tanto para la función con promesas, como con la función async.