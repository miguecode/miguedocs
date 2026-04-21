---
title: "Instalar y crear un proyecto"
---

>> Instalar y crear proyecto

Astro no necesariamente se instala, directamente se usa el comando para crear un proyecto, y se encarga de instalar las dependencias necesarias para que funcione.

Cable aclarar que mi primera vez en Astro fue con Astro 5, en diciembre de 2024. Y estos apuntes corresponden a esa versión.

npm create astro@latest

En el proceso de creación, hay que responder distintas preguntas. La primera, es dónde ubicar y cómo nombrar el proyecto. Así que ahí se completa con la ruta donde queremos que aparezca el proyecto.

Después, te pregunta cómo querés que inicie el proyecto. La opción recomendada es lo más sencillo.

Por último, pregunta si queremos o no instalar las dependencias. Le vamos a dar que sí. Y lo de inicializar un nuevo repositorio git es opcional. Una vez hecho todo esto, ya tenemos la carpeta creada con el nombre que indicamos.

Para correr el servidor, usamos este comando:

npm run dev

Esto iniciará el servidor en el puerto 4321:

http://localhost:4321/