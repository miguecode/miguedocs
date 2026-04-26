---
title: "HTML Web Components"
description: "Los Web Components permiten crear componentes reutilizables en HTML puro, sin necesidad de Frameworks."
---


## 🧩 HTML5 Web Components

Los **Web Components** son un conjunto de tecnologías que permiten crear etiquetas HTML personalizadas, reutilizables y encapsuladas. Lo mejor es que funcionan de forma nativa en el navegador, sin necesidad de librerías externas como React o Vue.

---

## 🏛️ Los 3 Pilares Fundamentales

| Tecnología | Descripción |
| :--- | :--- |
| **`<template>`** | Define fragmentos de HTML que no se renderizan al cargar la página, se usan mediante JavaScript. |
| **`<slot>`** | Espacios reservados dentro del componente donde el usuario puede insertar su propio contenido. |
| **Shadow DOM** | Crea un DOM separado para el componente, aislando sus estilos y lógica del resto de la página. |

---

## 🛠️ Ejemplo Práctico: Creando un Botón Personalizado

### 1. El Template (Estructura y Estilo)
```html
<template id="boton-template">
  <style>
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
  <button>
    <slot>Texto por defecto</slot> 
  </button>
</template>
```

### 2. La Lógica (JavaScript)
```javascript
class MiBoton extends HTMLElement {
  constructor() {
    super();
    // 1. Obtenemos el contenido del template
    const template = document.getElementById("boton-template").content;
    // 2. Creamos el Shadow DOM (encapsulación)
    const shadowRoot = this.attachShadow({ mode: "open" });
    // 3. Clonamos el template y lo añadimos al Shadow DOM
    shadowRoot.appendChild(template.cloneNode(true));
  }
}

// Registramos el nuevo elemento con un nombre que incluya un guion (-)
customElements.define("mi-boton", MiBoton);
```

### 3. Uso en el HTML
```html
<mi-boton>Enviar Formulario</mi-boton>
<mi-boton>Cancelar</mi-boton>
```

---

## 💡 Ventajas de usar Web Components
- **Reutilización**: Puedes llevarte tu componente a cualquier proyecto simplemente copiando el código.
- **Encapsulación**: El CSS del componente no afectará al resto de tu web, y viceversa (gracias al **Shadow DOM**).
- **Nativo**: No requiere instalaciones de dependencias ni procesos de compilación complejos.
- **Interoperabilidad**: Funcionan bien con cualquier framework o incluso sin ninguno.

> [!TIP]
> Recuerda que los nombres de los Custom Elements **deben tener obligatoriamente un guion** (ej: `nombre-componente`) para evitar conflictos con etiquetas estándar actuales o futuras de HTML.