---
title: "Signals y WritableSignals: La nueva reactividad"
description: "Entiende el motor de reactividad nativo de Angular: los Signals. Aprende las diferencias con RxJS, cómo transformar observables y cuándo utilizar set vs update."
---

## ¿Qué es un Signal?

Un **Signal** es una función reactiva que representa un valor que cambia a lo largo del tiempo. A diferencia de RxJS, los Signals forman parte del núcleo de Angular (`@angular/core`) desde la versión 16.

Conceptualmente, podemos ver un Signal como un **contenedor** o cajita que siempre guarda un valor actual. Al ser una función, se accede a dicho valor llamándola con paréntesis: `miSignal()`. Su gran ventaja es que Angular sabe exactamente qué partes de la interfaz dependen de ese valor, permitiendo actualizaciones quirúrgicas sin necesidad de Zone.js.

### Tipos de Signals
1.  **`WritableSignal<T>`**: Es una señal que permite tanto la lectura como la escritura (modificación del valor). Se crea mediante la función `signal()`.
2.  **`Signal<T>`**: Es una señal de **solo lectura**. No permite usar métodos como `set` o `update`. Suele ser el resultado de transformar un observable o de crear una señal computada.

---

## Manipulación de Signals (WritableSignal)

Para modificar el valor de una señal, disponemos de dos métodos principales:

*   **`set(nuevoValor)`**: Reemplaza el valor actual por uno completamente nuevo, sin importar cuál fuera el anterior.
*   **`update(fn)`**: Modifica el valor basándose en el estado actual mediante una función callback.

```typescript
import { signal } from '@angular/core';

const count = signal(0); // Creamos un WritableSignal<number>

// Actualización directa
count.set(10); 

// Actualización basada en el valor anterior
count.update(current => current + 1);

console.log(count()); // Salida: 11
```

---

## Comparativa: Signals vs. RxJS (Observables)

Los Signals no vienen a reemplazar a los Observables, sino a complementarlos. Cada herramienta tiene su escenario ideal.

| Característica | Signals | Observables (RxJS) |
| :--- | :--- | :--- |
| **Librería** | `@angular/core` | `rxjs` |
| **Acceso** | Llamada a función: `count()` | Suscripción: `.subscribe()` |
| **Manejo de Memoria** | Automático (sincrónico) | Manual (`unsubscribe`) o `async` pipe |
| **Uso Ideal** | Estado de la UI, variables locales | Flujos asíncronos (HTTP, WebSockets) |
| **Valor Inicial** | Siempre tiene un valor | Puede no tener valor inicial |

### ¿Cómo decidir?
*   Usa **Signals** para representar el estado de tus componentes y mostrar datos en el HTML. Son más simples y no requieren gestión de suscripciones.
*   Usa **RxJS** para manejar flujos complejos de datos, orquestar múltiples peticiones HTTP o capturar eventos continuos del navegador.

---

## Interoperabilidad: toSignal y fromObservable

Angular proporciona herramientas en `@angular/core/rxjs-interop` para saltar entre ambos mundos de forma sencilla.

### De Observable a Signal
Ideal para convertir una petición HTTP en un valor fácil de usar en el template sin `async` pipe:

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

const data$ = http.get<User[]>('/api/users');
const users = toSignal(data$, { initialValue: [] });

// En el HTML: @for (user of users()) { ... }
```

### De Signal a Observable
Útil si necesitas usar operadores de RxJS (como `debounceTime` o `switchMap`) sobre un valor que vive en una señal:

```typescript
import { fromObservable, fromSignal } from '@angular/core/rxjs-interop';

const count$ = fromSignal(myCountSignal);
count$.pipe(debounceTime(300)).subscribe(...);
```

> [!TIP]
> Una señal compartida se parece mucho a un `BehaviorSubject` de RxJS, pero con una sintaxis mucho más limpia y sin la sobrecarga de tener que desuscribirse manualmente.