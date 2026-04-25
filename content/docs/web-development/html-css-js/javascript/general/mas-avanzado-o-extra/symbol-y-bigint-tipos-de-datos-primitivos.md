---
title: "Symbol y BigInt, tipos de datos primitivos"
description: "El tipo de dato Symbol"
---


## El tipo de dato Symbol

- Symbol es un tipo de dato primitivo introducido en ES6 (ECMAScript 2015). Se usa para crear valores únicos e inmutables que no pueden ser duplicados.

- Cada Symbol es único (aunque tengan la misma descripción).
- Se usa para evitar colisiones de nombres en objetos.
- No se puede convertir automáticamente a string (console.log(symbol + "texto") da error).

```typescript
const simbolo1 = Symbol("identificador");
const simbolo2 = Symbol("identificador");

console.log(simbolo1 === simbolo2); // Muestra false
```
- Esto es curioso, porque a pesar de ser del mismo tipo y tener el mismo texto, son dos variables de tono "único". Entonces, simbolo1 nunca va a ser igual a simbolo2 o a otro símbolo.

```typescript
const user = {
    id: 1,
    nombre: "Juan",
    [Symbol("claveSecreta")]: "abc123"
};

console.log(user);
```
- En este caso, el Symbol no aparece en console.log(), pero sigue existiendo en el objeto.
```text
console.log(Object.keys(user)); // ["id", "nombre"] - No muestra los símbolos
console.log(Object.getOwnPropertySymbols(user)); // Muestra los símbolos
```
## El tipo de dato BigInt y el "problema" con Number

- Lo que pasa con Number, es que tiene límite de precisión. El límite es muy grande, por ende rara vez vamos a tener problemas con eso. Pero bueno, por esto es que existe BigInt. Para tener precisión en numeros que son muchísimo más grandes.

```typescript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 [Valor más alto]

console.log(9007199254740991 + 1); // 9007199254740992 [Correcto]
console.log(9007199254740991 + 2); // 9007199254740992 [Incorrecto]

const numeroGrande = 9007199254740991n;   // Agregando 'n' al final
const otroBigInt = BigInt(9007199254740991);  // Usando la función BigInt()

console.log(numeroGrande + 2n); // 9007199254740993n [Correcto]
```