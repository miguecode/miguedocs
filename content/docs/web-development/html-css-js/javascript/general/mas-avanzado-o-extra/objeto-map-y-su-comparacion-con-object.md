---
title: "Objeto Map y su comparación con Object"
description: "Map es un tipo de colección en JavaScript que almacena pares clave/valor, igual que un Object, pero con mejoras importantes en rendimiento, flexibilidad y contr..."
---


## Map

- Map es un tipo de colección en JavaScript que almacena pares clave/valor, igual que un Object, pero con mejoras importantes en rendimiento, flexibilidad y control.

- Como sabemos, desde la vista de las estructuras de datos, un objeto en JavaScript es como una Hash Table. Y lo que vamos a ver en este apunte, es que un Map también es como una Hash Table.


## ¿Cuándo usar Map?

- Cuando las claves no son solo strings (pueden ser objetos, funciones, etc)
- Cuando necesitamos mantener el orden de inserción
- Cuando trabajamos con mucha cantidad de datos y necesitamos eficiencia
- Cuando queremos tener un control más claro y métodos más específicos

- **Veamos un ejemplo**: 

```typescript
const mapa = new Map();

mapa.set('nombre', 'Leo');
mapa.set(123, 'Número');
mapa.set({ id: 1 }, 'Objeto');

console.log(mapa.get('nombre')); // Muestra Leo
console.log(mapa.size); // Muestra 3

mapa.forEach((valor, clave) => {
  console.log(clave, valor);
});
```
- Como vemos, creamos un Map llamado mapa, y le ponemos 3 propiedades. A diferencia de un objeto, las "keys" pueden ser de cualquier tipo, y no sólo strings. De hecho, en la tercer propiedad, la key es un objeto literal { id: 1 }. 

- También podemos ver el uso de métodos propios de Map como "set", "get", y la propiedad "size". Esto en los objetos no pasa, ya que no hay métodos dedicados a este tipo de manipulación. Otra diferencia es que pudimos hacer un forEach de forma más directa, cuando en los objetos tendríamos que usar Object.keys() o values().


- **Veamos esto en un objeto**: 

```typescript
const obj = {};

obj['nombre'] = 'Leo';
obj[123] = 'Número';       // El 123 se convierte en string automáticamente, es decir, en "123"
obj[{ id: 1 }] = 'Objeto'; // La clave se convierte en '[object Object]'

console.log(obj); // Problemas con claves complejas
```
### Métodos útiles de Map
.set(clave, valor)  →	Agrega o actualiza una entrada
.get(clave)	   →	Obtiene el valor asociado
values()	   	   →	Devuelve todos los values
.has(clave)	   →	Verifica si existe la clave
.delete(clave)	   →	Elimina una entrada
.clear()		   →	Borra todo el mapa

### Propiedad size
.size	  →	Devuelve la cantidad de elementos


## ¿Cuándo usar Object y cuándo Map?

### Usar Object cuando:
- Tenemos una estructura simple de clave/valor
- Vamos a usarlo como un "modelo" o una entidad con propiedades fijas

### Usar Map cuando:
- Necesitamos claves (keys) más complejas
- Buscamos más eficiencia
- Queremos iterar más fácilmente
- No queremos heredar cosas del prototipo