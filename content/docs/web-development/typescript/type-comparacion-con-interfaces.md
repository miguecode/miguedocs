---
title: "Type. Comparación con Interfaces"
---

> Type

- En TypeScript, "type" es una palabra reservada que nos va a servir para crear tipos customizados.

- Veamos un ejemplo. Esto es llamado Type aliases (alias de tipos).

	type ARG = string; // Esto es un alias de tipo

- Ahora, ARG es un TIPO, y su tipo es literalmente string. Es sólo un alias, es decir, otra forma de escribir string.


> Type combinado a Union type e Intersection type

- Como sabemos, Union e Intersection son formas de asignar múltiples tipos a una variable. Union se hace con " | " e Intersection con " & ". Esto se puede combinar con Type así:

	type AUTR = "auto" | true;    	     // Union Type (AUBI puede ser "auto" o true)
	type STNU = string | number;      // Union Type (AUBI puede ser string o number)

	let valor: AUTR = "arbol";      // Esto va a dar error, "arbol" no es "auto" ni true
	let valor2: STNU = "hola";     // Esto es válido, porque "true" es un string

- Entonces, como vemos, tanto AUTR como STNU están funcionando como si fuesen alias. Es decir, la variable "valor" va a tener como tipo un string o un booleano, y valor2 un string o un number.


> Combinándolo con Interfaces:

	interface Persona {
		nombre: string;
		nota: number;
	}
	
	interface Profesor {
		nombre: string;
		legajo: string;
	}

	type AlumnoOProfesor = Alumno | Profesor;

	const persona: AlumnoOProfesor = {
		nombre: "Juan";
		nota: 7
	}

- Hacer eso funciona 100%. Ya que, como vimos en el apunte anterior, "persona" tiene el -shape- que tiene Alumno. Entonces entra perfectamente en el type AlumnoUProfesor.

- Y a este punto, el Intellisense nos va a tomar a "persona" como si fuera de tipo Alumno. Y NO de AlumnoUProfesor, sino que de Alumno. Porque ya -infiere- que es de ese tipo. Eso es lógico, porque aumenta la precisión del tipo de la variable con la que trabajamos. Este proceso de -inferir- con más exactitud el tipo de una variable, se lo llama Narrowing (y está explicado en otro apunte, pero en realidad el concepto no es más que eso).

- Y ojo, a la hora de hacer un método como este:

	const metodoCualquiera = (persona: AlumnoOProfesor): void () => {
		persona.nombre;   // Esto SÍ lo reconoce, ya que "nombre" aparece en Alumno y en Profesor
		// persona.nota;    // Esto NO lo reconoce, se marcará el error
		// persona.legajo; // Esto NO lo reconoce, se marcará el error
	}

- Bien. Así funciona Union. Pero ahora vamos a ver la Intersection:

	type AlumnoYProfesor = Alumno & Profesor;

	const metodoCualquiera = (persona: AlumnoYProfesor) : void () => {
		persona.nombre;	// Esto SÍ lo reconoce. 
		persona.nota;		// Esto SÍ lo reconoce. 
		persona.legajo;	// Esto SÍ lo reconoce. 
	}

- Con el Type Intersection, se reconocen los campos aunque no estén en alguno de las dos interfaces. Esta diferencia respecto a Union es lógica: Con Union, "persona" puede ser Alumno O Profesor, entonces si tiene "nota", ya no puede ser Profesor. Entonces si no sabe qué es, simplemente reconoce a los elementos que estén tanto en Profesor como en Alumno. Porque esos son obvios que los tiene que tener. Pero "nota" y "legajo", no son obvios. Porque si es profesor, no tiene nota, y si es alumno, no tiene legajo.

- En cambio, con Intersection, "persona" ESTÁ OBLIGADO a tener todo. Es decir, tiene que tener "nombre", "nota", y "legajo", porque sino, persona no sería de tipo AlumnoYProfesor. O sea que "persona" sí o sí tiene alguno de esos elementos. Así que el IntelliSense reconoce todos.


> Comparación de "interface" con "type" 

- Las interfaces son ideales para ESTRUCTURAS DE OBJETOS, que posiblemente vayamos a extender en algún momento.

	interface User {
	  name: string;
	  age: number;
	}

- Características clave:
1. Está pensado para definir la forma de un objeto.
2. Se pude extender fácilmente (herencia con el "extends").
3. Soporta declaración incremental (podemos agregar propiedades desde otro archivo).
4. Se integra mejor con clases y blbliotecas como React o Angular.

	interface Employee extends User {
	  role: string;
	}

- Como vemos, es más semantico cuando definimos entidades (como User, Product, Post, etc.).


>> Los types, en cambio, son ideales para tipos más complejos o flexibles:

	type ID = string | number;
	type User = {
	  name: string;
	  age: number;
	};

- Características clave:
1. Permite uniones ( | ), intersecciones ( & ), y composición de tipos.
2. Podemos combinar objetos, primitivos, funciones y más.
3. Es más expresivo en tipos avanzados o utilitarios.

	type ApiResponse = User | Error;
	
	type Employee = User & { role: string };


> Entonces... ¿Cuándo usar cada uno?

Situación								Usar interface ✅	Usar type ✅
_______________________________________________________________________________________
Definir la forma de un objeto común			✔️	
Necesitamos extenderlo o heredar estructuras	✔️	
Trabajamos con clases						✔️	
_______________________________________________________________________________________
Unión o combinación de tipos									✔️
Tipar funciones complejas									✔️
Necesitamos tipos condicionales o utilitarios						✔️
Queremos flexibilidad total									✔️