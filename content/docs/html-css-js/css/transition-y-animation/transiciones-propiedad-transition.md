---
title: "Transiciones (Propiedad transition)"
description: "Las transiciones en CSS permiten cambiar el valor de una propiedad CSS de forma gradual durante un período de tiempo determinado."
---


## 🌓 Transiciones (Property: transition)

Las **Transiciones** permiten cambiar el valor de una propiedad CSS durante un tiempo determinado, creando un efecto suave en lugar de un cambio abrupto. Son ideales para interacciones simples como el `:hover` o el cambio de estado de un botón.

---

## 🏗️ Los Cuatro Pilares de una Transición

Para que una transición funcione, necesitamos definir qué vamos a cambiar y cuánto tiempo va a durar.

| Propiedad | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| **`transition-property`** | El nombre de la propiedad (ej: `background`, `all`). | `all` |
| **`transition-duration`** | Tiempo que dura el cambio (`s` o `ms`). | `0s` |
| **`transition-timing-function`** | La curva de velocidad de la transición. | `ease` |
| **`transition-delay`** | Tiempo de espera antes de que inicie. | `0s` |

### Ejemplo Básico:
```css
.boton {
  background-color: blue;
  transition-property: background-color;
  transition-duration: 0.3s;
}

.boton:hover {
  background-color: darkblue;
}
```

---

## 🚀 El atajo `transition` (Shorthand)

Puedes combinar las cuatro propiedades en una sola línea. El orden recomendado es:
`property` | `duration` | `timing-function` | `delay`

```css
.card {
  transition: transform 0.5s ease-in-out 0.1s, opacity 0.3s linear;
}
```

---

## ⚖️ Curvas de Velocidad (`timing-function`)

| Valor | Descripción |
| :--- | :--- |
| **`linear`** | Misma velocidad de principio a fin. |
| **`ease`** | (Defecto) Inicio lento, rápido en el centro, final lento. |
| **`ease-in`** | Empieza lento y acelera al final. |
| **`ease-out`** | Empieza rápido y frena al final (ideal para UI). |
| **`steps(n)`** | El cambio ocurre en un número exacto de saltos discretos. |

> [!TIP]
> **Performance:** Prioriza animar `transform` (para movimiento/escala) y `opacity`. Estas propiedades son procesadas por la GPU y no afectan el rendimiento de la página tanto como `width`, `height` o `box-shadow`.

---

## ♿ Accesibilidad: `prefers-reduced-motion`

Algunos usuarios sufren de cinetosis o mareos ante el movimiento. Debemos respetar sus preferencias del sistema operativo.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

---

## 💡 Truco Pro: Regreso Dinámico

Puedes definir tiempos diferentes para cuando el usuario entra y sale del hover. El CSS en `.elemento` define el "regreso", y el CSS de `:hover` define la "entrada".

```css
.boton {
  transition: 0.1s; /* Regreso rápido */
}

.boton:hover {
  transition: 0.5s; /* Entrada lenta/suave */
  transform: scale(1.1);
}
```

---

## 🔗 Enlaces Útiles
- **Visualizador de curvas:** [easings.co](https://easings.co)
- **Cubic Bezier Generator:** Te permite crear curvas personalizadas a mano.