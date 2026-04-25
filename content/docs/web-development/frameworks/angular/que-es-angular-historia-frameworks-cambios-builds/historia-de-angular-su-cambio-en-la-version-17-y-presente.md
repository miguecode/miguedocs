---
title: "Historia de Angular, su cambio en la versión 17 y presente"
description: "&gt; Historia de Angular"
---


 > Historia de Angular

- El primer Angular se conocía como AngularJS (versión 1.x). Fue un framework muy innovador en su época, con una fuerte orientación estructural y una comunidad muy activa. Introdujo conceptos como data binding, directivas, y un enfoque declarativo para manejar el DOM.

- Sin embargo, con el tiempo, AngularJS se volvió complejo de mantener y escalar, especialmente frente a nuevas alternativas como React, que ofrecían una arquitectura basada en componentes con una curva de aprendizaje más amigable. React podía hacer todo lo que hacía AngularJS, y de manera más sencilla.

- La comunidad, la cual siempre fue su fuerte, intentó extender AngularJS manipulando directivas para simular cmoponentes, pero pronto quedó claro que se necesitaba una nueva versión desde cero. Así nació Angular 2, que rompía completamente la compatibilidad con AngularJS. Esta nueva versión introdujo componentes nativos, TypeScript como lenguaje base, y un sistema de módulos (NgModule) para organizar el código. Desde ese punto, el framwork pasó a llamarse simplemente Angular.

- Ya por esta época, nació el concepto de "The Angular Way", es decir, la forma de Angular de resolver las cosas. Y... ¿Qué es eso? Eso significa que si usabas Angular, tenías UNA solución para UN problema. Y todos acudían a la misma solución, ya que es la óptima. Esto es muy distinto a lo que podía pasar con React, que tiene múltiples soluciones para un mismo problema (lo cual no es positivo).


## El cambio en Angular 17

- Hasta Angular 16, Angular utilizaba por defecto una arquitectura basada en NgModules (Módulos), que actuaban como contenedores para organizar componentes, directivas, pipes y servicios. Esto cambió progresivamente con la introducción de los Standalone Components en Angular 14, pero fue recién en Angular 17 cuando se adoptaron como estándar oficial.

- Los Standalone Components son independientes, lo que significa que no necesitan estar declarados dentro de un módulo para funcionar. Contienen sus propias dependencias y configuración, lo que permite escribir aplicaciones más simples y modulares.

- Entonces... ¿Se eliminaron los módulos? En realidad no, siguen existiendo y pueden ser usados si el proyecto lo requiere. Sin embargo, hoy Angular promueve un enfoque sin módulos para nuevos proyectos, haciendo que cada componente standalone actúe como una unidad encapsulada, parecida a un mini-módulo.

- Antes, Angular usaba Webpack como herramienta principal para empaquetar y compilar el código. Y aunque todavía lo usa internamente a través del Angular CLI, últimamente está migrando a herramientas más modernas como esbuild y Vite, que ofrecen mayor velocidad y eficiencia. En Angular 17, la nueva experiencia de desarrollo (Angular Dev Server) ya usa Vite por defecto en algunos entornos.


## Angular 19

- Angular 19 sigue consolidando la tendencia hacia los Standalone Components. Ahora no sólo que son la opción por defecto, sino que ya ni siquiera es necesario especificar "standalone: true" en cada componente, directiva o pipe. Esto reduce la dependencia de los NgModules en la mayoría de casos. En la configuración del compilador (tsconfig.json), ahora aparece la opción strictStandalone, la cual al activarla, asegura que todos los componentes sean standalone.

- Obviamente, tiene otras novedades como la reactividad con Signals, Detección de cambios Zoneless y demás. Esto lo vamos a hablar en otros apuntes.


## Angular 20

- Más de lo mismo. Es seguir la misma línea de Angular 19, aprobando los cambios a futuro hacia el uso de Signals y Zoneless.