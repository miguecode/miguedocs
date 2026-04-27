---
title: "Enrutamiento y Navegación"
description: "Aprende cómo funciona el enrutamiento basado en archivos de Astro, cómo crear sub-rutas dinámicas y cómo gestionar la navegación entre páginas."
---

## Enrutamiento basado en Archivos

En Astro, las rutas se definen automáticamente según la estructura de archivos dentro de la carpeta `src/pages/`. Cada archivo `.astro` (o Markdown) que coloques allí se convierte en una URL pública de tu sitio.

*   **Página Principal**: El archivo `index.astro` es la raíz (`/`).
*   **Sub-rutas**: Puedes organizar tus páginas en carpetas para crear rutas anidadas.

### Ejemplo de Estructura:

```text
src/
└── pages/
    ├── index.astro        ->  /
    ├── sobre-mi.astro     ->  /sobre-mi
    └── blog/
        ├── index.astro    ->  /blog
        └── post-1.astro   ->  /blog/post-1
```

---

## Navegación entre Páginas

Para navegar entre las diferentes secciones de tu sitio, Astro utiliza enlaces HTML estándar (`<a>`). No necesitas componentes especiales de enrutamiento como en Angular o React, ya que Astro se basa en la navegación nativa del navegador.

```html
<nav>
  <a href="/">Inicio</a>
  <a href="/sobre-mi">Sobre Mí</a>
  <a href="/blog">Blog</a>
</nav>
```

---

## Rutas Dinámicas

Astro permite crear múltiples páginas desde un solo archivo utilizando parámetros dinámicos en el nombre del archivo. Estos se identifican rodeando el nombre con corchetes: `[parametro].astro`.

### Ejemplo: `src/pages/blog/[slug].astro`
Si tienes cientos de artículos de blog, no creas cien archivos. Creas un solo archivo dinámico.

```astro
---
// src/pages/blog/[slug].astro

// En modo estático (SSG), debemos definir qué rutas existen
export async function getStaticPaths() {
  return [
    { params: { slug: 'introduccion-a-astro' } },
    { params: { slug: 'conceptos-basicos' } },
    { params: { slug: 'guia-de-estilos' } },
  ];
}

const { slug } = Astro.params;
---
<h1>Post: {slug}</h1>
<p>Contenido del artículo...</p>
```

> [!NOTE]
> Al usar rutas dinámicas en el modo por defecto de Astro (Estático), es obligatorio exportar la función **`getStaticPaths()`**. Esta función le indica a Astro qué páginas debe generar durante el proceso de construcción (*build*).