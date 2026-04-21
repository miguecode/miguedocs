---
title: "Optimizar imágenes y tipos de imágenes"
---

> Optimización de imágenes

- El contenido multimedia es de lo más pesado que puede cargar una aplicación. Por eso es que tenemos que intentar optimizar estos archivos, para mejorar considerablemente el performance.

- Veamos un resumen rápido de qué tipos de imagen existen y en qué casos convienen:

1. JPG: Imágenes muy comprimidas, es decir, pesan menos. Son ideales para fotos.
2. PNG: Imágenes con mejor calidad, y por ende, menos comprimidas. Pesan mucho más. Son ideales para cuando queremos obtener transparencia, o imágenes que son un color sólido.
3. SVG: A diferencia de JPG y PNG, los SVG están creados a base de CÓDIGO. Son ideales para íconos y logotipos. Se construyen o "dibujan" a medida que el navegador los interpreta. 
4. GIF: No se recomienda usar GIF en ningún caso, amenos que quieras hacer una página de GIFs o quieras hacer un video muy corto.
5. WEBP: Inventado por Google, este formato reúne lo mejor de otros tipos. Están comprimidas, tienen buena calidad, sirven para fotos, admiten transparencia, son buenas para colores sólidos, y hasta admiten animaciones.

- Entonces, lo ideal es que las imágenes estén en formato ".webp". Y para ello, tenemos esta página:

https://squoosh.app/

- Esta herramienta nos permite reducir y mucho el peso de una imagen, con muchas opciones de formato y de otros ajustes. La idea es reducir la imagen lo más que podamos, sin perder tanto su calidad.

- También hay otras páginas para hacer esto, pero la de squoosh es buena opción.


> Optimización de imágenes con "srcset" y "sizes" 

- Un punto importante en la optimización de imágenes, es la resolución. Si nosotros tenemos una imagen de 1920x1440, no tiene sentido que en nuestra aplicación mostremos esa imagen con un hight y un width de 400, por ejemplo. Es decir, estamos mostrando de forma pequeña, una imagen que en realidad es mucho más grande.

- Y nosotros sabemos que a veces, queremos mostrar una imagen más grande o más chica, dependiendo de la resolución de la pantalla que esté usando el usuario.

- Por esto, en HTML podemos usar los atributos "srcset" y "sizes", dentro de las etiquetas "img".

- Los atributos srcset y sizes son esenciales para servir imágenes adaptativas, es decir, imágenes que se ajustan a diferentes tamaños de pantalla o resoluciones, lo que mejora el rendimiento y la experiencia del usuario. 

- Vamos a verlos por partes:

>> El atributo "srcset"

- Permite especificar mútiples fuentes de la misma imagen en diferentes resoluciones o tamaños. Cada fuente incluye un descriptor que indica cuándo se debe usar esa imagen. Estos descriptores pueden ser de dos tipos: Por resolución (2x, 3x...), o por ancho (480w, 800w...). Cuando decimos "múltiples fuentes" nos referimos a distintos archivos, que cada archivo es la misma imágen pero en distinto tamaño.

Ejemplos:

<img src="small.jpg" srcset="medium.jpg 2x, large.jpg 3x" alt="Imagen">

<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" alt="Imagen">

- Para que el navegador decida qué imagen debe usar de todas las que le seteamos en "srcset", tenemos que hacer uso del atributo sizes. Por eso es que estos dos atributos se usan en conjunto.

- "small.jpg", "medium.jpg" y "large.jpg" son 3 archivos distintos. Son la misma imágen, pero con distintos tamaños.

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



> <picture> y <source>", y su diferencia con "srcset con sizes"

- Ambos métodos sirven para optimizar imágenes en diferentes dispositivos y mejorar el rendimiento de nuestra web. La diferencia clave está en cómo y cuándo el navegador decide qué imagen mostrar.

1. Las etiquetas <picture> y <source>

>> ¿Qué hacen?
- Estas dos etiquetas, en conjunto, permiten definir DIFERENTES IMÁGENES según reglas específicas, como el tamaño de pantalla o la compatibilidad de formatos.	

>> ¿Cuándo usarlas?

- Se usan cuando queremos cambiar completamente la imagen, por ejemplo, usar una versión cuadrada en móvil y una panorámica en escritorio. Para experimentar podríamos poner una imagen de Messi, y que cuando el ancho de la pantalla sea menor a 400px, se ponga una imagen de Cristiano. O sea, son dos imagenes distintas, pero que ambas aparecen dentro del mismo elemento, por ende, en el mismo lugar y con los mismos atributos de identificación. Ya que van a estar siempre dentro de <picture>


2. Los atributos srcset y sizes

>> ¿Qué hacen?
- Estos dos atributos (no etiquetas), en conjunto, permiten definir DIFERENTES RESOLUCIONES de la misma imagen, y el navegador elige la mejor opción según la pantalla. Pero ojo con esto: en realidad, si bien es la misma imagen visualmente, son distintos archivos de la misma. Y nosotros mismos tenemos que crearlos manualmente. No se hace sólo.

>> ¿Cuándo usarlos?
- Se usan cuando queremos cambiar la resolución de una imagen sin cambiar su contenido o proporción. Es decir, la imagen es "siempre la misma", pero lo que hacemos variar es su resolución, con el fin de hacerla más grande o más pequeña. Lo que pasa acá es que supongamos que yo tengo la imagen: "selfie.jpg". Bueno, si yo quiero tener esa imagen pero más grande, es decir, la misma imagen pero con más resolución, tengo que yo mismo crearla con algun editor de imágenes y ponerle de nombre "selfie-grande.jpg". Entonces, si bien es la misma imagen pero más grande, en realidad es otro archivo distinto.


> Análisis de los dos métodos

- La diferencia está clara, el primer método lo que hace es cambiar la imagen según la resolución o el formato. Y el segundo, usa la misma imagen visualmente, pero con una resolución distinta. Ningún método es mejor que el otro, simplemente son diferentes. 


> Ejemplo de <picture> y <source>

<picture>
	<source srcset="imagen-movil.webp" media="(max-width: 600px)">
	<source srcset="imagen-tablet.webp" media="(max-width: 1024px)">
	<img src="imagen-escritorio.webp" alt="Imagen adaptable">
</picture>

- Si la pantalla es menor a 600px, carga imagen-movil.webp.
- Si es entre 600px y 1024px, carga imagen-tablet.webp.
- Si es mayor a 1024px, carga imagen-escritorio.webp. 

- El navegador evalúa media="" y elige la mejor imagen antes de descargarla.


> Ejemplo de srcset y sizes

<img 
	src="imagen-pequena.jpg" 
	srcset="imagen-pequena.jpg 480w, imagen-mediana.jpg 800w, imagen-grande.jpg 1200w" 
	sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
	alt="Imagen adaptable"
>

- Si la pantalla es menor a 600px, usa la imagen de 480w.
- Si es entre 600px y 1200px, usa la de 800w.
- Si es mayor a 1200px, usa la de 1200w.

- El navegador elige automáticamente la mejor resolución según el tamaño de pantalla y densidad de píxeles.


> Ejemplo de los dos métodos combinados

<picture>
	<source srcset="imagen-movil.webp 480w,
	imagen-movil-grande.webp 800w" media="(max-width: 600px)">
	
	<source srcset="imagen-tablet.webp 800w,
	imagen-tablet-grande.webp 1200w" media="(max-width: 1024px)">
	
	<img src="imagen-escritorio.webp" alt="Imagen adaptable">
</picture>
