---
title: "Variables y Direcciones de Memoria (JS)"
description: "Entiende cómo JavaScript gestiona la memoria, las referencias y el pasaje de variables por valor y por referencia."
---

## Variables, Direcciones de Memoria y Punteros

A diferencia de lenguajes de bajo nivel como C o C++, JavaScript no maneja punteros directamente de forma explícita. Sin embargo, para escribir código eficiente es fundamental entender cómo el motor de JS gestiona la memoria y las referencias.

### Declaración de variables

```javascript
let variable = "Hola";
let variable2 = 10, variable3 = 20, variable4 = 30;
```

## Espacios de Memoria en el Motor de JavaScript

Podemos imaginar el motor de JavaScript como una cuadrícula gigante de "huequitos". Cada vez que creamos una variable, le pedimos al motor que nos reserve uno de esos espacios (un espacio de memoria). 

JavaScript administra la memoria automáticamente mediante un proceso llamado **Garbage Collection** (Recolector de Basura), que libera el espacio de las variables que ya no se están utilizando en el programa.

```javascript
let num1 = 100;       // Reservamos memoria para el valor 100
num1 = num1 + 300;    // Actualizamos el valor almacenado
console.log(num1);    // 400
```

## Variables Actuales y Formales

Es importante distinguir entre los valores que enviamos a una función y los que la función recibe internamente:

*   **Variables actuales (Argumentos)**: Son los valores reales que pasamos al invocar la función.
*   **Variables formales (Parámetros)**: Son los nombres de las variables declaradas en la definición de la función que reciben dichos valores.

```javascript
function calcularSuperficie(base, altura) { // Parámetros formales
    return base * altura;
}

console.log(calcularSuperficie(30, 10)); // Argumentos actuales
```

## Pasaje por Valor vs. Pasaje por Referencia

### Pasaje por Valor (Tipos Primitivos)

Se aplica a: `number`, `string`, `boolean`, `null`, `undefined` y `symbol`. La función recibe una **copia** del valor. Cualquier cambio dentro de la función no afecta a la variable original fuera de ella.

```javascript
let num = 10;
function duplicar(x) {
    x = x * 2;
}
duplicar(num);
console.log(num); // 10 (la original no cambió)
```

### Pasaje por Referencia (Objetos y Arrays)

Se aplica a: `Object`, `Array` y `Function`. La función no recibe el valor, sino la **dirección de memoria** (referencia) donde reside el objeto. Cualquier modificación alterará el objeto original porque ambos apuntan al mismo lugar.

```javascript
let persona = { nombre: "Juan" };
function cambiarNombre(obj) {
    obj.nombre = "Carlos";
}
cambiarNombre(persona);
console.log(persona.nombre); // "Carlos" (afectó al objeto original)
```

## Direcciones de Memoria y Referencias

En JavaScript, las variables de tipo objeto almacenan una dirección de memoria en formato hexadecimal (ej: `0xa1b`). 

*   **Referencia** es sinónimo de dirección de memoria.
*   **Null** representa la "no dirección de memoria" (`00000000`).

Dos variables pueden apuntar al mismo objeto en memoria si les asignamos la misma referencia:

```javascript
let a = { valor: 1 };
let b = a; // Ambas apuntan a la misma dirección
b.valor = 2;
console.log(a.valor); // 2
```

### Copiando Arrays: Spread Operator

Para evitar que dos variables compartan la misma referencia y se afecten mutuamente, podemos "romper" la referencia y crear un nuevo array con los mismos valores usando el **Spread Operator** (`...`):

```javascript
const vec1 = [1, 2, 3];
const vec2 = [...vec1]; // Creamos un nuevo array en OTRA dirección de memoria

vec2.push(4);
console.log(vec1); // [1, 2, 3] (se mantiene intacto)
console.log(vec2); // [1, 2, 3, 4]
```

> [!WARNING]
> **Copia Superficial**: El spread operator solo realiza una copia de la primera capa. Si el array es multidimensional (un array dentro de otro), el array interno seguirá compartiendo la misma referencia. Para copias profundas, se debe usar `structuredClone()` o técnicas de serialización JSON.