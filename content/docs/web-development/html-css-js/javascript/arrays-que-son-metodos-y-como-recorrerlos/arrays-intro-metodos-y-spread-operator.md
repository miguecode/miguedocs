---
title: "Arrays. Intro, métodos y Spread Operator [ ...]"
description: "Los arrays en JavaScript son un tipo de dato no primitivo. Eso quiere decir que apuntan a direcciones de memoria. Lo ideal, entonces, es declararlos con 'const'..."
---

## 📦 Introducción a los Arrays

En JavaScript, los **Arrays** (arreglos) son objetos especiales que permiten almacenar una colección de datos. A diferencia de los tipos primitivos, los arrays funcionan por **referencia de memoria**.

### Declaración con `const`
Se recomienda declarar arrays con **`const`**. Esto no significa que el contenido sea inmutable, sino que la **referencia** (la dirección de memoria) no puede cambiar. Podemos agregar o quitar elementos, pero no reasignar la variable a un nuevo array.

```javascript
const frutas = ["Manzana", "Pera"];
frutas.push("Banana"); // ✅ Permitido (el contenido cambia)
// frutas = ["Nueva Lista"]; // ❌ Error (la referencia no puede cambiar)
```

---

## 🛠️ Métodos Básicos de Manipulación

Los métodos básicos modifican el array original (mutación) y devuelven diferentes valores según su función.

| Método | Función | Devuelve |
| :--- | :--- | :--- |
| **`push()`** | Agrega al **final**. | El nuevo `length`. |
| **`pop()`** | Elimina el **último**. | El elemento eliminado. |
| **`unshift()`** | Agrega al **inicio**. | El nuevo `length`. |
| **`shift()`** | Elimina el **primero**. | El elemento eliminado. |

### Ejemplos:
```javascript
const numeros = [1, 2, 3];

numeros.push(4);    // [1, 2, 3, 4]
const ultimo = numeros.pop(); // ultimo = 4, numeros = [1, 2, 3]

numeros.unshift(0); // [0, 1, 2, 3]
const primero = numeros.shift(); // primero = 0, numeros = [1, 2, 3]
```

---

## 🥚 Spread Operator (`...`)

El **Spread Operator** (Operador de propagación) sirve para "esparcir" los elementos de un array dentro de otro. Es la forma más moderna y legible de copiar o combinar arrays.

### Copia y Combinación:
```javascript
const originales = [1, 2, 3];
const copia = [...originales]; // Nueva referencia, mismos valores.

const grupoA = ["A", "B"];
const grupoB = ["C", "D"];
const unidos = [...grupoA, ...grupoB, "E"]; // ["A", "B", "C", "D", "E"]
```

---

## 🧬 Copia Superficial vs Profunda

Es fundamental entender cómo se copian los datos para evitar efectos secundarios no deseados.

### 1. Copia Superficial (Shallow Copy)
Tantos **`concat()`** como el **Spread Operator** realizan copias superficiales. Si el array contiene otros objetos o arrays, solo se copia la referencia al objeto interno.

```javascript
const original = [[1, 2], 3];
const copia = [...original];

copia[0][0] = 99; 
console.log(original[0][0]); // 99 (Se modificó el original porque comparten el array interno)
```

### 2. Copia Profunda (Deep Copy)
Para crear una copia totalmente independiente incluso de elementos anidados, usamos **`structuredClone()`**.

```javascript
const original = [[1, 2], 3];
const copiaProfunda = structuredClone(original);

copiaProfunda[0][0] = 77;
console.log(original[0][0]); // 1 (El original se mantiene intacto)
```

> [!TIP]
> Usa **`structuredClone()`** cuando trabajes con datos complejos anidados (arrays de objetos, por ejemplo) para evitar bugs de estado compartido.