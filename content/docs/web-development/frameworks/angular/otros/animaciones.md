---
title: "Animaciones"
description: "Animaciones en Angular"
---


Animaciones en Angular

Agregamos provideAnimations(), así como antes agregamos provideHttpClient().

Creamos un nuevo componente 'animation', el cual vamos a poner en la carpeta 'animation'.

El HTML del componente tiene un botón Mostrar/Ocultar. 

Dentro del componente, en el decorador @Component, tenemos que declarar un array llamado 'animations'.

const mostrarOcultar = trigger('mostrarOcultarTrigger', [
```typescript
state (
	'abierto',
	style([ opacity: 1 ])
),
state (
	'cerrado',
	style([ opacity: 0 ])
),
transition('abierto' => cerrado', [animate('1s')])
transition('cerrado' => abierto', [animate('0.5s')])

// En vez de 'abierto' yo podría poner un *. Y eso significa, ''de cualquier cosa'', pasa a cerrado


// state (el estado) recibe parámetros de animación, el nombre, el estilo...
// transition establece la transicion entre 2 estados
```
])

Trigger espera el nombre y un array.

@Component({
```typescript
...
animations:[mostrarOcultar]
```
})

Bien. Ahora vamos a aplicar esto en el template para que se vea.

<div [mostrarOcultarTrigger]="mostrarContenido ? 'abierto' : 'cerrado'">
```typescript
<h1>Título con Animación</h1>

p
p
```
`</div>`



Esta forma de hacerlo es MALÍSIMA. Ya que NO saca a los elementos del DOM, solo los hace invisibles. Y que estén invisibles es algo meramente visual, en realidad vos podes para el mouse por los elementos y vas a ver que están ahí, que el cursor cambia a pointer si pasas por un botón, por ejemplo. Por eso es que no tiene sentido hacerlo así.

Y listo. Ahora, otra forma de hacerlo: mostrarOcultar2:

const mostrarOcultar2 = [
```typescript
transition(mostrarOcultarTrigger', [
	transition(':enter', [

	]),
	transition(':leave', [

	])
]
```
]

Con este método 2, ya no estamos usando 'abierto' y 'cerrado'.

<div @mostrarOcultarTrigger>

Este métdo 2 sirve para QUITAR el elemento del DOM, y no sólo ocultarlo.