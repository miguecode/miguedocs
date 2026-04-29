---
title: "Subject y BehaviorSubject: Comparativa RxJS"
description: "Descubre las diferencias entre los Observables tradicionales (Cold) y los Subjects (Hot), y cómo utilizar BehaviorSubject para gestionar estados compartidos en Angular."
---

## Cold vs. Hot Observables

Para entender los Subjects, primero debemos recordar que los **Observables básicos son "Cold"** (fríos).
*   **Cold**: No emiten nada hasta que alguien se suscribe. Cada suscripción es independiente y reinicia la lógica interna (como ver una película individual en Netflix).
*   **Hot**: Emiten valores independientemente de si hay suscriptores o no. Todos los suscriptores comparten la misma emisión (como ver una transmisión de TV en vivo).

### Limitación de los Observables Básicos
En un Observable normal, no podemos emitir datos manualmente desde fuera de su declaración:

```typescript
const obs$ = new Observable(observer => {
  observer.next(Math.random());
});

obs$.subscribe(v => console.log('A:', v)); // Emite 0.54
obs$.subscribe(v => console.log('B:', v)); // Emite 0.21 (Valores distintos)

// obs$.next(10); ❌ Error: no existe el método 'next' fuera del constructor.
```

---

## Subject: El emisor compartido

Un **Subject** es un tipo especial de Observable que también actúa como **Observer**. Esto significa que puede emitir valores manualmente mediante el método `.next()`.

*   **Multidifusión**: Todas las suscripciones comparten la misma ejecución y reciben los mismos valores exactos.
*   **Emisor Manual**: No definimos la lógica dentro del constructor; emitimos los datos cuando lo necesitemos desde cualquier parte del código.

```typescript
import { Subject } from 'rxjs';

const subject$ = new Subject<number>();

subject$.subscribe(v => console.log('A:', v));
subject$.subscribe(v => console.log('B:', v));

subject$.next(100);
// Salida:
// A: 100
// B: 100
```

---

## BehaviorSubject: Gestión de Estado

El **BehaviorSubject** es una variante del Subject que añade dos características vitales:
1.  **Valor Inicial**: Requiere un valor obligatorio al momento de crearse (el "estado inicial").
2.  **Memoria**: Almacena el último valor emitido y se lo entrega inmediatamente a cualquier suscriptor nuevo, incluso si la emisión ocurrió antes de que se suscribiera.

```typescript
import { BehaviorSubject } from 'rxjs';

const behavior$ = new BehaviorSubject<number>(0); // Estado inicial: 0

behavior$.subscribe(v => console.log('A:', v)); // Recibe 0 inmediatamente

behavior$.next(10);
behavior$.next(20);

// Suscriptor tardío:
behavior$.subscribe(v => console.log('B:', v)); // Recibe 20 inmediatamente (el último valor)
```

---

## Resumen: ¿Cuándo usar cada uno?

| Tipo | Naturaleza | Uso ideal |
| :--- | :--- | :--- |
| **Observable** | Cold | Flujos de datos únicos por suscriptor (peticiones HTTP, lectura de archivos). |
| **Subject** | Hot | Eventos compartidos o disparadores manuales (clics, notificaciones genéricas). |
| **BehaviorSubject** | Hot + Memoria | **Gestión de Estado**. Para valores que necesitan un valor actual (Usuario logueado, Carrito, Tema oscuro). |

---

## Otros Tipos de Subjects
*   **ReplaySubject**: Permite "rebobinar" y entregar las últimas `n` emisiones a los nuevos suscriptores.
*   **AsyncSubject**: Solo emite el último valor del flujo cuando el observable se completa (vía `.complete()`).