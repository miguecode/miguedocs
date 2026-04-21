---
title: "Metatags (Etiquetas Meta)"
---

> Metatags

- Como dijimos antes, dentro de la etiqueta <head>, nosotros vamos a colocar, entre otras cosas, metadatos. Es decir, información de nuestro sitio. Todo lo que va en head es lo que el usuario no ve: Metadatos, configuraciones y llamadas a otros archivos o recursos (como archivos CSS o JS). 

- Estos metadatos describen ciertos aspectos de nuestro sitio, y se escriben con la etiqueta <meta>. Son una pieza principal para tener un buen SEO en nuestra página. Como dijimos antes, el SEO (Search Engine Optimization) hace referencia al posicionamiento de nuestro sitio en los motores de búsqueda. Si tenemos un buen posicionamiento, cuando alguien haga una búsqueda en un explorador, nuestro sitio va a aparecerle más arriba, y por ende, vamos a tener más visitas.

- Antes de empezar hay que decir que <html lang="es">, ese atributo "lang", si bien no es una metatag, también influye en el SEO y la accesibilidad.

- Ahora sí, veamos ejemplos de metatags:

1.	<meta charset="UTF-8">

- Sirve para decirle al navegador que la codificación permita todo tipo de caracteres, incluyendo tildes y demás. Es muy importante. 


2.	<meta name="viewport" content="width=device-width, initial-scale=1.0">

- Hace referencia al tamaño de la pantalla. Al indicarle "width=device-width", estamos diciéndole que el ancho de nuestra página sea igual al ancho del dispositivo. Es importante ponerlo siempre. Y lo de "initial-scale=1.0" hace referencia al zoom de la página. Es necesario para que, cada vez que ingresemos a la página, el zoom esté adaptado a 100%, independientemente del dispositivo que estemos usando.

3.	<title>Document</title>

- Indica cuál va a ser el título que veamos, por ejemplo, en la pestaña del navegador. 


>> Esas son las 3 metatags propias de la estructura básica de una página. A partir de ahora, vamos a ver que todas las demás etiquetas meta van a usarse con el atributo "name" (para indicar a qué metatag nos referimos) y el atributo "content" (su contenido), nada más.


> Description

<meta name="description" content="Esta es la descripción de la página. Se recomienda que tenga aproximadamente 100 caracteres.">

> Keywords

<meta name="keywords" content="palabras,clave,para,cuando,alguien,busque,en,internet">

> Autor

<meta name="author" content="Miguel Ángel Gil">

> Robots (no se suelen usar)

<meta name="robots" content="noindex">
<meta name="robots" content="nofollow">
<meta name="robots" content="nosnippet">
<meta name="robots" content="noarchive">
<meta name="robots" content="noimageindex">

- Hay que entender que, por defecto, esos valores están sin el "no" adelante. Es decir, están todos activados. Pero al ponerles el "no", los estamos desactivando.

- Con noindex le decimos a los motores de búsqueda que no muestren la página en los resultados de búsqueda.
- Con nofollow le decimos a los motores de búsqueda que no sigan los enlaces dentro de la página.
- Con nosnippet le decimos a los motores de búsqueda que no tomen fragmentos de nuestra página y los muestre en los resultados de búsqueda. Por ejemplo, cuando googleamos una receta y nos salen directamente los pasos en vez de mostrar sólo la página. O cuando buscamos el traductor y nos sale la función del traductor en los resultados en vez de sólo el link a la página.
- Con noarchive le decimos a los motores de búsqueda que no puedan almacenar información de la página en la memoria caché.
- Con noimageindex le decimos los motores de búsqueda no muestren imágenes de la página en los resultados de búsqueda. 

- Podemos combinarlas como nosotros queramos, así: 

<meta name="robots" content="noindex, nofollow, noimageindex">

- Obviamente, estas etiquetas meta van totalmente en contra del SEO. Pero bueno, son cosas que podemos poner para que el navegador sepa qué hacer con nuestro sitio.


> Open Graph metatags

- Estos metatags, cuyos name empiezan con el prefijo "OG:", hacen referencia a lo que se muestra cuando compartimos la URL de nuestra página. Por ejemplo, cuando pasamos el link de una página por mensaje de WhatsApp, o cuando twitteamos el link de una página, o cuando la publicamos por Facebook, o por LinkedIn, básicamente, cuando compartimos el enlace al sitio. 

- Por ejemplo, cuando compartimos un video de YouTube por WhatsApp, no sólo se va a ver la URL en crudo, sino que se va a mostrar una imagen, un título y una descripción, entre otros posibles elementos. Bueno, todo esto es configurable usando los Open Graph metatags.

<meta property="OG:title" content="Portfolio de Miguel Ángel Gil">
<meta property="OG:image" content="imagen-de-perfil.jpg">
<meta property="OG:description" content="Portfolio de Miguel Ángel Gil, desarrollador Frontend.">
<meta property="og:type" content="website" />
<meta property="OG:url" content="[La URL a la que queremos redirigir al usuario (opcional)]">

- Este último metatag de URL, se suele usar para eliminar el "www". Por ejemplo, si nuestra página se llama miguel.com, cuando alguien tipee "www.miguel.com", lo que nosotros tenemos que hacer es redirigirlo a miguel.com. Para eso usamos el OG:url. 

- Para ver una previsualización de esto, y así poder probar su funcionamiento, podemos ponernos a compartir la URL escribiéndolo en un tweet, o mejor, usar alguna de estas páginas:

	https://www.opengraph.xyz/
	https://www.metatags.io/

- Esto va a mostrar cómo se va a ver nuestro enlace compartido en las redes sociales más comunes.


> Theme color

	<meta name="theme-color" content="#ff6600">

- Algunos navegadores en dispositivos móviles permiten personalizar el color de la barra de búsqueda o de información. Con theme color, podemos elegir ese color.


> Format-detection

	<meta name="format-detection" content="telephone=no">

- Algunos navegadores como Safari convierten números en enlaces de teléfono automáticamente. Para evitarlo, usamos esa metatag.