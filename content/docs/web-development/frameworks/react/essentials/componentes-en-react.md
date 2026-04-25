---
title: "Componentes en React"
description: "Como vimos en el apunte anterior, un componente en React es una función JavaScript que retorna un elemento a renderizar. Tienen que estar escritos en PascalCase..."
---



- Como vimos en el apunte anterior, un componente en React es una función JavaScript que retorna un elemento a renderizar. Tienen que estar escritos en PascalCase (obligatoriamente), y por convención tienen que tener un nombre declarativo y directo, como si fuese una tag HTML. Los componentes, en React y en todo desarrollo web, son partes individuales de la interfaz.

- Como vimos antes, usamos React.Fragment para agrupar más de un elemento dentro de un return. Pero existe una forma más limpia de referirnos a ese React.Fragment, que es escribir etiquetas vacías, así:

```text
<>
	...
</>
```
- Para crear un componente, lo ideal es crear un archivo individual para él:

```text
Header.js  //  Header.jsx (mejor)
```
- Obviamente y por lo que vimos recién, lo ideal es usar JSX. Entonces, creamos un archivo Header.jsx, en el cual vamos a escribir la lógica de la función JavaScript -> una función llamada Header() que puede tener toda la lógica que quiera, pero el punto es que va a hacer un return() de lo que tiene que renderizar. Esta función, al estar en un archivo separado, hay que exportarla para que cualquier otro archivo que la quiera usar, la importe.

- Ahora bien, para una buena práctica en nuestro proyecto y que el main.jsx quede bien limpio, lo que se hace es crear un componente llamado App. Este componente va a ser el padre de todos, es decir, va a englobar a todos los demás componentes que vayamos a renderizar. Esto obviamente ya viene hecho por defecto. Por eso tenemos un archivo llamado App.jsx, el cual aparece invocado en el render() del archivo main.jsx, el Entry Point. Es el componente global. Todo lo que queramos empezar a mostrar por pantalla, lo vamos a renderizar en el render() de App.jsx.

```typescript
function App() {
	return (
		<>
			...
		</>
	)
}
```
## Ejemplo del componente Header.jsx

- Esta función Header que vamos a crear, puede estar así:

```typescript
function Header() {
	return (
		<header>

		</ header>
	)
}
```
- **O incluso, podemos hacerla arrow functions**: 

```typescript
const Header = () => {
	return (
		<header>

		</ header>
	)
}
```
- Ambas formas son completamente válidas, siendo la segunda más moderna. Ahora, para poder usar este componente fuera de este archivo, hay que exportarlo e importarlo donde lo queramos usar. Para exportarlo, es tan simple como agregar "export" al inicio de la declaración de la función. Ya sea la "function" o la "arrow function".

- **Y para importarlo, vamos a ir a App.jsx y hacer**: 

```typescript
import { Header } from './components/Header';
```
- **Y ya con esto lo podemos invocar de esta forma**: 

```typescript
function App() {
	return (
		<>
			<Header />
			<section>
				...
			</ section>
		</>
	)
}
```
- Como vemos, estamos invocando al componente Header, dentro del componente principal App.


- **Una forma de hacerlo más rápido puede ser**: 

1. Creamos el archivo manualmente. Por ejemplo, Footer.jsx
2. Escribimos 'rafce'. Al tocar enter, nos escribe toda la base rápidamente. Para que el snippet 'rafce' funcione, tenemos que tener la extensión llamada ES7 + React/Redux/React-Native snippets
3. La primer línea que se escribe por defecto importando React no es necesaria, la podemos borrar. En el React actual no es necesaria. Y como vemos, hace una exportación por defecto. Esto hace que, al importarla, no sea necesario escribir import { Footer }, sino que podemos hacer simplemente import Footer, sin las llaves { }. Pero es lo mismo.

```typescript
export default Header → import Header ...

export const Header = ... → import { Header } ...
```
- Es más veloz no usar el "default", y después importar con llaves { }.


## Los estilos CSS de un componente

- Para manejar esto, podemos crear de forma manual el archivo Componente.css. Donde 'Componente' va a ser el nombre de nuestro componente creado. Entonces, podríamos crear Header.css.

- Una particularidad de JSX, es que nos exige usar el atributo 'className' en vez de 'class' en la declaración de las etiquetas HTML. Esto es así para no confundirla con 'class'.

- Entonces, usando clases podemos fácilmente aplicar estilos de forma clásica. Algo que hay que hacer es importar el archivo de los estilos, así:

```typescript
import './Header.css';
```
- Con el tema de los estilos en línea (que obviamente NO son los recomendados) cabe aclarar que las propiedades se tienen que escribir en camelCase para que funcionen bien. Esto es así por el JSX.


## Arquitectura

- Como vimos recién, React es similar a Astro a la hora de crear y organizar componentes: son archivos "sueltos" que creamos de forma manual. Esto no va a ser un problema si tenemos un proyecto sencillo. Pero si lo que hacemos crece, ahí sí vamos a tener que aplicar un nivel de organización mayor, haciéndolo más parecido a Angular: una carpeta por cada componente, carpetas que agrupan componentes, y demás.