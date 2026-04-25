---
title: "Ejercicio de Maquetado HTML Parte 1"
description: "Ejercicio de Maquetado"
---


Ejercicio de Maquetado
Se trata de maquetar con puro HTML una página de una inmobiliaria. Lamentablemente no tengo la imagen exacta, pero le saqué una captura (sin mucha definición) como para tener la idea.

Aclaración: Baus constantemente los corrige a todos diciéndoles que el maquetado es pura y exclusivamente responsabilidad de HTML. Todo lo relacionado a la posición, colores, diseños y estilos en general de los elementos NO le corresponde a HTML. Le corresponde a CSS. Todo el tema de la ESTRUCTURACIÓN de la página es de HTML. Es darle sentido a cada cosa que vemos en la página, darle un significado con las etiquetas. Nada más.

También nos volvió a contar que HTML originalmente fue pensado para simular lo que sería la portada de un libro, o la tapa de un diario, es decir, pasar elementos de la vida real al9996* formato digital. 
El uso de 'tables' antiguamente se usaba también para el posicionamiento y la estructura de los elementos, pero eso es una MALA práctica. También algo que se hacía era ponerle `<div>` a todo. Eso no es algo que estrictamente esté mal, pero no es lo ideal.

Y por último hay que decir que, el cómo estructuramos la página también en cierto punto va a ser algo subjetivo. No existe una única forma correcta de hacer todo. Cada uno la maqueta como quiere, pero el objetivo es que siempre tenga sentido, buenas prácticas y todo tenga un significado correcto.

---  EJERCICIO  ---
El 'HEADER' (encabezado, lo primero que vemos) es toda la primer imagen que vemos, la cual contiene el logo, el h1 y el nav. Generalmente es lo que tienen los header de las páginas. Al ver que hay una imagen de fondo, eso nos da la pista de que está pensado que esa sección abarque el espacio que ocupa la imagen. Por lo tanto, esa imagen de fondo le corresponde al header.

'BIENESRAICES' es el logo. NO es el h1 ya que NO es el título. Es el Logo de la página (literalmente una `<img>`). Los enlaces de la derecha corresponden a una navbar (etiqueta `<nav>`).
Después, 'Venta de Casas y Departamentos Exclusivos de Lujo' eso es el h1 y es el título de la página. El h1 siempre tiene que ser uno sólo, y es quien le define el sentido a la página. OJO: La imagen que está de fondo NO es un elemento `<img>`. Es un estilo CSS (background-image). Siempre que vemos que hay muchas cosas sobre una imagen, es una background-image (asi como un background-color).

Lo que está justo abajo del Header y justo arriba del Main, es decir, esos 3 elementos que dicen 'Seguridad, El mejor precio, A tiempo' son una 'SECTION'. Una Section es una subdivisión de nuestra página, es decir, no es la división principal (el main). Si vemos bien, arriba de estos 3 títulos dice "Más Sobre Nosotros", esta sección es un 'about', basicamente información sobre la empresa. Estos 3 elementos NO son artículos. No son algo 'independiente' que tengan un sentido propio, simplemente es mera información acerca de esta página en particular. 

El 'MAIN' encapsula el contenido principal de la página, en este caso al ser una venta de casas, la sección de los anuncios de las casas sería el main. Cada anuncio del main (cada casa) es un 'article'. ARTICLE es algo que, por ejemplo, yo le puedo hacer 'clic' y puedo ir a más información sobre ese artículo. El artículo es algo que puede ser INDEPENDIENTE de la página. Algo que tiene sentido propio. Un artículo de un producto, una noticia, etc.

Debajo del MAIN vemos otra 'SECTION'. Con toda una imagen de fondo, vemos otra sección de la página. No es la división principal. Es solo una sección. Podemos ver que tiene un título, un párrafo y un botón/enlace.

Debajo de esa sección, vemos dos 'SECTION' más. Una de 'Nuestro Blog' y otra de 'Comentarios'. En realidad 'Comentarios' casi que ni siquiera da como para ser una sección, ya que simplemente es el comentario de un cliente. Pero lo marcamos como section. Tiene sentido que este separado de la section 'Nuestro Blog'. Comentarios se parece mucho a la primera section que marcamos, la de 'Seguridad, etc', es algo con lo que no podemos interactuar mucho o nada, no es algo independiente que podamos ampliar su detalle como si fuera un artículo.
Algo común en las secciones y que en este caso también sucede es que tienen un subtítulo (h2) que las identifica.

En la section 'Nuestro Blog' podemos ver que hay 2 artículos. Literalmente son 2 artículos de nuestro Blog. Por lo tanto detectamos dos `<article>`.

Por útlimo podemos ver lo que obviamente es el 'FOOTER' (Pie de página). Dentro de el lo que vemos es un navbar el cual su etiqueta es `<nav>`.

Esto sería el primer barrido, en el cual identificamos todas las etiquetas semánticas. [Sin h1, img, ni nada]. Ahora le vamos a hacer un segundo barrido en el cual vamos a identificar cada elemento de cada división que hicimos.

Se analiza siempre de izquierda a derecha y de arriba hacia abajo. Por lo tanto, lo primero que vemos es el logo (etiqueta `<img>`). Diferencia entre .PNG y .JPG: Los png no tienen fondo, tienen un nivel de transferencia. Los jpg, en cambio, son imagenes planas (con fondo).
El 'nav' debe contener una lista. En este caso, es una lista desordenada (`<ul>`). Generalmente en un navbar lo que hay es una LISTA de enlances. Por eso los `<a>` los colocamos dentro de los `<li>` de una `<ul>` o una `<ol>`.
En este caso es UL porque da igual el orden de esos enlaces. El orden en las listas solo importa si por ejemplo fueran los días de la semana, los meses del año, o algo asi.

Sigue el ejercicio en la Clase 5 parte 2.