---
title: "Promise Hell. Funciones Asíncronas (Async y Await)"
description: "Así como vimos el Callback hell, el cual fue recubierto por azúcar sintáctico en forma de Promesas, ahora vamos a ver el Promise Hell, el cual va a ser recubier..."
---


## Promise Hell

- Así como vimos el Callback hell, el cual fue recubierto por azúcar sintáctico en forma de Promesas, ahora vamos a ver el Promise Hell, el cual va a ser recubierto por azúcar sintáctico en forma de funciones Async.

- Vamos a crear funciones para sumar 5 y 8, calcular el cuadrado, multiplicarlo por 10, restarle 2 y mostrarlo por consola. Y vamos a hacer que las funciones sean asíncronas, usando promesas.

```typescript
function sumar(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                let rta = a + b;
                res(rta);
            } else {
                rej("Parámetros inválidos para la suma");
            }
        }, 3000);
    })
}
```
- Esta no es más que una función sumar que devuelve una promesa, como vimos anteriormente con validarPar. Para no escribir todo el código en este apunte, imaginemos que usamos esta misma sintaxis para crear restar(), multiplicar(), y cuadrado(). Es decir, vamos a tener 4 funciones que devuelven promesas. Son literalmente lo mismo, pero cambia la operación matemática que realizan, nada más.

- Y aparte, vamos a crear un método para mostrar el resultado final:

```typescript
function informar(valor) {
    console.log("El resultado es " + valor);
}
```
- Vamos a ver que ejecutar esto nos provoca un Promise Hell:

```typescript
sumar(5,8).then((resultadoSuma)=> {
    return cuadrado(resultadoSuma);
}).then((resultadoCuadrado) => {
    return multiplicar(resultadoCuadrado, 10);
}).then((resultadoProducto) => {
    return restar(resultadoProducto, 2);
}).then((resultadoResta) => {
    informar(resultadoResta);
}).catch((razonError) => {
    console.log(razonError);
});
```
- Todo esto es el famoso "Promise Hell". En este caso, "sumar(5,8)" es una función que retorna una promesa. Por lo tanto, uso su then. El then recibe un callback, el cual va a tener un parámetro, que va a ser el valor que tenga el Resolve dentro de la promesa que devuelve sumar. Y el then, va a hacer un retorno. Ese retorno va a ser una promesa. Una promesa la cual, la consigue al invocar a la función multiplicar. Y a multiplicar, le pasa el valor de lo que atrapó el Then. Y así sucesivamente hasta llegar a informar. Si cualquiera de estas promesas retornan un reject, lo resuelvo con un único catch.

- Recordemos que a las arrow function las podemos resumir para que queden así:

```typescript
sumar(5,8)
.then(resultadoSuma => cuadrado(resultadoSuma))
.then(resultadoCuadrado => multiplicar(resultadoCuadrado, 10))
.then(resultadoProducto => restar(resultadoProducto, 2))
.then(resultadoResta => informar(resultadoResta))
.catch(razonError => console.log(razonError))
```
- Como dijimos al principio, las Promesas aparecieron para ser azúcar sintáctico de los Callback Hell. Y la verdad es que tiene sentido, porque este código que estamos viendo se ve mucho más legible y limpio que un Callback Hell. Pero...

- Aún así, esto del Promise Hell a mucha gente le siguió haciendo ruido. Y por eso aparecieron las funciones Async. O sea, las funciones que -de base- son asíncronas.



## Funciones Asíncronas (Async y Await)

- Aunque a esta altura ya es obvio, vamos a aclarar que una función asicrónica significa que es una función no bloqueante. Es decir, el intérprete de JS no espera a que termine de ejecutarse todo el desarrollo de una función asíncrona. Sino que, una vez que ya leyó su invocación, la deja ejecutándose en un segundo plano, mientras que al mismo tiempo sigue con el flujo de código original. 

- Para ver el ejemplo, vamos a usar las mismas funciones que usamos antes, sin cambiarles nada. 

```typescript
function calcular(a, b) {
	sumar(a, b)
	.then(resultadoSuma => cuadrado(resultadoSuma))
	.then(resultadoCuadrado => multiplicar(resultadoCuadrado, 10))
	.then(resultadoProducto => restar(resultadoProducto, 2))
	.then(resultadoResta => informar(resultadoResta))
	.catch(razonError => console.log(razonError))
}
```
- En este caso, metimos todo el choclo del Promise Hell dentro de una nueva función llamada calcular(). Así, encapsulamos las llamadas asincrónicas dentro de una función común y corriente llamada, "calcular".


- Ahora, lo que vamos a hacer es que "calcular" sea una función asíncrona, es decir, una función Async.

```typescript
async function calcularAsync(a, b) {
    try {
        let resultadoSuma = await sumar(a, b);
        let resultadoCuadrado = await cuadrado(resultadoSuma);
        let resultadoProducto = await multiplicar(resultadoCuadrado, 10);
        let resultadoResta = await restar(resultadoProducto, 2);
        informar(resultadoResta);
    } catch (err) {
        console.log(err);
    }
}
```
- Acá aparece la magia. Usamos la palabra "async" adelante, para indicar que es una función async. Esto nos permite romper el Promise Hell.

- Y como vemos, cada vez que llamamos a una de nuestras funciones que hicimos antes, le ponemos un "await" adelante. El "await" se traduce a: "Esperá a que se resuelva la siguiente función:", es decir, esperar a que el estado de la promese esté en fulfilled.

- **La sintaxis sería**: 

```typescript
     await  funcion()
     Antes de continuar, esperá a que se resuelva la siguiente función: funcion() 
```
- Entonces, esto es una función asíncrona. El "async" adelante del "function" es el que me permite utilizar el "await". Si no indico el "async", no voy a poder usar nunca el "await".

- **Finalmente, la invocamos así**: 

```typescript
calcularAsync(5, 8);
```
- Para mejorar la lógica, a las funciones asíncronas siempre se les recomienda agregarles un bloque try-catch:

```typescript
async function calcularAsync(a, b) {
	try {
		let suma = await sumar(a, b);
		let resultadoSuma  await cuadrado(resultadoSuma));
		let resultadoCuadrado = await multiplicar(resultadoCuadrado, 10));
		let resultadoProducto = await restar(resultadoProducto, 2));
		informar(resultadoResta);
	} catch (err) {
		console.log(err);
	}
}
```
- Como vemos, todo esto se vuelve más legible que un Promise Hell. Acá, lo primero que se va a ejecutar es la función await sumar(a, b). Y en ese momento, el intérprete realiza un parate: Hasta que la promesa de sumar no tenga respuesta, es decir, hasta que no pase a estado fulfilled, el intérprete NO avanza a la siguiente línea. Todo esto para respetar el orden de las promesas y sus retornos. Ojo: cuando decimos que el intérprete hace un parate, es cierto. Pero no significa que el flujo original del programa también se frene, eso no. Recordemos que esto es una función asíncrona, así que se ejecuta en segundo plano.
- Si alguna función invocada con "await" toma el resultado de la promesa de forma "rejected", entonces automáticamente se dispara el catch, atrapando lo que devuelva "reject".

- Lógicamente, una función async también puede ser una arrow function. Veamos:

```typescript
async (a, b) => { ... };
```
- **O también puede estar de forma expresada**: 

```typescript
const calcularAsync = async function (a, b) { ... };
```
- **Una aclaración respecto al await**: Una cosa es el flujo original del programa, y otra el flujo de la función asíncrona. Dentro de la función async, el "await" FRENA la lectura del código. Pero lo hace DENTRO de la función asíncrona. Es decir, el flujo original del programa nunca se frena y va para adelante. Esto es así porque la función async se ejecuta en segundo plano. El await, como dijimos, significa "Che, esperá a que esta función termine de ejecutarse. Y cuando termine, recién ahí seguís con lo que sigue". Y esa espera, se da solo dentro de la función async. Todo el resto del código fuera de la función async sigue ejecutándose sin esperar nada.

- **Veamos**: 

```typescript
async function funcionAsync() {
	console.log("Inicio de funcionAsync");
	await funcionConLatencia1();
	console.log("Después de la primer latencia");
	await funcionConLatencia2();
	console.log("Después de la segunda latencia");
	await funcionConLatencia3();
	console.log("Después de la tercer latencia");
	console.log("Fin de funcionAsync");
}

console.log("Antes de invocar funcionAsync");

funcionAsync();

console.log("Fin del programa");
```
- Imaginando que cada función con latencia tiene 3 segundos de setTimeout y lo que hacen es mostrar por consola un "Estoy en la función con latencia 1", la ejecución de todo este código mostraría lo siguiente por consola:

Antes de invocar funcionAsync
Inicio de funcionAsync
Fin del programa
Estoy en la función con latencia 1
[ Pasan 3 segundos ... ]
Después de la primer latencia
Estoy en la función con latencia 2
[ Pasan 3 segundos ... ]
Después de la segunda latencia
Estoy en la función con latencia 2
[ Pasan 3 segundos ... ]
Después de la tercer latencia
Fin de funcionAsync

(Lo de [ Pasan 3 segundos ... ] es algo que agregué yo, eso no sale por consola. Es literal).