---
title: "Thruty, Falsy y Nullish"
description: "Truthy, Falsy y Nullish"
---


## Truthy, Falsy y Nullish

- La condición dentro de un if se evalúa como true o false, pero JavaScript convierte automáticamente algunos valores en true o false según su "verdad" o "falsedad" implícita.

```typescript
if (condición) {
   // Se ejecuta si la condición es "truthy"
} else {
   // Se ejecuta si la condición es "falsy"
}
```
🟢 Valores "truthy" (Cuentan como true):

- true
- Cualquier número diferente de 0 (1, -5, 3.14, etc.)
- Cualquier string con caracteres ("hola", "false", "0", "true", etc.)
- Un array vacío []
- Un objeto vacío {}
- Infinity y -Infinity
- Cualquier función function() {}

🔴 Valores "falsy" (Cuentan como false) (Todo lo que no es truthy):

- false
- 0
- "" (string vacío)
- null
- undefined
- NaN

🔴 Valores "nullish" (Cuentan como false)

- null
- undefined

- **Los nullish son solamente dos**: null y undefined. Que también son falsy's. Es decir, "null" y "undefined" son datos falsy y nullish al mismo tiempo.


## Forma más sencilla de recordarlos

- El truco para saber distinguir cuándo es truthy o falsy, es simplemente recordar cuáles son los valores falsy, que son menos que los truthy. Entonces, cada vez que vemos que un valor NO es falsy, eso significa que es truthy. Es así de fácil.


## ¿1 Es true y 0 es false?

```text
console.log(true == 1);  // true (coerción de tipos)
console.log(false == 0); // true (coerción de tipos)

console.log(true === 1);  // false (comparación estricta, son distinto tipo)
console.log(false === 0); // false (comparación estricta, son distinto tipo)
```
- Como vimos ahí, existe una diferencia a cuando hacemos una comparación con == o con === (comparación estricta). Ya que en la segunda, no hay coerción de tipos. Como true y false son booleanos, nunca van a ser iguales a 1 y 0, que son valores numéricos.