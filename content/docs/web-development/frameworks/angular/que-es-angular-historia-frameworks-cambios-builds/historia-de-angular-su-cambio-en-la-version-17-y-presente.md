---
title: "Historia de Angular: De AngularJS al Futuro"
description: "Un recorrido por la evolución de Angular, desde sus inicios como framework basado en directivas hasta la revolución de los Standalone Components y Signals en las versiones más recientes."
---

## Los inicios: AngularJS (v1.x)

El primer Angular, conocido como **AngularJS**, fue un framework pionero que introdujo conceptos revolucionarios como el *Two-Way Data Binding*, las directivas personalizadas y el ruteo en el cliente. Fue un enfoque innovador que permitió construir aplicaciones web dinámicas con una estructura sólida.

Sin embargo, con el paso de los años, su arquitectura se volvió difícil de escalar y mantener, especialmente frente a la aparición de React, que proponía un modelo basado en componentes más ligero y una curva de aprendizaje mucho más amigable.

## El renacimiento: Angular 2+

La comunidad necesitaba un cambio radical, lo que dio lugar al nacimiento de **Angular 2**. Esta versión no fue una actualización, sino una reescritura total que rompió la compatibilidad con la versión 1. Introdujo:
*   **Arquitectura basada en Componentes**: Dejando atrás las directivas complejas.
*   **TypeScript**: Se adoptó como lenguaje base, aportando tipado estático y robustez.
*   **NgModules**: Un sistema de organización de código mediante módulos.

A partir de aquí, el framework pasó a llamarse simplemente **Angular**. Surgió el concepto de **"The Angular Way"**: una única solución estandarizada y óptima para cada problema, lo que garantiza consistencia en grandes equipos de desarrollo.

---

## La revolución de Angular 17

Hasta la versión 16, la arquitectura de módulos (`NgModule`) era el estándar absoluto. Sin embargo, en **Angular 17** se oficializó el cambio de paradigma hacia los **Standalone Components**.

*   **Independencia**: Los componentes ya no necesitan pertenecer a un módulo para funcionar.
*   **Encapsulamiento**: Cada componenteStandalone gestiona sus propias dependencias, actuando como una unidad autónoma.
*   **Simplificación**: Se reduce drásticamente el código necesario para configurar la aplicación (*boilerplate*).

Además, se inició la transición de herramientas internas, pasando de Webpack hacia motores más rápidos como **Esbuild** y **Vite**, optimizando los tiempos de compilación y el rendimiento del servidor de desarrollo.

---

## Angular 19 y el Presente

Angular 19 consolida la visión "Zoneless" y la reactividad basada en **Signals**. Los Standalone Components son ahora el estándar absoluto, hasta el punto de que la propiedad `standalone: true` se asume por defecto, eliminando la necesidad de declararla explícitamente en la mayoría de los casos.

Aparece la opción `strictStandalone` en el archivo `tsconfig.json`, que permite forzar a todo el proyecto a seguir esta arquitectura moderna, dejando los módulos como una herramienta opcional para casos de legado o integraciones específicas.

## Hacia Angular 20 y más allá

La evolución continúa enfocada en eliminar la dependencia de **Zone.js** (Zoneless) y en profundizar en la reactividad con **Signals**. El objetivo es un framework más ligero, rápido y predecible, manteniendo siempre la robustez que caracteriza a "The Angular Way".