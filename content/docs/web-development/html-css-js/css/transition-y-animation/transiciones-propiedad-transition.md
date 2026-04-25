---
title: "Transiciones (Propiedad transition)"
description: "En CSS, existen 2 formas de animar elementos y son: Las transiciones y las animaciones. En este apunte, vamos a hablar sobre las transiciones."
---


## En CSS, existen 2 formas de animar elementos y son: Las transiciones y las animaciones. En este apunte, vamos a hablar sobre las transiciones.

- Muchas veces, las transiciones y animaciones mejoran la experiencia de usuario (UX). Esto es así porque estamos ayudándole al usuario a entender "de dónde viene y a dónde va". Estamos como dándole una sugerencia sobre la causa y el efecto de la interacción que ha ocurrido por su acción. Es como cuando le modificamos el estado "active" a un botón. Al hacerlo, estamos como diciéndole al usuario "Sí, estás tocando este botón". O cuando al hacerle hover, el cursor se pone pointer.

## Transiciones 

- Con la propiedad transition vamos poder transicionar a un elemento de un estado a otro (de inicio a final). Esto tradicionalmente siempre se hizo con JavaScript. Pero con el pasar del tiempo, ahora CSS también permite estos comportamientos. Y por eso es que vamos a hacerlo con puro CSS, ya que siempre, cuanto menos JavaScript carguemos, mejor.

- Puede ser con un botón, un div, o con el elemento HTML que sea.

- Para entender todo, hay que saber que "transición" significa "el paso de un estado a otro".

<div class="pulser">`</div>`

body {
```typescript
display: grid;
place-content: center;
min-height: 50vh
```
} // Con esto, centramos todo en la pantalla

.pulser {
```typescript
width: 30px;
height: 30px;
background: blue;
border-radius: 50%
position: relative;
```
}

.pulser:hover {
```typescript
scale: 2; 
```
}

- ¿Qué hace scale? Scale aumenta el valor de height y de width del elemento. Pero sólo de forma VISUAL. Es decir, no es que realmente aumenta esos valores, sino que nosotros lo vamos a ver como si así fuera. Al poner "scale: 2" lo que hacemos es duplicar el width y el height del elemento visualmente.

- **A este punto, podemos hacer este análisis**: Tenemos 2 estados. El estado inicial, que es el elemento div con 50 de width y height, y tenemos el estado final, que sería cuando le hacemos hover. En ese estado final, el elemento se duplica visualmente. Lo que nosotros vamos a hacer es afectar la forma en la que el elemeneto va a transicionar del estado inicial al final.

.pulser:hover {
```typescript
scale: 2; 
background: purple;
box-shadow: 0 0 10px purple;
```
}

- Ahora, el hover se nota un poco más. Hacemos que cambie de color, y que tenga un sombreado.


### transition-duration

.pulser {
```typescript
width: 30px;
height: 30px;
background: blue;
border-radius: 50%
position: relative;
transition-duration: 2s;   // Agregamos esta propiedad
```
}

- Ahora, le agregamos la propiedad "transition-duration" al elemento. Como dijimos antes, con este elemento tenemos dos estados: inicial y final (el final sería, en este caso, el hover). Y "transición", significa "el paso de un estado a otro". Entonces, si nosotros modificamos la duración de la transición, vamos a ver cómo el elemento TRANSICIONA de un estado a otro. Es decir, vamos a ver cómo el elemento pasa del estado inicial, al estado final (al estado del pulser:hover). Vamos a ver su "movimiento". 

- Por defecto, la propiedad "transition-duration" tiene el valor 0. O sea, 0 segundos. Que esto sea así hace que la transición, o sea, el cambio de estado, sea de forma abrupta. O sea, cambia de golpe. 

- Al ponerle de valor 2s, hacemos que la transición dure 2 segundos. La medida de tiempo puede ser con "s" (segundos) o con "ms" (milisegundos). Si no sabemos cuánto va a durar una animación, le podemos poner "auto" a la propiedad duration.

- Un error típico es poner la propidad "transition-duration" en el estado del hover en vez de en el estado inicial. O sea, hacerlo en el .pulser:hover en vez de hacerlo en el .pulser. 

- "Duration" solo es un aspecto de todos los que podemos modificar en "Transition".


### transition-property

- Hasta ahora, lo que hacemos es transicionar de forma total. Es decir, cuando el elemento pasa de estado inicial a final, TODO lo hace con una duración de 2 segundos: el cambio de color, la escala, el box shadow... Esto está bien y tiene sentido. Pero, ¿Y si queremos que no todas las propiedades tengan una transición de 2 segundos? 

- Esto ocurre por la propiedad "transition-property", que su valor por defecto es "all". O sea que, cada vez que alguna propiedad del elemento cambia de valor, va a tardar 2 segundos en terminar de hacerlo.  

- Pero lo podemos modificar, para que sólo sea con una o algunas de ellas:

transition property: all; // Valor por defecto
transition property: background, box-shadow;

- Así, la transición solo va a tomar efecto para la propidad background y box-shadow.

- **OJO**: Si bien, lo más común es ponerlo en "all", hay que tener cuidado con estar animando cosas que son innecesarias. Esto afecta al performance. Los shadows son pesados de animar. Lógicamente, si sólo son unos pocos elementos, no pasa nada. Pero hay que ser precavidos con eso.

- **Aclaración**: No todas las propiedades pueden tener animación. Pero la mayoría sí. Es fácil pensarlo, si la propiedad tiene un estado intermedio, entonces se puede. Cambios de color (excepto en gradientes), cambios en pixeles, etc. Todos esos se pueden. Propiedades que no se podrían animar podrían ser el background-image, el font-family... entre otros. Porque no tienen estado intermedio. Son directos.

### transition-timing-function

- Otra cosa que podemos cambiar, es la velocidad de la animación, o de la aceleración, por decirlo así. Esto lo podemos hacer con la propiedad "transition-timing-function". Su valor por defecto es "linear".

transition-timing-function: linear;

- El valor "linear" (lineal) por defecto significa que, durante toda la duración de la transición, la animación va a mantener exactamente la misma velocidad de inicio a fin durante esos 2 segundos. Es decir, una velocidad lineal. Nosotros lo podemos alterar para que la animación sea un poco más rápida al principio, y más lenta al final. O al revés. O también, mezclado (rápido al principio y al final, lento en la mitad). O también, y esto sería lo más rebuscado, manipular todas las velocidades de inicio a fin a gusto propio. 

- **Estos son los más típicos**: 

transition-timing-function: linear; // Por defecto. Siempre la misma velocidad
transition-timing-function: ease-in; // Más lento al inicio y más rápido al final
transition-timing-function: ease-out; // Más rápido al inicio y más lento al final
transition-timing-function: ease-in-out; // Al inicio y al final va lento, en el medio va rápido
transition-timing-function: ease; // Es casi igual al in-out, pero comenzando un poquito más rápido

- Existen otros que son más complejos como steps() y cubic-bezier(x1 y1, x2 y2).

transition-timing-function: steps(5); // Hace la transición en 5 pasos (respetando los 2s)
transition-timing-function: steps(300); // Hace la transición en 300 pasos (respetando los 2s)
transition-timing-function: cubic-bezier(0.5, 1.9, 1.24, 0.67) // Hace la transición a mano

- No es necesario aprender a usar cubic-bezier. Se pueden usar herramientas que te creen los valores que necesitas. Por ejemplo, con la página:

easings.co


### transition-delay

- La propiedad transition-delay es otra propiedad cuyo valor va a ser en segundos (o milisegundos). Se refiere al tiempo que tiene que pasar para que inicie la transición. Por defecto, el delay es 0. Pero si, por ejemplo, le ponemos 1s de delay con el ejemplo que creamos, al hacerle hover al div, vamos a tener que esperar 1 segundo para que empiece la animación. 

- Esto podría servir para cuando tenemos una lista de elementos y queremos que todos aparezcan con una animación (jugando con el opacity). Si a cada uno le ponemos un delay distinto, podríamos hacer como un efecto "cascada" o "domino".


### Atajos para escribir todo más rápido

- Como pasa con border u otras propiedades, los valores de transition se pueden escribir en una línea.

transition: all 0.5s ease-out 1s;
(property: all - duration: 0.5s - timing-function: ease-out - delay: 1s)

transition: background-color 4s 1s;
(property: background-color - duration: 4s - delay: 1s) // Acá omitimos la timing-fuction

- **Esas serían dos formas. Otras pueden ser**: 

transition: 
```typescript
background-color: 5s, 
border-radius: 0.5s;
```
- Lógicamente, siempre el primer valor de tiempo es referido a "duration". Y el segundo, a "delay". 

transition:
```typescript
background 300ms linear,
scale 800ms ease-in-out,
box-shadow 2s ease-in 0.7s;
```
### Animación "de regreso" más rápida

- Un efecto que muchísimas UX usan porque es efectivo, es que el camino al hover sea más lento que el regreso del hover. O sea, si paso el mouse por un botón y el botón tiene la animación de agrandarse, esa animación tiene que ser más lenta que cuando le dejo de hacer hover y se achica. ¿Por qué? Porque de esa forma ayudamos al usuario a quitarle la atención más rápido del boton donde dejó de hacer hover. 

- Para hacer eso, tenemos que usar "transition" en el hover. Y ahora hay que pensarlo al revés: El elemento como tal, va a ser el estado final. Y el hover, la primera animación. Entonces, en el .pulser:hover{} vamos a poner la animación más lenta. Y en el elemento como tal, la rápida.


### Desactivar animaciones por accesibilidad

- Hay MUCHOS usuarios que, por el motivo que sea, prefieren no ver animaciones. Y es muy posible que el dispositivo que esté usando tenga la configuración para reducir las animaciones. Nosotros tenemos que ajustarnos a eso para mejorar la accesibilidad y su experiencia. 

- **Para hacerlo, usamos una media query**: 

@media (prefers-reduced-motion: reduce) {
```typescript
.pulser {
	transition: none;
}
```
}

- Con esto, desactivamos la propiedad "transition" de los elementos que tengan la clase "pulser". Esto es porque le pusimos "none". Tampoco es necesario que le desactivemos todas, podríamos hacerlas menos potentes o desactivar sólo algunas. Depende de nosotros.