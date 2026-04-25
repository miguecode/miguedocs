---
title: "Observables"
description: "Un Observable es una clase de la biblioteca RxJS (Reactive Extensions for JavaScript), la cual permite manejar flujos de datos asíncronos de una forma más poder..."
---



- Un Observable es una clase de la biblioteca RxJS (Reactive Extensions for JavaScript), la cual permite manejar flujos de datos asíncronos de una forma más poderosa y flexible que otras soluciones como Promise. En otras palabras, sirven para llevar a cabo la reactividad en nuestra aplicación, es decir, la actualización de datos "en vivo".

- En Angular, los Observables son muy importantes ya que aparecen en casi todos sus módulos: en los formularios, en el router, en peticiones HTTP, en eventos del DOM, y demás.

- La gracia de un Observable es que puede emitir uno o varios valores a lo largo del tiempo, buscando que dichos valores los tomen los demás elementos de nuestra aplicación mediante una suscripción (método subscribe()). Un Observable también lo podemos tratar como un canal de comunicación, donde los distintos elementos de nuestra aplicación van a ser espectadores, los cuales van a -observar- las cosas que pasan por dicho canal de comunicación.


## ¿Para qué sirven?
- Para manejar asincronía (datos que llegan después, como una petición HTTP).
- Para reaccionar a eventos (clics, keydowns, scroll, inputs).
- Para encadenar transformaciones y operadores (map, filter, mergeMap, etc.).
- Para cancelar flujos, controlar errores, o esperar múltiples flujos a la vez.


## Ejemplo de un Observable y cómo subscribirse a él

```typescript
import { Observable } from 'rxjs';

const miObservable$ = new Observable<string>(observer => {
  observer.next('Hola');
  observer.next('¿Todo bien?');
  setTimeout(() => {
    observer.next('Esto llegó más tarde...');
    observer.complete();
  }, 2000);
});
```
- Primero importamos la clase Observable`<T>`, la cual implementa una interfaz llamada Subscribable`<T>`, y forma parte de la biblioteca rxjs. Para crear un Observable, hacemos una variable llamada miObservable$ (el '$' es por convención, se le suele poner a los observables). Ahora, usamos el constructor genérico pasándole un Type `<string>`, para indicar cuál va a ser el tipo genérico (un string en este caso). Y por parámetro, recibe un callback. 

- Este callback va a usar una variable observer que es un objeto con 3 métodos: next(), error() y complete().
```typescript
observer.next(valor) → Emite un valor al suscriptor.
observer.error(err) → Emite un error (y termina el observable).
observer.complete() → Indica que ya no habrá más emisiones.
```
- **Antes de seguir, hay que tener algo en claro**: este callback se va a ejecutar CADA VEZ que alguien se SUSCRIBA al Observable. Suena simple pero es importante saber eso.

- Si hacemos memoria, en las funciones generadoras usabamos next() para recibir un nuevo valor. En este caso, next() envía un nuevo valor. Es decir, nuestro observable envía un valor, el cual lo van a recibir todos los elementos que estén subscriptos al observable. Ahora vamos a ver cómo es eso último. El error() lo que hace es emitir un error, y terminar con el observable. Es decir, ya no se emite más nada. Y el complete() es obvio, cierra el observable (y no emite más nada).

- Ahora, vamos a SUSCRIBIRNOS a este Observable. Porque como dijimos antes, un Observable es un canal de comunicación, como un tubo por donde pasan cosas (datos). Y lo que queremos hacer ahora es que otro elemento de nuestra aplicación (otro componente en este caso) OBSERVE lo que pasa por ese tubo. Es decir, que escuche los datos que pasan por el Observable. Esto se hace mediante una suscripción, la cual después se puede cancelar.

- Suponiendo que el observable que hicimos recién lo creamos dentro de un servicio, lo que tendríamos que hacer en un componente es inyectar dicho servicio, para poder acceder a su observable llamado miObservable$.

```typescript
@Component({
	selector: 'app-mi-componente',
	template: `<p>Revisá la consola 🔍</p>`
})
export class MiComponenteComponent implements OnInit {
	const miServicio = inject(MiObservableService);

	ngOnInit() {
		this.miServicio.miObservable$.subscribe({
  			next: valor => console.log('Valor: ', valor),
  			error: err => console.error('Error:', err),
  			complete: () => console.log('¡Finalizado!')
		});
	}
}
```
- Los observables tienen el método subscribe, el cual recibe un objeto por parámetro. En este caso, el objeto tiene 3 propiedades: "next", "error" y "complete". Next va a ser una función que ejecuta un console.log con el valor que lee. Error va a ser una función que ejecuta un console.error, mostrando el error que pueda llegar a leer. Y complete va a ser una función que muestra un "¡Finalizado!" por consola. Sin más.

- En este caso, lo que va a pasar es que cuando se inicialice nuestro componente miComponente, se va a subscribir al observable del servicio miServicio que está inyectando. Al subscribirse, está definiendo las acciones a realizar en cada caso posible. Si el observable ejecuta un next(valor) (es decir, emite un valor), el componente realiza la función de la propiedad next (atrapando al valor emitido en la variable "valor"). Si el observable ejecuta un error(), el componente realiza la función de la propiedad error (atrapando al error emitido en la variable "err"). Y si el observable ejecuta un complete(), el componente ya sabe que miObservable$ no va a emitir más nada.

- Lo que vamos a ver por consola al momento de inicializar el componente MiComponenteComponent, va a ser esto:

```typescript
Valor: Hola
Valor: ¿Todo bien?
Valor: Esto llegó más tarde...
¡Finalizado!
```
- El "Esto llegó mas tarde..." y el "¡Finalizado!" van a aparecer 2 segundos después de las 2 anteriores frases. Eso es por el setTimeOut() que lo pusimos a la lógica del Observable. Entonces, lo que está pasando aca es:

1. En un servicio, declaramos un nuevo Observable al cual le definimos una lógica. Dicha lógica tiene métodos como next(), error() y complete(). Esto se va a ejecutar cada vez que alguien se suscriba a dicho Observable.

2. Un componente inyecta el servicio, el cual contiene al Observable. Se suscribe a él, y para hacerlo usa el método subscribe(). Al suscribirse, define una lógica "de recepción".

3. En dicha lógica, establece cómo va a actuar en caso de recibir un next(), un error(), o un complete(). Como dijimos antes, cada vez que alguien se suscribe a un Observable, se ejecuta la lógica de dicho Observable. Por ende, en este momento en el que se hizo el subscribe(), se ejecutó el Observable. Y a partir de ahí se llegó a lo que vimos por consola.


## Observable es Cold

- Cuando decimos que un Observable es Cold, nos referimos a que no emite nada hasta que alguien se suscribe. Pero existen otros tipos de observables los cuales son Hot: Subject y SubjectBehavior, pero los vamos a ver en otro apunte. Aca, con los Observables lo que importa es que cada subscripción es independiente: si dos componentes se suscriben, cada uno recibe sus propios valores (como si fueran dos películas distintas).

- Además, estos Observable que estamos viendo en este apunte son PUROS. Es decir, definen su comportamiento al momento de la suscripción. No podemos hacerle un next() expuesto desde afuera como sí lo podríamos hacer con Subject o BehaviorSubject. Veamos un ejemplo más:

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

```typescript
obs$.next(20); // ❌ Error: Property 'next' does not exist on type 'Observable<number>'
obs$.next(30); // ❌ Error: Property 'next' does not exist on type 'Observable<number>'
```
- Como vemos, no podríamos hacer esto, porque obs$ no tiene el método next(). Lo que sí es válido es lo que hicimos antes, donde cada subscribe ejecuta desde cero la lógica del Observable. Como dijimos, para que esto no nos de error, en vez de usar Observable tendríamos que usar Subject o BehaviorSubject, que los vamos a ver en otro apunte.


## Observables vs Promise

- Como sabemos, los Observables tienen un poco de parentezco conceptual con las Promise, pero en realidad son una versión mejorada de ellas. Veamos una comparación visual:

Característica				Observable						  Promise
________________________________________________________________________________________________________
Emite múltiples valores		✅ (sin límite y a lo largo del tiempo)	  ❌ (emite una única vez)
Es cancelable				✅ (con el unsubscribe)				  ❌
Tiene funcionalidad lazy		✅ (empieza al subscribirse)		  	  ✅
Es encadenable			✅ con operadores RxJS				  ✅ con .then()


## ¿Cómo cancelar un Observable?

- Cuando nos subscribimos a un Observable, Angular no lo cancela solo (salvo que usemos async pipe). Por ende, tenemos que desuscribirnos para evitar fugas de memoria, así:

```typescript
subscription: Subscription;

ngOnInit() {
  this.subscription = this.miServicio.getData().subscribe();
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
```
- Esto es controlar mejor la subscripción, ya que en vez de directamente hacer el subscribe(), lo que hacemos aca es guardarlo en una variable llamada subscription, la cual va a ser de tipo Subscription. Entonces, al inicializar el componente realizamos la subscripción (con el método subscribe()), y al destruir el componente hacemos la desuscripción (con el método unsubscribe()).


## Ejemplos de uso en Angular

1. HTTPClient
```typescript
this.http.get('https://api.example.com/data')
  .subscribe(data => {
    console.log('Datos:', data);
  });
```
- Haciendo uso de la biblioteca HttpClient, vamos a poder acceder al método get(), el cual siempre devuelve un Observable. Por ende, lo que hacemos aca, es pasarle un string por parámetro (una URL), y como dijimos que devuelve un Observable, hacemos uso del método subscribe(). En dicha suscripción, no pasamos un objeto como lo hacíamos antes, sino que directamente pasamos un callback, el cual usa una variable "data", la cual va a capturar el valor emitido por el observable. Y la función, simplemente la muestra por consola.

2. Eventos del DOM
```typescript
fromEvent(buttonElement, 'click')
  .subscribe(() => console.log('¡Clic!'));
```
- La función fromEvent() de la biblioteca RxJS convierte un evento en un Observable. En este caso, le pasamos un elemento botón, y el nombre de un evento. FromEvent transforma esto en un Observable, así que podemos hacer uso del método subscribe().

3. Router
```typescript
this.route.params.subscribe(params => {
  console.log(params['id']);
});
```
- ActivatedRoute.params es un Observable que emite cuando cambian los parámetros.

4. Formularios Reactivos

```typescript
this.form.get('email')?.valueChanges
  .subscribe(valor => console.log('Email cambió:', valor));
```
- valueChanges es un Observable que le va a prestar atención a si cambia el valor pasado por get().