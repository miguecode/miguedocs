---
title: "Elementos, atributos, cómo crearlos y colgarlos al DOM"
---

> Elementos del DOM y sus Atributos

- Si bien no es obligatorio, existe una convención que es ponerle " $ " a los nombres de las variables que van a contener algún tipo de nodo/elemento que se esté visualizando en la interfaz de usuario: 

	const $link = document.querySelector("a");
	console.log($link);

- Para saber: $link va a ser un objeto. Todos los elementos a los que estemos referenciando en el DOM van a ser objetos. Y en este caso, va a ser un objeto cuyo prototype es "HTMLAnchorElement". 


>> getAttribute

- Podemos acceder a los atributos del nodo $link mediante el operador " . "o mediante un método:

	console.log($link.href);  // Muestra el contenido del atributo href de $link, que contiene a un <a>
	console.log($link.getAttribute("href"));  // Muestra exactamente lo mismo


>> setAttribute

- También le podemos setear un atributo nuevo con setAttribute:
	
	$link.setAttribute("href", "https://infobae.com"); 

- El primer parámetro es el nombre del atributo que queremos agregar, y el segundo es su valor.


>> removeAttribute

	$link.setAttribute("target", "_blank");  // Agregamos otro atributo
	$link.removeAttribute("target");  // Eliminamos un atributo (pasando su nombre)

- Con este método le eliminamos un atributo al elemento, pasando el nombre del atributo.


>> toggleAttribute

- Como sabemos, en los elementos HTML hay atributos booleanos. Es decir, aquellos que su valor solo puede ser true o false. Para ello, podemos usar el método toggleAttribute. 

	$link.toggleAttribute("disabled");   // Al no tener "disabled", se lo va a poner
	$link.toggleAttribute("disabled");   // Ahora como sí lo tiene, se lo va a sacar

- Con esto podemos activar o desactivar un atributo booleano. Es decir, alternarlo entre true y false.


>> hasAttribute

	console.log($link.hasAttribute("href"));   // Devuelve true o false (en este caso, true)

- Este método sirve para saber si un elemento tiene o no un atributo.


> Creación de nodo elementos (createElement)

- Antes de ver cómo se hace, hay que entender una cosa. Como sabemos, el DOM está compuesto de NODOS. Y si bien es cierto que la mayoría de estos nodos son representaciones de elementos HTML, hay más tipos de nodos distintos, que no son elementos HTML. En este caso, vamos a ver cómo crear "nodo elementos". Es decir, nodos que efectivamente SÍ son elementos HTML.

- Para crear elementos, tenemos que usar el método de document "createElement()". A este método hay que pasarle un string, que será el nombre del tagHTML, es decir, el nombre de la etiqueta (p, div, h1, img, etc.).

	const $imagen = document.createElement("img");
	$imagen.setAttribute("src", "https://picsum.photos/id/237/200/200");
	$imagen.setAttribute("alt", "imagen de un animal");

- En este caso, lo que hicimos fue crear un elemento "img", y le seteamos los atributos "src" y "alt". 

- La imagen, entonces, va a ser la de ese enlace (una página que sirve para usar fotos random).

- Ese elemento que acabamos de crear, ahora está en memoria. Pero todavía NO esta colgado en el DOM. Es decir, todavía no lo podemos visualizar en nuestra página. Lo que tenemos que hacer es colocar nuestro elemento creado en algún lugar del DOM. Veamos cómo:


>> Colocar el elemento creado en el DOM (appendChild)

	<div id="contenedor-imagen"></div>

- Suponiendo que tenemos eso en el HTML, podemos hacer esto:

	const $divImagen = document.getElementById("contenedor-imagen");
	$divImagen.appendChild($imagen);

- Usando el método appendChild, lo que hacemos es agregarle un elemento a otro. Eso quiere decir que el elemento que estamos agregando, va a ser el HIJO. En este caso, $imagen va a ser el elemento HIJO de $divImagen. Una vez que hice eso, ya vamos a poder visualizar la imagen en la página.


>> InnerHTML (Incrustar código HTML literal)

- Otra forma de colocar elementos en el DOM es con el método innerHTML.

	$divImagen.innerHTML = '<img src="https://picsum.photos/id/180/200/200" alt="Otra imagen"/>';

- Con el método innerHTML estamos literalmente incrustándole código HTML al $divImagen y funciona igual que lo que hicimos antes. La diferencia es que antes lo construimos de manera dinámica, y ahora lo hicimos con una cadena de texto HTML ya armada. 

- El InnerHTML, si bien es útil, es menos eficiente que usar appendChild o outerHTML, ya que tiene que volver a interpretar el HTML y puede ser vulnerable a ataques XSS (aunque OuterHTML, en ese caso, también).

- O podría hacer un "pseudo-dinamismo" así:

	let url = "https://picsum.photos/id/180/200/200";
	let alt = "Otra imagen distinta";
	
	$divImagen.innerHTML = '<img src=${url} alt=${alt}/>';
	
- En este caso, hacemos lo mismo que antes, pero "casi dinámicamente", ya que los valores de las variables "url" y "alt" podrían variar.


- Pero la mejor forma de hacerlo es la primera. Es decir, la forma que es totalmente dinámica, usando los métodos que están pensados para eso (createElement, appendChild y demás). 


>> OuterHTML (Reemplazar un elemento por código HTML)

- Su sintaxis es igual que el InnerHTML, es decir, hay que pasarle un string cuyo texto sea código HTML. En este caso, el código HTML que le pasemos va a REEMPLAZAR al elemento. Veamos:

	$primerImg.outerHTML = '<p>Aca había una imagen y la cambié por este párrafo usando outerHTML.</p>';

- En este caso, lo que hicimos fue sacar del DOM a "$primerImg", y en su lugar colocar el párrafo que le pasamos por código HTML.

- Como dijimos antes, outerHTML es más eficiente que innerHTML. Pero aún así, AppendChild sigue siendo la mejor opción y la recomendada.


> Otro ejemplo

	const $subTitulo = document.createElement("h2");
	$subTitulo.textContent = "Soy un subtítulo h2";
	
- La propiedad textContent es un string. En este caso, su valor va a ser el contenido de texto del elemento h2.
	
- O también podríamos hacer esto:


> Creación de Nodo

- Vamos a crear un nodo de texto:

	const $nodoTexto = document.createTextNode("Soy un subtítulo h2");

- Como dijimos antes, hay distintos tipos de nodo. Con el método "createElement", lo que hacíamos era crear "nodo elementos". Es decir, nodos que representan elementos HTML. Pero en este caso, no hicimos eso. Con el método createTextNode creamos un "nodo texto".

- Y ahora, si bien tenemos el nodo de texto creado, tenemos que hacerle append para que algún elemento lo contenga. En este caso, nuestro nodo elemento $subtitulo:

	$subTitulo.appendChild($nodoTexto);

- De esta forma, hicimos exactamente lo mismo que antes, pero no es la forma más común hoy en día. Lo más común es lo anterior, accediendo directamente textContent ($subTitulo.textContent = "Hola");