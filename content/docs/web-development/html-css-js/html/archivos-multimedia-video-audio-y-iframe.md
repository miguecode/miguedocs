---
title: "Archivos Multimedia (Video, Audio y Iframe)"
description: "¡Tu navegador no soporta el video!"
---


## Etiqueta `<video>`

<video controls autoplay muted src="mivideo.mp4" poster="miniatura.jpg" alt="Video muy lindo">
```text
¡Tu navegador no soporta el video!
```
`</video>`

- El atributo "src" sirve para indicar qué video vamos a mostrar.

- El atributo booleano "controls" muestra un reproductor para el video, con distintas opciones de volumen, pausa, adelanto o retroceso, entre otros. Es importante ponerlo porque sino el video no se reproduce.

- Ese texto que ponemos dentro de la etiqueta sólo se va a mostrar en caso de que, por algún motivo, el navegador no soporte el video, y por ende no lo muestre.

- El atributo booleano "autoplay" hace que el video se reproduzca automáticamente al entrar por primera vez. Pero no si recarga la página. Para que se reproduzca automáticamente hasta recargando la página, hay que usar -también- el atributo "muted". Esto hace el el video SIEMPRE se reproduzca automáticamente, ya sea entrando por primera vez o refrescando la página (y también hace que el video empiece sin volumen).

- El atributo "poster" sirve para cargar una imagen que queramos, y esa imagen es la que se va a mostrar a modo de "miniatura", mientras el video se está cargando o todavía no lo reproducimos.

- El atributo "alt" (alternative), cumple la misma funcionalidad que en las imágenes. Se trata de dar una breve descripción de lo que es el elemento. Es importante para la accesibilidad.

```text
<video src="videocorto.mp4" loop></video>
```
- El atributo "loop" hace que el video vuelva a reproducirse infinitamente cada vez que termina.

### Etiqueta `<track>`

```text
<video src="videocorto.mp4" loop>
	<track src="captions.vtt" default kind="captions"
	srclang="es" label="Español (Lationamérica)">
</video>
```
- La etiqueta `<track>` nos permite poner subtítulos en el video. Tiene distintos atributos como "src" para indicar el archivo de subtítulos, "default", "kind", "srclang", "label", entre otros.


## Etiqueta `<audio>`

- Si bien podemos reproducir videos en modo de audio usando `<audio>`, no es lo ideal para nada. Si vamos a usar `<audio>`, hay que pasarle realmente un audio. Maneja atributos similares a `<video>`. No hay mucho más para analizar.


## Etiqueta `<iframe>`

- La etiqueta `<iframe>` sirve para insertar elementos de otro sitio web en el nuestro. Por ejemplo, un visor del mapa de Google Maps o un reproductor de un video en YouTube.
 
- ¿Cómo la usamos? Necesitamos el código que ofrece esa misma página web externa. Generalmente, la opción se muestra como "Insertar", dentro de las opciones de "Compartir". Cuando nosotros le damos a Compartir a algún elemento que encontremos en la web, cuando nos muestre las opciones del medio que queremos usar, podemos ver que -a veces- aparece la opción de "Insertar" o "Incorporar", o algún sinónimo. Esa es la opción que nos va a brindar el bloque de código que nosotros tenemos que copiar, y después pegar en nuestro propio archivo HTML. Es una etiqueta `<iframe>` con algunos atributos que nosotros mismos podemos configurar a nuestro gusto.