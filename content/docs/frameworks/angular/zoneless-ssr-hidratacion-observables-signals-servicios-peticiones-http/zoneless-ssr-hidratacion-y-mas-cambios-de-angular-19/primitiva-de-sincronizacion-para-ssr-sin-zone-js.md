---
title: "Primitiva de Sincronización: pendingUntilEvent"
description: "Guía rápida sobre el uso de la primitiva pendingUntilEvent en Angular para coordinar peticiones asíncronas durante el renderizado SSR en aplicaciones Zoneless."
---

## Sincronización en Aplicaciones Zoneless

En una aplicación **Zoneless** (sin `Zone.js`), Angular pierde la capacidad de monitorear automáticamente cuándo terminan las tareas asíncronas en el servidor. Esto genera un problema crítico en **SSR (Server Side Rendering)**: Angular podría enviar el HTML al cliente antes de que los datos de una API hayan llegado, resultando en una página vacía o con errores de hidratación.

La primitiva **`pendingUntilEvent()`** soluciona esto actuando como un semáforo que detiene el renderizado del servidor hasta que un flujo de datos específico se complete.

---

## El Problema: Carreras de Renderizado

Sin esta primitiva, el ciclo de vida en el servidor sería:
1.  Angular inicia el renderizado.
2.  El componente solicita datos vía `HttpClient` (Petición asíncrona).
3.  Angular no "ve" que hay una tarea pendiente.
4.  Angular termina el renderizado y envía un HTML incompleto al navegador.

---

## La Solución: `pendingUntilEvent()`

Esta API le indica explícitamente a Angular: *"No cierres el proceso de renderizado de este componente hasta que este Observable emita un valor o se complete"*.

### Implementación en un Servicio o Componente:

```typescript
import { inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pendingUntilEvent } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';

export class DataService {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  getData(): Observable<any> {
    return this.http.get('https://api.example.com/data').pipe(
      // Marcamos este flujo como crítico para el renderizado SSR
      pendingUntilEvent(this.injector),
      
      // Es vital capturar errores para no bloquear el servidor infinitamente
      catchError(() => EMPTY)
    );
  }
}
```

---

## ¿Cuándo utilizarla?

*   **Peticiones HTTP**: Cualquier dato necesario para que el SEO de la página sea correcto (títulos, descripciones, contenido principal).
*   **Navegación del Router**: En métodos como `Router.navigate()`, si el cambio de ruta debe completarse antes de la hidratación inicial.
*   **Cualquier flujo de RxJS**: Que deba ser resuelto del lado del servidor antes de generar el "snapshot" final del HTML.

> [!IMPORTANT]
> El uso de `pendingUntilEvent` requiere un `Injector`. Asegúrate de inyectarlo en el constructor o mediante la función `inject()`. Además, siempre añade un `catchError` para evitar que peticiones fallidas mantengan el renderizado del servidor en espera de forma indefinida.
