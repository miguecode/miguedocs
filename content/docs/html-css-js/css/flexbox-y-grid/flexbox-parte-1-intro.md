---
title: "Flexbox - Parte 1 (Intro)"
description: "Flex es un posible valor en la propidad display. (display: flex). Sirve para posicionar a los elementos de forma mucho más sencilla y coherente."
---

## 📦 Flexbox (Flexible Box Layout)

**Flexbox** es un modelo de diseño unidimensional que permite posicionar elementos de forma sencilla, coherente y flexible. Se basa en la relación entre un **Contenedor** (Flex Container) y sus **Hijos** (Flex Items).

---

## 🏗️ Propiedades del Contenedor (Flex Container)

Para activar Flexbox, aplicamos `display: flex` al elemento padre.

### 1. Flex-direction
Define el **Eje Principal** (Main Axis).
- **`row`** (Por defecto): De izquierda a derecha.
- **`column`**: De arriba hacia abajo.
- **`row-reverse`** / **`column-reverse`**: Invierte el orden de los elementos.

### 2. Flex-wrap
Determina si los elementos se "amontonan" o saltan a una nueva línea si no hay espacio.
- **`nowrap`** (Defecto): Todos en una sola línea, pudiendo desbordar.
- **`wrap`**: Saltan a la siguiente línea/columna.
- **`wrap-reverse`**: Saltan en sentido inverso.

### 3. Flex-flow
Es un atajo (shorthand) para `flex-direction` y `flex-wrap`.
```css
.container {
  display: flex;
  flex-flow: row wrap; /* Dirección fila + permite salto de línea */
}
```

---

## 🧩 Propiedades de los Hijos (Flex Items)

Estas propiedades se aplican directamente a los elementos que están dentro del contenedor flex.

### 1. Flex-grow, Flex-shrink y Flex-basis
- **`flex-grow`**: Capacidad de un elemento para crecer si hay espacio sobrante (`0` = no crece).
- **`flex-shrink`**: Capacidad para encogerse si no hay espacio suficiente (`1` = se encoge).
- **`flex-basis`**: Tamaño inicial del elemento antes de crecer o encogerse (ej: `200px`, `auto`).

### 2. El atajo `flex` (Shorthand)
Es la forma más recomendada de escribir las tres propiedades anteriores.

| Valor | Equivalencia (grow, shrink, basis) | Descripción |
| :--- | :--- | :--- |
| **`flex: initial`** | `0 1 auto` | No crece, se encoge, respeta su tamaño original. |
| **`flex: auto`** | `1 1 auto` | Crece y se encoge según el espacio. |
| **`flex: 1`** | `1 1 0%` | Crece proporcionalmente ocupando todo el espacio. |

### 3. Order
Permite cambiar el orden visual de los elementos sin alterar el HTML.
- Por defecto es `0`. Valores menores (incluyendo negativos) aparecen primero.

```css
.primer-elemento {
  order: -1; /* Este elemento aparecerá al principio de todos */
}
```

---

## ↕️ Ejes en Flexbox

Es fundamental entender que Flexbox trabaja sobre dos ejes coordinados:

1.  **Eje Principal (Main Axis):** Definido por `flex-direction`. Si es `row`, el eje va horizontalmente.
2.  **Eje Secundario (Cross Axis):** Es siempre perpendicular al principal. Si la dirección es `row`, el eje secundario es vertical.

> [!TIP]
> Usar `flex: 1` en todos los hijos es la forma más rápida de crear una grilla de columnas iguales que se adapten automáticamente al tamaño de la pantalla.rden es SÓLO VISUAL. No afecta al HTML.