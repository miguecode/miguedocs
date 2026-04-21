---
title: "Server Side Rendering e Hidratación. CSR y SSG"
---

> Server Side Rendering

- Server Side Rendering es una técnica de desarrollo que implica generar el contenido HTML de una página web en el servidor antes de enviárselo directamente al navegador del usuario. Entonces, en lugar de que el navegador sea el que construya la página a partir del código JavaScript, el servidor entrega una página HTML completa y lista para ser visualizada. Vamos a diferenciar el comportamiento tradicional, con esto:

>> Flujo tradicional (SIN SSR)
1. El navegador recibe un HTML casi vacío, solo con el <app-root> y algunos metadatos.
2. Descarga los archivos JavaScript de Angular.
3. Angular arranca y construye el DOM en el navegador.
4. Finalmente, el usuario ve algo utilizable.

- Lo malo de esto es que se genera mucha espera inicial, y no hay contenido visible hasta que Angular termina todo.


>> Flujo con SSR (Server Side Rendering)
1. El servidor pre-renderiza la app y genera el HTML completo (basado en Angular).
2. Ese HTML pre-renderizado todavía no tiene funcionalidad (JavaScript). Para tenerlo, se inicia la Hidratación.
3. El navegador pasa a recibir todo ese HTML renderizado, y lo muestra al toque (sin esperar que Angular arranque).
4. Mientras tanto, Angular se inicializa en segundo plano y toma control del DOM.

- Esto trae 2 ventajas clave: Rendimiento y SEO.
1. Rendimiento Inicial: El usuario, al entrar a la página, ya empieza a ver algo mucho más rápido.
2. SEO: Las páginas renderizadas en el servidor son más amigables para los motores de búsqueda, ya que el contenido ya está presente en el HTML inicial que se envía al cliente, y los bots pueden ver tal contenido.

- Como dijimos, el HTML pre-renderizado que le llega al navegador todavía no es interactuable. Así que lo que va a hacer Angular es iniciar el proceso de Hidratación. Vamos a ver qué es la hidratación.


>> ¿Cuándo conviene usar SSR?

>>> SSR es ideal para:
- Aplicaciones donde el SEO es importante (un blog, e-commerce, landing page, etc).
- Aplicaciones que tienen contenido que debería ser visible lo antes posible.
- Usuarios con conexiones lentas o dispositivos poco potentes.

>>> SSR no es tan necesario en:
- Aplicaciones internas (como dashboards), que no requieren nada de SEO.
- Aplicaciones donde todo el contenido es privado o requiere login.


> Cómo era el SSR antes y cómo es ahora

- Angular Universal era una libreria separada de Angular, la cual permitía la aplicación de SSR en nuestra aplicación. De hecho, era la única forma de conseguir SSR. Pero esto se terminó a partir de Angular 17 y posteriores. Si bien Angular Universal sigue existiendo, ahora está integrada directamente en Angular, cambiando completamente la forma de usar SSR.

- En lugar de generar un servidor con lógica propia desde Angular Universal, lo que hace Angular ahora es generar directamente un servidor Express como parte del build cuando activamos el SSR en nuestra aplicación.

- Antes (Angular <17): Se usaba @nguniversal/express-engine para integrar Angular con Express, y había que hacerlo de forma manual Angular Universal era como un "puente" ente Angular y Node.

- Ahora (Angular 17+): Angular ya no necesita ese "puente", porque el soporte SSR ya viene built-in. Entonces, cuando creamos una nueva aplicación Angular con SSR, automáticamente viene con un servidor Express. Dicho servidor vive en un archivo llamado "server.ts", y está pensado para deploy directo (por ejemplo, en Vercel, Firebase, etc.). Y también genear sus rutas separadas para SSR, CSR o SSG (en los archivos "app.routes.server.ts" y "app.config.server.ts").

	📁 src/
	├── app/
	│   ├── app.routes.ts                 <- Rutas principales
	│   ├── app.routes.server.ts       <- Rutas con renderMode (SSR, CSR, SSG)
	│   └── app.config.server.ts       <- Configuración del renderizado en el server
	├── main.ts                        <- Entrada cliente
	├── main.server.ts              <- Entrada para el servidor
	📁 server/
	├── server.ts                       <- Servidor Express (creado por Angular)


> Hidratación

- La hidratación es el proceso donde Angular dice: "Okey, veo que hay HTML renderizado (gracias al SSR). En vez de borrarlo y volverlo a construir, lo voy a tomar como punto de partida y le voy a enchufar toda la lógica".

- También sería como decir: "Ya hay una estructura armada, así que solo me falta enchufar mis cables (Event Listeners, estados, datos, y toda lógica de JavaScript) para que la app funcione."

- Entonces la hidratación es el proceso en el que Angular "le da vida" a lo que el usuario ve. Una vez que se precargó el HTML en el servidor, le llega totalmente renderizado al navegador, y se lo muestra al usuario, en ese momento la hidratación lo que hace es enchufarle toda la lógica JavaScript, para que la página sea funcional/utilizable/interactuable.

- Sin hidratación, Angular reemplazaría todo el HTML del servidor con su propia versión, y eso haría que:
1. Se pierda todo el tiempo ganado gracias al SSR.
2. Haya un "parpadeo" visual (contenido que aparece, desaparece, y después aparece otra vez).

- Obviamente, si tenemos un elemento que no tiene funcionabilidad, como un simple texto plano, no tiene por qué hidratarse. Entonces, nunca lo hace. 

- En resumen, una forma clara de verlo es pensar que el SSR es el que pinta la casa antes de mudarse, y la Hidratación es la que pone los muebles y conecta la electricidad para que se pueda vivir en ella. 


>> Tabla de relación entre SSR e Hidratación

SSR (Server Side Rendering)				Hidratación (activación en el cliente)
___________________________________________________________________________________________________
Genera HTML real desde el servidor		Angular se “conecta” a ese HTML sin romperlo
Reduce tiempo de carga y mejora SEO		Evita redibujar el DOM y mantiene fluidez
Mejora UX desde el primer momento		Evita parpadeos y mejora performance general


> Cómo implementar SSR (Server Side Rendering)

- Es muy sencillo. Literalmente lo hacemos cuando creamos la aplicación con ng new. La consola nos va a preguntar si queremos usar SSR o no, y ahí le tenemos que decir que sí. Y listo, no hay que hacer más nada.


> CSR y SSG

- Ya vimos lo que es SSR, pero ¿Qué son CSR y SSG? Veamos cada definición:

1. Client Side Rendering (CSR)

- Es el modo clásico en el que Angular siempre funcionó desde sus comienzos. Es decir, es el modo de renderizado que se usaría en todos los casos si nosotros eligieramos no usar SSR en nuestra aplicación. Es el renderizado de toda la vida. En el, todo el HTML es generado del lado del cliente. Es decir, el servidor solo envía un HTML vacío (con un <app-root></app-root>), y después se carga el JavaScript en el propio cliente. 

- Ventajas: Es ideal para apps SPA (Single Page Application). Tiene una menor carga inicial en el servidor, y brinda una navegación fluida una vez que se cargó la app.
- Desventajas: Es el modo de renderizado -generalmente- más lento, ya que tiene que descargar, analizar y ejecutar el JavaScript de la página antes de que el usuario pueda ver el contenido. Y si la página obtiene más datos del servidor durante el renderizado, el usuario también va a tener que esperar a esas solicitudes. Además, si el sitio está indexado para los rastreadores de búsqueda, va a tener un mal SEO (los motores de búsqueda no "ven" bien el contenido"). 

- Tiene sentido usarlo para rutas o páginas que no necesitan ser indexadas por buscadores o no requieren mostrar nada antes de que cargue Angular. Por ejemplo: paneles internos, dashboards, etc.


2. Static Site Generation (SSG)

- En este modo, el HTML se genera una única vez en build time, antes de poner la app online. Angular compila el HTML de las rutas marcadas como "prerender", y después ese HTML queda estático, listo para servirse como un sitio HTML tradicional.

- Ventajas: Brinda un rendimiento altísimo, ya que es HTML puro listo para servirse. Esto da una carga instantánea y perfecta para el SEO. Además, no depende del servidor para cada request.

- Desventajas: Obviamente, esto no se puede hacer con contenido dinámico (salvo que usemos APIs externas). Si cambia el contenido de la página, hay que volver a hacer el build. 

- Tiene sentido usarlo para páginas completamente estáticas, como "About", "FAQ", landing pages, etc.