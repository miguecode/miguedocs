---
title: "La Cascada y la Especificidad"
description: "¿Qué pasa cuando dos estilos apuntan al mismo elemento? ¿Cuál se aplica y cuál no? Esto lo vamos a ver acá."
---


## La Cascada

- ¿Qué pasa cuando dos estilos apuntan al mismo elemento? ¿Cuál se aplica y cuál no? Esto lo vamos a ver acá.

- La cascada se refiere al orden en el que se aplican los estilos. Define cuál estilo sobreescribe a cuál.

- Como los navegadores ya tienen sus estilos por defecto como lo nombramos antes, nosotros todo el tiempo estamos sobreescribiendo estilos, pongamos la regla que pongamos.

- La clave de la cascada es que la que aparece más abajo va a tener más fuerza que la que está mas arriba. Por ende, toma en cuenta en el que escribimos la regla. Pero con el concepto de Especificidad, esto se vuelve más complejo.


## Fallbacks

- Como antes hablamos de los fallbacks a la hora de aplicar fuentes, también hay que saber que los fallbacks son un concepto general. Por ejemplo, si nosotros queremos usar el operador "oklch" para especificar un color, existe la posibilidad de que en algunos navegadores no funcione (al menos, a día de hoy). Esto es así porque es un operador relativamente nuevo.

- Por ende, nosotros tenemos que "resguardar" esta posibilidad, usando un fallback así:

p {
```typescript
color: blue;
color: oklch(0.7 0.148 238.24);
```
}

- En este caso, nosotros lo que queremos es aplicar el color oklch(0.7 0.148 238.24). Por eso, lo ponemos al final de la cascada. Para que sea el color que se aplique. PERO, como sabemos que posiblemente el navegador no lo reconozca, entonces ese navegador lo que va a hacer es pasar al siguiente "nivel" en la cascada. Que sería el "color:blue". Y ese va a ser nuestro fallback. El hecho de ponerle "blue" como segunda oportunidad, y que no quede un color cualquiera.


## La Especificidad

- La especificidad ayuda a definir "¿Qué estilo debería tener más fuerza, es decir, más consideración?" Bueno, la respuesta es: El que tenga más especificidad. O sea, el que sea más específico. CSS tiene un algoritmo que, basado en sus normas, determina qué regla tiene más especificidad o "fuerza" que otra. Y la que más tenga, es la que se va a aplicar.

- **Veamos un ejemplo para entenderlo**: 

<p class="text">
```typescript
Hola mundo
```
`</p>`

p {
```typescript
color: red;
```
}

p {
```typescript
color: blue;
```
}

- A este punto, el párrafo se va a pintar de blue. Esto es así por el concepto "cascada". El último pesa más.

- Pero si hacemos esto...

.text {
```typescript
color: red;
```
}

p {
```typescript
color: blue;
```
}

- Ahora, el párrafo no va a ser blue. Va a ser red. Y esto es porque en la primer regla, estamos usando una CLASE. Y las clases son MÁS ESPECÍFICAS que las etiquetas, las cuales son más generales.

- El algoritmo de especificidad es algo complejo, pero se basa en el marcador "XYZ". Tanto X como Y como Z, van a ser valores que empiezan en 0 y se van sumando de uno en uno. Entonces, un marcador de especificidad podría leerse de esta forma: 1 0 1  //  0 0 3  //  2 4 0  // etc. 

- **Cada valor (X-Y-Z) va a sumar puntos en base a**: 

X: Cantidad de IDs. Si no tiene ninguna, es 0.

Y: Clases, atributos y pseudo-clases. Si no tiene, es 0.

Z: Elementos y pseudo-elementos. Si no tiene, es 0.

- **¿Y cuál es mayor a cuál? Es fácil**: Son como 3 "enfrentamientos". El primero, es el "X". La regla que tenga un valor más alto en X, va a ser la regla más específica. Por ende, es la que se va a aplicar.

- Si ya hubo una regla que tenía un valor más alto en "X", listo. Se deja de analizar. Pero si los valores son empatados, entonces se analiza el valor en "Y". Que son las clases, atributos y pseudo-clases. El que más tenga, va a ser el más específico. Y en caso de que haya empate nuevamente, el valor que defina va a ser la "Z". El que más tenga, gana.

- Si hay triple empate, es decir, si ambas reglas son iguales tanto en X-Y-Z, lo que va a definir cuál regla es más específica, va a ser EL ORDEN. Es decir, la cascada. La última regla en ser definida va a ser la más específica, pisando a la anterior.

1 2 5 > 0 8 9

0 0 1 > 0 0 0

1 2 3 > 0 4 5

- Para que nosotros no tengamos que hacer estos cálculos, podemos usar esta web:

https://specificity.keegan.st/


- **Aclaración**: En el DevTools, o sea, en las herramientas de desarrollador, podemos ver todo esto de la especificidad. Al ver las reglas de estilos, nosotros podemos poner el mouse por encima, y un ToolTip nos va a mostrar la especificidad así: Specificity (1, 0 ,2), por ejemplo. Y esto también explica por qué a veces aparecen estilos "tachados" en el DevTools. Cuando un estilo está tachado, es porque está siendo sobreescrito por otro.


### La especificidad por origen

- Para que todo quede más claro, es importante ver el orden de origen. Es decir, de DÓNDE sale el estilo. Esto es importante ya que siguen el siguiente orden de prioridad:

[ De menor a mayor ]

1. Estilos del navegador (user-agent stylesheet).
2. Estilos definidos en archivos externos (archivos .css)
3. Estilos dentro de la etiqueta `<style>` en el `<head>`
4. Estilos en línea (el atributo style="...")
5. Estilos con !important


### La palabra clave !important

p {
```typescript
color: red !important;
```
}

- El !important ROMPE TOTALMENTE la especificidad. Todo lo que tenga !important, va a ganar en la especificidad. Aunque claro, si hay dos !important para el mismo estilo, va a haber un empate. Y a partir de ahí, habrá que prestarle atención a los demás factores de especificidad para saber cuál tiene más peso.

- Si bien esto suena muy poderoso, no es una buena práctica. Lo ideal, es no usar !important. El tener que usarlo, es una señal de que no estamos haciendo algo bien.