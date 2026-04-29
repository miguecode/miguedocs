---
title: "Promesas. Callback hell, cómo se crean y retornan promesas"
description: "Callback Hell (Infierno de callbacks)"
---

## Callback Hell (Infierno de callbacks)

El Callback Hell es un problema que ocurre cuando anidamos demasiados callbacks dentro de otros callbacks, haciendo que el código sea difícil de leer, mantener y depurar. Sucede especialmente en código asíncrono, donde cada función depende de la respuesta de la anterior, generando una estructura en forma de "pirámide de la muerte".

**Veamos un ejemplo de Callback Hell**:

```javascript
function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback();
    }, 1000);
}
```

Imaginemos que así como hicimos la fución paso1, existen paso2, paso3 y paso4. Y cada uno va llamando al siguiente. Para invocarlos, tenemos que hacer esto:

```javascript
paso1(() => {
    paso2(() => {
        paso3(() => {
            paso4(() => {
                console.log("Todos los pasos completados.");
            });
        });
    });
});
```

Esa forma de pirámide acostada es a la que se llama "callback hell". Porque es algo muy confuso y engorroso de leer. Esto es propenso a errores y es complicado de mantener.

La solución es evitar el callback hell. Y para evitarlo, se usan las Promesas y el async/await. Que es lo que vamos a ver en este apunte.

## Promesas

Las promesas (objeto Promise) son azúcar sintáctico que justamente hacen más legible, seguro y mantenible el concepto del callback hell.

Una promesa, en concepto, es algo que va a ocurrir en el futuro. Es algo que tiene un inicio y un fin. Como por ejemplo, si alguien me dice que mañana a la tarde me va a prestar su bicicleta. Me están haciendo una promesa. Hasta que no llegue mañana a la tarde, la promesa está en estado "Pending" o "Pendiente".

Entonces, cuando sea "mañana a la tarde", pueden pasar dos cosas: que la promesa se cumpla o que no.

### Una promesa tiene 3 posibles estados:

1.  **Pending**: Se está esperando por la respuesta.
2.  **FulFilled**: Se completó la promesa exitosamente. (Resolve)
3.  **Rejected**: Se completó la promesa pero no fue exitosa. (Reject)

Cuando la promesa está "Resolved", vamos a recibir un valor, que en este caso, sería la bicicleta. Y si la promesa está "Rejected", no vamos a recibir un valor, pero lo que sí vamos a recibir es una "Reason", es decir, una razón por la cual la promesa no se pudo cumplir. Por ejemplo, "No estuve en mi casa". Ojo: esa razón puede ser un elemento de cualquier tipo, no necesariamente tiene que ser un string. Puede ser un "Error".

## Crear una Promise

```javascript
new Promise();
```

La función constructora Promise recibe un callback ("executor") el cual no va a retornar nada. Ese callback que recibe tiene 2 parámetros: un "resolve" y un "reject", que ambos son callbacks también. El callback Resolve recibe un VALUE y el callback Reject recibe una reason o un Error (puede ser cualquier cosa).

```javascript
Resolve ---> value
Reject -----> reason
```

La idea es que si la promesa se cumple, se muestre el Value. Y si no se cumple, se muestre la Reason. Generalmente, el "resolve" se resume en "res" y el "reject" se resume en "rej".

Ahora vamos a ver que una función asincrónica, nos va a devolver una Promise. Es como si la función nos hiciera la promesa de que nos va a devolver algo. Nosotros le damos esa responsabilidad, de que en caso de que salga bien, nos de un valor X (Value), y que si sale mal, nos de un valor Y (Reason).

### Cuerpo de una Promise básica

```javascript
new Promise((resolve, reject) => {
	if (todoOk) {
		resolve(datoPrometido);
	} else {
		reject(razonIncumplimiento);
	}
});
```

Como vemos, Promise recibe un callback, que en este caso es una arrow function. Ese callback, tiene 2 parámetros, los cuales son 2 callbacks (la función resolve y la función reject). Lo que hacemos es que, si todoOk es true, ejecutamos el callback "resolve", pasando el valor a devolver. Y si todoOk no es true, por ende, la promesa no se cumplió, ejecutamos el callback "reject", pasándole la razón del incumplimiento.

### Función asíncrona validarPar, que devuelve una Promise

```javascript
function validarPar(valor) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof valor !== "number") {
				reject("El valor recibido no es un número");
			} else {
				if ( valor % 2 == 0) {
					resolve("El número es Par");
				} else {
					resolve("El número no es Par");
				}
			}
		}, 3000);
	});
}
```

En este ejemplo, tengo la función validarPar, cuyo objetivo es decirme si el número que le paso es par o no. Por lo tanto, va a retornar una Promise. La promesa es la que se va a encargar de realizar esto en algún momento. Puede cumplirse, o no. Si yo le paso un valor que no es un número, la promesa se incumple, ya que no fue capaz de decirme si el valor recibido es un número par o no. Por lo tanto, como no se cumplió la promesa, se ejecuta la función "reject". La cual, recibe una "reason". O sea, la razón por la cual se incumplió la promesa. Esa "razón" es un string, que en este caso es el string que le pasamos.

En cambio, si el valor recibido SÍ es un numero, la promesa se va a cumplir correctamente. Ya que la función validarPar va a decirme si el número que le pasé es par o no. Y al cumplirse la promesa, se ejecuta la función "resolve", la cual recibe un valor llamado "resolve". Este valor es el que me va a mostrar la resolución de la promesa que hicimos. En este caso, puede ser que el número sea par, o que no lo sea.

El uso del setTimeout no es necesario, pero en este caso lo incluimos para simular una latencia, es decir, para simular un tiempo de espera. Lo hacemos simplemente para demostrar que, efectivamente, la función es asíncrona. Entonces, al cabo de 3 segundos, la promesa se ejecuta.

Cuando decimos que validarPar es asíncrona nos referimos a que es no bloqueante. Y como vimos, retorna un objeto Promise. Veamos cómo se maneja el retorno de la promesa:

## Manejar el retorno de una promesa

Para manejar sus retornos, las promesas tienen 3 métodos: "then", "catch" y "finally".

Los métodos "then" y "catch" reciben un callback, así:

```javascript
validarPar(20).then((resultado) => {
	console.log(resultado);
}).catch((error) => {
	console.log(error);
});
```

Dentro de la promesa, el valor que le pasemos al "Resolve" es el que va a ir a parar al parámetro "resultado", del método Then. Y el valor que le pasemos al "Reject", es el valor que va a ir a parar al parámetro "error" del método Catch.

```javascript
Resolve ---> value -----> capturado por el parámetro del método "then"
Reject -----> reason ---> capturado por el parámetro del método "catch"
```

Lógicamente, lo que vemos ahí es que nuestra función validarPar() puede caer únicamente a 2 lugares; al "Then", o al "Catch". A alguno de los dos va a entrar sí o sí.

El método que nombramos antes, el "finally", funciona igual que el "finally" de un try-catch. De hecho, todo el procedimiento es similar a un try-catch. Y este finally, si es que lo agregamos, se ejecuta SIEMPRE, después de un then o después de un catch.

```javascript
console.log(validarPar(20));  // Mostramos la Promise retornada

// ... o también podemos hacer ...

const promesaRetornada = validarPar(20);
console.log(promesaRetornada);  // Mostramos la Promise retornada
```

Como vemos, al hacerle console.log, Promise tiene un prototipo que es Promise, un "promiseState" (el estado actual de la promesa) que puede ser "pending", "rejected" o "fulfilled", y un "promiseResult", con el valor recibido. Esto es lo que explicamos al principio referido a los posibles estados de una promesa.

**Una curiosidad**: cuando nosotros hacemos lo del console.log y lo vemos en las herramientas del desarrollador, pasa lo siguiente: Si nosotros expandimos el objeto Promise antes de que se ejecute, es decir, antes de que termine el tiempo de espera de 3 segundos del setTimeout, vamos a ver que su estado es, lógicamente, pending. Y cuando terminen esos 3 segundos, y la volvamos a expandir para ver el resultado, va a seguir diciendo pending. O sea, no se actualiza en la consola del navegador. Pero esto es sólo visual, no es que esté funcionando mal. Para evitarlo, tenemos que expandir el objeto Promise una vez que ya se ejecutó, para poder ver realmente que resultado tuvo.

Y para terminar, refiriéndonos a la sincronía, nosotros no vamos a usar promesas. Vamos a usar funciones async, los cuales trabajan con promesas por debajo. Pero eso va a estar en un siguiente apunte.

## Métodos all y race

Estos métodos son propios del objeto Promise, y sirve para manejar múltiples promesas a la vez:

```javascript
const prom1 = new Promise(res => setTimeout(() => res("Tortuga 🐢"), 3000));
const prom2 = new Promise(res => setTimeout(() => res("Conejo 🐇"), 1000));

Promise.all([prom1, prom2])
    .then(respuestas => console.log(respuestas)) // ["Tortuga 🐢", "Conejo 🐇"]
    .catch(err => console.log("Error en alguna promesa:", err));
```

El método Promise.all() ejecuta varias promesas en paralelo y espera a que todas se resuelvan. Si alguna falla, todas fallan. Como vemos, hay que pasarle un array de promesas, y el then lo que hace es capturar un array de respuestas.

```javascript
Promise.race([prom1, prom2])
    .then(resultado => console.log("Ganó:", resultado)) // Soy un conejo 🐇 (porque tarda menos)
    .catch(err => console.log("Error:", err));
```

El método Promise.race ejecuta varias promesas en paralelo y devuelve la primera que se resuelva o se rechace. Esto quiere decir que, al igual que All, recibe un array de promesas. Pero el then sólo captura una de ellas. Y no un array. En este caso, el then capturó la respuesta de prom2, ya que esa es la promesa que se resuelve primero (por tener un menor setTimeout).