---
title: "Rutas y navegación"
description: "En Astro, las rutas se definen a través de la estructura de archivos del proyecto, específicamente en en la carpeta 'pages', la cual está en 'src'."
---


## Rutas

- En Astro, las rutas se definen a través de la estructura de archivos del proyecto, específicamente en en la carpeta "pages", la cual está en "src".

- Entonces, cada archivo dentro de "pages" será una ruta en nuestro sitio. index.astro va a ser nuestra primer página, y la principal. Esto es así porque el servidor lo primero que va a ir a buscar es ese archivo index.astro.

- Dentro de "pages" podemos tener más carpetas, es decir, crear sub-rutas. Esto, lógicamente de modulizar la estructura y facilitar la navegación. La idea sería dividirlo por secciones. Este es el mismo enfoque de Angular con los archivos de rutas.

src
|---> pages
```typescript
|---> blog
|	|---> index.astro
|	|---> otra-pagina-de-blog.astro
|---> chat
	|---> index.astro
	|---> otra-pagina-de-chat.astro
```
- **En la URL, se vería así**: 

src/pages/index.astro = /
src/pages/about.astro = /about
src/pages/blog/index.astro = /blog/
src/pages/blog/otra-pagina-de-blog.astro = /blog/otra-pagina-de-blog


## Navegación entre páginas (rutas)

- En Astro, esto se puede resolver con la etiqueta `<a>` de HTML.

`<nav>`
```typescript
<a href="/">Inicio</a>
<a href="my-page">Mi Página</a>
<a href="second-page">Mi Segunda Página</a>
```
`</nav>`    


### Rutas dinámicas

- Las rutas dinámicas son otra forma de realizar la navegación en Astro. Se hacen mediante scripts.

src/pages/blog/[slug].astro   pagina1   pagina2

Dependiendo de lo que vayamos a hacer, [slug] va a ser reemplazado por la página que queramos. Si una condición se cumple, será reemplazado por pagina1 y sino, por pagina2.