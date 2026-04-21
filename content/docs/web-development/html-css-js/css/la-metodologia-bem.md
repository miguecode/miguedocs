---
title: "La metodología BEM"
---

- La Metodología BEM (Block, Element, Modifier)


- La metodología BEM es una convención de nomenclatura para clases en HTML y CSS. Desarrollado por el equipo de Yandex, su objetivo es ayudar a los desarrolladores a comprender mejor la organización y comprensión del código en proyectos web. Su propósito es hacer que el código sea más legible, estructurado y mantenible, permitiendo que los desarrolladores reconozcan rápidamente la función de cada clase con solo leerla.

- En otras palabras, el propósito de BEM es ayudarnos a que el código sea más legible, estructurado y mantenible, dejando ver con más claridad qué funcion tiene cada elemento con sólo leer el nombre de su clase. De eso se trata BEM, de escribir las clases de cierta manera.

- ¿Cómo funciona? Como dice su nombre, se divide en 3 conceptos: Bloque, Elemento y Modificador.

🔹 Bloque: Componente independiente que puede contener o no elementos dentro de él. Generalmente se usa para los contenedores.

🔸 Elemento: Etiqueta HTML que forma parte de un bloque y no tiene sentido por sí solo.

🔻 Modificador: Una variación de un bloque o de un elemento, que cambia su apariencia o comportamiento para diferenciarse de los demás (.destacado, .success, .warning).


> La sintaxis de BEM

- Toda clase CSS definida y usada debe seguir las siguientes reglas:

Cuando la clase se refiera solo al bloque, será:

.bloque { ... }

Cuando se refiera a un elemento dentro de un bloque, será:

.bloque__elemento { ... }

En los casos de referirse a un modificador, ejemplo: seleccionado, deshabilitado, activo, etc., será:

.bloque--modificador { ... }
.bloque__elemento--modificador { ... }

- En esta carpeta hay una imagen .jpg con un ejemplo claro. Pero escribiéndolo, sería:

.card { ... }  /* Bloque: El bloque principal */ 

.card__image { ... } /* Elemento: Imagen dentro de la card */ 
.card__description { ... } /* Elemento: Descripción dentro de la card */
.card__button { ... } /* Elemento: Botón dentro de la card */

.card--highlighted { ... } /* Modificador: Carta con estilo destacado */
.card__button--success { ... } /* Modificador: Botón dentro de la card con estilo de éxito */
.card__button--back { ... } /* Modificador: Botón dentro de la card con estilo de retroceso */