---
title: "Grid - Parte 1"
description: "La diferencia clave de Grid con Flexbox, es que Grid no trabaja sobre un contenedor en modo fila o columna como lo hace flex, sino que trabaja sobre un contened..."
---


## 🏁 Grid CSS - Parte 1: Introducción

**CSS Grid Layout** es el sistema de maquetación más potente de CSS. A diferencia de Flexbox, que es unidimensional, Grid es **bidimensional**, lo que significa que puede manejar tanto filas como columnas al mismo tiempo.

---

## 🏗️ Conceptos Básicos

Para activar Grid, aplicamos `display: grid` al contenedor. Los elementos hijos se convertirán automáticamente en **Grid Items**.

```css
.container {
  display: grid;
  /* Definimos la estructura de la grilla */
  grid-template-columns: 200px 1fr; /* 2 columnas */
  grid-template-rows: 100px auto;    /* 2 filas */
}
```

---

## 📏 Unidades de Medida en Grid

### La Unidad Fraction (`fr`)
La unidad **fr** representa una fracción del espacio disponible en el contenedor. Es la unidad recomendada para crear diseños flexibles.

| Definición | Resultado |
| :--- | :--- |
| **`1fr 1fr`** | Dos columnas del 50% cada una. |
| **`1fr 2fr`** | La segunda columna es el doble de grande que la primera. |
| **`1fr 100px`** | Una columna de 100px y la otra ocupa todo el resto del espacio. |

```css
.grilla-flexible {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* La columna central ocupa el 50% total */
}
```

### Diferencia entre `auto` y `fr`:
- **`auto`**: El tamaño depende del **contenido** del elemento. Si el texto es largo, la columna crece.
- **`fr`**: El tamaño depende del **espacio disponible** en el contenedor, ignorando el contenido (a menos que este desborde físicamente).

---

## 🛠️ Configuración de Columnas y Filas

### grid-template-columns
Define el número y ancho de las columnas.
```css
grid-template-columns: 100px auto 1fr; /* Mixto: Fijo, dinámico y flexible */
```

### grid-template-rows
Define el número y alto de las filas. Si los elementos no caben en las filas definidas, Grid creará filas nuevas automáticamente.
```css
grid-template-rows: 200px 200px; /* Dos filas de 200px de alto */
```

---

## 🔄 Grillas Automáticas (`Implicit Grid`)

Cuando tenemos más elementos de los que definimos en `grid-template`, el navegador genera filas de forma automática. Esto se conoce como la **Grilla Implícita**.

### grid-auto-rows / grid-auto-columns
Permite definir el tamaño que tendrán esas filas o columnas creadas automáticamente.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Todas las filas generadas automáticamente medirán 150px */
  grid-auto-rows: 150px;
}
```

### grid-auto-flow
Controla cómo se van colocando los nuevos elementos.
- **`row`** (Defecto): Añade nuevas filas hacia abajo.
- **`column`**: Añade nuevas columnas hacia los lados.

> [!TIP]
> Grid y Flexbox no son excluyentes. Lo ideal es usar **Grid** para la estructura general de la página (layout) y **Flexbox** para el contenido dentro de los componentes.