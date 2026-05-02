---
title: "Polyfill"
description: "Qué es un Polyfill y cómo garantizan la compatibilidad de funciones modernas en navegadores antiguos."
---


## ¿Qué es un Polyfill?

Un **polyfill** es un fragmento de código (generalmente escrito en JavaScript) que agrega compatibilidad a una funcionalidad nueva del lenguaje en navegadores que todavía no la soportan de forma nativa.

Podemos imaginarlo como un "parche" que simula el comportamiento de una función moderna, permitiéndonos escribir código de vanguardia que funcione incluso en entornos antiguos.

## Ejemplo práctico: `Array.includes()`

Supongamos que queremos usar el método `Array.prototype.includes()` (añadido en la versión ES2016). Si un usuario accede a nuestro sitio desde un navegador viejo que no reconoce este método, la aplicación fallará.

Para evitarlo, podemos implementar un polyfill manual:

```javascript
// Si el método no existe en el prototipo de Array...
if (!Array.prototype.includes) {
  // ...lo definimos nosotros usando lógica de bajo nivel (indexOf)
  Array.prototype.includes = function(elemento) {
    return this.indexOf(elemento) !== -1;
  };
}
```

Gracias a este bloque de código, ahora podemos usar `.includes()` en cualquier navegador; si el navegador es moderno, usará su versión interna nativa; si es antiguo, usará la función que acabamos de definir.

## ¿Para qué sirven?

*   **Compatibilidad**: Permiten que funciones como `Promise`, `fetch` o `Object.assign` operen en navegadores legacy.
*   **Uniformidad**: Evitan que el desarrollador tenga que escribir versiones alternativas de su código (shims) para diferentes navegadores.
*   **Transpilación**: Son el complemento ideal de herramientas como **Babel**. Mientras Babel cambia la sintaxis (ej: de `() => {}` a `function() {}`), los polyfills agregan los métodos y objetos que faltan.

## Polyfills automáticos con `core-js`

En proyectos modernos que usan Vite, Webpack o Babel, no solemos escribir los polyfills a mano. En su lugar, instalamos paquetes que contienen miles de polyfills estandarizados:

```bash
npm install core-js
```

Luego, se importan al inicio del proyecto (normalmente en el punto de entrada `index.js` o `main.js`):

```javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime'; // Necesario para funciones generadoras y async/await
```

En conclusión, un **polyfill** garantiza que nuestro código sea universal, permitiendo aprovechar las últimas novedades de JavaScript sin dejar atrás a los usuarios de navegadores más antiguos.