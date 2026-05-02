---
title: "Funciones Generadoras"
description: "Las funciones generadoras son un tipo especial de función que puede pausar y reanudar su ejecución, permitiendo crear flujos iterables complejos."
---


## ¿Qué es una Función Generadora?

Una función generadora es un tipo especial de función que puede pausar su ejecución en medio del proceso y reanudarla más tarde. Hace uso de la sintaxis `function*`, la palabra clave `yield` y el método `.next()`.

A diferencia de una función normal, una función generadora es **iterable**. Esto significa que se puede recorrer como si fuese un array, un Map o cualquier otra estructura de datos compatible con iteradores.

> [!TIP]
> Las funciones `async/await` se inspiraron en las funciones generadoras. Antes de que existiera `async/await`, la comunidad usaba generadores junto con librerías como `co` para simular asincronía. Posteriormente, ECMAScript formalizó este estilo basándose en Promesas.

## Ejemplo básico

```javascript
function* saludar() {
	yield "Hola";
	yield "¿cómo";
	yield "estás?";
}

const gen = saludar();

console.log(gen.next()); // { value: "Hola", done: false }
console.log(gen.next()); // { value: "¿cómo", done: false }
console.log(gen.next()); // { value: "estás?", done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

En este caso, `saludar()` es nuestra función generadora (indicado por el `*`). La palabra clave `yield` funciona de forma similar a un `return`, pero con la capacidad de **pausar** la función.

Cada vez que invocamos el método `.next()`, la función se ejecuta hasta encontrar el siguiente `yield`. Este método devuelve un objeto con dos propiedades:
*   **`value`**: El valor entregado por el `yield`.
*   **`done`**: Un booleano que indica si la función ha completado su ejecución.

## Iteración con Generadores

Al ser iterables, los generadores pueden usarse con bucles `for...of`, el operador de propagación (*spread operator*), entre otros.

```javascript
function* generadorDeLetras() {
	yield "A";
	yield "B";
	yield "C";
}

for (let letra of generadorDeLetras()) {
	console.log(letra); // Muestra "A", "B" y "C"
}
```

También son ideales para secuencias infinitas o generadores de IDs:

```javascript
function* contador() {
	let i = 1;
	while (true) {
		yield i++;
	}
}

const it = contador();
console.log(it.next().value); // 1
console.log(it.next().value); // 2
```

## Ejemplo: Sucesión de Fibonacci

Los generadores son excelentes para algoritmos donde no sabemos de antemano cuántos resultados necesitaremos. A diferencia de una función recursiva (que suele ejecutarse hasta un límite definido), el generador produce valores bajo demanda.

```javascript
function* fibonacci() {
	yield 0;
	yield 1;

	let anterior = 1;
	let penultimo = 0;

	while(true) {
		let actual = anterior + penultimo;
		yield actual;

		penultimo = anterior;
		anterior = actual;
	}	
}

const genFib = fibonacci();
console.log(genFib.next().value); // 0
console.log(genFib.next().value); // 1
console.log(genFib.next().value); // 1
console.log(genFib.next().value); // 2
console.log(genFib.next().value); // 3
```

## Envío de valores al Generador

El método `.next()` acepta un parámetro opcional que se convierte en el resultado de la expresión `yield` dentro de la función. Esto permite modificar el estado interno del generador desde fuera.

```javascript
function* doble() {
	const x = yield "Dame un número";
	yield x * 2; 
}

const d = doble();
console.log(d.next().value);    // "Dame un número"
console.log(d.next(10).value);  // 20 (le pasamos 10 al yield anterior)
```

### Generadores Asíncronos

También podemos combinar generadores con `async/await` para manejar flujos de datos asíncronos (como peticiones a una API en serie).

```javascript
async function* fetchData() {
	const res1 = await fetch('/api/dato1');
	yield await res1.json();

	const res2 = await fetch('/api/dato2');
	yield await res2.json();
}

for await (let dato of fetchData()) {
	console.log(dato);
}
```