---
title: "Resumen de las novedades de Angular 20"
description: "Explora las innovaciones de Angular 20: estabilización de Signals, hidratación incremental, eliminación de Zone.js y cambios en la guía de estilos."
---

## Novedades de Angular 20

Lanzada en mayo de 2025, la versión 20 de Angular consolida la mayor transformación del framework desde su creación, apostando por un modelo de reactividad puro y una arquitectura extremadamente ligera.

### 1. APIs de Signals Estables
Las APIs fundamentales de Signals han alcanzado su fase estable:
*   **`effect()`**
*   **`linkedSignal()`**
*   **`toSignal()`**
*   **`afterNextRender()`**

Esto marca la transición definitiva hacia un modelo de reactividad basado en Signals, dejando atrás la dependencia histórica de la detección de cambios global.

### 2. Formularios Basados en Signals (*Developer Preview*)
Se introduce una nueva arquitectura de formularios que utiliza Signals como motor de estado. Aunque se encuentra en fase de vista previa para desarrolladores, promete resolver la complejidad de los formularios anidados y reactivos con una sintaxis mucho más declarativa.

### 3. Zoneless Angular
Angular 20 continúa perfeccionando la ejecución de aplicaciones sin **Zone.js**. Aunque se mantiene en *Developer Preview*, es el modo de ejecución recomendado para nuevas aplicaciones, eliminando la sobrecarga que Zone.js imponía al capturar todos los eventos del navegador.

### 4. Hidratación Incremental Estable
La hidratación incremental en SSR ya es estable. Esto permite que el servidor envíe el código de interactividad de forma fraccionada, hidratando únicamente los componentes que el usuario necesita o tiene a la vista, mejorando drásticamente el tiempo de carga y la interactividad (TBT).

### 5. Guía de Estilos y Angular CLI
*   **Nombres Simplificados**: Por defecto, el CLI genera archivos sin sufijos de tipo (ej: `user.ts` en lugar de `user.component.ts`).
*   **Simplificación de Configuración**: Los archivos `angular.json` y `tsconfig.json` son ahora más delgados y fáciles de entender.
*   **Browserslist**: Se adopta el estándar "Baseline", apuntando a navegadores lanzados en los últimos 30 meses.

### 6. Evolución en el Testing
*   **AOT en Pruebas**: Ahora los tests pueden ejecutarse con compilación **AOT** (*Ahead-of-Time*), asegurando que el comportamiento de las pruebas sea idéntico al de producción.
*   **Adiós a Karma**: Karma ha sido reemplazado oficialmente por un nuevo corredor de pruebas más rápido y moderno (basado en Web Test Runner).

### 7. Modernización del Template
Las directivas clásicas `*ngIf`, `*ngFor` y `*ngSwitch` inician su camino hacia la deprecación formal en favor de la **Control Flow Syntax** (`@if`, `@for`, `@switch`), que es ahora el estándar absoluto para la manipulación del DOM en Angular.