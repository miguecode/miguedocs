---
title: "Qué es Sass"
---

> ¿Qué es Sass?

- A diferencia de frameworks de CSS como Bootstrap o Tailwind, Sass (Syntactically Awesome Stylesheets) es un preprocesador de CSS. Esto significa que extiende las capacidades de CSS al agregar características avanzadas como:

- Variables
- Anidación de selectores
- Mixins (fragmentos de código reutilizable)
- Funciones
- Herencia de estilos

- El código Sass se escribe en archivos con extensión .scss (o .sass, con una sintaxis más simplificada), y luego se compila a CSS normal para que el navegador pueda interpretarlo.


> ¿Sass es un framework como Bootstrap o Tailwind?

No. Sass no es un framework de CSS porque:

- No proporciona clases o componentes predefinidos.
- No tiene estilos listos para usar.

Sass es más una herramienta que facilita escribir y organizar código CSS, especialmente en proyectos grandes o complejos.

Para entenderlo con una analogía: Sass para CSS podría ser lo que es TypeScript para JavaScript. Es una sintaxis que extiende a la del lenguaje original. Es decir, Sass es CSS pero con esteroides. Y al final del día, el código escrito en lenguaje Sass (archivos .scss o .sass), son transpilados a CSS puro.


> ¿Cómo funciona Sass?

Sass se usa para solucionar problemas de CSS puro, como:

- Variables: Permite definir colores o tamaños constantes para reutilizarlos (si bien esto se puede hacer con CSS puro, esta sintaxis lo hace más todo más sencillo).

$primary-color: #3498db;

button {
  background-color: $primary-color;
}

- Anidación: Permite estructurar selectores de forma jerárquica, ahorrando código repetitivo.


nav {
  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

- Modularidad: Permite dividir los estilos en varios archivos y combinarlos al compilar. Ejemplo: @import 'variables.scss';

- Mixins y funciones: Permite crear bloques reutilizables con parámetros dinámicos.

@mixin border-radius($radius) {
  border-radius: $radius;
}

button {
  @include border-radius(5px);
}