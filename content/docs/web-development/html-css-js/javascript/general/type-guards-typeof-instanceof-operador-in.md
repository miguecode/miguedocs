---
title: "Type Guards (typeof, instanceof, operador in)"
---

> Type Guards

- Los Type Guards (guardianes de tipo) son expresiones o funciones JavaScript que le permiten a JavaScript identificar el tipo de una variable en tiempo de ejecución, dentro de un contexto. Básicamente, son herramientas que permiten hacer Narrowing (especificar el tipo mediante lógica programática).

- Este concepto es más útil en TypeScript, ya que tiene más seguridad de tipos, pero no importa. Esto es 

- Hay 4 tipos de Type Guards, "typeof", "instanceof", "in", y personalizados (funciones).


1. Typeof Guard (para tipos primitivos)

	function procesar(valor: string | number) {
	  if (typeof valor === "string") {
	    valor.toUpperCase(); // string
	  } else {
	    valor.toFixed(2); // number
	  }
	}

- El typeof en JavaScript sirve únicamente para evaluar valores en tiempo de ejecución. En TypeScript, además de eso, también se usa en tiempo de compilación para crear tipos.

- Recordemos que para funciones el valor que devuelve es "function", y para null devuelve "object" (aunque eso es un bug de JavaScript que se decidió no corregir).


2. Instanceof Guard (para instancias de clases)

	class Perro {
	  ladrar() {}
	}
	
	class Gato {
	  maullar() {}
	}
	
	function hacerSonido(animal: Perro | Gato) {
	  if (animal instanceof Perro) {
	    animal.ladrar(); // "animal" es intancia de Perro
	  } else {
	    animal.maullar(); // "animal" es intancia de Gato
	  }
	}

- Esto funciona sólo con clases, y no con interfaces. Básicamente sirve para validar si un objeto es o no es la instancia de una clase.


3. Chequeo de propiedad (el operador in)

	const empleado = { nombre: string; salario: number };
	const cliente = { nombre: string; compras: number };
	
	function mostrarInfo(persona) {
	  if ("salario" in persona) {
	    console.log(persona.salario);
	  } else {
	    console.log(persona.compras);
	  }
	}

- Esto es útil para cuando trabajamos con objetos literales, es decir, que no son instancias de clases. Básicamente devuelve true o false dependiendo de si el objeto contiene o no a la propiedad que le especificamos.


4. Type Guards personalizados (son funciones propias)

- Nosotros podemos crear nuestros propios "guardias de tipo" usando funciones:

	const admin = { tipo: "admin"; permisos: string[] };
	const usuario = { tipo: "usuario"; nombre: string };
	
	function esAdmin(persona): persona is admin {
	  return persona.tipo === "admin";
	}
	
	function saludar(persona) {
	  if (esAdmin(persona)) {
	    console.log("Permisos:", persona.permisos);
	  } else {
	    console.log("Hola", persona.nombre);
	  }
	}

- En este caso, la clave está en el "persona is Admin", que le dice a JavaScript: “si esta función devuelve true, entonces persona es un Admin”.