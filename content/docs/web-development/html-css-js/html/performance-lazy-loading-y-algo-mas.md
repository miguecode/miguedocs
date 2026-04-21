---
title: "Performance. Lazy Loading y algo más"
---

> Lazy Loading en imágenes o iframes

- Lazy Loading = Carga perezosa. Es decir, "No cargar cosas que no se están viendo".

- loading="lazy" es un atributo que se usa en imágenes (<img>) y iframes (<iframe>) para posponer su carga hasta que estén cerca del viewport del usuario. Esto reduce el tiempo de carga inicial de la página y ahorra ancho de banda.

<img src="imagen.webp" alt="Ejemplo" loading="lazy">

- Sin loading="lazy": La imágen se carga de inmediato, afectando la velocidad de la página.
- Con loading="lazy": La imágen sólo se carga cuando el usuario se desplaza hacia ellas.

- Dónde usar loading="lazy"?
- En imágenes grandes o en galerías.
- En imágenes que no sean visibles al inicio (ejemplo: artículos largos).
- En iframes de videos de YouTube o mapas de Google.

<iframe src="https://www.youtube.com/embed/videoID" loading="lazy"></iframe>

- Cabe mencionar que para los iframes, hay una mejor forma de optimizar su carga, pero hay que usar un poco de JavaScript, para que el elemento sólo cargue hasta que el usuario interactúe con él. No vamos a verlo en este apunte, por más que sea algo simple de hacer.


> Uso de fetchpriority="high" en imágenes críticas

- Si una imagen es clave para la estructura de la página (como un logo o una foto de perfil), podemos decirle al navegador que la cargue antes que otras imágenes:

<img src="logo.webp" alt="Logo" fetchpriority="high">

- Lógicamente, NO es bueno abusar de esto, y pocas veces es necesario.


> Optimización de imágenes con "srcset" y "sizes" 

- Un punto importante en la optimización de imágenes, es la resolución. Si nosotros tenemos una imagen de 1920x1440, no tiene sentido que en nuestra aplicación mostremos esa imagen con un hight y un width de 400, por ejemplo. Es decir, estamos mostrando de forma pequeña, una imagen que en realidad es mucho más grande.

- Y nosotros sabemos que a veces, queremos mostrar una imagen más grande o más chica, dependiendo de la resolución de la pantalla que esté usando el usuario.

- Por esto, en HTML podemos usar los atributos "srcset" y "sizes", dentro de las etiquetas "img".

- Los atributos srcset y sizes son esenciales para servir imágenes adaptativas, es decir, imágenes que se ajustan a diferentes tamaños de pantalla o resoluciones, lo que mejora el rendimiento y la experiencia del usuario. 

- Vamos a verlos por partes:

>> El atributo "srcset"

- Permite especificar mútiples fuentes de la misma imagen en diferentes resoluciones o tamaños. Cada fuente incluye un descriptor que indica cuándo se debe usar esa imagen. Estos descriptores pueden ser de dos tipos: Por resolución (2x, 3x...), o por ancho (480w, 800w...).

Ejemplos:

<img src="small.jpg" srcset="medium.jpg 2x, large.jpg 3x" alt="Imagen">

<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" alt="Imagen">

- Para que el navegador decida qué imagen debe usar de todas las que le seteamos en "srcset", tenemos que hacer uso del atributo sizes. Por eso es que estos dos atributos se usan en conjunto.


>> El atributo "sizes"

- El atributo sizes define el ancho del área de visualización en la que se usará la imagen. Se utiliza en combinación con srcset para ayudar al navegador a decidir cuál es la mejor imagen para descargar según el ancho de la ventana.

Ejemplo:

<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
  alt="Imagen"
>

En este ejemplo, sizes indica que:

- Si el ancho de la ventana es menor o igual a 600px, usa una imagen de 480px.
- Si es menor o igual a 1200px, usa una imagen de 800px.
- De lo contrario, usa una imagen de 1200px.

		Tamaño de la pantalla	|	Imagen que se carga
		≤ 600px				|	small.jpg (480px)
		≤ 1200px				|	medium.jpg (800px)
		> 1200px				|	large.jpg (1200px)


- Los valores especificados en sizes se utilizan dinámicamente, y el navegador se ajusta automáticamente al redimensionar la ventana o cambiar la orientación de la pantalla. Internamente, funciona así:

- Cuando la página se carga por primera vez, el navegador evalúa el ancho de la ventana de visualización y el atributo sizes. Con esta información, selecciona la imagen más adecuada desde srcset para cargarla.

- Si se cambia el tamaño de la pantalla (ya sea redimensionándola en el navegador o girando la pantalla), el navegador lo detecta automáticamente, reevaluará el atributo sizes para determinar qué tamaño de imagen se necesita, y listo. Si se necesita una imagen nueva porque es óptima, la descarga y la muestra.