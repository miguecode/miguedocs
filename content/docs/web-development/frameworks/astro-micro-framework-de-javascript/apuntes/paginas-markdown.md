---
title: "Páginas Markdown"
---

> Crear páginas Markdown

- En el contexto de la creación de un blog, vamos a ver cómo podemos crear nuestros distintos posteos usando markdown como páginas:

- Dentro de 'pages', creamos una carpeta llamada 'posts'. Dentro de esta carpeta estará cada unos de nuestros posteos. Y los vamos a hacer en formato MarkDown (.md).

pages > posts > post-1.md

- Ese archivo markdown va a ser nuestro primer post. En él vamos a escribir esto:

---
title: "Mi primer post"
pubDate: 2024-04-05
descripcion: "Este es el primer post de mi nuevo blog."
author: "Yo, Miguel"
image:
	url: 'https://docs.astro.build/assets/full-logo-light.png'
	alt: "La imagen del post"
tags: ["astro","blog","learning"]
---

# Mi primer post

Lorem ipsum (Varios párrafos).


- Ahora, en blog.astro vamos a poner nuestra lista de post's:

<ul>
	<li><a href="/posts/post-1">Post 1</a></li>
</ul>

Al usar la etiqueta 'a', el usuario va a entrar a cada posteo que desee.