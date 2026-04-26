---
title: "Introducción a Angular y el concepto de SPA"
description: "Descubre qué es Angular, cómo funciona bajo el modelo de Single Page Application y por qué es una de las plataformas de desarrollo web más robustas creadas por Google."
---

## ¿Qué es Angular?

**Angular** es un framework de desarrollo de aplicaciones web de código abierto, creado y mantenido por **Google**. Está diseñado específicamente para construir aplicaciones web dinámicas y escalables, orientadas principalmente al modelo de **SPA** (*Single Page Application*).

A diferencia de los sitios web tradicionales, en una SPA el contenido se actualiza de forma fluida mediante JavaScript; solo cambian los componentes necesarios sin necesidad de recargar la página completa en el navegador.

---

## Estructura clave del Framework

La arquitectura de Angular ha evolucionado significativamente, pasando de una dependencia estricta de los módulos a un enfoque más ligero basado en componentes.

### 1. Componentes
Son las unidades básicas y reutilizables de la interfaz de usuario. Cada componente encapsula tres elementos fundamentales:
*   **Lógica**: Definida mediante código TypeScript.
*   **Estructura**: La plantilla visual definida en HTML.
*   **Estética**: Los estilos aplicados mediante CSS (o preprocesadores como SCSS).

### 2. Módulos (`NgModule`)
Históricamente, los módulos actuaban como contenedores para organizar componentes, servicios y otras dependencias. Aunque siguen existiendo para compatibilidad, ya no son el estándar absoluto.

### 3. Componentes Standalone (v14+)
A partir de Angular 17, el estándar recomendado es el uso de **Componentes Standalone**. Estos son independientes y no requieren ser declarados en un módulo, lo que simplifica enormemente la estructura del proyecto y mejora la modularidad.

---

## El Lenguaje: TypeScript

Angular se fundamenta en **TypeScript**, un superconjunto de JavaScript que añade tipado estático, decoradores y características avanzadas de programación orientada a objetos. Durante el proceso de construcción (*build*), este código se **transpila** a JavaScript puro para que cualquier navegador pueda ejecutarlo.

---

## Angular como Plataforma Integral

Más que un simple framework, Angular es una plataforma completa que ofrece herramientas oficiales para casi cualquier necesidad del desarrollo moderno:

*   **Angular CLI**: Herramientas de línea de comandos para automatizar la creación de archivos, pruebas y compilación.
*   **Router**: Un potente sistema de navegación interna para manejar las rutas de la SPA.
*   **HttpClient**: Módulo especializado para realizar peticiones a APIs externas.
*   **Forms**: Sistemas robustos para el manejo de formularios reactivos o basados en plantillas.
*   **RxJS**: Librería integrada para programación reactiva basada en observables.
*   **Signals**: (v17+) El nuevo motor de reactividad que simplifica la detección de cambios.

---

## ¿Por qué elegir Angular?

Angular es la opción preferida para proyectos a gran escala y de nivel empresarial debido a:

*   **Seguridad Integrada**: Cuenta con protección nativa contra vulnerabilidades comunes como XSS.
*   **Escalabilidad**: Su estructura organizada facilita que equipos grandes trabajen sobre el mismo código sin conflictos.
*   **Mantenimiento Predictivo**: Google lanza una nueva versión estable cada 6 meses, asegurando que la tecnología se mantenga siempre a la vanguardia.
*   **Comunidad y Soporte**: Al ser desarrollado por Google, existe una documentación oficial excelente y un vasto ecosistema de librerías de terceros.