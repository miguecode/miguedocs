---
title: "JSON (JavaScript Object Notation)"
description: "JSON - JavaScript Object Notation (notación de objetos de JavaScript)"
---


## JSON - JavaScript Object Notation (notación de objetos de JavaScript)

- JSON es un lenguaje intermediario que podemos usar mayormente en el desarrollo web para intercomunicar API's entre sí, o distintas partes de nuestra aplicación (Frontend - Backend) (Cliente - Servidor), por más que estén hechos en lenguajes de programación distintos.

- JSON es nativo de JavaScript y representa la información en formato de texto, es decir, en string's.

- JSON se basa en el concepto "clave-valor", donde, para cada clave, va a existir un valor asociado. Las claves van del lado izquierdo y los valores del lado derecho. Se separan con ' : '.


## Ejemplos de JSON

{
```json
"nombre": "Cristiano",
"apellido": "Ronaldo",
"edad": 36 // Los valores numéricos no van entre comillas
```
}

- Un conjunto de claves y valores como el que acabamos de ver, conforman lo que es un OBJETO, que en JSON se representa mediante la apertura y cierre de llaves { }.

## Clave donde su valor es un conjunto de clave-valor

{
```json
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
```json
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
