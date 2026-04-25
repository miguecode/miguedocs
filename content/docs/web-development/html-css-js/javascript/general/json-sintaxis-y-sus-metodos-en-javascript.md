---
title: "JSON. Sintaxis y sus métodos en JavaScript"
description: "JSON - JavaScript Object Notation (notación de objetos de JavaScript)"
---


## JSON - JavaScript Object Notation (notación de objetos de JavaScript)

- JSON es un lenguaje intermediario que podemos usar mayormente en el desarrollo web para intercomunicar API's entre sí, o distintas partes de nuestra aplicación (Frontend - Backend) (Cliente - Servidor), por más que estén hechos en lenguajes de programación distintos.

- JSON es nativo de JavaScript y representa la información en formato de texto, es decir, en string's.

- JSON se basa en el concepto "clave-valor", donde, para cada clave, va a existir un valor asociado. Las claves van del lado izquierdo y los valores del lado derecho. Se separan con ' : '.


## Ejemplos de JSON

{
```text
"nombre": "Cristiano",
"apellido": "Ronaldo",
"edad": 36 // Los valores numéricos no van entre comillas
```
}

- Un conjunto de claves y valores como el que acabamos de ver, conforman lo que es un OBJETO, que en JSON se representa mediante la apertura y cierre de llaves { }.

## Clave donde su valor es un conjunto de clave-valor

{
```text
"nombre": "Cristiano",
"apellido": "Ronaldo",
"edad": 36, // Los valores numéricos no van entre comillas
"equipos": [
 	"Sporting Club",
 	"Manchester United",
  	"Real Madrid",
  	"Juventus"
  ],
```
}

- La clave "equipos" tiene un valor que se leería como un array en JavaScript. En otros lenguajes se podría leer como una colección. Depende de con qué consumamos estos datos.


## Ahora, supongamos que queremos que nuestro JSON tenga más de, por ejemplo, un jugador. Es decir, más de un conjunto de clave-valor. O dicho también, más de un objeto.

- Para esto, tenemos que encerrar todo entre corchetes [ ]. Es decir, creamos un array de objetos.

[
```typescript
{
	"nombre": "Cristiano",
	"apellido": "Ronaldo",
	"edad": 36, // Los valores numéricos no van entre comillas
	"equipos": [
		"Sporting Club",
	 	"Manchester United",
	  	"Real Madrid",
	  	"Juventus"
  	],
},
{
	"nombre": "Lionel",
	"apellido": "Messi",
	"edad": 34, // Los valores numéricos no van entre comillas
	"equipos": [
		 "FC Barcelona",
	 	"Paris Saint-Germain",
	  	"Inter Miami FC"
  	],
},
```
]

- Dentro de estos corchetes [ ], yo voy a colocar cada objeto. O sea, cada conjunto de clave-valor (key-value), los cuales, van entre llaves { }.

- Sintaxis de un objeto (conjunto de clave-valor)
{ "key": "value", "key": "value", "key": "value" }

- Sintaxis de un conjunto de objetos (conjunto de conjuntos clave-valor)
[ { }, { }, { }, { }, { } ]

- Sintaxis de un conjunto de objetos donde un objeto tiene dentro un conjunto de objetos
[ { "key": "value", "key": [ "key": "value", "key": "value" ], "key": "value" }, {  }, {  }, {  } ]

- Como vemos, en ambos casos, sus elementos se separan por comas " , ".



## Funciones de JavaScript para trabajar con JSON

- Todos los lenguajes de programación tienen funciones que nos permiten convertir un objeto en memoria en una cadena (string), y una cadena en un objeto (es decir, viceversa). Vamos a ver cómo funcionan las funciones para hacer esto en JavaScript.


## JSON.stringify - Pasar un objeto en memoria a string en formato JSON

```typescript
const miObjeto = { nombre: "Miguel", edad: 23 };
const objetoString = JSON.stringify(miObjeto); // objetoString va a ser de tipo string
```
- Esta función nos permite generar un string en formato JSON, basándonos en un objeto en memoria. A esto también se lo llama "cadenalizar", es decir, "convertir a cadena de caracteres".

- Es parecido a hacer un toString de algo, pero en este caso, para representar objetos.


## JSON.parse - Pasar un string en formato JSON a objeto en memoria

```typescript
const otroObjeto = JSON.parse(objetoString);  // otroObjeto va a ser de tipo objeto
```
- Est afunción nos permite hacer lo contrario al stringify. Le vamos a pasar un string en formato JSON, para que nos devuelva su versión en objeto en memoria.

- Lo que recibe parse es un string JSON, y devuelve el Object de ese string que le pasamos.


## Resumen

```typescript
const persona = {
	nombre: "Miguel",
	edad: 23,
	habilidades: ["JavaScript", "TypeScript", "Angular"]
};

// Convertimos el objeto a JSON (string)
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// Output: '{"nombre":"Miguel","edad":23,"habilidades":["JavaScript","TypeScript","Angular"]}'

// Convertimos el JSON (string) de vuelta a un objeto
const personaObjeto = JSON.parse(personaJSON);
console.log(personaObjeto);
// Output: { nombre: 'Miguel', edad: 23, habilidades: [ 'JavaScript', 'TypeScript', 'Angular' ] }
```