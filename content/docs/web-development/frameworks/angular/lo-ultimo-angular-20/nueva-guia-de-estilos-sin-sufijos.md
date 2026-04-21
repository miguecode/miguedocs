---
title: "Nueva Guía de estilos sin sufijos"
---

> Nueva guía de estilos

- En Angular 20, sacaron los sufijos en los nombres de los archivos y en las clases, lo hicieron para los componentes, directivas, servicios y pipes. 

	login.component.ts    --->    login.ts
	LoginComponent    --->    Login
	
- Ahora, las clases de los componentes, directivas, servicios y pipes, no van a tener el sufijo que les correspondería. Va a ser solo el nombre. Y con el nombre del archivo pasa lo mismo. Se le saca la especificación del tipo.

- Si no nos gusta este nuevo comportamiento, podemos volver todo a la normalidad. Para eso, tenemos que ir al archivo angular.json, y en las schematics agregar lo siguiente:

	{
	  "projects": {
	    "app": {
	      ...
	      "schematics": {
	        "@schematics/angular:component": { "type": "component" },
	        "@schematics/angular:directive": { "type": "directive" },
	        "@schematics/angular:service": { "type": "service" },
	        "@schematics/angular:guard": { "typeSeparator": "." },
	        "@schematics/angular:interceptor": { "typeSeparator": "." },
	        "@schematics/angular:module": { "typeSeparator": "." },
	        "@schematics/angular:pipe": { "typeSeparator": "." },
	        "@schematics/angular:resolver": { "typeSeparator": "." }
	      },
	  ...
	}