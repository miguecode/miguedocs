---
title: "Intro a Estados y Hooks en React. Hook useState"
description: "Los hooks en React"
---


## Los hooks en React

- Una característica de React es que, cuando existe un cambio dentro de un componente, React vuelve a renderizar ese componente específico, y por lógica, a todos sus componentes hijos (es decir, se propaga hacia abajo). Pero no renderiza toda la página de nuevo, sino que sólo el que cambió, y a todos los demás que ese componente re-renderizado "invoque". 

- Es decir, si yo tengo un componente Header, que en su HTML invoca a otro componente Navbar, lo que va a pasar es que si React detecta un cambio en Header, este mismo header se va a re-renderizar. Y por ende, también se va a re-renderizar el componente Navbar, ya que está incluido en la declaración de su padre Header.

- **Y para manejar todo esto es que existen los hooks**: utilidades que nos permiten realizar ciertas acciones en ciertos momentos determinados. En Angular, lo más similar serían los típicos OnInit, AfterViewInit, y demás. Y también algunos tienen relación con las Signals.

- En React, todos los hooks siguen una convención de nombre, en la que todos empiezan con 'use'. Y técnicamente, no son ni más ni menos que funciones JavaScript.

- Ejemplos de hooks en React
- useState
- useEffect
- useRef
- useReducer
- useMemo
- useCallback
- useTransition
- useId

- Y hay otros cuantos más. Además de los ya existentes, nosotros también podemos definir nuestros propios Hooks personalizados como funciones de JavaScript.


## El hook useState

- Para usar un hook, en este caso el useState, lo tenemos que importar así:

```typescript
import { useState } from 'react';
```
- Lo podemos usar adentro de un componente de la siguiente forma:

```typescript
export const Section = () => {
	console.log(useState(0));

	...
}
```
- En consola vamos a ver un array [0, f]. La 'f' es la f que se refiere a una función. Eso recibe useState: un valor cualquiera (en este caso, el 0 que le pasamos), y una función cuya intención es actualizar a ese valor 0.

- Gracias a la desestructuración de JavaScript, podemos obtener sus dos valores así:

```typescript
const [count, setCount] = useState(0);
```
- Así, creamos una variable count y una función setCount. El primer valor (que nosotros ahora llamamos count), va a recibir 0. Y setCount va a ser la función que, como bien dice su nombre, va a actualizar el valor de count. Es algo similar a lo que sería una signal en Angular: guardamos un valor inicial, y ese valor inicial se actualiza. No es lo mismo, pero va un poco por ahí.

- Por convención, siempre la función que recibe useState tiene que tener un 'set' adelante, y el nombre de la otra variable. Es decir: count y setCount, user y setUser, color y setColor.

- También algo que hay que aclarar es que en React se aplica la "Regla de Inmutabilidad", que nos dice que no podemos modificar directamente a una variable de estado, en este caso, "count". Es decir, cada vez que queramos modificar el valor actual de count, tenemos que usar setCount. Y no acceder de forma directa a count, haciendo algo como count = 20.

- Esto último es por algo muy similar a lo de las Signals de Angular: React trabaja las variables de estado en base a su referencia: entonces, para saber si tiene que re-renderizar un componente o no, tiene que escuchar a los cambios que ocurran en la variable de estado pero a modo de referencia, no de forma física o directa. Si nosotros hacemos un count = 300, React no va a interpretar esto como un cambio en el componente, y por lo tanto no lo va a re-renderizar. Nosotros tenemos que usar setCount para que se refleje el cambio. Es como cuando en Angular hacemos un miSignal.set(). 


- Como vimos en apuntes pasados, nosotros tenemos ya hecho un botón, que al hacerle clic ejecuta nuestro manejador llamado handleClick. Vamos a modificarlo para que cada vez que toquemos el botón, aumente el valor de "count", y se muestre por consola:

```typescript
const handleClick = () => {
	setCount(count + 1);
}
```
- Como vemos acá, al principio, count se inicializa en 0. Y cuando hacemos clic en el botón y se ejecuta handleClick, lo que ocurre son dos cosas muy importantes a entender:

1. Se ejecuta setCount recibiendo 'count + 1' por parámetro. Es decir, recibiendo un 0 + 1. Por ende, lo que hace la función es que la variable "count" que creamos anteriormente, pase de ser 0 a ser 1.

2. Esta es la clave: Cuando setCount() termina de ejecutarse, React asume esto como un CAMBIO en el componente. Porque así lo es. Y como hubo un cambio en el componente, lo que hace React es volver a renderizar el mismo. Es lo que dijimos antes: siempre que hay un cambio en un componente específico, React  lo re-renderiza otra vez.

- Esto último es muy importante para entender cómo se manejan los componentes y los estados. Porque por ejemplo, si nosotros ponemos el setCount() por fuera del handleClick, y lo dejamos ahí libre en la declaración del método Section (o sea, la función), provocaríamos un bucle infinito. Ya que, cuando llegue a setCount() por primera vez, va a otra ver re-renderizar el componente. Y así infinitamente.


- Como vimos en el apunte anterior, tenemos distintos usuarios mostrados en una lista. Y cada uno tiene un botón que, al tocarlo, ejecuta el handleClick, o sea, el manejador de click que aumenta el count en 1. Esto haría que, toquemos el que toquemos, afectemos al mismo contador. ¿Y si quisiéramos que cada usuario tenga su propio count? Bueno, creando un nuevo componente individual para cada usuario: un UserCard. Entonces, cada UserCard va a manejar la lógica de su propio useState, y su propio count y setCount. De esa forma, no solo hacemos más limpio y reutilizable el código, sino que también hacemos que se re-renderice solamente lo necesario. Y no todo el componente padre completo desde 0.

- Entonces, cuando invocamos al UserCard, lo único que hacemos es pasarle la key y el user:

```typescript
<UserCard key={user.id} user={user} />
```
- **Y UserCard, lo recibiría así**: 

```typescript
export const UserCard = ({ user }) => {
	const [isContacted, setIsContacted] = useState(false);
	const { id, name, description, image } = user;   // Desestructuración totalmente opcional

	const handleClick = () => {
		setIsContacted(true);
	}

	return (
		...
			{
				isContacted ? 'Contactado' : 'Contactar';
			}
		...
	);
}
```
## Estilos y Renderización dinámica

- Basados en ese último ejemplo, específicamente en esta línea:

```text
isContacted ? 'Contactado' : 'Contactar';
```
- ¿Qué estamos haciendo acá? Un ternario, que dependiendo de si isContacted es TRUE o FALSE, muestra un string u otro. Es decir, esto es renderización dinámica. ¿Y si quisiéramos hacerlo con estilos? La mejor forma, o una buena forma es crearnos variables por fuera, así:

```typescript
const buttonClassName = isContacted
? 'button-basic is-contacted'
: 'button-basic';
```
- **Y después, lo invocaríamos así**: 

```typescript
return (
		... Botón
			{
				isContacted ? 'Contactado' : 'Contactar';
				className={buttonClassName}
			}
		...
	);
```