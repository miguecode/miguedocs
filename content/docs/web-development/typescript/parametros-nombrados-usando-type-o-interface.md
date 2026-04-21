---
title: "Parámetros nombrados usando Type o Interface"
---

> Parámetros nombrados (En TypeScript)

- Es una técnica que consiste en pasar un único objeto como argumento a una función, y después desestructurarlo internamente. Esto mejora la legibilidad, escalabilidad y seguridad del código, especialmente en funciones con muchos parámetros. Si bien esto también se pude hacer en JavaScript, en TypeScript es más poderoso gracias al uso de los types o las interfaces, ya que nos van a brindar autocompletado y validación de tipos.

- ¿Cuándo hacer esto? Cuando tenemos una función que recibe varios parámetros, y nosotros sabemos que en algún futuro esos parámetros pueden ser más. Esto es una buena práctica.


> Ejemplo básico SIN parámetros nombrados

	function createPerson(name: string, lastName: string, sex: string, age: number = 18, job?: string) {
	  // ...
	}

	createPerson("Miguel", "Gil", "Masculino", undefined, "Programador");

- Esta es la forma básica de hacerlo. Si bien es válida, tiene algunos problemas:

1. Si agregamos nuevos parámetros en el futuro, podemos romper llamadas existentes.
2. El orden de los parámetros es obligatorio,
3. No es tan legible.


> Versión mejorada usando parámetros nombrados

	interface PersonConfig {
	  name: string;
	  lastName: string;
	  sex: string;
	  age?: number;
	  job?: string;
	};
	
	function createPerson2({ name, lastName, sex, age = 18, job }: PersonConfig) {
	  // ...
	}
	
	createPerson2({
	  name: "Miguel",
	  lastName: "Gil",
	  sex: "Masculino",
	  age: 23,
	  job: "Programador"
	});

- Ahora la función recibe un único objeto, lo cual:

1. Hace más fácil agregar nuevos parámetros sin romper nada. Es decir, es más escalable.
2. Nos permite pasar los valores en cualquier orden, y que no rompa.
3. Mejora la claridad del código.
4. Nos protege con TypeScript contra errores de tipado.


> Aclaración importante: ¿Y si no pasamos ningún argumento?

- Como sabemos, si pasamos distintoas propiedades en el objeto pero nos faltó alguna, se va a tomar como undefined (o como el valor por defecto, como lo hace "age"). Pero... ¿Y si llamamos a la función y no le pasamos nada? Es decir:

	createPerson2(); // Error: Cannot destructure 'undefined'

- Para evitar este error, hacemos que el parámetro sea opcional asignando un objeto vacío como valor por defecto:

	function createPerson2({ name, lastName, sex, age = 18, job }: PersonConfig = {}) {
	  // ...
	}

- De esta forma, si llamamos a createPerson2() sin argumentos, no hay error. Esto pasa porque el objeto se desestructura igual, pero como viene vacío, todo será undefined (excepto "age" que ya tiene un valor por defecto). Y tampoco va a dar error de tipado porque { } es compatible con la interface PersonConfig, ya que todas las propiedades de esta interfaz son opcionales (porque tienen el "?").