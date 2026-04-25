---
title: "Memoization (Optimización en valores repetidos)"
description: "Memoization (Memorización en español)"
---


## Memoization (Memorización en español)

- La memoization es un CONCEPTO, la idea es guardar valores en un array u objeto, para no tener que obtener dichos valores otra vez. Entonces, el objetivo de la Memoization es el de optimizar el rendimiento del sitio web.

- **Básicamente la lógica del concepto es**: Si yo tengo una función que recibe un parámetro X, y cada vez que recibe ese mismo parámetro X, retorna exactamente lo mismo, entonces... ¿Para qué ejecutarla más de una vez? Obviamente, este concepto es útil siempre y cuando la función sea PURA, o sea, que si recibe siempre un mismo parámetro, retorna siempre lo mismo. Y aparte, la gracia sería que la función sea una función pesada, la cual el navegador TARDE en completar.

- Si vamos a ejecutar varias veces la misma función, la cual recibe y retorna varias veces lo mismo, entonces la Memoization nos dice que GUARDEMOS el retorno. Entonces, la función la ejecutamos una vez sola, y lo que retorna lo guardamos en un array o en un objeto. Por lo tanto, la próxima vez que queramos ejecutar la misma función con el mismo parámetro, no lo vamos a hacer. Directamente le damos el retorno que guardamos en el array/objeto por primera vez. Y así nos ahorramos hacer siempre lo mismo, optimizando el rendimiento.

- Este concepto de optimización es usado por cualquier tipo de framework moderno que conozcamos, pero nosotros no nos damos cuenta porque lo hace por debajo. El uso que nosotros le damos al framework es azúcar sintáctico de la Memoization, es decir, de lo que vamos a ver ahora.



## Ejemplo explicado

- Supongamos que tenemos una función pesada, que el navegador va a tardar en completar dependiendo del parámetro que le pasemos:

```typescript
const hacerAlgo = num => {
	const a = 20;
	const b = 12;

	for (let i = num - 1; i >= 0; i--) {
		for (let j = i - 1; j >= 0; j--) {
			c+= a*b;
		}
	}
	return c;
}
```
- Esa es la función. Así como tal no se ve especialmente pesada, pero lo es si le pasamos un número muy grande:

```typescript
console.log(hacerAlgo(60000);
```
- Si ejecutamos la función pasándole un número alto como el 60000, vamos a ver que en la consola del navegador, va a tardar un poco en mostrar el retorno. Esto es porque tarda mucho en terminarla.

- **De hecho, veamos esta prueba**: 

```typescript
const date = new Date();

hacerAlgo(60000);

console.log(new Date() - date);
```
- Si ejecutamos esto, vamos a poder ver la diferencia de tiempo entre el primer Date que creamos, respecto al segundo. En vez de ser un tiempo bajo, va a ser de aproximadamente 2 segundos, ya que le pusimos el hacerAlgo() con un valor alto en el medio.

- Y ahora, imaginemos que esto ocurre reiteradas veces en una parte de nuestro código:

```typescript
const date = new Date();
hacerAlgo(60000);
console.log(new Date() - date);

const date2 = new Date();
hacerAlgo(60000);
console.log(new Date() - date2);

const date3 = new Date();
hacerAlgo(60000);
console.log(new Date() - date3);

const date4 = new Date();
hacerAlgo(60000);
console.log(new Date() - date4);
```
- Si ejecutamos esto, vamos a ver que cada vez que se ejecuta hacerAlgo(), pasan aproximadamente 2 segundos. Así que en total, todo este código tardaría unos aproximadamente 8 segundos en ejecutarse de inicio a fin. Esto, lógicamente, es muy poco óptimo. Y acá es cuando aparece la Memoization.


## Ahora sí, veamos cómo optimizar eso

```typescript
let cache = [];	// Lo que contamos al principio de tener un array

const memoizer = (funcionRecibida) => {
	return (e) => {
		const index = e.toString();
		if (cache[index] === undefined) {
			cache[index] = funcionRecibida(e);
		}
		return cache[index];
	}
}
```
- En este caso, lo que estamos haciendo es crear un array vacío llamado "cache". Este va a ser nuestra forma de almacenar la información que quizá se reutilice en el futuro. 

- **Y atención acá porque se pone confuso**: Lo que hacemos después es crear una variable llamada "memoizer". Esta variable va a almacenar una función flecha (la cual va a recibir como parámetro a una función). Bien, y además de recibir una función como parámetro, lo que va a hacer esta función flecha es retornar otra función. Esa función que retorna, es decir, la función que va a retornar memoizer, hace lo siguiente: recibe un parámetro llamado "e", y su valor lo guarda como string en una variable const llamada "index". Bien, ahora, lo que hace es verificar si en el array cache con posición index, existe o no algún valor. Si el valor del cache en la posición index es undefined, significa que no hay nada ahí. Y si no hay nada, hay que guardar algo en ese lugar. Entonces, lo hacemos ejecutando la funciónRecibida, pasándole como parámetro "e". Entonces, ahora sí hay algo ahí, y lo retorna. Si ya de por sí no entró al if porque no era undefined, significa que ya habíamos ejecutado la función anteriormente recibiendo el mismo retorno. Entonces, en ese caso, no volvemos a ejecutar la función, sino que directamente le retornamos el valor que guardamos en el cache.

- Ahora, si volvemos a ejecutar el código anterior (el de crear las fechas y ejecutar hacerAlgo() 4 veces), podemos usar nuestro objeto "memo":

```typescript
const memo = memoizer(hacerAlgo);

const date5 = new Date();
memo(60000);
console.log(new Date() - date5);

const date6 = newDate();
memo(60000);
console.log(new Date() - date6);

const date7 = newDate();
memo(60000);
console.log(new Date() - date7);

const date8 = newDate();
memo(60000);
console.log(new Date() - date8);
```
- En este caso, vamos a notar que el primer memo() va a tardar 2 segundos como tardaba originalmente, pero ahora, los otros 3 van a tardar ¡0! milisegundos. Porque como nosotros ya habíamos ejecutado memo(60000) antes, nos guardamos su retorno en nuestro array cache, y pudimos reutilizarlo. Entonces, pasamos de esperar 8 segundos en total, a esperar sólo 2, todo gracias al memorizador.

- De eso se trata la Memoization (o Memorización).