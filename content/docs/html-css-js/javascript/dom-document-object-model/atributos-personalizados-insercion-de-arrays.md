---
title: "Atributos personalizados. Inserción de arrays"
description: "Los atributos personalizados son una forma de almacenar datos en elementos HTML."
---


## Atributos personalizados

Los atributos personalizados empiezan con el prefijo "data-" y son nombres de atributos inventados por nosotros. Sirven para que, desde el DOM, podamos apuntar a elementos por cierta condición. Se suele usar para usar un "id" (data-id).

```html
<img src="./arbol.png" alt="Un arbol" data-descripcion="Es un arbol antiguo" />
```

En este caso, el atributo va a almacenarse en un objeto llamado "dataset". Este objeto es contenido por los elementos. Podemos acceder a el así:

```javascript
console.log($imgArbol.dataset.descripcion);  // Muestra "Es un arbol antiguo"
console.log($img.getAttribute("data-descripcion"));  // Muestra "Es un árbol antiguo"
```

Accedemos al objeto "dataset", que es el que contiene a todos los atributos personalizados del elemento. Y cuando quiero acceder a uno de ellos, escribimos su nombre (sin el "data-" adelante).

```javascript
console.log($imgArbol.dataset);
```

Muestra un objeto DOMStringMap. Es el objeto a donde van a parar todos los "data-".

Obviamente, con el setAttribute también podemos modificar estos atributos "data":

```javascript
$imgArbol.setAttribute("data-id", "1234");
$img.dataset.descripcion = "Un roble muy grande";
```

## Ejemplo de insertar elementos al DOM y Document Fragment

Para empezar, entramos a Mockaroo.com, una página dedicada a generar una tabla de datos random en base a lo que nosotros necesitemos.

Hacemos una tabla con los campos "id" (de tipo Row Number) y "titulo" (de tipo Movie Title).
Ponemos que sea un array, creamos el archivo en formato JSON y lo descargamos.

Una vez descargado, movemos el archivo .json a la carpeta de su proyecto y lo modificamos así:
Le cambiamos el tipo de archivo: le ponemos .js para que sea un archivo JavaScript.
Y lo hacemos para que sea un archivo exportador, como cuando teníamos un .js, y de él, exportabamos funciones para que las usen otros archivos .js. También le cambiamos el nombre para que quede llamado: "peliculas.js".

En este caso, en vez de exportar un archivo, exportamos un objeto array "movies". Es un array de objetos. Cada objeto va a ser un objeto literal { } el cual va a contener 2 propiedades: la "id" y el "titulo". Es la lista que nos entregó el archivo .json.

**Entonces quedó**:

```javascript
export const movies = [ {}, {}, {}, {}, {} ... ];
```

El "export" adelante, es obviamente para que se pueda importar ese array.

Y en el archivo que va a tener el script, cuando escribimos el `<script>`, como sabemos, le tenemos que poner `type="module"`, para que sea un archivo que pueda pedirle elementos a otro archivo (al archivo peliculas.js).

Y en el archivo .js en el que voy a importar el array, ponemos:

```javascript
import { movies } from "./peliculas.js";
const $lista = document.getElementById("lista");
console.log($lista);
```

Y en el HTML tendríamos algo así:

```html
<h1>Listado de Películas</h1>
<ul id="lista"></ul>
```

Ahora, lo que queremos es construir la lista con las películas. Vamos a hacer esto:

```javascript
movies.forEach((movie) => {
    const $li = document.createElement("li");
    const $texto = document.createTextNode(movie.titulo);
    $li.appendChild($texto);
    $li.setAttribute("data-id", movie.id);

    $lista.appendChild($li);
});
```

Esto está bien pero no tan bien, ya que no es lo ideal tener que hacer tantas "inserciones" al DOM (una por cada película). Es decir, estamos haciendo un "appendChild" por cada elemento del array movies. Hacemos que la página se tenga que renderizar 50 veces para crear la lista.

**Así que ahora hacemos**:

```javascript
const $div = document.createElement("div");

movies.forEach((movie) => {
    const $li = document.createElement("li");
    const $texto = document.createTextNode(movie.titulo);
    $li.appendChild($texto);
    $li.setAttribute("data-id", movie.id);

    $div.appendChild($li);
});

$lista.appendChild($div);
```

Esto tiene como contra que voy a tener un "div" que "contamina" el DOM. Entonces, esto es más eficiente, ya que yo las 50 inserciones las hice en memoria, y recién después las mande al DOM en una sola inserción. Pero, ocurre que el "div" "contamina" al DOM.

Entonces, para esto resolver esto, existen los "fragments":

```javascript
const $fragmento = document.createDocumentFragment();

movies.forEach((movie) => {
    const $li = document.createElement("li");
    const $texto = document.createTextNode(movie.titulo);
    $li.appendChild($texto);
    $li.setAttribute("data-id", movie.id);
    $fragmento.appendChild($li);
});

$lista.appendChild($fragmento);
```

El documentFragment es un nodo contenedor que nos permite hacer esa inserción única al DOM. El fragmento se podría decir que es "biodegradable", ya que cuando lo metemos en el DOM, desaparece. Es como si hicieramos lo mismo de antes, pero sin contaminar el DOM, ya que el "fragment" es algo que no se ve en el HTML.

Cada vez que hacemos un appendChild, el navegador lo que tiene que hacer es renderizar la página. Por eso es que no es eficiente ejecutar 50 veces appendChild para hacer las 50 inyecciones en el DOM. Es mejor hacer las 50 inyecciones en memoria (el fragment), y después hacer una única inyección en el DOM (inyectando el fragment que contiene las 50 películas).

El fragment no se renderiza. Por lo tanto, nos sirve como contenedor de otros nodos en memoria. Es un Nodo Contenedor que no aparece en el DOM final. No contamina.

### Otro ejemplo con el fragment

```javascript
const $fragment = document.createDocumentFragment();
const $li = document.createElement("li");
$li.textContent = "Soy un elemento";
$fragment.appendChild($li);

console.log($fragment.childNodes.length); // 1 (el <li> está dentro)

$lista.appendChild($fragment);

console.log($fragment.childNodes.length); // 0 (se vació, el <li> ahora está en el DOM)
```

**También podría**:

```javascript
const crearItems = (lista) => {
    const $fragmento = document.createDocumentFragment();
    lista.forEach((movie) => {
        const $li = document.createElement("li");
        const $texto = document.createTextNode(movie.titulo);
        $li.appendChild($texto);
        $li.setAttribute("data-id", movie.id);
        $fragmento.appendChild($li);
    });

    return $fragmento;
};
```

**Y después, usando esta función haría**:

```javascript
$lista.appendChild(crearItems(movies));
```