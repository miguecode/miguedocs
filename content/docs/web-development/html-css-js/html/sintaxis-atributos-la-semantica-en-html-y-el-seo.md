---
title: "Sintaxis, Atributos, la Semántica en HTML y el SEO"
description: "Sintaxis básica HTML"
---

## 🏗️ Sintaxis y Estructura Básica

En HTML, todo se construye mediante **Etiquetas** (Tags). Una etiqueta es una palabra clave encerrada entre ángulos (`< >`).

---

## 🏷️ Etiquetas vs Elementos

Es común confundir estos términos, pero hay una diferencia técnica:

- **Etiqueta**: Es el marcador individual, ya sea de apertura (`<p>`) o de cierre (`</p>`).
- **Elemento**: Es el conjunto completo: la etiqueta de apertura, el contenido y la etiqueta de cierre.

```html
<p>Hola, soy un elemento de párrafo</p>
<!-- <p> es la etiqueta, todo el conjunto es el elemento -->
```

> [!IMPORTANT]
> Aunque algunos navegadores "perdonan" si olvidas cerrar una etiqueta, siempre debes cerrarlas para evitar errores de renderizado y problemas de accesibilidad.

---

## ⚙️ Atributos: Configurando los Elementos

Los **Atributos** proporcionan información adicional o cambian el comportamiento de un elemento. Siempre se escriben dentro de la **etiqueta de apertura**.

### Tipos de Atributos:

1.  **Valores de Clave-Valor**: El más común. Se usa el formato `nombre="valor"`.
    ```html
    <img src="foto.jpg" alt="Descripción de la imagen">
    ```
2.  **Booleanos**: No necesitan valor. Si están presentes, se consideran `true`.
    ```html
    <p hidden>Este texto no será visible en la página.</p>
    ```

### ID vs Class
- **`id`**: Es un identificador **único**. Solo debe haber uno por página con ese nombre. Útil para JavaScript y anclas CSS.
- **`class`**: Es un identificador **grupal**. Muchos elementos pueden compartir la misma clase para recibir los mismos estilos.

---

## 🧠 Semántica y SEO

La **Semántica** es el corazón del HTML moderno. No se trata solo de cómo se ve la web, sino de **qué significa** cada parte.

### El impacto en el SEO
El **SEO** (Search Engine Optimization) es la optimización para que buscadores como Google entiendan y posicionen tu web. 
- Google no "ve" colores; Google lee etiquetas. 
- Si usas un `<div>` para un título, Google no sabrá que es importante. Si usas un `<h1>`, le estás diciendo: "Este es el tema principal de mi sitio".

### Ventajas de una buena semántica:
- **Mejor posicionamiento**: Google te premia si tu código es fácil de entender.
- **Accesibilidad**: Los lectores de pantalla para personas con discapacidad visual dependen de las etiquetas semánticas (como `<nav>` o `<main>`) para navegar el sitio.
- **Mantenimiento**: Un código con etiquetas como `<footer>` o `<article>` es mucho más fácil de leer para otros desarrolladores que una sopa de `<div>` sin sentido.

---

> [!TIP]
> Antes de usar un `<div>` (que es una etiqueta genérica sin significado), pregúntate: "¿Hay alguna etiqueta más específica para esto?". Casi siempre la respuesta es sí. (Ej: `<header>`, `<footer>`, `<aside>`, `<mark>`). Esto se define en HTML. Pero vamos a verlo más adelante, en otro apunte.