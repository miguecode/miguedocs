---
title: "Hook useEffect"
description: "El Hook UseEffect"
---


## El Hook UseEffect

Este hook es una función que permite ejecutar código como "efecto secundario". Se ejecuta en uno o más momentos:

1. Post renderizado inicial. Siempre que el componente termina de renderizarse, el useEffect se ejecuta.
2. Al escuchar cambios en sus dependencias. Nosotros vamos a determinar cuáles son esas dependencias.


Al igual que el hook anterior, el useState, este hook hay que importarlo así:

```typescript
import { useEffect } from 'react';
```
Es una función con 2 parámetros, donde el primero es una función (la que se va a ejecutar), y el segundo recibe un array de dependencias (el cual podría estar vacío):

```typescript
useEffect(() => { }, [])
```
Para comprobar bien el cuándo se ejecuta este Hook por primera vez, podemos hacer esto:

```typescript
export const Section = () => {
	console.log('ANTES del useEffect');

	useEffect(() => { 
		console.log('useEffect ejecutado')
	}, [])

	console.log('DESPUÉS del useEffect');
}
```
El mensaje 'userEffect ejecutado' se va a mostrar después de los otros dos. Eso demuestra que es un efecto secundario, ejecutado siempre post-renderizado del componente.


Ahora, como dijimos, el post renderizado no es el único momento donde useEffect se puede ejecutar. También lo hace cuando escucha cambios en sus dependencias. Y... ¿cuáles son esas? Las que nosotros queramos: Así como vimos en el apunte anterior con el useState que teníamos una variable "count", esa misma variable "count" puede ser una dependencia. Entonces, cada vez que se ejecuta setCount(), es decir, cada vez que hay un cambio en count, el useEffect que incluya a esa dependencia, se va a ejecutar:

```typescript
const [count, setCount] = useState(0);

useEffect(() => {
	console.log('useEffect ejecutado');
}, [count]);
```
Como vemos, el segundo parámetro de este useEffect es un array, el cual tiene un único elemento: count. Entonces, cada vez que se ejecute el setCount, se va a mostrar por consola 'useEffect ejecutado'. Y como es un array, podríamos poner todas las dependencias que queramos.


## Ejemplo haciendo una petición Fetch

```typescript
useEffect(() => {
	console.log('useEffect ejecutado');
	fetch('https://dummyjson.com/users')
	.then(res => res.json())
	.then(data => console.log(data.users));
}, [count]};
```
**O mejor todavía, haciendo una limpieza de efecto**: 

```typescript
useEffect(() => {
  const controller = new AbortController();

  fetch('https://dummyjson.com/users', { signal: controller.signal })
    .then(res => res.json())
    .then(data => console.log(data.users))
    .catch(err => {
      if (err.name !== "AbortError") console.error(err);
    });

  return () => controller.abort(); // cleanup
}, [count]);
```
Como vemos, la idea es que el componente que muestra los usuarios se renderice totalmente, para que el usuario no tarde nada en verlo. Pero, que una vez que ya se pintó todo el componente, recién ahí lance la petición de la data. De esta forma, el useEffect hace que la petición se hace, justamente, cuando ya todo el componente está renderizado. Ya que como dijimos, useEffect es un hook que se ejecuta inicialmente cuando el componente se acaba de renderizar.


**Aclaración**: No es una buena práctica hacerlo, pero si no le pasamos nada como segundo parámetro al useEffect(), lo que va a hacer es ejecutarse siempre que cambie algún state. Es decir, va a tomar como dependencia a todos.

**Importante**: Este hook lo vamos a usar cuando nos comunicamos con un endpoint (entidad externa al componente), una operación async o parámetros de entrada. Es decir: podríamos usarlo para manejar estados internos perfectamente, pero no es conceptualmente lo ideal. Ya que el objetivo de este hook no es manejar estados internos, sino manejar lo que llega de afuera y actuar en base a ello. 


## Uso del "return" dentro de useEffect

Una práctica es usar un return al final de la función que le pasamos a useEffect. Este return puede ser una función:

```typescript
useEffect(() => {

	return () => {
		// Se ejecuta cuando se destruye el componente
	}
}, []);
```

Lo que ejecutamos dentro del return sirve para manejar la memoria.