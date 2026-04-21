---
title: "Estructura Básica y Favicon. DOCTYPE, html, head y body"
---

> Estructura HTML básica

- Todas las páginas web tienen una ESTRUCTURA. Si no tienen, no hay página entonces.

<!DOCTYPE html> 
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
</body>
</html>

- Esta es la estructura básica de una web. Vamos a explicar qué es cada cosa línea por línea.

<!DOCTYPE html> 

- Define el tipo de documento y la versión de HTML que estamos usando. En este caso, indica que estamos utilizando HTML5. Esta declaración es OBLIGATORIA y debe ir al inicio del documento.


<html lang="es">
</html>

- La etiqueta html es literalmente nuestra página web. TODO lo que va a tener nuestra página, tiene que estar dentro de esta etiqueta. El atributo lang="es" (language=español) indica que el idioma principal de la página es español. Esto ayuda a los navegadores, motores de búsqueda y tecnologías de accesibilidad, como los lectores de pantalla, a interpretar y leer correctamente el contenido.


<head>
</head>

- Dentro de head, va toda la información (todos los metadatos) de la página, otras configuraciones, y enlaces a otros archivos (generalmente CSS o JS). Es decir, acá aparece todo lo que NO podemos ver. Un ejemplo de lo que va en head, es el título de la página. Pero no es el título visual que vemos como un h1. Sino, el título que vemos, por ejemplo, en la pestaña del navegador. Y eso se hace con <title>Mi Página</title> Si bien no es obligatorio indicar el title, el no hacerlo no tiene ningún sentido. Es parte de la estructura básica.

- Otra etiqueta especial que se puede poner en <head>, es la etiqueta <style></style>. Dentro de esa etiqueta nosotros podemos escribir código CSS. Si bien esto no es la práctica ideal para usar CSS, es una opción. 

	<meta charset="UTF-8"> 

- Este es otro de esos elementos informativos. Y como vemos, es una etiqueta META. Toda etiqueta meta hace referencia a los metadatos de nuestro sitio. En este caso, la propiedad charset se refiere al conjunto de caracteres que va a usar nuestra página. Siempre hay que indicarlo, y lo más común es usar el UTF-8.


<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

- Otro metadato. El metadato viewport hace referencia a la pantalla visible. El ancho de la misma, va a ser el ancho del dispositivo con el cual estamos accediendo al sitio web. Esta dato, al igual que el anterior, también hay que indicarlo en el head. Es parte de la estructura básica de la página.


<body>
</body>

- Dentro de body va a estar TODO EL CONTENIDO VISUAL de nuestra página web. Es decir, todo lo que vamos a VER en la página tiene que estar obligatoriamente dentro del BODY (CUERPO).


> Favicons

- El favicon de una página es el pequeño ícono que aparece en la pestaña del navegador, al lado de su título. Para indicar cuál queremos usar, tenemos que escribirlo en la etiqueta <head>, con una etiqueta <link>. Dentro de <link>, vamos a usar el atributo "rel" (relationship) y ponerle el valor "icon", así:

	<link rel="icon" href="icono.png" type="image/png">

- En "href" ponemos la ubicación de nuestra imagen. Y en "type" se especifica el tipo de imagen, que generalmente es un archivo de tipo png, ico o svg.

	<link rel="icon" href="icono.ico" type="image/ico">