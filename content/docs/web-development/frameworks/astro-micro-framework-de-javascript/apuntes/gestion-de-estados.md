---
title: "Gestión de Estados e Islas de Interactividad"
description: "Descubre cómo Astro maneja la interactividad dinámica mediante la Arquitectura de Islas, integrando componentes de React, Vue o Svelte solo cuando es necesario."
---

## Filosofía de Estados en Astro

Astro es, por naturaleza, un generador de sitios estáticos (SSG). Esto significa que la mayor parte de tu código se convierte en HTML puro sin JavaScript antes de llegar al navegador. Por lo tanto, el concepto de "estado" (variables que cambian y actualizan la UI) no existe en los archivos `.astro` estándar.

Sin embargo, Astro permite añadir interactividad dinámica mediante la **Arquitectura de Islas**. Esto consiste en incrustar componentes de frameworks que sí manejan estado (como React, Vue, Svelte o Solid) dentro de tus páginas estáticas.

### Tipos de Estados
*   **Estados Locales**: Información que solo afecta a un componente (ej: un contador, un menú desplegable). Se gestionan dentro del framework elegido (ej: `useState` en React).
*   **Estados Globales**: Información compartida entre múltiples componentes o islas (ej: un carrito de compras). Se suelen gestionar con librerías ligeras como **Nano Stores**, que funcionan perfectamente entre diferentes frameworks.

---

## Integración de Frameworks (React como ejemplo)

Para manejar estados dinámicos, primero debemos añadir la integración correspondiente.

### Paso 1: Instalación
Ejecutamos el comando de integración automática:
```bash
npx astro add react
```

### Paso 2: Crear el componente interactivo
Creamos un componente de React convencional:

```jsx
// src/components/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clics: {count}
    </button>
  );
}
```

---

## Directivas de Hidratación (Client Directives)

Este es el punto más importante. Si simplemente importas el componente de React en una página de Astro, este se renderizará como **HTML estático** y no funcionará el botón. Para "activar" el JavaScript en el navegador, debemos usar una **directiva de cliente**:

```astro
---
// src/pages/index.astro
import Counter from '../components/Counter.jsx';
---

<!-- No será interactivo (solo HTML) -->
<Counter />

<!-- SE CARGA Y ACTIVA INMEDIATAMENTE -->
<Counter client:load />

<!-- SE ACTIVA SOLO CUANDO EL USUARIO LO VE (Scrollear hasta él) -->
<Counter client:visible />

<!-- SE ACTIVA SOLO SI EL NAVEGADOR ESTÁ LIBRE -->
<Counter client:idle />
```

### ¿Cuándo usar cada una?
1.  **`client:load`**: Para elementos críticos de la UI que deben ser interactivos al instante (ej: navbars, buscadores).
2.  **`client:visible`**: Para elementos que están "al final de la página" (ej: un feed de comentarios o un gráfico pesado). Ahorra recursos al no cargar el JS hasta que sea necesario.
3.  **`client:only`**: Salta el renderizado en el servidor y solo carga en el cliente (útil para componentes que usan APIs exclusivas del navegador como `window`).

---

## Resumen
La gestión de estados en Astro no busca "controlar toda la app", sino energizar pequeñas **islas** de interactividad. Lo ideal es mantener la mayor parte de la web estática y solo usar componentes con estado (`client:visible`) donde la experiencia de usuario lo requiera realmente.