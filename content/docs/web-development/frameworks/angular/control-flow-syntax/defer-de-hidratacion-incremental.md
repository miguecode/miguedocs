---
title: "Defer y Hidratación Incremental"
description: "Aprende a gestionar la hidratación de tus componentes de forma manual y progresiva en Angular utilizando disparadores de hidratación en bloques @defer."
---

## Hidratación en `@defer`

Además de controlar cuándo se renderiza un componente mediante el disparador `on`, Angular permite controlar cuándo se debe **hidratar** un componente utilizando el disparador **`hydrate on`**. Esto forma parte de la **Hidratación Incremental**, una técnica avanzada para optimizar aplicaciones que utilizan SSR (*Server Side Rendering*) o Prerendering.

### ¿Qué es la Hidratación?
La hidratación es el proceso mediante el cual Angular "da vida" al HTML estático enviado por el servidor. Consiste en adjuntar los event listeners de JavaScript y establecer el estado de los componentes para que la página sea interactiva. Con la hidratación incremental, podemos decidir qué partes de la página se vuelven funcionales y en qué momento exacto.

---

## Configuración Inicial

Para habilitar esta característica, debemos configurar nuestra aplicación en el archivo `app.config.ts`:

```typescript
import { provideClientHydration, withIncrementalHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      withIncrementalHydration(), 
      withEventReplay()
    )
  ]
};
```

---

## Disparadores de Hidratación

Los disparadores de hidratación siguen la misma lógica que los disparadores de renderizado, pero actúan sobre la lógica del componente en lugar de su presencia física en el DOM.

| Disparador | Descripción |
| :--- | :--- |
| **`hydrate on idle`** | Hidrata el componente cuando el navegador está inactivo (sin tareas críticas). |
| **`hydrate on viewport`** | Hidrata el componente solo cuando entra en el área visible del usuario. |
| **`hydrate on interaction`** | Hidrata únicamente cuando el usuario interactúa (clic, teclado) con el elemento. |
| **`hydrate on hover`** | Hidrata cuando el usuario pasa el cursor sobre el componente. |
| **`hydrate on timer(X)`** | Pospone la hidratación una cantidad de tiempo definida. |
| **`hydrate on immediate`** | Hidrata lo antes posible después del renderizado inicial. |

### Ejemplos de uso

**Hidratación por scroll:**
```html
@defer (hydrate on viewport) {
  <app-heavy-charts />
}
```
Esto permite que el gráfico sea visible (HTML/CSS), pero que el código JavaScript pesado que lo controla no se ejecute hasta que el usuario llegue a esa sección de la página.

**Hidratación por interacción con disparador externo:**
```html
<button #loadBtn>Activar Funcionalidad</button>

@defer (hydrate on interaction(loadBtn)) {
  <app-interactive-editor />
}
```

---

## Combinando Renderizado e Hidratación

Una de las potencias de esta sintaxis es que podemos separar el momento en que un componente aparece en el DOM del momento en que se vuelve interactivo:

```html
@defer (on idle; hydrate on interaction) {
  <app-complex-widget />
}
```

**Explicación del flujo:**
1.  **`on idle`**: El componente se renderiza (descarga su HTML y estilos) cuando el navegador está libre.
2.  **`hydrate on interaction`**: El componente se vuelve funcional (descarga y ejecuta su lógica JS) solo cuando el usuario interactúa con él.

Esta combinación es la clave para alcanzar un rendimiento excepcional, cargando solo lo indispensable y en el orden más eficiente para el usuario final.