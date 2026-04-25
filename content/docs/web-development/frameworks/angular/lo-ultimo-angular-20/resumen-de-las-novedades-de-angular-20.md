---
title: "Resumen de las novedades de Angular 20"
description: "Llegó Angular 20"
---


## Llegó Angular 20

- El 29 de mayo de 2025, Angular lanzó su versión 20. Vamos a ver sus novedades:

1. APIs de Signals pasaron a Estables
- Las APIs de Signals como effect(), linkedSignal(), toSignal() y afterNextRender() ahora son estables. Esto un paso importante hacia un modelo de reactividad más moderno y eficiente en Angular.

2. Formularios Basados en Signals (Developer Preview)
- Se introduce una nueva forma de manejar formularios usando Signals, ofreciendo una gestión de estado más reactiva y declarativa. Aunque todavía en Developer Preview, promete simplificar la lógica de formularios complejos.

3. Zoneless Angular (Continúa en Developer Preview)
- Angular 20 permite ejecutar aplicaciones sin necesidad de Zone.js, cosa que ya veníamos viendo en Angular 19. Sigue en Developer Preview, pero cada vez se acerca mas a la eliminación de Zone.js.

4. Hidratación Incremental (SSR) pasa a Estable
- Mejoras en el renderizado del lado del servidor con la estabilización de la hidratación incremental, permitiendo que los componentes se hidraten según sea necesario, mejorando los tiempos de carga y la experiencia del usuario. Esto también ya lo veníamos viendo desde antes, ahora es estable.

5. Cambios en Angular CLI y Guía de Estilos
- **Nombres de Archivos Simplificados**: Por defecto, los archivos generados ya no incluyen sufijos como .component.ts, adoptando nombres más concisos como user.ts.

- **Configuración Simplificada**: angular.json y tsconfig.json fueron simplificados para reflejar prácticas modernas de desarrollo.

- **Compatibilidad con Browserslist**: Se actualiza la configuración para apuntar a navegadores lanzados en los últimos 30 meses, alineándose con el estándar "Baseline".

6. Mejoras en Testing
- **Compilación Ahead-of-Time (AOT) para Tests**: Ahora es posible ejecutar pruebas utilizando AOT, lo que mejora la consistencia y el rendimiento de las pruebas.

- **Deprecación de Karma**: Se introduce un nuevo runner de pruebas más rápido, reemplazando a Karma como la opción predeterminada.

7. Deprecación de directivas
- Las directivas @NgIf, @NgSwitch y @NgFor, van en camino a deprecarse para ser reemplazadas por Control Flow Syntax.