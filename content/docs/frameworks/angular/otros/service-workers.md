---
title: "Service Workers"
description: "Descubre cómo los Service Workers permiten que tus aplicaciones Angular funcionen sin conexión a internet, mejorando la fiabilidad y la experiencia del usuario."
---

## Introducción a los Service Workers

Un **Service Worker** es un script que el navegador ejecuta en segundo plano, separado de la página web principal. Su función principal es actuar como un intermediario entre la aplicación, el navegador y la red.

### ¿Para qué sirven?
Su objetivo principal es gestionar el **almacenamiento en caché** de los recursos de la aplicación. De esta forma, mantiene una copia local de la "plantilla" de la web en nuestro navegador.

*   **Soporte Offline**: Si el usuario pierde la conexión a internet, el Service Worker sirve los archivos desde la caché. Esto permite que el usuario pueda seguir navegando en una versión local de la página.
*   **Sincronización en segundo plano**: Cuando el internet regresa, el Service Worker puede sincronizar los datos acumulados sin que el usuario lo note, garantizando una experiencia fluida y sin cortes.
*   **Notificaciones Push**: Permiten enviar notificaciones incluso cuando la aplicación no está abierta.

### Ejemplo práctico
Un ejemplo muy común es **YouTube**: cuando pierdes la conexión, el video sigue reproduciéndose hasta donde el almacenamiento en caché (gestionado en parte por este concepto) ha logrado descargar los datos. A menudo, el usuario ni siquiera se da cuenta de la caída momentánea del servicio gracias a este colchón de datos local.

En Angular, podemos añadir soporte para Service Workers fácilmente ejecutando:
```bash
ng add @angular/pwa
```
Esto configurará automáticamente los archivos necesarios para transformar nuestra aplicación en una **PWA** (*Progressive Web App*).