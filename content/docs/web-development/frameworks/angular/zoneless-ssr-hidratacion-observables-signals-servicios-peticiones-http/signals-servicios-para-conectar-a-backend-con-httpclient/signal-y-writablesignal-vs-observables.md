---
title: "Signal y WritableSignal. VS Observables"
description: "Un Signal es una FUNCIÓN. Una función reactiva que representa un valor que cambia en el tiempo. Forma parte del núcelo de Angular (desde Angular 16), y no de la..."
---


## Signal

- Un Signal es una FUNCIÓN. Una función reactiva que representa un valor que cambia en el tiempo. Forma parte del núcelo de Angular (desde Angular 16), y no de la biblioteca RxJS. Para que se entienda fácil: Una signal es como un "contenedor", es una cajita que guarda un valor. La idea es que dicho valor vaya cambiando con el tiempo, pero es eso sólo: un valor. Y obviamente, ese valor puede ser cualquier cosa, un objeto, una función, una clase, un número, lo que sea. El punto es que siempre contiene un valor, el cual cambia con el tiempo.

- Al ser una función, se accede a ella llamándola con paréntesis (). Su particularidad es que reacciona automáticamente cuando cambia su valor, como si fuera un computed de Voue o un useState de React, pero más fluido.

- **Hay dos tipos de Signal comunes**: 

1. Signal`<T>` (El signal no modificable)
2. WritableSignal`<T>` (El signal modificable)

- Si bien son lo mismo en esencia, el primero es de solo lectura, y el segundo puede usar los métodos set() y update(), para cambiar su valor. Todas las signales, ya sean Signal o WritableSignal, se crean con la función signal().


## WritableSignal`<T>` (el Signal modificable)

```typescript
import { signal } from '@angular/core';

const count: signal<number> = signal(0);

console.log(count()); // Muestra 0
count.set(5);
console.log(count()); // Muestra 5
```
- En este caso, creamos una variable llamada "count", la cual va a ser de tipo WritableSignal`<number>`. Como vemos, la creamos mediante la función signal(), porque es eso, una función. En este caso, hicimos que su T (tipo genérico) sea un number. La creamos con signal() y le pasamos un valor inicial, que en este caso es un 0. Entonces, al hacer console.log de count(), se muestra dicho valor. Después, con "set" podemos ACTUALIZAR ese valor.


## Signal`<T>` (el Signal de solo lectura)

- Signal`<T>` es la versión de WritableSignal pero sin sus métodos mutadores (modificadores), como set() o update(). Y esa es la única diferencia, el concepto es literalmente mismo (ser el contenedor de un valor), pero con la diferencia de que estos no tienen métodos para cambiar el valor que están guardando.

- Pero antes de ver un ejemplo con Signal`<T>`, vamos a ver la diferenciación entre los Signal en genral y los Observables, Subject y BehaviorSubjects:


## Comparación de WritableSignal`<T>` vs Observable y variantes

Característica			WritableSignal`<T>`				Observable				Subject / BehaviorSubject
_____________________________________________________________________________________________________________________________
| Librería | @angular/core | RxJS | RxJS |
| --- | --- | --- | --- |
| Reactividad | Funciona por "lectura reactiva" | Funciona por suscripción | Funcionan por suscripción |
¿Cómo se accede?		signal()						observable.subscribe()		También con subscribe()
¿Cómo emite valor?		set() / update()					next() o métodos RxJS		next()
| ¿Guarda último valor? | ✅ Siempre guarda el valor | ❌ No | ✅ BehaviorSubject sí |
| --- | --- | --- | --- |
| Limpieza | No necesita, es sincrónico | Necesita desuscripción | Necesita desuscripción |
_____________________________________________________________________________________________________________________________

- **Aclaración**: Esa tabla habla de los signals como WritableSignal`<T>`. Como dijimos antes, también existe Signal`<T>`, que es lo mismo pero sin métodos de modificación.

- Entonces... ¿Los Signals reemplazan a los Observables? No exactamente: son herramientas diferentes con enfoques distintos. Lo ideal es usarlos juntos: por ejemplo, hacer una petición HTTP con HttpClient (que devuelve un Observable), y convertir su retorno en un Signal con el método toSignal(), para que sea más fácil trabajar con ella en la vista (es decir, en el template HTML).

- Esto último es justamente lo que hicimos de ejemplo en apuntes anteriores: Crear un servicio que hace peticiones HTTP, las cuales devuelven objetos de tipo Observable, y después inyectar el servicio en otro componente, el cual va a transformar esos Observable a Signal, usando la función toSignal().

Signal					Observable
______________________________________________________________________________________________
Ideal para estado local / UI	Ideal para manejar streams (HTTP, websockets, eventos)
Declarativo y sincrónico		Asíncrono, orientado a flujos
No necesita subscribe()		Necesita subscribe() o async pipe
No requiere desuscripción	Sí requiere o usa async/takeUntilDestroyed()
______________________________________________________________________________________________


- Eso sí, los Signal comparten ciertas ideas con BehaviorSubject:

- Ambos guardan el valor actual
- Podemos leer ese valor en cualquier momento
- Pueden cambiar ese valor actual para que los suscriptores reaccionen a él

- Pero la diferencia clave es que Signal lo hace sin necesidad de suscripción / desuscripción.


## Pasar de Observable a Signal y viceversa

- Esto forma parte de la relación entre Signal y RxJS. Como dijimos anteriormente, toSignal() es una función que convierte un Observable en un Signal, pero también existe fromSignal() para hacer la conversión al revés, así:

-	toSignal(miObservable$) 	  → convierte el Observable en Signal`<T>`.
-	fromSignal(miSignal) 	  → convierte el Signal en Observable.

- **En código, lo veríamos así**: 

```typescript
const characters$: Observable<Character[]> = this.http.get<Character[]>(...);
const characters: Signal<Character[]> = toSignal(characters$);
```
## Método set() y update()

1. El método set() de las Signals reemplaza/actualiza/pisa el valor actual de la signal por el valor que se le pasa por argumento, pero no se basa en el valor actual de la signal. Es decir, da igual el valor actual de la signal, lo que le pasemos por set() va a reemplazar a dicho valor. 

2. El método update() de las Signals, a diferencia del set(), SÍ necesita tomar en cuenta al valor actual de la misma. Este método update() recibe un callback, el cual recibe por parámetro al valor actual de la signal. Y el retorno de dicho callback va a ser el nuevo valor de la signal. Es decir, el callback tiene 2 funcionalidades: recibe por parámetro al valor actual de la signal, y lo que va a retornar va a ser el nuevo valor de la signal.

```typescript
let mySignal = signal(10);
mySignal.set(20); // mySignal ahora es 20

let mySignal = signal(10);
mySignal.update(current => current + 5); // mySignal ahora es 15
```
- Como vemos, set() simplemente recibe un valor. Ese valor va a pisar al valor actual de la signal. En cambio, update() recibe un callback. En este caso, el callback es una arrow function la cual tiene una variable "current". En ella, se va a almacenar el valor actual de la signal (que en este caso sería 10). Después, lo que retorne dicho callback va a pisar al valor actual de la signal.