---
title: "Performance. Lazy Loading y algo más"
description: "El Lazy Loading permite posponer la carga de elementos pesados (imágenes e iframes) que no son visibles de inmediato."
---


## ⚡ Performance: Optimización de Carga

Mejorar el rendimiento de una web no solo se trata de escribir menos código, sino de gestionar **cómo y cuándo** se cargan los recursos.

---

## 💤 Lazy Loading (Carga Perezosa)

El **Lazy Loading** permite posponer la carga de elementos pesados (imágenes e iframes) que no son visibles de inmediato. Esto acelera la carga inicial de la página y ahorra datos al usuario.

### Atributo `loading="lazy"`
Se aplica directamente en las etiquetas **`<img>`** y **`<iframe>`**.

```html
<!-- La imagen solo se descarga cuando el usuario hace scroll cerca de ella -->
<img src="foto-paisaje.webp" alt="Montaña nevada" loading="lazy">

<!-- Ideal para vídeos o mapas integrados pesados -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" loading="lazy"></iframe>
```

---

## 🏎️ `fetchpriority="high"` (Carga Prioritaria)

Al contrario del Lazy Loading, a veces necesitamos que el navegador descargue algo lo más rápido posible (como el logo superior o la imagen principal del encabezado o **LCP**).

```html
<img src="logo-corporativo.svg" alt="Logotipo" fetchpriority="high">
```

> [!TIP]
> No abuses de `fetchpriority="high"`. Solo úsalo para la imagen más importante que el usuario ve apenas entra al sitio.

---

## 📱 Imágenes Adaptativas (`srcset` y `sizes`)

Para evitar enviar una imagen gigante a un celular pequeño, usamos la técnica de **Resolution Switching**.

| Atributo | Propósito |
| :--- | :--- |
| **`srcset`** | Lista de imágenes disponibles con su ancho real en píxeles (`w`). |
| **`sizes`** | Indica al navegador qué ancho ocupará la imagen según el tamaño de la pantalla. |

### Ejemplo:
```html
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
  alt="Interfaz de la aplicación"
>
```

---

## 📈 Resumen de Buenas Prácticas

1.  **Imágenes Modernas**: Usa formatos como **WebP** o **AVIF**.
2.  **Dimensiones Reales**: No cargues una imagen de 2000px si solo se verá de 200px.
3.  **Lazy Loading**: Actívalo en todo lo que esté "fuera de pantalla" (below the fold).
4.  **Priorización**: Usa `fetchpriority` solo para elementos críticos.

---

> [!IMPORTANT]
> Una web rápida no solo mejora la experiencia del usuario, también es un factor determinante para el ranking de Google (**SEO**) y las Core Web Vitals.