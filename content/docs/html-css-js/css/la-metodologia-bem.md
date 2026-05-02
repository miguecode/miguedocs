---
title: "La metodología BEM"
description: "BEM es una convención de nomenclatura para clases en HTML y CSS que ayuda a mantener el código organizado, legible y escalable."
---


## 🏗️ La Metodología BEM (Block, Element, Modifier)

La metodología **BEM** es una convención de nomenclatura estándar para clases en HTML y CSS. Fue desarrollada por el equipo de **Yandex** con el objetivo de hacer el código más legible, estructurado y mantenible, especialmente en proyectos grandes.

Su propósito fundamental es que cualquier desarrollador pueda entender qué función cumple un elemento y cómo se relaciona con los demás con solo leer el nombre de su clase.

---

## 🧱 Los 3 Pilares de BEM

### 🟦 Bloque (`Block`)
Es un componente independiente y reutilizable que actúa como contenedor. No debe depender de otros elementos de la página.
- **Ejemplos:** `.header`, `.menu`, `.card`, `.form`.

### 🟧 Elemento (`Element`)
Es una parte de un bloque que no tiene significado por sí sola y está semánticamente ligada a su bloque.
- **Sintaxis:** Se separa del bloque con dos guiones bajos (`__`).
- **Ejemplos:** `.card__title`, `.menu__item`, `.header__logo`.

### 🟥 Modificador (`Modifier`)
Se usa para definir variaciones en la apariencia o el comportamiento de un bloque o un elemento (colores, tamaños, estados).
- **Sintaxis:** Se separa con dos guiones medios (`--`).
- **Ejemplos:** `.card--featured`, `.button--large`, `.menu__item--active`.

---

## ✍️ Reglas de Sintaxis

| Tipo | Formato | Ejemplo |
| :--- | :--- | :--- |
| **Bloque** | `.bloque` | `.btn` |
| **Elemento** | `.bloque__elemento` | `.btn__text` |
| **Modificador** | `.bloque--modificador` | `.btn--success` |
| **Elem. + Modif.** | `.bloque__elem--modif` | `.btn__text--bold` |

---

## 🚀 Ejemplo Práctico

Imagina un componente de tarjeta (**Card**):

### HTML
```html
<article class="card card--highlighted">
  <img src="foto.jpg" class="card__image" alt="Producto">
  <h2 class="card__title">Título del Producto</h2>
  <p class="card__description">Descripción breve...</p>
  <button class="card__button card__button--success">Comprar</button>
</article>
```

### CSS
```css
/* Bloque principal */
.card {
  border: 1px solid #ccc;
  padding: 1rem;
}

/* Elementos internos */
.card__image { width: 100%; }
.card__title { font-size: 1.5rem; }

/* Modificadores */
.card--highlighted {
  border-color: gold;
  box-shadow: 0 0 10px gold;
}

.card__button--success {
  background-color: green;
  color: white;
}
```

> [!TIP]
> **No anides elementos en la clase:** Evita nombres como `.block__elem1__elem2`. BEM recomienda mantener la estructura plana: `.block__elem2`. Todos los elementos deben depender directamente del Bloque.