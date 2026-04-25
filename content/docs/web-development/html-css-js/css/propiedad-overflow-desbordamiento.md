---
title: "Propiedad Overflow (desbordamiento)"
description: "Overflow (desbordamiento)"
---


## Overflow (desbordamiento)

- ¿Qué es el overflow/desbordamiento? Es cuando el contenido de nuestro elemento SE DESBORDA de nuestro elemento. O sea, recordemos que elemento = caja. Bueno, si el contenido NO ENTRA dentro del elemento, se va a desbordar. O sea, va a tener overflow. El desbordamiento puede ser hacia los lados (width) o hacia arriba/abajo (height), o hacia ambos a la vez. Por ejemplo, esto puede pasar si tenemos un div de width:100px y height:100px (considerando que el box-sizing es border-box), y le ponemos un texto que sea demasiado grande. Y por ende, va a desbordar. O sea, vamos a ver al texto "salido" del elemento.

- Existen formas de manipular el comportamiento del overflow, y es usando la propiedad overflow.

.container {
```text
width: 150px;
height: 150px;
box-sizing: border-box;
overflow: visible; // valor por defecto 
```
}

- Por defecto, el valor de la propiedad "overflow" siempre va a ser "visible". Y eso significa que, el contenido de un elemento se desborda, va a ser totalmente visible en la pantalla, por más que quede mal. También sirve para darnos cuenta del error a nosotros los devs.

- La propiedad overflow tiene más valores aparte de visible, y son:

overflow: hidden;

- "hidden" Recorta el contenido, haciendo invisible el contenido desbordado. 

overflow: scroll;

- "scroll" Recorta el contenido como hidden, pero hace aparecer las barras de scroll. Si el contenido se desbordó hacia arriba o abajo, va a aparecer el scroll vertical. Si fue a los lados, el horizontal. Y si se desbordó en ambos, aparecerán los 2 scroll (vertical y horizontal).

overflow: auto;

- "auto" Este siempre va a ser más recomendado que usar que el "scroll". Funciona igual que el scroll, pero el navegador hace un trabajo extra de detectar si el elemento debería o no tener scroll. Si debería, lo agrega, y sino no. Pero el overflow: scroll, lo agrega siempre. Por eso es mejor este último.

- **Para entender mejor ese último punto**: Por ejemplo, en Windows, si ponemos overflow: scroll, hay veces en las que el elemento no va a desbordar, pero igualmente vamos a ver las barras de scroll. Pero como no hay desborde, las va a mostrar deshabilitadas. Si lo ponemos en overflow: auto, sólo va a mostrar las barras de scroll cuando haya desborde. Obviamente que todo depende del SO.


## Text-overflow

- La propiedad text-overflow manipula el cómo vamos a ocultar el contenido desbordado. O sea, imaginemos que tenemos overflow: hidden. En ese caso, usando text-overflow, podemos elegir cómo vamos a ocultar el texto desbordado. Por defecto, text-overflow viene con valor "clip", que sería literamente recorte. Pero podríamos cambiárselo a "ellipsis". Este valor lo que hace es, también recortarlo, pero mostrando un "..." al final. En el futuro, CSS va a implementar la posibilidad de tener un text-overflow personalizado. Así: text-overflow: "Ver más...". Pero hoy en día, no se puede.



## Estilar el scrollbar

- Lo ideal es estilar scroll-bars internas. O sea, las scroll-bar que aparecen en nuestro sitio web de forma "propia". Pero las scroll-bar que aparecen a nivel sitio, o sea, las de toda la vida, esas NO se recomiendan estilar. Es mejor dejarlas por defecto.