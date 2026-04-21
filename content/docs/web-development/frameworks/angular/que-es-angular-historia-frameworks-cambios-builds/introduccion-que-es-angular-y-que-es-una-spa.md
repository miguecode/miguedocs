---
title: "Introducción. Qué es Angular y qué es una SPA"
---

> Angular

- Angular es un framework de desarrollo de aplicaciones web, de código abierto, desarrollado y mantenido por Google. Está diseñado para construir aplicaciones web dinámicas, especialmente del tipo SPA (Single Page Application), donde el contenido se actualiza de forma fluida sin necesidad de recargar toda la página. Cuando se escribe esto, se encuentra en su versión 20.


> Estructura clave del framework

- La idea de su desarrollo está basada en el uso de Componentes y Módulos. Aunque estos últimos recientemente dejaron de ser el estándar del framework, que ahora prioriza el uso de Componentes Standalone, dejando de lado a los módulos. Veamos:

1. Componentes: Son las unidades básicas de construcción de la interfaz.

- Cada componente se conforma de:
	1. Lógica y datos (Usando TypeScript)
	2. Una estructura visual/plantilla (Usando HTML)
	3. Estilos (Usando CSS u otros)

2. Módulos (hasta Angular 13 era obligatorio): Agrupan componentes, pipes, servicios y otros módulos relacionados. Además, declaran qué cosas pueden ser usadas dentro del proyecto.

3. Componentes Standalone (Angular 14+): Estos nuevos componentes son independientes, sin necesidad de formar parte de un módulo. Esto simplifica el desarrollo y mejora la modularidad del código.

- A partir de Angular 17, se recomienda usar exclusivamente Standalone Components para nuevas aplicaciones. Es decir, el crear nuestros propios módulos se va a dejar atrás (aunque podríamos seguir haciéndolo si quisiéramos).


> Lenguaje

- Angular se basa en el lenguaje de programación TypeScript, que es una versión de JavaScript con características adicionales, como los decoradores, el tipado estático y otras mejoras que facilitan el desarrollo y aumentan la seguridad. Ojo: Si bien es una versión extendida de JavaScript, al momento de ejecutarse, se transpila (convierte) en JavaScript puro. Además, para la estructura y los estilos, se usan HTML y CSS (u otro).


> Angular como plataforma

- Angular no es solo un framework sino una plataforma completa, que incluye:

- Angular CLI: herramientas de línea de comandos para scaffolding, testing y builds.
- Router: sistema de navegación interno para SPA.
- HttpClient: para consumir APIs.
- Forms: para formularios reactivos o template-driven.
- RxJS: librería para programación reactiva (observables y otros).
- Zone.js: para detección de cambios y control del ciclo de vida


> Ciclo de versiones

- Google mantiene una nueva versión estable cada 6 meses (aproximadamente).

- Se da soporte a las últimas 6 versiones, por lo tanto:
1. Siempre hay una versión LTS (Long Term Support).
2. Las actualizaciones son predecibles y organizadas.


> ¿Por qué Angular? porque ofrece:

- Seguridad integrada (sanitización, XSS)
- Escalabilidad para proyectos grandes
- Arquitectura basada en componentes reutilizables
- Herramientas oficiales (CLI, Angular DevTools)
- Testing con Jasmine, Karma y TestBed integrados
- Gran comunidad + soporte empresarial