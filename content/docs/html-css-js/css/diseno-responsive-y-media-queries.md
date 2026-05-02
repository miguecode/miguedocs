---
title: "Diseño Responsive y Media Queries"
description: "Un diseño responsive es aquel que adapta su interfaz de forma automática a distintos tamaños de pantalla (móvil, tablet, escritorio)."
---


## 📱 Diseño Responsive

Un diseño **responsive** (responsivo) es aquel que adapta su interfaz de forma automática a distintos tamaños de pantalla (móvil, tablet, escritorio). El objetivo es desarrollar una única web que brinde una experiencia óptima en cualquier dispositivo.

Para lograrlo, nos apoyamos en dos conceptos clave: **Media Queries** y **Breakpoints**.

---

## 📽️ Media Queries

Una **Media Query** es una regla de CSS que condiciona la aplicación de estilos según las características del dispositivo.

### Sintaxis Completa
1. **Regla (`@media`)**: Indica el inicio de la consulta.
2. **Media Type**: Tipo de dispositivo (ej: `screen`, `print`, `all`).
3. **Operadores**: Lógica para combinar condiciones (`and`, `or`, `not`).
4. **Media Feature (Breakpoint)**: El límite o característica a evaluar (`max-width`, `orientation`).

```css
/* Sintaxis estándar */
@media screen and (max-width: 480px) {
  .menu { display: none; }
}
```

#### Operadores Lógicos:
- **`and`**: Se deben cumplir todas las condiciones.
- **`,` (o `or`)**: Se debe cumplir al menos una.
- **`not`**: Niega la condición.

```css
/* Entre 600px y 900px */
@media (min-width: 600px) and (max-width: 900px) { ... }

/* Menos de 480px O más de 1200px */
@media (max-width: 480px), (min-width: 1200px) { ... }
```

---

## 🆕 Características Modernas

### Range Syntax
Simplifica la escritura de límites usando comparadores matemáticos (`<`, `>`, `<=`, `>=`).

```css
/* Más intuitivo que min/max-width */
@media (width >= 700px) {
  .sidebar { display: block; }
}
```

### Nesting (Anidamiento)
Permite escribir media queries dentro del propio selector, manteniendo el código organizado.

```css
.card {
  width: 100%;
  background: white;

  @media (width >= 700px) {
    width: 50%;
  }
}
```

### Prefers-color-scheme
Detecta si el usuario prefiere el **Dark Mode** o **Light Mode** a nivel de sistema operativo.

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: white;
  }
}
```

---

## 🖼️ Media en HTML (`<picture>`)

Podemos usar media queries directamente en el HTML para servir diferentes imágenes según la pantalla, optimizando la carga.

```html
<picture>
  <source srcset="image-mobile.webp" media="(max-width: 480px)">
  <source srcset="image-tablet.webp" media="(max-width: 1024px)">
  <img src="image-desktop.webp" alt="Descripción de la imagen">
</picture>
```

> [!IMPORTANT]
> **Meta Viewport:** Para que el diseño responsive funcione correctamente, es obligatorio incluir esta etiqueta en el `<head>`:
> ```html
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> ```

---

## 📍 Breakpoints (Puntos de corte)

Un **Breakpoint** es el límite en píxeles donde el diseño "rompe" y cambia su estructura.

### Referencia de Medidas Comunes (Mobile First)

| Dispositivo | Rango de Píxeles |
| :--- | :--- |
| **Móviles pequeños** | 0px - 320px |
| **Móviles grandes** | 321px - 480px |
| **Tablets** | 481px - 1024px |
| **Escritorios** | 1025px - 1328px |
| **Pantallas UltraWide** | > 1328px |

> [!TIP]
> **Mobile First:** Es la estrategia recomendada. Consiste en diseñar primero para móviles (estilos base) y usar `min-width` para ir añadiendo complejidad a medida que la pantalla crece.

### Tipos de Breakpoints
1. **De resolución:** Basados en el ancho de la ventana (`width`).
2. **De dispositivo:** Basados en características como `orientation: landscape` (horizontal) o la densidad de píxeles.
3. **Personalizados:** Definidos según el contenido de tu web (ej: cuando un texto deja de leerse bien).