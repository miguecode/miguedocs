---
title: "Ruteo básico, router-outlet y Lazy Loading"
description: "Aprende los fundamentos del ruteo en Angular, desde el uso de router-outlet hasta la optimización de rendimiento con Lazy Loading."
---

## Ruteo en Angular

En Angular, las aplicaciones se comportan como **SPA** (*Single Page Application*). Esto significa que la página real nunca se recarga por completo; en su lugar, el framework intercepta los cambios en la URL y actualiza únicamente los componentes necesarios.

Para lograr esto, Angular utiliza la **History API** nativa del navegador. Al navegar, Angular maneja el ruteo en memoria y muestra el componente correspondiente a la nueva URL sin realizar una petición HTTP completa para cada vista.

## La etiqueta `<router-outlet />`

El **`router-outlet`** es una directiva fundamental que actúa como un "marcador de posición" o "espacio dinámico". Es el lugar exacto donde Angular renderizará el componente que coincida con la ruta actual.

Normalmente, el archivo `app.component.html` contendrá elementos estáticos (como una Navbar o Footer) y la etiqueta del ruteador:

```html
<nav>...</nav>

<!-- Aquí se cargarán dinámicamente los componentes según la URL -->
<router-outlet />

<footer>...</footer>
```

---

## Configuración de rutas (`app.routes.ts`)

Las rutas se definen en un array de objetos de tipo `Routes`. Cada objeto mapea un path (segmento de la URL) con un componente.

```typescript
import { Routes } from '@angular/router';
import { BienvenidoComponent } from './views/bienvenido.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent } // Ruta comodín (404)
];
```

### Propiedades clave:
*   **`path`**: El segmento de texto que aparecerá en la URL.
*   **`component`**: La clase del componente que se debe instanciar cuando el path coincide.
*   **`redirectTo`**: Redirige automáticamente de un path a otro (ideal para la ruta raíz).
*   **`pathMatch`**: Define la estrategia de coincidencia. `full` significa que la URL debe ser exactamente igual al path indicado (importante en la ruta de redirección inicial).
*   **`**` (Comodín)**: Esta ruta atrapa cualquier URL que no coincida con las anteriores. **Debe ser siempre la última** en el array, ya que Angular procesa las rutas en orden descendente.

---

## Optimización con Lazy Loading

Por defecto, Angular carga todos los componentes definidos en el ruteador apenas se inicia la aplicación. Esto puede hacer que la carga inicial sea lenta si el proyecto es grande.

El **Lazy Loading** (carga perezosa) permite descargar el código de un componente únicamente cuando el usuario navega hacia su ruta específica.

Para aplicar Lazy Loading a nivel de componente, sustituimos `component` por **`loadComponent`**:

```typescript
// En lugar de importar el componente al inicio del archivo,
// lo cargamos dinámicamente:
{
  path: 'dashboard',
  loadComponent: () => import('./views/dashboard/dashboard.component')
                         .then(m => m.DashboardComponent)
}
```

### Ventajas del Lazy Loading:
*   **Carga inicial más rápida**: El navegador descarga un archivo principal mucho más pequeño.
*   **Menor consumo de datos**: Solo se descarga el código de las secciones que el usuario realmente visita.
*   **Mejor escalabilidad**: Ideal para aplicaciones con cientos de vistas.