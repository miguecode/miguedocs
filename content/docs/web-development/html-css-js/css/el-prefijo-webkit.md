---
title: "El prefijo webkit"
description: "En CSS; webkit es un prefijo de proveedor (vendor prefix). Se usa para propiedades específicas del motor de renderizado WebKit, que es el motor que usan navegad..."
---


## Webkit

- En CSS; webkit es un prefijo de proveedor (vendor prefix). Se usa para propiedades específicas del motor de renderizado WebKit, que es el motor que usan navegadores como Safari y antiguamente Chrome (antes de que migrara a Blink, que es un fork de WebKit).

- Entonces, -webkit- es un prefijo que ayuda a que ciertas propiedades de CSS funcionen correctamente en navegadores que usan WebKit, especialmente Safari.

### ¿Para qué sirve?

- Algunas propiedades de CSS no están completamente estandarizadas o soportadas por todos los navegadores. Entonces, los fabricantes implementan sus propias versiones usando prefijos, como:

-webkit-  → Para Safari y navegadores basados en WebKit
-moz-  → Para Mozilla Firefox
-ms-  → Para Microsoft Edge / Internet Explorer (antiguo)
-o-  → Para Opera (cuando usaba Presto)


### ¿Sigue siendo necesario -webkit-?

- Hoy en día, la mayoría de las propiedades CSS ya están estandarizadas y no requieren prefijos. Sin embargo, algunas características todavía los necesitan en Safari, ya que WebKit a veces implementa nuevas funciones antes de que sean oficiales. Aunque no siempre es necesario, sigue siendo útil en algunos casos específicos. 

### Ejemplos

- Efecto de texto con WebKit

.texto {
  -webkit-text-stroke: 1px black; /* Contorno de texto */
  -webkit-text-fill-color: red;   /* Color de relleno del texto */
}


- Animaciones con WebKit

@-webkit-keyframes animacion {
  from { opacity: 0; }
  to { opacity: 1; }
}

.elemento {
  -webkit-animation: animacion 1s ease-in-out;
}


- Scroll suave con Safari

html {
  scroll-behavior: smooth; /* Para la mayoría de los navegadores */
  -webkit-overflow-scrolling: touch; /* Scroll más suave en dispositivos iOS */
}



























