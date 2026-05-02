---
title: "Optimizar imágenes y tipos de imágenes"
description: "Optimizar las imágenes es crucial para mejorar la velocidad de carga y la experiencia del usuario."
---


## 🖼️ Optimización de Imágenes

El contenido multimedia es uno de los elementos más pesados de una web. Optimizar las imágenes es crucial para mejorar la velocidad de carga (**Performance**) y la experiencia del usuario.

---

## 📂 Formatos de Imagen: ¿Cuál elegir?

| Formato | Uso ideal | Características |
| :--- | :--- | :--- |
| **JPG** | Fotografías complejas. | Alta compresión, pero sin transparencia. |
| **PNG** | Logos, iconos, capturas. | Admite transparencias. No pierde calidad al guardar. |
| **SVG** | Iconos y logotipos planos. | Basado en código XML. Escala infinitamente sin perder calidad. |
| **WEBP** | El estándar moderno. | El mejor equilibrio: alta compresión, transparencia y calidad. |
| **GIF** | Animaciones cortas. | Muy pesado, se recomienda reemplazar por video `mp4` o `webm`. |

> [!TIP]
> Usa herramientas como [Squoosh](https://squoosh.app/) para convertir tus imágenes a **WEBP** y reducir su peso radicalmente sin sacrificar calidad visual.

---

## 🚀 Imágenes Adaptativas: `srcset` y `sizes`

Esta técnica se conoce como **Resolution Switching**. Sirve para que el navegador descargue una versión de la imagen (más chica o más grande) según la resolución del dispositivo.

### Atributos:
- **`srcset`**: Define una lista de archivos disponibles y su ancho real (ej: `foto-480.jpg 480w`).
- **`sizes`**: Indica al navegador qué ancho ocupará la imagen en el diseño según Media Queries.

```html
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
  alt="Paisaje de montaña"
>
```

---

## 🎨 Art Direction: `<picture>` y `<source>`

A diferencia de `srcset`, la etiqueta **`<picture>`** se usa para cambiar la imagen por otra totalmente diferente según el dispositivo. Esto se llama **Art Direction**.

### Ejemplo de uso:
Queremos una imagen vertical en móviles y una horizontal en computadoras.

```html
<picture>
  <!-- Si el ancho es menor a 600px, carga la versión móvil -->
  <source srcset="messi-vertical.webp" media="(max-width: 600px)">
  <!-- Si no, carga la versión escritorio -->
  <img src="messi-horizontal.webp" alt="Messi celebrando un gol">
</picture>
```

---

## ⚖️ Diferencia clave

| Característica | `srcset` + `sizes` | `<picture>` + `<source>` |
| :--- | :--- | :--- |
| **Concepto** | **Resolution Switching** | **Art Direction** |
| **Objetivo** | Cargar la misma imagen en distinta calidad. | Cargar imágenes distintas según el diseño. |
| **Decisión** | El navegador elige la mejor opción. | Tú obligas al navegador con reglas rígidas. |

---

## 🛠️ Combinando Técnicas

Podemos usar lo mejor de ambos mundos: ofrecer distintos formatos (**WebP** o **AVIF**) y resoluciones al mismo tiempo.

```html
<picture>
  <source 
    srcset="img-mobile.webp 480w, img-mobile-hd.webp 800w" 
    media="(max-width: 600px)" 
    type="image/webp">
  
  <img src="img-fallback.jpg" alt="Imagen optimizada">
</picture>
```

> [!IMPORTANT]
> Recuerda siempre incluir el atributo **`alt`** por accesibilidad y el atributo **`src`** al final como "fallback" por si el navegador no soporta las etiquetas modernas.
