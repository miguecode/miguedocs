---
title: "This, Scopes, Window, Document, Call, Apply y Bind"
description: "El 'this', es decir el 'esto', es en sentido literal. Si dentro de un objeto/función constructora/clase nosotros colocamos una función como esta...:"
---


## This

- El "this", es decir el "esto", es en sentido literal. Si dentro de un objeto/función constructora/clase nosotros colocamos una función como esta...:

```typescript
function retornarThis() {
	return this;
}
```
- Lo que va a pasar es que se retorna a él mismo. Es decir, devuelve el mismo objeto/función constructora/clase que contiene a esa función.

```typescript
const receptor = miObjeto.retornarThis();
console.log(receptor);	// Muestra al objeto miObjeto
```
## Los Scopes

- ¿Qué es un Scope? Un scope (Alcance en español) hace referencia a un bloque de código. Por eso se habla de alcance, porque el "this" dentro de un objeto, tiene alcance dentro de ese mismo objeto. Justamente porque el this aparece ADENTRO del scope del objeto. Es decir, adentro del cuerpo/desarrollo del objeto. { }

```typescript
const objetoUno = { 
	// Esto es el scope del objetoUno
}
```
- ¿Pero qué pasa si nosotros usamos "this" por fuera de un objeto o de una clase? ¿Cuál sería el scope ahí?


## Scope Global

- En JavaScript, el scope global es "window". Eso quiere decir que, mientras estemos fuera del scope de un objeto/función constructora/clase, el scope va a ser window. Por ende, el "this", muestra window. Veamos:

```typescript
const dondeEstamos = this;
console.log(dondeEstamos);		// Muestra window
```
## El objeto window

- Window, además de ser el scope global, también es un objeto. Y es el objeto contenedor de todo en JavaScript. Por ejemplo, window contiene al objeto console. Por ende, nosotros podríamos hacer esto:

```typescript
window.console.log("Hola Mundo");	// Funciona perfectamente
```
- También podríamos hacer esto (si es que estamos en el scope global):

```typescript
this.console.log("Hola mundo"); 	// Funciona perfectamente
```
- Esto quiere decir que todo lo que creemos dentro de window, va a formar parte de él. O sea, si creamos objetos, funciones, clases, arrays, variables... lo que sea, todo va a ser parte del objeto window. Por lo tanto, si nosotros hacemos console.log(window) y lo vemos en la consola de las herramientas de desarrollador, vamos a poder desglosar y ver todo lo que contiene window, incluyendo todo lo que nosotros mismos creamos.

- Además, eso también quiere decir que si yo creara una función, la podría ejecutar así:

```typescript
function miFuncion() { console.log("Hola"); };

miFuncion();   // Funciona correctamente
window.miFuncion();   // Funciona correctamente
```
## La excepción con las arrow function 

- Cuando un objeto tiene como método una función anónima (expresión lambda), el "this" de esa función NO es el objeto en el que está declarada. Sino, que su "this" va a ser el mismo que el del PADRE del objeto. Si nosotros tenemos un objeto declarado en nuestros scope global window, el "this" en una arrow function de ese objeto no va a ser el propio objeto. Va a ser window, que en este caso, sería el padre del objeto.

- Supongamos que tenemos esto en el scope global window:

```typescript
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad} - Estoy en ${this}`);
    },
    despedir: () => { 
        console.log(``````Nombre: ${this.nombre} - Edad: ${this.edad} - Estoy en ${this}`);
    }
}

persona.saludar();  	// "Nombre: Juan - Edad: 30 - Estoy en [object Object]"
persona.despedir();  // "Nombre: undefined - Edad: undefined - Estoy en [object window]"
```
- Como la función despedir es una arrow function, su "this" no va a ser el de "persona", sino que va a ser el de su padre, es decir, window. Y por eso es que muestra "undefined" en el nombre y en edad. Porque lo que hace es buscar a "this.nombre" y a "this.edad", y como en el scope de window no existen, no los encuentra. 


## Perder la referencia del "this" con funciones

```typescript
persona.saludar();   // El this de saludar() es "persona" porque lo estamos invocando directamente

const saludar = persona.saludar;
saludar();   // En este caso, el this de saludar() es "window". Perdimos la referencia
```
- En este segundo caso, nosotros perdemos la referencia del "this" en "saludar" porque es una constante que estamos declarando en el scope global window, por ende mantiene ese this, y no se aplica el de "persona".

- El "this" de una función va a ser el "this" del scope en donde se esté invocando.

```typescript
function ejecutora(callback) {
	callback();
}

ejecutora(persona.saludar);   // El this de la función saludar va a ser window. Mostraría datos undefined
```
- Esto es así ya que estamos invocando a la función mediante la función "ejecutadora". Y "ejecutadora", es una función declarada en window. Y no dentro del objeto persona. Por esto, va a mostrar datos undefined. Recordemos que el término "callback" refiere a una función que es pasada por parámetro a otra función para ser ejecutada.

- Como vimos, esto de perder la referencia es un problema, porque cada vez que la función use el "this", va a estar refiriéndose a valores que no existen, porque su this es distinto al que originalmente querríamos que sea.

- Para resolver esto podemos usar una arrow function. Si bien esto es una solución, NO ES LA IDEAL. 

```typescript
ejecutora( () => {
	persona.saludar();
});
```
- Esto funcionaría para no perder la referencia del "this", por lo que explicamos antes de las arrow function.

- La forma óptima de solucionar esto y manipular correctamente al this es usar los métodos Call, Apply y Bind.


## Métodos Call, Apply y Bind

- Como hemos mencionado anteriormente, en JavaScript las funciones también son objetos. Y como todo objeto, puede tener propiedades y métodos. En este caso, "call", "apply" y "bind" son 3 métodos de toda función.


## Call

- Call le inyecta un this a una función, y la ejecuta. Recibe un parámetro "this" y funciona así:

```typescript
const saludar = persona.saludar;
saludar.call(persona);
// saludar.call(persona, "Chocolate", 23, "Masculino");  // Ejemplo con parámetros 
```
- El primer parámetro que recibe será el this (un objeto con scope {}). El resto de parámetros que reciba, que son opcionales, van a ser los parámetros que va a recibir la función a la que le hacemos call.

- De esta forma, evitamos perder la referencia del objeto persona, porque se lo estamos pasando por parámetro gracias a la función call.

- Si bien en JS no existen las interfaces, esto es parecido a una interfaz.


## Apply

- Hace LO MISMO que "call", pero se diferencia en cómo pasar los parámetros: el primero va a ser el this, y el segundo es un array de parámetros. Esos parámetros van a ser de la función a la que queremos hacerle apply.

```typescript
const presentarse = persona.presentarse;
presentarse.apply(persona, ["Chocolate", 23, "Masculino"]);
```
- Como vemos, "apply" es literalmente lo mismo que apply, pero en vez de pasar los parámetros separados por comas, se pasa un array con todos juntos. Y por ese motivo, este método no se usa tanto.

## Bind

- Bind es distinto a los anteriores. En vez de ejecutar la función, lo que va a hacer es devolver la función pero con el this que le pasemos.

```typescript
const saludar = persona.saludar;			// El this va a ser window
const saludar2 = saludar.bind(persona);		// El this va a ser persona
```
- En este caso, "saludar" va a apuntar a persona.saludar, pero como sabemos, esto va a provocar que pierda la referencia del this. En cambio, "saludar2" también va a apuntar a persona.saludar, pero SIN perder la referencia. Es así porque estamos usando bind, y pasándole el this por parámetro.

- La forma de pasarle parámetros a Bind es igual que Call. Primero se le pasa el this, y después se le pasan los demás parámetros que queramos que pasarle al a función saludar, separados por " , ". Por ejemplo:

```typescript
const saludar2 = saludar.bind(persona, "Chocolate", 23, "Masculino");
```
## El scope/objeto Document

- Document no es lo mismo que "window". Document se crea cuando ya se terminó de renderizar toda la página. En el DOM, el objeto document representa a la etiqueta `<html>`. Es decir, document es un nodo del DOM como cualquier otro, pero es el principal. Es decir, es el nodo raíz del DOM. A partir de él, se van anidando todos los demás nodos, es decir, todas las demás etiquetas HTML. Y document, a su vez, está dentro del objeto window. 

- Por ejemplo, el objeto document es quien va a tener como propiedad un array de forms. Es decir, una lista con todas las etiquetas `<form>` de la página. Esto también lo vamos a hablar en el apunte del DOM.


## Aclaración sobre window

- Como dijimos antes, window es el objeto/scope global. Eso es cierto, pero siempre y cuando estemos trabajando en navegadores. Pero por ejemplo, en entornos como Node.js, no existe window. Y en cambio, globalThis es el universal.

```typescript
console.log(globalThis); 	// Funciona tanto en Node.js como en el navegador
```
- El objeto globalThis va a ser siempre el scope global, independientemente del entorno en el que estemos ejecutando JavaScript. Si es en navegador, globalThis va a ser window, pero en Node, va a ser otro objeto.