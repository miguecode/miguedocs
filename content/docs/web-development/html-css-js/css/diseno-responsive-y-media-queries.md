---
title: "Diseño Responsive y Media Queries"
description: "Diseño responsive"
---


## Diseño responsive

- Un diseño responsive es aquel que tiene la capacidad de adaptarse a distintos tamaños de pantallas. Es decir que, por ejemplo, una misma página web se adapte a la pantalla de un celular, de una tablet o de una computadora de escritorio (o cualquier otro dispositivo o tamaño). Y la gracia es que eso sea de forma automática, es decir, yo desarrollo una sóla interfaz visual, y más allá de la pantalla que esté usando el usuario para verla, la va a ver y va a interactuar con ella de forma óptima.

- **Vamos a ver 2 conceptos**: las media querys y los breakpoints.


## Media Query (o media queries en plural)

- Una media query es una declaración o regla en CSS que nos permite definir CUÁNDO una web tiene que cambiar sus propiedades (por ejemplo, cuándo debe aparecer un hamburger menu). Esto lo conseguimos usando BREAKPOINTS, que son los encargados de delimitar cuándo sí y cuándo no se tiene que ver reflejado algún cambio (explicados más adelante en este apunte).

- **La sintaxis completa de una media query es**: 

1. Regla o palabra reservada [OBLIGATORIA]
2. Media Type [OPCIONAL]
3. Operadores [OPCIONAL]
4. Breakpoint o Media Feature [OBLIGATORIA]

@media screen and | or | not (max-width: 480px) {

}

- "@media" sería la Regla o Palabra reservada (keyword).
- "screen" sería el Media Type. [Podría NO escribirse]
- "and | or | not" sería el Operador (alguno de ellos). [Podría NO escribirse]
- **(max-width**: 480px) sería el Breakpoint o Media Feature.

- Entonces, @media en CSS es una palabra reservada para poder hacer Responsive Design. Fue introducida en CSS3 junto a otras reglas como @font-face.

- El "screen" va junto al @media. Se le dice media screen. Viene de una familia de otros media que se utilizaban antes, como el @media print o el @media braille. NO son obligatorios de escribir.

- **Si no escribimos el Media Type, no pasa nada**: se va a asumir que su media type es "all", lo que significa que la media query se va a plicar a todos los dispositivos.

- Los operadores (and, or, not) solo son necesarios cuando combinamos varias condiciones. Si solo usamos una condición (como max-width), no hace falta poner and (u otro operador). 

- **"and"**: Se deben cumplir todas las condiciones. "or": Se debe cumplir al menos una condición. "not": Se debe cumplir lo opuesto a una condición.

@media (min-width: 600px) and (max-width: 900px) {

@media (max-width: 480px), (min-width: 1200px) {

@media not screen and (max-width: 480px) {



### Las media query SOBREESCRIBEN a las propiedades CSS, así que para usarlas existen varios trucos:

- Siempre las tenemos que colocar al final del archivo CSS, o en uno aparte. Esto con el fin de aumentar la especificidad de sus propiedades.
- Deben de tener el mismo selector que lo que queremos alterar.
- Sus breakpoints tienen que estar bien pensados.
- Una buena práctica es usar una metodología CSS, como BEM.


## Ejemplo

.h2 {
```css
color: black;
```
}

@media screen and (max-width: 480px) {
```css
.h2 {
	color: grey;
}
```
}

Esto se lee: "Mientras la pantalla respete el máximo de 480px, el h2 va a ser gris. Cuando tenga más de 480px, va a ser negro".

- **También puede escribirse así**: 

@media (max-width: 480px) {
```text
...
```
}


## Ejemplo

@media screen and (max-width: 700px) {
```css
div {
	background-color: green;			
	width: 25vw;
	height: 25vh;
}
```
}

Esto se lee: "Mientras la pantalla respete el máximo de 700px, los div van a ser verdes, y van a ocupar el 25% del viewport". 

- **También puede escribirse así**: 

@media (max-width: 700px) {
```text
...
```
}


### Recomendaciones

- Usar flexbox o grid CSS.
- No usar alturas en las etiquetas.
- Usar siempre medidas en porcentajes, vw o vh. Em y rem también son una opción. Pero evitar px.
- Calcular bien los anchos usando calc() o margin.


## Nueva característica en CSS (Range Syntax)

- Range Syntax es una nueva característica de CSS que simplifica la escritura de los breakpoints, para que no sea obligatorio usar min-width, max-width, min-height o max-height. Ahora podemos directamente usar width o height, y marcar los límites con `< >` >= <= así:

@media screen and (width >= 700px) {
```text
...
```
}


## Nueva característica en CSS (Nesting CSS)

- Esto ya lo hablamos en otros apuntes, pero esta característica permite anidar reglas dentro de otras, de la siguiente manera:

.nav {
```css
width: max-content;
background-color: red;
display: flex;
flex-wrap: wrap;

@media (width >= 700px) {
	flex-direction: column;
}
```
}


### Existen otras características modernas de CSS como clamp (aplicar tamaños responsivos para las fuentes), min (aplicar tamaños mínimos responsivos) o container querys (aplicar estilos distintos dependiendo del tamaño del elemento en sí, y no del tamaño de la pantalla).


## Prefers-color-scheme

- prefers-color-scheme es una media feature en CSS que nos permite detectar si el usuario ha configurado su sistema en modo claro o modo oscuro.

- **Podemos escribir media queries así**: 

@media (prefers-color-scheme: light) {
```css
body {
	background-color: white;
	color: black;
}
```
}

@media (prefers-color-scheme: dark) {
```css
body {
	background-color: black;
	color: white;
}
```
}


>>@media en HTML

- Sí, dentro de HTML también se usa la palabra reservada @media, aunque se escribe en forma de atributo.

- Se usa en etiquetas como `<link>` y `<style>`. Pero no es recomendado. También puede ser en las `<picture>`, y esto sí puede ser util, y se hace así:

`<picture>`
```text
<source srcset="imageMovil.jpg" media="screen and (max-width:480px)">
<img src="imagenPC.jpg" alt="imagen">
```
`</picture>`

- En este caso, la etiqueta `<source>` nos permite cambiar el atributo "src" de la etiqueta `<img>`. Img se encarga de cargar la imagen llamada "imagenPC.jpg", mientas que source tiene la imagen "imagenMovil.jpg". 

- Pero, ¿Cómo sabe el navegador cuál debe usar? Bueno, gracias al atributo media. 


### La etiqueta meta viewport

- Para que todo esto funcione, hay una etiqueta que es ESENCIAL, y es la de meta viewport. Tenemos que utilizarla dentro del `<header>`, y se va a encargar de configurar el viewport del dispositivo que estamos usando, para evitar que hagan escalas innecesarias. También configura el ancho de la web como el dispositivo sin importar su resolución. Básicamente, es una etiqueta obligatoria para que los navegadores interpreten los píxeles de forma correcta en nuestra web.

<meta name="viewport" content"width=device-width, initial-scale=1.0" />


## Breakpoints

- Un breakpoint o "punto de corte" es el límite en el cual nuestra web cambia, reemplaza o añade propiedades. Deben servir como referencia, y existen varios tipos: los breakpoints de resolución (los clásicos) y los breakpoints de dispositivo.

- En los breakpoints de resolución, tomamos en cuenta el ANCHO en PÍXELES de la pantalla. Dentro de estos breakpoints, existen 3 tipos: los básicos, los completos y los personalizados.

- Por convención, podemos establecer estos breakpoints básicos:

1. Móviles: de 0px a 480px.
2. Tablets: de 480px a 960px.
3. Escritorios: de 960px a 1328px.

- Si queremos ser todavía más específicos, usamos los breakpoints completos, para definir más dispositivos, tomando en cuenta: 

- **Móviles pequeños**: de 0px a 320px.
- **Móviles grandes**: de 320px a 480px.
- **Tablets pequeñas**: de 480px a 768px.
- **Tablets grandes**: de 960px a 1024px.
- **Escritorios**: de 1024px a 1328px.

- Esto puede ser una regla básica, pero NO DEFINITIVA. Nosotros tenemos que hacer el diseño responsive en base de nuestra propia web, apuntando a sus posibles bugs o puntos mejorables. No tenemos por qué basarnos en estas medidas al pie de la letra.

- Los breakpoints personalizados son todavía más específicos, y van a depender mucho del diseño propio de nuestra web. Usando el Google Analytics de nuestra web, vamos a saber la resolución que más usan nuestros usuarios, y otros datos.

- Los breakpoints de dispositivo toman en cuenta el comportamiento del propio dispositivo: Su orientación, el modo oscuro, la pantalla o impresión, entre otros.