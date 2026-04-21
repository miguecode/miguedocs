---
title: "Objeto Set (colección similar a Array)"
---

> Set

- Set es una colección de valores únicos, sin claves. Es como un array, pero sin valores repetidos. Lógicamente, por debajo, Set no es más que otro objeto de JavaScript, como lo puede ser Map.


>> Características principales

- Guarda solo valores únicos → no permite duplicados
- La posición o índice no importa, porque no es un array
- Se puede recorrer con métodos como forEach, o usar for...of
- Mantiene el orden de inserción
- Tiene métodos propios como add, delete, has, y clear

>> ¿Para qué se usan los Set?

- Para transformar un array en una versión sin elementos repetidos
- Para verificar la existencia de un valor rápidamente
- Para hacer búsquedas rápidas sin claves
- Para representar conjuntos matemáticos
- Para hacer operaciones como unión, intersección y diferencia


> Ejemplo básico

	const conjunto = new Set();
	
	conjunto.add("🍎");
	conjunto.add("🍌");
	conjunto.add("🍎"); // Ignorado: ya existía
	
	console.log(conjunto); // Set(2) {"🍎", "🍌"}
	console.log(conjunto.has("🍎")); // true
	console.log(conjunto.size); // 2
	
	conjunto.delete("🍌"); // Elimina "🍌"
	conjunto.clear(); // Elimina todo


> Sacar repetidos de un array

	const numeros = [1, 2, 3, 2, 4, 1, 5];
	const sinRepetidos = [...new Set(numeros)];
	
	console.log(sinRepetidos); // [1, 2, 3, 4, 5]


> Hacer operaciones "Union", "Intersección" y "Diferencia"

- Basándonos en estos dos Set A y B:

	const A = new Set([1, 2, 3]);
	const B = new Set([2, 3, 4]);

- Podemos hacer una Union:

	const union = new Set([...A, ...B]);
	console.log(union); // Muestra Set(4) {1, 2, 3, 4}

- Podemos hacer una Intersección:

	const interseccion = new Set([...A].filter(x => B.has(x)));
	console.log(interseccion); // Muestra Set(2) {2, 3}

- Podemos hacer una Diferencia:

	const diferencia = new Set([...A].filter(x => !B.has(x)));
	console.log(diferencia); // Muestra Set(1) {1}


> Set vs Map vs Object vs Array

Tipo		Claves			Valores duplicados	  Ordenado	Ideal para...
_______________________________________________________________________________________________________________
Object	🔑 strings		✅ Sí			  ❌ No		Modelar entidades, estructuras fijas
Map		🔑 cualquier tipo	✅ Sí			  ✅ Sí		Lookup, eficiencia, claves complejas
Array	🚫 (indexado)		✅ Sí			  ✅ Sí		Listas ordenadas con repetidos
Set		🚫 (solo valores)	❌ No			  ✅ Sí		Conjuntos únicos, eliminar duplicados