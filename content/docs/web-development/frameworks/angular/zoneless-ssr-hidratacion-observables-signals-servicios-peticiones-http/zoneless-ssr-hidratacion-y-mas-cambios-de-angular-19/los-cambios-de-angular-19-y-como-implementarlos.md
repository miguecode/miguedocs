---
title: "Los cambios de Angular 19 y cómo implementarlos"
description: "Los cambios en Angular respecto al SSR y la Hidratación"
---


## Los cambios en Angular respecto al SSR y la Hidratación

- Antes de ver cómo implementar los cambios vistos en apuntes anteriores, vamos a ver algo más:

- Primero, hay que saber que las características de Angular se dividen en 2: "Developer Preview" y "Estable".

- Una funcionalidad "Developer Preview" es aquella que está siendo ofrecida a todos los desarrolladores, pero a modo de PRUEBA. Es decir, no es estable, y por ende, no hay que usarlo para producción. Si lo que estaba en Developer Preview funciona bien y la gente lo aprueba, pasa a ser "ESTABLE". Y ahí sí ya podemos pasarlo a producción si queremos.


## Cosas nuevas en Angular 19 (Al margen de lo que estuvimos hablando en apuntes pasados)

- Implementación de Hidratación incremental (Developer Preview) [!] En Angular 20 ya es estable [!]
- Implementación de Server Routing (Developer Preview)
- Implementación de SSR (Estable)

- Algo que sabemos es que las aplicaciones tienen cada vez más JavaScript, eso quiere decir que cada vez se necesitan cargar más cosas. El SSR soluciona gran parte de esto, de la mano de la hidratación. Por esto es que en Angular 17, apareció por primera vez la "Hidratación Total" de la aplicación. 

- **Y en Angular 19, llegó un nuevo Developer Preview**: la "Hidratación Incremental" de la aplicación. Es decir, sigue siendo la misma hidratación que conocemos, pero con una diferencia. Vamos a diferenciar la Hidratación total (Angular 17) de la Hidratación incremental (Angular 19):

1. Hidratación total de aplicación: Llegó en Angular 17, y nos da la posibilidad de mandar todo digerido y perfecto al navegador (mediante SSR), pero con un "problema": la hidratación total significa que Angular hidrata a todos los componentes del HTML renderizado inmediatamente, y sin esperar a eventos específicos ni hacer cargas perezosas. Es decir, descarga y ejecuta todo el JavaScript necesario "de golpe", lo cual puede impactar negativamente en el rendimiento si la app es grande. 

2. Hidratación incremental: Llegó como Developer Preview en Angular 19, y lo que hace es utilizar la sintaxis del bloque @defer (Control Flow Syntax). Por lo tanto, podemos controlar cuándo hidratar y cuándo no. Y además, de forma perezosa. Esta es la idea de la hidratación incremental. De esta forma, no se carga el JavaScript en ningún momento, a menos que lo necesitemos. Esto hace que la carga sea instantánea. 

Característica			Hidratación Total			Hidratación Incremental
________________________________________________________________________________________________________
Cuándo se hidrata		Todo al mismo tiempo		Bajo demanda (on viewport/interacción)
Performance inicial		Menor					Mejor
Control del dev		Poca						Mucha (usando @defer)
Ideal para				Apps simples/medianas		Apps grandes/interactivas


## Standalone Components por defecto e implícitos

- Ahora, los standalone components vienen por defecto. Eso ya lo sabíamos, pero ahora, una vez que creamos un componente por Angular CLI, no aparece el "standalone: true". Esto es así porque ya viene en true por defecto, y ni siquiera nos incita a cambiarlo. Si queremos que esto no pase y siga apareciendo el "standalone: true", tenemos que ir al archivo "tsconfig.json" y en angularCompilerOptions, poner: "strictStandalone": true. Esto hace que sea obligatorio aclarar si un componente es standalone o no.


## Cómo implementar SSR (Server Side Rendering)

- Es el cambio más fácil de todos. Literalmente lo hacemos cuando creamos la aplicación con ng new. La consola nos va a preguntar si queremos usar SSR o no, y ahí le tenemos que decir que sí. Y listo, no hay que hacer más nada.


## Cómo implementar la Detección de Cambios Zoneless

- No vamos a explicar qué es Zone.js y Zoneless, porque ya lo hicimos. Vamos a ver cómo configurar nuestro proyecto para que use Zoneless, para esto tenemos que hacer/tomar en cuenta 3 cosas:

- [!!!] Antes de ver las 3 cosas, hay que decir algo nuevo. En Angular 20, a la hora de crear una nueva app, nos hace la pregunta de si queremos usar Zoneless o no. Eso facilita todo esto (lo vemos en otro apunte).

1. Ir a nuestro archivo "app.config.ts" y eliminar el provide llamado provideZoneChangeDetection(). En su lugar, vamos a 
agregar el llamado provideExperimentalZonelessChangeDetection(). Como bien dice, es experimental (En Angular 20 ya no es experimental). Lo que hace es simplemente es desactivar completamente Zone.js. Quedaría así:

```typescript
export const appConfig: ApplicationConfig = {
  	providers: [
  		provideExperimentalZonelessChangeDetection(),
  		provideRouter(routes),
  	 	provideClientHydration(withEventReplay())
  	 ]
};
```
- Como vemos, usamos provideExperimentalZonelessChangeDetection en vez de provideZoneChangeDetection(). Además, vemos un provideRouter(routes) que hace funcionar el tema del Routing, y el provideClientHydration(withEventReplay()). Este último lo vamos a hablar más adelante en este apunte.

- Por cierto, el provideZoneChangeDetection() suele venir con un { eventCoalescing: true }, el cual corrige el comportamiento de interactuar con elementos que están por encima de otros. Para que si hago clic en algo específico, el evento no se "burbujee" hacia fuera, sino que quede sólo en el que interactué.

- **Entonces, la modificación es este cambio**: 

```typescript
provideExperimentalZoneChangeDetection()  ---> provideZonelessChangeDetection()
```
- [!!!] En Angular 20, ahora ya no es "provideExperimentalZonelessChangeDetection". Ahora es lo mismo pero sin el "Experimental". Esto tiene sentido ya que se avanzó en este tema. La explicación es toda la misma.


2. Algo que podríamos hacer con el fin de eliminar totalmente Zone.js de nuestra aplicación, es eliminar el polyfill de Zone.js y su dependencia. Pero por ahora NO vamos a hacer esto, ya que todavía hay bibliotecas (como AngularFire) que usan Zone.js, así que lo necesitan para funcionar. Entonces, por un tema de compatibilidad, es mejor dejar el polyfill de Zone.js, a pesar de que en el archivo de configuración anterior lo desactivamos.

- [!!!] En Angular 20 se recomienda SÍ borrar dicho polyfill.


3. OnPush. Vamos a analizar algo: La propiedad del objeto que recibe el decorador @Component. Así como "selector" y "template", también existe una propiedad llamada "changeDetection". Es decir, a cada componente que tenemos podemos especificarle qué sistema de detección de cambios usar. Por defecto, esta propiedad no se muestra, ya que establece su valor en "ChangeDetectionStrategy.Default". Pero nosotros no queremos esto.

- Lo que vamos a querer es que la ChangeDetectionStrategy esté en "OnPush". Así que tenemos que hacerlo así:

```typescript
@Component({
	... Las demás propiedades ...
	changeDetection: ChangeDetectionStrategy.OnPush,
})
```
- Como vemos, de esta forma el componente aplica su detección de cambios de forma Zoneless. Eso es lo que necesitamos. Pero la verdad es que agregar esa línea cada vez que creamos un componente es tedioso. Así que podemos configurar las schematics de nuestra aplicación para que cada vez que creamos un componente nuevo con Angular CLI, el changeDetection del componente esté automáticamente en "OnPush", y así no tenemos que especificarlo nosotros mismos. Para hacer eso, vamos al archivo "angular.json":

```typescript
"schematics": {
        "@schematics/angular:component": {
          "changeDetection": "OnPush",
        }
},
```
- Y listo. ya con esto, cada componente que creemos con el Angular CLI va a colocarle OnPush como estrategia de detección de cambios. 


## Cómo implementar la Hidratación Incremental

- Para empezar, tenemos que ir a nuestro archivo "app.config.ts", y configurar la propiedad array "providers", de forma que al provideClientHydration le pasemos por parámetro el método llamado withIncrementalHydration(), así:

```typescript
export const appConfig: ApplicationConfig = {
  	providers: [
  		provideExperimentalZonelessChangeDetection(), // Esto no afecta a este punto
  		provideRouter(routes), // Esto no afecta a este punto
  	 	provideClientHydration(withIncrementalHydration(), withEventReplay())
  	 ]
};
```
- Como vemos, todo sigue igual y lo único que hicimos es agregarle un método al provideClientHydration. Y además de esto, vamos a hacer uso de "hydrate" en nuestros bloques @defer. Veamos:

```typescript
@defer (hydrate on viewport) {
	<app-algun-componente />
}
```
- Así, el bloque @defer no se HIDRATA hasta que aparece en el viewport. Recordemos que la hidratación significa darle vida a los elementos HTML interactuables, para que tengan funcionalidad. Es decir, aplicarle JavaScript al HTML ya renderizado que ve el usuario. 

```typescript
@defer (hydrate on interaction) {
	<app-algun-componente />
}
```
- Así, el bloque @defer no se HIDRATA hasta que interactuamos con él.

```typescript
@defer (on idle; hydrate on interaction) {    // Podría ser hydrate on viewport también
	<app-algun-componente />
}
```
- Esto significa "el bloque @defer se empieza a cargar una vez que el navegador está idle, es decir, disponible para cargar algo. Y quiero que se hidrate, es decir, que reciba lógica, en el momento en el que el usuario interactúa con él".


### ¿Qué es el withEventReplay()?

- Esto no necesariamente tiene que estar ni es necesario para que podamos llevar a cabo la Hidratación Incremental ni aplicar Zoneless, pero igual es una característica positiva para el rendimiento de nuestra aplicación. Ojo: es opcional.

 	provideClientHydration(withIncrementalHydration(), withEventReplay())

- El Event Replay es una característica nueva (ya estable), y viene de Wiz, un framework interno de Google. Se activa cuando usamos SSR, y es un buffer que almacena las interacciones del usuario con la web. Sirve para no perder los eventos que el usuario realizó mientras la app no estaba hidratada. Es decir, si el usuario intentó interactuar con un elemento que todavía no estaba hidratado, el Event Replay lo que hace es recordar dicha acción y ejecutarla una vez que ya está hidratado el elemento.

1. El servidor renderiza tu página (SSR).
2. El navegador recibe HTML ya armado.
3. El usuario podría, muy rápido, hacer click en un botón antes de que Angular termine de "hidratar" el sitio.
4. Si Angular todavía no terminó de inicializar, ese evento (ese click) se podría perder.

- Entonces, withEventReplay() lo que hace es "recordar" esos eventos tempranos y los vuelve a ejecutar una vez que Angular ya está listo. Mejora la seguridad y la fluidez en la interacción. Pero recordemos: es opcional.


## Corregir posible error con el uso de SSR

- Si hacemos uso del SSR, no podríamos usar el localStorage. Esto es así ya que no existen todavía en el navegador. Así que lo que podemos hacer es asegurarnos previamente de que SÍ estamos en el navegador, y no en el servidor:

1. Primera solución, verificar con un condicional:

```typescript
export class HydrateComponent {
	isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	constructor() {
		if (isBrowser) localStorage.setItem('key', 'test');
	}
}
```
- Esto garantiza que localStorage solo se use cuando la app ya está corriendo en el navegador.

2. Segunda solución, renderizar en Cliente (Hybrid Hydration) [Developer Preview]

- Esta solución simplemente hace que el componente que estamos tratando, en este caso "HydrateComponent" se ejecute del lado del cliente y no del servidor. De esa forma, localStorage sí va a existir en su contexto. Para esto último, vamos a ir al archivo "app.routes.server.ts", y configurar la ruta así:

```typescript
export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'hydrate',
		renderMode: RenderMode.Client, // Hacemos que se renderice del lado del Cliente
	},
]
```
- RenderMode.Client significa que ese componente NO se renderiza en el servidor, sino que solo lo hace en el navegador (como en los viejos tiempos de Angular sin SSR). Esta última solución es Developer Preview (experimental).


## Primitiva de sincronización para SSR sin Zone.js [Importante]

- Una primitiva es una herramienta base que busca resolver un problema complejo. En este contexto, Angular nos brinda una API de bajo nivel para coordinar eventos de renderizado SSR sin Zone.js (Zoneless).

- **Antes de ver la solución, veamos el problema**: Sin Zone.js, ¿Cómo sabe Angular cuándo se termina de renderizar un componente en el servidor, es decir, antes de enviárselo al cliente/navegador? Bueno, para esto es que vamos a ver la primitiva, la cual se aplica en HttpClient y Router. Siempre se va a escribir así:

```typescript
subscription.asObservable()
	.pipe(
		pendingUntilEvent(injector),  // <- Esto le dice a Angular que debe esperar antes de enviar el HTML
		catchError(() => EMPTY),  // <- Esto catchea un posible error
	)
	.subscribe();
```
- Primero, entendamos la solución conceptualmente. La idea de la primitiva es decirle a Angular: "Che, el HTML que estamos pre-renderizando en el servidor, todavía no se lo mandes al navegador, porque todavía falta agregarle los datos que me va a devolver este Observable (ya sean valores emitidos o un complete()). Y aparte, porque son datos importantes".

- ¿Cuándo usar esta primitiva? Cuando estamos usando SSR y nuestro componente realiza peticiones con HttpClient, o cuando usa Router.navigate, por ejemplo. Un método completo se puede ver así:

```typescript
getData(): Observable<any> {
    return this.http.get('/api/data') // Como hacemos una petición HTTP, usamos la primitiva
      .pipe(
        pendingUntilEvent(this.injector),
        catchError(() => EMPTY)
      );
  }
```
- El método pendingUntilEvent() marca nuestro observable como algo importante. Angular, durante el render SSR, va a ESPERAR hasta que se complete ese observable (o falle y lo catcheemos). Y una vez que termine, ahí sí cierra la "foto del Servidor" y la manda al cliente/navegador. 

- Si no usáramos pendingUntilEvent(), Angular simplemente no se entera de que nosotros estamos esperando algo (como la petición HTTP en el Observable), y por ende manda el HTML lo más rápido posible al navegador. Eso va a provocar que el HTML renderizado no tenga datos necesarios, que el SEO no funcione bien, o que el usuario vea un parpadeo raro.

- **Y eso es todo. Y ojo**: no pasa nada con que usemos un "asObservable()" o no, eso es indistinto (sería necesario si estamos usando una Signal convertida a Observable con el toObservable()). El punto es que este pipe() va enchufado a algún Observable cuya emisión sea una petición HTTP, o sino (y menos común) en el uso de algún método de Router, como Router.navigate().


## HMR (Hot Module Replacement) instantáneo 

- El HMR es una feature de desarrollo que actualiza nuestros componentes en tiempo real SIN recargar toda la página mientras la estamos desarrollando. Por ejemplo, le cambiamos el color de fondo a algún componente. Haciendo eso y con HMR activado, Angular recarga solo ese módulo o componente, la app no se reinicia entera. Así que, por ejemplo, un input que el usuario estaba escribiendo se mantiene igual, con ese mismo estado.

- En caso de que no esté activado por defecto, podemos levantar el servidor activándolo, así:

```typescript
ng serve --hmr
```
## Scripts migratorios a la nueva reactividad de Angular

- Estos comandos de Angular CLI nos sirven para pasar nuestro proyecto al uso de signals.

```typescript
ng generate @angular/core:signal-input-migration
ng generate @angular/core:signal-queries-migration
ng generate @angular/core:signal-output-migration
```
- **Todas a la vez**: 
```typescript
ng generate @angular/core:signals
```