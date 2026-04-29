---
title: "Pasaje de Tailwind 3 a 4 y Aclaraciones"
description: "Descubre los principales cambios arquitectónicos de Tailwind 4, cómo usar la directiva @apply (y por qué evitarla), y cómo arreglar los warnings en VS Code."
---

## De Tailwind 3 a Tailwind 4

En esta nueva versión introducida a principios de 2025, todo sigue bastante similar en la superficie, conservando la filosofía habitual de sus utilidades. Obviamente hay muchas utilidades nuevas, pero el cambio arquitectónico más significativo es que **ya no es necesario usar el archivo `tailwind.config.js`** para crear variables nuevas o extender el tema.

### Cómo era en Tailwind 3

En la versión 3, para crear una configuración personalizada se acudía al archivo JavaScript de configuración para especificar las variables, por ejemplo:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "azul-clarito": "#243cff"
      }
    }
  }
}
```

Una vez guardado eso, podíamos usar la clase utilitaria en todo el proyecto como `bg-azul-clarito` o `text-azul-clarito`, ya que lo que se registró fue el color base de la paleta.

### Cómo es en Tailwind 4

En Tailwind 4, esta configuración base se centraliza en puro código CSS de estilo "nativo". Ahora hay que ir al archivo de estilos CSS "global" (entrypoint) que esté usando la aplicación:

```css
/* global.css (archivo que importa Tailwind) */

@import 'tailwindcss';

@theme {
  /* Acá van todas las variables de temas personalizadas */
  /* Todas se escriben con un '--' adelante, y determinan su función por el prefijo */

  /* Colores */
  --color-primary-light: #8927f9;
  --color-primary-dark: #212031;
  --color-secondary-dark: #b968e8;

  /* Breakpoints de pantalla */
  --breakpoint-xxs: 360px;
  --breakpoint-xs: 460px;
}
```

Como vemos, hay que **RESPETAR** palabras clave y prefijos como `--color-` y `--breakpoint-`. Son prefijos o tokens ya preestablecidos y organizados por el nuevo motor de Tailwind. En la documentación oficial podemos ver todos los prefijos soportados por la directiva `@theme`.

---

## El uso de `@apply`

Si dentro de este mismo archivo CSS clásico o en algún bloque `<style>` quisiéramos inyectar las reglas de diseño y utilidades de Tailwind a clases "normales", tenemos que usar la directiva `@apply` por delante. 

```css
.btn-personalizado {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```

### Por qué se recomienda evitar `@apply`

Aunque la funcionalidad existe y a veces soluciona problemas puntuales, aplicar `@apply` de manera indiscriminada se considera a menudo un anti-patrón en la arquitectura de Tailwind. 

Lo lógico es que el archivo CSS mantenga CSS tradicional puro; usar `@apply` simplemente nos devuelve al modelo estático antiguo de ir a un archivo separado, crear clases y nombrarlas. La verdadera gracia y agilidad de Tailwind recae en construir los elementos visuales componiendo las utilidades directas en el HTML. Si algo va a repetirse, se debería encapsular en un componente de framework (como un Componente de React o de Astro), y no en una clase extraída con `@apply`.

---

## Corrección de Warnings en el Editor

Un detalle que notaremos enseguida en editores como VS Code, es que nos marcará un "warning" (advertencia amarilla o roja) en la propia sintaxis de `@theme` o `@import 'tailwindcss';` del archivo CSS. 

Esto sucede porque los linters estándar no logran entender estas palabras clave, puesto que la sintaxis no es estrictamente CSS "puro" estándar, sino del procesador de Tailwind CSS. 

Para que el editor no muestre ese error y asista adecuadamente, lo mejor es asociar todos los archivos CSS al motor lingüístico de Tailwind. Podemos hacerlo configurando VS Code a nivel de nuestro entorno de trabajo local:

```json
/* Archivo .vscode/settings.json */

{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

Realizando este cambio, nos garantizamos que VS Code ya no alertará falsos errores en nuestras hojas de estilo enriquecidas con funcionalidades del plugin Tailwind CSS.