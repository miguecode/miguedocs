---
title: "Animaciones (Propiedad animation)"
description: "Las animaciones en CSS permiten crear secuencias de movimiento complejas con múltiples etapas, sin necesidad de que el usuario interactúe con el elemento."
---


## 🎬 Animaciones (Property: animation)

A diferencia de las transiciones (que solo ocurren entre dos estados), las **Animaciones** permiten crear secuencias de movimiento complejas con múltiples etapas, sin necesidad de que el usuario interactúe con el elemento.

---

## 🔑 Los Fotogramas Clave (`@keyframes`)

Para crear una animación, primero debemos definir sus "pasos" usando la regla `@keyframes`.

```css
@keyframes slide-in {
  from {
    /* Estado inicial (0%) */
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    /* Estado final (100%) */
    transform: translateX(0);
    opacity: 1;
  }
}
```

También puedes usar porcentajes para mayor precisión:
```css
@keyframes pulse {
  0%   { scale: 1; }
  50%  { scale: 1.2; box-shadow: 0 0 20px rgba(0,0,0,0.2); }
  100% { scale: 1; }
}
```

---

## 🏗️ Propiedades de la Animación

Para que una animación funcione, debemos aplicarla a un elemento usando sus propiedades específicas o el atajo `animation`.

| Propiedad | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| **`animation-name`** | El nombre definido en el `@keyframes`. | `none` |
| **`animation-duration`** | Cuánto dura la animación (s o ms). | `0s` (obligatorio) |
| **`animation-delay`** | Tiempo de espera antes de empezar. | `0s` |
| **`animation-iteration-count`** | Veces que se repite (`number` o `infinite`). | `1` |
| **`animation-direction`** | `normal`, `reverse`, `alternate`. | `normal` |
| **`animation-play-state`** | `running` o `paused`. | `running` |

---

## ⚖️ Timing Functions (Velocidad)

Determina cómo se distribuye la velocidad a lo largo de la duración.

| Valor | Efecto |
| :--- | :--- |
| **`linear`** | Velocidad constante de principio a fin. |
| **`ease`** | Inicio lento, rápido en el medio, final muy lento. |
| **`ease-in`** | Empieza lento y acelera al final. |
| **`ease-out`** | Empieza rápido y frena al final. |
| **`steps(n)`** | Divide la animación en un número exacto de saltos. |

---

## 🏁 Fill Mode (Estado Final)

Define qué pasa con el elemento antes de empezar o después de terminar la animación.

| Valor | Comportamiento |
| :--- | :--- |
| **`none`** | El elemento vuelve a su estado original inicial. |
| **`forwards`** | El elemento **mantiene** los estilos del último keyframe. |
| **`backwards`** | El elemento aplica los estilos del primer keyframe antes de iniciar. |
| **`both`** | Aplica tanto `forwards` como `backwards`. |

---

## 🚀 El atajo `animation` (Shorthand)

Puedes escribirlo todo en una sola línea siguiendo este orden:
`name` | `duration` | `timing-function` | `delay` | `iteration-count` | `direction` | `fill-mode`

```css
.boton-pulsante {
  animation: pulse 2s ease-in-out infinite both;
}
```

---

## ⚡ Consejos de Rendimiento

1.  **Anima solo `transform` y `opacity`:** Estas propiedades son procesadas por la GPU y no obligan al navegador a recalcular el layout de la página, lo que garantiza 60 FPS.
2.  **Usa `will-change`:** Si una animación es muy pesada, puedes avisar al navegador con `will-change: transform;`.
3.  **Concatenar:** Puedes poner más de una animación separándolas con comas:
    ```css
    img {
      animation: aparecer 1s ease, flotar 3s infinite ease-in-out 1s;
    }
    ```

> [!TIP]
> Las animaciones son herramientas poderosas para mejorar el **UX**, ayudando al usuario a entender cambios de estado o flujos de navegación mediante el movimiento.ómo esta segunda animación se va a realizar después de "mover". De no ser por eso, se harían las dos a la vez.