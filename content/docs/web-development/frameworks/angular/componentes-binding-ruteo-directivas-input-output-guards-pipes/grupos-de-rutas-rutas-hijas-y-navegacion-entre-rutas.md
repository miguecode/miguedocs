---
title: "Grupos de rutas (rutas hijas) y Navegación entre rutas"
description: "Aprende a organizar tus rutas en Angular mediante Lazy Loading y descubre cómo navegar entre ellas usando RouterLink y el servicio Router."
---

## Grupos de rutas (Rutas hijas)

Para mantener una aplicación escalable y evitar que el archivo de rutas principal sea gigantesco, podemos agrupar las rutas relacionadas en archivos independientes utilizando **Lazy Loading**.

```typescript
// app.routes.ts
export const APP_ROUTES: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./views/auth/auth.routes').then(m => m.AUTH_ROUTES) 
  }
];
```

En este ejemplo, `loadChildren` carga un archivo de rutas secundario solo cuando el usuario intenta acceder a `/auth`. Todas las rutas definidas dentro de `auth.routes.ts` serán automáticamente "hijas" de la base `/auth`. Por ejemplo:

*   Si en `auth.routes.ts` definimos un path `'login'`, la URL final será `/auth/login`.
*   Si definimos un path `'register'`, la URL final será `/auth/register`.

Esta organización por carpetas (ej: `views/auth/`) mejora drásticamente la mantenibilidad del proyecto.

---

## Navegación mediante `routerLink`

Para que el usuario navegue sin recargar la página (comportamiento de SPA), Angular proporciona la directiva `routerLink`. Para usarla, debemos importar `RouterLink` en la propiedad `imports` de nuestro componente.

```html
<button routerLink="/home">Ir al Inicio</button>
```

### Rutas Absolutas vs. Relativas

Es fundamental entender la diferencia entre empezar el path con una barra diagonal o no:

*   **`/ruta` (Absoluta)**: Empieza siempre desde la raíz de la aplicación. No importa en qué sub-ruta nos encontremos, `/bienvenido` siempre irá a `tudominio.com/bienvenido`.
*   **`ruta` (Relativa)**: Se concatena a la ruta actual. Si estamos en `/auth` y pulsamos un `routerLink="login"`, navegaremos a `/auth/login`.

> [!TIP]
> También puedes usar `./ruta` para indicar explícitamente que es relativa al nivel actual, o `../ruta` para subir un nivel en la jerarquía de rutas.

---

## Navegación mediante Router (TypeScript)

A veces necesitamos navegar como respuesta a una acción lógica (por ejemplo, después de que un usuario rellene un formulario correctamente). Para esto, inyectamos el servicio `Router`.

```typescript
import { Router } from '@angular/router';

export class LoginPage {
  private router = inject(Router);

  iniciarSesion() {
    // Lógica de autenticación...
    if (loginExitoso) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
```

### Métodos principales:

1.  **`navigateByUrl(url: string)`**: Recibe un string con la ruta completa, similar a cómo funciona `routerLink`.
2.  **`navigate(commands: any[], extras?: NavigationExtras)`**: Es más versátil. Recibe un array de segmentos y permite pasar parámetros de consulta o fragmentos.

```typescript
// Navegación con parámetros dinámicos
const userId = 123;
this.router.navigate(['/usuario', userId]); // Navega a /usuario/123
```

Este enfoque lógico es ideal para flujos de control complejos, como redirigir al usuario al login si su sesión ha expirado o mandarlo a su perfil tras un registro exitoso.