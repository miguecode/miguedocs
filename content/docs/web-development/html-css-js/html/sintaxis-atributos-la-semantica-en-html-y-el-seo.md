---
title: "Sintaxis, Atributos, la Semántica en HTML y el SEO"
---

> Sintaxis básica HTML

- Todo se basa en TAGS (ETIQUETAS). Veamos un ejemplo:

	<p>Contenido de la etiqueta</p>

- La etiqueta "p" significa "paragraph", es decir, párrafo. 

- La mayoría de etiquetas en HTML necesitan tener su apertura y su cierre. En este caso, <p> es la etiqueta de apertura y </p> la de cierre. Son exactamente lo mismo, pero las de cierre llevan un "/" después de "<".

- Un secreto: Hay muchas etiquetas a las que podemos no ponerle la etiqueta de cierre, e igualmente va a funcionar. Pero eso es una mala práctica, nosotros tenemos que centrarnos en siempre abrir y cerrar las etiquetas.

- TODAS las etiquetas en HTML tienen una función. Aunque cabe decir que hay muchas que, con el paso del tiempo, se volvieron obsoletas y usarlas puede ser una mala práctica. Por ejemplo, la etiqueta <b> (bold, es decir, negrita) ya no suele usarse de forma semántica. Lo correcto es dar estilos con CSS, y no con HTML. Para hacer énfasis en la importancia del texto, lo correcto es usar la etiqueta <strong>, y estilarla con CSS. Hay que respetar las funciones y los significados de cada etiqueta, esa es la esencia de escribir bien el código HTML, y es importantísimo para el SEO y la Accesibilidad (dos temas de los cuales vamos a hablar más en otros apuntes).

- Las etiquetas son esto: <Etiqueta>. Y los elementos serían esto: <Etiqueta>Contenido</Etiqueta>

- Todas las etiquetas pueden escribirse en mayúscula si quisiéramos, o sea: <P>Hola</P>. Pero no es recomendado. Lo más común es hacerlo en minúsculas.


> Atributos

- Los elementos HTML pueden tener ATRIBUTOS, que son palabras clave que pueden agregarle información al elemento, o cambiarle su funcionalidad, o su aspecto. Los atributos se ponen dentro de la etiqueta de apertura, y hay dos tipos. Los de clave:"valor", y los booleanos. 

- En este caso, img es una etiqueta que no necesita etiqueta de cierre. Y vemos que aparece un atributo llamado "src". Este atributo, tiene un valor escrito entre " ". La verdad es que las comillas NO son obligatorias (a menos que el valor tenga espacios). O sea, podríamos poner:   src=Hola.jpg, y funcionaría. Pero esto es una mala práctica. Lo correcto es que siempre pongamos las comillas "".

	<p hidden>Este párrafo no se va a ver</p>

- En este párrafo, vemos que aparece el atributo booleano hidden. Es un atributo booleano ya que no tiene valor. Este tipo de atributos funcionan así: Si aparecen declarados, es porque su valor es true. Y si no aparecen, es porque su valor es false. En este caso, como pusimos hidden, el párrafo va a estar oculto. Así funciona ese atributo, y se puede poner en cualquier etiqueta HTML.


>> Los atributos ID y class

- Dos atributos muy típicos de HTML son ID y class. ID Sirve para identificar al elemento, para diferenciarlo de todos los demás. Por eso, lo correcto es que una misma ID no se repita en más de un elemento. Y el atributo class, sirve también para identificar elementos, pero de forma grupal. Muchos elementos pueden tener la o las mismas clases. 


> Semántica y SEO

- Algo CLAVE a entender es que HTML, además de estructurar una página, su propósito es "etiquetar qué es cada cosa". Y aunque suene redundante, de esto se trata la semántica y el SEO (Search Engine Optimization).

- El SEO, es decir, la optimización en buscadores, hace referencia al posicionamiento de nuestra página en los resultados de los buscadores, como por ejemplo, Google. Si nuestro sitio web tiene un buen SEO, tenemos más chances de que, al hacer una búsqueda en Google (u otro motor de búsqueda), nuestra página aparezca arriba en los resultados. Es decir, que tenga un buen posicionamiento y por ende más visibilidad.

- Tener un código HTML con una buena semántica no sólo sirve para el SEO, sino también para la accesibilidad. Una buena semántica ayuda a que los navegadores, motores de búsqueda y herramientas de accesibilidad comprendan mejor la estructura de la página. Y justamente, tener una mejor accesibilidad se traduce en tener mejor SEO.

- El SEO depende de muchos factores, y uno de los más importantes es la correcta escritura del HTML. Un ejemplo básico es el uso de encabezados. Tener un <h1> correctamente definido mejora el SEO, ya que los motores de búsqueda lo usan para entender el contenido de la página.

- Nosotros tenemos que encargarnos de que las etiquetas que usamos en HTML, tengan un sentido REAL, es decir, una BUENA SEMÁNTICA. Por algo se llaman ETIQUETAS. A los distintos elementos de nuestra página les tenemos que poner sus etiquetas correspondientes, y no cualquier cosa. Es como si yo tengo un pequeño artículo en mi página, y en vez de ponerle la etiqueta <article>, le pongo la etiqueta <div>. Visualmente no habrá diferencia, pero semánticamente sí. Para una correcta semántica, lo correcto en este caso es usar <article>, ya que le indica a los motores de búsqueda y lectores de pantalla que se trata de un contenido independiente y significativo.

- Otro ejemplo de buena semántica es que si voy a poner una sección abajo de todo como pie de página, a este elemento contenedor no tengo que ponerle <div>, sino que tengo que ponerle <footer>. De eso se trata la semántica en HTML, de usar etiquetas que TRANSMITEN EL SIGNIFICADO REAL de los contenidos de nuestra página web.

- Otro aspecto importante para el SEO son los METADATOS. Esto se define en HTML. Pero vamos a verlo más adelante, en otro apunte.