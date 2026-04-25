---
title: "Funciones, ciudadanos de primera clase"
description: "Funciones en JavaScript"
---


## Funciones en JavaScript

- Aunque suene confuso, en JavaScript las funciones -además de ser funciones- también son OBJETOS. Y como también son objetos, pueden tener propiedades y métodos.  Pero no va a ser algo esencial en este apunte, eso tiene que ver más con el tema de los objetos y los prototipos.

- Algo a saber de entrada, es que en JavaScript todas las funciones sin return retornan undefined.

- Como dijimos en un apunte anterior, hay dos tipos de funciones, las declaradas y las expresadas:

```typescript
function funcion1() {
    console.log("Soy una función declarada"); 
}

var funcion2 = function() {
    console.log("Soy una función expresada")
}
```
- Por cierto, las funciones expresadas también pueden ser funciones anónimas. De hecho, ese ejemplo de ahí es una función expresada y anónima. Es así porque si bien funcion2 es el nombre de la variable que apunta a la función, esa función que le estamos asignando es una función anónima, ya que esa no tiene nombre.

- **Sería distinto que hiciéramos esto**: 

```typescript
function saludar() {
    console.log("Hola!");
}

var funcion2 = saludar;
```
- En ese caso, funcion2 es una función expresada, como lo era antes. Pero esa función expresada no es una función anónima, ya que saludar es una función declarada en otro lugar en el código. O sea, no es anónima.


### Arrow Functions

- **Las arrow functions o expresiones lambda**: () => {  }, son funciones expresadas y anónimas. Las vamos a explicar en otro apunte, pero no tienen nada de especial realmente. Sólo son una forma más rápida de escribir funciones, es una diferencia de sintaxis, no de funcionamiento.


## Comportamiento de las funciones en JavaScript

- En JavaScript, las funciones son ciudadanos de primera clase. Es decir:

- Se pueden asignar a variables
- Se pueden pasar como argumentos
- Se pueden retornar desde otras funciones

```typescript
function miFuncion() {
	console.log("Hola, estoy funcionando");
}

var pepe  = miFuncion;
```
- En este caso, "pepe" es una variable puntero a función, ya que le estamos asignando la DDM de una función. Es decir, le asignamos "miFuncion" sin los paréntesis. 

- Este sería el primer punto del por qué una función es un ciudadano de primer clase. Porque se pueden asignar a variables.

```typescript
miFuncion();  	// Muestra "Hola, estoy funcionando"
pepe(); 		// Muestra "Hola, estoy funcionando"
```
- Acá, como pepe();  tiene los paréntesis, estamos haciendo que INVOQUE la función a la que está apuntando. Es decir, a la función llamada miFuncion.

- El uso de " () " significa invocación. Cuando ponemos () al final de una variable que apunta a una función, lo que hacemos es directamente invocarla.


## Funciones pasadas como argumentos [Concepto callback]

- Como dijimos, una función un ciudadano de primera clase. Y el segundo motivo de esto es que pueden ser pasadas como argumentos. Veamos:

```typescript
function operar(funcion, a, b) {
    return funcion(a, b);
}

function sumar(x, y) {
    return x + y;
}

console.log(operar(sumar, 5, 10)); // Muestra 15
```
- En este caso, operar recibe como primer argumento una función. Es decir, estamos pasando una función como argumento a otra función. A esto también se lo llama "CALLBACK". Es decir, cuando una función recibe como argumento a otra función, a esa función que recibe como argumento se la llama "callback".


## Funciones que retornan funciones

- Este caso también es posible, y es el tercer motivo de por qué una función es un ciudadano de primera clase. Veamos cómo funcionaría esto:

```typescript
function funcioncita() {
    console.log("Hola");
}

function retornadorDeFuncion(funcion) {
    return funcion;
}

let contenedorFuncion = retornadorDeFuncion(funcioncita);

contenedorFuncion();    // Va a ejecutar: console.log("Hola");
```
- En este caso, creamos una función que muestra un Hola por consola, y otra función la cual recibe una función como argumento, y la retorna.

- Hacemos la prueba, y vemos que el retorno de una función, dentro de otra, funciona correctamente.

- ¿Y cómo es posible que hayamos hecho "contenedorFuncion()"? Muy fácil, nosotros creamos la variable contenedorFuncion y le asignamos un valor. Ese valor que le asignamos, fue lo que retornó retornadorDeFuncion. Es decir, le retornamos la referencia de la función llamada funcioncita.

- Y después, al hacer uso de " () ", invocamos la función a la cual está apuntando/referenciando. Ya que como dijimos al principio, el uso de " () " significa invocación. 


```typescript
retornadorDeFuncion(funcioncita)();  // Muestra "Hola"
```
- Y si encima hacemos esto, nos ahorramos un paso. Porque estamos literalmente invocando a la función que está retornando retornadorDeFunción.

- **Quizá es confuso, pero es fácil de ver**: 

```typescript
retornadorDeFuncion(funcioncita) = funcioncita;
```
- Entonces, eso significa que cada vez que leemos retornadorDeFuncion(funcioncita), estamos leyendo "funcioncita". Por eso, si le agregamos el () al final, estaríamos literalmenta haciendo funcioncita();


## Callbacks

- Todo esto que vimos recién en este apunte es la clave para entender los callbacks, ya que hay funciones de JavaScript que RECIBEN FUNCIONES COMO PARÁMETROS. Es decir, lo que vimos en el segundo punto. Y esa función que se pasa por parámetro para ser ejecutada, se la suele llamar CALLBACK.

```typescript
function saludar() {
    console.log("¡Hola desde el callback!");
}

function ejecutarCallback(callback) {
    callback(); // Ejecuta la función pasada como argumento
}

ejecutarCallback(saludar); // Muestra "¡Hola desde el callback!"
```
## Parámetro rest (...) en funciones

- El parámestro rest permite que una función reciba un número indefinido de argumentos, en forma de array. Es una forma moderna (ES6) de manejar muchos parámetros sin tener que acceder a "arguments", que era una característica más antigua para hacer esto, y que hoy en día no es la opción recomendada.

```typescript
function miFuncion(...args) {
  console.log(args); // args es un array
}

miFuncion(1, 2, 3); // Muestra [1, 2, 3] 
```
- **Ojo**: Solo puede haber un único parámetro rest en una función y debe estar al final de la lista de parámetros.

```typescript
function saludar(saludo, ...nombres) {
  nombres.forEach(nombre => console.log(`${saludo}, ${nombre}!`));
}

saludar("Hola", "Juan", "Ana", "Luis"); // Va a hacer 3 console logs, saludando a cada nombre
```
- En este caso, "nombres" va a ser un array que contiene ["Juan", "Ana", "Luis"]. 