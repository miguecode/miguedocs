---
title: "Arrow Functions (Expresiones Lambda)"
description: "*** Antes de ver Arrow Functions... ***"
---

*** Antes de ver Arrow Functions... ***

## Explicación previa entre funciones declaradas y expresadas

Como dijimos anteriormente, en JavaScript hay 2 tipos de funciones: declaradas y expresadas.

```javascript
function funcion1() {
    console.log("Soy una función declarada"); 
}

const funcion2 = function() {
    console.log("Soy una función expresada");
}
```

Las arrow function entrarían en el segundo grupo, las funciones expresadas. Y de hecho, las funciones expresadas pueden -o no- tener una función anónima asignada. En este caso, está pasando eso. Si bien `funcion2` es una variable con nombre, la función que le estamos asignando NO tiene nombre. Entonces, se le dice anónima. Esto podría no ser así, si nosotros hiciéramos esto:

```javascript
function saludar() {
    console.log("Hola!");
}

const funcion2 = saludar;
```

En ese caso, `funcion2` es una función expresada, como lo era antes. Pero esa función expresada no es una función anónima, ya que `saludar` es una función declarada en otro lugar en el código. O sea, no es anónima.

## Arrow Functions

Las Arrow Functions (también llamadas funciones flecha o expresiones lambda) son una forma más corta y moderna de escribir funciones en JavaScript. Respecto a la explicación previa, las arrow functions son funciones expresadas y anónimas por naturaleza, es decir, no tienen nombre.

Las Arrow Functions reemplazan la palabra clave `function` con `=>` (flecha).

```javascript
// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Arrow Function 
const sumarArrow = (a, b) => {
  return a + b;
};
```

Si el cuerpo de la función tiene solo una línea, podemos omitir las llaves `{ }` y el `return`. Esto se llama Short-Circuit Return y es útil para hacer todavía más rápida la escritura.

```javascript
const sumar = (a, b) => a + b;
```

De esa forma, estamos haciendo lo mismo pero todavía más corto. Si lo escribimos en una línea, le podemos sacar las llaves y la palabra return. Lo que se va a retornar va a ser literalmente lo que escribamos.

Si una Arrow Function no recibe parámetros, se usan los paréntesis vacíos `( )`, así:

```javascript
const saludar = () => "Hola, mundo!";
console.log(saludar()); // Muestra "Hola, mundo!"
```

Si una Arrow Function tiene UN sólo parámetro, podemos obviar los paréntesis. Si tiene más de uno, los paréntesis son obligatorios.

```javascript
const cuadrado = num => num * num;
console.log(cuadrado(4)); // Muestra 16
```

Las Arrow Function, a diferencia de las funciones tradicionales, NO tienen `this` propio. Entonces, su `this` va a ser el del scope padre que la esté invocando.

Las Arrow Function son ideales para callbacks, es decir, para ser pasadas como parámetro hacia otras funciones. O sea que son ideales para métodos de arrays como `map`, `filter`, `sort`, `reduce`, `splice`, y demás.