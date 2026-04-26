---
title: "Funciones, ciudadanos de primera clase"
description: "Funciones en JavaScript"
---

## Funciones en JavaScript

Aunque suene confuso, en JavaScript las funciones, además de ser funciones, también son **OBJETOS**. Y como también son objetos, pueden tener propiedades y métodos. Pero no va a ser algo esencial en este apunte, eso tiene que ver más con el tema de los objetos y los prototipos.

Algo a saber de entrada es que en JavaScript todas las funciones sin `return` retornan `undefined`.

Como dijimos en un apunte anterior, hay dos tipos de funciones: las **declaradas** y las **expresadas**.

```javascript
// Función declarada
function funcion1() {
    console.log("Soy una función declarada"); 
}

// Función expresada
var funcion2 = function() {
    console.log("Soy una función expresada");
};
```

Por cierto, las funciones expresadas también pueden ser **funciones anónimas**. De hecho, ese ejemplo de ahí es una función expresada y anónima. Es así porque si bien `funcion2` es el nombre de la variable que apunta a la función, esa función que le estamos asignando es una función anónima, ya que ella no tiene nombre.

Sería distinto que hiciéramos esto: 

```javascript
function saludar() {
    console.log("Hola!");
}

var funcion2 = saludar;
```

En ese caso, `funcion2` es una función expresada, como lo era antes. Pero esa función expresada no es una función anónima, ya que `saludar` es una función declarada en otro lugar en el código. O sea, no es anónima.

### Arrow Functions

Las **arrow functions** o expresiones lambda: `() => { }`, son funciones expresadas y anónimas. Son una forma más rápida de escribir funciones; es una diferencia de sintaxis, no de funcionamiento (aunque tienen particularidades con el scope de `this`).

## Comportamiento de las funciones en JavaScript

En JavaScript, las funciones son **ciudadanos de primera clase**. Esto significa que:

1.  Se pueden asignar a variables.
2.  Se pueden pasar como argumentos a otras funciones.
3.  Se pueden retornar desde otras funciones.

```javascript
function miFuncion() {
	console.log("Hola, estoy funcionando");
}

var pepe = miFuncion;
```

En este caso, `pepe` es una variable que apunta a la función, ya que le estamos asignando la referencia de una función. Es decir, le asignamos `miFuncion` sin los paréntesis. Este sería el primer punto de por qué una función es un ciudadano de primera clase.

```javascript
miFuncion();  	// Muestra "Hola, estoy funcionando"
pepe(); 		// Muestra "Hola, estoy funcionando"
```

Acá, como `pepe()` tiene los paréntesis, estamos haciendo que **INVOQUE** a la función a la que está apuntando. El uso de `()` significa invocación. Cuando ponemos `()` al final de una variable que apunta a una función, lo que hacemos es directamente invocarla.

## Funciones pasadas como argumentos (Callbacks)

El segundo motivo por el cual son ciudadanos de primera clase es que pueden ser pasadas como argumentos. Veamos:

```javascript
function operar(funcion, a, b) {
    return funcion(a, b);
}

function sumar(x, y) {
    return x + y;
}

console.log(operar(sumar, 5, 10)); // Muestra 15
```

En este caso, `operar` recibe como primer argumento una función. Estamos pasando una función como argumento a otra función. A esto se lo llama **CALLBACK**. Cuando una función recibe como argumento a otra función, esa función recibida es el callback.

## Funciones que retornan funciones

Este caso también es posible, y es el tercer motivo. Veamos cómo funcionaría esto:

```javascript
function funcioncita() {
    console.log("Hola");
}

function retornadorDeFuncion(funcion) {
    return funcion;
}

let contenedorFuncion = retornadorDeFuncion(funcioncita);

contenedorFuncion();    // Va a ejecutar: console.log("Hola");
```

¿Cómo es posible que hayamos hecho `contenedorFuncion()`? Muy fácil: creamos la variable `contenedorFuncion` y le asignamos lo que retornó `retornadorDeFuncion`. Es decir, le retornamos la referencia de la función llamada `funcioncita`.

Y si hacemos esto, nos ahorramos un paso:

```javascript
retornadorDeFuncion(funcioncita)();  // Muestra "Hola"
```

Estamos invocando directamente a la función que está retornando `retornadorDeFuncion`. Cada vez que leemos `retornadorDeFuncion(funcioncita)`, el resultado es la referencia a `funcioncita`. Por eso, si le agregamos el `()` al final, estaríamos haciendo `funcioncita()`.

## Parámetro rest (...) en funciones

El parámetro **rest** permite que una función reciba un número indefinido de argumentos en forma de array. Es la forma moderna (ES6) de manejar múltiples parámetros sin tener que acceder a `arguments`.

```javascript
function miFuncion(...args) {
  console.log(args); // args es un array
}

miFuncion(1, 2, 3); // Muestra [1, 2, 3] 
```

> [!IMPORTANT]
> Solo puede haber un único parámetro rest en una función y debe estar al final de la lista de parámetros.

```javascript
function saludar(saludo, ...nombres) {
  nombres.forEach(nombre => console.log(`${saludo}, ${nombre}!`));
}

saludar("Hola", "Juan", "Ana", "Luis"); 
// Va a hacer 3 console logs: "Hola, Juan!", "Hola, Ana!", "Hola, Luis!"
```

En este caso, `nombres` va a ser un array que contiene `["Juan", "Ana", "Luis"]`.