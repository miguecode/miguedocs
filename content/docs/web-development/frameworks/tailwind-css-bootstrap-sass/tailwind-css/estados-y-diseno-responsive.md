---
title: "Estados y Diseño Responsive"
description: "hover, disabled y focus. Hover es cuando el usuario pasa el cursor por encima de un elemento, disabled es cuando el usuario no tiene permitido interactuar con e..."
---


## Estados

- **Vamos a ver 3 estados**: hover, disabled y focus. Hover es cuando el usuario pasa el cursor por encima de un elemento, disabled es cuando el usuario no tiene permitido interactuar con el elemento, y focus es cuando el usuario "está en el elemento", es decir, si hacemos clic en una input de texto, por ejemplo.

- Hover

"hover:bg-blue-400"

- Disabled

"disabled:bg-red-200"

- Focus

"focus-outline-none"
"focus:ring-1"
"focus-ring-purple-600"

- El ring es cuando hacemos clic en una input de texto. Generalmente el navegador da la funcionalidad de que se le ponga un borde predeterminado. O sea, cuando hacemos focus en una input text, se le hace ese "ring". Entonces, nosotros podemos modificarlo a nuestro gusto.


## Diseño Responsive

- Tailwind tiene puntos de quiebre predeterminados. Todos están en la documentación, pero son estos:

sm -> 640px -> Traducido a CSS: @media (min-width: 640px) {...}
md -> 768px -> Traducido a CSS: @media (min-width: 768px ) {...}
lg  -> 1024px -> Traducido a CSS: @media (min-width: 1024px ) {...}
xl -> 1280px -> Traducido a CSS: @media (min-width: 1280px ) {...}
2xl -> 1536px -> Traducido a CSS: @media (min-width: 1536px ) {...}

- **Ejemplo**: 

<body class="sm:bg-red-300 md:bg-blue-200 lg:bg-green-100">
```typescript
<h2 class="text-xl font-bold sm:text-2xl lg:text-3xl>Hola Mundo</h2>	
```
`</body>`

- Nosotros podríamos modificar estos puntos de quiebre en el archivo tailwind.config.js, de la siguiente forma:

```typescript
theme: {
	screens: {
		'tablet': '900px',
	}
}
```
- De paso, una pequeña aclaración sobre este archivo: Si nosotros hacemos eso como esta ahí, es decir, crear un array llamado "screens" dentro de "theme", lo que estamos haciendo es sobreescribir todas las utilidades ya creadas referidas a los tamaños de las pantallas. Por ende, 'sm', 'md' y los demás, ya no van a existir. Ahora la única clase utilitaria referida a los tamaños para las pantallas va a ser 'tablet'. Entonces, esto no es lo que queremos. Nosotros lo que queremos es AGREGAR nuevas dimensiones a las ya existentes. 

- Por eso, lo que hay que hacer es colocar 'screens' dentro de 'extend':

```typescript
theme: {
	extend: {
		screens: {
			'tablet': '900px',
		}
	}
}
```
- **Entonces, ya podemos usar class="tablet**: bg-red-200", para afectar a pantallas de 900px o más.

- PEROOO... Como dijimos en el apunte anterior, esto era en Tailwind 3. Ahora, en Tailwind 4 ya no se usa ese archivo para hacer esto. Sino que se escribe en el propio archivo CSS que está importando a tailwind. Sería así:

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