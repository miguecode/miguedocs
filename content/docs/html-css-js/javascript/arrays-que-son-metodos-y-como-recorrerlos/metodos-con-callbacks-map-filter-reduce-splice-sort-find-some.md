---
title: "Métodos con callbacks (Map, Filter, Reduce, Splice, Sort, Find, Some)"
description: "Los métodos con callbacks son funciones que se ejecutan por cada elemento del array."
---


## 🔄 Métodos de Iteración con Callbacks

Estos métodos recorren el array y ejecutan una función (**callback**) por cada elemento. Son la base de la programación funcional en JavaScript.

### Firma común del Callback
Casi todos estos métodos pasan tres argumentos a la función que reciben:
```javascript
array.metodo((elemento, indice, arrayOriginal) => { ... });
```

---

## 📋 Resumen de Métodos Principales

| Método | Propósito | ¿Modifica el original? | Devuelve |
| :--- | :--- | :--- | :--- |
| **`map()`** | Transformar elementos. | No | Nuevo array con resultados. |
| **`filter()`** | Filtrar elementos por condición. | No | Nuevo array con filtrados. |
| **`find()`** | Buscar un elemento específico. | No | El **primer** elemento que coincida. |
| **`some()`** | Verificar si **alguno** cumple. | No | `true` o `false`. |
| **`every()`** | Verificar si **todos** cumplen. | No | `true` o `false`. |
| **`reduce()`** | Acumular valores en uno solo. | No | El valor acumulado final. |
| **`sort()`** | Ordenar elementos. | **Sí** (Muta) | El array original ordenado. |
| **`splice()`** | Agregar/Quitar en posiciones. | **Sí** (Muta) | Array de elementos eliminados. |

---

## 🚀 Ejemplos Detallados

### 1. Transformación con `map()`
Ideal para convertir datos, por ejemplo, duplicar números:
```javascript
const numeros = [2, 4, 5, 6, 7, 8];
// Duplicar solo los pares
const procesados = numeros.map(n => n % 2 === 0 ? n * 2 : n); 
// Resultado: [4, 8, 5, 12, 7, 16]
```

### 2. Filtrado con `filter()`
Crea un nuevo array solo con los elementos que pasan la prueba:
```javascript
const edades = [12, 18, 25, 10];
const adultos = edades.filter(e => e >= 18); // [18, 25]
```

### 3. Acumulación con `reduce()`
Recibe un acumulador (**prev**) y el valor actual (**actual**). Requiere un valor inicial (ej: `0`).
```javascript
const precios = [10, 20, 30];
const total = precios.reduce((acc, current) => acc + current, 0); // 60
```

### 4. Ordenamiento con `sort()`
**¡Cuidado!** `sort()` ordena alfabéticamente por defecto. Para números, usa una función comparadora:
```javascript
const puntos = [40, 100, 1, 5];
// Orden ascendente
puntos.sort((a, b) => a - b); // [1, 5, 40, 100]
```

---

## ⚠️ Mutabilidad y Métodos Modernos

Los métodos como `sort()` y `splice()` **mutan** (cambian) el array original. Esto puede causar efectos secundarios. En versiones modernas de JS (ES2023+), existen alternativas que no mutan:

- **`toSorted()`**: Como `sort()` pero devuelve un array nuevo.
- **`toSpliced()`**: Como `splice()` pero devuelve un array nuevo.
- **`toReversed()`**: Como `reverse()` pero devuelve un array nuevo.

> [!IMPORTANT]
> Siempre que sea posible, prioriza métodos que devuelvan arrays nuevos. Esto hace que tu código sea más predecible y fácil de debuguear (Principio de Inmutabilidad).

---

> [!TIP]
> Puedes encadenar métodos para realizar operaciones complejas en una sola línea.
> ```javascript
> const VIPs = usuarios.filter(u => u.puntos > 100).map(u => u.nombre);
> ```