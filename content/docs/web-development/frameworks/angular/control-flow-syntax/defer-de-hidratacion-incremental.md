---
title: "Defer de Hidratación Incremental"
description: "'Hydrate' en @defer"
---


## "Hydrate" en @defer

- Así como vimos el "on" para complementar el bloque @defer, ahora vamos a ver el "hydrate on". De esta forma llevamos a cabo la hidratación de nuestra aplicación de forma manual (Incremental Hydration). Es decir, nosotros vamos a especificar cuándo sí y cuándo no vamos a hidratar a los diferentes elementos de nuestra aplicación.

- Recordemos que la hidratación significa darle vida a los elementos HTML interactuables, para que tengan funcionalidad. Es decir, aplicarle JavaScript al HTML ya renderizado que ve el usuario.

- Para empezar, tenemos que ir a nuestro archivo "app.config.ts", y configurar la propiedad array "providers", de forma que al provideClientHydration le pasemos por parámetro el método llamado withIncrementalHydration(), así:

```typescript
export const appConfig: ApplicationConfig = {
  	providers: [
  	 	provideClientHydration(withIncrementalHydration(), withEventReplay())
  	 ]
};
```
## Sintaxis

- Antes de ver cada uno, veamos un resumen visual (es lo mismo que "on", pero con "hydrate"adelante):

Trigger					Descripción
_______________________________________________________________________________________________________________
| hydrate on idle | Hidrata cuando el navegador está idle |
| --- | --- |
| hydrate on viewport | Hidrata cuando un elemento en específico aparece en el viewport |
| hydrate on interaction | Hidrata cuando el usuario interactúa con un elemento en específico |
| hydrate on hover | Hidrata cuando el cursor pasa por encima de un elemento específico |
| hydrate on timer | Hidrata después de una cantidad de tiempo definida |
| hydrate on immediate | Hidrata  |


```typescript
@defer (hydrate on idle) {
```
  		`<app-algun-componente />`
```typescript
}
```
- El bloque @defer se hidrata cuando el navegador está idle, es decir, cuando no tiene tareas importantes pendientes. Ideal para evitar hacer trabajo pesado mientras el usuario interactúa activamente con la app.


```typescript
@defer (hydrate on viewport) {
	<app-algun-componente />
}
```
- Así, el bloque @defer no se hidrata hasta que aparece en el viewport. Hasta entonces, no se aplica la lógica JS. Muy útil para componentes pesados que están lejos del scroll inicial del usuario.

```html
<div #trigger></div>

@defer (hydrate on viewport(trigger)) {
```
  		`<app-algun-componente />`
```typescript
}
```
- Este es lo mismo, pero basado en el componente que le pasamos por parámetro. Es decir, hasta que el "div" que tiene el "#trigger" no aparezca en el viewport, no se hidrata lo que esté dentro del bloque @defer.


```typescript
@defer (hydrate on interaction) {
	<app-algun-componente />
}
```
- El componente no se hidrata hasta que se interactúa con él (click, input, etc). Es una forma muy eficiente de cargar lógica solo si el usuario realmente quiere usar algo.


```html
<div #boton>¡Click acá!</div>

@defer (hydrate on interaction(boton)) {
	<app-algun-componente />
}
```
- Este es lo mismo, pero basado en el componente que le pasamos por parámetro. Es decir, hasta que el usuario no interactúe con el "div" que tiene el "#trigger", no se hidrata lo que esté dentro del bloque @defer.

```typescript
@defer (hydrate on hover) {
	<app-algun-componente />
}
```
- Se hidrata cuando el usuario pasa el mouse por encima del componente (hover). Útil para elementos tipo tooltip, menús o vistas previas.


```html
<div #hoverZone>Pasá por encima</div>

@defer (hydrate on hover(hoverZone)) {
```
  		`<app-algun-componente />`
```typescript
}
```
- Igual al anterior, pero disparado por hover sobre otro elemento específico.


```typescript
@defer (hydrate on timer(500ms)) {
	<app-algun-componente />
}
```
- El componente se hidrata una vez que pasan 500ms desde que se cargó. Se puede usar para distribuir la carga de la lógica a lo largo del tiempo y no saturar el navegador.


```typescript
@defer (hydrate on immediate) {
	<app-algun-componente />
}
```
- Se hidrata inmediatamente después de que Angular renderiza el HTML. Es útil si queremos aplicar un placeholder pero aún así hidratarlo tan pronto como sea posible.


## Mezcla de "on" e "hydrate on"

- Podemos hacer que un bloque @defer contenga ambas lógicas, separadas por un " ; ":

```typescript
@defer (on idle; hydrate on interaction) {
	<app-algun-componente />
}
```
- Esto sería decir "el bloque @defer se renderiza una vez que el navegador está idle, es decir, disponible para cargar algo. Y quiero que se hidrate, es decir, que reciba lógica, en el momento en el que el usuario interactúa con él". Obviamente, esto se puede ir variando con cada trigger que estuvimos viendo en este apunte y en el anterior.