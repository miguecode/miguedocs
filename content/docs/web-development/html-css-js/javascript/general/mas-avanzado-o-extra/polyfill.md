---
title: "Polyfill"
description: "Un polyfill es un fragmento de código (generalmente en JavaScript) que agrega compatibilidad con una funcionalidad nueva del lenguaje en navegadores que todavía..."
---



- Un polyfill es un fragmento de código (generalmente en JavaScript) que agrega compatibilidad con una funcionalidad nueva del lenguaje en navegadores que todavía no la soportan nativamente.

- Es como un "parche" que simula el comportamiento de una función moderna, para que podamos usarla incluso en entornos más viejos.


## Ejemplo con Array.includes()

- Supongamos que queremos usar el método Array.prototype.includes() (que se agregó en ES2016). Pero... ¿y si el navegador del usuario es viejo y no lo tiene?

- **Podemos usar un polyfill como este**: 

```typescript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(elemento) {
    return this.indexOf(elemento) !== -1;
  };
}
```
- Y ahora, aunque el navegador no tenga la función includes(), gracias al polyfill que hicimos podemos usarlo igual, y va a funcionar. Básicamente es codificar el cuerpo de una función.


## ¿Y para qué sirven?

- Para que funcionalidades modernas como Promise, fetch, Object.assign, etc. funcionen en navegadores antiguos.
- Para evitar tener que hacer versiones alternativas del código.
- Son MUY usados en frameworks como Babel, que transpilan el código moderno a uno más viejo + le agregan polyfills para que todo funcione correctamente.


- Si usamos Babel + Webpack (o Vite), podemos incluir automáticamente polyfills de cosas como Array.flat(), Itnl, Map, Set, WeakMap, fetch(), etc. Para eso, simplemente instalamos paquetes como:

```text
npm install core-js
```
- **Y configuraciones como**: 

```typescript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```
- En conclusión, un polyfill es un bloque de código que agrega soporte a funciones nuevas en entornos viejos o en entornos que por algún motivo no tienen dicha funcionalidad. Esto sirve para que nuestro código funcione en todos los navegadores, y es algo que podemos aplicar en funcionalidades relativamente nuevas como includes(), fetch, etc.