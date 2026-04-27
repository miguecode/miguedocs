---
title: "Dark Mode (Tailwind 3)"
description: "Aprende a implementar el Modo Oscuro en Tailwind CSS usando la estrategia de clases, activando colores específicos y configurando el elemento raíz."
---

> [!WARNING]
> **ACLARACIÓN IMPORTANTE:** Este apunte fue creado usando **Tailwind 3**. Hoy en día, ya existe Tailwind 4. La idea y el concepto funcional son los mismos, pero la sintaxis y en dónde se hace la configuración general es distinto.

## Utilidad "dark"

A continuación se muestra un ejemplo básico de cómo se estructura el HTML para prepararlo para el modo oscuro:

```html
<html lang="es" class="dark">
  <body class="dark:bg-slate-900">
    <label for="darkmode" class="dark:text-white">Activar modo oscuro</label>
    <input type="checkbox" id="darkmode">
    <p class="dark:bg-blue-300">Lorem Ipsum</p>
  </body>
</html>
```

Para que el dark mode en Tailwind 3 funcione basándose en una clase que agregamos manualmente, hay que ir al archivo `tailwind.config.js` y, dentro de `module.exports`, tenemos que escribir la propiedad `darkMode` así:

```javascript
module.exports = {
  darkMode: 'class',
}
```

Esto le dice a Tailwind que use la clase `dark` como un "activador" para el modo oscuro. Es decir, cuando Tailwind encuentre la clase `dark` en algún lugar del DOM (normalmente en el elemento raíz, como `<html>` o `<body>`), aplicará automáticamente todas las reglas que empiecen con el prefijo `dark:`.

Otra opción sería usar `darkMode: 'media'`, que usa directamente las preferencias de tema del sistema operativo (sin necesidad de colocar manualmente una clase `dark` en el HTML).

Volviendo al ejemplo, para darle funcionalidad al input checkbox y permitirle al usuario cambiar de modo, tenemos que usar un script de JavaScript sencillo:

```javascript
const darkModeInput = document.querySelector('#darkmode');

darkModeInput.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
```

*   `dark` es una clase de utilidad propia de Tailwind CSS.
*   Esta clase **no tiene estilos por sí misma**, sino que actúa como un "gatillo" (trigger) para activar todas las reglas que comienzan con el prefijo `dark:` en el CSS.

**Ejemplo:**

```html
<div class="text-gray-900 dark:text-white">
  Hola
</div>
```

*   Si la clase `dark` está presente en un ancestro (como el `<html>` o `<body>`), entonces `dark:text-white` se activa y el texto se vuelve blanco.
*   Si no está presente, la clase `text-gray-900` (texto gris oscuro) se mantiene activa.

---

## ¿Qué es el elemento raíz (root)?

El elemento raíz normalmente es el elemento `<html>`. Por eso, cuando hablamos de "poner la clase dark en el elemento raíz", nos referimos a agregar esa clase directamente a la etiqueta html. 

Al tener esa clase allí arriba, todas las reglas con `dark:` en el resto del árbol DOM se activan.

---

## ¿Qué es color-scheme en :root?

En CSS puro, solemos ver algo como esto:

```css
:root {
  color-scheme: light dark;
}
```

*   Esta propiedad `color-scheme` **no tiene relación directa con Tailwind**. Tailwind sigue dependiendo exclusivamente de su clase `dark` configurada con `darkMode: 'class'`.
*   `:root` es un selector de CSS que apunta al elemento raíz (generalmente el `<html>`).
*   Darle el valor de `light dark` le indica a los navegadores que el sitio web soporta tanto temas claros como oscuros de forma nativa. Es útil para manejar colores predeterminados en elementos nativos del navegador que no estilamos directamente, como las barras de scroll o los estilos base de los campos de formulario.

---

## ¿Y qué pasa con "light"?

*   `light` **no es una clase** de Tailwind CSS.
*   El modo claro es el estado predeterminado de cualquier web. Así que no se necesita una clase para indicarlo. Si no hay clase `dark`, la página estará en modo claro automáticamente.

**Resumen:**
A la hora de manejar dinámicamente el tema, el enfoque más común y profesional es simplemente agregar o quitar la clase `dark` al elemento `<html>` según la preferencia del usuario o del sistema, tal como vimos en el ejemplo de Javascript.