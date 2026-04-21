---
title: "Comunicación entre Componentes"
---

> Comunicación de componentes

- Esto es muy similar a la herencia de layouts. La comunicación entre componentes básicamente es que un componente importe a otro. Y en ese movimiento, uno podría pasarle valores al otro.

- Existen 2 formas para realizar esta comunicación:

1. Con las propiedades

- Esta es la forma más sencilla y se hace con el objeto Astro.props. Lo mismo que vinimos haciendo anteriormente. En el momento en el que un componente invoca a otro y le pasa valores a sus propiedades, ahí se está realizando la comunicación.

- Para hacer esta prueba, podemos crear dos componentes: Hijo y Padre. El componente Padre es quien va a invocar al componente Hijo, y le va a pasar una propiedad llamada mensaje. Y el hijo lógicamente tiene que recibir ese dato, usando Astro.props. 

2. Con Slots

Los slots permiten pasar contenido dinámico del componente padre al hijo. En este caso, el hijo no solo recibe datos simples, sino también fragmentos de HTML que se pueden renderizar directamente en su interior.
Esto es útil cuando el componente hijo necesita un mayor nivel de flexibilidad para manejar contenido.

--- // Padre.astro
import Hijo from './Hijo.astro';
---
<Hijo>
  <p>Contenido dinámico desde el padre</p>
</Hijo>

--- // Hijo.astro
---
<div>
  <slot></slot> <!-- Aca se inserta el contenido pasado desde el padre -->
</div>