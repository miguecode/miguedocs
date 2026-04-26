---
title: "Colores, Fuentes y Herencia"
description: "'green' es una palabra clave. Existen más, para usar colores estándar. Esta es la forma más rápida e intuitiva de indicar colores, pero también es la más limita..."
---


## 🎨 Colores en CSS

Indicar colores es fundamental en el diseño web. Existen múltiples formas de hacerlo, desde las más simples hasta modelos avanzados.

### 1. Palabras Clave (Keywords)
La forma más intuitiva pero limitada. Usa nombres estándar como `green`, `blue`, `tomato`, etc.

```css
h1 {
  color: green;
}
```

### 2. Modelos numéricos (RGB y RGBA)
- **RGB:** Define el color mediante los canales Rojo, Verde y Azul (`red`, `green`, `blue`).
- **RGBA:** Añade el canal **Alpha** para controlar la transparencia (0 a 1).

> [!TIP]
> Actualmente se recomienda la nueva sintaxis de CSS que unifica ambos, usando una barra para la opacidad:
> `rgb(255 255 255 / 0.5)`

### 3. Hexadecimales
Es el formato más común por su brevedad. Se representa con un `#` seguido de 3, 6 u 8 dígitos.
- **#ffffff:** 6 dígitos (RGB).
- **#fff:** 3 dígitos (resumen de los 6).
- **#ffffff80:** 8 dígitos (los últimos dos indican la opacidad).

### 4. Modelos Modernos: HSL y OKLCH
- **HSL:** Modifica tono, saturación y luminosidad. Muy intuitivo para ajustar brillo.
- **OKLCH:** El modelo más avanzado y preciso. Permite una gama de colores (gamut) mucho más amplia en pantallas modernas.
  ```css
  color: oklch(348 0.8 0.4 / 0.5);
  ```

---

### 🔍 Current Color
`currentcolor` es un valor especial que toma el color actual de la propiedad `color` del elemento o de su padre más cercano en la cascada.

```css
button {
  color: blue;
  border: 2px solid currentcolor; /* El borde será azul automáticamente */
}
```

---

## 🔡 Fuentes (Typography)

La propiedad principal es `font-family`. Para asegurar que el sitio se vea bien en todos los dispositivos, usamos un concepto llamado **Fallback**.

### Fallback (Plan B)
Es una lista de fuentes separadas por comas. Si la primera no está disponible, el navegador intenta con la siguiente.

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

### 📦 Gestión Óptima de Fuentes
1. **Google Fonts (CDN):** Rápido de implementar pero puede afectar el performance si se cargan muchas.
2. **Local (Manual):** Descargar archivos (`.woff2`) y guardarlos en una carpeta `/fonts`. Es lo más autónomo.
3. **Fontsource (NPM):** La forma recomendada para proyectos modernos.
   ```bash
   npm install @fontsource/inter
   ```
   ```css
   @import '@fontsource/inter';
   ```

### @font-face
Permite definir fuentes personalizadas cargando archivos locales.

```css
@font-face {
  font-family: 'New Rocker';
  src: url('./fonts/NewRocker-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```

---

## 🧬 Herencia (Inheritance)

No todas las propiedades de CSS se heredan automáticamente.

- **Se heredan:** Propiedades de texto como `font-family`, `color`, `line-height`.
- **NO se heredan:** Propiedades de caja como `border`, `margin`, `padding`, `background`.

### Valores de Herencia
- **`initial`**: Establece el valor por defecto de la propiedad (rompe la herencia).
- **`inherit`**: Fuerza al elemento hijo a heredar el valor del padre.
- **`revert`**: Revierte el valor al estilo original del navegador o del padre.

#### Ejemplo de `inherit` forzado:

```html
<div class="container">
  Este es el contenedor padre.
  <div class="child">
    Soy el hijo y heredo el borde.
  </div>
</div>
```

```css
.container {
  color: #09f;
  border: 3px solid #09f;
}

.child {
  /* Forzamos que el borde se herede, aunque no sea su comportamiento natural */
  border: inherit;
}
```

> [!IMPORTANT]
> Aplicar fuentes en el `body` es una excelente práctica, ya que casi todos los elementos hijos heredarán esa tipografía por defecto.