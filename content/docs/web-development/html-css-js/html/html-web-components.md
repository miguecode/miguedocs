---
title: "HTML Web Components"
description: "Los Web Components permiten crear componentes reutilizables en HTML puro, sin necesidad de Frameworks."
---


## HTML5 Web Components (`<template>`, `<slot>`, shadow DOM)

- Los Web Components permiten crear componentes reutilizables en HTML puro, sin necesidad de Frameworks.

- ¿Qué son?
- Son piezas de HTML, CSS y JS que se pueden encapsular y reutilizar. No contaminan el DOM global.

- **Los 3 pilares de los Web Components son**: 
1️. `<template>` → Define un bloque de código HTML que no se renderiza hasta que lo usamos.
2️. `<slot>` → Permite insertar contenido dinámico dentro del componente.
3️. Shadow DOM → Aisla estilos y comportamiento del componente del resto de la página.


## Ejemplo de Web Component

<template id="boton-template">
```css
<style>
    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
<button>
    <slot>Click aquí</slot>  <!-- Permite personalizar el texto -->
</button>
```
`</template>`

`<script>`
class MiBoton extends HTMLElement {
```typescript
constructor() {
    super();
    let template = document.getElementById("boton-template").content;
    let shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.cloneNode(true));
}
```
}
customElements.define("mi-boton", MiBoton);
`</script>`

<!-- Uso del Web Component -->
`<mi-boton>`Enviar`</mi-boton>`
`<mi-boton>`Cancelar`</mi-boton>`

- **Explicación**: 
- El `<template>` define el HTML pero no se renderiza automáticamente.
- El `<slot>` permite personalizar el texto dentro del botón.
- El shadow DOM encapsula estilos, evitando conflictos con otros estilos globales.

- **Ventaja**: 
- Esto es HTML puro, sin depender de, por ejemplo, React o Vue, y se puede usar en cualquier proyecto.