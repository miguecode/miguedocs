---
title: "Det. de cambios. Zone.js, Znless, Signals, Reactividad"
---

> Detección de cambios en Angular

- Para empezar, tenemos que saber que Zone.js es una librería de JavaScript que "monitorea" todas las operaciones asíncronas (promesas, eventos, timeouts, etc.) de nuestra aplicación. Lo que hace es "interceptar" esas operaciones y le avisa a Angular: "Che, hubo un cambio. Mirá a ver si tenés que actualizar el DOM". Esto no es del todo eficiente.

- Últimamente, la detección de cambios en Angular está empezando a pasar de Zone.js a Signals (señales), y ¿Por qué? Esto es porque la detección de cambios con Zone.js, como dijimos, es poco eficiente: cada vez que ocurre un cambio, se pone a hacer un burbujeo en TODO el DOM. Entonces, si hay un cambio en algún componente específico, el Zone.js se pone a recorrer todo el resto del DOM a ver si había otro cambio. Es cierto que después se mejoró ese sistema mediante el uso de ramas, pero sigue sin ser lo ideal.

- Más adelante, apareció el concepto de ChangeDetectionStrategy (Estrategia de detección de cambios). Al configurar esta estrategia en "OnPush", cambiamos ese comportamiento: ahora Angular solo chequea los componentes que recibieron cambios explícitos. A raíz de esto, aparecieron las Signals, pero ojo: Zone.js sigue siendo la opción predeterminada, lo cual se espera que en un tiempo deje de ser así. 

Zone.js -> "Cuando algo cambia, chequeo TODO."
Signals -> "Cuando algo cambia, sé exactamente dónde impacta ese cambio."

- Y... ¿Qué es "Zoneless"? Literalmente significa "Sin Zone.js". Zoneless hace referencia a la no necesidad de Zone.js, haciendo que Angular ya no necesite "vigilar" todo el tiempo las operaciones asíncronas, y en cambio, usa Signals y otros mecanismos para detectar cambios de forma mucho más precisa y controlada. ¿Cómo? Haciendo que cada componente registre de forma explícita sus propias dependencias reactivas (Ej: una Signal). Entonces, Angular ya sabe exactamente qué actualizar y cuándo.

- Una analogía rápida puede ser:

1. Zone.js es como un portero que revisa todo el edificio cada vez que alguien toca el timbre.

2. Zoneless (usando Signals) es como un sistema de cámaras que sabe exactamente en qué puerta hay movimiento, y por ende, solo revisa esa puerta.


> Reactividad o Programación Reactiva (Reactive Programming)

- El uso de Signals favorece a la Programación Reactiva o Reactividad. Para entender este concepto, pensemos en la siguiente analogía: 

1. Canales: Son tubos con agujeritos.
2. Espectadores: Van a mirar a través de esos agujeritos.
3. Eventos: Pasa un objeto por el tubo

- Cada espectador es como un humano, cada uno es su propio mundo, y cada uno ve lo que quiere. Es posible que pase un objeto por un tubo, y los espectadores hayan visto cosas distintas. Quizá uno vió que pasó una pelota, otro vió que el objeto era verde, y otro vió que pasó a 20km/h. Es decir, ante un mismo objeto pasado por un canal, los espectadores vieron distintos aspectos de ese objeto, a través de los agujeritos del canal/tubo.

- Y como cada espectador ve algo distinto, REACCIONA de forma diferente ante lo que vio. Y de ahí viene la "Reactividad", de "Reaccionar" a algo. En esta analogía, los espectadores serían nuestros COMPONENTES. Los cuales, ante un evento, van a reaccionar de una forma particular e individual.

- Y ahora unimos dos conceptos: Las Signals (señales), y los canales. Sí: las Signals son nuestros canales, y gracias a ellas, vamos a poder saber lo siguiente:

1. Quién hizo pasar la pelota por el tubo. Es decir, quién disparó el evento.
2. Quién escuchó el evento. Es decir, qué espectador reaccionó a la pelota que pasó a través del tubo.

- Entonces, ¿Quiénes se ven impactados por cambios? La respuesta es: los que usen el canal. Es decir, el que use la Signal. Y esos van a ser los componentes asociados a esa Signal. O sea, los espectadores que estaban viendo ese canal.


> Biblioteca RxJS

- La biblioteca de Angular llamada RxJS se encarga de manejar tres tipos de CANALES, que son los Observables, los Subject y los BehaviorSubject:

1. Observable: Es un canal, pero donde solo UNO puede hacer pasar la pelota por él. Es UNIDIRECCIONAL. 
2. Subject: Es un canal, pero en el cual TODOS pueden mandar una pelota. Es BIDIRECCIONAL.
3. BehaviorSubject: Es como el Subject, pero en este caso, siempre queda la última pelota guardada.

- Angular SIGUE usando la biblioteca RxJS, ya que es muy poderosa y está siendo usada en infinidad de proyectos. Es decir, las Signals no reemplazan totalmente a los Observables.


> Concepto general

- En resumen, Angular está dando un gran paso hacia una reactividad más precisa, dejando atrás los chequeos globales de Zone.js, y adoptando mecanismos donde solo reaccionan quienes realmente lo necesitan. Eso significa mayor eficiencia y control para nosotros como desarrolladores.

- Signals + OnPush + Zoneless = la mejor combinación para apps de alta performance.


> ¿Cómo implementar este cambio en código?

- Esto lo vamos a ver en un apunte futuro. No es nada difícil pero lo vamos a separar en un apunte dedicado a cómo implementar cada cambio nuevo de Angular.