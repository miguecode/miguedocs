---
title: "Animaciones (Propiedad animation)"
---

> En CSS, existen 2 formas de animar elementos y son: Las transiciones y las animaciones. En este apunte, vamos a hablar sobre las animaciones.

- Muchas veces, las transiciones y animaciones mejoran la experiencia de usuario (UX). Esto es así porque estamos ayudándole al usuario a entender "de dónde viene y a dónde va". Estamos como dándole una sugerencia sobre la causa y el efecto de la interacción que ha ocurrido por su acción. Es como cuando le modificamos el estado "active" a un botón. Al hacerlo, estamos como diciéndole al usuario "Sí, estás tocando este botón". O cuando al hacerle hover, el cursor se pone pointer.


> Animaciones

- Con las animaciones, podemos animar elementos sin tener que interactuar con ellos o evaluar sus estados. La clave de todo esto son los "keyframes".

- Los keyframes son la forma con la que nosotros le vamos a decir cómo se tienen que animar los elementos. Keyframes significa fotogramas clave.

- Vamos a aprender a hacer todo esto con CSS, que es la mejor forma de hacerlo de cara al rendimiento. Todo podría hacerse con JS pero sería peor para el performance. 

- Así es el cuerpo de una animación:

@keyframes [nombre de la animación] {
	[estado inicial -> from / 0% / 0s] {
		...
	}
	
	[estado intermedio -> 50% / 1.5s] {
		...
	}
	
	[estado final -> to / 100% / 3s] {
		...
	}
}

- Ahora, veamos un ejemplo:

@keyframes move {
	from {
		transform: translateY(0px);   // Posición exactamente igual
	}
	
	to {
		transform. translateY(10px);   // Posición desplazada 100px hacia abajo
	}
}


- Ahora, con nuestra animación "move" creada, podemos reutilizarla colocándosela a cualquier elemento que queramos, usando la propiedad "animation".

- En el "from" pusimos transform: translateY(0px). Y la verdad es que, ese es el valor por defecto de la propiedad translateY. Por ende, podríamos no poner nada y sería el mismo resultado. Es decir, podríamos sacar lo de "from { ... }". Pero acá lo mostramos porque estamos aprendiendo.


>> Propiedad animation

.pulser {
	animation: move; // "move" es literalmente la animación que creamos
}

- Con eso no es suficiente. Es necesario que le asignemos una duración a la animación, usando la propiedad "animation-duration". Hay que hacerlo porque por defecto empieza con 0.

.pulser {
	animation: move;
	animation-duration: 3s;
}

- De esta forma, al hacer F5, los elementos con clase "pulser" van a aparecer en pantalla en su posición normal, y en una animación que dura 3 segundos van a moverse 10px hacia abajo y después vuelven a su posición normal otra vez. La animación sólo ocurre una vez. Si no sabemos cuánto va a durar una animación, le podemos poner "auto" a la propiedad duration.

- Ahí, nosotros estamos poniendo "animation: move", pero es porque "animation" es un atajo, como lo era "transition". En realidad lo que estaríamos haciendo ahí es usar la propiedad "animation-name".

>> Pseudoelementos ::after y ::before

- Los pseudoelementos (que no son lo mismo que las pseudoclases) son ELEMENTOS HTML que aparecen justo después (after) o justo antes (before) de un elemento. Es como si se incrustara en el HTML para ser hijo o padre del elemento tratado. En este caso, vamos a hacerlo con todos los elementos que tengan la clase .pulser:

.pulser {
	position: relative;  // Lo hacemos para que el pseudoelemento sea relativo a él
	background: lightblue;
}

.pulser::after {
	position: absolute;  // Su posición va a ser relativa al elemento .pulser
	width: 100%
	height: 100%
	top: 0;
	left: 0;
	background: lightblue;
	z-index: -1;  // Va a aparecer por detrás del elemento padre
}

- Ahora, vamos a crear una nueva animación llamada "pulse"

@keyframes pulse {
	0% {
		opacity: 0;
	}
	
	50% {
		scale: 2;
	}
	
	100% {
		opacity: .5;  // .5 es lo mismo que 0.5 o 50%
	}
}

- Ya creada la animación pulse, se la vamos a colocar al pseudoelemento after, así:

.pulser::after {
	... Todas las propiedades que habíamos puesto ...
	animation-name: pulse;
	animation-duration: 2s;
	animation-timing-function: ease-in-out;
}

- Esto es muy similar a transition. Con "animation-name", especificamos el nombre de la animación, que va a ser la que nosotros creamos. La duración es obligatoria y debe ser mayor a 0 para que la veamos, y la "animation-timing-function" es exactamente lo mismo que la "transition-timing-function", es decir, la que sirve para indicar a qué tanta velocidad debe realizarse la animación. ease-in-out significa: "Más rápido al inicio y al final, pero más lento en el medio".

- Recordemos: 

animation-timing-function: linear; // Por defecto. Siempre la misma velocidad
animation-timing-function: ease-in; // Más lento al inicio y más rápido al final
animation-timing-function: ease-out; // Más rápido al inicio y más lento al final
animation-timing-function: ease-in-out; // Al inicio y al final va lento, en el medio va rápido
animation-timing-function: ease; // Es casi igual al in-out, pero comenzando un poquito más rápido
animation-timing-function: steps(5) // Va en 5 pasos (puede ir cualquier número)
animation-timing-function: cubic-bezier(0.5, 1.9, 1.24, 0.67) // Hace la transición a mano


- Bueno, una vez que ya creamos el pseudoelemento, incluyendo su animación, vamos a ver que al hacer F5, se hace la animación, que aumenta el tamaño y cambia la opacidad. Y que, al terminar de agrandarse, va a volver a achicarse. ¿Por qué? Porque por defecto, al terminar la animación, el elemento (en este caso, el pseudoelemento after) va a volver nuevamente a su estado inicial. Que sería, en este caso, del mismo tamaño que el elemento pulser, quedando atrás de él.

- Pero la animación se hace una vez sola. ¿Por qué? Por la propiedad "animation-iteration-count".

animation-iteration-count: 5;   // Animación que se repite 5 veces
animation-iteration-count: infinite;   // Animación que se repite infinitamente


>> Dirección de la animación

img {
	animation: mover;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-direction: normal; // Valor por defecto
	// animation-direction: reverse; // La animación es totalmente en reversa
	// animation-direction: alternate; // Primero se hace normal, y después en reversa
	// animation-direction: alternate-reverse; // Lo mismo que la anterior, pero al revés
}

@keyframes mover {
	to {
		transform: translateX(200px);  // Se mueve en el eje X 200 pixeles
	}
}

- Las animaciones también se pueden pausar con la propiedad: "animation-play-state"". Le tenemos que poner el valor "paused".

animation-play-state: paused;


>> El lugar donde quedan los elementos

- Como vimos hasta ahora, cada vez que una animación inicia y termina, el elemento vuelve al estado inicial automáticamente. Eso es porque la animación ya hizo todo su recorrido. Pero nosotros podemos cambiar este comportamiento con la propiedad "animation-fill-mode". Esta propiedad determina qué va a hacer el elemento antes y después de la animación.

animation-fill-mode: none; // Por defecto (ningún estado)
animation-fill-mode: backwards; // Usa el keyframe inicial 
animation-fill-mode: forwards; // Una vez termina la animación, se queda en el key-frame final
animation-fill-mode: both; // La más común. Usa el keyframe inicial al principio, y el final al final


- Al igual que con transition, la propiedad animation sirve como atajo para escribir todo en una línea.

animation: mover 2s linear 3s infinite reverse both
(name - duration - timing-function - delay - iteration-count - direction - fill-mode

- Los obligatorios sólo son "name" y "duration". Los demás se pueden poner o no. Por ejemplo podríamos especificar todas las propiedades menos "delay", y hacerlo en una sola línea.

- Lógicamente, lo ideal es usar el atajo "animation". Pero para aprender y entender cómo funciona por debajo, es bueno saber cuál es cada propiedad.


>> Concatenar animaciones en un sólo elemento

- Esto es muy sencillo, con la misma propiedad "animation", un elemento puede tener más de una animación separadas por ",", así:

img {
	animation: 
		mover 3s steps(10) both,
		agrandar 1s linear 3s both;
}

- En este caso, la animación "agrandar" tiene 3 segundos de delay, o sea que se va a notar cómo esta segunda animación se va a realizar después de "mover". De no ser por eso, se harían las dos a la vez.