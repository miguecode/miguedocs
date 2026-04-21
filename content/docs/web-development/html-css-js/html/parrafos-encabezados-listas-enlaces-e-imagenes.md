---
title: "Párrafos, Encabezados, Listas, Enlaces e Imágenes"
---

> Comentarios en HTML

<!-- Esto es un comentario en HTML -->


> Párrafos

<p>Este es mi párrafo</p>

- Cada párrafo tiene que tener UNA idea específica. UNA intención. Es correcto usar más de un párrafo, pero no para usar un sólo párrafo para muchas ideas distintas.


> Encabezados

h1, h2, h3, h4, h5, h6

<h1>Este es mi título</h1>

- Cada página web tiene que tener UN h1. Es la etiqueta más importante para el SEO, y tiene que tener siempre uno sólo. Tiene que ser lo más descriptivo posible.

- Los subtítulos van con h2, los sub-subtítulos van con h3, y así... hasta el 6.


> Listas

- Existen dos tipos de listas principales, las ordenadas y las que no tienen orden:

<ol> (Ordered list - Listas con orden, enumeradas)
<ul> (Unordered list - Listas sin orden establecido, sólo son items)

- Independientemente del tipo de lista, dentro de cada una van etiquetas '<li>' (List Item)

- Ambas listas tienen un atributo 'type', que las modifican de distinta manera:

- La <ol> puede tener signos de orden 123, ABC, I II III, etc.

- La <ul> puede tener distintos tipos de viñeta como "dots", "circle", "square", entre otros.

>> Definition List <dl>

- También existen las <dl> (Definition List), que no se usan tanto. Son listas de definición y sirven como diccionarios, es literalmente una lista de definiciones.


> Enlaces

<a>Este es mi enlace</a>

- "a" viene de "anchor", es decir, ancla. "Ancla" hace referencia a "Enlace".

- Esta etiqueta, para tener sentido, necesita del atributo HREF. En él, se va a especificar el lugar al que vamos a enlazar, que puede ser otra página dentro de nuestro sitio, o a uno fuera de nuestro sitio. O también puede ser a un elemento dentro de nuestra misma página. O incluso también, podemos hacer que un enlace realice una acción, como descargarnos un archivo, o abrir la app de Correo, o llamar a un número de teléfono. Todo esto lo podemos hacer con la etiqueta <a>. Veamos ejemplos en cada caso:

>> Enlaces hacia elementos de nuestra misma página

<a href="#">Ir arriba de todo de esta página</a>
<a href="#tema3">Ir a la sección del Tema 3</a>

- El "#" se usa cuando vamos a ir a algún lugar dentro de la página actual en la que estamos. Ahí, pusimos "#tema3" asumiendo que existe algún elemento que tenga el atributo id="tema3"
- Poner "#" sólo, lo que hace es refrescar la página.

>> Enlaces hacia otras páginas de nuestro sitio

<a href="inicio.html">Ir a la página de Inicio</a>

- Así, vamos a otro de nuestros archivos en el proyecto. En este caso, a la página "archivo.html".

- También lo podemos combinar así:
<a href="pagina2.html#tema4"> Ir al tema 4 de la página 2</a>


>> Enlaces hacia sitios externos al nuestro

<a href="https://youtube.com/" target="_blank" rel="noopener">Youtube</a>

- De esta forma, nos vamos a un sitio externo al nuestro, en este caso, YouTube. El atributo target="_blank" sirve para que, al hacer clic en el enlace, nos abra una nueva pestaña. Por defecto, target tiene el valor "_self", que lo que hace es mantenerte siempre en la misma pestaña, o sea que nos sacaría de nuestra página, lo cual no suele ser lo que queremos.

>> Atributo "rel" para la seguridad en enlaces externos

- El atributo "rel" es muy importante por un tema de seguridad. Al ponerle "noopener", le impedimos al sitio externo, en este caso YouTube, a modificar "el regreso a nuestra web". Ya que si no ponemos el noopener, si una persona hace clic en nuestro enlace para ir a YouTube, cuando haga clic en "atrás" para volver a nuestro sitio, YouTube tiene la posibilidad de mandarla a otro lugar completamente distinto, gracias a tener acceso al objeto window.opener. Eso es peligroso y hay que evitarlo, pero hay una forma todavía mejor que noopener.

- Un valor todavía mejor que noopener, es noreferrer. El "noreferrer" funciona exactamente igual que el "noopener", pero todavía mejor: evita que el sitio externo al que nos dirigimos sepa de dónde viene el visitante. Entonces, no sólo le impedimos el acceso a window.opener, sino que encima impedimos que sepa de dónde estamos llegando a su sitio. En navegadores más antiguos, es necesario usar ambos valores para que sea totalmente seguro, así: rel="noopen noreferrer". Pero hoy en día, con el noreferrer es suficiente.

<a href="https://youtube.com/" target="_blank" rel="noreferrer">Youtube</a>

- Así y todo, todavía hay un valor más que podemos agregar para que sea más seguro. Y es "nofollow". Este valor hace sirve para decirle, por ejemplo a Google, que ese enlace "no importa", es decir, le pedimos que no lo siga o indexe. Eso también ayuda a nuestro SEO, ya que es una forma de decir que "lo único que importa es mi sitio, los enlaces que tengo dentro no importan".

- Entonces, la manera más segura y definitiva de todas es:

	<a href="https://youtube.com/" target="_blank" 
	rel="noopener noreferrer nofollow">Youtube</a>

- Usamos noopener -por las dudas- de que el usuario esté usando un navegador antiguo el cual no reconoce correctamente el valor noreferrer.

- Recordemos que todos estos valores para obtener más seguridad, son para los enlaces a sitios que son externos al nuestro.

>> Enlaces con funciones especiales

<a href="terms.html" download> Descargar Términos y Condiciones</a>

- Con el atributo "download", hacemos que al hacer clic en el enlace, se descargue el archivo que indiquemos en el "href".

<a href="mailto:junmigue7@gmail.com">Mandar un correo</a>

- Si ponemos "mailto:" seguido de una dirección de correo electrónico en nuestro atributo "href", hacemos que, al hacer clic en el enlace, el dispositivo abra su aplicación de Correo predeterminada, escribiéndole a ese correo que indicamos.

<a href="tel:+5491234567">Llamar a este número</a>

- El "tel:" sirve para que, al hacer clic en el enlace, nos abra nuestra aplicación de Teléfono predeterminada, marcando ese número que le indicamos.

- Otro atributo que puede aparecer en los enlaces es el "title". En realidad, title se puede poner en cualquier otra etiqueta HTML. Pero se usa comúnmente en enlaces, imágenes, o elementos que no tengan un texto que describa lo que hacen. Title funciona como un tooltip. Al pasarle el cursor por encima, va a aparecer lo que nosotros coloquemos.

<a href="inicio.html" title="Ir a inicio">Hace clic acá</a>


> Imágenes

<img src="./assets/mi-foto.jpg" alt="Una foto mía en el colegio">

- La etiqueta <img> se AUTOCIERRA. Entonces, no necesita una "etiqueta de apertura" y "de cierre". Es simplemente <img>. Se le dicen "self closing tags" (etiquetas que se cierran a ellas mismas).

- Con el atributo "src" (source), indicamos qué imagen vamos a mostrar. Puede estar dentro de nuestro proyecto, o fuera de él.

- El atributo "alt" (alternative), sirve para explicar qué es nuestra imagen. Sirve para la accesibilidad y para el SEO. También, si por algún motivo la imagen no cargara, aparecería el texto de alt.

- Las imágenes son un elemento al que se le suele poner el atributo "title", el cual sirve como tooltip. Es decir, la fracesita que aparece al pasar el mouse por encima de la imágen. 

- Las imágenes pueden tener más atributos quizá un poco más avanzados como srcset, que buscan optimizar el rendimiento o la adaptabilidad de las imágenes que usamos. Pero eso está en otro apunte llamado "Optimización de Imágenes".