---
title: "Null, Undefined y NaN"
description: "En JavaScript, existen varios valores que representan la ausencia o invalidez de un dato. Entre ellos, los más comunes son null, undefined y NaN."
---

En JavaScript, existen varios valores que representan la ausencia o invalidez de un dato. Entre ellos, los más comunes son `null`, `undefined` y `NaN`.

Tanto `null` como `undefined` son tipos de dato primitivos, pero `NaN` no es un tipo de dato por sí solo; simplemente es un valor especial dentro del tipo `Number`.

## Undefined

`Undefined` significa "no definido" y es el valor que JavaScript asigna automáticamente a una variable cuando **no se le ha dado un valor**. También se obtiene `undefined` cuando se intenta acceder a una propiedad que no existe.

```javascript
let x;
console.log(x); // Muestra undefined (la variable no tiene valor)

function saludar() {}
console.log(saludar()); // Muestra undefined (una función sin return devuelve undefined)

let obj = {};
console.log(obj.nombre); // Muestra undefined (la propiedad no existe)
```

El valor `undefined` aparece en los siguientes casos:
*   Cuando una variable se declara pero no se inicializa.
*   Cuando una función no retorna nada explícitamente.
*   Cuando intentamos acceder a una propiedad o índice que no existe en un objeto o array.

## Null

`Null` significa **"ausencia intencionada de valor"**. Es un valor que el programador asigna explícitamente para indicar que "acá no hay nada". Representa la no dirección de memoria (`00000000`).

```javascript
let usuario = null; // Significa que el usuario no existe o no ha sido asignado
console.log(usuario); // Muestra null
```

Una curiosidad respecto a `null` que hay que entender es que `null` NO es un objeto, pero si hacemos `console.log(typeof null)` nos va a decir `"object"`. Esto es un error muy antiguo de JavaScript que se decidió no corregir para no romper millones de sitios web antiguos que dependen de ese comportamiento.

### Diferencia entre null y undefined

```javascript
let sinDefinir;     // Es undefined (no tiene valor asignado)
let vacio = null;   // Es null (se le asignó intencionalmente el valor "vacío")

console.log(sinDefinir === vacio); // false (son tipos distintos)
console.log(sinDefinir == vacio);  // true  (la comparación laxa los considera similares)
```

## NaN (Not a Number)

`NaN` significa "No es un número" y aparece cuando intentamos realizar una operación matemática con un dato inválido. No es un tipo de dato, sino un valor especial de `Number`.

```javascript
console.log("Hola" * 2);      // NaN (no se puede multiplicar un string por un número)
console.log(parseInt("JS")); // NaN (no se puede convertir "JS" a número)
console.log(0 / 0);          // NaN (indeterminación matemática)
```

El valor `NaN` aparece cuando:
*   Intentamos hacer operaciones matemáticas con datos no numéricos.
*   Convertimos un string a número y el string no contiene números válidos.
*   Hay operaciones matemáticas indefinidas como `0 / 0`.

## ¿Cómo verificarlos?

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (error histórico)
console.log(typeof NaN);       // "number" (valor especial de Number)

console.log(Number.isNaN(NaN)); // true (forma correcta de detectar NaN)
console.log(null === undefined); // false (son valores distintos)
console.log(null == undefined);  // true (comparación laxa los trata como similares)
```