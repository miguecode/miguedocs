---
title: "Diferencia entre Picture+Source y Srcset+Sizes"
description: "Ambos métodos sirven para optimizar imágenes en diferentes dispositivos y mejorar el rendimiento de nuestra web."
---


## 🖼️ Diferencia entre `<picture>` y `srcset`

Ambos métodos sirven para optimizar imágenes en diferentes dispositivos y mejorar el rendimiento de nuestra web. La diferencia clave está en **cómo y cuándo** el navegador decide qué imagen mostrar.

---

## 1. Las etiquetas `<picture>` y `<source>`

### ¿Qué hacen?
Estas dos etiquetas permiten definir **diferentes imágenes** según reglas específicas, como el tamaño de pantalla o la compatibilidad de formatos.

### ¿Cuándo usarlas? (**Art Direction**)
Se usan cuando queremos cambiar completamente el contenido de la imagen (lo que se conoce como *Art Direction*). Por ejemplo, mostrar una versión recortada/cuadrada en móviles y una panorámica en escritorio.

```html
<picture>
  <!-- Si la pantalla es menor a 600px -->
  <source srcset="imagen-movil.webp" media="(max-width: 600px)">
  <!-- Si es entre 600px y 1024px -->
  <source srcset="imagen-tablet.webp" media="(max-width: 1024px)">
  <!-- Fallback para escritorio -->
  <img src="imagen-escritorio.webp" alt="Paisaje de montaña">
</picture>
```

---

## 2. Los atributos `srcset` y `sizes`

### ¿Qué hacen?
Permiten definir **diferentes resoluciones** de la misma imagen y dejar que el navegador elija la más eficiente según el dispositivo.

### ¿Cuándo usarlos? (**Resolution Switching**)
Se usan cuando la imagen es "siempre la misma", pero queremos servir archivos más ligeros para pantallas pequeñas y archivos de alta calidad para pantallas grandes.

```html
<img 
  src="imagen-pequena.jpg" 
  srcset="imagen-pequena.jpg 480w, imagen-mediana.jpg 800w, imagen-grande.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" 
  alt="Persona sonriendo">
```

- **`480w`**, **`800w`**: Indican el ancho real en píxeles de cada archivo de imagen.
- **`sizes`**: Le dice al navegador cuánto espacio ocupará la imagen en el layout para que elija el archivo correcto.

---

## ⚖️ Análisis Comparativo

| Método | Propósito | Decisión |
| :--- | :--- | :--- |
| **`<picture>`** | Cambio de intención o formato (Art Direction). | El desarrollador impone la regla. |
| **`srcset`** | Cambio de resolución (Resolution Switching). | El navegador decide la mejor opción. |

---

## 🚀 Métodos Combinados

Es posible combinar ambos para tener un control total: ofrecer distintos formatos según el dispositivo y, a la vez, distintas calidades.

```html
<picture>
  <source 
    srcset="imagen-movil.webp 480w, imagen-movil-grande.webp 800w" 
    media="(max-width: 600px)">
  <source 
    srcset="imagen-tablet.webp 800w, imagen-tablet-grande.webp 1200w" 
    media="(max-width: 1024px)">
  <img src="imagen-escritorio.webp" alt="Imagen adaptable avanzada">
</picture>
```

> [!TIP]
> Prioriza siempre el uso de **`srcset`** si la imagen solo cambia de tamaño. Usa **`<picture>`** solo cuando necesites cambiar el encuadre de la foto para móvil o servir nuevos formatos como `.avif` o `.webp` con fallback a `.jpg`.