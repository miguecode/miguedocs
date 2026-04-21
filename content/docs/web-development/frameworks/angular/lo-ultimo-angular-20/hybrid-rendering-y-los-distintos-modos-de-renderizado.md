---
title: "Hybrid Rendering y los distintos modos de renderizado"
---

> Hybrid Rendering

- El Hybrid Rendering hace referencia a renderizar las distintas partes de nuestra aplicación en distintos lugares. Es decir, no renderizarlo todo en el servidor, ni en el cliente, sino que los repartimos en donde más nos convenga. Para esto vamos a usar la nueva característica de Angular (que llegó en Angular 19 y se estabilizó en el 20).

- Esta configuración se realiza en el ruteo del servidor de nuestra aplicación, en el archivo app.routes.server.ts:

	import { RenderMode, ServerRoute } from '@angular/ssr';
	
	export const serverRoutes: ServerRoute[] = [
	  {
	    path: '',
	    renderMode: RenderMode.Client, // Client Side Rendering (CSR)
	  },
	  {
	    path: 'about',
	    renderMode: RenderMode.Prerender,	// Static Site Generation (SSG)
	  },
	  {
	    path: 'profile',
	    renderMode: RenderMode.Server, // Server Side Rendering (SSR)
	  },
	  {
	    path: '**', 
	    renderMode: RenderMode.Server, // Server Side Rendering (SSR)
	  },
	];

- Como vemos, usamos distintos RenderModes. Así le decimos a Angular "Tal ruta quiero que la renderices de tal forma". Existen 3 opciones: Client, Server y Prerender. Cada una se relaciona con un método distinto de renderizado, el CSR, SSR y SSG. 

- En este caso, la ruta "/" la renderizamos en el cliente, "about" al ser estática la prerendizamos con SSG, "profile" al requerir información específica del usuario usamos SSR, y el resto de las rutas las renderizamos también en el servidor.

- Cabe aclarar que para que esto funcione, en nuestro archivo app.config.server.ts tenemos que tener algo como esto:

	const serverConfig: ApplicationConfig = {
	  providers: [
	    provideServerRendering(withRoutes(serverRoutes)),
	    // ... otros ...
	  ]
	};

- No es un problema ya que viene así por defecto.


> Los 3 modos de renderizado

1. Client Side Rendering (CSR)

- Es el modo clásico en el que Angular siempre funcionó desde sus comienzos. Es decir, es el modo de renderizado que se usaría en todos los casos si nosotros eligieramos no usar SSR en nuestra aplicación. Es el renderizado de toda la vida. En el, todo el HTML es generado del lado del cliente. Es decir, el servidor solo envía un HTML vacío (con un <app-root></app-root>), y después se carga el JavaScript en el propio cliente. 

- Ventajas: Es ideal para apps SPA (Single Page Application). Tiene una menor carga inicial en el servidor, y brinda una navegación fluida una vez que se cargó la app.
- Desventajas: Es el modo de renderizado -generalmente- más lento, ya que tiene que descargar, analizar y ejecutar el JavaScript de la página antes de que el usuario pueda ver el contenido. Y si la página obtiene más datos del servidor durante el renderizado, el usuario también va a tener que esperar a esas solicitudes. Además, si el sitio está indexado para los rastreadores de búsqueda, va a tener un mal SEO (los motores de búsqueda no "ven" bien el contenido"). 

- Tiene sentido usarlo para rutas o páginas que no necesitan ser indexadas por buscadores o no requieren mostrar nada antes de que cargue Angular. Por ejemplo: paneles internos, dashboards, etc.


2. Server Side Rendering (SSR)

- Esto ya lo hablamos. El SSR genera el HTML completo en el servidor ANTES de enviarlo al cliente. Es decir, Angular corre en el servidor y devuelve una página completamente renderizada.

- Ventajas: Mejor rendimiento general (se ve el contenido al instante). Mejor SEO, y útil cuando el contenido depende del usuario o de datos dinámicos.
- Desventaja: Más carga en el servidor.

- Tiene sentido usarlo para páginas con contenido dinámico o que necesitan ser visibles para el SEO, como perfiles de usuario, productos, blogs, etc.


3. Static Site Generation (SSG)

- En este modo, el HTML se genera una única vez en build time, antes de poner la app online. Angular compila el HTML de las rutas marcadas como "prerender", y después ese HTML queda estático, listo para servirse como un sitio HTML tradicional.

- Ventajas: Brinda un rendimiento altísimo, ya que es HTML puro listo para servirse. Esto da una carga instantánea y perfecta para el SEO. Además, no depende del servidor para cada request.

- Desventajas: Obviamente, esto no se puede hacer con contenido dinámico (salvo que usemos APIs externas). Si cambia el contenido de la página, hay que volver a hacer el build. 

- Tiene sentido usarlo para páginas completamente estáticas, como "About", "FAQ", landing pages, etc.
