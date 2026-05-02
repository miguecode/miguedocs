---
title: "Animaciones de Scroll"
description: "Las animaciones de scroll son efectos visuales que se activan o modifican según el movimiento del scroll en una página web."
---


## 📜 Animaciones de Scroll (Scroll-driven Animations)

Tradicionalmente, las animaciones que reaccionan al scroll requerían JavaScript para calcular la posición del usuario. Hoy en día, CSS ofrece la **Scroll-driven Animations API**, que permite vincular animaciones a la progresión del scroll de forma nativa y ultra fluida.

> [!WARNING]
> **Compatibilidad:** Esta es una API relativamente nueva. Actualmente funciona principalmente en navegadores basados en Chromium (Chrome, Edge). Considera usar *polyfills* si necesitas soporte en Safari o Firefox.

---

## 🛠️ Conceptos Clave

Para crear estas animaciones, necesitamos dos propiedades fundamentales:
1. **`animation-timeline`**: Define la línea de tiempo de la animación. En lugar de basarse en segundos, se basa en el scroll.
2. **`animation-range`**: Define en qué parte del scroll comienza y termina la animación.

---

## 🚀 Ejemplo 1: Barra de Progreso (`scroll()`)

La función `scroll()` vincula la animación a la progresión de un contenedor (por defecto, toda la página).

### HTML
```html
<div id="progress"></div>
```

### CSS
```css
#progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: red;
  transform-origin: 0% 50%;
  
  /* Vinculamos la animación al scroll */
  animation: grow-progress auto linear;
  animation-timeline: scroll(root block);
}

@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

- **`scroll(root block)`**: `root` busca el scroll principal del documento. `block` indica el eje vertical (Y).

---

## 🖼️ Ejemplo 2: Revelar Imágenes (`view()`)

La función `view()` es ideal para animar elementos individuales a medida que entran o salen del área visible (**viewport**).

```css
section img {
  animation: reveal linear both;
  animation-timeline: view();
  /* Inicia cuando el 20% del elemento entra, termina al 40% */
  animation-range: entry 20% cover 40%;
}

@keyframes reveal {
  from {
    opacity: 0;
    clip-path: inset(0% 100% 0% 0%);
  }
  to {
    opacity: 1;
    clip-path: inset(0% 0% 0% 0%);
  }
}
```

### Explicación de `animation-range`:
- **`entry`**: El momento en que el elemento empieza a asomar por debajo del viewport.
- **`cover`**: El rango mientras el elemento cruza el viewport.
- **`exit`**: Cuando el elemento empieza a salir por arriba.

---

## 🧭 Ejemplo 3: Efecto en Navbar

Podemos hacer que un menú sea transparente al inicio y gane fondo/sombra tras bajar unos píxeles.

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  animation: adjust-header linear both;
  animation-timeline: scroll();
  animation-range: 0 100px; /* La animación ocurre entre los 0 y 100px de scroll */
}

@keyframes adjust-header {
  to {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  }
}
```

---

## 💡 Ventajas de usar CSS para Scroll
- **Rendimiento:** Las animaciones corren en el hilo de composición, fuera del **Main Thread** de JS. No hay saltos (*jank*).
- **Legibilidad:** Menos código JS decorativo y más lógica visual en el CSS.
- **Menos dependencias:** No necesitas librerías como GSAP o ScrollMagic para efectos sencillos.

> [!TIP]
> Puedes explorar ejemplos increíbles y generar código visualmente en [scroll-driven-animations.style](https://scroll-driven-animations.style/).