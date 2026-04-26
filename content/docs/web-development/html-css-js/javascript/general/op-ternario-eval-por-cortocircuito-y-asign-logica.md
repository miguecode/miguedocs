---
title: "Op. Ternario, Eval. por Cortocircuito y Asign. Lógica"
description: "Optimiza tu código JavaScript usando el operador ternario, evaluaciones por cortocircuito y asignaciones lógicas."
---

## Operador Ternario (If-Else resumido)

El operador ternario es una forma de escribir un `if-else` de forma más rápida. La idea es que, al escribir menos código, podamos resumir la lógica en una sola línea.

```text
[condición] ? [se ejecuta si es true] : [se ejecuta si es false];
```

**Ejemplo:**

```javascript
let edad = 20;
let resultado = edad > 17 ? "Mayor de edad" : "Menor de edad";	

console.log(resultado); // Muestra "Mayor de edad"
```

Generalmente esto lo resolveríamos haciendo un bloque `if-else`, pero con el operador ternario el código queda más conciso.

## Evaluación por cortocircuito 

La evaluación por cortocircuito hace uso de distintos operadores lógicos: 
*   `||` (OR)
*   `&&` (AND)
*   `??` (Nullish Coalescing)

### Resumen rápido de evaluación

| Operación | Resultado |
| :--- | :--- |
| **`valor1 || valor2`** | Retorna el primer valor **truthy** que encuentre. |
| **`valor1 && valor2`** | Retorna el primer valor **falsy** que encuentre. |
| **`valor1 ?? valor2`** | Retorna el primer valor **no-nullish** (ni `null` ni `undefined`). |

### Operador || (OR)

```javascript
const personas = JSON.parse(localStorage.getItem("personas")) || [];
```

En este caso, el array `personas` tiene dos posibles valores. Si el primero es un valor **falsy**, se retorna el segundo (un array vacío). Si ambos son falsy, se retorna el último valor evaluado.

Para recordar los valores **falsy**: `false`, `null`, `undefined`, `0`, `""` (string vacío) y `NaN`. Todo lo que no sea uno de estos valores es **truthy**. Los valores **nullish** son específicamente `null` y `undefined`.

```javascript
console.log(false || "Miguel");  	// "Miguel" (false es falsy)
console.log(null || "hola");   	    // "hola" (null es falsy)
console.log(undefined || true);     // true (undefined es falsy)
console.log(0 || 42);          	    // 42 (0 es falsy)
console.log("" || "default");  	    // "default" ("" es falsy)
console.log(NaN || 666);  		    // 666 (NaN es falsy)
console.log("JS" || "CSS");		    // "JS" ("JS" es truthy)
```

### Operador && (AND)

Este operador funciona de forma inversa al `||`. Retorna el primer valor **falsy** que encuentre. Si no encuentra ninguno, retorna el último valor evaluado.

```javascript
console.log("Hola" && "Mundo");  	// "Mundo" (ambos son truthy, retorna el último)
console.log(0 && "Mundo");       	// 0 (0 es falsy)
console.log(5 && undefined);       	// undefined (5 es truthy, undefined es falsy)
```

### Operador ?? (Nullish Coalescing)

Este operador solo usa el valor derecho si el izquierdo es `null` o `undefined`. Es decir, devuelve el primer valor **no-nullish**.

```javascript
console.log(0 ?? "default");         // 0 (0 no es null ni undefined)
console.log("" ?? "default");        // "" ("" no es null ni undefined)
console.log(null ?? "default");  	 // "default"
console.log(undefined ?? "default"); // "default"
```

## Asignación Lógica

La asignación lógica sirve como atajo para asignar valores basados en condiciones específicas, combinando el operador lógico con el de asignación (`=`).

| Operación | Descripción |
| :--- | :--- |
| **`variable ||= valor`** | Asigna `valor` si la variable es **falsy**. |
| **`variable &&= valor`** | Asigna `valor` si la variable es **truthy**. |
| **`variable ??= valor`** | Asigna `valor` si la variable es **nullish**. |

**Ejemplos:**

```javascript
let x = false;
x ||= 10;           // Si x es falsy, le asignamos 10
console.log(x);     // 10

let y = 5;
y &&= 20;           // Si y es truthy, le asignamos 20
console.log(y);     // 20

let z = null;
z ??= "default";    // Si z es nullish, le asignamos "default"
console.log(z);     // "default"
```

## Optional Chaining (?.)

Permite acceder a propiedades de objetos anidados sin lanzar un error si una parte de la cadena es `null` o `undefined`. Devuelve `undefined` en lugar de romper la ejecución.

```javascript
const persona = {
	nombre: "Carlos",
	direccion: { ciudad: "Buenos Aires" },
};

console.log(persona.direccion?.ciudad);  // "Buenos Aires"
console.log(persona.trabajo?.empresa);   // undefined (¡Sin error!)
```

Sin el operador `?.`, el intento de acceder a `persona.trabajo.empresa` lanzaría un `Uncaught TypeError` porque no se puede leer una propiedad de algo que no existe.

## Doble Negación (!!)

El operador `!!` se usa para transformar cualquier valor en un booleano (`true` o `false`). El resultado dependerá de si el valor original es *truthy* o *falsy*.

```javascript
let valor1 = "hola"; // truthy
let valor2 = 0;      // falsy

let esVerdadero = !!valor1; // true
let esFalso = !!valor2;     // false
```