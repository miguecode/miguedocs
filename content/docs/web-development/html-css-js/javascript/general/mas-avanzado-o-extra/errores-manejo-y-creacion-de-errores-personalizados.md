---
title: "Errores. Manejo y Creación de errores personalizados"
description: "Aprende a gestionar excepciones de forma profesional en JavaScript mediante el objeto Error y la creación de clases de error personalizadas."
---

## Errores y cómo manejarlos

En JavaScript, es común que nuestras funciones necesiten lanzar alertas cuando algo no sale como se esperaba. Para esto utilizamos la palabra clave `throw`. En este apunte, profundizaremos en el funcionamiento del objeto `Error` y cómo podemos crear nuestros propios errores personalizados para mejorar el flujo de depuración.

```javascript
function dividir(a, b) {
	if (b === 0) throw new Error("No se puede dividir por cero");
	return a / b;
}

try {
	let resultado = dividir(10, 0);
	console.log(resultado);
} catch (e) {
	console.log(e.message); // "No se puede dividir por cero"
	console.log(e.name);    // "Error" (nombre por defecto)
	console.log(e.stack);   // Cadena con la traza del error (dónde ocurrió)
	console.log(e.cause);   // Error original que causó este, si existe
}
```

Capturamos el error en el bloque `catch`. El parámetro `e` (puede tener cualquier nombre) es el objeto instanciado a partir de la clase `Error`. Este objeto posee propiedades fundamentales como `message` (el texto descriptivo), `name` e incluso la traza detallada en `stack`.

## Clases fijas de Error en JavaScript

`Error` es la clase base, pero JavaScript incluye subtipos más específicos para diferentes escenarios:

| Clase de error | Uso típico |
| :--- | :--- |
| **SyntaxError** | Errores de sintaxis en el código. |
| **ReferenceError** | Intento de usar una variable no definida. |
| **TypeError** | Operación sobre un tipo de dato incorrecto (ej: llamar a algo que no es función). |
| **RangeError** | Números fuera de un rango permitido (ej: `.toFixed(300)`). |
| **URIError** | Mal uso de funciones como `decodeURI` o `encodeURI`. |

Podemos lanzar estos errores específicos para dar más contexto:

```javascript
throw new TypeError("Se esperaba un string");
throw new RangeError("Valor fuera de límites");
```

## Crear nuestros propios Errores personalizados

En proyectos profesionales, es mejor crear clases de error propias. Esto permite que nuestra lógica de manejo de errores sea más robusta y legible. Para lograrlo, creamos clases que hereden de `Error`.

```javascript
class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

class ConnectionError extends Error {
	constructor(message) {
		super(message);
		this.name = "ConnectionError";
	}
}
```

Usarlos en nuestras funciones:

```javascript
const validateUser = (user) => {
	if (!user.name) throw new ValidationError("El nombre es requerido");
	// ... más validaciones
	throw new ConnectionError("Base de datos no disponible");
};
```

### Manejo mediante `instanceof`

Aunque podemos comparar errores usando el string de su propiedad `name`, lo ideal en JavaScript moderno es usar `instanceof`. Este operador verifica si el error es realmente una instancia de nuestra clase.

```javascript
try {
	validateUser(data);
} catch (e) {
	if (e instanceof ConnectionError) {
		console.log("Reintentando conexión...");
		// Reintentar lógica...
	} else if (e instanceof ValidationError) {
		console.log("Error de usuario:", e.message);
	}
}
```

## Patrón Profesional: Clase Mediadora `AppError`

Para evitar repetir la asignación manual de `this.name = "Nombre"` en cada error nuevo, podemos crear una clase base intermedia.

```javascript
export class AppError extends Error {
	constructor(message, options = {}) {
		super(message, options);
		// Asigna automáticamente el nombre de la clase que se instancia
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

// Ahora nuestros errores específicos son muy limpios:
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

### Uso de `cause`

La propiedad `cause` es excelente para "encadenar" errores. Permite lanzar un error amigable mientras mantenemos el error técnico original dentro para que el desarrollador pueda verlo en los logs.

```javascript
try {
	await conectarBD();
} catch (dbError) {
	// Lanzamos nuestro error pero guardamos el original en 'cause'
	throw new ConnectionError("No pudimos conectar con el servidor", dbError);
}
```