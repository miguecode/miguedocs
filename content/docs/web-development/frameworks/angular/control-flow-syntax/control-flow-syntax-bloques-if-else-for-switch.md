---
title: "Control Flow Syntax (Bloques If, Else, For, Switch)"
description: "Control Flow Syntax (Bloques)"
---


## Control Flow Syntax (Bloques)

- Como sabemos, las directivas estructurales *ngIf y *ngFor sirven para modificar la estructura de nuestro DOM. Bueno, a partir de Angular 16, apareció la preview de una nueva característica: Control Flow Syntax, la cual viene a facilitar y mejorar el uso de directivas estructurales como *ngIf, *ngFor o *ngSwitch. Hoy en día es sin duda la mejor opción, ya que brinda mayor legibilidad, no es necesario importar nada para usarlo, soporta lógica más compleja, y nos permite hacer Lazy rendering (esto último lo vamos a ver en el siguiente apunte).

- La particularidad de estos -también llamados bloques- es que todos empiezan con una arroba " @ ", y obviamente, van en nuestro código HTML. Son parte del compilador de Angular desde su versión 17, así que no funciona en versiones anteriores. Cabe decir que no son funciones JavaScript reales, sino que son bloques de template DSL.


## Bloque @if (reemplazo de *ngIf)

```html
@if (isVisible) {
	<div>Me veo porque isVisible es true</div>
} @else {
	<div>Me veo porque isVisible es false</div>
}
```
- No hay mucha explicación, está todo muy claro. Esto es mucho más legible que *ngIf y evita el uso de `<ng-template>`


## Bloque @for (reemplazo de *ngFor)

```typescript
<ul>
	@for(person of persons; track person.id) {
		<li>{{ person.name }}</li>
	}
</ul>
```
- Muy simple, es mucho más legible que el *ngFor. Esta sintaxis nos obliga a agregar "track", que es necesario para que el bucle sepa bien cómo recorrer el array. La forma correcta de usar track es que sea el ID del elemento a recorrer. Si el elemento no tiene ID ni nada para identificarlo, se puede poner directamente "person". Es decir, el mismo item que se está recorriendo. 


### Bloque @empty (en combinación con @for)

```typescript
<ul>
	@for(person of persons; track person.id) {
		<li>{{ person.name }}</li>
	}
	@empty {
		<li>No persons</li>
	}
</ul>
```
- Si el for tiene que recorrer un array vacío, podemos usar el bloque @empty, el cual sólo se va a mostrar si dicho array está vacío. Sino, no se muestra.


## Bloque @switch (reemplazo de *ngSwitch)

```typescript
@switch (selectedValue) {
	@case ("option 1") {
		<p>Option 1</p>
	}
	@case ("option 2") {
		<p>Option 2</p>
	}
	@case ("option 3") {
		<p>Option 3</p>
	}
	@default {
		<p>Invalid option</p>
	}
}
```
- Es lo mismo que el *ngSwitch, pero con más claridad y simpleza. Además, puede incluir o no un bloque @default.