---
title: "Intérprete de JS y el Hoisting (Levantamiento)"
description: "Entendiendo el proceso de Hoisting y cómo el motor de JS procesa el código"
---

## 🏗️ ¿Qué es el Hoisting?

El **Hoisting** (o levantamiento) es un comportamiento del intérprete de JavaScript que consiste en mover virtualmente las declaraciones de variables y funciones a la parte superior de su ámbito (scope) antes de ejecutar el código.

Es vital entender que el Hoisting solo levanta las **declaraciones**, no las **asignaciones**.

---

## 📦 Hoisting en Variables

El comportamiento varía drásticamente según la palabra clave que utilicemos:

### 1. Con `var` (El clásico)
Cuando usamos **`var`**, la declaración se eleva y se inicializa con `undefined`.

```javascript
console.log(nombre); // undefined (No da error, pero no tiene valor aún)
var nombre = "Migue";
console.log(nombre); // "Migue"
```

### 2. Con `let` y `const` (Moderno)
También sufren hoisting, pero **no se inicializan**. Esto genera lo que se conoce como **TDZ** (Temporal Dead Zone). Si intentas acceder a ellas antes de la declaración, obtendrás un error.

```javascript
console.log(puntos); // ❌ Uncaught ReferenceError
let puntos = 100;
```

---

## ⚙️ Hoisting en Funciones

Aquí es donde vemos la diferencia real entre los dos tipos de funciones:

### 1. Funciones Declaradas
Se elevan por completo (definición y cuerpo). Puedes llamarlas antes de haberlas escrito en el archivo.

```javascript
saludar(); // ✅ "Hola!" (Funciona gracias al hoisting total)

function saludar() {
  console.log("Hola!");
}
```

### 2. Funciones Expresadas (Anonymous / Arrow)
Se tratan como variables. Si usas `var`, la variable estará "levantada" pero valdrá `undefined`, por lo que al intentar llamarla como función dará un error.

```javascript
despedir(); // ❌ Uncaught TypeError: despedir is not a function

var despedir = function() {
  console.log("Chau!");
};
```

---

## 📋 Resumen de Comportamientos

| Tipo | ¿Sufre Hoisting? | ¿Se puede usar antes? | Valor inicial |
| :--- | :--- | :--- | :--- |
| **`function`** (Declarada) | **Sí** | **Sí** | La función completa |
| **`var`** | Sí | Sí | `undefined` |
| **`let` / `const`** | Sí | **No** (TDZ) | Nada (Error) |
| **Funciones Expresadas** | Depende de la variable | No | `undefined` o Error |

---

> [!IMPORTANT]
> Para evitar confusiones y bugs difíciles de rastrear, la mejor práctica es **siempre declarar tus variables y funciones al inicio de su scope** y priorizar el uso de `const` y `let`.

---

> [!NOTE]
> El Hoisting no es algo que realmente "mueva" el código de lugar físicamente; es una forma de entender cómo el motor de JavaScript reserva espacio en memoria durante la fase de compilación/barrido antes de ejecutar la lógica línea por línea.