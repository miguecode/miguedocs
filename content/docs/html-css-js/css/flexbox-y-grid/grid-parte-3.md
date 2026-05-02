---
title: "Grid - Parte 3"
description: "Grid es un sistema de maquetación bidimensional que permite manejar filas y columnas al mismo tiempo."
---


## 🎨 Grid CSS - Parte 3: Áreas y Alineación Avanzada

En esta última parte veremos la forma más visual de crear layouts: las **Áreas de Grid**, y cómo controlar la alineación de cada elemento con precisión quirúrgica.

---

## 🖼️ Áreas de Grid (`grid-template-areas`)

Esta propiedad nos permite "dibujar" el layout de nuestra página usando nombres semánticos. Es ideal para maquetar estructuras completas (Header, Main, Sidebar, Footer).

### 1. Definir el nombre en los hijos
Primero, le damos un nombre a cada elemento usando `grid-area`.

```css
header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: content; }
footer { grid-area: footer; }
```

### 2. Dibujar el mapa en el padre
Luego, en el contenedor, definimos la estructura visual:

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "footer  footer  footer";
}
```

> [!TIP]
> Si quieres dejar una celda vacía, usa un punto **`.`**. 
> Ejemplo: `"header header ."` dejará la esquina superior derecha vacía.

---

## 🔝 Alineación de Items (Dentro de la celda)

Controla cómo se posiciona el contenido **dentro** de su espacio asignado.

- **`justify-items`**: Alineación horizontal (eje X).
- **`align-items`**: Alineación vertical (eje Y).
- **`place-items`**: Atajo para ambos (`align` / `justify`).

```css
.container {
  justify-items: center; /* Contenido centrado horizontalmente en su celda */
  align-items: stretch;  /* (Defecto) Estirado verticalmente */
  
  /* Atajo pro */
  place-items: center center;
}
```

---

## 🧩 Alineación Individual (`self`)

Si quieres que un solo elemento rompa la regla general:

```css
.item-especial {
  justify-self: start;
  align-self: end;
  /* Atajo */
  place-self: end start;
}
```

---

## 📦 Alineación del Contenido (La grilla completa)

Si tu grilla es más pequeña que el contenedor padre, puedes alinear **toda la grilla** como un bloque.

- **`justify-content`**: Mueve toda la grilla horizontalmente.
- **`align-content`**: Mueve toda la grilla verticalmente.
- **`place-content`**: Atajo para ambos.

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 200px;
  /* Centra la grilla de 400px en medio de toda la pantalla */
  place-content: center;
}
```

---

## 💡 Resumen de Alineación

| Propiedad | Se aplica a... | Afecta a... |
| :--- | :--- | :--- |
| **`items`** | Contenedor | Todos los hijos (dentro de su celda). |
| **`content`** | Contenedor | El bloque de la grilla completo. |
| **`self`** | Hijo | Solo a ese hijo. |

> [!NOTE]
> Un truco para recordar: **Items** es plural (todos los elementos internos), **Content** es singular (el bloque de contenido total).