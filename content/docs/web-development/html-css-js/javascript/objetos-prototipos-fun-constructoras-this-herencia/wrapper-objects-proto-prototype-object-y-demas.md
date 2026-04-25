---
title: "Wrapper Objects, __proto__, prototype, Object, y demás"
description: "Tipos de dato con Mayúscula (Wrapper Objects)"
---


## Tipos de dato con Mayúscula (Wrapper Objects)

- Los Wrapper Objects, es decir, objetos envoltorio, son FUNCIONES CONSTRUCTORAS. 

- La mejor forma de entender qué son los tipos de datos escritos con mayúscula inicial, es entender que no son ni más ni menos que FUNCIONES CONSTRUCTORAS. Y recordemos que, en JavaScript, las funciones constructoras son sinónimo de CLASES.

- Por ende, en otras palabras, también podríamos decir que son Clases. Porque como sabemos, las clases en JavaScript son azúcar sintáctico de las funciones constructoras.


##  Tipos de datos con versión función constructora

- **Por el lado de los datos no primitivos, son**: Object, Array y Function.

- **Por el lado del os datos primitivos, son**: Number, String, Boolean, Symbol y BigInt.

- Tanto Undefined como Null, se quedan afuera. Ellos no tienen su versión función constructora.

- Así como dijimos que son clases, bueno. También tienen herencia. Y la realidad es que TODOS son heredados de la clase Object. Es decir, la función constructora Object va a ser padre de las demás: Number, String, Boolean, Function, Array, Symbol y BigInt.

- **También hay que decir una cosa**: Como sabemos, en JavaScript, una función también es un objeto. Entonces, así como Object, Array, Function, Number, etc. son funciones constructoras, también son objetos. Por eso es que se los llama Wrapper Objects (Objetos Envoltorio). Entonces, como también son objetos, ellos también tienen sus propios métodos y propiedades. Una de esas propiedades es "prototype". 

- Eso puede sonar confuso pero en realidad es fácil de verlo: Así como en C# podíamos crear clases estáticas como Calculadora para que tenga métodos estáticos (Calculadora.sumar(), Calculadora.restar()), en JavaScript estaríamos haciendo lo mismo con estas clases. Object se podría entender como una clase estática la cual tiene métodos y propiedades estáticas. Y lo mismo con las demás; Number, String, Function, Array, etc.

- Más ejemplos de propiedades de la clase Object pueden ser "entries", "keys", o "values". Son 3 propiedades que lo que contienen son arrays. Esto lo vamos a ver en otro apunte. 



## Explicación

```typescript
let palabra = "Hola";
console.log(palabra.length); // Muestra 4
console.log(palabra.toUpperCase()); // Muestra "HOLA"
```
- En este caso, si "palabra" es un string, entonces, ¿Por qué tiene acceso a la propiedad "length" y al método toUpperCase()? Es decir, si string es un dato primitivo, ¿Cómo puede ser que contenga propiedades y métodos?

- Eso es así ya que, cuando accedemos a .length o a .toUpperCase(), JavaScript lo que hace es convertir temporalmente el string a un objeto String, y después lo descarta.

- Pero, ¿Cómo que a un objeto String? Sí, esto es así porque "String", como dijimos antes, es una función constructora, es decir, una clase. Por ende, lo que pasa es que "palabra" se convierte momentáneamente en una INSTANCIA de String. O sea, se convierte en un objeto de tipo String. Ya que es creado mediante la función constructora (clase) String, la cual contiene a la propiedad "length" y al método "toUpperCase". Y por eso es que los puede usar.

```typescript
let numero = new Number(5);		// Usamos la función constructora acompañada de "new"
let palabra = new String("Hola");	// Usamos la función constructora acompañada de "new"
let valor = new Boolean(false);		// Usamos la función constructora acompañada de "new"
```
- Estos son ejemplos de variables a las cual le estamos asignando OBJETOS. ¿Y cómo? Usando las funciones constructoras Number, String y Boolean. Las cuales, como sabemos, son sinónimo de CLASES.

- Hay que saber que esto NO ES RECOMENDABLE. Es una pésima práctica porque pude generar errores y casi nunca va a tener sentido hacerlo. NO hay que usar new Number(), ni new String(), ni new Boolean().

```typescript
/* Usando el operador "new" */
let num = new Number(5);
console.log(num);  // Muestra [Number: 5]
console.log(typeof num);  // Muestra "object"
console.log(num instanceof Number);  // Muestra true

/* Sin usar el operador "new" */
let num2 = Number(5);
console.log(num2);  // Muestra 5
console.log(typeof num2);  // Muestra "number"
console.log(num2 instanceof Number);  // Muestra false

Forma usada		¿Qué devuelve?	   Tipo de dato
---------------------------------------------------------------------------------
new Number(5)	Objeto envoltorio	   "object" (instancia de Number)
Number(5)		Número primitivo	   "number" (valor 5)
```
## __proto__ y prototype

- Como dijimos antes, los elementos tienen una propiedad llamada __proto__. Y ¿Qué tiene esa propiedad? La propiedad __proto__ lo que contiene es una referencia al objeto "prototype". Y... ¿Dónde está ese objeto llamado prototype? Está en la que debería ser su clase.

- **Es decir**: 

```typescript
let numeros = [1, 2, 3];
console.log(numeros.__proto__); // Muestra métodos como map(), filter(), etc.
```
- En este caso, numeros es un array así que tiene la propiedad __proto__. Esta propiedad apunta directamente a la propiedad "prototype" del objeto/clase Array. Es decir, apunta a: Array.prototype. Por ende, tanto __proto__ como Array.prototype son exactamente lo mismo. Son dos objetos que apuntan a la misma dirección de memoria.

- Entonces, numeros es un array. Y de hecho, es una instancia de la función constructora/clase "Array". Y la función constructora/clase "Array", tiene una propiedad llamada prototype. Bueno, la instancia de Array, que es numeros, tiene una propiedad llamada __proto__. Esa propiedad __proto__ apunta a Array.prototype. Entonces, son lo mismo. Los dos objetos "numeros.__proto__" y "Array.prototype" son lo mismo.

- Como dijimos anteriormente, todas las funciones constructoras heredan de Object, la cual también es una función constructora. Y lo que heredan son muchas propiedades y métodos, pero agregándole sus propios nuevos métodos y funciones.

- Por ejemplo, como String hereda de Object, la propiedad "prototype" de String tiene muchas cosas que también tiene Object. Pero la gracia es que le agrega nuevas. Por ejemplo, le agrega el método toUpperCase. Y Array, que hereda de Object, tiene sus propios métodos también, como map() y filter().

- Y esto pasa con todos los los demás. Todos heredan de Object, y le agregan sus propios métodos y propiedades a la propiedad "prototype". 

```text
console.log(Object.prototype); // Es el prototipo raíz
console.log(Array.prototype); // Contiene los métodos y propiedades de arrays
console.log(Function.prototype); // Contiene propiedades y métodos como call(), apply(), bind()
```
## Para verlo más claro:

Object.prototype → (Object es la "clase" padre de todos, y contiene al prototipo raíz)
```text
↑
```
Array.prototype (Hereda de Object y agrega métodos como map(), filter(), reduce())
```text
↑
```
[1,2,3] (Una instancia de Array, la cual tiene una propiedad __proto__ que apunta a Array.prototype)

- Como acabamos de decir al final, [1, 2, 3] tiene una propiedad __proto__. Bueno, esa propiedad __proto__ es la que va a contener a los métodos map, filter y reduce.


## ¿Cuál es la diferencia entre __proto__ y prototype?

- En realidad, ninguna. Es prácticamente el mismo objeto visto desde 2 lugares distintos. La propiedad __proto__ lo que hace es apuntar al objeto prototype. Por ende, son dos variables que apuntan al mismo objeto en memoria. No hay mucho más que eso.

- Para demostrar que __proto__ y prototype son lo mismo, vamos a verlo más claro todavía:

```typescript
function Persona(nombre) {    // Función constructora/clase llamada "Persona"
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {    // Le agregamos un método "saludar"
  console.log(`Hola, soy ${this.nombre}`);
};

const juan = new Persona("Juan");    // Creamos una instancia de "Persona"

console.log(juan.__proto__ === Persona.prototype); // Muestra true
console.log(Persona.prototype.saludar === juan.__proto__.saludar); // Muestra true
```
- Como vemos, juan.__proto__ apunta a Persona.prototype. Es el mismo objeto visto desde lugares distintos. Por eso las comparaciones dan "true".

- Y pasa exactamente lo mismo con todos los demás Wrapper Objects, como Function:

```text
console.log(Function.prototype.__proto__ === Object.prototype); // true
```
## El método Object.getPrototypeOf()

- Este método retorna el __proto__ de un objeto. Es recomendable hacer esto en vez de simplemente acceder con el operador " . ", veamos:

```typescript
const obj = { };
console.log(obj.__proto__ === Object.getPrototypeOf(obj)); //  Muestra true
```
- Como vemos, el método Object.getPrototype(objeto), retorna el __proto__ del objeto. Es exactamente lo mismo. Pero a partir de ES6, se empezó a recomendar usar el método en vez de sólo hacer " .__proto__", porque es más seguro.

```typescript
const prototipoDelObjeto = objeto.__proto__;  // Forma antigua (no recomendada)
const prototipoDelObjeto = Object.getPrototypeOf(objeto);  // Forma moderna (recomendada)
```
## Y al final, ¿Qué pasa con Symbol y con BigInt?

- A estos los nombramos poco, pero porque son mucho menos comunes. Ellos también son tipos de datos primitivos como Number, String y Boolean. Y por ende, también tienen su versión "Object Wrapper" (función constructoria/clase). Así que todo lo explicado anteriormente se aplica también a estos dos. Aunque eso sí, su función constructora usando "new" es un poco distinta. No es como la de los otros. Pero por lo demás, sigue siendo la misma lógica explicada.


## Propiedad constructor

- Cada objeto en JavaScript tiene una propiedad llamada constructor, la cual apunta a la función constructora que lo creó. Veamos:

```typescript
let num = 42;
console.log(num.constructor === Number); 	// Muestra true

let arr = [1, 2, 3];
console.log(arr.constructor === Array);	 // Muestra true
```