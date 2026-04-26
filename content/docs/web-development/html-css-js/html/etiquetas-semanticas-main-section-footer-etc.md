---
title: "Etiquetas semánticas (Main, Section, Footer, etc.)"
description: "Etiquetas semánticas"
---
## 🏗️ Etiquetas Semánticas

Las etiquetas semánticas existen para expresar el significado de las distintas secciones o elementos de nuestra página. Son esenciales para construir un HTML robusto, mejorar el **SEO** y garantizar la **Accesibilidad**.

A diferencia de etiquetas como `<div>`, estas etiquetas comunican al navegador y a los motores de búsqueda **qué tipo de contenido** hay dentro. Todas estas etiquetas deben ir dentro del `<body>`.

---

## 📂 Estructura y Seccionamiento

| Etiqueta | Función |
| :--- | :--- |
| **`<header>`** | Encabezado de la página o de una sección. Suele contener el logo y títulos. |
| **`<nav>`** | Bloque de navegación principal. Contiene los enlaces más importantes. |
| **`<main>`** | Contenido principal y único del documento. Solo debe haber uno por página. |
| **`<section>`** | Agrupa contenido relacionado de forma temática. |
| **`<article>`** | Contenido independiente que tiene sentido por sí mismo (ej. un post de blog). |
| **`<aside>`** | Contenido tangencial o relacionado de forma indirecta (ej. publicidad, barras laterales). |
| **`<footer>`** | Pie de página o de sección. Contiene autoría, contacto y enlaces legales. |

### Ejemplo de uso de `<nav>`:
```html
<nav>
  <ul>
    <li><a href="/inicio">Inicio</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

---

## 🛠️ Organización sin semántica: `div` y `span`

Estas son las únicas dos etiquetas que **no tienen significado semántico**.
- **`<div>`**: Crea divisiones de bloque. Se usa para agrupar elementos por razones de estilo o layout.
- **`<span>`**: Selecciona partes de un texto en línea para aplicar estilos específicos con CSS.

---

## ✍️ Semántica de Texto y Otros Elementos

- **`<strong>`**: Indica importancia y énfasis fuerte. Se usa para destacar algo permanentemente.
- **`<mark>`**: Resalta texto de forma circunstancial o temporal (como un resaltador).
- **`<time>`**: Representa una fecha o tiempo específico legible por máquinas.
- **`<address>`**: Contiene información de contacto del autor o la entidad.

```html
<p>
  <strong>Aviso:</strong> El examen será el 
  <time datetime="2025-06-15">15 de junio</time>.
  <mark>No se olviden el DNI</mark>.
</p>
```

---

## 🖼️ Figure, Details y más

### Figure y Figcaption
Se usan para agrupar imágenes con su descripción.

```html
<figure>
  <img src="paisaje.jpg" alt="Montañas nevadas">
  <figcaption>Paisaje de las montañas en invierno.</figcaption>
</figure>
```

### Details y Summary
Permiten crear menús desplegables nativos sin JavaScript.

```html
<details>
  <summary>¿Qué es HTML?</summary>
  <p>Es un lenguaje de marcado para estructurar la web.</p>
</details>
```

---

## 💡 Consejos de Oro
1.  **No abuses del `div`**: Si existe una etiqueta semántica que encaje con lo que estás haciendo, úsala.
2.  **`article` vs `section`**: Si el contenido puede sacarse de la página y seguir teniendo sentido por sí mismo, usa `article`. Si solo es una subdivisión temática, usa `section`.
3.  **Accesibilidad**: Usar etiquetas semánticas correctamente permite que las personas con lectores de pantalla naveguen mucho mejor por tu sitio.