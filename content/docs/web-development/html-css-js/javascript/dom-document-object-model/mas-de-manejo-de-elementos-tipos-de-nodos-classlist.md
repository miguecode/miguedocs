---
title: "Más de manejo de elementos. Tipos de Nodos. Classlist"
description: "Siguiendo con el manejo de Elementos del DOM"
---

## Siguiendo con el manejo de Elementos del DOM

**Imaginando que tenemos un código HTML, analicemos**:

```html
<div id="textos">
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
  <p>Tercer párrafo</p>
</div>
```

```javascript
const $divParrafos = document.getElementById("textos");
console.log($divParrafos.childNodes);  // Muestra la NodeList de los hijos de $divParrafos
```

`childNodes` devuelve una NodeList con TODOS LOS NODOS HIJOS de divParrafos. Es decir, contiene a los `<p>` que están en el `<div id="textos">`, pero también a los textNode como el "`\n`", que son los saltos de línea del código HTML o de los "p". Esto nos demuestra que la NodeList muestra TODOS los tipos de nodos, ya sean elementos HTML o no.

```javascript
console.log($divParrafos.children); // Muestra la HTMLCollection
```

`children`, a diferencia de `childNodes`, no nos devuelve una NodeList con todos los nodos. Lo que devuelve es una HTMLCollection, la cual contiene únicamente a los nodos que sean elementos HTML, es decir, no incluye a los demás tipos de nodos.

**La diferencia clara se vería así**:

```javascript
$elemento.childNodes	// NodeList (Todos los nodos hijos, sean del tipo que sean)
$elemento.children		// HTMLCollection (Todos los nodos hijos que sean elementos HTML)
```

Como vemos que los elementos son tres `<p>`, la lista de nodos elemento (HTMLCollection) va a tener solamente 3 elementos, y justamente son esos 3 `<p>`. Sin embargo, en la lista que contiene a todos los nodos (NodeList), vamos a ver que cada `<p>` viene con un nodo de texto al inicio y al final. Ambos nodos de texto con un value: (`\n`). Obviamente, son los saltos de línea.

**Veamos más objetos**:

```javascript
$divParrafos.firstChild // Devuelve el primer elemento de la NodeList, es decir, de "childNodes"
$divParrafos.lastChild // Devuelve el último elemento de la NodeList, es decir, de "childNodes"

$divParrafos.firstElementChild // Devuelve el primer elemento de la HTMLCollection, es decir, de 'children'
$divParrafos.lastElementChild // Devuelve el último elemento de la HTMLCollection, es decir, de 'children'
```

## Diferencia entre Child y ElementChild

"Child", por si mismo, puede ser cualquier nodo hijo de un elemento. Ya sea un NodeText, un nodo elemento, lo que sea. Todos los tipos de nodo que existen.

"ElementChild", en cambio, son los nodo hijo elementos. Es decir, sólo los nodos hijos que son elementos HTML (etiquetas). Por eso son "ELEMENT child". Porque son elementos HTML.

En el DOM, existen varios tipos de nodos que representan diferentes elementos y contenido dentro de un documento HTML. Los principales son:

1.  **Nodo Elemento (Element Node)**: Representa una etiqueta HTML. `<p>`, `<a>`, `<img>`, etc.
2.  **Nodo Atributo (Attribute Node)**: Representa un atributo de un elemento HTML. `src`, `href`.
3.  **Nodo Texto (Text Node)**: Representa el contenido de texto dentro de un elemento HTML.
4.  **Nodo Comentario (Comment Node)**: Representa un comentario dentro del código HTML.
5.  **Nodo Documento (Document Node)**: Representa todo el documento HTML, es el nodo raíz del árbol DOM.
6.  **Nodo DocumentFragment**: Representa un nodo falso que se puede utilizar como contenedor temporal para manipular un grupo de nodos antes de agregarlos al árbol del DOM.

## Más métodos para manejar elementos en el DOM

```javascript
$divParrafos.appendChild(); 	 // Agrega un nodo hijo al final de los hijos de un elemento
$divParrafos.prepend(); 		 // Agrega un nodo hijo al inicio de los hijos de un elemento
$divParrafos.before(); 		 // Agrega un nodo hijo una línea antes del padre (o sea, una por fuera)
$divParrafos.after(); 			 // Agrega un nodo hijo una línea después del padre (o sea, una por fuera)
$divParrafos.replaceChild(); 	 // Reemplaza un nodo por otro. El nodo reemplazado queda eliminado
$divParrafos.removeChild(); 	 // Elimina un nodo
$divParrafos.hasChildNodes();	 // Devuelve true o false dependiendo de si el elemento tiene hijos o no
```

También hay unos nuevos métodos que sirven para insertar los elementos exactamente donde queremos, como `insertAdjacentElement`. Este método recibe 2 parámetros: la posición, y el elemento.

### Vamos a ver ejemplos

```javascript
$divParrafos.insertBefore($imagen2, $divParrafos.children[1]);
```

Le insertamos el elemento $imagen justo una línea antes (before) del elemento [1] de la lista de nodos hijo elemento de $divParrafos. Es decir, justo antes del segundo párrafo.

```javascript
$divParrafos.replaceChild($imagen, $divParrafos.firstElementChild);
```

Reemplazamos elementos. El primer parámetro va a ser el elemento que tome el lugar del segundo parámetro, el cual se elimina del DOM.

```javascript
console.log($divParrafos.hasChildNodes());  // Devuelve True o False (si el elemento tiene o no hijos)

while($divParrafos.hasChildNodes()) {
	$divParrafos.removeChild($divParrafos.firstChild);
}
```

Con este while, eliminamos todos los hijos nodo de un elemento de forma correcta. En este caso, los elementos del `<div>`.

### Más ejemplos con otro métodos

```javascript
let elemento = $divParrafos.firstElementChild;
while(elemento) {
	console.log(elemento);
	elemento = elemento.nextElementSibling;  // nextElementSibling retorna el elemento que le sigue
}

console.log($pRojo.nextSibling);         	  // Devuelve el siguiente nodo (sea elemento HTML o no)
console.log($pRojo.nextElementSibling);  // Devuelve siempre el siguiente elemento HTML
```

Con este método, mostramos elemento por elemento.

```javascript
const $pRojo = document.querySelector("p.rojo");
console.log($pRojo.closest("section"));
```

`closest()` devuelve el elemento más cercano que se pida. En este caso, le estamos pidiendo que nos devuelva la `<section>` más cercana a $pRojo. Recordemos que el padre de pRojo (un párrafo con clase "rojo") es el `<div>` que contiene a los 3 párrafos. Y el padre de este div, es una section (que si bien no la escribimos, imaginemos que es así).

```javascript
console.log($pRojo.closest("section.introduccion"));
```

Esto nos devuelve la `<section class="introduccion">` más cercana que encuentre.

## Las clases en el DOM

El objeto `classList` es, justamente, la lista de clases del elemento. Como sabemos, un elemento puede tener una o más de una clase (o ninguna). En este objeto se almacenan todas. Y con sus métodos las podemos manipular de la siguiente manera:

```javascript
$pRojo.classList.add();  	     // Agrega una clase
$pRojo.classList.remove();    // Borra una clase
$pRojo.classList.toggle();     // Cambia el estado de presencia de la clase que le pasemos como string
$pRojo.classList.contains();  // Devuelve True o False dependiendo de si contiene o no la clase
$pRojo.classList.replace();    // Reemplaza una clase por otra
```

```javascript
console.log($pRojo.classList); 	     // Muestra un DOMTokenList con todas las clases de $pRojo
console.log($pRojo.className);   // Muestra "rojo" (si tuviera más clases, muestra todas)
```

`classList` devuelve una DOMTokenList, que es una colección que contiene a todas las clases de pRojo.
`className` devuelve un string, que va a ser el nombre de todas las clases que tenga.

**Sobre toggle**:

```javascript
$pRojo.classList.toggle("negrita");  // Si ya tenía la clase "negrita", se la saca. Y sino, se la agrega
$pRojo.classList.toggle("negrita", true);  // Así, se asegura que la clase esté presente
$pRojo.classList.toggle("negrita", false); // Así, se asegura que la clase esté ausente
```

### Los estilos en los elementos

Con el objeto "style" podemos acceder a todas las propiedades de estilos en línea aplicados a los elementos. OJO: eso quiere decir que realmente no tenemos acceso a todos los estilos. El objeto style únicamente contiene a los estilos inline declarados en el HTML, y a los que declaramos dinámicamente con JavaScript. No incluye ni a los archivos .css externos ni a la etiqueta `<style>`. Para poder ver todos los estilos posibles tenemos que usar el método `getComputedStyle()`:

Imaginando que a `<p class="rojo">` le sacamos la clase y le ponemos un estilo en línea así:

```html
<p style="background-color: darkgreen;"></p>
```

```javascript
console.log($pRojo.style);
```

Style muestra una CSSStyleDeclaration, que contiene todos los estilos CSS aplicados.

```javascript
console.log($pRojo.style.backgroundColor);  // Muestra el valor del background-color (darkgreen)
```

El objeto style contiene propiedades cuyos nombres son los mismos nombres de las propiedades CSS. Por ejemplo, ese caso con el `style.backgroundColor`. Se puede acceder con el operador " . ".

Style también tiene los métodos `getPropertyValue` o `setProperty`.

```javascript
console.log($pRojo.style.getPropertyValue("background-color"));  // Muestra el valor del background-color
```

En este caso, pRojo NO tiene el atributo "style" en su línea de declaración en el archivo HTML. Por lo tanto, cuando mostremos su "style", nos va a mostrar que todos sus valores están sin modificar (""). Así que cuando quiero que me muestre el background, si hago el `getPropertyValue`, no me va a mostrar nada.

```javascript
$pRojo.style.setProperty("color", "red");  // Le establece una propiedad "color" con valor "red"
```

El `setProperty` funciona lo que hace es agregarle CSS embebido. Así que le agrega un: `style="color: yellow;"` al elemento.

### Usando el método `getComputedStyle`

```javascript
console.log(getComputedStyle($p).color);  // "rgb(0, 0, 255)" (azul, del <style>)
console.log(getComputedStyle($p).fontSize);  // "20px" (del archivo CSS)
console.log(getComputedStyle($p).backgroundColor);  // "rgb(255, 255, 0)" (amarillo, del archivo CSS)
```

Como vemos, `getComputedStyle()` devuelve TODOS los estilos que realmente se aplican, sin importar de dónde vengan. Por eso, es más poderoso que el objeto style (a la hora de visualizar qué estilos tiene un elemento, claro).