---
title: "Función Constructora y Clases. Son lo mismo"
description: "Funciones constructoras y Clases"
---


## Funciones constructoras y Clases

- Originalmente, en JavaScript no existían las clases como las conocemos en otros lenguajes. Es decir, no existía la sintaxis para crear una clase. Entonces, lo que se hacía era usar funciones constructoras, que emulan la misma función que tendría una clase en otro lenguaje de programación. 

- Pero a partir de ECMAScript 6, JavaScript incluyó la sintaxis de clase, para hacer todo más fácil, legible y ordenado. Pero en realidad, esas clases que agregaron no son más que azúcar sintáctico. Es decir, una capa de código sencillo que tapa a otro más complejo. Entonces, las clases de JavaScript, por debajo, siguen siendo funciones constructoras.

- Esto quiere decir que, en JavaScript, "función constructora" es sinónimo de "clase". Son lo mismo.

- También es importante entender que una función constructora no deja de ser una simple función. Lo único que la diferencia de una función común es su propósito, pero técnicamente son lo mismo. Lo que hace la diferencia a nivel técnico es que a las funciones constructoras se las invoca con el operador "new" adelante, y eso es lo que las hace cambiar de funcionalidad. 


## Ejemplo de Función Constructora (La antigua forma de crear una clase)

```typescript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

const juan = new Persona("Juan", 30);
juan.saludar();
```
- A diferencia de las funciones comunes, las funciones constructoras se escriben en PascalCase (primera letra mayúscula), y sus nombres son sustantivos en vez de verbos. 

- En este ejemplo, creamos una función constructora llamada Persona. Lo que hace es recibir parámetros y asignarlos. Después, al usar "new", retorna una instancia de lo creado. Por eso se le llama función constructora, es como un constructor en C#.

- Si no usamos el "new" para invocar la función, no estamos haciendo nada. Es decir, no tendría sentido llamarla función constructora.

- Uno de los problemas de "crear clases" de esta forma, era que había que manipular al prototype para hacer ciertas cosas. Por ejemplo, para agregarle métodos -de forma eficiente-. En realidad, los métodos podrían agregarse dentro de la función constructora, pero sería una mala práctica por un tema de prototipo y reutilización. Así que es mejor ponérselos por fuera a su propiedad "prototype", que es lo que hicimos.

- Esto último es así porque, si agregamos métodos dentro de la función constructora en vez de en el prototype, cada instancia tendría su propia copia del método, ocupando más memoria. Al definirlo en el prototype, todas las instancias comparten la misma referencia al método.

- Igual, eso de agregarle los métodos dentro del scope de la función constructora, nos puede servir para que esos métodos sean estáticos. Es decir, métodos de clase y no de instancia. (Persona.caminar()).

- Como vemos, también hacemos uso de "this". Eso es necesario en las funciones constructoras y también en las clases, como vamos a ver ahora. Aún así, el tema del "this" lo vamos a explicar en otro apunte.

- Si bien todo esto de las funciones constructoras funciona perfectamente, se volvió anticuado, y fue reemplazado por la sintaxis de clase en ES6.


## La sintaxis de Clase (Nueva en ES6)

```typescript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const juan = new Persona("Juan", 30);
juan.saludar();
```
- Como vemos acá, usamos la palabra clave "class", y dentro le ponemos un constructor. Además, tenemos la posibilidad de declarar métodos dentro de su scope -de forma eficiente-, y no es necesario que lo hagamos por fuera y manipulando al prototype. Entonces, esto es mucho más legible.

- También cabe recalcar que la sintaxis de "class" facilita la herencia. Ya que podemos usar "extends" y "super", algo que en funciones constructoras requería todavía más manipulación del prototype, y también el uso del método "call", "apply" o "bind".

- **Que quede claro**: Las dos sintaxis (función constructora y clase) logran exactamente LO MISMO. La diferencia es sólo de sintaxis: la versión con class es más fácil de leer y de escribir, y por eso fue creada en ES6. ¨Pero internamente sigue funcionando como una función constructora. 


## Ejemplo de clase Animal

```typescript
class Animal {
	constructor(tipo, edad, sexo) {
		this.tipo = tipo;
		this.edad = edad;
		this.sexo = sexo;
	}

	saludar() {
        		console.log(Tipo: ${this.tipo}- Sexo: ${this.sexo} - Edad: ${this.edad}`);
    	};

	dormir() {
        		console.log("ZzZzZ");
    	}
}

const animal1 = new Animal("vaca", 3, "femenino");
console.log(animal1);
```
- Acá vamos a ver que animal1 tiene el prototype Object. Y hay una diferencia respecto a las funciones constructoras: el constructor que aparece dentro de animal1, ya no es la función constructora Animal. Sino que ahora es la clase Animal. Es decir, ya no es una "function" sino que ahora es una "class".

- Igualmente, sigue siendo exactamente lo mismo que en la función constructora, pero usando una clase. El prototype sigue existiendo. Por eso se dice que la sintaxis de una clase no es más que "azúcar sintáctico", es decir, hacemos lo mismo pero más fácil y cómodo.

- Los métodos se escriben sin "this" y se declaran directamente escribiéndolos, es decir, sin poner saludar = function()... En el constructor -sí- hay que usar el this.

- **Respecto al constructor, es igual que en C**: cuando nosotros hacemos "new Animal()", lo que estamos haciendo literalmente es ejecutar el constructor de Animal. Y ¿Qué hace el constructor? De forma transparente, ejecuta la famosa función "malloc" internamente. Que es la que se encarga de pedir espacio en la memoria dinámica al SO.

- Nosotros a Animal le podríamos agregar métodos estáticos, como Animal.cazar(), Animal.comer().

- Si Animal es una función constructora, para crearle métodos estáticos haríamos:

```typescript
Animal.comer = function() { console.log("Estoy comiendo"); };
```
- Si Animal es una clase, para crearle métodos estáticos haríamos:

```typescript
class Animal {
	...
	static cazar() { console.log("Soy un método estático de Animal y estoy cazando"); }
}
```
## Herencia

- La forma de aplicar herencia en funciones constructoras y clases tiene diferencias de sintaxis. Así que lo vamos a ver en otros apuntes. En JavaScript no existe la herencia múltiple.