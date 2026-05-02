---
title: "Modo Estricto (Use Strict)"
description: "Cómo el Modo Estricto de JavaScript ayuda a escribir un código más seguro, corrigiendo errores silenciosos y evitando malas prácticas."
---


## ¿Qué es el Modo Estricto?

El **Modo Estricto** (*Strict Mode* o `use strict`) es una funcionalidad que corrige muchos errores silenciosos de JavaScript. En realidad, más allá de corregirlos, nos avisa de ellos. En lugar de ignorar fallos que podrían ser errores humanos, hace que el motor lance una **excepción** en tiempo de ejecución.

### Beneficios principales:
*   Convierte errores silenciosos en excepciones explícitas.
*   Mejora la optimización del código, logrando mejores tiempos de ejecución en algunos motores.
*   Evita malas prácticas y sintaxis propensas a errores que no están permitidas en versiones modernas del lenguaje (ES5+).
*   Hace que el código sea más seguro y predecible.

## ¿Por qué no viene activado por defecto?

No es el estándar por defecto simplemente para mantener la **retrocompatibilidad** con millones de sitios web antiguos. Cuando se introdujo en ES5 (2009), ya existía una enorme cantidad de código escrito sin estas reglas. Activarlo por defecto habría roto scripts funcionales de un día para el otro.

Sin embargo, en el desarrollo profesional moderno, se espera su uso. De hecho:
*   Los **frameworks modernos** (React, Angular, Vue) y **TypeScript** lo activan automáticamente.
*   Al usar **módulos de JavaScript** (`import`/`export`), el modo estricto se activa por defecto.
*   Muchos linters como **ESLint** recomiendan o exigen su activación.

## Cómo activar el Modo Estricto

Para activarlo, debemos escribir el literal `"use strict";` en la primera línea de nuestro archivo o de una función.

```javascript
"use strict"; // Activación global en el archivo

nombre = "Juan"; // Lanza una excepción: "nombre is not defined"
```

También puede activarse localmente dentro de una función:

```javascript
function miFunc() {
  "use strict";
  // Solo este bloque se rige por las reglas del modo estricto
}
```

## ¿Qué restricciones impone técnicamente?

Si usas el Modo Estricto, JavaScript lanzará una excepción si intentas realizar cualquiera de las siguientes acciones:

1.  **Declarar variables sin palabra clave**: No se puede omitir `let`, `const` o `var`.
2.  **Modificar propiedades no modificables**: Intentar escribir en propiedades definidas como `non-writable` mediante `Object.defineProperty()`.
3.  **Extender objetos protegidos**: Intentar agregar propiedades a un objeto al que se le aplicó `Object.preventExtensions()`.
4.  **Eliminar elementos protegidos**: Intentar usar `delete` sobre una variable o un objeto que no permite ser eliminado.
5.  **Duplicar nombres de parámetros**: Definir una función con dos parámetros que tengan el mismo nombre.
6.  **Usar palabras reservadas**: Declarar variables con nombres que el lenguaje reserva para el futuro (ej: `interface`, `private`, `protected`).
7.  **`this` sin contexto**: En modo estricto, si una función no es un método de un objeto, su `this` será `undefined` en lugar de apuntar a `window`.
8.  **Números octales antiguos**: No permite el uso de literales octales antiguos (ej: `010`).
9.  **Asignar a getters**: Intentar asignar un valor a una propiedad que solo tiene definido un `get` (sin su correspondiente `set`).
10. **Scope en `eval`**: Las variables declaradas dentro de un `eval` no se filtran al scope exterior.
11. **Uso de `with`**: La sentencia `with` está prohibida por ser confusa y poco óptima.
12. **Arguments**: Ya no se sincronizan los parámetros de la función con el objeto `arguments`.