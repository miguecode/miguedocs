---
title: "Closure, práctica no recomendada"
description: "Qué es un Closure y cómo se utilizaba el patrón IIFE para manejar la privacidad en JavaScript antes de los módulos modernos."
---


## Closure

En este apunte vamos a ver los **Closure**, que sirven para capturar el estado de una función en el momento de su ejecución y recordar variables incluso después de que la función padre haya terminado de ejecutarse.

Antiguamente, los closures también se usaban para manejar la reutilización de funcionalidades entre distintos archivos JavaScript mediante el patrón de módulo **IIFE** (*Immediately Invoked Function Expression*). Hoy en día, esta práctica ha sido superada por los **módulos nativos** (`import`/`export`), pero sigue siendo fundamental entender cómo funcionan los closures para comprender la gestión de scopes en JavaScript.

## Ejemplo de un Closure puro

Un closure se crea cuando una función interna accede a variables de su función externa, incluso después de que la función externa haya retornado.

```javascript
function contador() {
    let count = 0;   // Esta variable queda "cerrada" o privada dentro del closure

    return function() {
        count++;
        console.log(count);
    };
}

const miContador = contador(); 
miContador();  // Muestra 1
miContador();  // Muestra 2
miContador();  // Muestra 3
```

En este caso, la variable `count` sigue existiendo dentro de `miContador()`, incluso después de que `contador()` terminó de ejecutarse. Esa es la esencia del closure: la persistencia del ámbito léxico.

## El Patrón de Módulo e IIFE (Más avanzado)

Todo lo que escribimos en un archivo JavaScript global queda disponible en el objeto `window` del navegador. Si tenemos varios archivos `.js` que declaran funciones con el mismo nombre, la última función en ser cargada por el HTML "eclipsará" a las anteriores, lo que puede causar errores difíciles de rastrear.

Para evitar esta contaminación del scope global, se utilizaba el patrón **IIFE**.

### Ejemplo: Módulo de Matemáticas

Creamos un archivo llamado `matematicas.js` y envolvemos todo en una función autoinvocada:

```javascript
const matematicas = (function() {
     // Estas funciones son privadas, no se ven desde afuera
     function sumar(a, b) { return a + b; }
     function restar(a, b) { return a - b; }
     function multiplicar(a, b) { return a * b; }
     function dividir(a, b) { 
        return b !== 0 ? a / b : "Error"; 
     }

     // Retornamos solo lo que queremos hacer público
     return {
	     sumar,
	     restar,
	     multiplicar,
	     dividir
     };
})();
```

**¿Por qué funciona esto?**
La función está entre paréntesis `(function() { ... })` y se cierra con otros paréntesis `()` al final. Esto le indica al intérprete que debe **ejecutarse inmediatamente**.

Ahora, el objeto `matematicas` funciona como una "librería" o clase estática:

```javascript
console.log(matematicas.sumar(4, 5));     // 9
console.log(matematicas.dividir(20, 4));  // 5
```

## Sugar Sintáctico y Modernización

Como mencionamos, usar el patrón IIFE no es la práctica más recomendada hoy en día. Con la llegada de **ES6**, es mucho mejor usar **Módulos nativos**.

Cada año, JavaScript agrega funcionalidades que hacen al lenguaje más "amigable" para el programador. A esto se le llama **Sugar Sintáctico** (*azúcar sintáctico*): características que proporcionan una sintaxis más simple y legible para realizar tareas que ya podíamos hacer antes de forma más compleja. Un ejemplo de esto es la abreviatura de propiedades de objetos: usamos `{ sumar }` en lugar de `{ sumar: sumar }`.