---
title: "Intérprete de JS y el Hoisting (Levantamiento)"
---

> Entendiendo el Intérprete de JS y el Hoisting

- El intérprete de JS, al interpretar el código línea a línea, lo primero que hace es el hoisting (levantamiento). El hoisting es un proceso que hace dos cosas por separado, pero a la vez:

1. Capta todas las declaraciones de variables, y les reserva sus lugares en memoria.
2. Capta todas las funciones declaradas que encuentre.

- La gracia de este proceso es que, cada vez que encuentra una declaración de variable o una función declarada, lo cuelga hasta arriba en el código. Es decir, lo levanta para que se ejecute antes.

- El hoisting lo que hace es captar las DECLARACIONES de variables. Que no es lo mismo que las ASIGNACIONES.

- Entonces, vamos a ver cómo funciona eso del Hoisting en la declaración de variables y en las funciones declaradas (que no son lo mismo que las funciones expresadas).


> Hoisting en la declaración de variables 

	console.log(x); // Muestra undefined
	var x = 10;
	console.log(x) // Muestra 10
	
- En este caso, el primer console.log va a mostar "undefined", ya que RECONOCE la variable "num", pero no reconoce que tenga algún valor. Ya que el barrido "colgó" la declaración de la variable num hasta arriba del código, pero lo que no puede interpretar es la asignación = 10. Por eso, console.log está mostrando 'num' correctamente, pero lo que pasa es que en el momento en el que la está mostrando, su valor es "undefined", porque todavía no se inicializó. Ya después en el segundo, ahí sí muestra 10.

- Ese mismo código, internamente, el interpretador lo trata así:

	var x;     		  // La declaración "se cuelga arriba" (hoisting)
	console.log(x);   // Muestra undefined (Porque solo subió la declaración, no la asignación)
	x = 10;    		 // Ahora sí se asigna el valor
	console.log(x);  // Muestra 10


> Hoisting en la declaración de variables 

- Primero, vamos a ver que en JavaScript, existen dos tipos de funciones: las declaradas y las expresadas.

	saludar(); 		// Funciona porque la función declarada sube completamente
	despedir(); 	// No funciona. despedir is not a function	
	
	// Función declarada
	function saludar() {
	    console.log("Hola mundo"); 
	}
	
	// Función expresada
	var despedir = function() {
	    console.log("Chau mundo")
	}

- En este caso, la función saludar() va a funcionar correctamente. Pero la función despedir(), no. Esto es así porque "despedir" sólo es una variable sin inicializar. Por lo tanto, no podemos hacerle () como si fuera o como si apuntara a alguna función. Es sólo una variable sin valor, es decir, undefined.

- Y eso es así porque el barrido solo va a colgar la declaración de la variable "despedir". Pero NO capta la asignación. Por lo tanto, la variable "despedir" se va a convertir en un puntero a función recién cuando le ponemos el "=function{...}". Y no antes.