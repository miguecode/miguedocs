---
title: "Unidades de medida (px, vw, vh, em, rem, y otras)"
description: "Unidades relativas y absolutas"
---


## 📐 Unidades de Medida en CSS

En CSS, las unidades de medida se dividen en dos grandes grupos: **Absolutas** y **Relativas**. Entender cuándo usar cada una es clave para crear diseños que se adapten a cualquier pantalla.

---

## 1️⃣ Unidades Absolutas

Tienen un tamaño fijo y "no les importa" el contexto del dispositivo ni del contenedor. No se recomiendan para layouts responsivos.

- **px (Píxeles):** La unidad más común. Representa un punto en la pantalla.
- **cm, mm, in:** Centímetros, milímetros y pulgadas.
- **pt, pc:** Puntos y picas (usados principalmente en impresión).

---

## 2️⃣ Unidades Relativas

Su tamaño depende de otro factor, como el tamaño de la fuente, el contenedor o la ventana del navegador (**viewport**).

### Porcentajes (`%`)
Dependen del tamaño del **contenedor padre**.
```css
.hijo {
  width: 50%; /* Ocupará la mitad del ancho de su padre */
}
```

---

## 🅰️ EM vs REM (Tipografía y Escalabilidad)

| Unidad | Referencia | Uso ideal |
| :--- | :--- | :--- |
| **`em`** | Al `font-size` del **padre** (o del propio elemento). | Márgenes/Paddings locales, componentes modulares. |
| **`rem`** | Al `font-size` del **raíz** (`<html>`). | Tamaño de fuente global, layouts consistentes. |

### Ejemplo de EM:
Si el contenedor tiene `20px`, entonces `1em = 20px`.
```css
.padre { font-size: 20px; }
.hijo { font-size: 2em; } /* Resultará en 40px */
```

### Ejemplo de REM:
Si el navegador tiene el valor base de `16px`, entonces `1rem = 16px` siempre, sin importar los padres.
```css
html { font-size: 16px; }
.cualquier-lugar { font-size: 1.5rem; } /* Resultará en 24px */
```

---

## 📱 Viewport (El tamaño de la pantalla)

Hacen referencia al área visible del navegador.

- **`vw` (Viewport Width):** 1vw = 1% del ancho de la pantalla.
- **`vh` (Viewport Height):** 1vh = 1% del alto de la pantalla.
- **`vmin` / `vmax`:** El valor mínimo o máximo entre ancho y alto.

### Unidades Dinámicas (Mobile Friendly)
En móviles, las barras del navegador (URL, herramientas) aparecen y desaparecen. Por eso surgieron estas variantes:

| Unidad | Nombre | Comportamiento |
| :--- | :--- | :--- |
| **`svh`** | Small VH | Altura mínima (con barras del navegador visibles). |
| **`lvh`** | Large VH | Altura máxima (sin barras del navegador). |
| **`dvh`** | Dynamic VH | Se ajusta automáticamente si las barras aparecen o no. |

```css
.hero-section {
  height: 100dvh; /* Siempre ocupará exactamente el alto visible */
}
```

---

## 💡 Consejos de Buenas Prácticas

1.  **Usa `rem` para fuentes:** Esto permite que si un usuario aumenta el tamaño de fuente en su navegador (por accesibilidad), tu sitio se escale correctamente.
2.  **Usa `em` para paddings internos:** Si cambias el tamaño de fuente del botón, el espacio interno se ajustará proporcionalmente.
3.  **Evita los `px` para layouts:** Para anchos de sección, prefiere `%`, `vw` o `max-width`.
4.  **Reset de margen:** Recuerda quitar el margen por defecto del body para que `100vw` o `100vh` no generen scroll innecesario:
    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

---

## 🛠️ Herramientas Útiles

- **Reset CSS / Normalize:** Archivos CSS que limpian las inconsistencias entre navegadores.
- **Px to Rem (VSC):** Extensión para convertir píxeles a rem automáticamente (`Alt + Z`).
- **Cálculo rápido:** `valor_en_px / 16 = valor_en_rem`. (Ej: `32px / 16 = 2rem`).ze.

- Hay otros enfoques más modernos, como el CSS Modern Reset. Es más flexible y liviano.