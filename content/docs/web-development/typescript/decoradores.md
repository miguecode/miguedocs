---
title: "Decoradores"
description: "Los decoradores son funciones que nos permiten extender la funcionalidad de una clase, incluyendo a cualquiera de sus elementos. Entonces, los decoradores afect..."
---

## Decoradores

Los decoradores son funciones que nos permiten extender la funcionalidad de una clase, incluyendo a cualquiera de sus elementos. Entonces, los decoradores afectan a las clases y también a sus métodos y propiedades.

Los decoradores se definen con una arroba " @ " al principio.

**Aclaración**: El patrón decorador no es lo mismo que la funcionalidad de los decoradores. Es decir, si bien podemos llevar a cabo el patrón decorador usando la sintaxis de los decoradores, no son lo mismo. De hecho, podríamos hacer el patrón decorador sin usar decoradores. Así que no son exactamente lo mismo.


## Ejemplo básico

```typescript
function logger (value, context) {
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

En este ejemplo, pusimos al decorador @logger en muchos elementos distintos. Así que la función logger() se va a ejecutar varias veces, una con cada elemento asociado al decorador. Aclaración: un elemento puede tener más de un decorador, si así lo quisiéramos.

Como vemos, la función logger que hicimos al principio lo que hace es hacer un console.log al cabo de recibir 2 parámetros. Y en los elementos, usamos el decorador "@logger", el cual no se llama así por casualidad. Se llama así porque está asociado a nuestra función logger(). Entonces, lo que ocurre es que, cuando el motor de JavaScript lee nuestros elementos (la clase, sus propiedades y sus métodos), va a ejecutar la función logger, por cada elemento al que se está asociando. Es decir, como vemos, antes de poner "weight = 75", le colocamos un @logger. Eso hace que, al leer "weight = 75", se ejecute la función asociada a @logger, que es logger(). Y así con cada elemento de la clase, y con la clase en sí. Obviamente, si a algún elemento no le ponemos @logger, no se va a ejecutar dicha función.

Pero... ¿Qué recibe la función logger? Como vemos, recibe un "value" y un "context". El "value" va a guardar al elemento que estamos decorando. Es decir, el elemento asociado al decorador. El primero, como vemos, va a ser la clase Persona. Y "context" va a recibir información de cada elemento decorado, su tipo, nombre, si es estático o no, si es privado o no, y demás. En el ejemplo está comentado el "kind" (el tipo) de cada elemento. 

```typescript
function logger(value, context) {
	console.log(context.kind);    	// "class", "method", "field", "getter", "setter"
	console.log(context.name);    	// nombre del método o propiedad
	console.log(context.static);  	// true si es static
	console.log(context.private); 	// true si es private
	// ... Hay más según el tipo de decorador
}
```

- **El orden de ejecución de los decoradores es**: 
1. Los elementos de tipo field
2. Los elementos de tipo setter
3. Los elementos de tipo getter
4. Los elementos de tipo method
5. Los elementos de tipo class


## Otro ejemplo

- Vamos a mantener la misma clase de antes, pero modificando la función logger:

```typescript
function logger (value, { name, kind }) {
	console.log("Decorated called"); // Se ejecuta cada vez que leemos algún decorador @logger

	if (kind === "method") { 	   // Va a alterar a getWeight
		return function (...args) {  // Se ejecuta cada vez que se llame a getWeight
			console.log(`Logging ${name} execution with arguments ${args.join(", ")}`);
			const returnedValue = value.call(this, ...args);
			console.log(` End execution after returning ${returnedValue}`);
			return returnedvalue;
		}
	}
}
```

Lo primero que hicimos fue cambiar los parámetros que recibe logger. Antes recibía value y context. Ahora, en vez de recibir el contexto entero, solamente va a recibir el name y el kind (los cuales, son dos propiedades del objeto context). Es decir, estamos recibiendo menos cosas. Porque antes recibíamos el objeto context, el cual contiene a name, kind, y otras propiedades, pero ahora mediante la desestructuración { }, nos quedamos solo con sus propiedades name y kind.

**Y en la función lo que hacemos es**: primero, verificamos si el tipo del elemento es un método. Y como el único método que tenemos es el getWeight, es al único al que le vamos a hacer algo. En este caso, vamos a retornar una función la cual recibe distintos argumentos, los cuales van a ser mostrados por consola. Entonces, ese console.log va a mostrar "name" y cada argumento recibido.

Después, ejecutamos la función getWeight. Y... ¿Cómo? Bueno, usando "value". Porque como dijimos al principio, "value" es el elemento asociado al decorador. Por ende, value = getWeight. Y lo ejecutamos con el "call" para poder pasarle el "this" correcto, y sus argumentos. Y lo que retorne la función, lo guardamos, lo mostramos por consola, y lo retornamos. Entonces:

A este punto, la función logger se va a ejecutar 5 veces, una por cada vez que lee un elemento con el decorador @logger. Eso lo sabemos. Y cuando lee el de getWeight, la primera vez no va a hacer nada, ya que no tiene nada que retornar. Entonces, si nosotros hacemos esto:

```typescript
const persona1 = new Persona();
persona1.getWeight();
```

Ahora, lo que hacemos es ejecutar getWeight. Y el decorador vuelve a actuar. Y esta vez no está simplemente leyéndolo como antes, sino que ahora lo está ejecutando. Así que ahora sí se realiza la función que hicimos.


## ¿Y cuál es la gracia de todo esto?

Como dijimos al principio del apunte, los decoradores sirven para -extender la funcionalidad- de las clases, de sus métodos y de sus propiedades. Y como vimos recién, nosotros podemos ejecutar código (las funciones que queramos) justo antes de leer algún elemento (clase, propiedad o método), o justo después de hacerlo. O incluso, como hicimos con getWeight, podemos ejecutar código justo antes de que se ejecute -en algún momento- el método getWeight. Entonces, eso nos abre una abanico de posibilidades funcionales muy grande. 

Podríamos hacer un decorador @tracking, que se dedique a reconocer cuánto tiempo tarda en ejecutarse una función. Haríamos exactamente lo mismo que antes, pero usando el método time().


## Ejemplo @track

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
calc.sumar(4, 7); // Mide cuánto tarda sumar()
```