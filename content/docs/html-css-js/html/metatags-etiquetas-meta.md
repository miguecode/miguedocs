---
title: "Metatags (Etiquetas Meta)"
description: "Los metadatos son fragmentos de información que describen tu sitio web a los navegadores y motores de búsqueda."
---


## 🏷️ Metatags (Etiquetas Meta)

Los metadatos son fragmentos de información que describen tu sitio web a los navegadores y motores de búsqueda. Aunque el usuario no los ve directamente, son fundamentales para el **SEO** (Search Engine Optimization) y el comportamiento de la página.

Todas las etiquetas `<meta>` deben ir dentro del **`<head>`**.

---

## 🏗️ Metatags de Estructura Básica

Estas tres etiquetas son indispensables en cualquier proyecto moderno:

1.  **`charset`**: Define la codificación de caracteres.
    ```html
    <meta charset="UTF-8">
    ```
2.  **`viewport`**: Crucial para el diseño responsive. Controla cómo se escala la web en móviles.
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
3.  **`title`**: (Técnicamente no es `<meta>`, pero es un metadato) Define el nombre que aparece en la pestaña del navegador.
    ```html
    <title>Mi Portafolio Profesional</title>
    ```

---

## 🔍 Metatags de SEO Clásico

Se definen usando los atributos **`name`** (identificador) y **`content`** (valor).

- **Description**: El texto que suele aparecer debajo del título en los resultados de Google.
  ```html
  <meta name="description" content="Aprende desarrollo web desde cero con estos apuntes técnicos.">
  ```
- **Keywords**: Palabras clave (hoy en día tienen mucha menos importancia, pero se mencionan por historia).
  ```html
  <meta name="keywords" content="html, css, javascript, frontend">
  ```
- **Author**: Indica quién creó la página.
  ```html
  <meta name="author" content="Miguel Ángel Gil">
  ```

---

## 🤖 Robots (Control de Indexación)

Permiten decirle a los buscadores qué hacer con tu contenido. Por defecto están en "si", pero al añadir el prefijo **`no`** los restringes.

- **`noindex`**: No aparecer en resultados de búsqueda.
- **`nofollow`**: No seguir los enlaces de esta página.
- **`noimageindex`**: No indexar las imágenes.

```html
<!-- Ejemplo: No indexar esta página ni seguir sus links -->
<meta name="robots" content="noindex, nofollow">
```

---

## 📱 Open Graph (OG Tags)

Son etiquetas que controlan cómo se ve tu página cuando alguien comparte el link en redes sociales (WhatsApp, Twitter, LinkedIn, etc.).

| Propiedad | Función |
| :--- | :--- |
| **`og:title`** | El título llamativo de la tarjeta compartida. |
| **`og:description`** | Breve resumen del contenido. |
| **`og:image`** | La imagen que acompañará al link (miniatura). |
| **`og:url`** | La URL canónica preferida. |

### Ejemplo:
```html
<meta property="og:title" content="Apuntes de Desarrollo Web">
<meta property="og:image" content="https://misitio.com/image-social.jpg">
<meta property="og:description" content="Todo lo que necesitas saber sobre HTML5 y CSS3.">
```

---

## 🎨 Personalización y Otros

- **Theme Color**: Cambia el color de la barra del navegador en dispositivos móviles.
  ```html
  <meta name="theme-color" content="#317EFB">
  ```
- **Format Detection**: Evita que dispositivos móviles conviertan números de texto en enlaces telefónicos automáticamente.
  ```html
  <meta name="format-detection" content="telephone=no">
  ```

> [!TIP]
> Puedes probar cómo se verá tu página en redes sociales usando herramientas gratuitas como [metatags.io](https://metatags.io) o [opengraph.xyz](https://www.opengraph.xyz).