---
title: "Guards (Para el ruteo)"
description: "Maneja la seguridad y el acceso a tus rutas en Angular utilizando Guards para permitir, bloquear o redirigir a los usuarios según su estado o permisos."
---

## Route Guards

Los **Route Guards** son servicios o funciones que Angular ejecuta antes de navegar a una ruta específica. Su propósito fundamental es determinar si la navegación es permitida, bloqueada o si el usuario debe ser redirigido a otra página. Es un concepto similar a los Middlewares en otros ecosistemas de desarrollo.

### Creación con Angular CLI

Para crear un guard desde la terminal, usamos el siguiente comando:

```bash
ng generate guard guards/auth
```

Al ejecutarlo, la consola nos preguntará qué tipo de interfaz queremos implementar. Estas son las opciones principales:

1.  **`canActivate`**: El más común. Determina si un usuario puede entrar a una ruta (ej: ¿está logueado?).
2.  **`canActivateChild`**: Controla el acceso a todas las rutas hijas de una ruta principal.
3.  **`canDeactivate`**: Útil para preguntar al usuario si realmente quiere abandonar una página (ej: tiene cambios sin guardar en un formulario).
4.  **`canMatch`**: Verifica si una ruta coincide con la configuración antes de descargar el código del componente (ideal para lazy loading).
5.  **`resolve`**: Pre-procesa o recupera datos antes de que la ruta se cargue para que el componente ya los tenga disponibles al iniciar.

---

## Implementación en el Ruteo

Una vez creado el guard, debemos aplicarlo en la definición de nuestras rutas. La sintaxis en el archivo `app.routes.ts` es la siguiente:

```typescript
export const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard] // Aplicamos el guard aquí
  }
];
```

Podemos asignar varios guards a una misma ruta pasándolos dentro del array `[guard1, guard2]`. Los guards se ejecutarán en el orden en que aparecen.

---

## Lógica del Guard

Los guards modernos en Angular suelen definirse como funciones. El guard debe retornar un booleano, una `UrlTree` (para redirigir), una `Promise` o un `Observable`.

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Acceso permitido
  } else {
    // Si no está logueado, lo redirigimos al login
    return router.parseUrl('/login'); 
  }
};
```

> [!TIP]
> Es una excelente práctica que el propio guard maneje la redirección (devolviendo una `UrlTree` mediante `router.parseUrl`) en lugar de simplemente retornar `false`, ya que así el usuario tendrá una respuesta clara de por qué no pudo entrar a la sección.