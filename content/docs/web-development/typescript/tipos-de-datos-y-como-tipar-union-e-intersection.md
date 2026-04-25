---
title: "Tipos de datos y cómo tipar. Union e Intersection"
description: "Como sabemos, en JavaScript tenemos 10 tipos los cuales se dividen en primitivos y no primitivos. Los primitivos son: String, Number, Boolean, Null, Undefined, ..."
---


## Tipos de Datos

- Como sabemos, en JavaScript tenemos 10 tipos los cuales se dividen en primitivos y no primitivos. Los primitivos son: String, Number, Boolean, Null, Undefined, BigInt y Symbol. Y los no primitivos, son Object, Function y Array.

- TypeScript extiende esta lista agregando tipos más específicos. Los podemos dividir en tipos primitivos, complejos, especiales y avanzados:


### Tipos primitivos (Los mismos de JavaScript)
- string → Cadenas de texto.
- number → Números (enteros y decimales).
- boolean → Valores true o false.
- undefined → Variable declarada pero sin valor.
- null → Valor nulo explícito.
- bigint → Números enteros grandes (se escriben con n al final. ej: 9007199254740991n).
- symbol → Identificadores únicos.

### Tipos complejos (Los que en JavaScript serían "no primitivos")
- object → Objetos en general. (Ya estaba en JS).
- array`<T>` / T[] → Arrays de un tipo específico (number[] o Array`<number>`). (Ya estaba en JS).
- function → Funciones en general. (Ya estaba en JS).
- tuple → Tuplas (son arrays con un número fijo de elementos y tipos definidos). (No estaba en JS).

### Tipos especiales
- any → Literalmente significa "cualquier tipo" (evitar su uso si es posible).
- unknown → Similar a any, pero es más seguro porque requiere verificación de tipo antes de usar.
- never → Funciones que nunca devuelven un valor (throw o loops infinitos).
- **void → Funciones sin retorno (function log()**: void { console.log("Hola") }).

### Tipos avanzados
- enum → Enumerados (enum Color { Rojo, Verde, Azul }).
- **union ( | ) → Permite varios tipos (let variable**: string | number;).
- intersection ( & ) → Combina varios tipos (type A & type B).
- **literal → Valores específicos (let color**: "rojo" | "azul").
- type → Tipos personalizados (type Persona = { nombre: string; edad: number }).
- interface → Definir estructuras de objetos (interface User { id: number; name: string }).
- **readonly → Propiedades inmutables (readonly name**: string).
- record`<K, V>` → Objeto con claves y valores de tipos definidos (Record`<string, number>`).
- mapped types → Tipos dinámicos (type Optional`<T>` = { [K in keyof T]?: T[K] }).
- **conditional types (T extends U ? X**: Y) → Tipos condicionales.
- keyof → Extrae las claves de un objeto (keyof Persona).
- typeof → Usa el tipo de otra variable (typeof otraVariable).


## ¿Cómo y cuándo hay que tipar valores?

- Al declarar variables (si es muy obvio, se puede evitar)

```typescript
let nombre: string = "Juan";
let edad: number = 25;
let esActivo: boolean = true;
```
- **En una función**: 

```typescript
function saludar(nombre: string, edad: number): string {
	return `Hola, ${nombre}. Tienes ${edad} años.`;
}
```
- En ese caso, la función saludar recibe "nombre" y "edad". El primero tiene que ser un string, y el segundo un number. Además, la función tiene que retornar un string, tal y como especificamos en su declaración.

- **En objetos**: 

```typescript
let usuario: { nombre: string; edad: number } = {
	nombre: "Carlos",
	edad: 30
};
```
- **En interfaces y en types**: 

```typescript
interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = { nombre: "María", edad: 28 };

type Producto = { nombre: string; precio: number };
let producto: Producto = { nombre: "Laptop", precio: 1500 };
```
### Inferencia de tipos (Type Inference)

- Como dijimos al principio en la sección anterior, si el dato es muy obvio, podemos ahorrarnos tipar. ¿Por qué? Porque en TypeScript existe la inferencia de tipos, es decir, TS deduce de qué tipo tiene que ser algo que no tiene su tipo especificado, veamos:

| let mensaje = "Hola"; | // TS infiere que "mensaje" es de tipo string |
| --- | --- |
| let mensaje = "Hola"; | // TS infiere que "mensaje" es de tipo string |

```typescript
function doble(valor) {
    return valor * 2; // TS infiere que "valor" es any, y que el retorno también es any (es un riesgo)
}

function saludar() {
    return "Hola"; // TS infiere que el tipo de retorno es string
}
```
- Como vemos, en estos casos no estamos especificando el tipo pero aún así TS sabe lo que es. Esto evidentemente es más inseguro, pero para cosas obvias como "const edad = 20", lo podemos hacer.

- También es buena práctica activar "strict" y "noImplicitAny" en el archivo "tsconfig.json" para que TS nos avise cuando no puede inferir tipos correctamente.




## Tipado múltiple usando Union Types e Intersection Types

### Union Types ( | )

- Los union types permiten que una variable pueda tener un valor u otro. Veamos:

```typescript
let variable: string | number | [];
variable = "Hola"; // Válido
variable = 42; // Válido
variable = true; // Error: no es ni string, ni number, ni array

function imprimirID(id: string | number) {
  console.log(`El ID es: ${id}`);
}

imprimirID(123); // Válido
imprimirID("ABC123"); // Válido
imprimirID(true); // Error
```
- **Esto también se puede usar con objetos**: 

```typescript
type Estudiante = { nombre: string; curso: string };
type Profesor = { nombre: string; materia: string };

let persona: Estudiante | Profesor;

persona = { nombre: "Juan", curso: "Matemáticas" }; // Estudiante
persona = { nombre: "Ana", materia: "Física" }; //  Profesor
persona = { nombre: "Pedro", edad: 25 }; // Error, edad no está ni en Estudiante ni en Profesor
```
- Cómo acceder a las propiedades de "persona" si no sé de qué tipo es:

```typescript
function imprimirPersona(p: Estudiante | Profesor) {
	console.log(`Nombre: ${p.nombre}`);

	if ("curso" in p) {
		console.log(`Curso: ${p.curso}`); // Solo si es un Estudiante
	} else {
		console.log(`Materia: ${p.materia}`); // Solo si es un Profesor
	}
}
```
- En este caso, TypeScript no sabe si persona es de tipo Estudiante o Profesor, entonces hay que hacer una verificación de tipo previa. El uso de ( "curso" in p ) devuelve true o false, dependiendo de si "p" tiene dentro una propiedad "curso" o no.


### Intersection Types ( & )

- Esta alternativa es menos común, pero sirve para que la variable tenga que sí o sí cumplir con todos los tipos a la vez. Veamos:

```typescript
type Empleado = { nombre: string; salario: number };
type Gamer = { juegoFavorito: string };

let persona: Empleado & Gamer;

persona = {
	nombre: "Carlos",
	salario: 2000,
	juegoFavorito: "Zelda",
}; // Válido
```
- Es lo mismo que Union, pero cumpliendo con todo en vez de con uno sólo.