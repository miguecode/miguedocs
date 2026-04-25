---
title: "Primitiva de sincronización para SSR sin Zone.js"
description: "Primitiva de sincronización para SSR sin Zone.js [Lo mismo del apunte anterior]"
---


## Primitiva de sincronización para SSR sin Zone.js [Lo mismo del apunte anterior]

- Esto ya lo hablamos en el apunte anterior (literalmente, es un copy-paste), pero ahora lo vuelvo a poner acá en un apunte aparte, por las dudas y para encontrarlo más rápido.

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
