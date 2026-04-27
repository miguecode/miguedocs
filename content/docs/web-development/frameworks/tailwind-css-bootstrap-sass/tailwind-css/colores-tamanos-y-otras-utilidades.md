---
title: "Colores, Tamaños y Otras Utilidades"
description: "Aprende a usar y personalizar colores, gradientes, opacidades, tamaños, márgenes, flexbox y grid en Tailwind CSS, incluyendo las diferencias entre Tailwind 3 y 4."
---

## Crear un Color Personalizado

En Tailwind ya hay una gran paleta de colores predefinidos. Pero si necesitamos uno todavía más específico, podemos directamente escribirlo en la clase usando corchetes (valores arbitrarios) así:

```html
<h1 class="bg-[#d2d255]">Hola Mundo</h1>
```

Pero también podemos crear una utilidad de color que quede disponible para todo el proyecto. El enfoque cambia dependiendo de la versión de Tailwind que utilices.

### En Tailwind 3

En Tailwind 3, esto se hacía yendo al archivo `tailwind.config.js` y especificando las variables personalizadas de esta manera:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "azul-clarito": "#243cff"
      }
    }
  }
}
```

Una vez guardado eso en nuestro archivo de configuración de Tailwind, podemos usar la clase utilitara así: `bg-azul-clarito`. O la podemos usar para otra propiedad, como `text-azul-clarito`. Eso es porque lo que creamos fue **un color**, no una regla exclusiva de fondo.

### En Tailwind 4

En Tailwind 4, la personalización ya no se hace más en ese archivo de configuración Javascript. Ahora simplemente hay que ir al archivo de estilos CSS "global" que esté usando la aplicación (es decir, el archivo CSS que está haciendo el import de Tailwind):

```css
/* src/global.css (o archivo similar que importa tailwind) */
@import 'tailwindcss';

@theme {
  /* Aca van todas las variables personalizadas */
  /* Todas se escriben con un '--' adelante, y con el tipo de valor */

  /* Colores */
  --color-primary-light: #8927f9;
  --color-primary-dark: #212031;
  --color-secondary-dark: #b968e8;

  /* Breakpoints de pantalla */
  --breakpoint-xxs: 360px;
  --breakpoint-xs: 460px;
}
```

---

## Colores Gradientes

Tailwind facilita la creación de gradientes con utilidades directas:

*   `bg-gradient-to-r`: El background color será un color gradiente hacia la derecha (start left, end right). Es decir, empieza con un color desde la izquierda y se va transformando en otro hacia la derecha.
*   `bg-gradient-to-r from-red-500 to-blue-500`: De esta forma, indicamos los colores. El gradiente va de rojo a azul.

Para tener **texto en gradiente** hay que hacer una vuelta de rosca más, de esta forma:

```html
<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
  Hello World
</span>
```

---

## Opacidad en los Colores

Para agregar opacidad a un color, simplemente se añade una barra `/` seguida del porcentaje de opacidad deseado:

*   `bg-green-500/50`: Esto indica que el color verde va a tener un 50% de opacidad.

---

## Tamaños (Sizing)

Para controlar el ancho (`width`), Tailwind usa el prefijo `w-` seguido de una medida en su escala. También puedes usar valores arbitrarios.

*   `w-2`: Equivale a un ancho predefinido en la escala de Tailwind (0.5rem o 8px).
*   `w-[170px]`: Define explícitamente el ancho a `170px`.
*   `w-full`: Equivale a `width: 100%`.

### Extender la Escala de Espaciado/Tamaños

Si queremos crear una medida personalizada reutilizable, el proceso vuelve a depender de la versión.

#### En Tailwind 3:
Si vamos a `tailwind.config.js`, podemos hacer:

```javascript
module.exports = {
  theme: {
    extend: {
      spacing: {
        "42": "170px"
      }
    }
  }
}
```

Entonces, ahora `w-42` es una utilidad la cual acabamos de crear. Pero ojo, el `w` es opcional, ya que lo que en sí creamos en el objeto `spacing` fue la **medida** `42`. O sea que podríamos hacer `h-42` (height), `p-42` (padding), etc. y también funcionaría.

Si supongamos que **sólo** queremos crear una medida que aplique para `width` (y no para `height` ni para ninguna otra propiedad), haríamos esto en su lugar:

```javascript
module.exports = {
  theme: {
    extend: {
      width: {
        "42": "170px"
      }
    }
  }
}
```

#### En Tailwind 4:
Como sabemos, en Tailwind 4 ya no se usa ese archivo ni esa sintaxis. Ahora se haría en el CSS:

```css
/* Crear variables de espaciado general (equivale a extends -> spacing) */
@theme {
  --spacing-42: 170px;
}

/* Crear una variable aplicable únicamente al Width */
@theme {
  --width-42: 170px;
}
```

---

## Padding y Margin

Las utilidades de espaciado siguen una nomenclatura muy lógica:

*   `p-3` -> `padding: 0.75rem;` (El padding en todas sus direcciones).
*   `m-3` -> `margin: 0.75rem;` (El margin en todas sus direcciones).

**Direcciones Específicas (Top, Right, Bottom, Left):**
*   `pt`, `pl`, `pr`, `pb`: Significan Padding Top, Left, Right y Bottom respectivamente.
*   `mt`, `ml`, `mr`, `mb`: Significan Margin Top, Left, Right y Bottom respectivamente.

**Ejes (X e Y):**
*   La `x` representa al eje horizontal (izquierda y derecha).
*   La `y` representa al eje vertical (arriba y abajo).

*   `px-3` -> `padding-left: 0.75rem;` y `padding-right: 0.75rem;`
*   `py-3` -> `padding-top: 0.75rem;` y `padding-bottom: 0.75rem;`
*   `mx-3` -> `margin-left: 0.75rem;` y `margin-right: 0.75rem;`
*   `my-3` -> `margin-top: 0.75rem;` y `margin-bottom: 0.75rem;`

**Centrado:**
*   `mx-auto` -> Define el margen horizontal a `auto`. Es la técnica común para centrar un elemento de bloque dentro de su contenedor principal.

---

## Otras Utilidades Comunes

A continuación se listan otras utilidades frecuentes y sus equivalencias aproximadas:

*   `border` u `border-2`: Aplica bordes. Equivalen a `border-width: 1px` y `border-width: 2px`.
*   `rounded`: Aplica bordes redondeados (`border-radius`). Tiene variantes como `rounded-md`, `rounded-full`, etc.
*   `block`: Define el formato de caja (`display: block`).
*   `hover:bg-red-500`: Aplica un color de fondo rojo al pasar el mouse por encima del elemento.

### Flexbox

Se activa simplemente con la utilidad `flex`.

Las demás propiedades de Flexbox tienen una "traducción" bastante literal a los nombres de las utilidades de Tailwind (como pasa con casi todas las propiedades en general). Por ejemplo, `justify-content: center;` pasa a ser `justify-center`, o `align-items: center;` pasa a ser `items-center`.

### Grid

Se activa con la utilidad `grid`, seguido usualmente por la definición de las columnas, por ejemplo `grid-cols-6` (o la cantidad de columnas que sean).

Con CSS Grid pasa lo mismo que con Flexbox, sus utilidades tienen nombres muy similares a los nombres reales de las propiedades CSS. Por ejemplo `gap-4` para controlar la separación entre columnas y filas.