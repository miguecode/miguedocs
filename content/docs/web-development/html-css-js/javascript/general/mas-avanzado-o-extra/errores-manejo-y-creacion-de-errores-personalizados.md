---
title: "Errores. Manejo y Creación de errores personalizados"
description: "Errores y cómo manejarlos"
---


## Errores y cómo manejarlos

- Como sabemos, cuando estamos creando una función es común querer lanzar errores, y eso lo hacemos usando la palabra clave throw. En este apunte, vamos a ver cómo funciona el objeto Error, y cómo podemos crear nuestros propios errores personalizados.

```typescript
function dividir(a, b) {
	if (b === 0) throw new Error("No se puede dividir por cero");
	return a / b;
}

try {
	let resultado = dividir(10, 0);
	console.log(resultado);
} catch (e) {
	console.log(e.message); // Muestra el mensaje "No se puede dividir por cero"
	console.log(e.name); // Muestra el tipo/nombre del error (por defecto es "Error")
	console.log(e.stack); // Muestra una cadena con la traza del error (dónde ocurrió, línea por línea)
	console.log(e.cause); // Permite adjuntar otro error que causó este. Es útil para encadenar errores
}
```
- En este caso, invocamos la función dividir dentro de un bloque try, y esta función puede (o no) hacer un throw. Entonces, si efectivamente la función dividir realiza el throw (el lanzamiento del Error), ese error va a ser capturado por el bloque catch, en su parámetro "e" (puede tener cualquier nombre, no necesariamente la "e"). Entonces, esa "e" es literalmente el objeto Error que creamos en la función dividir. 

- Como todo objeto (en este caso, instanciado por la clase Error), tiene propiedades y métodos. En este caso, mostramos distintas propiedades útiles como name, stack y cause. Aparte de message, que es el más común.


## Clases hijas de Error

- Error es una clase base, es decir, es la más general. Pero de ella heredan otras clases, que representan errores más específicos como:

- Clase de error → Uso típico
- SyntaxError → Código con errores de sintaxis	
- ReferenceError → Usar una variable que no está definida	
- TypeError → Llamar a algo que no es función, o acceder mal un tipo	
- RangeError → Números fuera de rango (por ejemplo, .toFixed(300))	
- EvalError → Errores relacionados con eval()	[Está deprecado en muchos linters, mejor no usarlo]
- URIError → Mal uso de funciones decodeURI, encodeURI, etc.

- Entonces, así como podemos hacer "throw new Error("Este es el mensaje del error");", también podemos crear instancias de estas subclases nombradas, por ejemplo:

```typescript
throw new TypeError("Este no es el tipo que esperaba");
throw new ReferenceError("Se uso una variable no definida");
throw new RangeError("El valor numérico superó el rango permitido");
```
- Si bien esto es útil y muy intuitivo, en un proyecto más trabajado, nosotros podemos crear nuestros propios errores personalizados, y así poder dar más contexto de por qué y cómo ocurrió un error. Es decir, sería una forma más PRO de hacerlo. Vamos a ver esto ahora.


## Crear nuestros propios Errores personalizados

- Como dijimos, la clase base es Error. De ella, se heredan distintas clases como SyntaxError, ReferenceError, y demás. Bueno, lo que vamos a hacer nosotros no es ni más ni menos que eso. Crear una clase que va a heredar de Error.

```typescript
class ValidationError extends Error {
	constructor (message) {
		super(message);
		this.name = "ValidationError";
	}
}

class ConnectionError extends Error {
	constructor (message) {
		super(message);
		this.name = "connectionError";
	}
}
```
- En este caso, creamos un error de tipo ValidationError, y para crearlo le pasamos un string a modo de mensaje. Además, de forma interna, le asignamos "ValidationError" como "name".

```typescript
const validateUser = ({ name, age, email } = {}) => {
	if (!name) throw new ValidationError("Name is required");
	if (!age) throw new ValidationError("Age is required");
	if (!email) throw new ValidationError("Email is required");

	// Data Base connection
	throw new ConnectionError("Data Base is not available");
}
```
- Como vemos, hicimos una función para validar un usuario, y la validación va a lanzar ValidationError o ConnectionError, es decir, errores del tipo que acabamos de crear. Usamos el "new", para hacer uso del constructor de la clase, y así crear una instancia.

```typescript
try {
	validateUser(); 
} catch (e) {
	if (e.name === "ConnectionError") {
		// Intentar después de unos segundos
		setTimeout(() => {
			validateUser({ name, age, email })
		}, 3000)
	}
}
```
- En este caso, capturamos el error de la función validadora. Dentro del catch, analizamos la variable "e", la cual puede ser una instancia de ConnectionError o de ValidationError. Entonces, hacemos una comparación con "name" para ver si lo es o no. Y si lo es, reintentamos la validación al cabo de unos segundos. Pero ojo: La propiedad "name" para comparar está bien pero no es lo ideal, ya que es un string. Y comparar por strings no es lo mejor del mundo, es un contrato "flojo". Lo mejor es hacerlo con un "instanceof".


## Crear un archivo aparte

- Esto es un ejemplo real, y la mejor forma que existe para manejar errores. Vamos a crear nuestro propio archivo "errors.js", y acá es donde vamos a crear todas nuestras clases de errores personalizadas. Lógicamente, este archivo lo vamos a exportar para que los demás tengan su código.

- Después de crear nuestros errores en "errors.js", en cada archivo que quiera usarlos tenemos que escribir esto: 

```typescript
import { ValidationError, ConnectionError } from "./errors.js";
```
- Esto es perfecto ya que cada error es una clase en específico, eso le da mayor entidad y valor a nuestros errores creados. Y así, cuando vayamos a validar, no tenemos que hacerlo mediante un string "name", sino que directamente nos preguntamos: ¿De qué instancia es el error? Así:

```typescript
import { ValidationError, ConnectionError } from "./errors.js";
import { validationUser } from "./validation.js"

try {
	validateUser({ name, age, email });
} catch (e) {
	if (e instanceof ConnectionError) { // Ahora podemos hacer la comparación por INSTANCIA
		// Lo mismo de antes
	}
	if (e instanceof ValidationError) showUIModalValidation();
}
```
- Esta sería la forma correcta de usar nuestro. Como vemos, cuando hacemos los "if" dentro del "catch", podemos preguntarnos si "e" es un error de tipo ConnectionError, o ValidationError, que son los errores que creamos nosotros y que son los que lanza la función validateUser que hicimos antes. Esto es más sólido que hacer la comparación por un simple string "name", ya que instanceof detecta si el error es una instancia real de la clase. 


## Crear una clase base 

- Ahora vamos a ir todavía más allá. La idea es la misma de antes, crear nuestras propias clases en un archivo aparte y exportarlas. Pero ahora vamos a crear una nueva clase, la cual va a heredar de Error. Y las demás clases de errores que creemos, van a tener que heredar de esa nueva clase base que creamos. Y no directamente de Error. Es decir, estaríamos creando un "mediador" entre Error y nuestros errores.

- Esto nos evita repetir código como el "this.name" u otras propiedades, hace que podamos poner propiedades en común para todos, y hace que el archivo quede más limpio.

```typescript
export class AppError extends Error {
	constructor(message, options = {}) {
		super(message, options); // options es un objeto que puede incluir cause, etc.

		this.name = this.constructor.name; // Le pone el nombre de la clase automáticamente

		// Esto mejora la traza del error en algunos entornos
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}
```
- Como vemos ahí, creamos una clase base llamada AppError, la cual hereda de Error. Su constructor recibe un mensaje obligatorio como primer parámetro, y un objeto opcional llamado options. Estos 2 parámetros se los va a pasar al constructor de Error usando super(). Ya que el constructor de Error recibe eso, un primer string message y un objeto opcional llamado options. Después, a "name" le pasamos el nombre con el que creamos la instancia, y hacemos un ajuste en el StackTrace del error. Todo esto es bueno ya que ahora, cada vez que creemos un error heredado de esta clase AppError, va a tener estas características, y nos ahorramos de escribirlo cada vez que creamos un error nuevo.

- **Haríamos esto para crear los errores**: 

```typescript
export class ValidationError extends AppError {
	constructor(message, cause) {
		super(message, { cause });
	}
}

export class ConnectionError extends AppError {
	constructor(message, cause) {
		super(message, { cause });
	}
}
```
- El segundo parámetro, "cause", va a ser un objeto. Si no recibe nada, va a ser undefined. Y que sea undefined no está mal, no rompe con nada. Cuando se lo pasa a super() usa una "shorthand syntax", que es pasarle el objeto "cause" dentro de llaves { }. Esto significa que le estamos pasando un objeto literal { }, que va a tener una propiedad llamada "cause", y que su valor va a ser justamente lo que tenía cause: { cause: cause }. Si no le pasamos ningún cause, no pasa nada: Lo que va a mandar por parámetro va a ser { cause: undefined }. Y está perfecto.

- Y después de todo esto ya está, seguimos usando nuestros errores como lo hacíamos antes, haciendo "throw new ValidationError("Error de validación");" o "ConnectionError("Error de conexión", otroError);"

- **Para dejar en claro cómo funciona "cause", es así**: 

```typescript
new Error("mensaje", {
	cause: otroError,
});
```