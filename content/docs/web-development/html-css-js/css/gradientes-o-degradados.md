---
title: "Gradientes o degradados"
---

> Gradientes o degradados

- Son colores que van de un color a otro.

- Lo vamos a hacer utilizando la propidad background-image. Background-image no sólo sirve para colocar imágenes de fondo, sino que también sirve para hacer gradientes.

- Hay 3 tipos de Gradientes o degradados: Linear, Radial y Conic (pueden combinarse).


>> Linear-gradient

.element {
	width: 500px;
	height: 200px;
	background-image: linear-gradient(red, blue);
}

- Esto es lo más sencillo que podemos hacer. Ir de un color a otro con el linear-gradient(color1, color2).

linear-gradient(red, blue, green, yellow   ...);

- Podemos poner todos los colores que queramos.


>> La dirección

- Veamos esto a más detalle. El primer parámetro que reciben los degradados es su dirección, es decir, hacía donde va el gradiente. En este caso, nosotros no estamos colocando ninguna dirección, así que se establece la que viene por defecto, que es "to bottom", o "180deg". 

linear-gradient(dirección color1, color2, color3 ...);

- Hay 2 maneras de escribir la dirección y son:

- Con las palabras clave to top, to bottom, to right, to left, to top right, to bottom right, to bottom left y to top left.

- Con la unidad deg (grados). En realidad, las palabras clave hacen referencia a X número de deg. Pero si usamos los deg, podemos ser todavía más precisos. Por ejemplo, "to top" significa 0deg o 360deg. Y "to bottom" significa 180deg. Lógicamente, el deg va de 0 a 360.

linear-gradient(180deg, color1, color2);
linear-gradient(to right, color1, color2);


> Puntos de parada

- Además de la dirección y los colores, podemos agregar también el INICIO Y FIN de cada color. Entonces, la sintaxis sería:

linear-gradient(color1, color2);
linear-gradient(dirección, color1, color2);
linear-gradient(dirección, color1 inicio, color2 inicio);
linear-gradient(dirección, color1 inicio fin, color2 inicio fin);

- El inicio y fin se pueden escribir con px o con porcentajes. Se recomienda usar porcentajes.

.element {
	width: 500px;
	height: 200px;
	background-image: linear-gradient(180deg, red 0 50%, blue 50% 100%);
}

- En este caso, estamos estableciendo un cambio de color BRUSCO. Es decir, no vamos a notar el efecto de degradado. Porque el rojo va desde el inicio hasta exactamente la mitad, y el azul desde exactamente la mitad hasta el final. Entonces, no le estamos dando espacio a ninguno de los dos a "degradarse". 

- Cabe decir que, como el red es el primer color, se sobreentiende que su punto de partida es el 0. Por ende, podríamos no escribirlo, y simplemente poner 50%. Y lo mismo con el blue. Al ser el útlimo color, se sobreentiende que su punto final es el 100%. Así que podríamos poner solo 50%.

- Ahora, si bajamos un poquito el rojo, a 40%, le estamos dando un 10% de espacio para que se note el cambio degradado. Y cuanto más lo bajamos, más lo vemos. Lo mismo si bajamos el azul, y así vamos equilibrando el degradado a nuestro gusto.

- Hay una nueva forma de sintaxis que es escribir el punto de quiebre por fuera de los colores.

linear-gradient(to right, red, 50%, blue);


> Múltiples gradientes

- Podemos tener más de un gradiente en el background. Para hacerlo, los separamos por comas:

background-image: linear-gradient(to right, green, black),
				linear-gradient(to bottom, blue, red)

- Podemos anidar cuantos gradientes queramos, de cualquier tipo (lineal, radial, o cono) en distintas direcciones, colores, etc. 

- Otra cosa que podemos hacer también es combinarlo con poner una imagen. 

background-image: linear-gradient(to right, rgb(200 0 0 / 0.5, rgb(0 0 0 / 0.5),
				url(ruta de la imagen)
				
- De esta forma, estamos poniendo un gradiente por encima de la imagen, y le pusimos que vaya del rojo al negro, hacia la derecha, y a ambos colores le pusimos una transparencia del 50%, por ende, debajo del gradiente, se va a ver la foto que colocamos.



> Radial-gradient

- Este tipo de gradiente recibe un parámetro que hace referencia a su forma, que puede ser "ellipse" o "circle". Por defecto, viene en ellipse. Entonces, si no lo escribimos, va a ser un elipse.

background-image: radial-gradient(red, blue);

- Como no especificamos la forma, va a ser ellipse. Sino, podemos poner radial-gradient(circle, red, blue);


>> Tamaño de la forma

- La forma del gradiente en "circle" también puede recibir su tamaño como parámetro. Y se puede escribir en px, de esta forma:

background-image: radial-gradient(circle 50px, red, blue);

- Eso es con circle. Pero si lo tenemos en ellipse, también le podemos cambiar el tamaño. Pero en vez de usar un parámetro, usamos 2: uno para su tamaño vertical, y otro para el horizontal. Por eso es que es un elipse y no un círculo. El círculo tiene que tener una circunferencia perfecta, y por eso sólo recibe un parámetro.

background-image: radial-gradient(ellipse 40px 80px, red, blue);

- Para los tamaños, existen palabras clave como farthest-corner, closest-corner, farthest-side y closest-side. 


>> Ubicación de la forma

- Con ambas formas, elipse y círculo, nosotros le podemos indicar la UBICACIÓN. Es decir, en qué lugar del background-image va a aparecer la forma de gradiente. Para hacerlo, usamos la palabra "at", y dos parámetros escritos en porcentaje, el eje X y el Y. El valor por defecto de la ubicación siempre es 50% 50%, o sea, exactamente en el centro.

background-image: radial-gradient(ellipse 40px 80px at 0 0, red, blue);

- De esta forma, el elipsis va a aparecer arriba de todo, al a izquierda de todo.

background-image: radial-gradient(circle 40px at 25% 60%, red, blue);

- Esa sería otra posición. 


> Conic-gradient

- Este es el tercer tipo de gradientes. Es raro de explicar, tiene forma de cono. Tiene un sombreado más solido en un lugar y más "degradado" en el resto. Nosotros podemos especificar dónde.

- Usamos "from 0.6turn at 50% 50%" para indicar desde dónde y en dónde hacer el gradiente. El resto, es muy similar a los gradientes anteriores.


> Gradientes repetidos

- Esto hace referencia a 3 propiedades:

- repeating-linear-gradient
- repeating-radial-gradient
- repeating-conic-gradient

- La idea es que un mismo gradiente se repita cuantas veces queramos. Al hacer esto, siempre tenemos que indicar los puntos de partida de los colores (siempre marcando el inicio y el fin, sin excepción con el primer y el último color). 

background-image: repeating-linear-gradient(to right, red 0 10%, blue 10% 20%, green 20% 35%)