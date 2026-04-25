---
title: "Arrays. Intro, métodos y Spread Operator [ ...]"
description: "Los arrays en JavaScript son un tipo de dato no primitivo. Eso quiere decir que apuntan a direcciones de memoria. Lo ideal, entonces, es declararlos con 'const'..."
---


## Arrays

- Los arrays en JavaScript son un tipo de dato no primitivo. Eso quiere decir que apuntan a direcciones de memoria. Lo ideal, entonces, es declararlos con "const" y no con "let". Además, hay que entender que dos variables distintas pueden apuntar al mismo array en memoria:

```typescript
const array1 = [1, 2, 3];
const array2 = array1;
```
- En este caso, tanto array1 como array2 apuntan a exactamente la misma referencia. Así que cualquier modificación que haga con array2, también se ve afectada en array1. Son lo mismo.

- A diferencia de otros lenguajes, en JavaScript los arrays pueden contener cualquier cosa. Es decir, puede tener un string, un booleano, un number, lo que sea. De eso se trata el tipado dinámico en JavaScript. Y por cierto, eso puede traer problemas. Spoiler: por eso es que se creó TypeScript.

- Como sabemos la diferencia entre CONST y LET, usamos const para almacenar direcciones de memoria. Por lo tanto, para declarar un array siempre tenemos que usar const. Es decir, por más que también podríamos usar let, pero no sería lo ideal.

- Que el array sea const no significa que no podamos modificarlo ya sea agregando, eliminando o justamente modificando elementos. Lo podemos hacer. Lo que no podemos es cambiarle la dirección de memoria, es decir, el array que declaramos con const SIEMPRE va a apuntar a la misma dirección de memoria, eso no lo podemos cambiar. (Y así con cualquier variable const).

- Algo que tenemos que entender, entonces, es que 


## Formas de declarar arrays

- Usando "new" (forma poco usada)

```typescript
const vec = new Array();  // Crea un array vacío
const vec2 = new Array(23, 4, 7, 8);  // Crea un array con 4 elementos
```
- Usando corchetes [ ] (array literal) (forma más usada)

```typescript
const vec3 = [];  // Crea un array vacío
const vec4 = [23, 4, 7, 8];  // Crea un array con 4 elementos
```
- El resultado es exactamente el mismo. A estas alturas, ya nadie usa la primer forma de declarar, es decir, usando el "new Array()". Es más rápido de escribir "const lista = [1, 2, 3, 4];" y es literalmente lo mismo.



## Funciones propias de Arrays

- Como sabemos, Array es un Object Wrapper. Es decir, un objeto/función constructora/clase. Y como todo objeto en JavaScript, puede tener métodos y propiedades. Estos métodos se almacenan en el prototipo del objeto, es decir: Array.prototype. Cuando creamos un array, JavaScript hace que momentáneamente ese array se convierta en una instancia de Array, para poder tener acceso a estos métodos.

- **Vamos a ver los métodos más comunes**: push, pop, shift, unshift, concat, map, filter, reduce y splite.


```text
array.push();	 // Agrega elementos al final del array y devuelve el length del array
array.pop();  	 // Devuelve el último elemento y lo elimina
array.shift(); 	 // Devuelve el primer elemento y lo elimina
array.unshift(); 	 // Agrega elementos al inicio del array y devuelve el lenght del array
array.concat(); 	 // Devuelve una copia del array (como lo hace el spread operator [ ...] o el addRange)
```
- Otros métodos como Map, Filter, Reduce y Splice también son útiles, pero van a estar en otro apunte.


## Método push

```typescript
const vec = [23, 4, 7, 8]; 
vec.push(20);	// Agregamos el elemento 20 al final del array
console.log(vec);	// Muestra: [23, 4, 7, 8, 20]

let tamaño = vec.push(77, 33);	  // Agregamos 77 y 33 al array, y guardamos el tamaño del array (7)
```
## Método pop

```typescript
let elementoEliminado = vec.pop();  // Eliminamos el último elemento del array y lo guardamos
console.log(elementoEliminado);  // Muestra 77 (el que era el último elemento del array)
```
- No es obligatorio guardar el elemento que eliminamos, es opcional.


## Método shift

```typescript
let elementoEliminado2 = vec.shift();  // Eliminamos el primer elemento del array y lo guardamos
console.log(elementoEliminado2);  // Muestra 23 (el que era el primer elemento del array)
```
- No es obligatorio guardar el elemento que eliminamos, es opcional.


## Método unshift

```typescript
const vec = [1, 2, 3, 4]; 
vec.unshift(0);	// Agregamos el elemento 0 al principio del array
console.log(vec);	// Muestra: [0, 1, 2, 3, 4]

let tamaño = vec.push("-2", "-1");	// Agregamos -2 y -1, y guardamos el tamaño del array (7)
```
## Método concat

```typescript
const vec = [34, 20, 25];
const vec2 = vec.concat();
```
- Concat sirve para literalmente copiar el contenido de un array en otro. Funciona igual que el spread operator (operador de propagación). En este caso, vec2 pasó a tener los mismos elementos que vec. Pero no apuntan a la misma dirección de memoria, obviamente.



## Spread Operator (Operador de Propagación)

- Una forma moderna de copiar un array en JS es usando el Operador de Propagación, así:

```typescript
const vec1 = [1, 2, 3, 4, 5];
const vec2 = [...vec1];
```
- En este caso, lo que hicimos es copiar lo que contiene el array vec1 y pegarlo EN OTRO ARRAY DISTINTO. Es decir,  cuando creamos vec2, estamos asignándole otra dirección de memoria distinta, que en este caso, va a ser un array que contiene los mismos valores que vec1.

- Son dos variables distintas, y cada una apunta a un array distinto (a pesar de que los dos contengan los mismos valores o elementos).

- La sintaxis de [...array] se puede entender como romper y volcar un huevo. Estamos agarrando un array con todos sus elementos, y se los volcamos adentro a otro array distinto.

```typescript
const vec1 = [1, 2, 3];
const vec2 = [4, 5, 6];

const vec3 = [...vec1, ...vec2];
```
- En este caso, vec3 va a ser un array que contiene todos los elementos de vec1, y todos los de vec2. Y así como lo hicimos volcando 2 arrays, podemos volcar todos los que queramos.


### Ejemplo usando concat y spread operator

```typescript
const original = [1, 2, 3];
const copia1 = original.concat(); // Copia usando concat()
const copia2 = [...original]; // Copia usando spread operator

copia1.push(4);
copia2.push(5);

console.log(original); // [1, 2, 3] (no se modificó)
console.log(copia1); // [1, 2, 3, 4]
console.log(copia2); // [1, 2, 3, 5]
```
- Ahora, veamos un detalle extra sobre el spread operator:

- Si el array es multidimensional, el operador no copia las referencias internas, sino que solo copia la primera capa. Esto significa que si hay un array dentro de otro array, ese sub-array seguirá compartiéndose.

```typescript
const original = [[1, 2], [3, 4]];
const copia = [...original];

copia[0][0] = 99;

console.log(original[0][0]); // Muestra 99
```
- Como vemos, copia[0][0] se modificó, y también afectó a original[0][0]. Eso es porque el array interno sigue siendo compartido. Para evitar esto y realizar una copia profunda de arrays anidados, hay que usar structuredClone() o JSON.parse(JSON.stringify(array)).


## El método StructuredClone()

- Este método crea una copia profunda real, evitando que los cambios en la copia afecten al original. Es lo mismo que hace concat.

```typescript
const original = [[1, 2], [3, 4]];
const copiaShallow = [...original]; // Copia superficial
const copiaDeep = structuredClone(original); // Copia profunda

copiaShallow[0][0] = 99;
console.log(original[0][0]); // Muestra 99 (se modificó el original)

copiaDeep[0][0] = 77;
console.log(original[0][0]); // Muestra 99 (no se modificó por el deep clone)
console.log(copiaDeep[0][0]); //  Muestra 77
```