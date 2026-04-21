---
title: "DOM y Virtual DOM. Detección de cambios en React"
---

> Detección de cambios en React

- La detección de cambios en React está basada en Triggers.

- Un Trigger es cualquier tipo de evento, el cual va a iniciar un proceso de render. Es decir, algo que inicie una acción de render. Ejemplos de render podrían ser un botón, el estado interno de algún componente, o una llamada a una API.

- Existen dos tipos de trigger:

1. Trigger Inicial. Cuando el componente se monta, es decir, se carga, ahí mismo se renderiza.
2. Re-Render. Esto es cuando el componente se vuelve a renderizar.


> DOM y Virtual DOM

- En React, existe el DOM y el DOM virtual. El primero, es el mismo de siempre. El DOM que ya conocemos, el que podríamos decir que es "el real", o "el original". Y el Virtual DOM (o DOM virtual) es una copia de ese mismo DOM, pero con los cambios efectuados por algún trigger. Es decir, si cambia alguno de nuestros componentes, ese cambio específico que haya ocurrido se va a ver primero en el Virtual DOM. 

- Y el DOM original, una vez que nota que el Virtual DOM tiene algo distinto a él, tiene que igualarse. Es decir, hay que analizar al DOM y ver qué diferencias tiene con el Virtual DOM. Una vez que se ven esas diferencias, el DOM va a ser modificado para quedar idéntico al Virtual DOM. Es como si el VDOM siempre estuviese "un paso por delante", y le indica al DOM real qué cosas tiene que actualizar.

- Esos "cambios" que hace el DOM basado en el Virtual DOM, son los llamados "Commits".


> ¿Qué es un commit en React?

- Un commit en React es la confirmación de un cambio en el DOM, después de haber hecho el proceso de comparación entre dicho DOM y el Virtual DOM. Es decir:

1. DOM y Virtual DOM exactamente iguales.
2. Ocurre un trigger, es decir, se ejecuta un cambio en algún componente.
3. Este cambio se ve reflejado en el Virtual DOM.
4. Se hace una comparación entre el Virtual DOM y el DOM, para ver qué diferencias hay.
5. En base a las diferencias que haya, el DOM va a cambiar. Es decir, el DOM tiene que quedar igualito al Virtual DOM.
6. El DOM realiza los cambios que tenga que hacer para quedar igualito al Virtual DOM. 
7. Esos cambios que hace, se llaman commits.

- El proceso en 3 pasos:

1. Primer momento		DOM - Virtual DOM
   					   0	   =	   0
   
2. Segundo momento	DOM - Virtual DOM
   					   0	  !=	   1

3. Tercer momento		DOM - Virtual DOM
   					   1	   =	   1