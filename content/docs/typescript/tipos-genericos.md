---
title: "Tipos Genéricos"
description: "Tipo Genérico (Generics)"
---


## Tipo Genérico (Generics)

El tipo genérico `<T>` en TypeScript es una poderosa característica que permite escribir funciones, clases e interfaces de una manera que funciona con múltiples tipos de datos, manteniendo el código seguro y reutilizable. 


## ¿Qué es el tipo genérico `<T>`?

El símbolo `<T>` es una representación de un tipo genérico. Puede leerse como un "placeholder" para un tipo de dato que se va a definir en el momento de uso.

Se usa la "T" porque es lo más común, pero un genérico se puede escribir con cualquier letra o palabra, como `<U>`, `<K>`, `<V>`, o incluso `<tipo>`. 

Los genéricos permiten trabajar con tipos sin especificar algún tipo en particular.


## ¿Cómo funciona el tipo genérico `<T>`?

Cuando se usa `<T>`, TypeScript espera que se le asigne un tipo en el momento en que se invoca la función o se instancia la clase que usa el genérico. Esto se llama "especificación del tipo".

```typescript
function identidad<T>(valor: T): T {
    return valor;
}
```

- En esta función identidad, `<T>` representa un tipo que se va a definir cuando se llame a la función.
- Si llamamos identidad(42), TypeScript infiere que T es un number.
- Si llamamos identidad("Hola"), T será inferido como string.

**Al llamar a la función, obtenemos**: 

```text
console.log(identidad(42));           // Muestra 42
console.log(identidad("Hola"));    // Muestra "Hola"
```

**También podemos poner genéricos por defecto**: 

```typescript
function procesar<T = string>(valor?: T): T {
    return valor as T;
}

const resultado = procesar(); // Como no pasé tipo, T = string
```

En este caso, como a procesar no le pasamos ningún valor, (cosa que era posible gracias a poner " ? "), a T se le aplica el tipo que pusimos por defecto, que es string.


## ¿Para qué sirve `<T>`?

El uso de genéricos es para cuando queremos hacer que nuestras funciones, clases o interfaces trabajen con cualquier tipo, pero aún así manteniendo seguridad de tipos.

Es muy poderoso para la reutilización de código, ya que en lugar de escribir una función específica para cada tipo de dato (por ejemplo, una para números y otra para cadenas), podemos escribir una sola función genérica que trabaje con ambos.

También nos brinda seguridad de tipos, ya que TypeScript se asegura de que los valores pasados a las funciones o clases genéricas sigan siendo válidos y sean consistentes. Esto evita errores.


## Otra Función Genérica

La función identidad de antes es un ejemplo básico. Ahora veamos una función más compleja, como envolverEnArray, que toma un elemento de cualquier tipo y lo convierte en un array:

```typescript
function envolverEnArray<T>(valor: T): T[] {
    return [valor];
}

console.log(envolverEnArray(42));            // Muestra [42]
console.log(envolverEnArray("texto"));     // Muestra ["texto"]
```

En este caso, T representa el tipo del argumento, lo cual hace que envolverEnArray sea flexible y adaptable.


## Clases Genéricas

También se pueden hacer clases genéricas. Por ejemplo, una clase Caja que guarda un valor de cualquier tipo:

```typescript
class Caja<T> {
    contenido: T;

    constructor(valor: T) {
        this.contenido = valor;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

const cajaNumero = new Caja<number>(42); // Especificamos el tipo genérico T como "number"
const cajaTexto = new Caja<string>("Texto"); // Especificamos el tipo genérico T como "string"
const cajaObjeto = new Caja<Profesor>(profesor1); // Especificamos el tipo genérico T como "Profesor"

console.log(cajaNumero.obtenerContenido()); // Muestra 42
console.log(cajaTexto.obtenerContenido());  // Muestra "Texto"
console.log(cajaObjeto.obtenerContenido());  // Muestra el objeto profesor1
```

Acá, Caja`<T>` puede contener valores de cualquier tipo que especifiquemos al instanciar la clase.


### Generics Constraining (Restricciones en los Genéricos)

A veces, queremos que el genérico `<T>` cumpla con ciertas características. Podemos hacer esto usando restricciones con extends.

Vamos a ver el ejemplo de una función que requiere que el tipo T sea un objeto que tenga una propiedad nombre. Como sabemos, esto se resuelve con una interfaz:

```typescript
interface ConNombre {
    nombre: string;
}

function mostrarNombre<T extends ConNombre>(obj: T): string {
    return obj.nombre;
}

const persona = { nombre: "Ana", edad: 25 };
console.log(mostrarNombre(persona));  // Muestra "Ana"
```

Al usar `<T extends ConNombre>` en la declaración de la función mostrarNombre, indicamos que es una función con tipo genérico (y por eso tiene <>). Y su tipo, no sólo es un tipo sin más, sino que es un tipo que implementa una interfaz llamada "ConNombre", entonces, tiene que cumplir el contrato de dicha interfaz (tener una propiedad string llamada nombre). 

```typescript
const sinNombre = { edad: 25 };
console.log(mostrarNombre(sinNombre)); // Esto da ERROR. sinNombre no cumple con la interfaz
```

### Más de un Tipo Genérico

Podemos usar varios tipos genéricos en una misma función o clase:

```typescript
function par<K, V>(clave: K, valor: V): [K, V] {
    return [clave, valor];
}

console.log(par("edad", 23));        // Muestra  ["edad", 23]
console.log(par(1, "Hola"));          // Muestra [1, "Hola"]
```

En este caso, usamos `<K, V>` para representar un par clave-valor, que puede ser cualquier combinación de tipos, como string y number, o number y boolean, o function y array, o lo que sea.


### Ejemplo de genéricos con una función con callback

```typescript
function mapear<T, U>(array: T[], callback: (item: T) => U): U[] {
    return array.map(callback);
}

const numeros = [1, 2, 3];
const strings = mapear(numeros, num => num.toString()); // U es inferido como string
```