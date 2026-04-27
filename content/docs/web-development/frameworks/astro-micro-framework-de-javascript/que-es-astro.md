---
title: "Introducción a Astro"
description: "Aprende qué es Astro, sus características principales y por qué es el framework ideal para sitios web enfocados en el contenido y la velocidad."
---

## ¿Qué es Astro?

Astro es un framework de desarrollo web moderno diseñado para crear sitios web rápidos y centrados en el contenido. A diferencia de otros frameworks tradicionales, Astro permite integrar bibliotecas externas como **React, Vue, Svelte o Solid**, pero no te obliga a usar ninguna de ellas. Puedes construir toda tu web usando exclusivamente HTML, CSS y JavaScript nativo.

---

## Características Principales

### 1. Enfoque en Contenido Estático
Astro es ideal para sitios donde la velocidad de carga y el SEO son prioridades absolutas. Algunos ejemplos comunes son:
*   Blogs y Sitios de documentación (como Starlight).
*   Landing pages y Portafolios.
*   E-commerce y Sitios de marketing.

### 2. Arquitectura de Islas (*Islands Architecture*)
Es su concepto más revolucionario. Significa que Astro renderiza todo como HTML estático por defecto. Si una parte específica de tu web necesita interactividad (como un carrusel o un carrito), Astro solo carga el JavaScript necesario para **esa "isla" específica**, manteniendo el resto de la página ligera y rápida.

### 3. Cero JavaScript por defecto
Astro envía **0 líneas de JavaScript** al navegador del cliente de forma predeterminada. El código de JavaScript que escribes en tus archivos `.astro` se ejecuta en el servidor durante el build, enviando solo HTML puro al usuario final.

### 4. Simplicidad vs. Frameworks SPA
A diferencia de Angular o React (que están pensados para aplicaciones de una sola página o SPAs complejas), Astro es mucho más liviano y simple. Se centra en la navegación tradicional entre páginas, lo que resulta en sitios mucho más eficientes y fáciles de mantener.

---

## Ecosistema y Plantillas
Astro cuenta con una vibrante comunidad y miles de plantillas gratuitas. Una de las más destacadas es **Starlight**, diseñada específicamente para crear sitios de documentación de alta calidad con un esfuerzo mínimo.