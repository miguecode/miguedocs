---
title: "Propiedad Z-Index"
---

> Z-Index

- El Z-Index hace referencia al concepto de apilamiento. Cuando nosotros vemos una página, podemos pensar que es todo plano, un papel en el que dibujamos encima. Pero la verdad es que no es exactamente así. 

- Nosotros nos tenemos que imaginar que, cuando vemos los elementos, podemos ver que algunos están por encima de otros. O sea, si nosotros pudiésemos "rotar" la pantalla y verla de costado, podríamos ver que tiene profundidad. Hay elementos que pueden estar apilados uno encima del otro. O sea que, de ahí nace la "Z". Porque no sólo estamos viendo a los ejes X e Y. Sino que también hay un eje Z, que se refiere a la profundidad de la página.

 - Cuanto más alto es el índice Z, más probabilidad tiene de verse un elemento, o sea, tiene más prioridad para quedar arriba en el apilamiento.
 
 - Cabe aclarar que todos los elementos HTML tienen un orden natural de apilamiento según su posición en el DOM.
 
 .container {
 	z-index: 3;
 }

- Lo ideal es poner valores controlables y apropiados, y no poner z-index: 999 solo porque sí.

- Para hacer una prueba de esto, podemos usar 3 divs de colores, y ponerles un margin-top negativo, para que se muevan para arriba, y se tapen unos con otros. Vamos a notar que, por defecto, el tercer div va a tapar al segundo, y el segundo al primero. Esto es así ya que, por defecto, los elementos que aparecen después en el HTML se renderizan encima de los anteriores.

- Entonces, si quisiéramos cambiar ese comportamiento, uno diría que podemos estilar al primer div poniéndole z-index: 99999; para que aparezca arriba de los otros. Pero no, eso no es suficiente. 

- Y, ¿Por qué no es suficiente? ¿Por qué ponerle el z-index en 99999 no funcionaría? Esto es así ya que z-index solo funciona en elementos cuya position es DISTINTA A STATIC (es decir, relative, absolute, fixed o sticky). Todo esto hace referencia al Contexto de Apilamiento. Es decir, para que el z-index funcione, tenemos que crear un contexto de apilamiento, que como dijimos, se crea cuando un elemento tiene una position distinta a static, o cuando es un contenedor flex, o cuando uno de sus hijos tiene z-index.

- Lo ideal es NO abusar del z-index. Poner valores altos puede causar problemas de mantenibilidad, y los navegadores tienen un límite en ese valor.