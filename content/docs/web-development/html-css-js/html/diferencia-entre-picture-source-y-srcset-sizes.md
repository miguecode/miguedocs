---
title: "Diferencia entre Picture+Source y Srcset+Sizes"
description: "Ambos métodos sirven para optimizar imágenes en diferentes dispositivos y mejorar el rendimiento de nuestra web. La diferencia clave está en cómo y cuándo el na..."
---


## Diferencia entre "`<picture>` con `<source>`", y "srcset con sizes"

- Ambos métodos sirven para optimizar imágenes en diferentes dispositivos y mejorar el rendimiento de nuestra web. La diferencia clave está en cómo y cuándo el navegador decide qué imagen mostrar.

1. Las etiquetas `<picture>` y `<source>`

### ¿Qué hacen?
- Estas dos etiquetas, en conjunto, permiten definir DIFERENTES IMÁGENES según reglas específicas, como el tamaño de pantalla o la compatibilidad de formatos.	

### ¿Cuándo usarlas?

- Se usan cuando queremos cambiar completamente la imagen, por ejemplo, usar una versión cuadrada en móvil y una panorámica en escritorio. Para experimentar podríamos poner una imagen de Messi, y que cuando el ancho de la pantalla sea menor a 400px, se ponga una imagen de Cristiano. O sea, son dos imagenes distintas, pero que ambas aparecen dentro del mismo elemento, por ende, en el mismo lugar y con los mismos atributos de identificación. Ya que van a estar siempre dentro de `<picture>`


2. Los atributos srcset y sizes

### ¿Qué hacen?
- Estos dos atributos (no etiquetas), en conjunto, permiten definir DIFERENTES RESOLUCIONES de la misma imagen, y el navegador elige la mejor opción según la pantalla. Pero ojo con esto: en realidad, si bien es la misma imagen visualmente, son distintos archivos de la misma. Y nosotros mismos tenemos que crearlos manualmente. No se hace sólo.

### ¿Cuándo usarlos?
- Se usan cuando queremos cambiar la resolución de una imagen sin cambiar su contenido o proporción. Es decir, la imagen es "siempre la misma", pero lo que hacemos variar es su resolución, con el fin de hacerla más grande o más pequeña. Lo que pasa acá es que supongamos que yo tengo la imagen: "selfie.jpg". Bueno, si yo quiero tener esa imagen pero más grande, es decir, la misma imagen pero con más resolución, tengo que yo mismo crearla con algun editor de imágenes y ponerle de nombre "selfie-grande.jpg". Entonces, si bien es la misma imagen pero más grande, en realidad es otro archivo distinto.


## Análisis de los dos métodos

- La diferencia está clara, el primer método lo que hace es cambiar la imagen según la resolución o el formato. Y el segundo, usa la misma imagen visualmente, pero con una resolución distinta. Ningún método es mejor que el otro, simplemente son diferentes. 


## Ejemplo de `<picture>` y `<source>`

```html
  `<picture>`
    <source srcset="imagen-movil.webp" media="(max-width: 600px)">
    <source srcset="imagen-tablet.webp" media="(max-width: 1024px)">
    <img src="imagen-escritorio.webp" alt="Imagen adaptable">
  `</picture>`
```

- Si la pantalla es menor a 600px, carga imagen-movil.webp.
- Si es entre 600px y 1024px, carga imagen-tablet.webp.
- Si es mayor a 1024px, carga imagen-escritorio.webp. 

- El navegador evalúa media="" y elige la mejor imagen antes de descargarla.


## Ejemplo de srcset y sizes

```html
  <img 
    src="imagen-pequena.jpg" 
    srcset="imagen-pequena.jpg 480w, imagen-mediana.jpg 800w, imagen-grande.jpg 1200w" 
    sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
    alt="Imagen adaptable"
  >
```

- Si la pantalla es menor a 600px, usa la imagen de 480w.
- Si es entre 600px y 1200px, usa la de 800w.
- Si es mayor a 1200px, usa la de 1200w.

- El navegador elige automáticamente la mejor resolución según el tamaño de pantalla y densidad de píxeles.


## Ejemplo de los dos métodos combinados


```html
`<picture>`
  <source srcset="imagen-movil.webp 480w,
  imagen-movil-grande.webp 800w" media="(max-width: 600px)">

  <source srcset="imagen-tablet.webp 800w,
  imagen-tablet-grande.webp 1200w" media="(max-width: 1024px)">

  <img src="imagen-escritorio.webp" alt="Imagen adaptable">
`</picture>`
```