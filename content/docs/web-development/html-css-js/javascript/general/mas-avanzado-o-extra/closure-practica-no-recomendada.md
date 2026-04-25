---
title: "Closure, práctica no recomendada"
description: "En este apunte vamos a ver los Closure, que sirven para capturar el estado de una función en el momento de su ejecución y recordar variables incluso después de ..."
---


## Closure

- En este apunte vamos a ver los Closure, que sirven para capturar el estado de una función en el momento de su ejecución y recordar variables incluso después de que la función haya terminado. 

- Y antes, también se usaban para manejar la reutilización de funcionalidades entre distintos archivos JavaScript, usando el patrón de módulo IIFE (Immediately Invoked Function Expression). Para esto último, ya no es óptimo usar los Closure, ya que ahora es mucho mejor usar módulos, los cuales los vamos a ver en otro apunte. Aún así, en este apunte vamos a ver esto del IIFE.


## Ejemplo de un Closure puro

```typescript
function contador() {
    let count = 0;   // Esta variable queda "cerrada" dentro de la función retornada

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
- En este caso, la variable count sigue existiendo dentro de miContador(), incluso después de que contador() terminó de ejecutarse. Esa es la magia del closure.


## Closure con el Patrón módulo IIFE

- Todo lo que escribamos en un archivo JavaScript, cuando lo vinculemos al HTML, lo vamos a tener disponible en la consola del navegador. Es decir, si abrimos las herramientas del desarrollador y ponemos a la consola, vamos a poder ejecutar alguna función que hayamos creado nosotros en el código JavaScript.

- Bien, ahora supongamos que tengo varios archivos .js y los quiero usar. Yo en mi HTML tengo que linkear el script y es importante que lo haga en el orden correcto. Porque supongamos que hay un script que necesita usar una función la cual está declarada en otro script. En ese caso, el HTML tiene que primero linkear al archivo que tiene esa función, para que el otro la pueda reconocer.

- Supongamos que en un archivo archivo1.js tenemos la función:

```typescript
function sumar(a, b) {
	return a + b;
}
```
- Y en otro archivo llamado archivo2.js, tenemos otra función llamada igual:
```typescript
function sumar(a, b) {
	return a + b + 2;
} 
```
- Si yo en otro archivo archivo3.js invoco a la función sumar, la función que se va a ejecutar será la última que lea el navegador, es decir: Si el HTML linkea primero archivo1.js y después archivo2.js, la función "sumar" de archivo2 se dice que "eclipsa" a la de archivo1, por lo tanto es la que prebalece.

 
## Ejemplo de closure matematicas (patrón modulo IIFE)

- Creamos un archivo .js llamado closure.js, y en el creamos esta función expresada:

```typescript
const matematicas = (function() {
     function sumar(a,b) {};
     function restar(a,b) {};
     function mutiplicar(a,b) {};
     function dividir(a,b) {};
     function validarCero(a) {};

     return {
	     sumar: sumar,
	     restar: restar,
	     mutiplicar: multiplicar,
	     dividir: dividir
     }
})();
```
- Este puntero a función llamado "matematicas", lo que hace es almacenar una función la cual tiene dentro distintas funciones declaradas. Y que al final, retorna un objeto.

- Dentro de ese objeto que devuelve, tiene 4 propiedades. Y cada propiedad tendrá un nombre como "key", y como "value", van a tener a los distintos punteros a función que declaramos. Por lo tanto, la propiedad "sumar" tendrá como valor el puntero a función "sumar", es decir, la función sumar(a, b). En este caso, se da esa coincidencia en la que las propiedades se llaman igual que las funciones. Es una coincidencia que, en este caso, tiene todo el sentido del mundo que sea así.

- ¿Por qué la función esta entre paréntesis y después de los paréntesis se abren otros? Esto es porque es una función autoinvocada. Es decir, en el momento en el que el intérprete de JavaScript la ve, la ejecuta. Literalmente es una función que se invoca a si misma.

- En estos casos en los que la propiedad se llama exactamente igual que la función, JavaSciprt permite unificar la sintaxis de la siguiente forma: 

```typescript
return {
	sumar,
	restar,
	multiplicar,
	dividir
}
```
- Ahora que tenemos "matematicas" como un objeto que retorna 4 direcciones de memoria (restar, sumar, multiplicar y dividir), podemos literalmente usarla como si fuera una clase estática de C#. O más facil, como si fuese un objeto que contiene funciones. Eso es un closure.

```typescript
console.log(matematicas.sumar(4, 5));
console.log(matematicas.dividir(20, 4));
```
- En este caso, "matematicas", más que puntero a función, podemos decir que es un objeto (ya que literalmente retorna un objeto) el cual contiene 4 direcciones de memoria (las 4 funciones).

- Dentro de este archivo closure.js va a estar solamente este objeto "matematicas". Es una buena práctica que en vez de llamarse "closure.js" se llame "matematicas.js", entonces, cuando el HTML lo linkea, sería como solicitar las funciones que contiene el closure matematicas. Es como usar una librería.

- Usar el Patrón módulo IIFE no es la práctica más recomendada a día de hoy. Es mejor usar MÓDULOS (visto en otro apunte).

- Todos los años, JavaScript se actualiza y agrega o modifica funcionalidades. Generalmente, esto se hace con la intención de que el lenguaje sea más "amigable" para el programador. Entonces, puede ocurrir que a veces se crean funcionalidades las cuales sirven como una "capa" para encapsular código que ya se hacía antes. A esto se lo llama "azucar sintáctico", que es una característica del lenguaje que proporciona una sintaxis más simple y más legible (más "dulce" a la vista).