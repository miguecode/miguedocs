---
title: "Colores, tamaños y otras utilidades"
description: "En Tailwind ya hay una gran paleta de colores predefinidos. Pero si necesitamos uno todavía más específico, podemos directamente escribirlo en la clase así:"
---


## Crear un color

- En Tailwind ya hay una gran paleta de colores predefinidos. Pero si necesitamos uno todavía más específico, podemos directamente escribirlo en la clase así:

```typescript
<h1 bg-[#d2d255]>Hola Mundo</h2>
```
- Pero también podemos crear una utilidad de color. En Tailwind 3, lo que se hacía era ir al archivo tailwind.config.js, y especificar las variables personalizadas de esta manera:

```typescript
theme: {
	extend: {
		colors: {
			"azul-clarito": "#243cff";
		}
	},
}
```
- Una vez guardado eso en nuestro archivo de configuración de Tailwind, podemos usar la clase utilitara así: "bg-azul-clarito". O la podemos usar para otra propiedad, como "text-azul-clarito". Eso es porque lo que creamos fue UN COLOR.

- Pero en Tailwind 4, esto ya no se hace más en ese archivo. Ahora simplemente hay que ir al archivo de estilos CSS "global" que esté usando la aplicación. Es decir, a ese archivo CSS que está haciendo el import "tailwind.css":

```typescript
// Archivo CSS que está importando tailwind

@import 'tailwindcss';

@theme {
	/* Aca van todas las variables personalizadas */
	/* Todas se escriben con un '--' adelante, y con el tipo de valor */

	/* Colores */
	--color-primary-light: #8927f9;
	--color-primary-dark: #212031;
	--color-secondary-dark: #b968e8;

	/* Breakpoints de pantalla */
	--breakpoint-xxs: 360px;
	--breakpoint-xs: 460px;
}
```
## Colores gradientes

"bg-gradient-to-r" = El background color será un color gradiente hacia la derecha. Es decir, empieza con un color desde la izquierda y se va transformando en otro hacia la derecha.

"bg-gradient-to-r from-red to-blue" = De esta forma, el gradiente va de rojo a azul.

- Para tener texto en gradiente hay que hacer una vuelta de rosca más, de esta forma:

```typescript
<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello World</span>
```
## Opacidad en los colores

"bg-green/50" = Esto indica que el color green va a tener un 50% de opacidad.


## Tamaños (Sizing)

"w-2" -> width: --
"w-[170px]" -> width: 170px

"w-full" -> width: full (no recuerdo si existe)

- **Si vamos a tailwind.config.js, podemos hacer**: 

```typescript
theme: {
	extend: {
		spacing: {
			"42": "170px";
		}
	},
}
```
Entonces, ahora "w-42" es una utilidad, la cual acabamos de crear. Pero ojo, el "w" es opcional. Lo que en sí creamos fue la MEDIDA 42. O sea que podríamos hacer "h-42" y también funcionaría.

- Como sabemos, en Tailwind 4 ya no se usa ese archivo ni esa sintaxis. Ahora se haría como lo vimos antes:

```typescript
// Archivo CSS que está importando tailwind

@import 'tailwindcss';

@theme {
	--spacing-42: 170px;
}
```
- Pero supongamos que sólo queremos crear una medida que aplique para width. Y no para height ni para ninguna otra propiedad. Haríamos esto: 

```typescript
theme: {
	extend: {
		width: {
			"42": "170px";
		}
	},
}
```
- **O en Tailwind 4**: 

```typescript
@theme {
	--width-42: 170px;
}
```
## Padding y Margin

"p-3" -> padding: 3 (O sea, el padding en todas sus direcciones).
"m-3" -> margin: 3 (O sea, el margin en todas sus direcciones).

"pt", "pl", "pr", "pb" significan Padding: Top, Left, Right y Bottom,
"mt", "ml", "mr", "mb" significan Margin: Top, Left, Right y Bottom,

La "x" representa al eje horizontal. Es decir, izquierda y derecha.
La "y" representa al eje vertical. Es decir, arriba y abajo.

"px-3" -> padding-left: 3 y padding-right: 3 
"py-3" -> padding-top: 3 y padding-bottom: 3
"mx-3" -> margin-left: 3 y margin-right: 3
"mx-3" -> margin-top: 3 y margin-bottom: 3

"mx-auto" -> No sé la propiedad pero es para centrar horizontalmente


## Otras utilidades

"border-1" -> border-width: --

"rounded" -> border-radius: --

"block" -> display: block

"hover:bg-red" -> div:hover{background-color: red;}


### Flexbox

- Se activa con la utilidad "flex". 

- Las demás propiedades de flex, tienen una "traducción" bastante literal a los nombres de las utilidades de Tailwind. Como pasa con casi todas las propiedades en general. 


### Grid

- Se activa con la utilidad "grid" y "grid-cols-6" (o la cantidad de columnas que sean).

- Con grid pasa lo mismo, sus utilidades tienen nombres muy similares a los nombres reales de las propiedades de CSS.