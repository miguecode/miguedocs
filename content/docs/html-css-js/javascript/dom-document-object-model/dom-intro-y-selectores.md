---
title: "DOM. Intro y Selectores"
description: "El DOM (Document Object Model) es una estructura de árbol basado en nodos, los cuales, van a representar a cada etiqueta de nuestro código HTML."
---


## El DOM (Document Object Model)

El DOM es una estructura de árbol basado en nodos, los cuales, van a representar a cada etiqueta de nuestro código HTML. El DOM no es lo mismo que el código HTML, sino que es una representación de él, estructurado en memoria.

En cualquier esquema de árbol hay NODOS. Un nodo no es ni más ni menos que un elemento de la estructura. El padre es un nodo, sus hijos son nodos, el padre del padre un nodo, todos son nodos.

```text
	 [Nodo]
	    |
______|_______  [Estructura de árbol]
    |     |
[Nodo]  [Nodo]
```
En el caso del DOM, entonces, cada uno de estos NODOS van a representar a cada una de las ETIQUETAS del código HTML.

El navegador va a interpretar línea a línea el código HTML. Y en segundo plano, lo que va a hacer es crear el DOM. Y para crearlo, va a tomar e interpretar a cada ETIQUETA HTML que encuentre, con todas sus propiedades. Y cada una de esas etiquetas con sus propiedades, van a ser representadas por un NODO en la estructura de árbol que acabamos de ver.

Y ahora, con JavaScript, nosotros podemos interactuar con la DOM como nosotros queramos, mediante su API. Todo esto con el fin de hacer que nuestra página sea interactiva, en vez de estática. Vamos a poder manipular la estructura, los estilos y las funciones de nuestra página. Para esto tenemos que usar métodos, objetos y propiedades propios del DOM.


## El scope/objeto Document

Document es un objeto de JavaScript que forma parte del scope global "window". Document se crea cuando ya se terminó de renderizar toda la página. En el DOM, el objeto document representa a la etiqueta `<html>`. Es decir, document es un nodo del DOM como cualquier otro, pero es el principal. 

Eso quiere decir que es el nodo raíz del DOM. A partir de él, se van anidando todos los demás nodos, es decir, todas las demás etiquetas HTML. 

```javascript
window > document > [Todos los elementos del DOM y métodos]
```

Por ejemplo, el objeto document es quien va a tener como propiedad un array de forms. Es decir, una lista con todas las etiquetas `<form>` de la página. Y no sólo eso, también tiene otras propiedades y métodos.

```javascript
console.log(document); // Así podemos ver el objeto entero y lo que contiene
```

Estos son algunos ejemplos de lo que contiene document:

```javascript
console.log(document.documentElement);
console.log(document.head); 
console.log(document.body);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.scripts);
console.log(document.styleSheets);
console.log(document.title);
console.log(document.documentElement.lang);
```
Entonces, en document vamos a encontrar todos los elementos HTML que tengamos. La mayoría de estos elementos son arrays, pero "title", por ejemplo, simplemente devuelve el título de la página.


## Selectores del DOM en JavaScript

Lo primero a saber sobre el manejo del DOM en JavaScript, son los selectores. Así como en CSS tenemos formas de -seleccionar- los elementos HTML a los que queremos modificar, lo mismo pasa ahora con el DOM y JavaScript. Tenemos que seleccionar los elementos a los que queremos modificar. 

Para esto, vamos a usar métodos del objeto document:

getElementById();			// Devuelve el primer elemento que tenga el ID que le pasemos
getElementsByClassName();	// Devuelve todos los elementos que tengan la clase que le pasemos
getElementsByTag();		// Devuelve todos los elementos HTML de la etiqueta que le pasemos

- **Ejemplos**: 

```javascript
document.getElementById("redentor");
```

Devuelve el primer elemento que encuentre con la ID "redentor" (debería existir uno sólo).

```javascript
document.getElementsByClassName("introduccion");
```

Devuelve un HTMLCollection con todos los elementos con la clase "introduccion".

```javascript
document.getElementsByTagName("figure");
```

Devuelve un HTMLCollection (similar a un array) con todos los elementos HTML "figure".


Con el tiempo, aparecieron dos nuevos selectores, que también son métodos de "document". Sirven para apuntar directamente a los selectores del CSS, entonces es como matar dos pájaros de un tiro:

querySelector();	// Devuelve el primer elemento que tenga el selector CSS que le pasemos
querySelectorAll();	// Devuelve todos los elementos que tengan el selector CSS que le pasemos

Estos dos métodos reciben strings, que tienen que ser selectores CSS. O sea, hay que literalmente usar el selector que hayamos usado en CSS. Si queremos una ID, usamos " # ". Si es una clase, usamos " . ". Y si es una etiqueta HTML, no usamos ni " # " ni " . ".

Así como dijimos que getElementsByClassName y getsElementsByTagName devuelven un HTMLCollection, hay que saber que querySelectorAll devuelve una NodeList. Después vamos a ver la diferencia.

```javascript
document.querySelector("#redentor");
```

Devuelve el primer elemento que encuentre con el selector CSS "#redentor".

```javascript
document.querySelectorAll(".contacto");
```

Devuelve una NodeList (similar a un array) con todos los elementos vinculados a la clase CSS "contacto". 

```javascript
document.querySelectorAll("figure");
```

Devuelve una NodeList (similar a un array) con todos los elementos "figure". En este caso le estamos pasando el nombre de una etiqueta (tagName), por lo tanto no tenemos que ponerle " # " ni " . ".


Más allá de todo, el selector más eficiente sigue siendo getElementById. Esto es así porque las querySelector, al usar el selector de CSS, internamente tienen que realizar un parseo para poder funcionar.


Aclaración sobre el querySelector (u otros selectores). Podemos buscar también asi:

```javascript
const $elementoLista = document.querySelector(ul>li);
```

**Eso quiere decir**: dame la primer ocurrencia que encuentres donde haya un '`<li>`' dentro de una '`<ul>`'
Y así, siempre podemos jugar con los [padre] > [hijo]