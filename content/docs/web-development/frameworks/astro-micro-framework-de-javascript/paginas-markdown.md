---
title: "Creación de Páginas con Markdown"
description: "Aprende a utilizar archivos Markdown (.md) para crear contenido dinámico en Astro, gestionar metadatos mediante Frontmatter y organizar las rutas de un blog."
---

## Markdown como Páginas

Astro tiene soporte nativo para **Markdown**, lo que lo convierte en una herramienta excelente para blogs y sitios de documentación. Cualquier archivo `.md` ubicado en la carpeta `src/pages/` se convertirá automáticamente en una página de tu sitio web.

### Organización de Archivos
Si estás creando un blog, una estructura organizada sería la siguiente:

```text
src/pages/
└── posts/
    ├── post-1.md
    └── post-2.md
```

---

## Estructura de un archivo Markdown

Los archivos Markdown en Astro suelen comenzar con un bloque de metadatos llamado **Frontmatter** (escrito en YAML entre tres guiones). Aquí puedes definir variables como el título, la fecha o el autor.

```markdown
---
layout: ../../layouts/MarkdownLayout.astro
title: "Mi primer post en Astro"
pubDate: 2024-04-05
description: "Aprendiendo a usar Markdown en mi nuevo blog."
author: "Miguel"
image:
    url: "https://docs.astro.build/favicon.svg"
    alt: "Logo de Astro"
tags: ["astro", "blog", "markdown"]
---

# Mi primer post

¡Hola mundo! Este es el contenido de mi primer artículo escrito en Markdown. Astro lo procesará y lo convertirá en HTML automáticamente.

A diferencia de los archivos `.astro`, aquí puedes escribir **Markdown puro**.
```

> [!IMPORTANT]
> Para que el contenido de un archivo Markdown se vea correctamente con el diseño de tu web, debes especificar la propiedad **`layout`** en el Frontmatter apuntando a un archivo de layout `.astro`.

---

## Listado de Posts

Para enlazar estos artículos desde otra página (como `blog.astro`), utilizamos etiquetas de anclaje estándar. Astro generará la ruta basada en el nombre del archivo.

```html
<ul>
  <li><a href="/posts/post-1">Leer mi primer post</a></li>
  <li><a href="/posts/post-2">Ver el segundo artículo</a></li>
</ul>
```

Al hacer clic, Astro renderizará el contenido Markdown dentro del layout que hayas especificado anteriormente.