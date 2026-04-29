---
title: "Detección de Cambios: De Zone.js a Signals"
description: "Comprende la evolución de la detección de cambios en Angular: qué es Zone.js, por qué el futuro es Zoneless y cómo las Signals revolucionan la performance de las aplicaciones."
---

## ¿Qué es Zone.js?

Históricamente, Angular ha dependido de una librería llamada **Zone.js**. Su función es monitorear todas las operaciones asíncronas de la aplicación (promesas, eventos del DOM, `setTimeout`, etc.). Cuando detecta que algo ha terminado, le avisa a Angular: *"Algo ha ocurrido, revisa si hay cambios en la interfaz"*.

Sin embargo, este proceso tiene una ineficiencia clave: **el burbujeo global**. Ante cualquier pequeño cambio en un componente, Zone.js provoca que Angular recorra el árbol completo de componentes para verificar qué debe actualizarse. Aunque se optimizó con el tiempo, sigue siendo un proceso costoso para aplicaciones grandes.

---

## La Evolución: De Global a Quirúrgico

Para mejorar el rendimiento, Angular introdujo dos conceptos fundamentales que nos llevan hacia el futuro **Zoneless** (sin Zone.js):

*   **ChangeDetectionStrategy.OnPush**: Esta estrategia le indica a Angular que solo revise un componente si sus entradas (`@Input`) han cambiado o si ocurre un evento de usuario explícito dentro de él.
*   **Signals**: Son "canales" de datos reactivos. A diferencia de las variables normales, una Signal sabe exactamente quién la está utilizando. Cuando el valor de una Signal cambia, Angular no necesita revisar todo el edificio; sabe qué "habitaciones" (componentes) impacta el cambio y actúa solo allí.

### Analogía del Portero vs. Cámaras
1.  **Zone.js**: Es como un portero que revisa **todos los departamentos** de un edificio cada vez que suena cualquier timbre.
2.  **Zoneless (Signals)**: Es como un sistema de cámaras inteligentes que sabe exactamente qué puerta se abrió y solo envía al personal a esa oficina específica.

---

## Programación Reactiva: Canales y Espectadores

El uso de Signals fomenta la **Reactividad**, un concepto que podemos ver mediante esta analogía:

1.  **Canales (Tubos)**: Son flujos de datos por donde pasan "pelotas" (eventos).
2.  **Espectadores (Componentes)**: Observan a través de agujeros en esos tubos. Cada espectador es un mundo y reacciona de forma diferente a lo que ve pasar.
3.  **Filtrado**: Mientras un espectador ve una pelota verde, otro ve una pelota rápida. Cada uno toma lo que necesita del canal y **reacciona** actualizando su propia vista.

Al usar Signals como canales, Angular puede rastrear automáticamente quién disparó el evento y quién reaccionó a él. Esto elimina la necesidad de "vigilar" todo el tiempo, ya que la aplicación se vuelve autogestionada por el flujo de datos.

---

## El Rol de RxJS en el Ecosistema

Angular sigue siendo compatible y potente gracias a **RxJS**, que gestiona tres tipos principales de canales:

1.  **Observable**: Un canal unidireccional donde solo el productor puede enviar datos.
2.  **Subject**: Un canal bidireccional donde múltiples emisores pueden enviar datos.
3.  **BehaviorSubject**: Un canal que, además de ser bidireccional, siempre guarda la "última pelota" emitida para entregarla a nuevos suscriptores.

> [!IMPORTANT]
> Las **Signals** no reemplazan a RxJS. Las Signals son ideales para el **estado de la UI** y la detección automática de cambios, mientras que RxJS sigue siendo la mejor herramienta para **flujos asíncronos complejos** como orquestación de APIs o WebSockets.

---

## Hacia un Futuro Zoneless

La combinación de **Signals + OnPush + Zoneless** representa el estándar de alta performance en Angular moderno (v18 - v19+). Al eliminar Zone.js, reducimos el peso del paquete final (*bundle size*) y ganamos un control total y predecible sobre cuándo y cómo se actualiza nuestra aplicación.