---
title: "Configuración de Zoneless e Incremental Hydration"
description: "Configurar Zoneless en Angular 20"
---


## Configurar Zoneless en Angular 20

- **Ahora es más fácil**: al crear una nueva aplicación con Angular CLI (ng new myApp), una de las preguntas que nos va a hacer es si queremos usar Zoneless o no, así que simplemente le decimos que SÍ. La secuencia literalmente es:

```typescript
ng new probando-angular
Do you want to create a 'zoneless' application without zone.js (Developer Preview) (y/N)
```
- Después, nos sigue haciendo las otras mismas 2 preguntas: Qué lenguaje de estilos usar y si queremos o no usar Server-Side Rendering (SSR), y además, Static Site Generation (SSG/Prerendering). 

- Ahora que creamos una nueva aplicación con Angular 20 y le dijimos que SÍ a estas dos preguntas, vamos a ver cómo nos configura por defecto a nuestro archivo "app.config.ts":

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),    // Lo explicamos más adelante (es nuevo)
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
```
- Como vemos, al responder con SÍ a la pregunta del Zoneless, aparece automáticamente el "provideZonelessChangeDetection()", el cual nos habilita el uso de Zoneless en lugar de Zone.js. Como sabemos, en Angular 19 lo que había que hacer era cambiarlo manualmente, y en vez de provideZonelessChangeDetection, se llamaba provideExperimentalZonelessChangeDetection. Lógicamente ese cambio refleja que ya no es experimental, sino que es estable.

```typescript
provideExperimentalZoneChangeDetection()  ---> provideZonelessChangeDetection()
```
- Además de este cambio, una cosa que sabíamos que se podía hacer (pero no lo hacíamos) era eliminar el polyfill de "zone.js" en nuestro archivo angular.json. Ahora, nuestro proyecto se crea automáticamente SIN ese polyfill. 


- Además de estos cambios respecto a Angular 19, hay algo que sigue igual: El OnPush:

```typescript
@Component({
	... Las demás propiedades ...
	changeDetection: ChangeDetectionStrategy.OnPush,
})
```
- El changeDetection de nuestros componentes necesitamos que esté así. Y por eso es recomendalbe agregar esta schematic, para que se haga de forma automática siempre que creemos un nuevo componente con Angular CLI:

```typescript
"schematics": {
        "@schematics/angular:component": {
          "changeDetection": "OnPush",
        }
},
```
## ¿Qué es ese nuevo provideBrowserGlobalErrorListeners()?

- 


 


## Configurar Incremental Hydration en Angular 20

- Esto es igual que como lo veníamos viendo en Angular 19, hay que agregar el "withIncrementalHydration()". Entonces, en nuestro archivo "app.config.ts", colocamos:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withIncrementalHydration(), withEventReplay())
  ]
};
```
- Así, podemos hacer uso correcto del bloque @defer combinado con "hydrate", para especificar cuándo vamos a hidratar cada elemento de nuestra aplicación, como:

```typescript
@defer (hydrate on viewport) {
	<mi-componente/>
}
```