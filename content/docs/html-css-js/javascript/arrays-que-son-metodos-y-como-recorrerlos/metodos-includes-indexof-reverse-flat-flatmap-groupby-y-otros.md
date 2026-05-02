---
title: "Métodos (Includes, IndexOf, Reverse, Flat, FlatMap, GroupBy, y otros)"
description: "Vamos a ver otros métodos útiles de los arrays en JavaScript."
---


## 🔍 Métodos de Búsqueda y Posición

Estos métodos permiten encontrar elementos o verificar su existencia dentro de un array de forma rápida.

| Método | Propósito | Devuelve |
| :--- | :--- | :--- |
| **`includes()`** | Verifica si un valor existe. | `true` o `false`. |
| **`indexOf()`** | Busca el índice de un valor. | El **índice** o `-1` si no lo encuentra. |
| **`at()`** | Accede a un índice (soporta negativos). | El elemento en esa posición. |

### Ejemplos:
```javascript
const frutas = ["Manzana", "Pera", "Banana"];

console.log(frutas.includes("Pera"));   // true
console.log(frutas.indexOf("Banana")); // 2
console.log(frutas.at(-1));            // "Banana" (Último elemento)
```

---

## 🧹 Manipulación y Estructura

### 1. Inversión: `reverse()`
Invierte el orden de los elementos. **Ojo**: `reverse()` muta el array original. Usa `toReversed()` para obtener una copia.

```javascript
const letras = ["a", "b", "c"];
letras.reverse(); // ["c", "b", "a"]
```

### 2. Aplanamiento: `flat()`
Convierte arrays anidados (matrices) en un array de una sola dimensión. Recibe la **profundidad** como parámetro (por defecto `1`).

```javascript
const matriz = [1, [2, [3]]];
console.log(matriz.flat(1)); // [1, 2, [3]]
console.log(matriz.flat(2)); // [1, 2, 3]
```

### 3. Transformación y Aplanamiento: `flatMap()`
Es una combinación eficiente de `map()` seguido de un `flat(1)`.

```javascript
const frases = ["Hola mundo", "JS es genial"];
const palabras = frases.flatMap(f => f.split(" ")); 
// ["Hola", "mundo", "JS", "es", "genial"]
```

---

## 📂 Agrupación (Moderno ES2024)

JavaScript ahora incluye métodos estáticos en la clase `Array` para agrupar elementos según una condición.

### `Object.groupBy()`
Agrupa elementos en un objeto donde las llaves son los criterios.

```javascript
const productos = [
  { nombre: "Manzana", tipo: "Fruta" },
  { nombre: "Zanahoria", tipo: "Verdura" },
  { nombre: "Banana", tipo: "Fruta" }
];

const agrupado = Object.groupBy(productos, p => p.tipo);
/* Resultado:
{
  Fruta: [{...Manzana}, {...Banana}],
  Verdura: [{...Zanahoria}]
}
*/
```

### `Map.groupBy()`
Funciona igual, pero devuelve un objeto **Map**, permitiendo usar cualquier tipo de dato como "llave" (no solo strings).

---

> [!IMPORTANT]
> El método **`at()`** es especialmente útil cuando necesitas el último elemento de un array. En lugar de usar `array[array.length - 1]`, simplemente usa `array.at(-1)`. Es mucho más limpio y legible.