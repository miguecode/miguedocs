---
title: "Box Model"
description: "Box Model (Modelo de la caja)"
---


## Box Model (Modelo de la caja)

- Esto es lo más importante de CSS, ya que los elementos HTML que vemos son CAJAS.

- **Las cajas (elementos) se dividen en**: De estilo "En Línea" (inline), o de estilo "En Bloque" (block).

display: inline;

- Los elementos en línea, aparecen siempre uno al lado del otro. Por ejemplo, si yo tengo un elemento en línea, el próximo elemento que ponga va a aparecer AL LADO del anterior. Pero si está en bloque, no va a aparecer al lado, sino que va a aparecer ABAJO.

- Algo importante a saber es que, los elementos que tengan el display: inline, van a ser elementos SIN HEIGHT, NI WIDTH. O sea, aunque se los queramos modificar, no vamos a poder, porque pasan a ser elementos "de texto". Y por ende, su tamaño va a depender de su propio contenido. El height y el width no les va a afectar a su tamaño aunque queramos.

display: block;

- **En cambio, los display**: block SÍ tienen valores de height y width. Por ende, los podemos modificar.

- Por ejemplo, los div, los section, los button, los h1, vienen por defecto con el estilo "display: block". Y los span, los a, los em, y los strong, en "inline". Estos son sólo ejemplos. Todos los elementos tienen, por defecto, alguno de estos dos valores.

- También existe otro valor que es el "inline-block"

display: inline-block;

- Con el display en 'inline-block', el elemento va a tener el comportamiento del inline (tener un elemento al lado del otro, en vez de uno abajo del otro), pero además, también nos permite darle el tamaño que queramos (el width y el height que queramos). O sea, mezcla ambos tipos.

display: none;

- Con el display en 'none', se oculta el elemento.


## Jerarquía de capas en el Box Model

Margin > Border > Padding > Content

- **Content**: literalmente el contenido de un elemento. También llamado "Content Box"
- **Padding**: es la distancia o el espacio que hay entre el contenido de un elemento y su borde.
- **Border**: es literalmente el borde de un elemento, "abraza" al padding.
- **Margin**: es la distancia que hay entre un elemento y los demás elementos próximos.

### Tamaño real de los elementos [Basado en Box-Sizing: Content-Box] [Explicado en la última sección]

- Si por ejemplo, tengo un elemento de 200x200 (width - height), en realidad, el elemento se va a ver más grande que eso. Esto es así ya que, además del width y el height, TAMBIÉN hay que tomar en cuenta al PADDING y al BORDER. Es decir que, para calcular el tamaño real de un elemento, hay que considerar: [heightxwidth] + [padding] + [border].
¿Y por qué? Esto ocurre ya que los valores de "width" y "height" SÓLO SON PROPIOS DE LA CAPA DEL CONTENT. O sea, no toman en cuenta lo que podría ser el padding o el border del elemento. Se refieren sólo al contenido. Por ende, visualmente, el tamaño real del elemento siempre va a ser más grande que lo que coloquemos como "width" y "height". Porque al tamaño del contenido también hay que sumarle el padding y el border. Esto es muy fácil de ver si usamos las herramientas para desarrolladores.

- **Entonces**: 

.container {
```css
height: 100px;
width: 100px;
padding: 10px;
border: 10px solid red;
```
}

- El elemento, en este caso, va a tener un tamaño real de 140x140, y no de 100x100 como se esperaría.

- El margin NO afecta al tamaño de nuestro elemento. Es decir, si tuviese 100px de margin, eso no haría que nuestro elemento sea 100px más grande. El margen sólo afecta a la distancia que habrá entre los demás elementos próximos. 


## Box Sizing [IMPORTANTÍSIMO] [SOBREESCRIBE LA EXPLICACIÓN ANTERIOR]

- Todo esto último que contamos es así por la propiedad "box-sizing". Todos los elementos van a tener esta propiedad. Y por defecto, siempre tiene el valor "content-box". Este valor nos da el comportamiento que explicamos antes. El famoso "cálculo" para saber el tamaño real de nuestros elementos -->  (Width x Height) + (Padding) + (Border) = Tamaño Real.

- Ahora viene lo importante, y es que nosotros podemos EVITAR TODO ESTO. Para cambiar este comportamiento "molesto", y que el tamaño del contenido de un elemento se adapte considerando también al padding y al border, tenemos que cambiar el valor de la propiedad "box-sizing" a "border-box" así:

box-sizing: content-box;     // estilo por defecto 
box-sizing: border-box;      // estilo sobreescrito por nosotros (recomendado)

- Hacer este cambio, aunque no sea obligatorio, es una buena práctica, ya que ahora, el TAMAÑO REAL de nuestros elementos, va a ser definido por el HEIGHT y por el WIDTH. Cosa que antes NO PASABA.

- ¿Vale la pena hacer este ajuste? SÍ. Es una excelente práctica para facilitar el desarrollo.


- **Entonces**: 

.container {
```css
height: 100px;
width: 100px;
padding: 10px;
border: 10px solid red;
```
}

- El elemento container, en este caso, NO va a tener un tamaño real de 140x140. Ahora, el tamaño real va a ser 100x100, es decir, lo que uno se esperaría al leer la regla. Esto es así porque cambia el cálculo. Ahora, directamente el tamaño real de nuestro elemento va a ser definido por "height" y "width". O sea que, en este caso, nuestro elemento va a tener un tamaño real de 100x100.

- Al tener el box-sizing en border-box, el content del elemento se ajusta junto al padding y al border para llegar a lo que debería ser el tamaño real. Y tomando en cuenta eso, el "height" y el "width" no van a modificar el tamaño del CONTENIDO del elemento. Sino que va a modificar el TAMAÑO REAL del ELEMENTO en sí. 

- ¿Cómo es posible? ¿Dónde quedan los otros 40px? Lo que pasa es que el CONTENIDO del elemento, o sea, el "Content Box", va a tener otro tamaño, que no es el 100x100 que sería originalmente. Sino que va a ser otro, ya que se va a adaptar. En este caso, el tamaño real del Contenido va a ser: 60x60. ¿Por qué? Porque el tamaño del contenido se tiene que ajustar para que tenga sentido el cálculo:

[60h de contenido] + [20h de padding] + [20h de borde] = 100 de Height
[60w de contenido] + [20w de padding] + [20w de borde] = 100 de Width

- También cabe decir que, el height y el width van a ser los mínimos. O sea, si nosotros ponemos 1px de height y 1px de width, si nuestro padding es de 30px, va a terminar siendo más grande que 1px. No podemos controlarlo al máximo en ese sentido.

- Y, ¿Por qué tenemos que hacer este cambio? ¿Por qué los navegadores no ponen border-box por defecto? Bueno, esto es por la retrocompatibilidad. Si hacen ese cambio, se estarían cargando muchísimas páginas que ya se crearon usando el content-box por defecto.


## Diferencia entre Borde (border) y Contorno (outline)

### Borde

- El borde afecta al contenido. Es decir, es parte de la caja del elemento y ocupa espacio dentro del diseño.

- Al agregar o cambiar el borde, puede afectar el tamaño del elemento y provocar desplazamientos o "saltos" en la interfaz.

- Se dibuja alrededor del contenido y del padding, pero dentro del área del elemento.

### Contorno (Outline)

- A diferencia del borde, NO ocupa espacio en el diseño, ya que se dibuja por encima del contenido sin modificar el tamaño del elemento.

- No afecta el flujo de la caja, por lo que no provoca desplazamientos.

- Más conveniente para efectos de resalte (focus en inputs, hover en enlaces, etc.).


### ¿Cuándo usar border y cuándo outline?

- **El border**: Cuando queremos que el borde sea parte del diseño normal del elemento.
- **El outline**: Cuando queremos resaltar un elemento sin modificar su tamaño ni provocar desplazamientos.

.link:hover {
```css
border: 5px solid red;
```
}

.link:hover {
```text
outline: 5px solid red;
```
}

- Esto hace que, a veces, sea más conveniente usar outline. Si bien son casi lo mismo, a veces usar el borde provoca saltos indeseados en los elementos a los que le hacemos hover.


#### Cabe aclarar que border y outline pueden combinarse en un mismo elemento, aunque no sea la práctica más común.