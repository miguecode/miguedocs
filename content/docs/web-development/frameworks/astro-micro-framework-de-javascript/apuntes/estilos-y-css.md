---
title: "Estilos y CSS"
description: "Los estilos se pueden aplicar de distintas maneras:"
---


## CSS en Astro

Los estilos se pueden aplicar de distintas maneras:

- CSS Global (estilos que se aplican a toda la app)
- CSS en Componentes (estilos locales)
- CSS en módulos
- Frameworks de CSS (Tailwind, Bootstrap...)


### Estilos locales

Son estilos que se aplican sólo a una sección de nuestro código, como un componente. Y no a toda la aplicación. Por ejemplo, cuando usamos la etiqueta `<style>` en nuestro componente Button.


### Estilos globales

- Dentro de 'src', vamos a crear una carpeta llamada styles. En ella, vamos a poner un archivo llamado global.css. 

- En global.css vamos a especificar estilos que vamos a aplicar en toda la aplicación a nivel global.

- Una vez escrito el archivo global.css, para que una página o un componente adquiera esos estilos, es necesario que los importe. Si no los importa, no los tendrá. Entonces, para probarlo creamos una página llamada global.astro y le escribimos esto:

---
import "../styles/global.css";
---

Y después, una estructura HTML sencilla con un h1 y un párrafo, para ver que los estilos de global.css se están aplicando a esta página.

Y en este archivo global.astro, también podemos importar componentes.

---
import "../styles/global.css";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
---

- Lo ideal es usar estilos globales, y que esos estilos se puedan aplicar a los distintos componentes de nuestra app. Eso hace que al querer cambiar el aspecto de la web, sólo tengamos que acudir a un archivo en común, y no a muchos distintos. Aunque claro, todo esto va a depender de qué tan compleja sea nuestra web.