---
title: "Flujos, Try Catch y Error"
description: "En nuestro código, podemos abrir bloques con llaves { }, y es completamente válido."
---

## Bloques

En nuestro código, podemos abrir bloques con llaves `{ }`, y es completamente válido:

```javascript
let nombre = "Pedro";
console.log(nombre); // Muestra "Pedro"	

{
	console.log("Estoy en un bloque");
	let nombre = "Juan";
	console.log(nombre); // Muestra "Juan"
	{
		let nombre = "Sofia";
		console.log(nombre);  // Muestra "Sofia"
	}
}

console.log("Fin");
```

Como vemos, cada vez que colocamos un bloque en nuestro código, ese bloque crea un nuevo "entorno" de variables. Entonces, dentro de ese bloque, podemos crear variables con el mismo nombre que hay en otros bloques.

## Bloque Try-Catch

El bloque `try-catch` nos permite manejar errores sin que nuestro programa se rompa. Es muy útil para prevenir caídas inesperadas o para manejar errores de forma controlada.

```javascript
try {
	// Código que puede generar un error. Se ejecuta primero.
} catch (error) {
	// Código que se ejecuta si ocurre un error, sino no.
} finally {
	// Código que se ejecuta siempre, después del try o del catch.
}
```

Esa es la estructura básica de un bloque `try-catch`. El `finally` es totalmente opcional, podemos no incluirlo. Pero el `try` y el `catch` son obligatorios.

El bloque `try` contiene el código que queremos **intentar** ejecutar. Si ocurre un error dentro de este bloque, se salta directamente al bloque `catch`, y ahí es donde capturamos y manejamos el error. Si no hay errores, el bloque `catch` simplemente se ignora.

**Veamos un ejemplo**: 

```javascript
try {
	let numero = parseInt("Hola"); // Esto no da error, pero devuelve NaN
	if (isNaN(numero)) {
		throw "No es un número válido"; // Lanzamos un error manualmente
	}
	console.log(numero);
} catch (error) {
	console.error(error); // Muestra "No es un número válido"
}
```

El comando `throw` (lanzar en español) se usa para lanzar un error manualmente. Cuando lo usamos, el flujo salta directamente al bloque `catch`, como si hubiese ocurrido un error real. Nosotros **lanzamos** el error, y `catch`, como bien dice su palabra, lo captura. Podemos lanzar errores con distintos tipos de dato:

```javascript
throw "Este es un error en texto";    // Lanzamos el error en forma de string
throw 404;                            // Lanzamos el error en forma de Number
throw new Error("Algo salió mal");    // Lanzamos el error en forma de Error
```

En este último caso, usamos `Error`, que es la opción más completa, ya que nos permite crear errores más detallados y profesionales:

```javascript
throw new Error("El nombre no puede estar vacío");
```

Esto nos da más contexto: mensaje, tipo de error, y hasta el *stack trace* (ruta del error). Para capturarlo, hacemos:

```javascript
try {
    // ...
} catch(errorCapturado) {
	console.error(errorCapturado.message);
}
```

Como vemos, `errorCapturado` va a ser el objeto lanzado de tipo `Error`, y la propiedad `message` es el string que le pasamos por parámetro cuando lo instanciamos.

### Throw en una función

Nosotros también podríamos tener una función que contenga un `throw`. Entonces, esta función puede ser invocada dentro de un bloque `try-catch`, así:

```javascript
function dividir(a, b) {
	if (b === 0) {
		throw new Error("No se puede dividir por cero");
	}
	return a / b;
}

try {
	let resultado = dividir(10, 0);
	console.log(resultado);
} catch (e) {
	console.log(e.message); // Muestra el mensaje "No se puede dividir por cero"
	console.log(e.name);    // Muestra el tipo/nombre del error (por defecto es "Error")
	console.log(e.stack);   // Muestra la traza del error (dónde ocurrió)
	console.log(e.cause);   // Permite adjuntar otro error que causó este
}
```

Invocamos la función `dividir` dentro de un bloque `try`, y esta función puede (o no) hacer un `throw`. Si efectivamente la función realiza el lanzamiento del `Error`, ese error va a ser capturado por el bloque `catch` en su parámetro `e` (puede tener cualquier nombre). Esa `e` es literalmente el objeto `Error` que creamos en la función.

Mostramos distintas propiedades útiles como `name`, `stack` y `cause`, aparte de `message`, que es el más común.

### Clases hijas de Error

`Error` es una clase base, es decir, es la más general. Pero de ella heredan otras clases que representan errores más específicos:

| Clase de error | Uso típico |
| :--- | :--- |
| **SyntaxError** | Código con errores de sintaxis. |
| **ReferenceError** | Usar una variable que no está definida. |
| **TypeError** | Llamar a algo que no es función, o acceder mal a un tipo. |
| **RangeError** | Números fuera de rango (ej: `.toFixed(300)`). |
| **EvalError** | Errores relacionados con `eval()`. |
| **URIError** | Mal uso de funciones `decodeURI`, `encodeURI`, etc. |

Podemos crear instancias de estas subclases:

```javascript
throw new TypeError("Este no es el tipo que esperaba");
throw new ReferenceError("Se usó una variable no definida");
throw new RangeError("El valor numérico superó el rango permitido");
```

También podemos usar la propiedad `cause` de los `Error`:

```javascript
const originalError = new Error("Error al leer la base de datos");

const finalError = new Error("Error general de la app", {
	cause: originalError
});

console.log(finalError.cause.message); // "Error al leer la base de datos"
```

Esto sirve por si tenemos funciones que lanzan errores y queremos preservar el original para tener más contexto en el depurador.