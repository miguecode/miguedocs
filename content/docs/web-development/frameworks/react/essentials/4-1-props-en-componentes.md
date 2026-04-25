---
title: "4-1. Props en Componentes "
description: "Props en Componentes"
---


## Props en Componentes

- Los props se reciben como parámetros en la función JavaScript, y se reciben como objeto { }, así:

```typescript
export const Header = ({ title }) => { ... }
```
- En este caso, Header está recibiendo un objeto que tiene una prop llamada 'title'.

- Además de recibir este tipo de propiedades, existe 'children', que es un parámetro especial que hace referencia a los hijos del componente a nivel estructura HTML. Por ejemplo, si lo invocamos así:

```text
<Header>
	<h3>Este es el título</h3>
</ Header>
```
- Ese h3 que aparece dentro de la invocación del componente, va a caer en {children}, y va a poder ser utilizado en el componente Header de esta forma:

```html
export const Header = ({ children, title }) => {
	return (
		<header>
			<h1 className="title">{ title || "Título por defecto" }</h1>
			{ children }
		</header>
	)
}
```
- Como vemos, el código HTML que recibimos como prop (que se guarda en children), se coloca, también, entre llaves { }. 

- Una buena práctica es TIPAR nuestras props. Como estamos usando JavaScript, podemos ver que no hay validación de tipos. Children o Title podrían recibir cualquier cosa, y eso rompería. Por eso es que podemos usar PropTypes. Para eso, lo importamos y usamos así:

```typescript
import PropTypes from 'prop-types';

Header.propTypes = {
```
| children: PropTypes.node, | // 'children' va a ser un NODO del DOM, etiquetas HTML |
| --- | --- |
| title: PropTypes.string, | // 'title' va a ser un string |
```typescript
}
```
- Si bien no es obligatorio, es bueno hacerlo. De hecho, si vamos al archivo .eslintrc.cjs, vamos a encontrar una rule llamada 'react/prop-types', que puede estar en off o en on. Si está en off, no nos va a marcar en rojo el no tipar props. Pero si está en on, nos va a marcar en rojo cada prop que no esté tipada como hicimos recién.

- **También podemos pasar booleanos como props**: 

```typescript
<Header title="Mi sitio web" show={true}>
	<h3>Este es el título</h3>
</ Header>
```
- En este caso, la prop llamada show recibe un true. Y como 'true' es un valor de JavaScript al ser un booleano, tiene que estar entre llaves { }. Ya que no es un simple string "Hola".

- Incluso, también lo podríamos resumir poniendo solo "show", y se sobreentiende que lo estamos pasando en TRUE. Así:

```text
	<Header title="Mi sitio web" show>
```
- Y si no le pasamos nada, es decir, si no escribimos show, va a llegar como Undefined. Y como sabemos, en JavaScript, undefined es falsy. Así que ese undefined se terminaría traduciendo en false.

- Y después, dependiendo de si show es true o no, podemos hacer esta lógica:

```html
export const Header = ({ children, title, show }) => {
	return (
		<header>
			<h1 className="title">{ title || "Título por defecto" }</h1>
			{ children }

			{
				show ? <p>Este texto se muestra porque 'show' es true</p> : null
			}
		</header>
	)
}
```
- Como vemos, cuando nosotros declaramos Header, y usamos el return ( ), lo que está dentro del return es "código HTML" (en realidad, es algo muy parecido a HTML). Pero dentro de este mismo código HTML, nosotros podemos escribir código JavaScript, ¿Cómo? con las llaves { }. Por eso es que en este caso, tengo que abrir llaves para hacer la lógica del opeardor ternario show ? algo : otra cosa. Porque sí: esto es como hacer un @if o un *ngIf en Angular. Estoy literalmente haciendo:

```typescript
if (show) {
	<p>Este texto se muestra porque 'show' es true</p>
} else { null }
```
- Pero como usamos el operador ternario, se ve resumido. De hecho, así como lo hacíamos en Astro, también se puede resumir un poco más el ternario haciendo lo siguiente:

```typescript
{
	show && <p>Este texto se muestra porque 'show' es true</p>
}
```
- Como solamente queremos tener una condición "true", y si está en "false" no queremos hacer nada, podemos poner el &&. Si show es true, se muestra el párrafo.


## Pasar Funciones, Elementos o Componentes como props

- Sí, también se pueden pasar estos como props. Pero lo vamos a ver en el próximo apunte.


## Buena práctica al recibir props

- Crear una interface es una buena práctica siempre que queramos recibir algo de afuera. En este caso, recibir props en un componente. Y un truco es ponerle siempre un nombre genérico: "Props" o "Params". En vez de poner ButtonData, ListData, NavbarData, y demás, si siempre le ponemos Props o Params logramos mayor consistencia y claridad.

- **Sería algo como**: 

```typescript
interface Props {
	label: string;
	bgColor: string;
	textColor: string;
	style?: Styles; // Styles podría ser una interfaz creada por nosotros
}

export Button = ({ label: string, bgColor: string, textColor: string , style: Styles }: Props) => {
	...
}
```