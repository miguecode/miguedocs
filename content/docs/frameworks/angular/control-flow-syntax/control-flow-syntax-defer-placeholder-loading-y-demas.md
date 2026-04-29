---
title: "Control Flow Syntax (Bloque @defer)"
description: "Optimiza el rendimiento de tu aplicación Angular utilizando el bloque @defer para posponer la carga de componentes no críticos hasta que sean necesarios."
---

## Bloque `@defer`

El bloque **`@defer`** es una de las características más potentes introducidas en las versiones modernas de Angular (v17+). Permite posponer la carga de partes no críticas de la aplicación, aplicando **Lazy Loading** a nivel de componentes o plantillas internas.

Esto mejora drásticamente la experiencia de usuario (CWV - *Core Web Vitals*), ya que permite mostrar una interfaz progresiva y reduce el tiempo de la carga inicial. Va de la mano con el concepto de **Hidratación Incremental**.

```html
@defer (when isImageVisible) {
  <img src="large-asset.jpg" alt="Diferred Image">
}

@if (!isImageVisible) {
  <button (click)="showImage()">Ver imagen</button>
}
```

En este ejemplo, el código necesario para renderizar la imagen no se descarga hasta que `isImageVisible` cambie a `true`.

---

## Bloques Auxiliares de Defer

El bloque `@defer` trabaja en conjunto con otros tres bloques para gestionar los estados intermedios:

*   **`@placeholder`**: Se muestra inicialmente, antes de que se cumpla la condición de carga. Es el estado "por defecto".
*   **`@loading`**: Se muestra mientras el contenido diferido se está descargando/preparando. Permite evitar "parpadeos" visuales.
*   **`@error`**: Se muestra si ocurre un fallo al intentar cargar el recurso (ej: error de red).

### Configuración de tiempos en `@loading`
Puedes ajustar cuándo aparece el cargador y cuánto tiempo mínimo debe permanecer en pantalla:

```html
@defer (when isContentReady) {
  <app-heavy-component />
} @loading (after 200ms; minimum 2s) {
  <p>Cargando componente pesado... 😴</p>
} @placeholder {
  <p>Preparando el espacio...</p>
} @error {
  <p>Error al cargar el contenido. Intente de nuevo.</p>
}
```

*   **`after 200ms`**: Espera 200ms antes de mostrar el bloque `@loading`. Si la carga es instantánea, el usuario nunca verá el cargador.
*   **`minimum 2s`**: Si el cargador aparece, se mantendrá visible al menos 2 segundos, incluso si la carga termina antes. Esto evita el efecto de "flash" visual que confunde al usuario.

---

## Disparadores (Triggers) Avanzados

Además de la condición manual `when`, Angular ofrece disparadores declarativos basados en eventos del sistema o del usuario:

| Disparador | Descripción |
| :--- | :--- |
| **`on idle`** | Carga el contenido cuando el navegador ya no tiene tareas críticas pendientes (estado inactivo). |
| **`on viewport`** | Carga cuando el elemento (o su placeholder) entra en el área visible del navegador. |
| **`on interaction`** | Carga cuando el usuario hace clic o interactúa con el placeholder. |
| **`on hover`** | Carga cuando el cursor del ratón pasa por encima del elemento. |
| **`on timer(X)`** | Carga automáticamente tras pasar una cantidad de tiempo definida (ej: `500ms`). |
| **`on immediate`** | Ejecuta la carga en cuanto el componente principal termina de renderizarse. |

### Ejemplos de Triggers

**Por Visibilidad (Viewport):**
```html
@defer (on viewport) {
  <app-chart-data />
} @placeholder {
  <div>Desliza hacia abajo para ver el gráfico</div>
}
```

**Por Interacción Específica:**
```html
<button #triggerBtn>Activar Mapa</button>

@defer (on interaction(triggerBtn)) {
  <app-google-map />
}
```

### Prefetching (Pre-carga)
Puedes combinar disparadores para cargar el código antes de que se necesite mostrar. Por ejemplo, cargar el código cuando el navegador esté libre (`idle`) pero no mostrarlo hasta que el usuario interactúe:

```html
@defer (on interaction; prefetch on idle) {
  <app-complex-form />
} @placeholder {
  <button>Abrir Formulario</button>
}
```
Esto garantiza que, cuando el usuario haga clic, el componente ya esté en memoria y aparezca instantáneamente.