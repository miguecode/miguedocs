---
title: "Propiedades de control de texto"
---

> Text-wrap: balance

- El text-wrap: balance está pensado para TÍTULOS (h1, h2, h3...), y su función es evitar que queden palabras colgadas en una última línea. Por ejemplo:

Este es el título que estoy
escribiendo

- Como el ancho ya estaba delimitado, el h1 no alcanzó a escribir todo el contenido en una línea, entonces "escribiendo" se quedó solito ahí abajo. Y eso no queda muy bien visualmente. En cambio, si a ese h1 le ponemos text-wrap: balance, lo que va a hacer es ajustarlo para que quede así:

Este es el título que 
estoy escribiendo

- Esta propiedad también podemos usarla en párrafos, pero no es lo ideal. Ya que para los párrafos, vamos a usar text-wrap: pretty.


> Text-wrap: pretty

- Su función es la misma que text-wrap: balance, pero está pensada para párrafos, por ende, es menos brusca. El balance es más ajustador, y es capaz de achicar bastante el ancho del texto con tal de que quede bien. El pretty es un poco más imperceptible. 


> Text-align: justify

- Justificar un texto va a hacer que siempre quede lo mejor simétrico posible. Literalmente todas las líneas van a usar el mismo espacio (salvo la última si no está completa). Esto es común en libros de la vida real o en otros artículos escritos. Pero la verdad es que es una mala práctica. No hay que hacerlo. ¿Por qué? Porque si bien puede parecer que queda mejor visualmente, la realidad es que crea unos espacios muy inadecuados entre cada palabra, todo con el fin de quedar perfectamente simétrico.


> Si bien existen otras propiedades que cumplen funciones similares, como word-break, hyphens u overflow-wrap, no las vamos a explicar acá, ya que no son tan comunes de usar (pero pueden ser útiles dependiendo del contexto del texto a escribir).


> Line-height (altura de línea)

- Controla la separación entre las líneas de texto. Muy útil para mejorar la legibilidad de párrafos largos. Por defecto, el valor de line-height es 1.

p {
  line-height: 1.5; /* Un 50% más de altura entre líneas */
}

- Para párrafos largos, se recomienda poner el line-height en 1.5 o 1. Y para títulos, un valor más bajo como 1.2 puede ser más adecuado.


> Letter-spacing y word-spacing (espaciado entre letras y palabras)

p {
  word-spacing: 0.1em;
  letter-spacing: 0.05em;
}

- Se puede usar para ocupar más espacio en títulos o botones (usando cualquiera de esas dos propiedades). O también, para ajustar la separación en textos justificados (también usando cualquiera).


> White-space (manejo de espacios y saltos de línea)

p {
  white-space: nowrap; /* Evita saltos de línea */
}

- Otros valores útiles son el nowrap (evita que el texto baje a una siguiente línea), el prewrap (respeta los saltos de línea manuales y permite ajuste automático) y el breakspaces (es como el pre-wrap, pero mantiene los espacios en blanco).