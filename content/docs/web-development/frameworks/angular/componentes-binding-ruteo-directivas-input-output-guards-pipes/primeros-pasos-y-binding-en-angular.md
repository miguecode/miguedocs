---
title: "Primeros pasos y Binding en Angular"
description: "Primeros pasos y Bindeo en Angular"
---


## Primeros pasos y Bindeo en Angular

- Primero que nada, vamos al archivo del template del componente base:

```text
app.component.html
```
- **En él, vamos a borrar todo y dejar esta línea**: 

```text
<router-outlet  />
```
- **Ahora, vamos a nuestro archivo de lógica**: 

```text
app.component.ts
```
- En este archivo, vamos a ver la clase de nuestro componente principal (llamado AppComponent), siendo decorada por el decorador de Angular @Component. Uno de los parámetros del objeto que recibe este decorador, es el "selector". El valor que tenga "selector" va a ser el nombre de la tag `<tag>`, la cual va a invocar a este componente en el que estamos trabajando. Es decir, cuando queramos invocar al componente, en el HTML hacemos: `<pepe>``</pepe>` Eso sería así, suponiendo que le pusimos "pepe" al "selector".

- También vemos el "templateUrl", que recibe una ruta, la cual nos tiene que llevar al archivo HTML del componente. En ese archivo se va a escribir la estructura visual del componente, obviamente. Si en vez de usar "templateUrl" usamos solo "template", podríamos incrustar código HTML en ese mismo lugar, sin crear un archivo HTML aparte (eso no sería lo ideal, pero es posible). Lo mismo ocurre con los estilos, con la diferencia de que "styles" recibe un array de strings, porque podríamos especificar más de una ruta (porque los estilos pueden estar en más de un archivo, separados).

- Todo este tema del Componente y cómo se crea está más explicado en el apunte de Componentes.


## Envío de Información entre Template y Lógica (HTML y TS)

- En Angular tenemos el poder de enviar y recibir información de HTML hacia TS y viceversa. Vamos a ver el ejemplo básico con nuestra clase AppComponent. Ese atributo público "title" lo podemos mostrar en el template usando llaves dobles {{ title }}. Ahora vamos a verlo.

```typescript
export class AppComponent {
	title = "Primer Título";
}
```
- Ahora, en el template (el archivo HTML) vamos a poner la siguiente línea, la cual la podemos usar gracias a Angular y a "ngModel", que es quien nos va a ayudar a enviar información desde el HTML hacia el TS, así:

```text
<input type="text" [(ngModel)]="title">
```
- En principio, esto nos va a tirar un error, ya que no estamos incluyendo el componente ngModel. Para eso, hay que importarlo. Esto lo vamos a hacer en el archivo de la lógica (el app.component.ts). Para eso, agregamos un "FormsModule" en el "imports" del componente. Ese componente "FormsModule" sirve justamente para usar elementos de formularios. Quedaría así:

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
}
```
- **Bien. Ahora, vamos a agregar una línea HTML más**: 

```html
<h1>{{ title }}</h1>
```
- Esto lo que hace es mostrar el valor de nuestra variable "title". Ahí está la magia de Angular: estamos mostrando por HTML el valor de una variable que tenemos creada en nuestro archivo de lógica TypeScript. Y esto lo hacemos colocando llaves dobles: {{ [Código TypeScript] }}. Entre las {{ }}, podemos escribir en TypeScript.

- Además, con la entrada de texto que pusimos en el template, vamos a ver que apenas escribimos algo ahí, se ACTUALIZA a nuestra variable 'title' de nuestro archivo .ts. Es decir, estamos mandando información desde el HTML hacia el TS. Porque estamos cambiándole en vivo el valor del atributo público 'title', y eso se refleja en nuestro elemento h1, porque se actualiza de forma reactiva a cómo cambiamos el valor de title.

- Pero... ¿Cómo fue posible todo eso? Gracias al Binding. Vamos a verlo.


## Las distintas formas de hacer Binding

- Esta "magia" que vimos recién se lleva a cabo mediante el "binding". El binding es lo que nos va a permitir enviar información entre nuestros 2 mundos, la lógica y el template. Vamos a ver los distintos tipos de binding, ya que todos son importantes, y el último es el que explica cómo es posible lo del envío mutuo de información [(ngModel)]. 

- Antes de ver cada uno por separado, veamos un resumen visual:

Binding			Sintaxis		Dirección		Uso Principal
________________________________________________________________________________________________
Interpolación		{{ valor }}		TS → HTML	Mostrar texto dinámico
Property			[propiedad]	TS → HTML	Enlazar atributos/propiedades
Event			(evento)		HTML → TS	Escuchar eventos del DOM
Two-Way			[(ngModel)]	TS ↔ HTML	Formularios con sincronización en vivo


1. Interpolación: {{ ... }}

- Este binding se usa para enviar información desde la lógica hacia el template de forma unidireccional. Es decir, enviamos la información así: TS → HTML. OJO: Este bindeo sólo sirve para TEXTO. No puede usarse, por ejemplo, para modificar una tributo "src" o "href".

- Gracias a la interpolación es que antes pudimos hacer `<h1>`{{ title }}`</h1>`

- También podríamos ejecutar expresiones simples como: `<p>`{{ title.toUpperCase() }}`</p>`


2. Property Binding: [propiedad]="expresión"

- Este binding se usa para enlazar propiedades de elementos HTML (es decir, atributos) o componentes personalizados. También es unidireccional como la interpolación: TS → HTML, pero a diferencia de ella, SÍ sirve para modificar atributos reales del DOM. Veamos:

```text
imgUrl = 'https://miimagen.com/foto.jpg';	// Tenemos esto en nuestro archivo TypeScript

<img [src]="imgUrl" /> <!-- Tenemos esto en nuestro archivo HTML -->
```
- En este caso, como estamos usando el binding [propiedad]="expresión", nuestra variable imgUrl creada en el archivo TypeScript, está pasándole su valor al atributo "src" de la etiqueta HTML `<img>`. Es decir, estamos pasandole información de nuestra lógica a nuestro template (TS → HTML).

- **Lo mismo podemos hacer con directivas**: 

```html
<div [ngClass]="{ 'active': isActive }"></div>
```
- Como vemos, se sigue respetando el bindeo []="". Y en este caso, lo que pasamos por " " es un objeto literal, el cual se le está asignando a la directiva ngClass.


3. Event Binding: (evento)="función()"

- El Event Binding se usa para escuchar eventos del DOM, como click, input, keyup, etc., y en base a escucharlos, ejecutar cierta función. A esto se lo considera envío de información unidireccional del template hacia la lógica (HTML → TS), y es así porque con nuestro código HTML escuchamos al evento, que cuando se dispara le indica al TypeScript qué función ejecutar. Veamos un ejemplo:

```typescript
onBtnClick() {
  console.log("Hicieron clic en el botón");
}
```
- En el HTML, vamos a invocarla mediante el Event Binding (evento)="función()"

```text
<button (click)="onBtnClick()">Hacer clic acá</button>
```
- Entonces, este binding permite que el HTML dispare funciones de la lógica TS. Como vemos, usamos el binding que dijimos que ibamos a usar: (elNombreDelEvento)="laFunción()"


4. Two-Way Binding (doble enlace): [(ngModel)]

- Este binding es una combinación de los dos anteriores: La property binding y el event binding: [ ] + ( ), y por eso se ve así: [(  )]. También es llamado "Banana in a Box", porque los símbolos parecen una banana adentro de una caja.

- A diferencia de los 3 bindings anteriores, este no es unidireccional, sino que es bidireccional (es decir, la comunicación entre lógica y template se hace de forma simultánea), así: TS ↔ HTML. Se usa mayormente en formularios, para que los datos estén sincronizados en tiempo real.

- Entonces, es gracias a este binding que pudimos hacer antes lo de [(ngModel)]. Veamos:

```typescript
nombre = "Messi";  // TypeScript

<input [(ngModel)]="nombre" />
<p>Hola {{ nombre }}</p>
```
- Si en la input cambiamos el valor del texto, la variable "nombre" del TypeScript también se va a ver afectada, en tiempo real. Esto es literalmente el mismo ejemplo que vimos antes con la variable "title".