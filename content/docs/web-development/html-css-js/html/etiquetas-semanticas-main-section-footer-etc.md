---
title: "Etiquetas semánticas (Main, Section, Footer, etc.)"
description: "Etiquetas semánticas"
---


## Etiquetas semánticas

- Estas etiquetas existen para expresar el significado de las distintas secciones, partes o elementos de nuestra página. Son esenciales para construir un HTML semántico y, por consecuencia, tener un sitio con mucho mejor SEO y Accesibilidad.

- Recordemos que, en realidad, todas o la gran mayoría de etiquetas que usamos tienen su significado semántico. Es decir, cuando usamos `<p>` para escribir un párrafo, también estamos aportando a la semántica. Pero ahora vamos a ver etiquetas que su propósito es agrupar a otros elementos o indicar secciones, y de forma semántica. 

- Esto quiere decir que estas etiquetas que vamos a ver, por sí solas no muestran nada. Su propósito es pura y exclusivamente estructurar la página de forma semántica, para mejorar el SEO y la accesibilidad.

- Vale mencionar que todas estas etiquetas van dentro de la etiqueta `<body>`.

*********    Índice de etiquetas explicadas   *********
Header, Nav, Main, Aside, Section, Article, Footer, Div, Span, Time, Address, Strong, Mark, Figure y Figcaption, Details y Summary. 


header: Es el encabezado. Agrupa todo lo que va en el tope de la página, como el logo, un navbar, u otras opciones como el botón para cambiar de tema. Y puede haber más de un header.

nav: Crea grupos de navegación importantes. Generalmente, es una lista de enlaces. La práctica recomendada es que contenga a una etiqueta de listas (como ul, ol o dl) (a menos que vayamos a poner un sólo item, en ese caso no es necesaria la lista). Hay que decir que no es necesario usar Nav si vamos a agrupar enlaces internos de un artículo o los enlaces del pie de página, esto es porque nav lo queremos usar más para la navegación importante de la página. 

- **Ejemplo de uso de nav**: 

`<nav>`
```typescript
<a href="/" class="logo">🌎 MiWeb</a>
<button class="menu-toggle">☰</button>
<ul>
	<li><a href="/inicio">Inicio</a></li>
	<li><a href="/blog">Blog</a></li>
	<li><a href="/contacto">Contacto</a></li>
</ul>
```
`</nav>`


main: Es el contenido principal de la página, la sección más importante de todas.

aside: Es una sección secundaria, la cual puede estar o no relacionada con el contenido principal, pero no tanto. Contiene información o elementos complementarios, no principales. También suele usarse para la publicidad.

section: Hace referencia a una sección de nuestro contenido. Puede aparecer dentro de otros contenedores, como main, aside o misma en el body. Se usa cuando el contenido forma parte de algo más grande.

article: Es una etiqueta autocontenida, es decir, no necesita del resto de la página para tener sentido, es más individual. Dentro de article podría haber un header, un main, un footer, sections, y demás. Por ejemplo, cuando posteamos un artículo de un blog.

footer: Es el pie de página, va siempre abajo de todo. Suele contener enlaces, contacto u otra información.

div: Es una mera división, pero semánticamente no dice nada. Es decir, sólo sirve para agrupar uno o más elementos, pero a diferencia de todas las demás etiquetas de este apunte, semánticamente no significa nada. No ayuda al SEO, pero no significa que no la tengamos que usar. Lógicamente, abusar de esta etiqueta no sería correcto.

span: Al igual que div, span tampoco tiene significado. Sólo sirve para agrupar texto dentro de una línea, y no genera un bloque. Se usa siempre para seleccionar partes de un texto, y así darles estilo con CSS.

- Div y Span son las únicas dos etiquetas del apunte que NO tienen significado semántico -

strong: Se usa para indicar importancia y una énfasis fuerte en una parte de un texto. Se usa cuando el contenido es realmente importante y debe destacarse siempre, en cualquier contexto. Es semántico y enfatiza la importancia.

mark: Es similar a strong porque también resalta texto, pero no es lo mismo. Mark se usa para destacar información de un texto cuando esa información es importante sólo en ese contexto. Es decir, no tiene que destacarse siempre, sólo en este caso. Es algo mas temporal o circunstancial. En cambio, strong es más prominente, ya que indica una importancia permanente en cualquier contexto.

- **Ejemplo para diferenciar strong y mark**: 

`<p>``<strong>`Importante:`</strong>` El examen final será el `<mark>`10 de marzo`</mark>`. Prepárense bien.`</p>`

- **Aclaración**: Todas las etiquetas semánticas pueden tener dentro de ellas un header, main, footer, y demás. 
- **Aclaración**: Aunque sorprenda, "card" NO es una etiqueta HTML. 

time: Se usa para escribir fechas o tiempos, así:
`<p>`El evento será el <time datetime="2025-06-15">15 de junio de 2025`</time>`.`</p>`

address: Se usa para escribir información de contacto.
`<address>`
  `<p>`Contáctame en: <a href="mailto:correo@example.com">correo@example.com`</a>``</p>`
`</address>`

figure y figcaption: Figure es para englobar a una etiqueta img, a la cual queremos ponerle una descripción asociada. Para esa descripción, usamos figcaption.

`<figure>`
```text
<img src="imagen.jpg" alt="Un hermoso paisaje">
<figcaption>Un hermoso paisaje en la montaña.</figcaption>
```
`</figure>`

details y summary: Se usa cuando queremos mostrar u ocultar información de forma interactiva.

 `<details>`
```text
<summary>¿Qué es HTML?</summary>
<p>HTML es un lenguaje de marcado para crear páginas web.</p>
```
`</details>`