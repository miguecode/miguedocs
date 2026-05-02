---
title: "Live Server"
description: "Live Server es una extensión de Visual Studio Code que permite cargar contenido dinámico en tiempo real."
---


## Live Server

Live Server es una extensión de Visual Studio Code que permite cargar contenido dinámico en tiempo real. Es una herramienta útil para desarrolladores que les permite abrir su proyecto en un navegador con un solo clic. 

**Permite**: 

- Recargar automáticamente los cambios realizados en páginas HTML, CSS o JS 
- Iniciar y detener el servidor con un solo clic 
- Personalizar el número de puerto, la raíz del servidor y el navegador predeterminado 
- Ver la página en vivo en un navegador real 
- Reflejar los cambios en el navegador cada vez que se actualiza el código

El Live Server en realidad abre TODO. Es decir, la verdad es que no importa en dónde estes parado a la hora de iniciar el Live Server, porque va a subir todo. En lo único que infiere el archivo en el que estes parado, es que ese es el que vas a ver en primer lugar.

Es decir, se va a abrir en ese archivo específico. Pero si borras todo en la URL y solo dejas el puerto (http://127.0.0.1:5500/), vas a ver el index. Vas a ver el index si es que existe tal index y si estas en una sola carpeta. Si el proyecto del VSC tiene más de una carpeta, entonces al ir a la URL del puerto local literalmente te va a mostrar todas las carpetas y archivos que tengas levantados, y vas a poder entrar al que quieras.