---
title: "Operadores RxJS en los Observables (pipe y demás)"
description: "Operadores de RxJS"
---


## Operadores de RxJS

- Los operadores nos permiten transformar, combinar, filtrar y controlar datos de Observables. Esto sirve tanto para Observable, Subject y BehaviorSubject.

- Todos los operadores tienen algo en común, y es que necesitan de un pipe() para funcionar. Es decir, de un tubo. Pipe() (tubo) es un método de Observable que sirve para lo que dijimos antes: transformar, combinar, filtrar o controlar los valores que van a emitir los Observables. Veamos los operadores más comunes:

- **map**: Transforma el valor emitido.
- **filter**: Deja pasar solo ciertos valores (los que retornen true).
- **take**: Toma solo los primeros N valores.
- **delay**: Retrasa las emisiones
- **debounceTime**: Espera a que pase un tiempo sin emitir.
- **tap()**: Ejecuta efectos secundarios (como un console.log), sin alterar el valor.
- **mergeMap, switchMap, concatMap**: Sirven para trabajar observables dentro de otros observables.


## Ejemplo

- Supongamos que seguimos con este Observable desde nuestro servicio:

```typescript
this.miObservable$ = new Observable<string>(observer => {
  observer.next('hola');
  setTimeout(() => observer.next('chau'), 2000);
  setTimeout(() => observer.complete(), 3000);
});
```
- Y ahora, desde nuestro componente que va a inyectar el servicio para acceder al Observable, vamos a transformar los valores antes de recibirlos, es decir, hacerlos pasar por un tubo (pipe):

```typescript
import { map, filter, tap } from 'rxjs'; // Los operadores los tenemos que importar

this.miServicio.miObservable$
  .pipe(
    filter(valor => valor.length > 3),  // Si es "true", el valor (string) pasa el filtro
    map(valor => valor.toUpperCase()),  // Se pasa el string a mayúsculas (modificando el valor)
    tap(valor => console.log('📦 Interceptado:', valor)) // Se hace un log intermedio (sin modificar el valor)
  )
  .subscribe({
    next: valor => console.log('📥 Valor transformado:', valor),
    complete: () => console.log('✅ Observable completo')
  });
```
- Como vemos, el método pipe() se llama sobre cualquier observable y acepta uno o más operadores (en este caso 3), los cuales se ejecutan en orden. Es como un pasamanos: el valor emitido va pasando por cada operador uno por uno. Y como dijimos al principio, pipe significa tubo, entonces lo que está pasando es que el Observable emite un valor, y en ese camino desde el servicio hasta el componente, el valor pasa por un tubo, el cual va a transformar el valor enviado. Una vez que ya fue modificado, el valor le llega a "next".

- Cabe aclarar que todos estos operadores no modifican internamente al Observable original, sino que crean uno nuevo transformado (basado en él, obviamente). Esto significa que el observable que va a parar en subscribe() después de pasar por pipe(), es un observable encadenado, como si fuera una versión mejorada del original.

- En este ejemplo, filter() lo que hace es que, si su retorno es TRUE, el valor sigue viajando por el tubo (pipe). En caso de que no, muere ahí la emisión del valor, y no se sigue el pasamanos. Después le llega a map, el cual lo que hace es MODIFICAR el valor, de la forma que sea. En este caso, haciéndolo mayúsculas. Y en el tercer operador, lo que se hace es realizar una acción secundaria la cual NO afecta al valor. En este caso, lo muestra por consola y nada más.

- Una vez que ya pasó por todo el pipe, llega el método subscribe, el cual va a recibir en este caso un objeto con "next" y "complete". El next muestra por consola el valor que llegó desde el pipe, y el complete avisa que el observable terminó.

- Obviamente, nosotros podríamos cambiar el orden de los operadores a nuestro antojo. Esto fue solo un ejemplo. Por ejemplo, el "tap" a veces puede servir colocarlo antes de un "filter", para poder mostrar por consola el valor en crudo que llegó, y después ver por qué se filtró o no. 


- **Visualmente lo podemos analizar así**: 

```typescript
Observable:     "hola"  →  "chau" (primero manda un "hola", y 2 segundos después un "chau")
filter:         	"hola"  →  "chau" (pasan ambos porque cumplen la condición)
map:            	"HOLA"  →  "CHAU" (los dos se transforman)
tap:            	log  →  log (los dos se muestran por consola durante el pipe)
subscribe:      	recibe los valores ya transformados por el pipe y sus operadores
```
- **OJO**: También podemos usar pipe() dentro del servicio, si queremos uqe el observable se exponga ya transformado. De esta forma, el componente subscriptor no es quien declara el pipe(), sino que va a ser el servicio que crea el Observable.

```typescript
this.miObservable$ = new Observable(observer => {
  observer.next('hola');
  observer.next('chau');
  observer.complete();
}).pipe(
    filter(valor => valor.length > 3),
    map(valor => valor.toUpperCase()),
    tap(valor => console.log('📦 Interceptado:', valor))
  );
```
- Obviamente, el resultado va a terminar siendo el mismo, pero ahora el pipe() lo hacemos en el servicio.