---
title: "Variables y Direcciones de Memoria (JS)"
---

> Variables, Direcciones de Memoria y Punteros [Basado en JS]

- Sintaxis para declarar variables:

	let variable = "Hola";
	let variable2 = 10, variable3 = 20, variable4 = 30;

- A diferencia de lenguajes de bajo nivel como C y C++, JavaScript no maneja punteros directamente. Sin embargo, es importante entender cómo gestiona la memoria, las referencias y el alcance de las variables.


> Espacios de Memoria en el Motor de JavaScript

- Todas las variables son como espacios de memoria. Es decir, el motor de JavaScript sería una caja grande la cual tiene muchos huequitos (una cuadrícula). Bueno, cada vez que nosotros creamos una variable, le estamos pidiendo al motor que nos reserve uno de esos huequitos, es decir, le pedimos que nos reserve un espacio de memoria. 

- JavaScript administra la memoria automáticamente con un proceso llamado garbage collection, que libera la memoria de las variables que ya no se usan.

	let num1 = 100; 		// Se reserva un espacio en memoria con el valor 100
	num1 = num1 + 300; 	// Se actualiza el valor en la memoria
	console.log(num1); 		// Muestra 400


> Variables Actuales y Formales

- Las variables actuales, también llamadas argumentos, son las que se le pasan a la llamada de la función. Y los valores de esas variables actuales, pasan a ser los valores de las variables formales, también llamadas parámetros.

- Argumento = variable actual
- Parámetro = parámetro formal

- Las variables formales son las que están declaradas dentro de la función y reciben los valores de los parámetros actuales, o argumentos. No pasa nada si se llaman igual o no, ya que no son las mismas variables.

	function calcularSuperficie(base, altura) {
	    return base * altura;
	}
	
	console.log(calcularSuperficie(30, 10)); 	// Muestra 300

- En este caso, 30 y 10 son variables o parámetros actuales, mientras que base y altura son parámetros formales dentro de la función. Lo que ocurre dentro de calcularSuperficie() es: base = 30; altura = 10;


> Formas de pasarle variables a una función

- Cada vez que asignamos algo al parámetro de una función, no le estamos dando una variable, sino que le estamos dando EL VALOR de una variable. Esto se llama "pasaje por valor". 

- Otra forma de pasaje es el pasaje por referencia, es decir, que en vez de pasar una variable con un valor, vamos a pasar una variable cuyo valor es una dirección de memoria. Es decir, pasamos una referencia.

- ¿Y cuál es la diferencia? En el pasaje por valor, la función recibe una copia del valor, y no la variable original. Realmente lo que estamos pasando es un VALOR, no la ubicación de una variable. En cambio, cuando hacemos pasaje por referencia, la función recibe una referencia a la ubicación en memoria del objeto, es decir, recibe la dirección de memoria del elemento que le estamos pasando. Por ende, cualquier modificación que le hagamos a esta variable, va a alterar directamente al elemento al que estamos referenciando.

- En JavaScript, el pasaje por valor se usa para los tipos primitivos (number, string, boolean, null, undefined y symbol). Mientas que los objetos y arrays, se tienen que pasar por referencia. Y esto es lógico, ya que cada vez que interactuemos con objetos o arrays, lo que nosotros vamos a querer es afectar de forma directa a esos elementos, y no simplemente usar sus valores. Por eso es que los objetos y arrays se manejan con referencias.

- Veamos un ejemplo de pasaje por valor:

	let num = 10;
	function duplicar(x) {
	    x = x * 2;
	}
	duplicar(num);
	console.log(num); 	// Va a seguir mostrando 10

- ¿Por qué pasa esto? Por lo que dijimos antes, al estar pasando un número, es decir un tipo primitivo, estamos pasando simplemente el VALOR de la variable. O sea que cuando hacemos duplicar(num), en realidad no estamos pasando la variable num. Estamos pasando EL VALOR de la variable num, que es un simple "10". Entonces, todo lo que pase dentro de la función duplicar, NO VA A AFECTAR a la variable num original.

- Ahora, un ejemplo de pasaje por referencia:

	let persona = { nombre: "Juan" };
	function cambiarNombre(obj) {
	    obj.nombre = "Carlos";
	}
	cambiarNombre(persona);
	console.log(persona.nombre); 	// Muestra "Carlos"

- Como vemos, en este caso, cuando pasamos la variable persona a la función, no estamos simplemente pasando el valor de la variable persona. No hacemos eso. Lo que estamos haciendo en realidad es pasar la dirección de memoria de la variable persona. Es decir, estamos pasando la ubicación en memoria de la variable persona. Por ende, todo lo que hagamos dentro de la función va a afectar directamente al valor de la variable persona. Por eso le podemos pisar el valor "Juan" para cambiárselo por "Carlos".


> Direcciones de Memoria en JavaScript

- En JavaScript, las variables de tipo objeto no almacenan el valor en sí. Sino que como dijimos, almacenan la dirección de memoria de donde se encuentra el objeto. Como dijimos al principio, el motor de JS se puede ver como una cuadrícula, con sus huequitos. Y cada huequito, puede o no tener una variable. Y cada vez que un huequito tiene una variable, es decir, cada vez que creamos una variable, esta misma variable va a tener una dirección. Y "dirección" es como si fuese la dirección de una casa, como "Ferré 530".

- Entonces, cada espacio en memoria (cada huequito) tiene su propia dirección. Por eso se le llama dirección de memoria. Pero esas direcciones, en vez de sre "Ferré 530", son expresiones hexadecimales, como por ejemplo 0xa1b.

- "Dirección de Memoria" es sinónimo de "Referencia".

- Null significa la no dirección de memoria, sería un 00000000.

- Todo esto de las referencias significa que, nosotros podríamos tener más de una variable apuntando al mismo objeto o array. Es decir, podríamos tener más de una variable conteniendo la misma dirección de memoria. Porque recordemos, que una variable contenga una dirección de memoria, significa que una variable está referenciando a ese objeto en memoria. Esto es un puntero, una variable que su valor es una dirección de memoria

	let a = { valor: 1 };
	let b = a;
	b.valor = 2;
	console.log(a.valor); // Muestra 2

- En este caso, hicimos que b apunte al mismo lugar que a. Después, pisamos su propiedad llamada "valor", cambiando el 1 por 2. Y cuando mostramos el valor de a, vemos que muestra 2. Es decir, lo que modificamos en b, también afectó al valor de a. Esto es porque ambas variables contenían la misma dirección de memoria, es decir, apuntaban al mismo objeto en memoria (que en este caso, era el objeto { valor: 1 }.


>> Esto mismo aplicado a Arrays

	let vec1 = [1, 2, 3];
	let vec2 = vec1; 	// Ambas variables apuntan al mismo array

	vec2.push(4); 
	console.log(vec1); 	// Muestra [1, 2, 3, 4] (Es decir, también afecta a vec1)

- En este caso, primero se crea vec1 y se le asigna un array [1, 2, 3]. Después, se crea vec2 y se le asigna el mismo valor que vec1. Es decir, se le asigna el mismo array (la misma dirección de memoria). Esto quiere decir que cualquier cambio que se haga en vec2, también se hace en vec1. Porque son dos variables distintas apuntando a exactamente el mismo array, o sea, apuntando la misma ubicación en memoria.


>> Operador de Propagación en Arrays (Spread Operator)

- Una forma moderna de copiar un array en JS es usando el Operador de Propagación, así:

	const vec1 = [1, 2, 3, 4, 5];
	const vec2 = [...vec1];

- En este caso, lo que hicimos es copiar lo que contiene el array vec1 y pegarlo EN OTRO ARRAY DISTINTO. Es decir,  cuando creamos vec2, estamos asignándole otra dirección de memoria distinta, que en este caso, va a ser un array que contiene los mismos valores que vec1.

- Es distinto a lo que hicimos antes, porque antes simplemente creamos dos variables que apuntan al mismo array. Ahora son dos variables distintas, y que cada una apunta a un array distinto (a pesar de que los dos contengan los mismos valores o elementos).

- La sintaxis de [...array] se puede entender como rompe y volcar un huevo. Estamos agarrando un array con todos sus elementos, y se los colocamos dentro a otro array distinto.

- Un detalle extra sobre este operador:

- Si el array es multidimensional, ... no copia las referencias internas, solo la primera capa. Esto significa que si hay un array dentro de otro array, ese sub-array seguirá compartiéndose.

	const original = [[1, 2], [3, 4]];
	const copia = [...original];
	
	copia[0][0] = 99;
	
	console.log(original[0][0]); // Muestra 99
	
- Como vemos, copia[0][0] se modificó, y también afectó a original[0][0]. Eso es porque el array interno sigue siendo compartido. Para evitar esto y realizar una copia profunda de arrays anidados, hay que usar structuredClone() o JSON.parse(JSON.stringify(array)).