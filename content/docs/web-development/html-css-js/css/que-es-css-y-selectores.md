---
title: "Qué es CSS y Selectores"
description: "CSS - Cascading Style Sheets (Hojas de estilo en cascada)"
---


## CSS - Cascading Style Sheets (Hojas de estilo en cascada)

- **"Hojas de estilo"**: Archivos de texto en los que vamos a escribir reglas.

- **"Cascada"**: La forma de determinar qué reglas se van a aplicar cuando hay conflictos. Hace referencia al orden y la importancia de cada regla (de arriba a bajo). Pero más adelante vamos a ver que la prioridad depende de otros factores relacionados a la especificidad (está en otro apunte).

- CSS es un lenguaje de estilos que define la apariencia de un documento escrito en un lenguaje de marcado, por ejemplo, HTML. Va a indicar cómo se va a VER el documento, permitiendo modificar colores, fuentes, márgenes, posiciones y otros aspectos visuales.

- El lenguaje CSS también puede escribirse dentro de código HTML, específicamente dentro de la etiqueta HTML llamada `<style>`.

### Estilos por defecto

- Si nosotros no aplicamos estilos, no importa. Nuestro sitio web ya va a tener estilos POR DEFECTO. Todos los navegadores siguen una convención particular que les indica qué estilos por defecto debe tener cada elemento HTML (un botón, un h1, etc.). 

- Si vamos a las herramientas de desarrollador en una página e inspeccionamos algún elemento, vamos a ver que, por defecto, viene con una gran cantidad de estilos, los cuales nosotros no habíamos aplicado. Estas reglas, como dijimos, provienen de los estilos por defecto del navegador (User Agent Stylesheet).

- Por ejemplo, los navegadores hacen que, por defecto, el elemento `<body>` tenga la propiedad: "margin: 8px". Por eso es que muchas veces, en los archivos CSS, aparece la regla body { margin: 0px }, con la intención de quitar ese margin por defecto que agrega el navegador. 

- Nosotros, al aplicar nuestras propias reglas, vamos a pisar a esos estilos por defecto.


### Estructura básica de una Regla CSS

selector {
| propiedad: valor; | // Esta línea es una Declaración |
| --- | --- |
| propiedad: valor; | // Esta línea es otra Declaración |
}

- Como vemos, una regla CSS está compuesta por un selector, y un bloque { } de declaraciones. Y cada declaración, tiene una propiedad y un valor.

- Las propiedades se pueden agrupar en una línea. Es decir: Si bien existen las propiedades border-top, border-bottom, border-left, border-radius, border-style... nosotros podemos simplemente usar 'border'. Y en border, especificar cada valor que queramos. CSS o JS va a inducir a qué propiedad específica nos referimos. Sería asi:

border: solid 5px black;

- Esto haría que el borde sea sólido, tenga un ancho de 5px y sea negro. Así, nos ahorramos de escribir 3 líneas de código distintas, especificando una por una.


### Selectores

- Sabemos que tanto los archivos JS como los CSS tienen que apuntar a los elementos HTML. Esto lo hacen mediante selectores, que pueden ser 3: 

1. La etiqueta (div, p, button, body). Si usamos este selector, el código se aplicará a TODOS los elementos de esa etiqueta. O sea, si quiero un estilo para los h1, todos los h1 del HTML se verán afectados. Suele usarse para seleccionar al body o al html.

2. La clase (.rojo, .parrafo, .destacado). Siempre va con un punto adelante. Las clases las usamos para 'agrupar' a los elementos que queremos alterar, y que pueden ser de distinta etiqueta. Es importante saber que un elemento puede tener más de una clase.

3. El ID (#introduccion, #primerBoton). Siempre va con un '#' adelante. Sirve para aplicarle cambios a un único elemento, es decir, tener máxima precisión. Un ID no debe repetirse en más de un elemento. 

- Existe también el *. Esto selecciona a todos los elementos del DOM y podría servir para sobreescribir los estilos que vienen por defecto del padding y del margin de los elementos, así:

* {
```css
padding: 0;
margin: 0;
box-sizing: border-box;
```
}

.link { // El "." de adelante, indica que el selector es una clase
```css
color: red;
```
}

#button { // El "#" de adelante, indica que el selector es un ID
```css
color: orange;
```
}

- Nosotros SIEMPRE tenemos que evitar usar los ID. La mejor práctica es usar clases, o usar las etiquetas básicas. No está mal usar los ID, pero sí está mal si los usamos mucho. Porque lo ideal es que nuestras reglas de CSS se reutilicen. Es decir, se apliquen a la mayor cantidad de elementos posible. Si vamos a estar usando el ID para cada cosa, se hace más largo el código, y mucho menos reutilizable.

### Selectores combinados

- Estos selectores buscan apuntar a elementos que sean hijos de otros.

nav img {
```text
 height: 30px;
```
}

Esto apunta a: "todas las `<img>` que estén dentro de un `<nav>`".

.contenedor p {
```css
background-color: orange;
```
}

Esto apunta a: "todos los `<p>` que estén dentro de un elemento con clase .contenedor".

- También existe otra forma de hacerlo, que es con ">". Pero no funciona exactamente igual.

.description > .bold {
```css
font-weight: bold;
color: purple;
```
}

El ">" indica "Sólo al primer nivel", es decir que la regla va a aplicar a todos los elementos con clase "bold" que sean HIJOS DIRECTOS de elementos con clase "description". Cuando decimos "hijos directos", nos referimos a que el "bold" no esté dentro de ningún otro padre más allá de description, que su padre más cercano sea un elemento con clase "description". Entonces, si el "bold" está dentro de otro elemento, no le va a importar que sea "nieto" de "description. Por ende, no se va a aplicar. Pero si le sacamos el ">", entonces sí.

- Existe otro operador que es el "+". Significa "el elemento que le sigue inmediatamente a...".

p + span {
```css
color: red;
```
}

- Esta regla se va a aplicar al primer `<span>` que esté JUSTO DESPUÉS de un `<p>`. Tiene que ser justito después, sino no se aplica.

- Existe otro operador que es el "~" (alt+126). Significa "que le sigue a". Es como el anterior, pero no tan específico. O sea, no importa si no está JUSTO DESPUÉS. Selecciona a todas las coincidencias que encuentre, así:

p ~ span {
```css
color: red;
```
}

- Esta regla se va a aplicar a todos los `<span>` que estén después de un `<p>`, ya se a inmediatamente después, o con otros elementos en el medio.

- También podemos apuntar a distintos elementos separando selectores por comas:
p, h2, h3 { 
```text
color: red
```
}

- Con esto, todos los p, h2 y h3 que se encuentren, van a tener el color en red.