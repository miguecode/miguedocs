---
title: "Párrafos, Encabezados, Listas, Enlaces e Imágenes"
description: "Comentarios en HTML"
---
## 📝 Elementos Básicos: Texto, Listas, Enlaces e Imágenes

El HTML se compone de diversos elementos que permiten estructurar el contenido de forma lógica y accesible.

---

## 🏗️ Párrafos y Encabezados

### Párrafos (`<p>`)
Se usan para agrupar bloques de texto. Cada párrafo debe contener una **idea específica**.
```html
<p>Este es el contenido de mi primer párrafo.</p>
```

### Encabezados (`h1` a `h6`)
Definen la jerarquía del contenido.
- **`<h1>`**: Es el más importante. Solo debe haber **uno por página**. Es vital para el SEO.
- **`<h2>`** a **`<h6>`**: Se usan para subtítulos y secciones menores.

---

## 📋 Listas

Existen dos tipos principales de listas:

1.  **Listas Ordenadas (`<ol>`)**: Los ítems aparecen numerados (1, 2, 3 o A, B, C).
2.  **Listas Desordenadas (`<ul>`)**: Los ítems aparecen con viñetas (puntos, cuadrados, etc.).

Independientemente del tipo, cada elemento de la lista debe ir dentro de una etiqueta **`<li>`** (List Item).

```html
<ul>
  <li>Primer ítem</li>
  <li>Segundo ítem</li>
</ul>
```

---

## 🔗 Enlaces (`<a>`)

La etiqueta de ancla (**`<a>`**) requiere el atributo **`href`** para indicar el destino.

### Tipos de destinos:
- **Internos**: `href="#seccion"` (anclas en la misma página).
- **Relativos**: `href="contacto.html"` (otra página de tu sitio).
- **Externos**: `href="https://google.com"` (sitios fuera de tu dominio).

### Seguridad en Enlaces Externos
Cuando usamos `target="_blank"` para abrir una nueva pestaña, es fundamental añadir atributos de seguridad para evitar ataques o fugas de información.

| Valor `rel` | Función |
| :--- | :--- |
| **`noopener`** | Evita que la nueva página acceda al objeto `window.opener` de la tuya. |
| **`noreferrer`** | Hace lo mismo que `noopener` y además oculta de qué web viene el usuario. |
| **`nofollow`** | Indica a los buscadores que no "transfieran autoridad" a ese enlace externo. |

```html
<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">Ir al sitio seguro</a>
```

### Funciones Especiales:
- **Descargas**: `<a href="archivo.pdf" download>Descargar</a>`
- **Correo**: `<a href="mailto:hola@web.com">Enviar Mail</a>`
- **Llamadas**: `<a href="tel:+123456789">Llamar Ahora</a>`

---

## 🖼️ Imágenes (`<img>`)

Es una etiqueta **autocerrada** (self-closing). Sus atributos más importantes son:

- **`src`**: La ruta del archivo de imagen.
- **`alt`**: Texto alternativo (obligatorio para accesibilidad y SEO). Describe qué hay en la imagen.
- **`title`**: Tooltip que aparece al pasar el cursor sobre la imagen.

```html
<img src="foto-colegio.jpg" alt="Estudiantes en el patio del colegio" title="Recuerdos de graduación">
```

> [!IMPORTANT]
> Nunca dejes una imagen sin el atributo **`alt`**. Si la imagen es puramente decorativa, deja el atributo vacío (`alt=""`), pero siempre debe estar presente.