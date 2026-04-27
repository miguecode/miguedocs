---
title: "Layouts, Páginas y Plantillas"
description: "Aprende a estructurar tu sitio mediante Layouts reutilizables, gestionar el contenido dinámico con slots y entender la diferencia entre páginas y plantillas."
---

## Layouts: La Estructura Base

En Astro, los **Layouts** son componentes especiales destinados a proporcionar una estructura común a varias páginas. Suelen contener elementos que se repiten en todo el sitio, como el `<head>`, la barra de navegación (`Navbar`) y el pie de página (`Footer`).

### Características de los Layouts:
*   **Coherencia Visual**: Aseguran que todas las páginas tengan el mismo aspecto base y tipografías.
*   **Mantenimiento**: Si cambias el logo en el Layout, se actualiza en todas las páginas asociadas.
*   **Organización**: Se guardan por convención en la carpeta `src/layouts/`.

---

## El marcador `<slot />`

La etiqueta `<slot />` es fundamental en los layouts. Actúa como un **espacio reservado** donde se inyectará el contenido específico de cada página. 

```astro
---
// src/layouts/BaseLayout.astro
const { title } = Astro.props;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <nav>Navegación Global</nav>
    <main>
      <!-- Aquí se insertará el contenido de la página que use este layout -->
      <slot />
    </main>
    <footer>© 2024 Mi Sitio</footer>
  </body>
</html>
```

---

## Páginas (Pages)

Las páginas viven en `src/pages/` y representan las rutas accesibles de tu web. Para usar un layout, simplemente lo importas y envuelves el contenido de la página con él.

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Página de Inicio">
  <h1>Bienvenido a mi web</h1>
  <p>Este contenido se inyectará en el slot del layout.</p>
</BaseLayout>
```

---

## Plantillas vs. Layouts

Aunque son conceptos similares, podemos diferenciarlos por su alcance:

1.  **Layouts (Generales)**: Son maquetas globales para toda la página (estructura HTML completa).
2.  **Plantillas (Específicas)**: Son maquetas para contenidos repetitivos dentro de una página, como el diseño de un artículo de blog o una ficha de producto.

---

## Herencia de Layouts

Astro permite anidar layouts (un layout dentro de otro). Esto es extremadamente útil para secciones que comparten la estructura global pero tienen elementos adicionales propios.

### Ejemplo de Anidación:
Podemos tener un `BlogLayout.astro` que hereda de `BaseLayout.astro` para añadir una barra lateral de categorías exclusivamente en las páginas del blog.

```astro
---
// src/layouts/BlogLayout.astro
import BaseLayout from './BaseLayout.astro';
---
<BaseLayout title="Sección de Blog">
  <div class="container-with-sidebar">
    <aside>Categorías del Blog</aside>
    <article>
      <slot /> <!-- Slot para el contenido del post -->
    </article>
  </div>
</BaseLayout>
```