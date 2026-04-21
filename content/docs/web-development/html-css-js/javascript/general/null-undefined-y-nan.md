---
title: "Null, Undefined y NaN"
---

> Null, Undefined y NaN

- En JavaScript, existen varios valores que representan la ausencia o invalidez de un dato. Entre ellos, los más comunes son null, undefined y NaN.

- Ojo: tanto null como undefined son tipos de dato primitivos, pero NaN no es un tipo de dato, simplemente es un valor especial dentro de los Number.


> Undefined

- Undefined significa "no definido" y es el valor que JavaScript asigna automáticamente a una variable cuando -no se le ha dado un valor-. También se obtiene undefined cuando se intenta acceder a una propiedad que no existe.

	let x;
	console.log(x); // Muestra undefined (la variable no tiene valor)
	
	function saludar() {}
	console.log(saludar()); // Muestra undefined (una función sin return devuelve undefined)
	
	let obj = {};
	console.log(obj.nombre); // Muestra undefined (la propiedad no existe)

- Entonces, el valor undefined aparece...
- Cuando una variable se declara pero no se inicializa.
- Cuando una función no retorna nada explícitamente.
- Cuando intentamos acceder a una propiedad o índice que no existe en un objeto o array.


> Null

- Null significa "ausencia intencionada de valor". Es un valor que el programador asigna explícitamente para indicar que "acá no hay nada". Es la no dirección de memoria (00000000).

	let usuario = null; // Significa que el usuario no existe o no ha sido asignado
	console.log(usuario); // Muestra null

- Una curiosidad respecto a null que hay que entender es que null NO es un objeto. Pero si hacemos console.log(typeof null) nos va a decir "object". Esto es un ERROR muy antiguo de JavaScript, que se decidió no corregir, para no romper millones de sitios web antiguos.



- Ahora, un ejemplo con null y undefined:

	let sinDefinir; // Es undefined (no tiene valor)
	let vacio = null; // Es null (tiene un valor, pero ese valor es "vacío")
	
	console.log(sinDefinir === vacio); // Muestra false (son diferentes)
	console.log(sinDefinir == vacio);  // Muestra true (comparación débil: JS los considera similares)


> NaN (Not a Number)

- NaN significa "No es un número" y aparece cuando intentamos realizar una operación matemática con un dato inválido. Como dijimos antes, NO es un tipo de dato como null y undefined, sino que es un valor especial de la función constructora/clase Number. Veamos cómo funciona:

	console.log("Hola" * 2); // Muestra NaN (no se puede multiplicar un string por un número)
	console.log(parseInt("JS")); // Muestra NaN (no se puede convertir "JS" a número)
	console.log(0 / 0); // NaN Muestra (indeterminación matemática)

- Entonces, el valor NaN aparece...
- Cuando intentamos hacer operaciones matemáticas con datos no numéricos.
- Cuando convertimos un string a número y el string no contiene números válidos.
- Cuando hay operaciones matemáticas indefinidas como 0 / 0.


> ¿Cómo verificarlos?

	console.log(typeof undefined); // Muestra "undefined"
	console.log(typeof null); // Muestra "object" (esto es un error histórico de JS)
	console.log(typeof NaN); // Muestra "number" (porque NaN es un valor especial de Number)
	
	console.log(Number.isNaN(NaN)); // Muestra true (para detectar NaN correctamente)
	console.log(null === undefined); // Muestra false (son valores distintos)
	console.log(null == undefined); // Muestra true (comparación laxa los trata como similares)