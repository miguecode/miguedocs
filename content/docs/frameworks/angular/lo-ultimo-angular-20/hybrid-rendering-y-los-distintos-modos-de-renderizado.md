---
title: "Hybrid Rendering y Modos de Renderizado"
description: "Optimiza la entrega de tu aplicación Angular configurando diferentes modos de renderizado (CSR, SSR, SSG) para cada ruta según tus necesidades de SEO y rendimiento."
---

## Hybrid Rendering en Angular

El **Hybrid Rendering** es una estrategia avanzada que permite renderizar diferentes partes de una aplicación en distintos entornos. En lugar de forzar a toda la aplicación a usar un solo método, podemos decidir qué rutas se renderizan en el servidor, cuáles en el cliente y cuáles se pre-generan de forma estática.

Esta configuración se gestiona en las versiones modernas de Angular a través del archivo de rutas del servidor, normalmente `app.routes.server.ts`:

```typescript
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client, // Client Side Rendering (CSR)
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender, // Static Site Generation (SSG)
  },
  {
    path: 'profile',
    renderMode: RenderMode.Server, // Server Side Rendering (SSR)
  },
  {
    path: '**', 
    renderMode: RenderMode.Server, // Server Side Rendering (SSR) por defecto
  }
];
```

Para que esta configuración surta efecto, asegúrate de que tu archivo `app.config.server.ts` esté utilizando el proveedor correspondiente:

```typescript
import { provideServerRendering } from '@angular/platform-server';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};
```

---

## Los 3 Modos de Renderizado

### 1. Client Side Rendering (CSR)
Es el modo tradicional de Angular (SPA). El servidor envía un archivo HTML prácticamente vacío y es el navegador del usuario quien descarga, procesa y ejecuta el JavaScript para construir la interfaz.

*   **Ventajas**: Menor carga computacional inicial para el servidor. Navegación instantánea tras la carga inicial.
*   **Desventajas**: Tiempo de primera pintura (FCP) más lento. SEO pobre si el contenido depende exclusivamente del JS.
*   **Ideal para**: Paneles de administración, dashboards privados o cualquier sección que no requiera indexación en buscadores.

### 2. Server Side Rendering (SSR)
El servidor genera el HTML completo con datos reales antes de enviarlo al navegador. Angular se ejecuta en el servidor (Node.js) para cada petición.

*   **Ventajas**: Contenido visible casi al instante. SEO excelente.
*   **Desventajas**: Mayor consumo de recursos en el servidor. Mayor tiempo de respuesta del servidor (TTFB).
*   **Ideal para**: Secciones dinámicas que necesitan visibilidad en buscadores, como perfiles públicos, detalles de productos o feeds de noticias.

### 3. Static Site Generation (SSG / Prerendering)
El HTML se genera una sola vez durante el proceso de **build**. El resultado son archivos HTML estáticos que se sirven directamente desde un servidor web o CDN.

*   **Ventajas**: Rendimiento máximo (carga casi instantánea). SEO perfecto. Seguridad mejorada.
*   **Desventajas**: El contenido es estático; si los datos cambian, es necesario volver a compilar y desplegar la aplicación.
*   **Ideal para**: Páginas informativas que cambian poco, como "Sobre nosotros", "FAQ", documentación técnica o landing pages comerciales.

---

## Conclusión

El **Hybrid Rendering** es la clave para aplicaciones modernas que no quieren sacrificar el SEO por el rendimiento, permitiendo que Angular sea tan flexible como sea necesario, adaptándose a las necesidades específicas de cada página de tu proyecto.
