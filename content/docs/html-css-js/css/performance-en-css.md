---
title: "Performance en CSS"
description: "El Performance en CSS"
---


## ⚡ Performance en CSS

El rendimiento (**performance**) es un pilar fundamental del desarrollo web moderno. Un sitio optimizado no solo mejora la experiencia del usuario, sino que también favorece el posicionamiento en buscadores (SEO).

A continuación, veremos las técnicas más efectivas para optimizar la carga y el renderizado.

---

## 👁️ content-visibility: auto

Esta propiedad permite al navegador omitir el trabajo de renderizado de un elemento (incluyendo su diseño y pintura) hasta que sea necesario (cuando se acerca al **viewport**).

```css
.seccion-pesada {
  content-visibility: auto;
  /* Reservamos un tamaño estimado para evitar el "salto" al cargar */
  contain-intrinsic-size: 1000px; 
}
```

**Beneficios:**
- **Carga inicial ultra rápida:** El navegador solo procesa lo que el usuario ve de inmediato.
- **Ahorro de CPU/RAM:** Ideal para páginas con mucho contenido o listas infinitas.

---

## 🖼️ Optimización de Imágenes e Iframes

### 1. Lazy Loading (Carga perezosa)
El atributo `loading="lazy"` pospone la descarga de recursos que no están visibles inicialmente.

```html
<!-- Imágenes -->
<img src="foto.webp" alt="Descripción" loading="lazy">

<!-- Iframes (Videos, Mapas) -->
<iframe src="https://www.youtube.com/embed/..." loading="lazy"></iframe>
```

### 2. Imágenes Adaptativas (`srcset`)
Permite al navegador elegir la imagen que mejor se adapte a la resolución del dispositivo, ahorrando transferencia de datos.

```html
<img 
  src="img-600.jpg" 
  srcset="img-300.jpg 300w, img-600.jpg 600w, img-1200.jpg 1200w" 
  sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
  alt="Ejemplo de imagen adaptable"
  loading="lazy"
>
```

### 3. Prioridad de Carga (`fetchpriority`)
Si una imagen es crítica (como el logo o el banner principal), podemos darle prioridad alta.

```html
<img src="hero-banner.webp" alt="Banner principal" fetchpriority="high">
```

---

## 🔡 Optimización de Fuentes

Las fuentes externas pueden bloquear el renderizado del texto. Para evitar el efecto de "texto invisible" (**FOIT**), usamos `font-display: swap`.

```css
@font-face {
  font-family: 'MiFuente';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Muestra una fuente del sistema hasta que cargue la propia */
}
```

---

## 🛠️ Archivos y Recursos Críticos

### Preload (Pre-carga)
Le indica al navegador que debe descargar un recurso con prioridad máxima porque será necesario muy pronto.

```html
<link rel="preload" href="estilos-criticos.css" as="style">
<link rel="preload" href="hero.webp" as="image">
```

### Critical CSS Path
Consiste en extraer el CSS mínimo necesario para renderizar la parte superior de la página (**Above the Fold**) e insertarlo directamente en el `<head>` dentro de una etiqueta `<style>`. El resto del CSS se carga de forma asíncrona.

---

## 📝 Resumen de Mejores Prácticas

1.  **Prioriza el contenido visual:** Usa `fetchpriority="high"` y evita el `lazy loading` en las imágenes de la cabecera.
2.  **Optimiza el resto:** Aplica `loading="lazy"` y `content-visibility: auto` a todo lo que esté debajo del primer scroll.
3.  **Minifica:** Utiliza herramientas como **esbuild**, **Terser** o **PostCSS** para reducir el peso de tus archivos `.css` y `.js`.
4.  **Formatos Modernos:** Prefiere imágenes en formato **WebP** o **AVIF** en lugar de PNG/JPG.
5.  **Pre-carga fuentes:** Usa `<link rel="preload">` para tus tipografías principales.

> [!IMPORTANT]
> Un buen performance no es solo cargar rápido, sino que el usuario perciba que la página es estable y responda fluidamente (**Core Web Vitals**).