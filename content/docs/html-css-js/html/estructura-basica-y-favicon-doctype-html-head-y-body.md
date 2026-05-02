---
title: "Estructura Básica y Favicon. DOCTYPE, html, head y body"
description: "La estructura básica de una página HTML es la base de cualquier desarrollo web."
---

## 🏗️ Estructura HTML básica

Todas las páginas web tienen una estructura mínima obligatoria. Sin ella, el navegador no podría interpretar el documento correctamente.

```html
<!DOCTYPE html> 
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de mi Página</title>
</head>
<body>
  <!-- Aquí va el contenido visual -->
</body>
</html>
```

---

## 🔍 Desglose de la estructura

### `<!DOCTYPE html>`
Define el tipo de documento y la versión de HTML. En este caso, indica que estamos utilizando **HTML5**. Esta declaración es **obligatoria** y debe ir al inicio de todo el archivo.

### `<html lang="es">`
Es la etiqueta raíz que envuelve todo el contenido de la página. El atributo **`lang="es"`** indica que el idioma principal es el español, lo cual ayuda a motores de búsqueda y lectores de pantalla.

### `<head>` (Cabecera)
Contiene los **metadatos** (información sobre la página) que no se ven visualmente, pero son vitales para el navegador y el SEO.
- **`<meta charset="UTF-8">`**: Define el conjunto de caracteres. UTF-8 permite tildes, la letra "ñ" y otros símbolos especiales.
- **`<meta name="viewport">`**: Configura cómo se ve la página en dispositivos móviles (hace que sea responsive).
- **`<title>`**: Es el texto que aparece en la pestaña del navegador.

### `<body>` (Cuerpo)
Contiene **todo el contenido visual** de la página: textos, imágenes, videos, enlaces, etc. Todo lo que el usuario final ve ocurre aquí dentro.

---

## 🔖 Favicons

El **favicon** es el pequeño ícono que aparece en la pestaña del navegador, al lado del título. Para añadirlo, usamos la etiqueta `<link>` dentro del `<head>`.

### Ejemplo con PNG:
```html
<link rel="icon" href="favicon.png" type="image/png">
```

### Ejemplo con archivo ICO (el estándar clásico):
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Atributos:
- **`rel="icon"`**: Indica que el archivo enlazado es un ícono.
- **`href`**: Es la ruta del archivo de imagen.
- **`type`**: Indica el formato del archivo (`image/png`, `image/x-icon`, `image/svg+xml`).

> [!TIP]
> Hoy en día, muchos desarrolladores prefieren usar el formato **SVG** para favicons, ya que escalan perfectamente sin importar la resolución de la pantalla.