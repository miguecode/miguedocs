---
title: "Gestión de estados"
---

> Gestión de Estados

- Aclaración antes de leer este apunte: La gestión de estados en Astro sirven para darle interactividad dinámica a la aplicación. Y si bien eso es posible usando bibliotecas externas, NO es lo ideal. Es decir, no es el propósito real de Astro. Lo ideal es minimizar la interactividad dinámica y aprovechar el enfoque en generar HTML estático, rápido y eficiente. Cuando se necesita interactividad, Astro permite usar bibliotecas como React, Vue, Svelte, o incluso Solid, pero estas deberían usarse solo para las partes específicas que realmente requieren interacción en el cliente.

- En Astro, el concepto de estados NO se aplica de la misma manera que en las bibliotecas como Angular, React o Vue. Astro es un generador de sitios estáticos, o sea que su enfoque principal es la generación de HTML estático en tiempos de construcción. Sin embargo, Astro permite integrar componentes de otras bibliotecas que sí manejan estados, y eso vamos a ver en este apunte.

- Los estados pueden ser locales o globales. 

- Estados locales: Estados que afectan solo a un componente específico o una pequeña parte de la página. Por ejemplo, un contador de clics.

- Estados globales: Estados compartidos entre múltiples componentes o páginas. Para esto, necesitaríamos herramientas externas como React Context, Zustand o incluso Redux.


> Gestión de estados usando componentes React

- Para usar React en Astro, hay que instalarlo en nuestro proyecto con el comando:

npm install @astrojs/react

- Dentro de components, vamos a crear un archivo llamado Counter.jsx. Ese va a ser nuestro componente React. En él, hicimos una función que cuenta la cantidad de clics que damos. 

- Creamos una nueva página llamada index-react.astro. En ella, vamos a importar el componente Counter.jsx para poder usar la función que le creamos. Así que simplemente lo invocamos en el HTML. 

- Esto dará un error porque todavía falta una cosa: importar el renderizador de React en nuestra configuración de Astro. Para eso hay que ir al archivo astro.config.mjs, y agregar esta línea: 

import react from '@astrojs/react';

También hay que agregarlo en defineConfig:

export default defineConfig({
	integrations: [
		react()
	]
});