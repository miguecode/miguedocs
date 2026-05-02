---
title: "Más métodos o propiedades de Window"
description: "El objeto Window es el scope global en JavaScript, y también es un objeto. Y es el objeto contenedor de todo en JavaScript."
---


## Objeto Window

Como dijimos antes, window es el scope global en JavaScript, y también es un objeto. Y es el objeto contenedor de todo en JavaScript. Por ejemplo, window contiene al objeto console.

En este apunte, vamos a ver más métodos o utilidades de window:

### Ventanas, popups y diálogos

- `open(url, name, specs)` → Abre una nueva ventana o pestaña.
- `close()` → Cierra la ventana del navegador que fue abierta mediante JavaScript (por ejemplo, con `window.open()`).
- `stop()` → Detiene la carga de recursos en la página actual (como el botón de "X detener" del navegador).
- `alert("Hola!")` → Muestra un cuadro de alerta y un botón Aceptar.
- `prompt("Ingrese su nombre!")` → Devuelve un string del input del usuario.
- `confirm("¿Estás seguro?")` → Abre un cuadro de diálogo con un mensaje y botones Aceptar y Cancelar.
- `print()` → Abre el cuadro de diálogo Imprimir para imprimir el documento actual.

### Navegador / Pantalla

- `window.navigator` → Info. del navegador (userAgent, plataforma, etc.).
- `window.screen` → Info. de la pantalla (ancho, alto, etc.).
- `window.location` → URL actual y navegación (href, reload(), assign(), etc.).
- `window.document` → El DOM del sitio web.

### Tamaño de la ventana

- `window.innerWidth` / `window.innerHeight` → Tamaño interno (sin barra de herramientas).
- `window.outerWidth` / `window.outerHeight` → Tamaño total de la ventana.
- `window.scrollX` / `window.scrollY` → Posición del scroll en el eje X e Y.
- `minimize()` → Minimiza la ventana.

### Navegación y redirección

- `window.location.href` → Ver o cambiar la URL.
- `window.location.assign(url)` → Ir a otra URL.
- `window.location.reload()` → Recargar la página.
- `window.history.back()` / `.forward()` / `.go(n)` → Navegación en el historial.

### Scroll y posición

- `window.scrollTo(x, y)` / `scrollBy(dx, dy)` → Mueve el scroll.
- `window.scroll({ top: 0, behavior: "smooth" })` → Scroll suave al top.

### Eventos y ejecución

- `window.addEventListener(event, handler)` → Escucha eventos en la ventana.
- `window.removeEventListener(...)` → Deja de escuchar.

### Locación

- `window.location.href` → Devuelve el href (URL) de la página actual.
- `window.location.hostname` → Devuelve el nombre de dominio del servidor web.
- `window.location.pathname` → Devuelve la ruta y el nombre de archivo de la página actual.
- `window.location.protocol` → Devuelve el protocolo web utilizado (generalmente, HTTP o HTTPS).
- `window.location.assign()` → Carga un nuevo documento.