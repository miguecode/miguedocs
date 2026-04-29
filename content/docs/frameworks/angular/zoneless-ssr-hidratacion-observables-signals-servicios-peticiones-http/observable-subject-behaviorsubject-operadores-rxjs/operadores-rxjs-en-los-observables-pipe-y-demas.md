---
title: "Operadores RxJS y el método Pipe"
description: "Aprende a transformar, filtrar y combinar flujos de datos asíncronos utilizando el método pipe y los operadores más potentes de RxJS como map, filter y switchMap."
---

## Operadores de RxJS

Los operadores son funciones que nos permiten transformar, combinar, filtrar y controlar los flujos de datos que emiten los **Observables** (incluyendo Subjects y BehaviorSubjects). Son la verdadera potencia de RxJS, ya que permiten manipular la información antes de que llegue al componente final.

### El método `pipe()`
Para utilizar cualquier operador, necesitamos el método **`pipe()`** (traducido como "tubería"). Este método se encarga de encadenar los operadores en un orden específico, haciendo que el valor emitido pase de uno a otro como en un pasamanos.

---

## Operadores más comunes

*   **`map()`**: Transforma el valor emitido de una forma a otra (ej: de un objeto a un string).
*   **`filter()`**: Deja pasar el valor solo si cumple una condición específica. Si no la cumple, la emisión se detiene.
*   **`tap()`**: Sirve para ejecutar "efectos secundarios" (como un `console.log`) sin alterar el valor que viaja por el tubo.
*   **`take(n)`**: Toma solo las primeras `n` emisiones y luego completa el observable automáticamente.
*   **`debounceTime(ms)`**: Espera a que pase un tiempo determinado sin nuevas emisiones antes de dejar pasar el último valor (ideal para buscadores).
*   **`switchMap()`**: Cancela el flujo anterior y comienza uno nuevo (muy útil para peticiones HTTP simultáneas).

---

## Ejemplo Práctico

Imagina un servicio que emite palabras y queremos recibirlas en mayúsculas, pero solo si tienen más de 3 letras.

### Definición en el Servicio:
```typescript
import { Observable } from 'rxjs';

export const miObservable$ = new Observable<string>(observer => {
  observer.next('hola');
  observer.next('ir');
  observer.next('angular');
  observer.complete();
});
```

### Transformación en el Componente:
```typescript
import { map, filter, tap } from 'rxjs/operators';

this.miServicio.miObservable$
  .pipe(
    // 1. Solo pasan palabras con más de 3 letras
    filter(valor => valor.length > 3),
    
    // 2. Convertimos a mayúsculas
    map(valor => valor.toUpperCase()),
    
    // 3. Registramos el paso por el tubo
    tap(valor => console.log('📦 Procesando:', valor))
  )
  .subscribe({
    next: valor => console.log('📥 Resultado final:', valor),
    complete: () => console.log('✅ Proceso terminado')
  });
```

**Resultado por consola:**
```text
📦 Procesando: HOLA
📥 Resultado final: HOLA
📦 Procesando: ANGULAR
📥 Resultado final: ANGULAR
✅ Proceso terminado
```
(Nota: 'ir' fue descartado por el filtro y nunca llegó al suscriptor).

---

## Consideraciones Clave

1.  **Inmutabilidad**: Los operadores **no modifican** el observable original. En su lugar, el método `pipe()` devuelve un **nuevo observable** basado en el anterior pero con las transformaciones aplicadas.
2.  **Ubicación del Pipe**: Puedes aplicar el `pipe()` en el servicio para exponer datos ya procesados, o en el componente si necesitas una transformación específica para esa vista.
3.  **Orden de Ejecución**: El orden importa. No es lo mismo filtrar y luego transformar, que transformar y luego filtrar. Piensa siempre en el flujo descendente del dato dentro de la "tubería".