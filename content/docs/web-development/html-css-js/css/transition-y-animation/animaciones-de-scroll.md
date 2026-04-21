---
title: "Animaciones de Scroll"
---

> Animaciones que se activan a través del Scroll

- Con la misma metodología de antes, vamos a ver cómo lograr esto con CSS, sin cargar nada de JS, lo cual ayuda al rendimiento de la aplicación.

- Esto está relacionado al Main Thread, que es el proceso que pasa cuando una página web se carga. El JS se carga en este proceso. Por eso, lo ideal es no cargar el Main Thread de más.

- Antes no se podían hacer Scroll Animations sólo con CSS, necesitábamos JS sí o sí. Pero ahora, se creó una nueva API llamada scroll-driven Animations. Estas animaciones se reproducen fuera del Main Thread, consiguiendo un rendimiento fluido con un par de líneas de código.

- Para entenderlo desde 0, vamos a hacer una "progress-bar". La típica que aparece en wattpad o en páginas con artículos de lectura. La progress-bar detecta en qué porcentaje de la página nos encontramos actualmente, vinculándose con el scroll.

<div id="progress"></div>

<main> ... </main>

body {
	margin: 0px;
	padding: 0px;
}

#progress {
	position: fixed;
	top: 0;
	height: 30px;
	width: 0%
	background: red;
	animation: progress-grow auto linear;
}

@keyframes progress-grow {
	from { width: 0% }
	to { width: 100% }
}


> Propiedad animation-timeline

- Para poder todo esto con sólo CSS, es indispensable el uso de la propiedad "animation-timeline". Lo malo es que, al ser relativamente nueva, no todos los navegadores la soportan. Si quisiéramos, podríamos hacer un "respaldo de funcionalidad". Estos respaldos son como "el plan b" para cierta funcionalidad no soportada por navegadores. O sea que, con JS, podemos replicar la funcionalidad de animation-timeline, e incluirla en caso de que el navegador usado por el usuario no reconozca esa propiedad. Lógicamente, no va a ser igual de performante, pero sirve.

#progress {
	animation: progress-grow auto linear;
	animation-timeline: scroll(root block);
}

- A la propiedad "animation-timeline" hay que indicarle "a partir de qué progresa o no progresa la animación". En este caso, le vamos a dar el valor "scroll()". Scroll recibe 2 valores: el punto de partida, que en nuestro caso es "root" (raíz), y un segundo valor opcional, que indica el eje (X o Y) de scroll. En este caso, le ponemos block (eje Y). Por defecto, viene en "block", así que podríamos no escribirlo.

- Por cierto, en este caso, como trabajamos directamente con el scroll, no necesitamos agregar un valor de duración. Así que le ponemos "auto".

¡Y listo! Ya con esto, nuestra progress-bar funciona perfectamente.


> Animación en el nav-bar

- Este es el ejemplo de lo que usé en mi portfolio. La idea de esto es que la animación se realice durante el tiempo en el que estamos haciendo scroll desde el pixel 0 hasta los 100px verticales. Lo vamos a hacer con la propiedad "animation-range", la cual se conecta directamente con la función de scroll.

animation-range: 0 100px;

- La propiedad animation-range toma los valores de forma horizontal y vertical. En este caso, le ponemos 0 de horizontal (porque no nos interesa) y 100px de vertical. Lógicamente, cuantos más pixeles pongamos, más larga se haría la animación, ya que tendríamos que scrollear más hacia abajo para ver toda la animación de inicio a fin.

#desktop-navbar {
    animation: nav-shadown 2s linear both;
    animation-timeline: scroll(root block);
    animation-range: 0 100px;
  }

  @keyframes nav-shadown {
    0% {
      background: transparent;
    }
    100% {
      @apply shadow-lg backdrop-blur;   (TailwindCSS)
    }
  }


> Galería de imágenes

- Supongamos que tenemos una página con distintas imágenes en modo grilla. Vamos a animar su aparición-desaparición usando animaciones de scroll. 

- Vamos a usar view(). Es un valor de la propiedad animation-timeline. Lo que hace view es que la animación solo se realice cuando sea visible el elemento.

section img {
	animation: reveal linear both;
	animation-timeline: view();
	animation-range: entry 20% cover 30%;
}

- ¿Qué significan los valores "entry" y "cover" en este caso?: Significa que "Cuando haya entrado un 20% de la imagen en el viewport, va a ser el inicio de la animación. Y el final de nuestra animación, va a ser cuando ya estemos cubriendo un 30% del elemento en el viewport". O sea, el rango de animación sería cuando el elemento img está entre un 20% y un 30% de su visión en el viewport.

@keyframes reveal {
	from {
		opacity: 0;
		// translate: 0 100px;  // x: 0 - y: 100px
		// scale: .5;
	}
	
	to {
		opacity: 1;
		// translate: 0 0
		// scale: 1;
	}
}

- Y eso sería todo. Acá hay valores comentados, ya que son opcionales. Queda en la imaginación de uno qué tan loca puede ser la animación o qué tantas cosas podemos variar.

- En resumen, todo se basa en estas dos líneas de CSS:

animation-timeline: scroll();
animation-timeline: view();

- Una página muy buena para ver ejemplos es https://scroll-driven-animations.style/