---
title: "Symbol y BigInt: Tipos de datos primitivos avanzados"
description: "Symbol y BigInt, dos tipos de datos primitivos de JavaScript diseñados para identificadores únicos y cálculos matemáticos de gran precisión."
---


## El tipo de dato Symbol

**Symbol** es un tipo de dato primitivo introducido en ES6 (ECMAScript 2015). Se utiliza para crear valores **únicos e inmutables** que no pueden ser duplicados.

### Características principales:
*   **Unicidad absoluta**: Cada `Symbol` creado es totalmente distinto a cualquier otro, incluso si tienen la misma descripción descriptiva.
*   **Propiedades ocultas**: Se usa frecuentemente para añadir claves a objetos evitando colisiones con otras librerías o scripts.
*   **Inmune a coerción**: No se puede convertir automáticamente a string (por ejemplo, `simbolo + "texto"` lanzará un error).

```javascript
const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");

console.log(simbolo1 === simbolo2); // false
```

### Uso en objetos

Los símbolos no aparecen en las iteraciones comunes de los objetos, lo que los hace ideales para metadatos o "propiedades privadas" simuladas.

```javascript
const user = {
    id: 1,
    nombre: "Juan",
    [Symbol("token")]: "abc123"
};

console.log(Object.keys(user)); // ["id", "nombre"] (El Símbolo se ignora)

// Para acceder a los símbolos, necesitamos métodos específicos
console.log(Object.getOwnPropertySymbols(user)); 
```

## El tipo de dato BigInt

**BigInt** fue creado para solucionar el límite de precisión de los números tradicionales en JavaScript (`Number`). 

### El problema con `Number`
El tipo `Number` tiene un límite de precisión segura llamado `MAX_SAFE_INTEGER`. Superado este número, JavaScript pierde precisión y los cálculos dejan de ser fiables.

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9,007,199,254,740,991

console.log(9007199254740991 + 1); // 9007199254740992 (Correcto)
console.log(9007199254740991 + 2); // 9007199254740992 (Incorrecto: Fallo de precisión)
```

### La solución con `BigInt`
Para trabajar con números enteros de cualquier tamaño, podemos usar `BigInt`. Se declara agregando una **`n`** al final del número o usando la función constructora `BigInt()`.

```javascript
const numeroGigante = 9007199254740991n; 

console.log(numeroGigante + 2n); // 9007199254740993n (Precisión exacta)
```

> [!WARNING]
> No puedes mezclar `BigInt` con `Number` en la misma operación aritmética. Si necesitas sumarlos, debes convertir explícitamente uno de los dos al tipo del otro.