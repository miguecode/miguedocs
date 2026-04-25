---
title: "Funciones Generadoras"
description: "Una función generadora es un tipo especial de función que puede pausar su ejecución en medio del proceso y reanudarla más tarde. Hace uso de la sintaxis functio..."
---



- Una función generadora es un tipo especial de función que puede pausar su ejecución en medio del proceso y reanudarla más tarde. Hace uso de la sintaxis function*, la palabra clave "yield", y el método next().

- Además de esto, una función generadora es una función iterable, es decir, se la puede iterar como si fuese un array, un Map, un objeto, etc. Cosa que, obviamente, no se puede hacer con una función normal.

- **Dato curioso**: Si bien las funciones async/await no son azúcar sintáctico -de forma directa-, sino que SE INSPIRARON en ellas. Es decir, las funciones async/await nacieron gracias a la existencia previa de las funciones generadoras. Pero estrictamente, lo que usan por debajo son promesas. Esto es así, ya que antes de que existiera async/await, la comunidad usaba generadores + una libreria como "co", para simular asincronía. Ese patrón gustaba tanto, que ECMASCript formalizó ese estilo creando las async/await, pero basado en las Promise.

- **Veamos un ejemplo básico**: 

```typescript
function* saludar() {
	yield "Hola";
	yield "¿cómo";
	yield "estás?";
}

const gen = saludar();

console.log(gen.next()); // Muestra { value: "Hola", done: false }
console.log(gen.next()); // Muestra { value: "¿cómo", done: false }
console.log(gen.next()); // Muestra { value: "estás?", done: false }
console.log(gen.next()); // Muestra { value: undefined, done: true }
```
- En este caso, saludar() es nuestra función generadora. Es así porque le pusimos un " * "a function. Dentro del cuerpo de la función, vemos distintos "yield". Esta palabra clave hace lo mismo que un "return", pero con una diferencia clave: las funciones generadoras se pueden pausar. Y el lugar donde se pausan es, justamente, en cada yield que encuentren.

- Es decir, cada vez el código de una función generadora llegó a un "yield", lo que va a hacer es PAUSAR el proceso del a función, y va a devolver algún valor. Ese valor que devuelve "yield" es siempre un objeto con 2 propiedades: "value" y "done". Value va a ser el valor indicado dentro de la ejecución de la función, es decir, lo que hayamos querido retornar, y Done va a ser un booleano que indica si la función generadora ya terminó de completarse o no.

- Lo que hicimos en el ejemplo es guardar la función generadora en una nueva variable llamada "gen". Estas funciones generadoras tienen un método llamado "next". Y esa es la forma en la que tenemos que ejecutar la función generadora: invocando a su método next(). Cada vez que lo hacemos, la función se va a ejecutar hasta encontrar el primer yield y devolverlo. La próxima vez que hagamos next(), la función va a partir desde el lugar donde se quedó el yield anterior, y va a ejecutarse hasta encontrar un nuevo yield. Y así constantemente hasta completarla.


## La iteración

- Como dijimos antes, una función generadora sirve para crear una estructura de datos iterable. Que una función sea iterable, significa que tiene los métodos forof, forin, el spread operator, y demás. Esos métodos, en una función normal, serían imposibles de usarse. Veamos un ejemplo:

```typescript
function* contador() {
	let i = 1;

	while (true) {
		yield i++;
	}
}

const it = contador();

console.log(it.next().value); // Muestra 1
console.log(it.next().value); // Muestra 2
console.log(it.next().value); // Muestra 3
```
- Esto se podría usar, por ejemplo, para crear IDs automáticas, secuencias, generadores de nombres, etc.

- Como dijimos, al ser una función iterable, se la puede iterar con un forof. Veamos un ejemplo de eso:

```typescript
function* generadorDeLetras() {
	yield "A";
	yield "B";
	yield "C";
}

for (let letra of generadorDeLetras()) {
	console.log(letra); // Muestra "A", después "B", después "C".
}
```
- Como vemos, los generadores son iterables de forma nativa, y por eso podemos usar el forof para iterarlas.


## Ejemplo de la Sucesión de Fibonacci

- Si bien no es común hacer la Sucesión de Fibonacci con una función generadora, esto puede ser considerado JavaScript avanzado y puede ser un buen ejercicio entenderlo.

- La ventaja de hacer la Sucesión de Fibonacci es que, puede pasar que nosotros no sabemos cuántas veces vamos a ejecutar la función, es decir, no sabemos cuántos números de la serie de Fibonacci queremos obtener. Por eso puede ser útil hacerlo con una función generadora:

```typescript
function* fibonacci () {
	yield 0;
	yield 1;

	let firstRecent = 1;
	let secondRecent = 0;

	while(true) {
		let value = firstRecent + secondRecent;
		yield value;

		secondRecent = firstRecent;
		firstRecent = value;
	}	
}

const gen = fibonacci();
console.log(gen.next());	// Muestra { value: 0, done: false }
console.log(gen.next());	// Muestra { value: 1, done: false }
console.log(gen.next());	// Muestra { value: 1, done: false }
console.log(gen.next());	// Muestra { value: 2, done: false }
console.log(gen.next());	// Muestra { value: 3, done: false }
```
- Para saber de qué se trata la Sucesión de Fibonacci, ir al apunte de Recursividad. En ese ejemplo, lo que hacemos es hacer la Sucesión de Fibonacci pero con una función recursiva. Lo que cambia con esta es que, la recursiva indica que nosotros sabemos cuántas veces vamos a ejecutarla, pero con la generadora no.

- Más adelante en este mismo apunte, vamos a ver una forma de hacerle un plus a esta función, dándole la posibilidad de resetearse el Fibonacci, para empezarla desde 0 si queremos.


## Otras posibilidades

- Con las funciones generadoras, también podemos hacer cosas más rebuscadas, como colocar un generador dentro del mismo generador, así:

```typescript
function* numeros() {
	yield 1;
	yield* [2, 3];
	yield 4;
}

console.log([...numeros()]); // Muestra [1, 2, 3, 4]
```
- También podemos hacer que reciban valores (esto es bastante útil):

```typescript
function* doble() {
	const x = yield "Dame un número";
	yield x * 2; // Esa "x" va a tomar el valor de lo que le pasamos a next(valor)
}

const d = doble();

console.log(d.next().value); // "Dame un número"
console.log(d.next(10).value); // Muestra 20
```
- El método next(), como vemos, también acepta un parámetro opcional, el cual puede ser utilizado para modificar el estado interno del generador. El valor recibido por next() es usado como si fuera el resultado de la iteración anterior (último valor entregado por yield), el cual detuvo al generador.

- Dicho esto último, podríamos mejorar la función del Fibonacci, dándole la posibilidad de resetearse:

```typescript
function* fibonacci() {
	// La misma lógica de antes...
	while (true) {
		// La misma lógica de antes...
		let reset = yield state;
		if (reset) {
			firstRecent = 1;
			secondRecent = 0;
		}	
	}
}
```
- Así, nosotros podríamos, en algún momento, llamar a la función así:

console.log(gen.next(true));	// Esto va a hacer que el Fibonacci empiece desde su primer valor.


- También podemos hacer generadores con async y await:

```typescript
async function* fetchData() {
	const data1 = await fetch('/api/dato1');
	yield await data1.json();

	const data2 = await fetch('/api/dato2');
	yield await data2.json();
}

for await (let dato of fetchData()) {
	console.log(dato);
}
```
- Esto último puede servir para generar datos que llegan con delay, como peticiones a una API.