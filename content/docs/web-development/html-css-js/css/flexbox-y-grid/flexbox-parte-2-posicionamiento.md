---
title: "Flexbox - Parte 2 (Posicionamiento)"
description: "El eje principal de nuestro contenedor flexbox va a ser el que determine 'flex-direction'. Si flex-direction es row, el eje principal va a ser el X, o sea, el h..."
---


## Posicionamiento

- El eje principal de nuestro contenedor flexbox va a ser el que determine "flex-direction". Si flex-direction es row, el eje principal va a ser el X, o sea, el horizontal. Si flex-direction es column, el eje principal va a ser el Y, o sea, el vertical.

- Las dos propiedades más importantes para posicionar elementos van a ser "justify-content" y "align-items". Ambas propiedades dependen del eje principal (X o Y).


### Propiedad "justify-content"

### La propiedad "justify-content" alinea a los elementos en base al eje principal. Es decir, depende de si el flex-direction es row o column. Si es una row, va a alinear horizontalmente. Si es una column, va a alinear verticalmente. Su valor por defecto, en los contenedores flex, es el flex-start. Si fuese display: grid en vez de display: flex, el valor por defecto sería stretch. El navegador también puede influir.

justify-content: flex-start; // [Valor por Defecto] - Empiezan desde el inicio
justify-content: flex-end; // Empiezan desde el final
justify-content: center; // Se posicionan en el centro
justify-content: space-around; // Tienen espaciado en ambos lados, pero los bordes externos la mitad
justify-content: space-between; // Espacio en forma uniforme, el primero y el último tocan los extremos
justify-content: space-evenly; // Espacio totalmente uniforme incluido los bordes externos


### Propiedad "align-items"

### La propiedad "align-items" alinea a los elementos en base al eje perpendicular/secundario. Es decir, también depende de si el flex-direction es row o column. Pero su funcionamiento es el invertido al justify-content, o sea: Si es una row, va a alinear verticalmente. Si es una column, va a alinear horizontalmente. Su valor por defecto es stretch. 

align-items: flex-start; // - Empiezan desde el inicio
align-items: flex-end; // Empiezan desde el final
align-items: center; // Se posicionan en el centro
align-items: stretch; [Valor por Defecto]  // Se estiran para usar toda la altura o anchura del contenedor
align-items: baseline; // Se alinean en base al texto más grande


### Propiedad "align-content"

- La propiedad "align-content" determina el espacio que hay entre las distintas filas o entre las distintas columnas. Por ende, si sólo tenemos una fila o sólo tenemos una columna, esta propiedad no va a tener efecto alguno. Cabe decir que esta propiedad no se suele utilizar tanto como las dos anteriores.

- Esta propiedad tiene los valores de "flex-start", "flex-end", "center", "space-between", "space-around" y "stretch". Stretch es su valor por defecto.


### Propiedad "align-self"

- Esta propiedad NO es del contenedor flex. Es de los elementos. Acepta los mismos valores que align-items (flex-start, end, etc.). No ignora a lo establecido en align-items, sino que lo sobreescribe. Básicamente, sirve para hacer excepciones.

.item:nth-child(4) {
```text
align-self: flex-end;
```
}

- Esto hace que, el cuarto elemento de un contenedor flex, se alinee de forma diferente a como lo dicta el contenedor flex padre (suponiendo que el padre lo tiene en flex-start).


### Propiedad "gap"

- La propiedad "gap" define el espacio entre cada elemento dentro del contenedor.

gap: 15px; // Cada elemento va a estar a 15px de distancia del otro

- También existen "row-gap" y "column-gap", por si queremos definir el espaciado en una sola dirección. Otra curiosidad es que antes de que exista "gap", se usaba "margin".