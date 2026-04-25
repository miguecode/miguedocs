---
title: "Subject y BehaviorSubject. Comparación con Observable"
description: "Antes de ver Subject y BehaviorSubject, vamos a recordar algunas cosas de los Observables: estos últimos son COLD. Es decir, no emiten nada hasta que alguien se..."
---


## Observables

- Antes de ver Subject y BehaviorSubject, vamos a recordar algunas cosas de los Observables: estos últimos son COLD. Es decir, no emiten nada hasta que alguien se suscribe. Esta va a ser una diferencia clave respecto a Subject y BehaviorSubject, los cuales son HOT. 

- **En estos, cada suscripción es independiente**: si dos componentes se suscriben, cada uno recibe sus propios valores, ya que cada subscribe() tiene que definir su propia lógica. Por ende, no podemos usar el método next(), error() ni complete() desde afuera de la lógica del Observable. Veamos:

```typescript
const obs$ = new Observable(observer => {
  console.log('🌀 Se creó una nueva suscripción');
  observer.next(Math.random());
});

obs$.subscribe(valor => console.log('A:', valor));
obs$.subscribe(valor => console.log('B:', valor));

- **La salida por consola, en orden, va a ser**: 
🌀 Se creó una nueva suscripción
A: 0.547
🌀 Se creó una nueva suscripción
B: 0.892
```
- **Y si ahora hicieramos esto...**: 

```text
obs$.next(20); // ❌ Error: Property 'next' does not exist on type 'Observable<number>'
obs$.next(30); // ❌ Error: Property 'next' does not exist on type 'Observable<number>'
```
- Como vemos, no podríamos hacer esto, porque obs$ no tiene el método next(). Lo que sí es válido es lo que hicimos antes, donde cada subscribe ejecuta desde cero la lógica del Observable. Como dijimos, para que esto no nos de error, en vez de usar Observable tendríamos que usar Subject o BehaviorSubject, que los vamos a ver ahora.


## Subject y SubjectBehavior

- **Como dijimos, están los observables Cold y Hot**: Un Observable como los que vimos recién es COLD, ya que no emite nada hasta que alguien se suscribe. En cambio, un observable HOT sería aquel que emita valores aunque nadie se suscriba a él. Y en ese segundo tipo aparecen Subject y SubjectBehavior. Vamos a verlos:


## Subject

- También es un Observable, pero además es un Observer. Es decir, puede emitir valores y también se puede suscribir a otros observables. Como dijimos antes, es HOT, ya que emite valores desde el momento en que se emite, sin importar si hay suscriptores o no.

- A diferencia de Observable, con Subject todas las suscripciones comparten los mismos valores emitidos, como si fuera una misma película para todos. Es ideal para compartir datos entre varios componentes o emitir eventos manualmente.

- Si nos basamos en el ejemplo que vimos recién con Observable, con Subject podríamos hacer esto:

```typescript
const subject$ = new Subject<number>(); // No definimos lógica en la declaración de un nuevo Subject

subject$.subscribe(valor => console.log('A:', valor));
subject$.subscribe(valor => console.log('B:', valor));

subject$.next(20);
subject$.next(30);

- **La salida por consola, en orden, va a ser**: 
A: 20
B: 20
A: 30
B: 30
```
- Como vemos, ahora sí podemos usar next() por fuera de la lógica del observable, que en este caso, es un Subject. Además, como vimos al principio, al momento de declarar un nuevo Subject, NO le definimos lógica, cosa que sí pasaba cuando declarabamos un nuevo Observable. En este caso, el Subject como tal no tiene una lógica, sino que la lógica va a ser definida solamente por cada subscriptor del Subject. Después, con el método next(), error() o complete(), el Subject va a emitirle el mismo valor a todos sus sucriptores.

- De esta forma, podemos también decir que un Observable se define con una función de suscripción, y en cambio un Subject se comporta como un emisor manual y compartido.


## BehaviorSubject

- Un BehaviorSubject es una especialización de Subject, por ende también es Hot, pero tiene una diferencia: el BehaviorSubject GUARDA el último valor emitido, y lo vuelve a emitir inmediatamente a cualquier nuevo suscriptor. Es decir, si emite un "hola", y después alguien se suscribe, ese alguien que se suscribió va a recibir el "hola", ya que fue el último valor emitido. Por esto es que BehaviorSubject se usa mucho para representar estado actual (como usuario logueado, carrito, etc.).

- Como dijimos con el Subject, el BehaviorSubject funciona como un emisor manual y compartido, eso quiere decir que no hay que definir lógica en la declaración de un nuevo BehaviorSubject, sino que la lógica la va a definir cada subscriptor del BehaviorSubject. Además, al igual que pasaba con los Subject y a diferencia de los Observable, los BehaviorSubject emiten el mismo valor para todos sus suscriptores.

- Al momento de crear un nuevo BehaviorSubject, tenemos que añadirle un valor inicial, que se lo puede considerar como el "estado actual". Es decir, si todavía no emitió nada, este valor inicial va a ser su estado actual. Por ende, cuando alguien se suscriba, lo primero que va a recibir como emisión va a ser este valor inicial. Después, cuando vuelva a emitir un nuevo valor, el valor anterior ya queda en el olvido, y el "estado actual" va a pasar a ser ese nuevo valor.

```typescript
const behavior$ = new BehaviorSubject<number>(0); // El valor inicial va a ser 0

behavior$.subscribe(valor => console.log('A:', valor));
behavior$.next(1);
behavior$.next(2);
behavior$.subscribe(valor => console.log('B:', valor));
behavior$.next(3);

- **La salida por consola, en orden, va a ser**: 
A: 0
A: 1
A: 2
B: 2  👈 Como vemos, recibe el último valor emitido automáticamente
A: 3
B: 3
```
- Como vemos, no hay tanta diferencia respecto a Subject. Lo único que cambia es que siempre hay un valor actual, y ese valor actual se emite cada vez que alguien se suscribe. En este ejemplo, primero tenemos un suscriptor, que al suscribirse, recibe el valor 0, que es el valor inicial que establecimos al crear el BehaviorSubject.

- Después, el BS hace dos next() emitiendo nuevos valores, así que el subscriptor reacciona a ello, ejecutando su lógica de suscripción (el console.log). 

- Finalmente, creamos un segundo suscriptor. El cual, al momento de hacer el subscribe(), automáticamente va a recibir el valor actual, es decir, el último valor emitido. Que en este caso, es el número 2. Así que se ejecuta su reacción y muestra por consola B: 2. El primer suscriptor no hace nada, porque el ya está suscrito desde antes y no se perdió ninguna emisión. Pero después, cuando se hace el último next(), ahí sí reaccionan ambos suscriptores, en orden de suscripción. Primero el A, y después el B. Y ambos muestran el mismo valor, ya que como dijimos, los Subject y los BehaviorSubject emiten el mismo valor para todos sus suscriptores, a diferencia de los Observable.


## ¿Cuándo conviene usar cada uno?

- **Observable**: Cuando queremos un flujo controlado, con lógica interna que se ejecuta por cada suscripción (como en un servicio HTTP o lectura de un archivo).

- **Subject**: Cuando necesitamos emitir manualmente valores desde distintas partes de la app (ideal para eventos como un click, login, toggle, etc.).

- **BehaviorSubject**: Cuando nos interesa el último "estado actual" y que los nuevos suscriptores lo reciban (como el estado del usuario logueado, carrito de compras, etc.).


## Otros (no son muy comunes de usar)

- **ReplaySubject**: Emite N valores anteriores a los nuevos suscriptores.
- **AsyncSubject**: Solo emite el último valor al completarse.