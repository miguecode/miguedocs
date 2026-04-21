---
title: "Dark Mode (Tailwind 3)"
---

> Utilidad "dark"

[ACLARACIÓN] -> Este apunte fue creado usando Tailwind 3. Hoy en día, ya existe Tailwind 4. La idea es la misma, pero la sintaxis y en dónde se hace es distinto.

	<html lang="es" class="dark">
		<body class="dark:bg-slate-900">
		<label for="darkmode" class="dark:text-white">Activar modo oscuro</label>
		<input type="checkbox" id="darkmode">
		<p class="dark:bg-blue-300>Lorem Ipsum</p>
		</body>
	<html>

- Para que el dark mode en Tailwind funcione, hay que ir al archivo tailwind.config.js y dentro de module.exports tenemos que escribir la propiedad darkMode, así:

	module.exports = {
		darkMode: 'class',
	}

- Esto le dice a Tailwind que use la clase dark como activador para el modo oscuro. Es decir, cuando Tailwind encuentre la clase dark en algún lugar del DOM (normalmente en el elemento raíz, como <html> o <body>), aplicará las reglas con dark:.
Otra opción sería darkMode: 'media', que usa las preferencias del sistema operativo (sin necesidad de una clase dark).


- Volviendo al ejemplo, para darle funcionalidad al input checkbox, tenemos que usar un simple JS así:

const darkModeInput = document.querySelector('#darkmode');

	darkModeInput.addEventListener('click', () => {
		document.documentElement.classList.toggle('dark');
	})

- "dark" es una clase de utilidad propia de Tailwind CSS.
- Esta clase no tiene estilos por sí misma, sino que actúa como un "gatillo" (trigger) para activar todas las reglas que comienzan con el prefijo dark: en el CSS.

Ejemplo:

	<div class="text-gray-900 dark:text-white">
	  Hola
	</div>

- Si la clase dark está presente en un ancestro (como el <html> o <body>), entonces dark:text-white se activa y el texto se vuelve blanco.
- Si no está presente, la clase text-gray-900 (texto gris oscuro) se mantiene activa.


> ¿Qué es el elemento raíz (root)?

El elemento raíz normalmente es el elemento <html>. Por eso, cuando hablamos de "poner la clase dark en el elemento raíz", nos referimos a esto:

	

Al tener esa clase, todas las reglas con dark: en el CSS se activan.


> ¿Qué es color-scheme en :root?

	:root {
	  color-scheme: light dark;
	}

- Esta propiedad "color-scheme" no tiene relación directa con Tailwind. Tailwind sigue dependiendo de la clase dark configurada con darkMode: 'class'.

- :root es un selector de CSS que apunta al elemento raíz (generalmente el <html>).

- Darle el valor de "light dark" le indica a los navegadores que el sitio soporta tanto temas claros como oscuros. Es útil para manejar colores predeterminados en elementos del navegador, como barras de scroll o campos de formulario.


> ¿Y qué pasa con "light"?

- light no es una clase de Tailwind CSS.
- El modo claro es el estado predeterminado, así que no se necesita una clase para indicarlo. Si no hay clase dark, la página estará en modo claro automáticamente.

- Aclaración
A la hora de manejar dinámicamente el tema, el enfoque más común es agregar o quitar la clase dark al elemento <html> según la preferencia del usuario.