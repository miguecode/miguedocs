---
title: "Observables en Angular"
description: "Entiende qué es un Observable, cómo funciona la librería RxJS y cómo manejar flujos de datos asíncronos mediante suscripciones y emisiones en vivo."
---

## ¿Qué es un Observable?

Un **Observable** es una clase fundamental de la biblioteca **RxJS** (*Reactive Extensions for JavaScript*). Permite manejar flujos de datos asíncronos de una forma mucho más potente y flexible que las promesas tradicionales. Son el motor de la reactividad en Angular, permitiendo que la aplicación responda a cambios de datos "en vivo".

A diferencia de una función normal que devuelve un único valor, un Observable puede emitir múltiples valores a lo largo del tiempo. Podemos imaginarlo como un **canal de comunicación (tubo)** por donde viajan datos, y los elementos de nuestra aplicación actúan como "espectadores" que se suscriben para escuchar lo que sucede en ese canal.

### ¿Para qué sirven?
*   **Asincronía**: Gestionar datos que tardan en llegar (como peticiones HTTP).
*   **Eventos**: Reaccionar a clics, movimientos del ratón, scroll o escritura en inputs.
*   **Composición**: Encadenar, transformar y filtrar datos mediante operadores (`map`, `filter`).
*   **Control**: Cancelar flujos de datos, manejar errores de forma centralizada o coordinar múltiples flujos simultáneos.

---

## Creación y Suscripción

Un Observable se define mediante un objeto `observer` que cuenta con el control del flujo a través de tres métodos:
1.  **`next(valor)`**: Emite un nuevo dato al suscriptor.
2.  **`error(err)`**: Notifica un error y cierra el flujo inmediatamente.
3.  **`complete()`**: Indica que no habrá más emisiones y cierra el flujo de forma exitosa.

### Ejemplo de definición:
```typescript
import { Observable } from 'rxjs';

const miObservable$ = new Observable<string>(observer => {
  observer.next('Iniciando flujo...');
  observer.next('Procesando datos...');
  
  setTimeout(() => {
    observer.next('Datos recibidos tras 2 segundos');
    observer.complete();
  }, 2000);
});
```

### Ejemplo de suscripción:
Para que un componente "escuche" el flujo, debe usar el método **`subscribe()`**:

```typescript
import { inject, Component, OnInit } from '@angular/core';

@Component({ ... })
export class MiComponente implements OnInit {
  ngOnInit() {
    miObservable$.subscribe({
      next: valor => console.log('Recibido:', valor),
      error: err => console.error('Fallo:', err),
      complete: () => console.log('Transmisión finalizada ✅')
    });
  }
}
```

> [!IMPORTANT]
> Los Observables por defecto son **"Cold"** (fríos). Esto significa que la lógica dentro de ellos no se ejecuta hasta que hay al menos un suscriptor. Cada suscriptor inicia su propia ejecución independiente del flujo.

---

## Comparativa: Observables vs. Promises

Aunque ambos manejan asincronía, los Observables ofrecen capacidades superiores:

| Característica | Observable (RxJS) | Promise (Nativo) |
| :--- | :--- | :--- |
| **Emisiones** | Emite múltiples valores en el tiempo. | Emite un único valor y termina. |
| **Cancelación** | Se puede cancelar (`unsubscribe`). | No se puede cancelar una vez iniciada. |
| **Ejecución** | Es *Lazy* (solo corre si hay suscripción). | Es *Eager* (corre en cuanto se crea). |
| **Operadores** | Posee cientos de operadores potentes. | Limitada a `.then()` y `.catch()`. |

---

## El Ciclo de Vida: Unsubscribe

A diferencia de las señales (*Signals*) o las promesas, los Observables manuales pueden causar **fugas de memoria** si no se cierran cuando el componente se destruye.

```typescript
import { Subscription } from 'rxjs';

export class MiComponente implements OnDestroy {
  private sub: Subscription;

  ngOnInit() {
    this.sub = miObservable$.subscribe();
  }

  ngOnDestroy() {
    // Cerramos el grifo al salir del componente
    this.sub.unsubscribe();
  }
}
```

---

## Usos comunes en Angular

Angular está impregnado de Observables en casi todos sus módulos principales:

1.  **HttpClient**: `http.get('/api/data')` devuelve un Observable de la respuesta.
2.  **Formularios**: `control.valueChanges` emite cada vez que el usuario escribe algo.
3.  **Ruteo**: `route.params` emite cuando cambian los parámetros de la URL.
4.  **Eventos**: `fromEvent(button, 'click')` convierte eventos del DOM en flujos reactivos.