---
title: "Pseudoelementos"
description: "No son lo mismo que las pseudoclases (como por ejemplo, hover). Las pseudoclases hacen referencia a los estados de los elementos."
---



- No son lo mismo que las pseudoclases (como por ejemplo, hover). Las pseudoclases hacen referencia a los estados de los elementos. 

- Son menos comunes de usar que las pseudoclases, y también hay muchos menos.

- Los pseudoelementos nos permiten acceder, con CSS, a partes de nuestra página a las cuales generalmente no podríamos acceder. Por ejemplo, la selección del texto, o la "first-line" de un elemento con texto, o los elementos de "after" y "before". Estos dos últimos es cuando nosotros queremos agregar un elemento justo antes o justo después de otro elemento.

- **Los pseudoelementos se escriben con un "**: :" adelante. A diferencia de las pseudoclases, que es con ":".

### Pseudoelemento Selection

.dialogo::selection {
```typescript
background: red;
color: green;
```
}

- De esta forma, personalizamos la selección de nuestro elemento con clase "dialogo". Cabe decir que ::selection no permite todas las propiedades de CSS, solo admite: color, background, text-decoration y cursor. Todas las demás, no sirven.


### Pseudoelemento After (o Before, da igual)

.dialogo::after {
```typescript
content: "Hola!";
```
}

- La propiedad "content" es OBLIGATORIA en los pseudoelementos ::after y ::before, incluso si su valor es vacío (content: ""). Si no ponemos "content", el pseudoelemento no se renderiza.

- De esta forma, en nuestro párrafo de clase "dialogo", va a aparecer un "Hola!" al final. Si el pseudoelemento fuera ::before, aparecería al principio de todo. 

.dialogo {
```typescript
position: relative;
```
}

.dialogo::after {
```typescript
content: "";
display: block;
position: absolute;
bottom: 0px;
right: 50%;
background: red;
height: 30px;
width: 30px;
```
}

- Con el content vacío y las demás propiedades, estaríamos creando un cuadrado rojo. La idea de esto es complementar a nuestro elemento original, de alguna forma que se nos ocurra. Por ejemplo, podemos hacer que un párrafo tenga una flechita hacia abajo, por decir algo. Es para poner "adornos" de forma más rápida, sin tener que crear el elemento en HTML de forma tradicional.


### Pseudoelemento Placeholder

::placeholder → Permite cambiar el estilo del texto de marcador de posición en inputs (<input placeholder="Escribe aquí">).

.input::placeholder {
```typescript
color: red;
```
}


### Todos los demás pseudoelementos

::file-selector-button → Estiliza el botón predeterminado de un <input type="file">, permitiendo personalizarlo.

::first-line → Aplica estilos a la primera línea de un bloque de texto.

::first-letter → Aplica estilos a la primera letra de un bloque de texto (como en revistas o libros donde la primera letra es grande).

::marker → Estiliza los marcadores de listas (`<ul>` y `<ol>`), es decir, los bullets (•) o números.

::backdrop → Se usa para estilizar el fondo detrás de elementos a pantalla completa, como modales (`<dialog>` con showModal()).

::cue → Sirve para dar estilo a subtítulos en videos (`<track>`), útil para personalizar captions en `<video>`.

::part → Se usa en Web Components para permitir que los estilos de CSS personalizados modifiquen ciertas partes internas del componente.

::slotted → Funciona dentro de Web Components y permite aplicar estilos a los elementos que se "inyectan" dentro de un `<slot>`.

Estos últimos (::part y ::slotted) son más avanzados y específicos de Web Components, pero los demás pueden ser útiles en el día a día.