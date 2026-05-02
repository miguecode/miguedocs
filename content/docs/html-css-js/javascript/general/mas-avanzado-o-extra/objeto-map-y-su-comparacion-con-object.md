---
title: "Objeto Map y su comparación con Object"
description: "Map es una colección en JavaScript que almacena pares clave/valor, ofreciendo mejoras en rendimiento y flexibilidad comparado con los objetos tradicionales."
---


## Map

Un **Map** es un tipo de colección en JavaScript que almacena pares clave/valor. Aunque conceptualmente es similar a un objeto (ambos actúan como una tabla hash), el `Map` ofrece mejoras importantes en rendimiento, flexibilidad y control.

### ¿Cuándo usar Map?

*   Cuando las **claves** no son solo strings (pueden ser números, objetos, funciones, etc.).
*   Cuando necesitamos mantener el **orden de inserción** de los elementos.
*   Cuando trabajamos con **volúmenes de datos grandes** y necesitamos eficiencia en operaciones de inserción y borrado.
*   Cuando queremos iterar directamente sin recurrir a métodos estáticos de `Object`.

### Ejemplo práctico

```javascript
const mapa = new Map();

mapa.set('nombre', 'Leo');
mapa.set(123, 'Número');
mapa.set({ id: 1 }, 'Objeto'); // Clave compleja

console.log(mapa.get('nombre')); // "Leo"
console.log(mapa.size);          // 3

mapa.forEach((valor, clave) => {
  console.log(clave, valor);
});
```

A diferencia de un objeto literal, el `Map` nos permite usar cualquier tipo de dato como clave. En un objeto, todas las claves se convierten automáticamente a strings o símbolos.

**Ejemplo del problema con objetos tradicionales:**

```javascript
const obj = {};

obj['nombre'] = 'Leo';
obj[123] = 'Número';       // El 123 se convierte en string "123"
obj[{ id: 1 }] = 'Objeto'; // La clave se convierte en "[object Object]"

console.log(obj); // Las claves colisionarán si usamos múltiples objetos como llaves
```

## Métodos y Propiedades Útiles

| Elemento | Tipo | Descripción |
| :--- | :--- | :--- |
| **`.set(clave, valor)`** | Método | Agrega o actualiza una entrada. |
| **`.get(clave)`** | Método | Obtiene el valor asociado a la clave. |
| **`.has(clave)`** | Método | Verifica si existe la clave en el mapa. |
| **`.delete(clave)`** | Método | Elimina una entrada específica. |
| **`.clear()`** | Método | Borra todo el contenido del mapa. |
| **`.values()`** | Método | Devuelve un iterador con todos los valores. |
| **`.size`** | Propiedad | Devuelve la cantidad de elementos actuales. |

## Comparativa: Object vs. Map

### Usar Object cuando:
*   La estructura de datos es simple y las claves son strings fijos.
*   Necesitamos serializar los datos a JSON directamente.
*   Trabajamos con "modelos" o entidades de negocio donde las propiedades están bien definidas.

### Usar Map cuando:
*   Necesitamos **claves dinámicas** o de tipos no-string.
*   Buscamos mayor **eficiencia** en operaciones frecuentes de adición/borrado.
*   Iteramos habitualmente sobre la colección (Map es iterable nativamente).
*   Queremos evitar colisiones con propiedades heredadas del prototipo de `Object`.