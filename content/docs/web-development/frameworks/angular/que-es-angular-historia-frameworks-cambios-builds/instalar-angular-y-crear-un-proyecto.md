---
title: "Instalar Angular y crear un proyecto"
---

> Instalación de Angular y Angular CLI

- Para usar Angular, primero necesitamos Node.js y npm. Eso es tan simple como ir a la página de NodeJS e instalarlos, se instalan los dos a la vez. Para verificar si estan o no instalados, en cualquier terminal podemos escribir:

	node -v
	npm -v

- Para actualizar la versión de Node, simplemente vamos a la página oficial y lo volvemos a instalar. La página de NodeJS nos va a directamente actualizar o instalar por primera vez el Node, y además nos va a instalar o actualizar también el NPM. Es decir, las dos cosas que necesitamos para instalar Angular.

- Para instalar Angular lo hay que hacer es abrir la terminal de Windows (Ejecutar: 'cmd') o en cualquier terminal que tengamos en el VSC. Y escribir el siguiente comando:

	npm install -g @angular/cli

- Ese comando instala Angular Cli ¿Qué es CLI? Command Line Interface. Es una herramienta de línea de comandos que facilita la creación, desarrollo y mantenimiento de aplicaciones Angular. Así que ahora vamos a poder hacer comandos con el "ng" adelante. Ese "ng" adelante hace referencia al uso del Angular CLI.


> Crear un proyecto Angular

- Para crear un proyecto de Angular, basta con escribir esto dentro de la carpeta que lo queremos crear:

	ng new mi-primer-app-angular

- Ojo. Es posible que se genere un error de políticas, eso puede pasar si la shell Powershell no acepta la ejecución de scripts ajenos. Esto se puede arreglar con el siguiente comando:

	Set-ExecutionPolicy Unrestricted

- Otro comando puede ser:

	Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


- Aclaración: Cuando instalamos @angular/cli, solo estamos instalando la herramienta CLI de Angular, no todo Angular en sí. El CLI es una interfaz que facilita trabajar con Angular, pero no es Angular como framework completo. Cuando creamos un nuevo proyecto con ng new, ahí es cuando se descargan las dependencias de Angular necesarias para ese proyecto específico. 

- Para actualizar Angular a la versión más reciente, usamos este comando en cualquier terminal:

	npm update -g @angular/cli

- Para levantar el servidor, usamos este comando (tenemos que estar parados dentro de la carpeta de la app):

	ng serve -o

- El "-o" hace que automáticamente se abra el servidor en el navegador. Es una abreviación de "open".

- Y listo.