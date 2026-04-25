---
title: "Layouts, páginas y plantillas"
description: "Los layouts son herramientas fundamentales para crear y organizar el contenido de nuestro sitio web de manera más eficiente y consistente."
---


## Layouts

- Los layouts son herramientas fundamentales para crear y organizar el contenido de nuestro sitio web de manera más eficiente y consistente.

- En Astro, los layouts son COMPONENTES. Es decir, se construyen, importan, y funcionan igual que cualquier otro componente de nuestro proyecto.

- Un layout suele incluir elementos como headers, footers, sidebars, y cualquier otro componente que se repita múltiples veces en las páginas de nuestro sitio.

- Sirven para mantener la coherencia visual. Eso significa que si nuestro sitio tiene 10 páginas, las 10 páginas tienen que tener un parentezco, una coherencia visual entre ellas. Que el usuario se dé cuenta de en qué sitio está independientemente del contenido de la página que está viendo.


## Creando un layout

- Para respetar una correcta estructura de proyecto, los layouts van a estar dentro de una carpeta llamada layouts. 

layouts > MiLayout.astro

- **Una etiqueta de Astro muy común de los layouts es**: `<slot />`

`<slot />`  nos permite definir espacios reservados en los componentes, en los cuales se puede insertar contenido dinámico. Esto es útil para la creación de componentes o layouts reutilizables que necesitan personalización en diferentes contextos. Entonces, `<slot />` actúa como un marcador de posición, el cual será reemplazado por contenido creado por fuera del componente. Es una forma de traer contenido exterior a este componente actual. Es como el app-root de Angular.


## Páginas

- Las distintas páginas o pantallas de nuestra web van a estar en la carpeta pages. Para probar estos últimos conceptos, vamos a crear una nueva página llamada main.astro, y en ella vamos a importar el layout propio que creamos. Y lo vamos a usar ahí.

- Las páginas, al igual que los layouts, son componentes Astro y por ende tienen la misma estructura (lógica, estructura visual, estilos).

- Astro siempre va a mostrar "index.astro" como su primer página. 

- Para cambiar de página en página, simplemente en la URL especificamos el archivo con /mi-pagina.

- Con esta lógica, cada 'page' que creamos puede tener su propio layout, y sus propios componentes.


## Plantillas

- Las plantillas funcionan de manera similar a los layouts, pero están mas enfocadas a proporcionar una estructura -específica- para partes de contenido que pueden repetirse en diferentes páginas. Por ejemplo, una plantilla puede ser un diseño específico para mostrar el artículo de un blog.

- Entonces, 'layout' y 'plantilla' son conceptos MUY similares. Para diferenciarlos podríamos decir que los Layout son más generales y globales, son maquetas para cada página de la web. Y una plantilla, son maquetas no tan generales, sino que servirían de maquetas para distintas partes más específicas de una página. Por ejemplo, la plantilla de un artículo, la plantilla de una sección, la plantilla de un contenedor de botones.


## Herencia de Layouts

- La herencia de layouts se refiere a crear un layout dentro de otro layout. Esto es útil cuando tenemos distintas secciones en nuestro sitio que comparten algunas pero no todas las características del layout principal. 

- Para hacerlo, simplemente creamos otro layout llamado "SecondLayout". Y en la estructura de este layout secundario, vamos a invocar al layout que creamos antes, el "MyLayout". De esa forma, estaríamos haciendo que este segundo layout sea hijo del primero.