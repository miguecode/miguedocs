---
title: "Control Flow Syntax (Defer, Placeholder, Loading y demás)"
---

> Bloque @defer

- Este bloque permite cargar contenido de forma diferida según una condición. Además, mejora el rendimiento aplicando Lazy Loading, ya que retrasa la carga de partes no críticas de nuestra aplicación. Esto mejora la experiencia de usuario, ya que muestra una interfaz progresiva. Esto es algo nuevo de Angular y va de la mano con el concepto de la hidratación incremental.

- Con la detección de cambios en OnPush, esto no funcionaría.

	@defer (when isImageVisible) {
		<img
			src=""
			alt="Differed Image"
		>
	}
	
	@if (!isImageVisible) {
		<button (click)="showImage()">See image</button>
	}

- Cuando la imagen sea visible (cuando isImageVisible sea true), se va a renderizar lo que tenga el bloque @defer. Entonces, en este caso, si hacemos clic en el botón que hace que isImageVisible sea true, se va a mostrar la imagen. Pero ojo: esto es con Lazy Loading gracias a usar @defer, entonces, la imagen se carga por primera vez en el momento en el que es visible, y no antes.


>> Bloque @placeholder (en combinación con @defer)

- Mientras no haya contenido, es decir, mientras el @defer no se esté renderizando, se va a mostrar todo lo que tenga el bloque @placeholder. Es como si fuera el @empty del @for, o el @else del @if.


>> Bloque @loading (en combinación con @defer y @placeholder)

- Para probar este bloque, primero vamos a definir algo de lógica:

	isContentReady = false;
	
	ngOnInit() {
		setTimeout(() => {
			this.iscontentReady = true;
		}, 4000);
	}

- Y en el HTML, podemos hacer esto:

	@defer(when isContentReady) {
		<p>Large Component Loaded</p>
	} @loading (after 200ms; minimum 2s) {
		<p>Loading... 😴😴😴</p>
	} @placeholder {
		<p>Setting up the content...</p>
	}

- El defer funciona como siempre: Cuando (when) isContentReady sea true, se muestra lo que tenga el bloque. Lo que hace el loading es ser un "intermediario" entre el el @defer y el @placeholder. Una vez que isContentReady es true, se va a renderizar lo que tenga @defer. Pero si lo que tiene es muy pesado, es lógico que tarde un poco en aparecer. En ese tiempo en el que tarda en aparecer lo que tiene @defer, es donde va a aparecer @loading (que va a ser un mensaje de "Cargando" o un Loader), justamente para evitar un parpadeo.

- Loading recibe un "after" y un "minimum". El after es como un delay antes de mostrar el loading, porque si nosotros ya sabemos que el @defer se va a cargar muy rápido, entonces no vamos a querer que aparezca el "loading" por tan poco tiempo. Entonces, el after indica cuánto tiempo va a tardar el loading en aparecer. El minimum te garantiza la cantidad de tiempo que va a mostrarse el loading en caso de que se haya empezado a mostrar -sin importar- si ya se cargó o no el @defer. Entonces, si le ponemos 5s al minimum, hacemos que se muestre el loading 5 segundos mínimo. Independientemente de si el @defer ya está listo para mostrarse o no.

- El orden de este ejemplo sería así:

0s 		→ Se muestra el bloque @placeholder
4s		→ Empieza a cargarse el bloque @defer
4.2s		→ Se muestra el bloque @loading (por el after: 200ms)
6.s o más → Se muestra finalmente @defer (después del mínimo de 2s de @loading)

- Como vemos, si el bloque @defer tiene contenido pesado para mostrar, y en este caso, tarda más de 200ms en mostrarse, al cabo de esos 200ms ya empieza a mostrarse el @loading. Una vez que se muestra el @loading, va a durar en pantalla mínimo 2s. Si al cabo de esos 2s el @defer todavía no se cargó del todo, entonces el @loading va a seguir mostrándose, esperándolo. Si el @defer ya estaba listo antes de que terminen esos 2 segundos de @loading, va a tener que esperar a que el el tiempo mínimo (2s) del loading termine, para finalmente aparecer.

- En resumen: @placeholder muestra algo mientras @defer no se empieza a cargar, @loading aparece mientras se está cargando @defer, y @defer muestra el contenido final ya cargado.



> Advanced-defer

- Vamos a ver otras variaciones al uso de @defer y @placeholder. Obviamente, todo esto es lógica de renderizado, es decir, nos ayuda a definir cuándo sí y cuándo no empezar a renderizar cierto contenido en nuestra web. Sirve para optimizar el rendimiento y mejorar la experiencia de usuario al hacer que el sitio tenga una carga progresiva.

- Antes, un resumen visual de cada trigger posible:

Trigger					Descripción
_______________________________________________________________________________________________________________
on idle				Renderiza cuando el navegador está idle
on viewport			Renderiza cuando un elemento en específico aparece en el viewport
on interaction			Renderiza cuando el usuario interactúa con un elemento en específico
on hover				Renderiza cuando el cursor pasa por encima de un elemento específico
on timer				Renderiza después de una cantidad de tiempo definida
on immediate			Renderiza lo más rápido posible, pero puede mostrar un placeholder antes 



>> @defer (on idle)

	<h3>idle</h3>
	@defer (on idle) {
		<p>Esto se muestra cuando ya terminó de cargarse y el navegador está idle</p>
	} @placeholder {
		<p>Esto se muestra mientras los datos no están</p>
	}

- @defer (on idle) hace que el bloque sólo se muestre cuando ya se terminó de cargar, y en cuanto el navegador está en estado "idle" o "tranquilo", esto significa que el navegador ya no tiene tareas importantes pendientes por hacer, y por ende está "tranquilo". Esas tareas importantes podrían ser la carga inicial de la página, el procesamiento intensivo de otros scripts, el renderizado de alto impacto o las interacciones inmediatas del usuario.


>> @defer (on viewport)

	<h3>viewport</h3>
	@defer (on viewport) {
		<p>Esto se muestra una vez de que ya apareció en el viewport</p>
	} @placeholder {
		<p>Acá, placeholder es obligatorio y se muestra mientras @defer no está en el viewport</p>
	}

- Esto es similar a cuando le ponemos "loading: lazy" a un elemento HTML, pero con el plus extra del placeholder. Mientras los elementos del bloque @defer no están en el viewport, no empiezan a cargarse. Y mientras eso pasa, lo que se carga y muestra es el @placeholder. En cuanto el @defer aparece en el viewport, el @placeholder desaparece y se reemplaza por el @defer, que empieza a cargarse.


>> @defer (on viewport(elemento))

	<h3>triggerElement</h3>
	<div #triggerElement>Hola!</div>
	@defer (on viewport(triggerElement)) {
		<p>Esto se muestra porque triggerElement apareció en el viewport</p>
	}

- Esto es como el ejemplo anterior, pero con una diferencia: se está vinculando a OTRO elemento. Entonces, el bloque @defer se va a cargar cuando el elemento con atributo #triggerElement aparece en el viewport. Mientras tanto, no se carga y se puede mostrar un placeholder opcional.


>> @defer (on interaction)

	<h3>interactionElement</h3>
	@defer (on interaction) {
		<p>Esto se muestra porque se interactuó con el @placeholder</p>
	} @placeholder {
		<p>Esto se muestra mientras los datos no están</p>
	}

- En este caso, interaction hace referencia a cuando, justamente, interactuamos con el elemento. Por ejemplo, haciéndole clic: Hasta que no interactuemos con el bloque @placeholder, que está en reemplazo de @defer, no se carga


>> @defer (on interaction(element))

	<h3>interactionElement</h3>
	<div #interactionElement>Hola!</div>
	@defer (on interaction(interactionElement)) {
		<p>Se muestra porque se interactuó con interactionElement</p>
	}

- Esto es lo mismo que antes, pero referenciando a otro elemento. Hasta que no se interactúe con el elemento con atributo #interactionElement, el bloque @defer no se carga.


>> @defer (on hover)

	<h3>hover</h3>
	@defer (on hover) {
		<p>Esto se muestra porque le hicieron hover al @placeholder</p>
	} @placeholder {
		<p>Pasá por encima mío!</p>
	}

- Muy simple, ya sabemos lo que es el estado hover de un elemento. En este caso, el elemento no se va a cargar hasta que le hagan hover a su reemplazo, es decir, al @placeholder. Mientras eso no ocurra, no se carga y sigue en pantalla el bloque @placeholder.


>> @defer (on hover(element))

	<h3>hover</h3>
	<div #specificElement>Pasa por encima mío!</div>
	@defer (on hover(specificElement)) {
		<p>Se muestra porque le hicieron hover a specificElement</p>
	} @placeholder {
		<p>Pasá por encima de ese elemento!</p>
	}
	
- Lo mismo de siempre: esto funciona igual que el hover, pero referenciando a otro elemento. Hasta que no se le haga hover al elemento con atributo #specificElement, no se carga el bloque @defer.


>> @defer (on timer(tiempo))

	<h3>timer</h3>
	@defer (on timer(500ms)) {
		<p>Me cargué porque se cumplió el timer</p>	
	} @placeholder {
		<p>Se muestra mientras los datos no están</p>	
	}

- En este caso, el bloque @defer empieza a cargarse una vez pasados 500ms de haber iniciado la página. Durante ese tiempo, lo que va a cargar en su lugar es el @placeholder.


>> @ defer (on immediate)

	<h3>immediate</h3>
	@defer (on immediate) {
		<p>Me muestro apenas el componente se renderiza</p>
	} @placeholder {
		<p>Placeholder visible mientras el contenido se prepara</p>
	}

- Este es el trigger más rápido de todos, el bloque @defer empieza a cargarse de inmediato, en cuanto Angular termina de renderizar el componente que lo contiene. Técnicamente, es equivalente a no usar ningún trigger explícito como los anteriores, pero nos da la posibilidad de usar @placeholder. 

- Este es el trigger más rápido de todos. El bloque @defer empieza a cargarse, como dice el nombre, inmediatamente. No espera a nada. Simplemente se muestra cuando Angular ya termina de renderizar el componente que lo contiene. Puede parecer que no sirve, pero en realidad sirve para diferenciar este tipo de trigger de los anteriores, ya que este, como dice, es "inmediato". Además, nos deja usar un placeholder opcional, cosa que no pasaría no usaramos ningún trigger @defer.

- Esta sería la diferenciación:

	<p>Me renderizo de inmediato, sin delay y sin placeholder</p>

	@defer (on immediate) {
	  <p>Me renderizo de inmediato, pero primero mostré un placeholder si lo tenía definido</p>
	} @placeholder {
	  <p>Placeholder opcional que se muestra antes de cargar el bloque @defer</p>
	}


>> @defer (on interaction; prefecth on idle)

	<h3>prefetch</h3>
	@defer (on interaction; prefetch on idle) {
		<p>Me cargué porque interactuaron con mi @placeholder o el navegador ya está idle</p>	
	} @placeholder {
		<p>Interactua conmigo!</p>	
	}

- Esto combina interaction con idle: el bloque @defer no se carga hasta que interactúen con su @placeholder o hasta que el navegador esté en estado idle. Mientras tanto, se muestra @placeholder.


> Bloque @error

- Este bloque es como una "última opción", en caso de que ocurra un error de renderizado a la hora de cargar nuestro bloque @defer, y es @error. En caso de ocurrir un error de renderizado, lo que se va a cargar es @error:

	@defer (when isContentReady) {
		<p>Component</p>
	} @loading (after 100ms; minimum 1s) {
		<p>Loading...</p>
	} @placeholder {
		<p>Setting...</p>
	} @error {
		<p>Sorry, we couldn't load the component. Try again later</p>
	}