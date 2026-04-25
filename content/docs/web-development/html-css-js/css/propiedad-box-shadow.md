---
title: "Propiedad Box-Shadow"
description: "La propiedad box-shadow se creó para añadir efectos de sombra a nuestra caja/elemento. En esencia, lo que hace es crear un clon de de la caja respetando su box-..."
---


## Box Shadow

- La propiedad box-shadow se creó para añadir efectos de sombra a nuestra caja/elemento. En esencia, lo que hace es crear un clon de de la caja respetando su box-model (height, width y border-radius).

- La sintaxis de box-shadow se puede escribir de distintas formas, ya que acepta distintos valores. Pero hay dos valores que son obligatorios el desplazamiento en el eje x y en eje y. 

- **Los valores posibles son**: 

inset - Determina que la sombra será interior. Por defecto, inset está desactivado
offset-x - Desplazamiento en el eje x (obligatorio)
offset-y - Desplazamiento en el eje y (obligatorio)
blur-radius - Desenfoque de la sombra. Por defecto es 0
spread-radius - Expansión de la sombra. Por defecto es 0
color - El color de la sombra. Si no lo especificamos, su valor será currentColor (el texto actual)

- Cabe recordar que currentColor hereda el color del texto del elemento.

- Estas dos primeras propiedades son clave para entender el concepto de "clon". Si nosotros le ponemos mucho offset-x, vamos a alejar (desplazar) mucho la sombra de nuestro elemento. Es decir, estamos alejando mucho al clon. Eso nos podría servir para entender qué es lo que estamos creando. El desplazamiento parte desde el mismo lugar en donde está nuestra caja/elemento. Entonces, si el offset-x y el offset-y son 0px, el clon o sombra estaría exactamente en el mismo lugar, y no se vería. Por eso tenemos que agregarle un desplazamiento.


Ejemplos usando todas las propiedades:

box-shadow: 5px 5px 10px 0 blue;

box-shadow: inset 3px 3px 10px 10px #111;

- Si no se especifica el "inset", se asume que la sombra es exterior. En caso de estar el inset, la sombra será interior y los valores del eje X e Y funcionarán de la misma forma (en realidad, se invierten), pero hacia adentro.

- La estructura sería así (Los valores entre corchetes son opcionales):

box-shadow: offset-x offset-y [blur-radius] [spread-radius] [color] [inset];

- El inset también podría ir al principio de todo.


### Simular borde

- Como el valor por defecto de blur-radius es 0, la sombra (el clon) se va a ver sólido. Por ende, se podría ver como un borde. Esto es usado para tener un borde extra, o para tener múltiples bordes.


### Más de una sombra

- Nosotros podemos poner más de una sombra, usando la misma propiedad. Simplemente, lo separamos con comas , así:

div {
```text
box-shadow: 5px 5px 0 red,
            10px 10px 5px blue,
            15px 15px 10px yellow;
```
}

- La primera sombra es sólida (0px de blur).
- La segunda tiene desenfoque (5px).
- La tercera tiene más desenfoque (10px).

- También cabe decir que, al tener más de una sombra, cada una nueva que agregamos se sobrepone a la anterior. Es como si tuvieran z-index (no es eso, pero sería lo mismo). Las que declaramos más tarde, pisan a las demás si es que se sitúan en el mismo lugar.