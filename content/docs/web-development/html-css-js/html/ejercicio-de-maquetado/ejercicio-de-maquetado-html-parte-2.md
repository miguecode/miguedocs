---
title: "Ejercicio de Maquetado HTML Parte 2"
---

Siguiendo con el ejercicio...

Ya entrando en la primer section, lo primero que reconocemos es el subtítulo "Más Sobre Nosotros". Cada página debe tener un sólo h1, que será el título. Y todos los subtítulos, serán h2. Asi que este elemento es un <h2>.

Ahora vemos 3 elementos los cuales NO llegan a ser artículos, es como que, por la poca información, el poco nivel de detalle y la poca interacción que tenemos con esos elementos, no los vamos a considerar artículos (ya lo explicamos anteriormente). Por lo tanto, los vamos a dividir como <div>. Son 3 <div>. Cada div tiene su propia imagen <img> y subtítulo <h3>.  ¿Por qué h3 y no h2? Porque dentro de esta sección, ya tenemos un h2, es decir, el verdadero subtítulo. Estos 3 son subtítulos del subtítulo h2. Por eso les corresponden ser h3. Además del h3, cada div tiene su <p>. Los h3 los escribimos todo en minúscula, a pesar de que en la imagen los vemos que están en mayúscula. Baus dice que esto es porque lo vamos a modificar con CSS después.

Eso sería todo con esa sección, ahora pasamos a la sección MAIN. Lo primero que vemos es el título de esta sección, el cual sería un subtítulo de la página. Asi que es h2.
Esta sección es diferente a la anterior. Ya que los 3 elementos de esta sección son <article>. Tienen independencia del contexto en el que están, es como que se separan de ese título h2 que le pusimos. Un artículo tiene un nivel de importancia tal que no estaría mal que dentro de el haya un header, un body, sections, y un footer. Se puede hacer así y está bien. Baus en este caso no va a hacerlo. Simplemente es una elección de la persona que se encarga de estructurar. Dependiendo de qué tanto detalle tenga ese artículo se hará o no.

Dentro de cada <article> hay una <img>, después un subtítulo <h2>, después un <p> que sería la descripción.
Para el precio vamos a usar otra vez <p>.
Dato: <span> es el compañerito del <div>. Ninguno de los dos tienen significado. Su única función es agrupar un contenido al solo efecto de poder referenciarlo. Normalmente <span> va anidada dentro de un párrafo. Es inline. 

Para los datos de la cantidad de baños, coches y habitaciones, vamos a hacer una lista <ul>. Cada <li> de esa lista tiene una <img> y un número. En este caso Baus decidió que el número quede dentro de un <span>.
Aclaración: las listas ya de por si estan inventadas para agrupar items (li). Por lo tanto, en este caso no es nada necesario agrupar esa <ul> dentro de una <div>. Ya la lista es la contenedora de los items.
Por último, un <a> para abrir el enlace 'Ver Propiedad'. Si bien se ve como un botón, lo que nos hace ver la página es que cuando le demos clic ahí, nos va a mandar a otra página con los detalles de ese artículo (esa casa). Por eso es que lo interpretamos como un <a> (anchor) y no como un botón. Obvio que después con CSS le damos estilo para que se vea como un botón.
Abajo de los artículos hay un 'Ver Todas'. Obviamente es un <a>. Es el mismo caso que el 'Ver Propiedad'.

Ahora, la nueva section. 'Encuentra la casa de tus sueños' es el h2. Es el título de la sección, y por tanto el subtítulo de la página. Lo de abajo es un párrafo, y el botón de abajo es un <a> (no un <button>). Lo que pasa con esta imagen de fondo es lo mismo que en el header. Nos ayuda a darnos cuenta que todo lo que está delante de esa imagen, es una sección. Y ojo, no es una etiqueta <img>, al ser una imagen que esta como fondo de otros elementos, es una background-image, que es algo que le corresponde al CSS.

Ahora, la sección de subtítulo h2 'Nuestro Blog'. Contiene 2 <article>. Cada uno tiene: una imagen, un h2, un <p> con dos <span> (los span justamente para remarcar la fecha y el autor) y otro <p> debajo.
Esta bien pensarlo así, pero en la fecha, en vez de usar <span> es mejor usar la etiqueta semántica <time>. Siempre que en la página haya una fecha, debería estar entre las etiquetas <time> </time>. Y en vez de usar <span> para el autor, vamos a usar <em>. Ya que le vamos a dar énfasis, porque a nosotros nos importa quién lo escribió.

En la sección Comentarios, obviamente un h2 para 'Comentarios'. Ahora Baus prefirió que esto no sea una <section>. Está diciendo que prefiere que sea un <aside>, quizá porque al tener un sólo comentario prefiere que sea así, dice que no llega a ser una sección. En cualquier caso, ese loguito de comillas es una <img>.
Después, al ser una cita, existe la etiqueta <blockquote>. Blockquote es un párrafo semántico; dentro de él vamos a poner un <p>, y una <cite> (para especificar a quién se está citando).

Por último, el footer: tiene un <nav> como el header. Literalmente es el mismo, le ponemos 4 <li> que cada uno tendrá un <a>. Y lo de la derecha, es simplemente un <p>. Eso que está al final de la frase 'Todos los derechos reservados 2023' es un caracter especial, para escribirlo ponemos: &copy; Eso es una 'HTML Entity'. Si vamos a w3schools.com, hay una sección 'HTML Entities' en la cual podemos ver todos los códigos para escribir esos caracteres especiales. En este caso, el código es &copy; (copy por Copyright - Derechos de Autor).

!¡ En los <article> de los blogs, podríamos hacer que al hacer clic en cualquier parte del artículo, nos mande justamente a la página dedicada a ese artículo, es decir, a ese blog que le dimos clic. Para esto podemos hacer simplemente que todo el <article> sea un <a>. Y dentro de ese <a>, estará el h2 y todo lo demás.
U otra forma podría ser que solo dar clic en el subtítulo nos mande al blog, para eso haríamos que el <a> sólo contenga al h2.