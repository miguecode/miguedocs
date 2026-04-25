---
title: "Métodos (Includes, IndexOf, Reverse, Flat, FlatMap, GroupBy, y otros)"
description: "Vamos a ver otros métodos de los arrays:"
---


## Vamos a ver otros métodos de los arrays:

- includes()		// Recibe el valor a buscar y devuelve true o false, dependiendo de si lo encuentra o no
- indexOf(valor);	// Recibe el valor a buscar y devuelve su índice o -1 si no lo encuentra
- reverse();		// Revierte el orden de los elementos del array
- flat(profundidad);	// Aplana los arrays anidados a un array, el nivel por defecto a aplanar es 1
- flatMap(callback);	// Es lo mismo que el método map(), pero además hace un flat de nivel 1
- groupBy			// Agrupa elementos de un array en un objeto { }, según el criterio que definamos
- groupByToMap	// Hace lo mismo que groupBy, pero en vez de devolver un objeto { }, devuelve un Map
- at(indice)		// Accede a un elemento por su índice, el cual también puede ser un número negativo

## includes

```typescript
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(8)); // Muestra false
```
- Includes recibe un valor, y lo busca en el array. Si lo encuentra, devuelve TRUE, y sino, devuelve FALSE.


## indexOf

```text
vec.indexOf("Pez");
```
- indexOf es un método que recibe el valor que debe buscar, y devuelve su índice. Si no lo encuentra, devuelve -1. Además, puede recibir un segundo parámetro opcional, el cual va a ser el índice desde el cual tiene que empezar a buscar. Si no lo indicamos, simplemente va a buscar desde el índice 0 (el primero).


## reverse

```text
vecInvertido = vec.reverse();
```
- Reverse es un método que invierte el orden de los elementos del array. Sin más. Con el tiempo, apareció un nuevo método llamado toReversed(), que hace exactamente lo mismo que reverse(), pero sin modificar al array original. Es decir, crea un nuevo array en reversa y lo devuelve.


## flat

```text
vec = [1, 2, 3, 4, [5, 6, 7]];
vec.flat();
console.log(vec);	// Muestra [1, 2, 3, 4, 5, 6, 7]
```
- Flat lo que hace es APLANAR el array vec, es decir, si algún elemento de vec es un array, hace que DEJE de ser un array, y que sus elementos estén dentro de vec. 

- Flat puede recibir un parámetro que por defecto es 1: flat(profundidad). La profundidad hace referencia a la cantidad de niveles que va a aplanar. Como por defecto es 1, cada vez que encuentre un array dentro del array original, lo aplana. Pero si ese array que va a aplanar tiene otro array dentro... es decir: [ x, x, [y, [z, z]] ] no lo va a aplanar. Es decir, el array [z, z] va a seguir así, sin aplanarse. 

- Así que lo que podemos hacer para que también aplane ese, es pasarle un 2, así: flat(2). Entonces, un truco podría ser ponerle un número muy alto a flat, para que aplane todo lo que encuentre dentro. Pero es un poco feo hacer eso, es mejor poner Infinity o usar un número más adecuado.

```text
vec.flat(Infinity); // Ideal si queremos pasar un número grande de profundidad
```
## flatMap
- El método latMap(), es una combinación de .map() y .flat(1). Entonces, primero transforma cada elemento con una función, y después aplana el array en 1 nivel:

```typescript
const vec = [1, 2, 3];
const resultado = vec.flatMap(x => [x, x * 2]);
console.log(resultado); // Muestra [1, 2, 2, 4, 3, 6]
```
- Si el método fuese solo map, el resultado sería [[1, 2], [2, 4], [3, 6]]. Pero como es flatMap, aplana en un nivel a cada array anidado. No es más que eso.


## groupBy

- El método groupBy() agrupa elementos de un array en un objeto literal { }, según el criterio que definamos.

```typescript
const resultado = Array.prototype.groupBy.call(array, callback);
```
- Podemos usar esa sintaxis más global, pero lo común es que hagamos lo siguiente:

```typescript
const productos = [
  { nombre: 'manzana', tipo: 'fruta' },
  { nombre: 'zanahoria', tipo: 'verdura' },
  { nombre: 'banana', tipo: 'fruta' },
];

const agrupado = productos.groupBy(p => p.tipo);
console.log(agrupado);
```
- En este caso, la variable agrupado va a ser un objeto así:

```typescript
{
  fruta: [
    { nombre: 'manzana', tipo: 'fruta' },
    { nombre: 'banana', tipo: 'fruta' }
  ],
  verdura: [
    { nombre: 'zanahoria', tipo: 'verdura' }
  ]
}
```
- Como vemos, es un objeto donde cada clave representa una categoría, y su valor es un array con los elementos que cumplen con ese criterio.


## groupByToMap

- Hace exactamente lo mismo que groupBy(), pero en vez de devolver un objeto { }, devuelve un objeto Map. Que, como sabemos, un Map es algo similar a un objeto pero con otros métodos de manipulación. Hay un apunte sobre ello.

```typescript
const resultado = Array.prototype.groupByToMap.call(array, callback);
```
- Podemos usar esa sintaxis más global, pero lo común es que hagamos lo siguiente:

```typescript
const productos = [
  { nombre: 'manzana', tipo: 'fruta' },
  { nombre: 'zanahoria', tipo: 'verdura' },
  { nombre: 'banana', tipo: 'fruta' },
];

const agrupadoMap = productos.groupByToMap(p => p.tipo);
console.log(agrupadoMap);
```
- En este caso, la variable agrupadoMap va a ser un objeto Map así:

```typescript
Map(2) {
  'fruta' => [ { nombre: 'manzana', tipo: 'fruta' },  { nombre: 'banana', tipo: 'fruta' }],
  'verdura' => [ { nombre: 'zanahoria', tipo: 'verdura' } ]
}
```
- También podríamos usar el método "get" de los Map, para obtener algún elemento:
```text
console.log(agrupadoMap.get('fruta'));  // Devuelve el array [ ], que va a contener cada producto tipo fruta
```
## at

- El método at() es un método de arrays -y también de strings-, el cual te devuelve algún elemento del array o string, dependiendo del índice que le pases.

- Uno podría decir ¿Y para qué? si ya podemos hacer eso usando [] así:
```text
array = ["Hola", "Chau", "Perro", "Agua"];
console.log(array[2]);  // Muestra "Perro"
```
- Eso está perfecto, y está bien usarlo así. Y si bien el at() hace lo mismo, este último lo que hace es que le podés pasar un índice negativo también. Entonces, podes pasarle un -1 y se refiere al último elemento del array. Entonces, si justo querés el último elemento, es más rápido el pensamiento de "bueno, pongo el -1 y listo".

```typescript
const letras = ['a', 'b', 'c', 'd', 'e'];

console.log(letras.at(0));   // 'a'  -> primer elemento
console.log(letras.at(2));   // 'c'  -> índice 2
console.log(letras.at(-1));  // 'e'  -> último elemento
console.log(letras.at(-2));  // 'd'  -> penúltimo elemento
console.log(letras.at(100)); // undefined
```
- Si quisiéramos hacer lo del "-1" del at(), sin usar at(), tendríamos que hacer:

```text
console.log(letras[letras.length - 1]);
```
- Y si bien es lo mismo, es un poco más rebuscado, y por eso es más limpio letras.at(-1).