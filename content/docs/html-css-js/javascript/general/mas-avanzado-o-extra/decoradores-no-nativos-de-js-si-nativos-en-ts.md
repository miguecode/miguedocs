---
title: "Decoradores (No nativos de JS, sí nativos en TS)"
description: "Los decoradores son una propuesta avanzada de JavaScript (Stage 3 en TC39) que permite extender las clases, métodos y propiedades."
---


## Decoradores

Los decoradores son una propuesta avanzada de JavaScript (Stage 3 en TC39). Para usarlos, necesitamos configurar nuestro entorno con herramientas como **Babel** o usando **TypeScript**. No están disponibles en entornos JS "puros" como navegadores sin configuración especial.

Los decoradores son funciones que nos permiten extender las clases añadiendo, modificando o incluso reemplazando sus funcionalidades. Los decoradores afectan a las clases y también a sus métodos y propiedades.

Se definen con una arroba `@` al principio. 

**Aclaración**: El patrón decorador (como patrón de diseño) no es lo mismo que la funcionalidad formal de los decoradores en el lenguaje. Si bien podemos implementar el patrón decorador usando la sintaxis de decoradores, se pueden lograr objetivos similares sin ellos.

## Ejemplo básico

```typescript
function logger(value, context) {
	console.log(value, context);
}

@logger	// kind = class
class Persona {
	@logger
	weight = 75;	// kind = field

	@logger
	getWeight() { return this.weight; }	// kind = method

	@logger
	get peso() { return this.weight; }	// kind = getter

	@logger
	set peso(value) { this.weight = value; }	// kind = setter
}
```

En este ejemplo, aplicamos el decorador `@logger` en varios elementos. La función `logger()` se ejecutará varias veces, una por cada elemento asociado. 

Cuando el motor lee nuestros elementos (clase, propiedades, métodos), ejecuta la función asociada al decorador. La función `logger` recibe dos parámetros:
1.  **`value`**: Contiene el elemento que estamos decorando.
2.  **`context`**: Recibe un objeto con metadatos del elemento decorado (su tipo, nombre, si es estático, privado, etc.).

### El objeto Context

```typescript
function logger(value, context) {
	console.log(context.kind);    	// "class", "method", "field", "getter", "setter"
	console.log(context.name);    	// Nombre del método o propiedad
	console.log(context.static);  	// true si es static
	console.log(context.private); 	// true si es private
}
```

**Orden de ejecución de los decoradores:**
1.  Elementos de tipo `field`
2.  Elementos de tipo `setter`
3.  Elementos de tipo `getter`
4.  Elementos de tipo `method`
5.  Elementos de tipo `class`

## Extendiendo Funcionalidad

Podemos usar decoradores para envolver métodos y añadir lógica extra, como logs o validaciones.

```typescript
function logger(value, { name, kind }) {
	if (kind === "method") { 
		return function (...args) {
			console.log(`Log: Ejecutando ${name} con argumentos: ${args.join(", ")}`);
			const returnedValue = value.call(this, ...args);
			console.log(`Log: Fin de ejecución. Retornó: ${returnedValue}`);
			return returnedValue;
		}
	}
}
```

Aquí usamos la desestructuración `{ name, kind }` para obtener solo lo que necesitamos del contexto. Si el elemento es un método, retornamos una nueva función que envuelve a la original (`value`). Usamos `.call(this, ...args)` para asegurar que el contexto de la clase se mantenga correctamente.

## Casos de uso prácticos

La verdadera utilidad de los decoradores es añadir comportamientos transversales (*cross-cutting concerns*) sin ensuciar la lógica de negocio de la clase. Por ejemplo, medir el tiempo de ejecución:

### Decorador `@trackExecution`

```typescript
function trackExecution(value, { name }) {
	return function (...args) {
		console.time(`⏱ ${name}`);
		const result = value.call(this, ...args);
		console.timeEnd(`⏱ ${name}`);
		return result;
	};
}

class Calculadora {
	@trackExecution
	sumar(a, b) {
		return a + b;
	}
}

const calc = new Calculadora();
calc.sumar(4, 7); // La consola mostrará el tiempo que tardó en ejecutarse
```