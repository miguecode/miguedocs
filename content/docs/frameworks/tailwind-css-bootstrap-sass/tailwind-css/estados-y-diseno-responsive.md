---
title: "Estados y Diseño Responsive"
description: "Aprende a estilizar interacciones como hover, disabled y focus, y a manejar Media Queries usando los puntos de quiebre (breakpoints) de Tailwind."
---

## Estados (Variantes de Interacción)

Vamos a ver 3 estados principales: hover, disabled y focus. 
*   **Hover**: ocurre cuando el usuario pasa el cursor del ratón por encima de un elemento.
*   **Disabled**: aplica cuando el usuario no tiene permitido interactuar con un elemento (por ejemplo, un botón deshabilitado).
*   **Focus**: se dispara cuando el usuario "hace foco" o "está parado" en el elemento, como por ejemplo al hacer clic en un input de texto para escribir.

En Tailwind, estos estados se manejan aplicando un prefijo seguido de dos puntos antes de la utilidad CSS.

### Ejemplos Prácticos

**Hover:**
*   `hover:bg-blue-400`: Cambia el fondo a azul claro al posar el cursor encima.

**Disabled:**
*   `disabled:bg-red-200`: Coloca un fondo rojo claro si el elemento posee el atributo `disabled`.

**Focus:**
*   `focus:outline-none` (Quita el outline por defecto)
*   `focus:ring-1` (Aplica un anillo de grosor 1)
*   `focus:ring-purple-600` (El anillo será de color púrpura)

> [!NOTE]
> El "ring" suele hacer referencia al anillo o borde externo. Generalmente, el navegador da la funcionalidad de que se le ponga un borde predeterminado cuando hacemos clic en un input de texto (focus). Con estas utilidades de Tailwind, nosotros podemos modificar ese comportamiento o "ring" totalmente a nuestro gusto.

---

## Diseño Responsive (Mobile-First)

Tailwind tiene puntos de quiebre (breakpoints) predeterminados que siguen una convención "Mobile-First". Estos puntos de quiebre coinciden de manera exacta con el uso de medias queries (`@media`) en CSS puro.

Sus medidas predeterminadas son las siguientes:

*   `sm`: 640px -> Traducido a CSS: `@media (min-width: 640px) {...}`
*   `md`: 768px -> Traducido a CSS: `@media (min-width: 768px) {...}`
*   `lg`: 1024px -> Traducido a CSS: `@media (min-width: 1024px) {...}`
*   `xl`: 1280px -> Traducido a CSS: `@media (min-width: 1280px) {...}`
*   `2xl`: 1536px -> Traducido a CSS: `@media (min-width: 1536px) {...}`

### Ejemplo de uso:

```html
<body class="sm:bg-red-300 md:bg-blue-200 lg:bg-green-100">
  <h2 class="text-xl font-bold sm:text-2xl lg:text-3xl">Hola Mundo</h2>	
</body>
```
En este código, el body empezará con su fondo por defecto; a partir de los 640px pasará a rojo claro, en 768px será azul claro, y finalmente de 1024px en adelante será verde. De igual forma cambia el tamaño del texto en el `h2`.

---

## Personalizar Puntos de Quiebre

Nosotros podríamos modificar o agregar puntos de quiebre. Los métodos varían según la versión de Tailwind.

### En Tailwind 3

Nosotros podríamos querer modificar esto en el archivo `tailwind.config.js` de la siguiente forma:

```javascript
// FORMA INCORRECTA (Sobrescribe)
module.exports = {
  theme: {
    screens: {
      'tablet': '900px',
    }
  }
}
```

De paso, una pequeña aclaración muy importante sobre este archivo: si nosotros hacemos eso como está ahí (es decir, crear directamente un objeto llamado `screens` dentro del objeto principal `theme`), lo que estamos haciendo es **sobreescribir** todas las utilidades ya creadas referidas a los tamaños de las pantallas. Por ende, los prefijos originales como `sm`, `md` y los demás ya no van a existir; ahora la única clase utilitaria referida a los tamaños para las pantallas va a ser la nueva `tablet`. Y esto normalmente no es lo que queremos.

Nosotros lo que habitualmente queremos es **AGREGAR** nuevas dimensiones a las ya existentes. Para lograr eso, lo que hay que hacer es colocar `screens` dentro de `extend`:

```javascript
// FORMA CORRECTA (Extiende)
module.exports = {
  theme: {
    extend: {
      screens: {
        'tablet': '900px',
      }
    }
  }
}
```

Entonces, ya podemos usar una clase como `class="tablet:bg-red-200"` para afectar únicamente a aquellas pantallas que tengan 900px o más de ancho.

### En Tailwind 4

Como explicamos en apuntes anteriores, la sintaxis en Tailwind 4 cambió. Ya no se usa ese archivo de JavaScript (`tailwind.config.js`) para hacer esto. Sino que se escribe utilizando CSS nativo con la regla `@theme` en el propio archivo CSS principal que está importando Tailwind. Sería así:

```css
/* Archivo global.css que está importando tailwind */

@import 'tailwindcss';

@theme {
  /* Aca van todas las variables personalizadas */
  /* Todas se escriben con un '--' adelante, y con el tipo de valor */

  /* Colores (ejemplo extra) */
  --color-primary-light: #8927f9;
  --color-primary-dark: #212031;
  --color-secondary-dark: #b968e8;

  /* Agregando nuevos breakpoints de pantalla */
  --breakpoint-xxs: 360px;
  --breakpoint-xs: 460px;
  --breakpoint-tablet: 900px;
}
```
De esta forma, en Tailwind 4 lograríamos integrar puntos pre-diseñados como `class="tablet:bg-red-200"` directamente usando variables nativas del CSS.