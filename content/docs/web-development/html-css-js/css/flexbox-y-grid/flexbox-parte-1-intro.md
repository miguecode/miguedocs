---
title: "Flexbox - Parte 1 (Intro)"
description: "Flex es un posible valor en la propidad display. (display: flex). Sirve para posicionar a los elementos de forma mucho más sencilla y coherente."
---


## Flexbox

- Flex es un posible valor en la propidad display. (display: flex). Sirve para posicionar a los elementos de forma mucho más sencilla y coherente. 

- Flex debe ser un contenedor. El concepto es que yo le voy a aplicar 'display: flex' al contenedor de los elementos que quiero ubicar de forma flex.

display: flex;

- Por defecto, flex viene con su propiedad 'flex-direction: row'. Esto hace que los elementos que pertenecen al contenedor flex se agrupen uno al lado del otro, en fila. Si el 'flex-direction' lo ponemos en 'column', va a ser uno abajo del otro.

- En flex, tenemos un eje principal (flex-direction) y un eje secundario (perpendicular al principal).

display: flex; // Hace que el elemento sea un contenedor flex

flex-direction: row; // Hace que la dirección sea en filas
flex-direction: row-reverse; // Hace que la dirección sea en filas (orden invertido)

flex-direction: column; // Hace que la dirección sea en columnas
flex-direction: column-reverse; // Hace que la dirección sea en columnas (orden invertido)

### Flex-wrap

- En flex, hay una propiedad llamada flex-wrap. Por defecto, su valor es "nowrap". Eso hace que los elementos siempre se mantengan en una sola fila/columna, aunque no tenga más espacio en el eje principal (ya sea fila o columna). Es decir, los amontona a todos.

- **En cambio, si cambiamos el flex-wrap a "wrap"**: 

flex-wrap: wrap;

- Los elementos que no entren en la fila o en la columna, se van a colocar en una fila o una columna nueva. Y así constantemente. También existe wrap-reverse (lo mismo pero en reversa).

flex-wrap: nowrap; // Así viene por defecto. Los elementos se amontonan
flex-wrap: wrap; // Los elementos que no entran pasan a una nueva fila/columna
flex-wrap: wrap-reverse; // Los elementos que no entran pasan a una nueva fila/columna en sentido contrario

- También existe la propiedad "flex-flow", la cual agrupa las propiedades "flex-direction" y "flex-wrap", simplemente para darles valor a las dos en una sola línea, así:

flex-flow: wrap column;
flex-flow: wrap row-reverse;
flex-flow: no-wrap column;
(Y todas sus variaciones)


### Flex-grow, flex-shrink, flex-basis, flex: initial, flex: auto, flex: 1

- Estas propiedades no van en los contenedores flex. Sino que van en los hijos del contenedor flex. Podríamos tener una clase "item", y que cada elemento dentro del contenedor flex tenga esa clase. Así, cada elemento se ve afectado de igual forma.

flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;

- Esos son sus valores por defecto. El "flex-grow" se refiere a si los elementos pueden crecer o no, y cuánto. Con crecer nos referimos a hacerse más grandes. El "flex-shrink" es lo mismo pero al revés, se refiere a si los elementos pueden decrecer o no, y cuánto. O sea, hacerse más chicos.

- El flex-basis es el tamaño que va a tener, de base, la fila o columna. El grow y el shrink van a actuar en base al valor que tenga flex-basis. Si una fila va a desbordar el tamaño del flex-basis, entonces el flex-shrink empieza a actuar, achicando a los elementos (si es que el valor de flex-shrink es mayor a 0). Y lo mismo al revés. Si el espacio que ocupan los elementos de una fila es menor al del flex-basis, los elementos van a poder agrandarse gracias a flex-grow (si es que el valor de flex-grow es mayor a 0). Como el flex-grow por defecto viene en 0, esto no va a ocurrir amenos que lo cambiemos.

- Generalmente, los valores de flex-grow y flex-shrink son 1 o 0. 

- Hay una forma de abreviar esta configuración. Por ejemplo:

flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;

- Como sabemos, esos son los 3 valores por defecto. Y aparecen así, ya que, por defecto, el valor de la propiedad "flex" es "initial". Así:

flex: initial; // Significa grow 0, shrink 1 y basis auto. (Y todos los demás valores por defecto)

- **Pero también podemos ponerlo en "flex**: auto;" Y es lo mismo, pero cambiando el valor de grow de "0" a "1". Y si ponemos "flex:1;", va a ser lo mismo pero con el grow en 1 y el basis en 0%.

- **Entonces, las abreviaciones quedarían así**: 

| flex: initial; | // grow: 0 - shrink: 1 - basis: auto |
| --- | --- |
| flex: auto; | // grow: 1 - shrink: 1 - basis: auto |
| flex: 1; | // grow: 1 - shrink: 1 - basis: 0% |

- Si ponemos el valor de flex-basis en 0%, (flex-basis: 0%), lo que hacemos es que el tamaño de cada elemento del contenedor tenga el mismo tamaño, independientemente de su contenido.

- Siempre recordemos que, desde que empezamos a hablar en esta sección, estas propiedades (grow, shrink, basis, etc.) son propiedades DE LOS ELEMENTOS del contenedor. No del contenedor como tal. Pero hablamos en plural ya que la idea es tener una clase item, y que cada elemento dentro del contenedor tenga esa clase. Entonces, estos ajustes se aplican a todos.

- Pero ahora, consideremos que vamos a aplicarle estilos a sólo un elemento del contenedor. Por ejemplo, con un selector .item:first-child.

.item:first-child {
```typescript
background: yellow;
flex: 2;
```
}

- **De esta forma, con el "flex**: 2", el elemento al que apunte ese selector, va a tener EL DOBLE de tamaño que los demás elementos hermanos que tenga.

- Entonces, podemos ajustar cada elemento como queramos:

.item {
```typescript
flex: 1;
```
}

.item:first-child {
```typescript
background: yellow;
flex: 2;
```
}

.item:nth-child(2) {
```typescript
background: blue;
flex: 4;
```
}

.item:last-child {
```typescript
background: red;
```
}

- En este ejemplo, al "last-child" no le escribimos flex. Pero como tiene la clase .item, su flex va a ser 1. En cambio, en el first-child, le estamos pisando su flex: 1 a flex: 2. O sea que, el first child va a ser el doble de grande que el last-child. Y el segundo hijo, va a ser 4 veces mas grande que el last child. 


### Order

- Con la propiedad "order", podemos ordenar los elementos de un contenedor flex. Es una propiedad de los elementos.

.item:nth-child(2) {
```typescript
background: blue;
flex: 4;
order: 0;
```
}

- Cuanto más chico es el valor de order, más pronto va a aparecer en el orden de elementos. El order también puede ir en negativo para forzar atrasarlo.

- Esto del orden es SÓLO VISUAL. No afecta al HTML.