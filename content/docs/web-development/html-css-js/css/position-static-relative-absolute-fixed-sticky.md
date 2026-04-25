---
title: "Position (Static, Relative, Absolute, Fixed, Sticky)"
description: "Los elementos de CSS se posicionan, por defecto, de forma ESTÁTICA (static). Esto quiere decir que los elementos se quedan donde están, definidos en el HTML. Y ..."
---


## Static

- Los elementos de CSS se posicionan, por defecto, de forma ESTÁTICA (static). Esto quiere decir que los elementos se quedan donde están, definidos en el HTML. Y se van apilando. Sin tanta historia.

position: static;  // Posición por defecto

- Así como existe el valor "static", existen más valores.


## Absolute y Relative

position: absolute;

- Que la posición sea "absolute", significa que nosotros vamos a poder determinar las coordenadas exactas de la posición del elemento en la página, usando "top, right, bottom, left". Los elementos con posición "absolute" son totalmente dependientes de otro elemento padre cuya position sea relative. 

.container {
```text
box-sizing: border-box;
width: 240px;
height: 240px;
position: absolute;
top: 0;
right: 0;
```
}

- **El "top**: 0" significa que, del punto de más alto (top), nos vamos a alejar 0 pixeles. Por ende, va a aparecer PEGADO al borde más alto. El "right: 0" es lo mismo, pero al extremo derecho. Y así con las 4 direcciones. Si ponemos "right: 20", entonces el elemento se va a posicionar a 20px de llegar al extremo derecho.

- La posición absoluta se maneja sin importarle los bordes o demás factores de la página. Es muy bruto. Si pones top: 0, se va arriba de todo. Por más de que ya haya otro elemento ahí. Si se posiciona por encima de uno, ahí entraría en juego la propiedad z-index, la cual define qué elemento superpone a otro visualmente.

- **Lo más importante es lo siguiente**: Cuando decimos que la posición es absoluta, nace la pregunta: ¿Absoluta a qué? Antes de responder, pensemos: Si yo le pongo top: 0 a mi elemento con posición absoluta, el elemento se va al tope de la página... O sea que, en ese caso, la posición del elemento está siendo absoluto a la página, al documento. Ahí está la respuesta. Y supongamos que no queremos eso. O sea, yo quiero que el elemento sea de position absolute, pero que no sea absoluto al documento, sino que sea dependiente de otro elemento del sitio.

- **Por ejemplo, si yo le pongo position**: absolute a mi elemento .container, y mi elemento .container está dentro de una section, lo lógico es que lo que yo quiera es que la posición absoluta del container dependa del tamaño de la section, es decir, que se mueva ahí adentro. Y que no le importe el documento en sí, sino la section.

- Para esto, lo que tenemos que hacer es que la section, o el elemento contenedor al elemento absoluto, tenga su position en RELATIVE.

section {
```text
box-sizing: border-box;
position: relative;
```
}

.container {
```text
box-sizing: border-box;
position: absolute;
top: 0;
right: 0;
```
}

- De esta forma, el elemento de clase .container ya no va a ser relativo al documento, sino que va a ser relativo a la section. (Considerando que en el HTML, el container está dentro de la section).

- Esto pasa porque, cuando un elemento tiene position absolute, lo que hace es IR A BUSCAR padre por padre en la jerarquía del DOM, hasta encontrarse con algún padre que tenga la position en relative. Y si la tiene, el elemento se va a posicionar de forma absoluta en base a ese elemento que lo contiene. Si no encuentra ninguno, entonces le va a ser relativo al documento. O sea, a la página entera. 

- Con position en 'static', no va a servir el posicionamiento con 'left, top, right, bottom'.

- **Si nosotros hacemos esto**: 

rigth: 0;
top: 0;
bottom: 0;
left: 0;
margin: auto;

- Lo que estamos haciendo es centrar un elemento tanto vertical como horizontalmente (siempre y cuando el elemento tenga height y width definidos). Pero esto no es una buena práctica, esto sólo podría servir para modales o cosas así.

- **Aún así, se puede resumir mejor**: 

inset: 0;

- **El inset**: 0; es una forma resumida de decirle top: 0, right: 0, bottom: 0, left: 0.


## Fixed

position: fixed;

- El fixed funciona parecido al absolute. Pero tiene una gran diferencia: Los elementos con position fixed, van a funcionar como los absolute, PERO siempre van a ser relativos al documento, o sea, al viewport. Fixed SIEMPRE se basa en el viewport. Esto quiere decir que no le importa si el elemento es hijo de un padre con position relative, los elementos con position fixed van a ser siempre relativos al documento. Y eso provoca que, por más que hagamos scroll, el elemento siempre va a estar presente en pantalla, y en el mismo lugar.

- Como dijimos que es parecido al absolute, estos elementos también los vamos a poder posicionar con top-right-bottom-left. Podría servir para siempre tener anclado un menú arriba de todo, un botón para subir hasta lo más alto de la página, o el típico boton de "Chat" para el soporte, que aparece siempre abajo de todo a la derecha.


## Sticky

- El sticky es como si fuera un "intermedio" entre el comportamiento del absolute y del fixed. A diferencia del fixed, sticky no se queda siempre fijo en pantalla. Sino que, como pasa con los absolute, se van a situar en base al padre contenedor con position relative. 

- Pero, esto va a ser así hasta cierto momento. Y tiene que ver con el scroll y con qué parte de la pantalla estamos viendo. Si nosotros scrolleamos hacia abajo haciendo que el elemento con position sticky ya no se vea, el elemento NO va a permitir eso. Y "decide" quedarse FIJO en el extremo de la pantalla, como si fuese un fixed. 

- **Y así se va a quedar, hasta que pase otra cosa**: Hasta que su contenedor padre se salga del viewport. En ese momento, el elemento sticky deja de estar "pegado" o "fijo" en la pantalla. Por ende, se puede dar la sensación de que un segundo elemento lo empuja hacia fuera de la pantalla.