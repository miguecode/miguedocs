---
title: "Configuración de Zoneless e Incremental Hydration"
description: "Aprende a configurar las últimas innovaciones de Angular: la eliminación de Zone.js (Zoneless) y la hidratación incremental para un rendimiento óptimo."
---

## Configurar Zoneless en Angular

Con las versiones más recientes de Angular, configurar una aplicación sin **Zone.js** (Zoneless) es sumamente sencillo. Al crear un nuevo proyecto con Angular CLI (`ng new`), el asistente nos preguntará explícitamente si deseamos habilitar esta característica.

```bash
ng new mi-app-moderna
? Do you want to create a 'zoneless' application without zone.js (Developer Preview) (y/N) y
```

Tras responder afirmativamente y configurar las opciones de estilos y renderizado (SSR/SSG), Angular configurará automáticamente el archivo `app.config.ts` de la siguiente manera:

```typescript
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Manejo global de errores en el navegador
    provideZonelessChangeDetection(),    // Habilita la detección de cambios sin Zone.js
    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};
```

### Transición desde el modo experimental
Anteriormente, para habilitar esta funcionalidad debíamos usar `provideExperimentalZonelessChangeDetection()`. El cambio al nombre actual refleja que la característica ha alcanzado estabilidad. Además, el proyecto se genera automáticamente sin el polyfill de `zone.js` en el archivo `angular.json`, reduciendo el tamaño final del bundle.

### Mejores prácticas con OnPush
Aunque usemos Zoneless, se sigue recomendando el uso de la estrategia de detección de cambios `OnPush` para maximizar el rendimiento. Puedes configurar el CLI para que todos tus componentes incluyan esta propiedad por defecto:

```json
"schematics": {
  "@schematics/angular:component": {
    "changeDetection": "OnPush"
  }
}
```

---

## El nuevo `provideBrowserGlobalErrorListeners()`

Este nuevo proveedor introducido en las versiones más recientes permite capturar y gestionar errores globales del navegador que ocurren fuera del ciclo de vida estándar de Angular, proporcionando una capa extra de robustez para el monitoreo de la aplicación.

---

## Configurar Incremental Hydration

La hidratación incremental permite que Angular aplique interactividad a las partes del HTML renderizado por el servidor de forma progresiva. Para activarla, añadimos `withIncrementalHydration()` a la configuración del cliente:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(
      withIncrementalHydration(), 
      withEventReplay()
    )
  ]
};
```

Con esta configuración activa, podemos utilizar triggers de hidratación en nuestros bloques `@defer`:

```html
@defer (hydrate on viewport) {
  <app-heavy-logic-component />
}
```

Esto garantiza que el código JavaScript necesario para este componente solo se descargue y ejecute cuando el usuario lo tenga a la vista, optimizando tanto el tiempo de carga como el consumo de memoria del navegador.