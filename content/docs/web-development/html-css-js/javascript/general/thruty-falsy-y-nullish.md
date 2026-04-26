---
title: "Truthy, Falsy y Nullish"
description: "Descubre cómo JavaScript evalúa diferentes valores como verdaderos o falsos en contextos lógicos."
---

## Truthy, Falsy y Nullish

La condición dentro de un `if` se evalúa como `true` o `false`, pero JavaScript convierte automáticamente algunos valores en estos booleanos según su "verdad" o "falsedad" implícita mediante un proceso llamado coerción.

```javascript
if (condicion) {
   // Se ejecuta si la condicion es "truthy"
} else {
   // Se ejecuta si la condicion es "falsy"
}
```

### 🟢 Valores "truthy" (Cuentan como true)

Un valor es **truthy** si no se encuentra en la lista de valores falsy. Algunos ejemplos son:

*   `true`
*   Cualquier número diferente de `0` (`1`, `-5`, `3.14`, etc.).
*   Cualquier string con contenido (`"hola"`, `"false"`, `"0"`, etc.).
*   Un array vacío `[]`.
*   Un objeto vacío `{}`.
*   `Infinity` y `-Infinity`.
*   Cualquier función `function() {}`.

### 🔴 Valores "falsy" (Cuentan como false)

Son valores que se evalúan como `false` en un contexto booleano:

*   `false`
*   `0` (cero numérico).
*   `""` (string vacío).
*   `null`
*   `undefined`
*   `NaN` (Not a Number).

### 🟣 Valores "nullish"

El término **nullish** se refiere exclusivamente a:

*   `null`
*   `undefined`

Es importante destacar que todos los valores **nullish** son también **falsy**, pero no todos los valores **falsy** son **nullish** (por ejemplo, `0` o `""` son falsy pero no nullish).

## Forma más sencilla de recordarlos

El truco para distinguir cuándo un valor es truthy o falsy es simplemente memorizar la lista de los **falsy**, que son pocos. Si un valor no está en esa lista, puedes estar seguro de que es **truthy**. Es así de fácil.

## ¿1 es true y 0 es false?

Veamos la diferencia entre la comparación débil y la estricta:

```javascript
console.log(true == 1);  // true (coerción de tipos: JS convierte el booleano en número)
console.log(false == 0); // true (coerción de tipos)

console.log(true === 1);  // false (comparación estricta: distinto tipo de dato)
console.log(false === 0); // false (comparación estricta)
```

Como vimos, con `===` no hay coerción de tipos. Como `true` y `false` pertenecen al tipo *Boolean*, nunca serán idénticos a los valores del tipo *Number*.