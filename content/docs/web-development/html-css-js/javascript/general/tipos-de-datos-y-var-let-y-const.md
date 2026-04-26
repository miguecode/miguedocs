---
title: "Tipos de Datos y Var, Let y Const"
description: "Guía sobre los tipos de datos primitivos y no primitivos, y las diferencias entre var, let y const en JavaScript."
---

## Tipos de datos

En JavaScript, existen dos categorías principales de tipos de datos:

1.  **Tipos primitivos**: Se almacenan por valor (son 7).
2.  **Tipos no primitivos (objetos)**: Se almacenan por referencia (son 3).

El concepto de almacenamiento por valor vs. referencia es fundamental y volverá a aparecer cuando profundicemos en Objetos y Prototipos.

## Tipos primitivos

Los tipos primitivos son inmutables y se copian **POR VALOR**. Esto significa que si asignamos una variable a otra, se copia el contenido de forma independiente; modificar una no afecta a la original.

| Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Number** | Números enteros y decimales. | `let edad = 23;` |
| **String** | Cadenas de texto (entre " " o ' '). | `let nombre = "Juan";` |
| **Boolean** | Representa `true` o `false`. | `let esMayor = true;` |
| **Undefined** | Variable declarada pero sin valor asignado. | `let x;` |
| **Null** | Ausencia intencional de valor. | `let y = null;` |
| **Symbol** | Valores únicos e inmutables. | `let id = Symbol("id");` |
| **BigInt** | Números enteros de precisión arbitraria. | `let big = 123456n;` |

> [!IMPORTANT]
> **Aclaración sobre Null**: Aunque es un tipo primitivo, `typeof null` devuelve `"object"`. Este es un bug histórico de JavaScript que se mantuvo para no romper la compatibilidad con versiones antiguas. Funcionalmente, se comporta como un tipo primitivo.

## Tipos no primitivos (Objetos)

Estos datos se almacenan **POR REFERENCIA**, lo que significa que la variable guarda una dirección de memoria. Si asignamos una variable a otra, ambas apuntarán al mismo objeto físico en memoria.

| Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Object** | Conjunto de datos clave-valor. | `let p = { nombre: "Ana" };` |
| **Array** | Lista ordenada de valores. | `let numeros = [1, 2, 3];` |
| **Function** | Bloque de código ejecutable. | `function sumar(a, b) { ... }` |

Tanto los arrays como las funciones son, técnicamente, objetos. Heredan de la clase base `Object`. Las funciones son un caso especial porque son "invocables", por lo que `typeof` devuelve `"function"` para facilitar su detección.

```javascript
function saludar() {}
console.log(saludar instanceof Function); // true
console.log(saludar instanceof Object);   // true
```

## Diferencia entre Var, Let y Const

Existen tres formas de declarar variables, cada una con reglas distintas de alcance y comportamiento.

*   **`var`**: Alcance de función. Puede ser redeclarada y reasignada. Ignora los bloques `{ }` (como los de un `if` o `for`).
*   **`let`**: Alcance de bloque. No puede ser redeclarada en el mismo ámbito, pero sí reasignada.
*   **`const`**: Alcance de bloque. No puede ser reasignada ni redeclarada. Debe inicializarse obligatoriamente en la misma línea.

### Ejemplo de Scope (Alcance)

```javascript
function ejemplo() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x); // 10 (var sobrevive al bloque)
    // console.log(y); // Error (let muere fuera del bloque)
    // console.log(z); // Error (const muere fuera del bloque)
}
```

Hoy en día, el uso de `var` se considera una mala práctica. Lo ideal es usar `const` por defecto y `let` solo si el valor necesita cambiar.

### Mutabilidad de `const` con objetos

Aunque `const` impide la **reasignación** de la variable (no podemos apuntarla a una nueva dirección de memoria), sí permite la **mutación** del contenido del objeto o array al que apunta.

```javascript
const numeros = [1, 2];
numeros.push(3); // Esto FUNCIONA (mutación)

// numeros = [4, 5, 6]; // Esto daría ERROR (reasignación)
```

En el caso de objetos y arrays, usamos `const` porque la referencia (la dirección de memoria) no va a cambiar, aunque el contenido de dicho objeto sí lo haga.