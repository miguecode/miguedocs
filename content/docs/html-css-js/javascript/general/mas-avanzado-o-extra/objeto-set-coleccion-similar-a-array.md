---
title: "Objeto Set (colección similar a Array)"
description: "Los objetos Set permiten almacenar colecciones de valores únicos de cualquier tipo, eliminando duplicados de forma automática."
---


## Set

Un **Set** es una colección de valores únicos que no permite duplicados. Aunque se parece a un array, su propósito principal es representar conjuntos donde la unicidad de los elementos es lo más importante.

### Características principales

*   **Valores únicos**: Si intentas agregar un valor que ya existe, el Set simplemente lo ignora.
*   **Sin claves**: A diferencia de un objeto o un `Map`, solo almacena valores directos.
*   **Iterable**: Puede recorrerse con `forEach` o bucles `for...of`.
*   **Ordenado**: Mantiene el orden en que los elementos fueron insertados.
*   **Eficiente**: Ofrece métodos rápidos para añadir, eliminar y verificar la existencia de elementos.

### ¿Cuándo usar un Set?

*   Para eliminar duplicados de un array de forma rápida.
*   Para verificar la existencia de un valor sin preocuparse por su índice.
*   Para realizar operaciones matemáticas de conjuntos (unión, intersección, diferencia).

## Ejemplo básico

```javascript
const conjunto = new Set();

conjunto.add("🍎");
conjunto.add("🍌");
conjunto.add("🍎"); // Este se ignora porque ya existe en el conjunto

console.log(conjunto);          // Set(2) {"🍎", "🍌"}
console.log(conjunto.has("🍎")); // true (verificación rápida)
console.log(conjunto.size);     // 2

conjunto.delete("🍌");          // Elimina la banana
conjunto.clear();               // Vacía el conjunto por completo
```

## Eliminar repetidos de un array

Esta es una de las utilidades más comunes de los `Set`. Al combinarlo con el operador de propagación (*spread operator*), podemos limpiar un array en una sola línea:

```javascript
const numeros = [1, 2, 3, 2, 4, 1, 5];
const sinRepetidos = [...new Set(numeros)];

console.log(sinRepetidos); // [1, 2, 3, 4, 5]
```

## Operaciones de Conjuntos

Podemos realizar operaciones lógicas entre dos conjuntos `A` y `B`:

```javascript
const A = new Set([1, 2, 3]);
const B = new Set([2, 3, 4]);

// Unión: Todos los elementos de A y B (sin duplicados)
const union = new Set([...A, ...B]); // {1, 2, 3, 4}

// Intersección: Solo los elementos que están en ambos
const interseccion = new Set([...A].filter(x => B.has(x))); // {2, 3}

// Diferencia: Elementos que están en A pero no en B
const diferencia = new Set([...A].filter(x => !B.has(x))); // {1}
```

## Comparativa: Object vs. Map vs. Array vs. Set

| Tipo | Claves | Duplicados | Ordenado | Ideal para... |
| :--- | :--- | :--- | :--- | :--- |
| **Object** | Strings / Símbolos | Permite duplicados | No fiable | Entidades y modelos de datos fijos. |
| **Map** | Cualquier tipo | Permite duplicados | Sí | Claves complejas y alta eficiencia. |
| **Array** | Índices (0, 1, 2...) | Permite duplicados | Sí | Listas ordenadas con posible repetición. |
| **Set** | Sin claves (solo valor) | **No permite** | Sí | Conjuntos únicos y eliminación de duplicados. |