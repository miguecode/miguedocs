---
title: "Accesibilidad Web. Aria-label, alt y más"
description: "Accesibilidad Web: ¿Qué es y por qué es importante?"
---


## Accesibilidad Web: ¿Qué es y por qué es importante?

- La accesibilidad web se refiere a la práctica de hacer sitios web que sean adaptables para todos. Es decir, que todo aquel que entre a nuestra página sea capaz de entenderla fácilmente, y de interactuar con ella correctamente.

- Y esto no sólo hace referencia a la gente con distintas capacidades o limitaciones físicas como ser ciego o ser daltónico. Hace referencia a -cualquier- tipo de persona. Ya que por ejemplo, que un texto tenga un color demasiado parecido al color de fondo, o que tenga una fuente muy chica, va a ser que sea difícil leerlo, más allá de que seas la persona con mejor vista del mundo. O sea que, la accesibilidad es muy importante y les afecta a TODOS, más allá de sus capacidades o limitaciones. 

- En Europa existen leyes respecto a la accesibilidad web. El no cumplir las reglas mínimas de accesibilidad se puede considerar un delito. En Argentina eso no pasa, pero no importa, es importante igual.

- Además, como si fuera poco, tener buena accesibilidad también afecta al SEO (Search Engine Optimization) de nuestro sitio. Es decir, cuanto más accesible sea nuestra página, mejor posicionamiento en los resultados de búsqueda va a tener. Sí, los motores de búsqueda le prestan atención a la accesibilidad, al igual que pasa con la semántica y los metadatos.


## ¿Cómo hacemos que sea accesible?

- Esto ya lo estuvimos viendo en otros apuntes. El simple hecho de usar la etiqueta correcta para nuestro elemento, ya suma accesibilidad. Si nosotros vamos a hacer una lista de botones, es importante que los Item List de esa lista, contengan dentro etiquetas button. Porque sino después, no los vamos a poder acceder usando TAB.

- Con "Acceder usando TAB" nos referimos a que, las personas con problemas de vista, no van a usar el mouse para ver en dónde hacer clic. Lo que van a usar es el teclado, y generalmente, la llamada "Navegación TAB". Si nosotros vamos a cualquier página en Internet, vamos a notar que al pulsar TAB, nos vamos desplazando en orden por cada elemento interactivo del sitio. Y con ENTER o ESPACIO, podemos "hacerle clic". 

- Entonces, es importante que nuestra página pueda ser 100% navegable mediante el TAB. Es algo fácil de poner a prueba, simplemente nos ponemos a tocar TAB en nuestra página, y tenemos que ver que todos los elementos "pulsables", se puedan pulsar y se destaquen cada vez que pasamos por ellos con el TAB.


## El atributo "aria-label"

- Con respecto a la descripción de los elementos, nosotros tenemos que, además de usar las etiquetas correctas, usar el atributo "aria-label", para aquellos elementos que NO tengan una descripción de texto visible, o que necesiten una descripción todavía más explícita.

- Antes de ver un ejemplo, tenemos que saber que ARIA son siglas de Accessible Rich Internet Applications. El atributo aria-label es parte de las especificaciones de ARIA, diseñadas para mejorar la accesibilidad de las aplicaciones web. Lo que pongamos en aria-label no se ve en la pantalla, está creado única y exclusivamente para aportar accesibilidad.

```text
<button id="cambiar-tema">Cambiar de Tema</button>
```
- Este elemento es autodescriptivo. Es decir, tiene un texto que describe qué es lo que hace. Y es un texto claro y directo. Entonces, este elemento NO necesita que usemos el atributo aria-label. Porque el lector de voz va a simplemente leer el texto "Cambiar de Tema". Esto ya es accesible.

- Pero supongamos que nuestro botón para cambiar de tema NO es autodescriptivo, y sólo es un ícono:

```text
<button id="cambiar-tema"><svg>...</svg></button>
```
- En este caso, el botón es sólo un ícono. Entonces, la persona con problemas de vista no va a saber qué hace ese botón, ya que el lector de voz sólo va a decirle que es un botón, sin más. Y acá es cuando entra en juego el atributo aria-label. 

```text
<button aria-label="Cambiar de tema"><svg>...</svg></button>
```
- Ahora, el lector de voz va a decir "Cambiar de tema" cuando se enfoque a ese botón. Y eso es lo correcto, ya que conseguimos el mismo efecto que antes. Visualmente, sólo se va a ver un ícono. Pero auditivamente, el lector va a pronunciar la frase "Cambiar de tema". 


## El atributo alt

- El atributo "alt" de la etiqueta `<img>` cumple la misma función que "aria-label", pero en este caso, sólo para imágenes. Es una descripción que no se ve visualmente, pero que es leído por los lectores de voz y sirve para explicar de qué trata la imagen. 

```text
<img src="foto.jpg" alt="Foto de Miguel en la playa">
```
- Cabe decir que, en imágenes decorativas (como íconos de adorno que no aportan información), se recomienda dejar el atributo alt vacío en lugar de poner un texto innecesario. O sea: alt=""
## Buenas prácticas

1. No usar aria-label cuando ya hay texto visible relevante: Si un botón o enlace ya tiene texto legible, no es necesario agregar aria-label.
 
2. Usarlo solo cuando es necesario: Si podemos lograr la accesibilidad de otra manera (como usando etiquetas semánticas o texto visible), hay que priorizar esas soluciones, y no usar aria-label.
 
3. Proporcionar descripciones claras y concisas.

- **Bien**: aria-label="Abrir configuraciones del usuario"
- **Mal**: aria-label="Configuraciones"


## Extensiones de Accesibilidad

- En Windows, si pulsamos WINDOWS + CTRL + ENTER, activamos el "Narrador". Es decir, un programa que trae Windows para personas con problemas de vista. Lo que hace este programa es LEER cada elemento de la pantalla, para que sepamos qué es cada cosa, y así podamos interactuar correctamente con el sistema. Como esto es una herramienta más propia de Windows, sirve para todo el sistema en general.

- Pero como nosotros vamos a centrarnos más en las páginas, vamos a usar otro programa. En este caso, una extensión de Google Chrome, llamada Chrome Vox o Screen Reader. Es como Narrador, pero específica para navegadores.

- Nosotros podemos poner a prueba nuestro sitio web, usando esa extensión. Y así podemos ver si los elementos de nuestra página se leen correctamente. Es decir, vamos a ver si tenemos una buena accesibilidad o no.


## Más atributos de accesibilidad útiles

- Para elementos que no son naturalmente semánticos → role
- Para elementos que el lector debe ignorar → aria-hidden.
- Para navegación → tabindex, role="navigation".
- Para formularios → aria-labelledby, aria-describedby, tabindex.
- Para notificaciones/mensajes → aria-live, role="alert".
- Para indicar el idioma → lang.


### Role

- Se usa para especificar el rol de un elemento en la accesibilidad. Hay que usarlo solo cuando sea necesario, y no cuando el elemento HTML ya tiene un rol semántico natural.

- Es decir, si nosotros usamos etiquetas semánticas correctamente, estas ya tienen un rol accesible por defecto, y por ende no es necesario agregar el atributo role. Veamos ejemplos de cuándo NO usarlo:

```text
<button>Enviar</button> <!-- No necesita role="button", ya es un botón -->
<a href="#">Ver más</a> <!-- No necesita role="link", ya es un enlace -->
<nav>Menú principal</nav> <!-- No necesita role="navigation" -->
<header>Encabezado</header> <!-- No necesita role="banner" -->
<aside>Publicidad</aside> <!-- No necesita role="complementary" -->
```
- Entonces, hay que usarlo cuando un elemento NO SEMÁNTICO necesita comportarse como otro elemento.

```html
<div role="button" tabindex="0">Haz clic aquí</div>
```
- En este caso, div NO es un botón, y sin role, los lectores de pantalla no lo van a anunciar como tal. Además, le agregamos tabindex="0" para que sea seleccionable con TAB.

```html
<div role="list">
    <div role="listitem">Elemento 1</div>
    <div role="listitem">Elemento 2</div>
</div>
```
- En este caso, tabién sería necesario. Porque estamos haciendo una lista con 'divs'. Lógicamente, esto es totalmente erróneo. Es decir, es una pésima práctica usar div's para esto, y no usar etiquetas de lista y de items de lista. Pero en caso de no hacerlo, como acá, habría que poner el atributo role.

### Tabindex

- Controla el orden en que los elementos son seleccionados con TAB. Veamos sus valores útiles:
- tabindex="0" → Sigue el orden natural del DOM (por defecto). Si el elemento no era seleccionable, al ponerle 0 ahora sí lo es.
- tabindex="-1" → Hace que el elemento no sea seleccionable con TAB, pero aún puede recibir foco con JavaScript.
- tabindex="1" o más → Define un orden manual (no recomendado porque rompe la navegación lógica).

### Aria-hidden

- Indica que un elemento debe ser ignorado por los lectores de pantalla. Se usa cuando hay elementos decorativos que no aportan información relevante, y por ende no tiene sentido que el lector los lea.

```text
<span aria-hidden="true">🔥</span>
```
### Aria-Labelledby

- Similar a aria-label, pero en lugar de escribir un texto manualmente, referencia un ID de otro elemento que ya contiene el texto. Esto le dice al lector de pantalla que este input está relacionado con "Formulario de Contacto".

```text
<h2 id="titulo-form">Formulario de Contacto</h2>
<input type="text" aria-labelledby="titulo-form">
```

### Ejemplos de roles útiles

| Rol | ¿Para qué sirve? | ¿Cuándo usarlo? |
| --- | --- | --- |
| role="button" | Hace que un div o span se comporte como botón. | Cuando no usás `<button>`. |
| role="alert" | Hace que el texto se lea automáticamente. | Para errores, alertas, notificaciones. |
| role="navigation" | Define una sección de navegación. | Solo si usás div, no si usás `<nav>`. |
| role="list" | Define una lista. | Si creas una lista con div. |
| role="listitem" | Define un elemento de lista. | Si creas una lista sin `<li>`. |
| role="region" | Define una sección importante del contenido. | Para destacar una sección para accesibilidad. |
| role="dialog" | Indica que un div es un cuadro de diálogo/modal. | Para pop-ups o modales personalizados. |