---
title: "Grid - Parte 1"
---

> Grid CSS

- La diferencia clave de Grid con Flexbox, es que Grid no trabaja sobre un contenedor en modo fila o columna como lo hace flex, sino que trabaja sobre un contenedor con filas y columnas. Las dos a la vez. O sea que, se podría decir que flex es unidimensional y grid bidimensional.

- Ninguno es mejor que otro. Son dos sistemas de maquetación totalmente válidos. Con dominar uno, ya estás bien. Pero saber los dos también vale la pena. Hay veces que usar uno podría ser más conveniente que usar el otro. Pero no dejan de ser dos sistemas de maquetación.

- ¿Cuándo es conveniente uno u otro? Si tenemos un maquetado más complejo, donde aparecen distintas filas y columnas, donde algunos ocupan más espacio que otros, puede ser más conveniente grid. Si todos tienen el mismo tamaño o sólo hay filas o sólo columnas, puede ser más conveniente flex.

- Recordemos que grid significa grilla o cuadrícula en español.


> Ejemplo

<section class="container">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
	<div>7</div>
</ section>

.container {
	background: lightsalmon;
	border: 3px solid black;
	display: grid;
}

.container div {
	background: lightblue;
	border: 2px solid blue;
}


>>Propiedad grid-template-columns

- Lo primero, es indicar cuántas columnas queremos que tenga nuestra grid, indicando el ANCHO de cada una. Lo hacemos con la propiedad "grid-template-columns".

.container {
	background: lightsalmon;
	border: 3px solid black;
	display: grid;
	grid-template-columns: 100px 100px 100px;   // 3 columnas de 100 pixeles
}

- Si a una columna le ponemos "auto", el navegador es el que va a decidir cuál es el espacio que tiene que utilizar, y lo va a hacer dependiendo del espacio que tenga disponible, y del contenido del texto. O sea, no siempre va a ser el mismo tamaño. Depende de esos dos factores. 

grid-template-columns: 100px auto 100px;   // 2 columnas de 100px y una en "auto"

grid-template-columns: 50% 100px auto 10vw; // 4 columnas

- Podemos usar distintas medidas para las columnas. Obviamente, esto no es lo recomendable.


>> Medida fraction (fr)

- Para grid, existe una medida especial llamada "fraction", y se abrevia fr. Nos permite indicar el tamaño de las columnas y de las filas de forma proporcional. Esta es la medida ideal, y la que hay que usar. 

grid-template-columns: 1fr; // Al ser una sola columna, 1fr = 100%

grid-template-columns: 1fr 1fr; // Al ser dos columnas, 1fr = 50%

grid-template-columns: 1fr 1fr 1fr; // Al ser tres columnas, 1fr = 33.3333%

grid-template-columns: 1fr 2fr; // Al ser dos columnas, 1fr = 50% & 2fr = 100%

grid-template-columns: 2fr 4fr; // Al ser dos columnas, 2fr = 33.3333% & 4fr = 66.6666%

grid-template-columns: 2fr 4fr 1fr; // Al ser tres columnas, 2fr = 28% & 4fr = 57.12% & 1fr = 14.28%

- Para hacer el cálculo de cuanto porcentaje % ocupa cada columna medida como fraction, lo que tenemos que hacer es:

100 / [cantidad de fracciones totales] = 1fr

- Si ya sabemos cuánto porcentaje % es una fracción, por lógica ya sabemos el de las demás. 2fr es el doble, 3fr el triple, 4fr el cuádruple y así.

- A fraction NO le importa el contenido de los elementos. Eso sólo pasa con el tamaño en "auto". Con fr, el contenido no importa y el tamaño del elemento es fijo según lo que coloquemos. A diferencia de "auto", fraction va a distribuir el espacio disponible, mientras que auto va a intentar usar sólo el espacio del contenido de cada elemento.

- Otro ejemplo:

grid-template-columns: 1fr 100px;

- Si tenemos estas 2 medidas distintas, lo que va a pasar es que la segunda columna va a tener un tamaño exacto de 100px, tal y como dice ahí. Entonces, la primer columna (1fr) va a ocupar todo el resto del espacio disponible sacando esos 100px de la segunda columna. Esto es así porque las medidas como px, vw y demás, son más exactas. Las fracciones se van a manejar con el resto del espacio que quede sacando a esas columnas con anchuras exactas.

- Para saber cuánto % va a ser 1fr en ese caso, primero tendríamos que saber el ancho total del contenedor grid. Supongamos que es de 500px. Entonces, la cuenta sería: 

500px - 100px = 400px    =>    1fr = 400px

- La fórmula es: 1fr = (  (X-Y) / X  ) x 100


>> grid-template-rows

- Con esta propiedad, vamos a indicar cuántas filas queremos que tenga nuestra grid, y las ALTURAS de cada una. Todo funciona igual que grid-template-columns. Se pueden usar fractions.

grid-template-rows: 100px 50px 30px 100px; // 4 Filas, con esos tamaños

- Cabe decir que nuestra grid siempre puede tener lugares vacíos. Es decir, si en la última columna o fila no hay ningún elemento, no importa. Igualmente nuestra grid tiene ese espacio ahí disponible en la grilla, aunque esté vacío. O sea que, Grid no colapsa esos lugares vacíos.

- Si los elementos no entran en nuestra primera fila de la grid, van a empezar a moverse a una nueva fila automáticamente. Es decir, se va a generar una nueva fila si es que no entran en la primera. Y así constantemente. Nosotros podemos modificar la ALTURA de cada fila. 

- Ese comportamiento se da por la propiedad "grid-auto-flow", la cual viene por defecto con el valor "row". Eso significa que, cuando se va a desbordar, se crea una nueva row. Si se lo cambiamos a "column", entonces, cuando va a desbordar, empieza a crear nuevas columnas para que entre. También existe el valor "dense", pero lo vamos a ver más adelante.


>> Filas automáticas

- Como dijimos antes, cuando el contenido no entra en una fila, empieza en otra de forma automática. O sea, que se generan filas automáticamente. Nosotros podemos determinar el alto de esas filas, usando la propiedad "grid-auto-rows".

grid-auto-rows: 100px;

- Ahora, cada vez que se genera una fila automáticamente, va a tener 100px de altura.