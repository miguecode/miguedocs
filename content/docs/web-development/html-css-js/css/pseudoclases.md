---
title: "Pseudoclases"
description: "Una pseudoclase es una situación especial en la que se encuentra un elemento. Hacen referencia a los distintos estados que pueden tener los elementos."
---



- Una pseudoclase es una situación especial en la que se encuentra un elemento. Hacen referencia a los distintos estados que pueden tener los elementos.

- Por ejemplo, podemos definir una pseudoclase típica llamada 'hover'. Las pseudoclases se identifican por los dos puntos ' : '

- Las pseudoclases más comunes pueden ser hover, active, focus, disabled, enabled, visited, valid, first-child, last-child, invalid, checked, root, entre otras.

### Hover

div:hover {
```css
background-color: red;
font-weight: bold;
```
}

- Esto hace que cuando pasemos el puntero por encima del elemento (hacerle hover), se activa la pseudoclase div:hover.

- Funciona para todo. Por ejemplo, si en el hover yo modifico el margin-left, eso haría que cada vez que paso el mouse por encima del elemento, se va a mover dependiendo de cómo modifiquemos el margin-left. Si le ponemos -40px, se va a tirar 40px a la izquierda. Si nosotros le metemos una transición a eso (no al hover, sino al elemento original), vamos a ver el movimiento de cómo se actualiza la posición del elemento, podemos hacerlo con transition, así:

transition: background-color 5s;

- 'Transition' hace que la transición del background-color entre el color original y el del hover, dure 5 segundos. Es decir, le agregamos una transición. Existe también 'transition-duration', que sería lo mismo. El tiempo se puede medir en 's' o en 'ms'. Todo el tema de transiciones está explicado en otro apunte.


### Active

.button:active {
```css
color: red;
```
}

El estado "active" se refiera a cuando un elemento está activo o sea, cuando le estamos haciendo clic, cuando está siendo presionado en pantallas táctiles o cuando un enlace está en proceso de ser activado. Básicamente, :active ocurre cuando el usuario mantiene presionado un elemento interactivo. Lógicamente esto sirve, por ejemplo, en un botón. 


### Focus

.input:focus {
```css
color: green;
```
}

El estado "focus" se refiere a cuando, por ejemplo, una input quedó seleccionada, un botón, o enlaces. Incluso puede activarse con el teclado pulsando TAB. Es decir, un elemento que quedó enfocado. Se le está haciendo focus. Esto pasa cuando le hacemos clic a una input. Una vez que le hicimos clic, el elemento quedó en "focus", hasta que nosotros hagamos clic en otro lugar.


### Disabled y Enabled

Otros estados, son el "disabled" y el "enabled", o sea, cuando el elemento está deshabilitado o habilitado. Ambos hacen referencia a estados.

### Visited

El estado visited hace referencia a un enlace (elemento `<a>`) al cual YA accedimos. Es el típico cambio de color de azul a violeta oscuro que hacen las búsquedas de Google para indicarte que ya entraste a tal página. Entonces, con esta pseudoclase podemos estilar al elemento en ese estado.

a:visited {
```css
color: green;
```
}

### Valid e Invalid

Los estados valid e invalid hacen referencia a las inputs válidas o inválidas de un formulario. Mientas una input esté en un estado de validez, estará en valid, y sino, en invalid. 

### Root

- **La pseudo-clase**: root de CSS selecciona el elemento raíz de un árbol que representa el documento. En HTML, :root representa el elemento `<html>` y es idéntico al selector html, excepto que su especificidad es mayor. Esta pseudoclase es útil para declarar variables CSS globales, o para aplicar estilos al HTML:

:root {
```css
background: yellow;
--main-color: #444;
--secondary-color: #888;
```
}

- Entonces, en este caso "root" selecciona al elemento raíz del documento, que en HTML, va a ser el elemento `<html>` (la etiqueta). Esto hace que el background del documento entero sea yellow, y que --main-color y --secondary-color sean dos variables CSS creadas por nosotros.


### La nueva pseudoclase Has

- Esta pseudoclase es relativamente nueva y muy potente. Permite seleccionar a un elemento si contiene a otro elemento dentro. Como por ejemplo indicar a todos los DIV que contengan un IMG.

div:has(img) {
```css
background-color: blue;
```
}

- De esta forma, todos los div que tengan un img, van ser estilizados con un fondo azul.


### Posiciones en listas

Estos son estados que generalmente se usan en listas, así:

li:first-child { // Primer hijo
```css
color: red;
```
}

li:nth-child(2) { // Segundo hijo
```css
color: blue;
```
}

li:nth-child(3) { // Tercer hijo
```css
color: green;
```
}

li:last-child { // Último hijo
```css
color: yellow;
```
}

- Como vemos, el "nth-child()", puede recibir cualquier número en los paréntesis. Dependiendo del número, va a ser la posición del elemento en la lista de hermanos. Lo que va entre paréntesis, además de solo números, puede tener muchas otras variantes, para elegir múltiplos, o los patrones que se nos ocurran. Por ejemplo: :nth-child(3n), esto va a seleccionar cada 3 elementos. O sea, elegiría el 3, 6, 9...

:nth-child(odd) → Selecciona los elementos impares (1°, 3°, 5°, etc.).

:nth-child(even) → Selecciona los elementos pares (2°, 4°, 6°, etc.).

:nth-of-type(n) → Similar a nth-child, pero cuenta solo elementos de un mismo tipo (por ejemplo, solo `<p>`, sin importar otros elementos hermanos).

:only-child → Aplica estilo si el elemento es el único hijo de su padre.


### Otras pseudoclases

:only-of-type → Aplica estilo si el elemento es el único de su tipo dentro de su padre.

:not(selector) → Excluye elementos que coincidan con el selector especificado. Ejemplo: p:not(.especial).

:empty → Selecciona elementos sin contenido (ni texto ni hijos).

:checked → Aplica estilos a checkboxes o radios que estén seleccionados.

:required → Aplica estilos a elementos de formulario con el atributo required.  

:default → Aplica estilos a elementos de formulario que ya vienen seleccionados por defecto, por ejemplo en una input de tipo radio buttons.  

:in-range y :out-of-range → Aplica estilos a las input numéricas dependiendo de si el valor actual está dentro o fuera del rango establecido.

:target → Selecciona elementos cuyo id coincide con la URL actual (ejemplo: #seccion1 en misitio.com/#seccion1).


### Aclaración

- Tanto "before" como "after" NO son pseudoclases, son pseudoelementos. Están explicados en otros apuntes. La diferencia visual es que los pseudoelementos van con " :: " adelante. Las pseudoclases, " : ".

### Herramientas para desarrolladores

- Si abrimos el panel, podemos -en forma de prueba- forzar y cambiar los estados de los elementos de la pantalla. Justamente, para ver cómo se comportan.

### CSS Nesting

- El CSS Nesting es una "nueva" sintaxis de CSS que permite colocar las pseudoclases dentro del elemento base, de la siguiente forma:

.container {
```css
background: red;
display: flex;

&:hover {
	background: blue;
}
```
}

- En este caso, el "&" es reemplazado por ".container". Esta sintaxis es buena porque hace más legible saber a cuál elemento apunta el hover, por decirlo así.

- Cabe decir que CSS Nesting todavía no es compatible con todos los navegadores sin preprocessors como Sass o PostCSS.