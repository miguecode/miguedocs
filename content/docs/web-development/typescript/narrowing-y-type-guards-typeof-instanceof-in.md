---
title: "Narrowing y Type Guards (typeof, instanceof, in)"
description: "[Los Type Guards son características de JavaScript. No es algo propio de TypeScript. Eso sí, TS se encarga de potenciarlos gracias al uso de tipado, lo que los ..."
---


[Los Type Guards son características de JavaScript. No es algo propio de TypeScript. Eso sí, TS se encarga de potenciarlos gracias al uso de tipado, lo que los hace mas útiles. Pero en realidad, no dejan de ser una funcionalidad que ya existe en JavaScript puro.]

## Narrowing

- Narrowing es el proceso mediante el cual TypeScript reduce un tipo más general a uno más específico, basado en lógica de control como condicionales (if, switch, typeof, etc.).

- Por ejemplo, si una variable puede ser string | number, podemos "acotar" ese tipo (narrow) dependiendo de su valor en tiempo de ejecución:

```typescript
function imprimir(valor: string | number) {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // Acá, TypeScript ya sabe "valor" es string
  } else {
    console.log(valor.toFixed(2));    // Acá, TypeScript ya sabe que "valor" es number
  }
}
```
- En este caso, TypeScript "estrecha" el tipo a medida que el código avanza, gracias a la lógica usada

- Este tipo de validaciones son necesarias para, por ejemplo, usar datos "unknown", que son valores que pueden ser de cualquier tipo, pero que obligatoriamente necesitan una validación previa para poder usarlos. Entonces, esa validación previa conforma lo que es el Narrowing, es decir, el proceso de ir haciendo al tipo más específico.


## Type Guards

- Los Type Guards (guardianes de tipo) son expresiones o funciones (existentes también en JavaScript puro) que le permiten a TypeScript identificar el tipo específico de una variable en tiempo de ejecución, dentro de un contexto. Básicamente, son herramientas que permiten hacer Narrowing (especificar el tipo mediante lógica programática).

- Hay 4 tipos de Type Guards, "typeof", "instanceof", "in", y personalizados (funciones).

1. Typeof Guard (para tipos primitivos)

```typescript
function procesar(valor: string | number) {
  if (typeof valor === "string") {
    valor.toUpperCase(); // string
  } else {
    valor.toFixed(2); // number
  }
}
```
- Recordemos que para funciones el valor que devuelve es "function", y para null devuelve "object" (aunque eso es un bug de JavaScript que se decidió no corregir).

- El typeof en JavaScript sirve únicamente para evaluar valores en tiempo de ejecución. En TypeScript, además de eso, también se usa en tiempo de compilación para crear tipos, así:

```typescript
const usuario = {
  nombre: "Juan",
  edad: 30
};

type Usuario = typeof usuario;
```
- **Ahora, el type Usuario es equivalente a**: 
```typescript
{
  nombre: string;
  edad: number;
}
```
2. Instanceof Guard (para instancias de clases)

```typescript
class Perro {
  ladrar() {}
}

class Gato {
  maullar() {}
}

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    animal.ladrar(); // "animal" es intancia de Perro
  } else {
    animal.maullar(); // "animal" es intancia de Gato
  }
}
```
- Esto funciona sólo con clases, y no con interfaces. Básicamente sirve para validar si un objeto es o no es la instancia de una clase.


3. Chequeo de propiedad (el operador in)

```typescript
type Empleado = { nombre: string; salario: number };
type Cliente = { nombre: string; compras: number };

function mostrarInfo(persona: Empleado | Cliente) {
  if ("salario" in persona) {
    console.log(persona.salario); // "persona" es type Empleado
  } else {
    console.log(persona.compras); // "persona" es type Cliente
  }
}
```
- Esto es útil para cuando trabajamos con objetos literales, es decir, que no son instancias de clases. Básicamente devuelve true o false dependiendo de si el objeto contiene o no a la propiedad que le especificamos.


4. Type Guards personalizados (son funciones propias)

- Nosotros podemos crear nuestros propios "guardias de tipo" usando funciones:

```typescript
type Admin = { tipo: "admin"; permisos: string[] };
type Usuario = { tipo: "usuario"; nombre: string };

function esAdmin(persona: Admin | Usuario): persona is Admin {
  return persona.tipo === "admin";
}

function saludar(persona: Admin | Usuario) {
  if (esAdmin(persona)) {
    console.log("Permisos:", persona.permisos);
  } else {
    console.log("Hola", persona.nombre);
  }
}
```
- En este caso, la clave está en el "persona is Admin", que le dice a TypeScript: “si esta función devuelve true, entonces persona es un Admin”.