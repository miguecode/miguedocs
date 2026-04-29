---
title: "Interceptores"
description: "Aprende a capturar y modificar peticiones y respuestas HTTP de forma global en Angular utilizando interceptores para autenticación, logs o manejo de errores."
---

## Interceptores en Angular

Un **interceptor** es una pieza de código que captura las peticiones HTTP que salen de tu aplicación hacia un servidor y las respuestas que regresan de él. Actúa como un middleware que permite aplicar lógica común de forma centralizada sin tener que repetir código en cada servicio.

### Casos de uso comunes

| Caso de uso | Descripción |
| :--- | :--- |
| **Autenticación** | Adjunta automáticamente un token JWT (Bearer) en los headers de cada petición. |
| **Manejo de errores** | Redirige al login si recibes un error 401 o muestra mensajes globales de error. |
| **Carga / Spinners** | Activa un loader global al iniciar una petición y lo oculta al finalizar. |
| **Logs / Debug** | Imprime en consola todas las peticiones enviadas para depuración. |
| **Transformación** | Modifica el cuerpo de la petición o los headers antes del envío. |

---

## Implementación de un Interceptor

En las versiones modernas de Angular (v15+), se recomienda el uso de **interceptores funcionales**, aunque la arquitectura basada en clases sigue siendo válida.

### Ejemplo: Interceptor de Autenticación (Funcional)
Este es el enfoque más limpio y moderno:

```typescript
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Clonamos la petición para añadir el encabezado (las peticiones son inmutables)
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  // Pasamos la petición modificada al siguiente paso
  return next(authReq);
};
```

---

## Configuración en los Providers

Para que el interceptor funcione, debemos registrarlo en la configuración global de la aplicación (`app.config.ts` o `main.ts`):

```typescript
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]) // Registramos el interceptor funcional aquí
    )
  ]
};
```

---

## Cómo funciona el ciclo de vida

Cuando realizas una petición mediante `HttpClient`, el flujo es el siguiente:

1.  **Petición Saliente**: Pasa por cada interceptor registrado en el orden en que fueron declarados en `withInterceptors`.
2.  **Modificación**: Cada interceptor puede clonar y modificar la petición (ej: añadir un ID de rastreo o un token).
3.  **Servidor**: La petición modificada llega finalmente al servidor externo.
4.  **Respuesta Entrante**: Cuando el servidor responde, los datos vuelven a pasar por los interceptores (en orden inverso).
5.  **Manejo Final**: Aquí puedes interceptar errores (ej: un error 500) antes de que la respuesta llegue al componente que inició la petición.

Esta arquitectura permite que tus servicios se enfoquen únicamente en la lógica de negocio, delegando la infraestructura de red a los interceptores.