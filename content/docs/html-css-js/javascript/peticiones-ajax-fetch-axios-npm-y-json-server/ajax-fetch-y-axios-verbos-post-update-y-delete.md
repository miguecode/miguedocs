---
title: "Ajax, Fetch y Axios - Verbos POST, UPDATE y DELETE"
description: "Vamos a ver cómo se hacen peticiones POST, UPDATE y DELETE en AJAX, FETCH y AXIOS."
---


## 1. AJAX - Verbo POST

Ahora vamos a agregar otro botón al index.html, en este caso `createPersona` (o `postPersona`).

En la función `createPersona()`, lo lógico es que lo que reciba por parámetro sea una persona. Y esa persona que recibe es la que viene generalmente en un formulario. En este caso, obviamente, no tenemos formulario.

```javascript
const data = {
	"nombre": "Juan",
	"apellido": "Perez"
}
```

Como esto es de prueba, nos hardcodeamos nosotros mismos una persona.

La lógica de la función varía en cómo manejamos el objeto xhr:

```javascript
xhr.open("POST", URL);
xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
```

Lógicamente, el verbo va a ser POST en vez de GET. Además, tenemos que usar el método `setRequestHeader`, que sirve justamente para setear cabeceras. El "Content-Type" se trata de decirle al servidor de qué tipo es lo que estamos enviándole. En este caso, "application/json;charset-utf-8", es decir, un JSON. Y lo del charset son justamente los caracteres a usar.

Y el otro cambio respecto a los GET, es que tenemos que pasar la data por parámetro al send, así:

```javascript
xhr.send(JSON.stringify(data));
```

Lo que hacemos es enviarle un string JSON con la "data" de la persona que queremos crear y guardar en el servidor. Ese "data" es lo que hardcodeamos al principio, la persona Juan Perez.

Bien, entonces, cuando le demos clic a "Create Persona", literalmente va a hacer un alta de Juan Perez. Y eso lo vamos a ver reflejado en el archivo "db.json", donde va a aparecer Juan Perez con ID = 11. ¿Por qué se actualiza db.json? Porque al levantar el servidor con JSON Server, nosotros le pasamos una fuente de datos. La fuente de datos que le pasamos fue ese array de personas en el archivo "db.json". Por lo tanto, si le hacemos altas, bajas o modificaciones, esos cambios se van a ver reflejados directamente en el archivo db.json. Que es literalmente la data del servidor.

## 2. AJAX - Verbo PUT/PATCH

El UPDATE es una mezcla del POST y el DELETE. Es como el "DELETE" porque le tenemos que pasar la ID del elemento que queremos modificar. Y es como el "POST" porque le tenemos que enviar el objeto con los datos modificados. OJO: Para hacer un UPDATE, hay que usar el verbo "PUT" o "PATCH".

La diferencia entre PUT y PATCH es que, con PUT yo le mando todo el objeto y lo reemplaza en su totalidad. En cambio, con PATCH, yo le mando únicamente el campo que va a cambiarse. Por esto es que es mas práctico usar PUT, le mandamos todo el objeto modificado y listo.

Como vamos a modificar una persona existente, cuando hardcodeamos la data tenemos que especificarle el ID (existente también). O sea, pasamos el objeto como con POST, pero ahora incluyendo el ID.

```javascript
const data = {
    id: 1,
    nombre: "Pepito",
    apellido: "Flores"
}
```

Así, vamos a modificar a la persona con id = 1. La forma de usar el "open" es la siguiente:

```javascript
xhr.open("PUT", URL + "/" + data.id);
xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
xhr.send(JSON.stringify(data));
```

Como vemos, respecto al POST, lo único que cambia es lo que pasamos por el método open. Pero después, es literalmente todo lo mismo.

## 3. AJAX - Verbo DELETE

El verbo DELETE es prácticamente lo mismo que cuando hacíamos un GET específico. Pasamos un ID para apuntarle a una persona en específico, pero en vez de traerla, la vamos a eliminar.

```javascript
xhr.open("DELETE", URL + "/" + id);
xhr.send();
```

Aunque también hay un cambio a la hora de obtener la respuesta. Porque a diferencia de lo que pasa en los otros verbos, con DELETE no vamos a recibir nada. Así que en el caso de JSON Server, nos va a devolver un objeto vacío:

```javascript
const dataResponse = JSON.parse(xhr.responseText); // No es necesario hacer esto...
console.log(dataResponse); // Va a mostrar un objeto vacío (Ya que no nos devuelve nada)
```

## 4. FETCH - Verbo POST

Nos basamos en el mismo `getPersonas` de FETCH y creamos una data hardcodeada.

```javascript
const data = {
	"nombre": "Maria",
	"apellido": "Gonzalez"
}
```

Pero cuando usamos la función `fetch(URL)` (a la cual, al no especificarle un verbo, es un GET), tenemos que modificarla para que sea POST así:

```javascript
fetch(URL, {
	method: "Post",
	headers: {"Content-Type": "application/json;charset=utf-8"},
	body: JSON.stringify(data)
});
```

**También podríamos crear un objeto "options" así**: `{ method: "Post", ... etc }` y pasarlo como segundo parámetro.

Como dijimos antes, `fetch` recibe como segundo parámetro un objeto Options. Por eso lo ponemos entre llaves. Y ese Options va a tener 3 valores: el method (el Post), los headers (el tipo de lo que le estamos mandando) y el body (literalmente la data que queremos postear). Entonces, si vemos, es muy parecido a como lo hicimos en AJAX, porque especificamos que sea POST, le pasamos los headers para especificar el Content-Type, y le pasamos la data que queremos enviar.

En AJAX, usábamos el `xhr.open([method], [destino])`, el `xhr.setRequestHeader(["ContentType"], [...])` y finalmente el `send(JSON.stringify(data))`.

Y listo. Eso es lo único que modificamos para hacer un `createPersona` en FETCH. Y como estamos usando promesas, todo esto también lo podemos hacer como función asíncrona (async y await).

```javascript
const createPersonaAsync = async () => {
	try {
		$loader.classList.remove("oculto");
		const dataHardcodeada = { nombre: "Maria", apellido: "Gonzalez" };
		let res = await fetch(URL, {
			method: "Post",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify(dataHardcodeada)
		});
		let data = await res.json();
		console.log(data);
	} catch (err) {
		console.error(`Error: ${err.status} - ${err.statusText}`); 
	} finally {
		$loader.classList.add("oculto");
	}
}
```

## 5. FETCH - Verbo PUT/PATCH

Esto mantiene la misma lógica que lo que hacíamos con AJAX, es decir, todo sigue igual pero al objeto hardcodeado también le tenemos que agregar un ID, para que sepamos cuál vamos a modificar. Y, además, el método de fetch tiene que ser Put. Veamos:

```javascript
const data = {
    id: 1,
    nombre: "Lionel",
    apellido: "Pepsi"
}

fetch(URL + "/" + data.id, {
	method: "Put",
	headers: { "Content-Type": "application/json;charset=utf-8" },
	body: JSON.stringify(data)
});
```

Como toda función con promesas, esto también se puede hacer con async y await.

## 6. FETCH - Verbo DELETE

Lo mismo que antes. Ahora todo es más rápido de entender. La función `deletePersona` recibe un ID como si fuese un GET específico, pero en vez de traernos a esa persona, la vamos a eliminar.

```javascript
fetch(URL + "/" + id, {
    method: "Delete",
}).then((res) => {  
    if (!res.ok) return Promise.reject(res); // Si no salió bien la petición, retorno la promesa como incumplida
    console.log("La baja se realizó correctamente");  // Sino, comunico que salió bien
});
```

Como toda función con promesas, esto también se puede hacer con async y await.

## 7. AXIOS - Verbo POST

Nos basamos en el `getPersonas` del propio AXIOS, usando la data hardcodeada con otro nombre. Esto mantiene la misma lógica que vimos anteriormente con los otros métodos. 

```javascript
axios
.post(URL, data, {
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
.then((res) => {
    // console.log(res); // "res" (lo capturado por then) contiene el objeto "data"
    console.log(res.data);
})
.catch((err) => {
    console.error(err.message); // "err" (lo capturado por catch) contiene el objeto "message"
})
.finally(() => {
    $loader.classList.add("oculto");
});
```

Como vemos, le pasamos la data como segundo parámetro. Como vimos antes en AXIOS, a la data no tenemos que aplicarle ningún metodo JSON (en este caso el `JSON.stringify()`). Y como tercer parámetro, el objeto que contiene el header del Content-Type.

Como toda función con promesas, esto también se puede hacer con async y await.

## 8. AXIOS - Verbo UPDATE

Lo mismo de siempre. Veamos:

```javascript
const data = {
    id: 1,
    nombre: "Valentin",
    apellido: "Barco",
};

axios.put(URL + "/" + data.id, data, {
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
}).then(res => {
    console.log("Modificado:", res.data);
});
```

Como vemos, ahora es necesario pasarle el ID al objeto que queremos modificar. Y después, usamos `put`.

Como toda función con promesas, esto también se puede hacer con async y await.

## 9. AXIOS - Verbo DELETE

Más de lo mismo:

```javascript
axios.delete(URL + "/" + id)
    .then(() => {
        console.log("La baja se realizó correctamente");
    });
```

Como toda función con promesas, esto también se puede hacer con async y await.