---
title: "Grid - Parte 2"
description: "Grid es un sistema de maquetación bidimensional que permite manejar filas y columnas al mismo tiempo."
---


## ⚡ Grid CSS - Parte 2: Funciones y Grillas Responsivas

En esta sección veremos cómo optimizar la escritura de nuestras grillas y cómo hacerlas adaptables a cualquier dispositivo sin usar Media Queries.

---

## 🔁 La función `repeat()`

Permite definir múltiples columnas o filas con un mismo patrón, evitando código repetitivo.

```css
.container {
  /* En lugar de: 1fr 1fr 1fr 1fr */
  grid-template-columns: repeat(4, 1fr);
  
  /* Se pueden mezclar patrones */
  grid-template-columns: 200px repeat(2, 1fr) 50px;
}
```

---

## 📏 Flexibilidad con `minmax()`

Define un rango de tamaño (mínimo y máximo) para una pista de la grilla. Es fundamental para el diseño responsive.

```css
.container {
  /* La columna nunca medirá menos de 150px, pero crecerá hasta 1fr */
  grid-template-columns: repeat(3, minmax(150px, 1fr));
}
```

---

## 📱 Grillas Responsivas sin Media Queries

Combinando `repeat()`, `minmax()` y los valores **`auto-fill`** o **`auto-fit`**, podemos crear grillas que se acomodan solas.

```css
.gallery {
  display: grid;
  /* Crea tantas columnas de 200px como quepan en el ancho total */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
```

### ⚖️ `auto-fill` vs `auto-fit`

| Valor | Comportamiento |
| :--- | :--- |
| **`auto-fill`** | Crea huecos vacíos si hay espacio para más columnas, incluso si no hay contenido para llenarlas. |
| **`auto-fit`** | Colapsa las columnas vacías y estira las existentes para ocupar todo el espacio disponible. |

---

## 🗺️ Posicionamiento por Líneas

Cada grilla está compuesta por líneas numeradas (empezando desde 1). Podemos decirle a un elemento en qué línea empezar y en cuál terminar.

### Propiedades de los Hijos:
- **`grid-column`**: Atajo para `start` / `end`.
- **`grid-row`**: Atajo para `start` / `end`.
- **`span`**: Indica cuántas celdas debe ocupar.

```css
.header {
  /* Va desde la línea 1 hasta la última (-1) */
  grid-column: 1 / -1;
}

.main-content {
  /* Ocupa 3 columnas a partir de donde esté */
  grid-column: span 3;
}
```

---

## 🍱 Bento Grids

Las **Bento Grids** son diseños modernos donde los elementos tienen diferentes tamaños pero encajan perfectamente como una caja de Bento japonesa.

```css
.bento-item-grande {
  grid-column: span 2;
  grid-row: span 2;
}
```

### 💡 Tips de Depuración
1.  Abre las **DevTools** de tu navegador (F12).
2.  En la pestaña "Elements", busca el contenedor con la etiqueta **`grid`**.
3.  Haz clic en ella para ver las líneas, números y áreas de tu grilla en tiempo real.

> [!IMPORTANT]
> Recuerda que los números de línea también pueden ser negativos. `-1` siempre representará la última línea de la grilla, lo cual es muy útil para expandir elementos al ancho total sin saber cuántas columnas hay.