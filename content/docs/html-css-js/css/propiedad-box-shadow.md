---
title: "Propiedad Box-Shadow"
description: "La propiedad box-shadow se creó para añadir efectos de sombra a nuestra caja/elemento. En esencia, lo que hace es crear un clon de de la caja respetando su box-..."
---


## 💡 Propiedad Box-Shadow

La propiedad `box-shadow` se utiliza para añadir efectos de sombra a los elementos. Técnicamente, crea un "clon" de la caja que respeta las propiedades del **box-model** (como `width`, `height` y `border-radius`).

---

## ✍️ Sintaxis y Parámetros

La estructura básica requiere al menos dos valores (desplazamientos), pero acepta hasta seis:

```css
box-shadow: [inset] offset-x offset-y [blur-radius] [spread-radius] [color];
```

| Parámetro | Función | Valor por defecto |
| :--- | :--- | :--- |
| **`inset`** | Cambia la sombra de exterior (fuera) a interior (dentro). | `null` (exterior) |
| **`offset-x`** | Desplazamiento horizontal. (+) derecha, (-) izquierda. | **Obligatorio** |
| **`offset-y`** | Desplazamiento vertical. (+) abajo, (-) arriba. | **Obligatorio** |
| **`blur-radius`** | Nivel de desenfoque. A mayor número, más suave y difusa. | `0` (sólida) |
| **`spread-radius`** | Expansión de la sombra. (+) la agranda, (-) la encoge. | `0` |
| **`color`** | Color de la sombra. Acepta hex, rgb, rgba, etc. | `currentcolor` |

---

## 🚀 Ejemplos de Uso

### 1. Sombra Básica y Suave
```css
.card {
  /* x: 5px, y: 10px, blur: 15px, color: gris transparente */
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.1);
}
```

### 2. Sombra Interior (`inset`)
Útil para dar sensación de profundidad o para botones "presionados".
```css
.button-pressed {
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
}
```

### 3. Múltiples Sombras
Podemos apilar sombras separándolas por comas. Las primeras en la lista aparecen "encima" de las siguientes.

```css
.rainbow-shadow {
  box-shadow: 
    5px 5px 0 red,
    10px 10px 0 orange,
    15px 15px 0 yellow;
}
```

---

## 🛠️ Trucos y Consejos

### Simular Bordes Extra
Como el valor por defecto de `blur-radius` es 0, la sombra es sólida. Esto permite simular múltiples bordes sin afectar el tamaño real de la caja:

```css
.multiple-borders {
  border: 5px solid blue;
  box-shadow: 0 0 0 5px green, 0 0 0 10px red;
}
```

### Neon Glow
Usando un desenfoque alto y colores vibrantes:
```css
.neon {
  box-shadow: 0 0 20px #0f0, 0 0 40px #0f0;
}
```

> [!TIP]
> **Performance:** Las sombras muy complejas o con mucho radio de desenfoque pueden ser costosas de procesar para el navegador. Úsalas con moderación en elementos que se animan frecuentemente.

> [!TIP]
> **Herramienta recomendada:** Para generar sombras de forma visual y rápida, puedes usar [CSS Scan Shadows](https://getcssscan.com/css-box-shadow-examples).