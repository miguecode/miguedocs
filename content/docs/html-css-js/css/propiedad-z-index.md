---
title: "Propiedad Z-Index"
description: "El z-index gestiona el orden de apilamiento de los elementos en una página web. Aunque solemos ver las webs como superficies planas (ejes X e Y), en realidad tienen una tercera dimensión: el Eje Z (profundidad)."
---


## 🔳 Propiedad Z-Index

El `z-index` gestiona el **orden de apilamiento** de los elementos en una página web. Aunque solemos ver las webs como superficies planas (ejes X e Y), en realidad tienen una tercera dimensión: el **Eje Z** (profundidad).

---

## 🔝 Orden de Apilamiento Natural

Por defecto, los elementos se apilan según su orden en el HTML (el DOM):
1. Los elementos que aparecen **primero** en el código quedan "debajo".
2. Los elementos que aparecen **al final** se renderizan "encima" de los anteriores.

---

## 🛠️ ¿Cómo funciona Z-Index?

El valor de `z-index` es un número entero. A mayor número, más "cerca" del usuario aparecerá el elemento.

```css
.capa-fondo { z-index: 1; }
.capa-medio { z-index: 10; }
.capa-frente { z-index: 100; }
```

> [!IMPORTANT]
> **El gran requisito:** `z-index` **SOLO** funciona en elementos que tengan una propiedad `position` distinta a `static` (es decir: `relative`, `absolute`, `fixed` o `sticky`).

### ¿Por qué mi z-index no funciona?
Si le pones `z-index: 9999` a un elemento y sigue apareciendo detrás de otros, lo más probable es que:
1. Su posición sea `static` (la que viene por defecto).
2. Esté en un **Contexto de Apilamiento** diferente.

---

## 🏗️ Contexto de Apilamiento (Stacking Context)

No todos los `z-index` de la página compiten entre sí. Imagina que el `z-index` son los pisos de un edificio:
- El edificio A tiene 10 pisos.
- El edificio B tiene 10 pisos.
- Una persona en el piso 10 del Edificio A **no está más alta** que alguien en el piso 1 del Edificio B si el Edificio B está construido sobre una montaña.

En CSS, ciertos elementos crean un "edificio" nuevo (Contexto de Apilamiento). Un hijo con `z-index: 9999` nunca podrá estar por encima de un vecino si su padre tiene un `z-index: 1` y el vecino tiene un `z-index: 2`.

**¿Qué crea un contexto de apilamiento?**
- Elementos con `position` no estática y un `z-index` distinto de `auto`.
- Elementos con `opacity` menor a 1.
- Elementos con `transform`, `filter` o `flex/grid` containers.

---

## 💡 Buenas Prácticas

1.  **No uses 9999:** Mantén valores controlables. Una buena escala es usar saltos de 10 en 10 (10, 20, 30) para poder insertar elementos en medio si es necesario.
2.  **Gestiona prioridades:**
    - Fondos/Decoraciones: 1-10.
    - Componentes normales: 10-50.
    - Navegación/Modales: 100+.
3.  **Usa variables:** Define tus niveles de profundidad en variables CSS para mantener la coherencia.
    ```css
    :root {
      --z-modal: 1000;
      --z-tooltip: 2000;
    }
    ```

> [!TIP]
> Si necesitas que el `z-index` funcione sin mover el elemento de su sitio, simplemente aplícale `position: relative;` sin mover sus coordenadas `top` o `left`. Esto activará la propiedad sin alterar el diseño.