---
title: "Eventos"
---

> Eventos

- Un evento es algo que ocurre en una página. Pero literalmente cualquier cosa que ocurra, es decir, desde el momento cero hasta el último (desde que se empieza a cargar hasta que se cierra). Cada vez que movemos el mouse, hacemos un clic, cerramos o volvemos a abrir la pestaña, lo que sea.


> Handler Events (Manejadores de Eventos) (Ya no se usan)

- Un manejador de eventos tiene sus propios métodos y propiedades. Como dice su nombre, lo usamos para manejar eventos. Es decir, realizar funciones en el momento en el que algún evento ocurre.

- Por ejemplo, "onclick". Onclick es un Event Handler, es decir, un manejador de eventos:

	const button = document.querySelector(".button");
	
	button.onclick = ()=> {
		console.log("Holaaa");
	}

- Ese es un ejemplo de onclick. Entonces, cada vez que se dispara el evento de clic, se ejecuta esa función flecha.

- Si bien esto antes se hacía, ahora ya no. Y lo que se usa ahora son los Event Listeners.



> Event Listeners (Escuchadores de eventos)

- Un escuchador de eventos se añade mediante el método "addEventListener(evento, función)". Lo que hace es prestarle atención todo el tiempo al evento que pasamos por primer parámetro. Cada vez que se dispare dicho evento, se ejecuta la función que le pasamos por segundo parámetro. Veamos:

	button.addEventListener("click", () => {
		console.log("Holaaa");
	});

- En este caso, le agregamos un escuchador de eventos al elemento "button". Y el evento que le pasamos es "click". Así que, cada vez que se le hace click, se ejecuta esa función.

	button.addEventListener("click", (e) => {
		console.log(e);
	});

- Esa "e", significa event. Ese parámetro que recibe la función va a ser un objeto de tipo Event. Y, lógicamente, lo que recibe es el propio evento disparado. En este caso, el evento es de tipo MouseEvent.

- Entonces, al hacer "console.log(e)", vamos a poder ver todas las propiedades del evento ejecutado: en qué posición de la página ocurrió, en qué momento, y algo que nos puede importar es "en qué elemento del DOM ocurrió". Eso se guarda en la propiedad "target" (objetivo), veamos:

	e.target = <button class="button">Hacer clic acá</button>


> Event Flow (Bubbling y Capturing)

- Event Flow hace referencia al ORDEN en el que se van a ejecutar los eventos. Y hay 2 tipos, el de burbuja y el de captura (bubbling y capturing). El que viene por defecto, siempre es Bubbling.

- Si en nuestro HTML tenemos un contenedor DIV, que es padre de un elemento button, vamos a notar que si le agregamos un escuchador de eventos al evento clic del contenedor, también va a producirse cuando hacemos clic al botón. Es decir, si hacemos clic al botón, también cuenta como que le estamos haciendo clic al contenedor. Eso tiene sentido ya que el botón está adentro del contenedor. 

	button.addEventListener("click", (e) => {
		console.log(Hiciste clic en el botón);
	});
	container.addEventListener("click", (e) => {
		console.log("Hiciste clic en el contenedor");
	});

- Pero... ¿Cuál se ejecuta primero y cuál después? Bueno, a eso hace referencia el Bubbling. En este caso, primero se ejecuta el evento del botón. Esto es así porque va desde el más específico hacia el menos específico. Así que primero se muestra "Hiciste clic en el botón" y después "Hiciste clic en el contenedor". A esto se lo llama PROPAGACIÓN. Ya que, nosotros le hacemos clic a algo más específico (un pequeño botón), pero a la vez también estamos haciéndole clic a todos los elementos padre de él. Es como que se propaga de adentro hacia afuera.

- Como el evento viene por defecto en Bubbling, la propagación se da desde adentro hacia afuera. Pero si nosotros queremos alternar el orden, podemos poner un "true" para que no sea Bubbling, y que sea Capturing. Y de esa forma, la propagación se da de afuera hacia dentro (del menos al más específico).

	container.addEventListener("click", (e) => {
		console.log("Hiciste clic en el contenedor");
	}, true);

- Así, container va a ejecutarse antes que button, ya que este último no es capturing. Esto tiene sentido pero no es lo más usado. Lo más usado es usar "StopPropagation". Veamos:


> StopPropagation

	button.addEventListener("click", (e) => {
		e.stopPropagation();
		console.log(Hiciste clic en el botón);
	});

- Si ejecutamos el método stopPropagation(), como bien dice, lo que hacemos es parar la propagación. Y así, cuando le hacemos clic al botón, ese va a ser el único evento de clic disparado. No importa que tenga más elementos padre. El único que se va a ejecutar es el clic del botón, y no se propaga hacia los demás de afuera.


> Los Eventos más comunes

- Estos son los Events más comunes, con sus nombres y descripción. Así tal cual están nombrados, es como se agregarían al método addEventListener([nombre del evento], [función]). Se escriben siempre en minúscula.

>> Mouse Events (Eventos del mouse)

- "click" → Ocurre cuando hacemos un clic.
- "dblclick" → Ocurre cuando hacemos un doble clic.
- "mouseover" → Ocurre cuando el puntero se mueve sobre un elemento o uno de sus hijos.
- "mouseout" → Ocurre cuando el puntero se mueve hacia fuera de un elementoo en uno de sus hijos.

- "contextmenu" → Ocurre cuando hacemos clic derecho en un elemento, abriendo el menú contextual.
- "mouseleave" → Ocurre cuando el puntero del mouse sale del área del elemento (sin importar los hijos).
- "mouseup" → Ocurre cuando soltamos un botón del mouse (luego de haberlo presionado). 
- "mousemove" → Ocurre cuando el puntero del mouse se mueve dentro del elemento. 


>> Keyboard Events (Eventos del teclado)

- "keydown" → Ocurre cuando una tecla es presionada (y no se soltó todavía).
- "onkeyup" → Ocurre cuando una tecla es soltada, es decir, dejó de ser presionada.
- "keypress" → Ocurre cuando una tecla fue presionada y se soltó. [Obsoleto en muchos casos, se recomienda usar keydown].


>> Interface Events (Eventos de la interfaz)

- "load" → Ocurre cuando un elemento se ha cargado (por ejemplo, imágenes, scripts o la página entera).
- "error" → Ocurre cuando sucede un error durante la carga de un archivo multimedia o recurso.
- "beforeunload" → Ocurre cuando el usuario está por abandonar la página (y permite mostrar un mensaje de confirmación).
- "unload" → Ocurre cuando la página se está descargando (ya se va del navegador). [Obsoleto y poco fiable].
- "resize" → Ocurre cuando se cambia el tamaño de la ventana del navegador.
- "scroll" → Ocurre cuando el usuario hace scroll en un elemento o en la ventana.
- "select" → Ocurre cuando el usuario selecciona texto en un <input> o <textarea>.


>> Timers (Temporizadores)
	
- setTimeout(function, delay); // Se ejecuta la función una vez cuando termina el tiempo de delay.
- setInterval(function, interval); // Se ejecuta la función cada vez que pasa el tiempo de intervalo.