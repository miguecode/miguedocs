---
title: "Grid - Parte 2"
description: "Propiedad repeat()"
---


### Propiedad repeat()

-  Repeat es una propiedad especial de grid y sirve para escribir más rápido la cantidad de columnas o filas que queremos crear en nuestra grid. Le podemos pasar cualquier medida o cantidad.

grid-template-columns: repeat(6, 3fr);   //  3fr 3fr 3fr 3fr 3fr 3fr
grid-template-rows: repeat(3, 100px);    // 100px 100px 100px

- También podemos mezclar repeat's, con valores sin repeat:

grid-template-columns: 25px repeat(3, 1fr) 2fr;  // Se lee: 25px 1fr 1fr 1fr 2fr

- **También podemos crear patrones, por ejemplo**: 

grid-template-columns: repeat(3, 1fr 2fr)  // 1fr 2fr 1fr 2fr 1fr 2fr

grid-template-rows: 20px repeat(2 10px 3fr) 5px repeat(3 7fr) // 20px 10px 3fr 10px 3fr 5px 7fr 7fr 7fr


### Propiedad minmax()

- Minmax es una propiedad especial de grid y sirve para que una columna o fila tenga siempre un mínimo/máximo de ancho/alto. Esta es la manera óptima de hacer grillas de forma responsive, ya que nos ahorramos de usar media queries.

grid-template-columns: minmax(100px, 1fr) 1fr 1fr;

- Esto hace que la primera columna, como mínimo, tenga 100px de ancho. Y como máximo, va a tener 1fr. Entonces, esto se va a comportar según el tamaño de la resolución. En este caso, se leería: "Mientras la primer columna tenga la posibilidad, va a ocupar 1fr. Pero si ya no puede, va a ir ocupando cada vez menos hasta llegar a 100px. Y de ninguna forma va a bajar de los 100px.


### Propiedades column-gap y row-gap

- Estas propiedades determinan la separación que hay entre las columnas y filas de nuestra grid.

div {
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-columns-gap: 5px;
grid-rows-gap: 5px;
// grid-gap: 16px; // Así, se le aplica el mismo valor a columns y rows
```
}

- En el ejemplo agregamos "grid-" al principio de cada propiedad. Esto no es necesario. Si ponemos directamente columns-gap, rows-gap, o gap, va a funcionar también. Pero antes era obligatorio ponerle el grid- adelante. Y de hecho, de forma automática se le pone el grid- adelante. Así que, por retrocompatibilidad, puede ser mejor práctica escribirle el nombre completo.


### Hacer una grid responsive gracias a minmax()

- Supongamos que tenemos una grid de imágenes, y la hacemos responsive. Si el ancho de la pantalla es mayor a 600px, la grid se va a dividir en 3 columnas. Si no es mayor a 600 pero es mayor a 300px, serán 2 columnas. Y si tampoco es mayor a 300px, será de una sola columna.

- Lo primero que haría alguien sería usar media queries, así:

div {
```css
display: grid;
grid-template-columns: 1fr;
gap: 16px;
```
}

@media (width > 300px) {
```typescript
div {
	grid-template-columns: 1fr 1fr;
}
```
}

@media (width > 600px) {
```typescript
div {
	grid-template-columns: 1fr 1fr 1fr;
}
```
}

- De esta forma, conseguimos que sea responisve. PERO, como dijimos antes, esto no es lo ideal en Grid. Ya que para esto, lo mejor es usar la propiedad maxmin(), de esta forma:

div {
```css
display: grid;
grid-template-columns: repeat(
	auto-fill,
	maxmin(200px, 1fr)
);
gap: 16px;
```
}

- ¿Qué hace esto? Como vemos, estamos usando un repeat() y dentro de él, un maxmin(). Esto es funcional. Pero antes del maxmin(), a la propiedad repeat() le estamos pasando otro valor y es auto-fill. Ese primer valor que le pasamos a repeat(), que en este caso es auto-fill, es la CANTIDAD de veces que queremos que se haga el repeat(). Y "auto-fill" es un valor especial.

- "auto-fill" lo que hace es ubicar la máxima cantidad de columnas que pueda, siempre y cuando el ancho mínimo de cada una llegue a 200px. ¿Por qué 200px? Porque así lo indica el maxmin(). 
O sea que, si tenemos 400px de ancho, va a colocar 2 columnas. Pero si tenemos 500px, va a a seguir con 2 columnas, pero cada una un poco más grande. Y si llegamos a 600px, va a colocar 3 columnas. Ya que cada columna tiene que tener mínimo 200px. Por ende, cada vez que pueda agregar otra, la va a agregar. Y lo máximo de cada columna, siempre va a ser 1fr.

- En vez de auto-fill, podríamos poner "auto-fit". Funciona similar, pero tiene una diferencia. Si tenemos muchos elementos en la grid, no nos vamos a dar cuenta de esa diferencia. Pero cuando hay menos, sí. El auto-fill te deja la posibilidad de que hayan espacios en la cuadrícula vacíos. Es decir: Si para el auto-fill, la grid puede tener 6 columnas, te va a hacer las 6 columnas, por más de que solo tengamos 4 imágenes para colocar. O sea que la grid va a tener 6 columnas, donde las primeras 4 tengan una foto, y las otras 2 estén vacías. Pero ahí esta el punto: Aunque estén vacías, están ahí. En cambio, el auto-fit NO deja lugares vacíos. Lo rellena todo siempre, aunque tenga que hacer que una columna sea más grande de lo que debería. Normalmente, el "auto-fill" es más efectivo.

- Esto último que mostramos, puede hacerse en Tailwind, pero hay que hacerlo de forma manual. Entonces, no estaríamos ahorrándonos nada. No hay clases utilitarias que permitan esa complejidad. Tendríamos que usar CSS puro y que Tailwind lo tome.


### Líneas de la grid

- Si abrimos las herramientas del desarrollador y vemos una grid, en el código vamos a ver un botoncito que dice "grid". Ese botoncito va a aparecer en la línea que sea un contenedor grid. Si la pulsamos, vamos a ver que en la pantalla se van a marcar las líneas de la grid. Que sería algo así:

1---------2---------3---------4
|               |              |               |
|               |              |               |
|               |              |               |
---------------------------------


- En esa grid, vemos 3 columnas. Pero 3 columnas, equivalen a 4 líneas. Las que vemos ahí, son 4 líneas de la grid. La primer columna está entre la línea 1 y 2, la segunda entre la 2 y 3, y la tercera entre la 3 y 4. En este caso, lo mostré solo con columnas. Pero con las filas pasa exactamente lo mismo. Si tenemos 3 filas, vamos a tener 4 líneas. Si tenemos 8 filas, vamos a tener 9 líneas. O sea, la cantidad de líneas horizontales siempre es una más que la cantidad de filas. Y la cantidad de líneas verticales siempr es una más que la cantidad de columnas. Entender esto nos va a servir para el siguiente punto.

- Las números de las líneas de una grid también se pueden ver en negativo, y sería al revés:

-4 ------ -3 ------ -2 -------- -1
|               |              |               |
|               |              |               |
|               |              |               |
---------------------------------



### Hacer que los elementos ocupen más de una columna o fila - Bento Grids 

- Los bento grids son una forma de hacer grids vistosas, donde algunos elementos ocupan más de una columna o fila, haciendo ver que algunas columnas o filas son más grandes que otras. En bentogrids.com hay ejemplos.

- Para hacerlo, hay que usar las propidades "grid-column/row-start" y "grid-column/row-end".

.container div:first-child {
```css
background: yellow;
grid-column-start: 1;
grid-column-end: 3;
```
}

- Esto hace que el elemento div de color amarillo ocupe 2 columnas de la grid, en vez de sólo una. Esto es así porque va desde la línea 1 hasta la línea 3 (cuando originalmente iba de la 1 a la 2). Si lo ponemos entre la 2 y la 4, va a ocupar el espacio de la columna 2 y la 3. Y los demás elementos son empujados por este primer elemento amarillo.

grid-column-start: 1;
grid-column-end: 3;

grid-row-start: 1;
grid-row-end: 3;

- **Para escribirlo más resumido**: 

| grid-column: 1 / 3; | // Start 1 End 3 |
| --- | --- |
| grid-row: 1 / 3; | // Start 1 End 3 |

| grid-column: -4 / -2 | // Equivaldría a lo mismo que: 1 / 3 |
| --- | --- |
| grid-column: 1 / -1 | // Esto sería que vaya de inicio a fin |


- **Otra forma podría ser**: 

| grid-column-start: span 2; | // Significa que ocupa 2 columnas |
| --- | --- |
| grid-row-start: span 2; | // Significa que ocupa 2 filas |

- Esto es muy poderoso ya que, independientemente de la posición del elemento en el HTML, nosotros lo podemos colocar en cualquier parte de la grilla. O sea, podemos hacer que el último elemento de todos, aparezca en la primer columna/fila, poniéndole el grid-column-start 1/2;


### Poner un elemento arriba del otro

- Si al hacer nuestra grid, ponemos que dos elementos distintos estén ubicados en el mismo lugar de la grilla, va a pasar eso. O sea, no se impide. Los dos elementos van a estar exactamente en el mismo lugar. Y sólo se va a ver el que tenga mayor z-index. 