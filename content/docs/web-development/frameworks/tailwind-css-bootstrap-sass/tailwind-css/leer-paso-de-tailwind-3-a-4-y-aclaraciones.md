---
title: "LEER, Paso de Tailwind 3 a 4 y aclaraciones"
---

> Pasaje de Tailwind 3 a 4 y aclaraciones

- En esta nueva versión, todo sigue bastante similar. Obviamente hay muchas utilities nuevas, pero el cambio más significativo es que ya no es necesario usar el archivo tailwind.config.js para crear variables nuevas. Veamos:

- En Tailwind 3, lo que se hacía era ir al archivo tailwind.config.js, y especificar las variables personalizadas de esta manera:

	theme: {
		extend: {
			colors: {
				"azul-clarito": "#243cff";
			}
		},
	}

- Una vez guardado eso en nuestro archivo de configuración de Tailwind, podemos usar la clase utilitara así: "bg-azul-clarito". O la podemos usar para otra propiedad, como "text-azul-clarito". Eso es porque lo que creamos fue UN COLOR.

- Pero en Tailwind 4, esto ya no se hace más en ese archivo. Ahora simplemente hay que ir al archivo de estilos CSS "global" que esté usando la aplicación. Es decir, a ese archivo CSS que está haciendo el import "tailwind.css":

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

- Como vemos, hay que RESPETAR lo de "--color" y "--breakpoint". Son prefijos ya preestablecidos por Tailwind. En la documentación podemos ver todos los prefijos. 


> @Apply

- Si dentro de este archivo CSS queremos usar las utilidades de Tailwind, tenemos que usar @apply adelante. Si no lo especificamos, no podemos hacerlo. La realidad es que lo lógico sería que en este archivo usemos CSS puro, y que si vamos a usar Tailwind lo usemos con sus utilidades (personalizadas o no) en HTML. 

- Es decir, lo que se recomienda es no tener que usar @apply. La gracia de Tailwind es usar las utilidades en HTML, y que nosotros creemos las que necesitemos que sean personalizadas. Nada más. Pero bueno, la funcionalidad ahí está.


> Corrección de asociación

- Algo que vamos a poder ver en nuestro editor de código, es que nos va a estar marcando como warning la sintaxis de @theme que hacemos en nuestro archivo CSS. Esto es lógico ya que dicha sintaxis no tiene sentido en CSS, es decir, no es válido escribir @theme { ... }. Esto es algo propio de Tailwind. Así que lo que podemos hacer nosotros para que no nos tire ese error, es ir a nuestra configuración de vscode, y asociar los archivos CSS con tailwindcss. Así:

	// Archivo .vscode/settings.json

	{
		"files.associations": {
			"*.css": "tailwindcss"
		}
	}

- Y listo. Este ajuste lo hacemos a nivel proyecto, para que no nos joda el VS Code con el warning.