---
title: "1-2. React Primitivo (Es decir, React sin JSX)"
description: "Al usar JSX, nosotros nos ahorramos de usar React de forma primitiva, es decir, un React 'cavernícola'. Esto que vamos a ver en este apunte no se hace ni tiene ..."
---


## React primitivo

- Al usar JSX, nosotros nos ahorramos de usar React de forma primitiva, es decir, un React "cavernícola". Esto que vamos a ver en este apunte no se hace ni tiene sentido hacerlo, pero sí tiene sentido y valor conocerlo y entenderlo. Porque ayuda a comprender cómo es React por debajo, y qué es lo que hace de forma más interna. 

- Como sabemos, React no es más que una biblioteca de JavaScript, y como tal, la podemos importar así:

```typescript
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
```
- Ahora, veamos un ejemplo de código de lo que podríamos hacer.

- **Primero, hagamos un HTML básico**: 

```html
<div id="app"></div>
```
- Y en JavaScript, además de importar React, ahora vamos a hacer:

```typescript
const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);
```
- Hasta acá, lo que hicimos es tomar el div del HTML por su ID, y guardarlo en la variable appDomElement. Después, creamos una variable llamada root. A esta, le asignamos lo que devuelve el método createRoot() del objeto ReactDOM, pasándole por parámetro el appDomElement.

- De esa forma, estamos creando el root -la raíz- de nuestro DOM React. Y... ¿Qué podemos hacer con eso?

- Podríamos renderizar cosas en nuestra página. Y para eso, podemos simplemente mostrar un Hola Mundo! usando el método "render()" de nuestro root, así:

```text
root.render('Hola Mundo!');
```
- Ya podemos ver como nuestra página muestra lo que generamos en nuestro React DOM, de forma dinámica en JavaScript. Obviamente que esto es muy pobre y sin sentido, pero podemos hacerlo para comprobar que funciona. Esto es el corazón de React: crear una interfaz de usuario (elementos) manipulando el DOM. Ahora imaginemos que no queremos mostrar un texto que diga Hola Mundo, sino elementos HTML reales.

- Lamentablemente, el método render sólo puede recibir un elemento a renderizar. Entonces, no podemos pasarle, por ejemplo 3 botones. Pero vamos a ver cómo sí podemos hacerlo (haciendo que un elemento, contenga a otro u otros):

- Primero, vamos a crear los elementos que queremos renderizar:

```typescript
const button1 = React.createElement('button', { "data-id": 123 }, 'Button 1');
const button2 = React.createElement('button', { "data-id": 456 }, 'Button 2');
const button3 = React.createElement('button', { "data-id": 678 }, 'Button 3');
```
- Para crearlos, usamos el método createElement del objeto React. Como vemos, hay que pasarle 3 parámetros: el primero es el nombre de la tag HTML, en este caso, un button. El segundo recibe un objeto, que va a contener todos los atributos y valores que le queramos asignar a ese button. Podríamos ponerle un "onclick: saludar". Y como tercer parámetro, en este caso, el texto que va a mostrar el botón.

- Pero así solo creamos los elementos, no estamos mostrándolos en ningún momento. Para eso, podemos hacer:

```typescript
const app = React.createElement('div', null, [button1, button2, button3]);

root.render(app);
```
- ¡Ahora sí! Creamos un elemento nuevo llamado 'app', el cual es un div que envuelve un array de elementos, en este caso, los 3 botones. Y así, ya podemos ver que en nuestra página se ven esos 3 botones que creamos. Pero... además de eso, si analizamos el HTML, vamos a ver que también se creó el bloque div que envuelve a esos 3 botones. Eso lo hicimos porque al render no le podemos pasar más de un elemento, entonces los guardamos en un elemento div.

- ¿Cómo evitamos que también se renderice el div? Usando algo que en React se llama Fragment. Un fragmento es un bloque en el código HTML que NO se renderiza. Que no existe. Sirve para agrupar elementos pero de forma "invisible", para no molestar en la estructura. Entonces, no es una etiqueta HTML convencional con semántica.

```typescript
const app = React.createElement(React.Fragment, null, [button1, button2, button3]);

root.render(app);
```
- Ahora sí. De esta forma, vemos los 3 botones en pantalla, y si analizamos el HTML, no aparece ningún `<div>`. 


## La historia cambia con JSX

- Como vimos, programar así... es un infierno. Es un código repetitivo, y nada declarativo. Es raro. Para esto, es mejor usar HTML y JavaScript Vanilla y listo ¿No? Pero acá viene lo importante: JSX. JSX es lo que hace que todo esto que vimos, cobre sentido y eficiencia. Vamos a verlo en el próximo apunte.