---
title: "JSON. Sintaxis y sus métodos en JavaScript"
description: "JSON - JavaScript Object Notation (notación de objetos de JavaScript)"
---

## JSON - JavaScript Object Notation

JSON es un lenguaje intermediario que podemos usar mayormente en el desarrollo web para intercomunicar APIs entre sí, o distintas partes de nuestra aplicación (Frontend - Backend, Cliente - Servidor), por más que estén hechos en lenguajes de programación distintos.

JSON es nativo de JavaScript y representa la información en formato de texto, es decir, en strings. Se basa en el concepto **"clave-valor"**, donde para cada clave va a existir un valor asociado. Las claves van del lado izquierdo y los valores del lado derecho, separados por dos puntos `:`.

## Ejemplos de JSON

```json
{
  "nombre": "Cristiano",
  "apellido": "Ronaldo",
  "edad": 36
}
```

Los valores numéricos no van entre comillas. Un conjunto de claves y valores como el que acabamos de ver conforma lo que es un **OBJETO**, que en JSON se representa mediante la apertura y cierre de llaves `{ }`.

### Claves con valores complejos

```json
{
  "nombre": "Cristiano",
  "apellido": "Ronaldo",
  "edad": 36,
  "equipos": [
    "Sporting Club",
    "Manchester United",
    "Real Madrid",
    "Juventus"
  ]
}
```

La clave "equipos" tiene un valor que se leería como un array en JavaScript. En otros lenguajes se podría leer como una colección. Depende de con qué consumamos estos datos.

### Array de objetos

Si queremos que nuestro JSON tenga más de un registro (por ejemplo, varios jugadores), tenemos que encerrar todo entre corchetes `[ ]`. Es decir, creamos un array de objetos:

```json
[
  {
    "nombre": "Cristiano",
    "apellido": "Ronaldo",
    "edad": 36,
    "equipos": [
      "Sporting Club",
      "Manchester United",
      "Real Madrid",
      "Juventus"
    ]
  },
  {
    "nombre": "Lionel",
    "apellido": "Messi",
    "edad": 34,
    "equipos": [
      "FC Barcelona",
      "Paris Saint-Germain",
      "Inter Miami FC"
    ]
  }
]
```

Dentro de estos corchetes `[ ]`, colocamos cada objeto entre llaves `{ }`, separados por comas `,`.

## Funciones de JavaScript para trabajar con JSON

Todos los lenguajes de programación tienen funciones que nos permiten convertir un objeto en memoria en una cadena (string), y viceversa. Veamos cómo funcionan en JavaScript.

### JSON.stringify

Pasa un objeto en memoria a un string en formato JSON.

```javascript
const miObjeto = { nombre: "Miguel", edad: 23 };
const objetoString = JSON.stringify(miObjeto); 
// objetoString va a ser de tipo string: '{"nombre":"Miguel","edad":23}'
```

Esta función nos permite generar un string en formato JSON basándonos en un objeto en memoria. A esto también se lo llama **seralizar** o "convertir a cadena de caracteres".

### JSON.parse

Pasa un string en formato JSON a un objeto en memoria.

```javascript
const otroObjeto = JSON.parse(objetoString);
// otroObjeto va a ser de tipo objeto: { nombre: "Miguel", edad: 23 }
```

Esta función nos permite hacer lo contrario al `stringify`. Recibe un string JSON y devuelve el `Object` correspondiente.

## Resumen de uso

```javascript
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