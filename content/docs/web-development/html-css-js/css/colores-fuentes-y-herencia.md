---
title: "Colores, Fuentes y Herencia"
---

> Colores 

h1 {
	color: green;
}

- "green" es una palabra clave. Existen más, para usar colores estándar. Esta es la forma más rápida e intuitiva de indicar colores, pero también es la más limitada.

- Los colores se pueden indicar con rgb(255, 255, 255) (red-green-blue).

- También se puede usar rgba(255, 255, 255, 0.5) (red-green-blue-alpha) (alpha = transparencia). Es lo mismo que rgb, pero agregandole el parámetro de la transparencia. Esto aumenta el espectro de colores posibles.

- Hoy en día, rgba sigue funcionando perfectamente, pero no es la recomendable, ya que ahora hay una nueva sintaxis para rgb, que hace innecesario usar rgba.

- Esa nueva sintaxis es: rgb(255 255 255 / 0.5).  (red green blue / alpha).

- Otra opción, y muy usada, es la de los hexadecimales (#ff34ab). 

- Los hexadecimales son quizá los más usados gracias a su simpleza para ser escritos. 

- Los hexadecimales se pueden escribir con 3, 6 u 8 dígitos: Lo más común es con 6. Si lo hacemos con 8, esos dos dígitos extra se van a referir a la opacidad. Si usamos sólo 3 dígitos, es como si estuviesemos usando 6 pero resumido: #f3a sería: #ff33aa. #1e2 sería: #11ee22.


>> Otras opciones

- Otra opción es hsl(60, 0.5, 0.3). Modifica la luminosidad y brillo.

- Una opción todavía más moderna y potente es oklch(348 0.8 0.4 / 0.5). Es un modelo de color avanzado que representa colores con más presición en pantallas modernas. Es la medida de colores con la gama más grande de todas. Por ende, la que más variedad tiene. Pero eso no necesariamente significa que sea la mejor o que haya que usarla obligatoriamente. Pero es bueno conocerla.


>> Current Color

- El current color (color actual en español) es un valor de CSS.

- Aparece en muchos estilos por defecto. Por ejemplo, cuando le aplicamos un borde a algún elemento. Si nosotros no le especificamos un valor para su propiedad "color", el color por defecto va a ser el valor "current-color".

- El current-color es un valor de la propiedad "color", y su valor real va a ser el color actual que tenga el texto del elemento. Por ejemplo, si yo tengo un h1 y su color es blue, el color por defecto del borde del h1 (si es que lo agrego), va a ser blue también. Esto es así porque el texto del h1 es blue, como nosotros lo especificamos antes. El current color va a buscar la primera referencia de color que encuentre mirando "hacia atrás", o "hacia arriba" en la cascada.



> Fuentes

- La propiedad para las fuentes es: "font-family".

body {
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue',
}

- Hay un concepto importante que se llama "fallback", significa que cuando ponemos una fuente, y después con ',' le ponemos otra, sería como su 'Plan B'. Es decir que, si no encuentra la primera, busca la segunda y la usa. Y si tampoco la encuentra, buscará una tercera y así consecutivamente. Eso es un fallback. Y sirve para tener más seguridad de que, si algo que queremos aplicar no funciona, apliquemos otra cosa en su reemplazo.

- Varias de estas fuentes comunes tienen un por qué:

- system-ui: Usa la fuente del sistema operativo.
- -apple-system: Específico para macOS/iOS.
- 'Segoe UI': Windows.
- Roboto: Android, etc.


- 'Font-family' es una propiedad que SE HEREDA. Esto quiere decir que todos los elementos hijo van a tener ese valor en la propiedad font-family, que tenga su elemento padre. Por eso, lo lógico siempre es ponerle "font-family" a nuestra etiqueta body. Entonces, todos los elementos dentro de body van a heredar la misma fuente que tiene body. Pero ojo, si no lo hacemos, tenemos que entender que "body" ya tiene su propio valor de font-family por defecto.


>> La forma óptima de usar Fuentes

- Google Fonts es una página para descargar fuentes gratis. Para usarlas, podemos directamente descargarlas eincluirlass de forma local en nuestro proyecto, en una carpeta llamada por ejemplo 'fonts'. Esto es una buena práctica porque tenemos la fuente de forma directa en nuestro proyecto, y no hay que andar haciendo lecturas extra. Aunque puede ser tedioso el proceso de hacerlo.

- Otra opción es usando los códigos para copiar y pegar en nuestro proyecto, mediante CDN. Esto es rápido y sencillo en el desarrollo pero puede ser perjudicial para el performance de la web.

- LO IDEAL es tener la fuente de forma local en nuestro proyecto. Para ello, como dijimos, la podemos descargar de forma manual, y guardarla en una carpeta "fonts". Otra alternativa más automatizada es instalar la fuente con npm (u otro gestor de paquetes), lo que facilita la actualización y el mantenimiento. Y para esto, hacemos uso de fontsource. Veamos un ejemplo:

npm install @fontsource/inter

- Esto descargará la fuente en node_modules/@fontsource/inter.

- Y para usarla, la importamos:

@import '@fontsource/inter';

body {
  font-family: 'Inter', sans-serif;
}

- Eso sería todo. Pero ojo: esto no es algo obligatorio. Descargar la fuente de forma manual puede servir para tener una fuente más autónoma también.


>> @font-face

- Con @font-face estamos definiendo una fuente personalizada dentro de nuestro proyecto. En lugar de depender de fuentes del sistema o de Google Fonts mediante una CDN, podemos almacenar los archivos de fuente (.ttf, .otf, .woff, .woff2) (siendo .woff2 la más recomendada hoy en día) de manera local en nuestra carpeta:

@font-face {
	font-family: 'New Rocker';  /* Nombre que le damos a la fuente */
	src: url('./fonts/NewRocker-Regular.woff2') format('woff2'),
	      url('./fonts/NewRocker-Regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
  }

- Escribiendo eso adentro del CSS, tenemos una nueva fuente 'New Rocker' disponible, para usarla así:

body {
	font-family: 'New Rocker', sans-serif;
}


>> Herencia

- Vamos a repetir lo que dijimos antes con font-family:

- 'Font-family' es una propiedad que SE HEREDA. Esto quiere decir que todos los elementos hijo van a tener ese valor en la propiedad font-family, que tenga su elemento padre. Por eso, lo lógico siempre es ponerle "font-family" a nuestra etiqueta body. Entonces, todos los elementos dentro de body van a heredar la misma fuente que tiene body.

- No todas las propiedades se heredan. Por ejemplo, "border" es una propiedad que NO se hereda.

- Ahora, supongamos que tenemos esto:

<div class="container">
	Este es el contenedor.
	<div class="child">
		Hola Mundo
	</div>
</div>

.container {
	color: #09f;
	font-size: 32px;
	border: 3px solid #09f;
}

.child {
	border: inherit;
}

- Por defecto, la propiedad "border" tiene un valor "initial" respecto a la herencia. Esto hace que NO herede el valor de su elemento padre. O sea, div con clase child no va a heredar los estilos de borde que tiene el div de clase container.

- Pero si le ponemos "inherit" como aparece ahí, vamos a hacer que el elemento SÍ herede lo que tenga su padre. Esto es ya que "inherit" fuerza la herencia desde el elemento padre. Entonces, ahora el div con clase child pasa a tener el mismo borde que su contenedor.

- Otro valor es "revert", que revierte el valor que tenga el padre.

- Esto lo hicimos con el borde, pero funciona igual con todas las propiedades. Pero claro, hay algunas propiedades que por defecto vienen con la propiedad "initial", y otras con la propidad "inherit".