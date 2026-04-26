---
title: "Gradientes o degradados"
description: "Son colores que van de un color a otro."
---
## 🌈 Gradientes (Degradados)

Los **gradientes** son transiciones suaves entre dos o más colores. En CSS, se aplican mediante la propiedad `background-image` (o el atajo `background`), ya que el navegador los trata técnicamente como imágenes generadas dinámicamente.

Existen tres tipos principales: **Linear**, **Radial** y **Conic**.

---

## 📈 Linear Gradient (Lineales)

Es el tipo más común. Los colores fluyen en una línea recta.

### Sintaxis Básica
```css
.caja {
  /* Por defecto va de arriba hacia abajo */
  background-image: linear-gradient(red, blue);
}
```

### Dirección
Podemos especificar hacia dónde se dirige el degradado usando palabras clave o grados (`deg`).
- **Palabras clave:** `to top`, `to bottom`, `to right`, `to left`, `to bottom right`, etc.
- **Grados:** `0deg` (hacia arriba), `90deg` (derecha), `180deg` (abajo), etc.

```css
background-image: linear-gradient(to right, red, blue);
background-image: linear-gradient(45deg, red, blue, green);
```

### Puntos de Parada (Color Stops)
Podemos controlar dónde empieza y termina cada color usando porcentajes o píxeles.

```css
/* Cambio brusco al 50% (sin transición suave) */
background-image: linear-gradient(to right, red 50%, blue 50%);

/* Con una zona de transición del 10% */
background-image: linear-gradient(to right, red 40%, blue 50%);
```

---

## 🎯 Radial Gradient (Radiales)

El degradado surge desde un punto central (por defecto el centro del elemento) y se expande hacia afuera.

### Forma y Tamaño
Puede ser un **círculo** (`circle`) o una **elipse** (`ellipse`).

```css
/* Elipse por defecto */
background-image: radial-gradient(red, blue);

/* Círculo con tamaño específico */
background-image: radial-gradient(circle 50px, red, yellow, green);
```

### Ubicación (`at`)
Podemos mover el centro del degradado usando porcentajes o palabras clave (`center`, `top`, `left`, etc.).

```css
/* El degradado empieza en la esquina superior izquierda */
background-image: radial-gradient(circle at 0% 0%, red, blue);
```

---

## 🍦 Conic Gradient (Cónicos)

Los colores rotan alrededor de un punto central, similar a un gráfico de torta o un cono visto desde arriba.

```css
background-image: conic-gradient(from 0deg at 50% 50%, red, orange, yellow, green, blue);
```

---

## 🛠️ Técnicas Avanzadas

### Múltiples Gradientes
Puedes superponer varios degradados separándolos por comas. El primero en la lista es el que queda "arriba".

```css
background-image: 
  linear-gradient(to right, rgba(255,0,0,0.5), rgba(0,0,0,0.5)),
  url('fondo.jpg');
```

### Gradientes Repetidos
Se usan para crear patrones como rayas o texturas.
- `repeating-linear-gradient`
- `repeating-radial-gradient`
- `repeating-conic-gradient`

```css
/* Crea un patrón de rayas rojas y azules */
background-image: repeating-linear-gradient(
  45deg,
  red 0px,
  red 10px,
  blue 10px,
  blue 20px
);
```

> [!TIP]
> Los gradientes son excelentes para añadir profundidad sin necesidad de cargar archivos de imagen pesados, lo que mejora el rendimiento de carga de tu sitio web.near-gradient(to right, red 0 10%, blue 10% 20%, green 20% 35%)