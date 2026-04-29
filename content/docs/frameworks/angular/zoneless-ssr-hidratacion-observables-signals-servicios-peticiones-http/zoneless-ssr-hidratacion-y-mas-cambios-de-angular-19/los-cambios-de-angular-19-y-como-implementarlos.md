---
title: "Novedades de Angular 19+: Implementación y Guía"
description: "Aprende a implementar los últimos cambios de Angular (v17-v20): Hidratación Incremental, modo Zoneless, SSR avanzado y herramientas de migración a Signals."
---

## Evolución de la Hidratación en Angular

Con las versiones 17 y 19, Angular ha transformado la forma en que el navegador recibe y activa las aplicaciones con **SSR (Server Side Rendering)**.

*   **Hidratación Total (v17)**: Angular hidrata todos los componentes del HTML inmediatamente. Esto descarga y ejecuta todo el JavaScript "de golpe", lo que puede afectar el rendimiento inicial en sitios web muy grandes.
*   **Hidratación Incremental (v19/v20)**: Permite hidratar componentes **bajo demanda** utilizando la sintaxis `@defer`. El JavaScript solo se descarga y ejecuta cuando el componente entra en el visor (*viewport*) o cuando el usuario interactúa con él.

### Comparativa de Hidratación

| Característica | Hidratación Total (v17) | Hidratación Incremental (v19) |
| :--- | :--- | :--- |
| **Activación** | Todo al mismo tiempo. | Bajo demanda (viewport/clic). |
| **Performance Inicial** | Estándar. | Alta (carga diferida). |
| **Control del Desarrollador** | Automático. | Granular (bloques `@defer`). |
| **Ideal para** | Landing pages y blogs. | Aplicaciones SaaS empresariales. |

---

## Implementación de Detección de Cambios Zoneless

El modo **Zoneless** elimina la dependencia de `Zone.js`, delegando la detección de cambios a la reactividad de las Signals.

### 1. Configuración Global (`app.config.ts`)
En versiones experimentales de v18/v19 se usaba `provideExperimentalZonelessChangeDetection`. En **v20**, ya es una API estable.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // Desactiva Zone.js
    provideRouter(routes),
    provideClientHydration(
      withIncrementalHydration(), // Activa hidratación bajo demanda
      withEventReplay()           // "Graba" clics antes de la hidratación
    )
  ]
};
```

### 2. Estrategia OnPush Automática
Para que Zoneless funcione correctamente, los componentes deben usar la estrategia `OnPush`. Podemos automatizar esto en el archivo `angular.json`:

```json
"schematics": {
  "@schematics/angular:component": {
    "changeDetection": "OnPush"
  }
}
```

---

## Hidratación Incremental con `@defer`

Una vez configurado en los providers, podemos usarla en las plantillas. Esto pospone la "activación" (hidratación) del JavaScript hasta que se cumpla la condición.

```html
<!-- Cargar el componente pero hidratarlo solo al interactuar -->
@defer (hydrate on interaction) {
  <app-calendario-pesado />
}

<!-- Hidratar cuando el componente sea visible en pantalla -->
@defer (hydrate on viewport) {
  <app-grafico-complejo />
}

<!-- Esperar a que el navegador esté libre antes de hidratar -->
@defer (hydrate when iddle) {
  <app-footer />
}
```

---

## Primitivas de Sincronización para SSR

Cuando trabajamos **Zoneless** con **SSR**, Angular no sabe automáticamente cuándo una petición HTTP ha terminado para enviar la respuesta. La primitiva `pendingUntilEvent` soluciona esto.

```typescript
import { pendingUntilEvent } from '@angular/core';

getData(): Observable<any> {
  const injector = inject(Injector);
  
  return this.http.get('/api/data').pipe(
    pendingUntilEvent(injector), // Angular esperará a esta petición antes de enviar el HTML
    catchError(() => EMPTY)
  );
}
```

---

## Solución de Errores Comunes de SSR

### 1. Acceso a LocalStorage
`localStorage` no existe en el servidor. Debemos proteger las llamadas:

```typescript
import { isPlatformBrowser } from '@angular/common';

export class MiComponente {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
       const token = localStorage.getItem('auth_token');
    }
  }
}
```

### 2. Renderizado Híbrido (Cliente/Servidor)
Si un componente es incompatible con SSR, podemos forzarlo a renderizarse solo en el cliente en el archivo `app.routes.server.ts`:

```typescript
export const serverRoutes: ServerRoute[] = [
  { path: 'dashboard', renderMode: RenderMode.Client }, // Solo Browser
  { path: '**', renderMode: RenderMode.Prerender }      // Resto Servidor
];
```

---

## Herramientas de Migración Automática

Angular CLI provee comandos (*schematics*) para migrar componentes antiguos a la nueva reactividad de Signals:

```bash
# Migrar todo a Signals (Inputs, Outputs, Queries)
ng generate @angular/core:signals

# Migraciones individuales
ng generate @angular/core:signal-input-migration
ng generate @angular/core:signal-output-migration
ng generate @angular/core:signal-queries-migration
```