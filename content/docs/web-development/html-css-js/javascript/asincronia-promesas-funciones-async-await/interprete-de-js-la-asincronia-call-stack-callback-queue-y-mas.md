---
title: "Intérprete de JS. La Asincronía. Call Stack, Callback Queue y más"
---

> Intérprete de JavaScript y la Asincronía

- Cuando el intérprete de JavaScript lee las instrucciones (es decir, las líneas de código), se puede encontrar con 2 tipos de tareas:

1. Tareas bloqueantes
2. Tareas no bloqueantes

- El procesamiento puede ser sincrónico (bloqueante) o asincrónico (no bloqueante). 

- El procesamiento sincrónico (asociado a "bloqueante") es cuando hay que esperar a que finalice una tarea para iniciar la siguiente. En ese "tiempo de espera" es cuando se da el "bloqueo".

- El procesamiento asincrónico es lo contrario a eso, es cuando se pueden derivar tareas para no bloquear el flujo principal y realizarlas al mismo tiempo.

- A este tema de la asincronía se le asocian 2 conceptos: la concurrencia y el paralelismo. Estos dos últimos son distintas maneras de trabajar la asincronía. Por ejemplo, los thread que usabamos en C# son paralelismo.

- Generalmente, todo lo que hacemos es con tareas bloqueantes. Cuando el flujo del programa se topa con la llamada a una función, automáticamente el programa se frena para ir al scope de esa función invocada. Y hasta que no llegue al final o retorne algo, no se reanuda el procedimiento del flujo principal (o del flujo que llamó a la función).

- En el ámbito del desarrollo web, el concepto de "bloqueo" se traduce a cuando se "frizea" la página. Es decir, cuando la página se queda tildada y el usuario no puede interactuar con ella. Esto ocurre justamente porque está realizando una tarea la cual debe esperar a que finalice para poder continuar con el flujo.

- Por eso es que esto es muy importante. Nosotros tenemos que trabajar de forma ASÍNCRONA, para evitar ese efecto de bloqueo lo más que podamos.

- La página latentflip.com sirve para entender como funciona el intérprete de JS.


- La gran mayoría de tareas bloqueantes las cuales nos van a molestar, son las tareas en las cuales le hacemos peticiones a una Web API. Es decir, cuando queremos solicitar un dato de algún lado externo a nuestro propio código. Ya sea un objeto, un archivo multimedia, lo que sea. Por eso, tenemos que saber qué son las APIS en el ámbito Web.


>> Web APIS

- Una Web API, básicamente, es una biblioteca. Un conjunto de funciones que me permiten interactuar con una aplicación. Como sabemos, un objeto tiene miembros públicos, es decir, los miembros que expone. Que pueden ser propiedades o métodos. Bueno, con una aplicación pasa lo mismo. Una aplicación nos expone una serie de métodos y objetos. Dentro de un navegador web hay un montón de Web APIS.


>> El proceso del Intérprete de JavaScript

- Lo que se ve en la página latentfip (la cual se puede probar con un ejemplo de código el cual está incluido en esta carpeta), se puede explicar de la siguiente forma:

- El SO tiene su CALL STACK. Es decir, su pila de llamadas (llamadas a funciones). El call stack, o simplemente stack, va a contener a todos los segmentos de código de nuestro programa. Como el primero que lee es el main, en la pila (el stack) el primer elemento que se le agrega es la función main. Y como es la primera en agregarse, queda al fondo de todo el stack.

- Mientras lee y ejecuta la función main, en un momento va a llegar a la invocación de otra función, como por ejemplo, un console.log. Cuando lee "console.log", automáticamente el segmento de código que contiene la función console.log se agrega al stack. Entonces queda la main al fondo del stack, y arriba el console.log, que es el último en agregarse. Al ser el último en agregarse, queda arriba de todo, es decir, que es el que se está leyendo actualmente. Si console.log llamara a otra función en su scope, entonces el flujo del programa pasaría a esa funcion que invocó. Y también obviamente, esa función se agrega al stack (a la pila). 

- Cuando se termina de ejecutar una función en el stack -obviamente la última en agregarse-, ese elemento DESAPARECE del stack. Básicamente porque ya terminó. Ahora lo que sigue es la función que estaba debajo de ella. Es decir, la función que la invocó.

- Todo esto es SINCRÓNICO, es decir, bloqueante. Y obviamente, cuando el código se topa con una función y se pone a ejecutarla, abandona la función original la cual invocó a esa función nueva.

- Para que quede bien claro el concepto "Call Stack": Tenemos que imaginarnos literalmente una pila de platos, uno arriba del otro. El primer plato que ponemos en la pila, va a ser el que esté mas abajo. Cuando agregamos otro, ese superpone al anterior. Y si agregamos otro, superpone a los dos anteriores. Y así con cada plato que agregamos. Y nosotros, para ir sacando cada plato, sacamos el que está más arriba. Y así vamos bajando en la pila hasta ir sacando uno por uno. Es un orden LIFO (Last In, First Out). Y bueno, en este ejemplo, tenemos que hacer como que cada plato es cada segmento de código de nuestro programa. 


> Función setTimeOut

- Esta función de JavaScript genera asincronía. Es una función que recibe un callback, cuyo callback no se ejecuta automáticamente, sino que se ejecuta cuando pase cierto tiempo. Ese tiempo lo definimos nosotros, pasándoselo como segundo parámetro a setTimeOut. 

- Entonces, lo que estamos haciendo es generar un tiempo de espera apropósito. Por ejemplo:

	setTimeout(() => {
		console.log("Este mensaje aparece al cabo de 3 segundos");
	}, 3000);
	
- Al pasarle 3000 milisegundos como segundo parámetro, lo que hacemos es decirle a la función setTimeout que ejecute la arrow function que le estamos pasando como primer parámetro, una vez que pasen 3 segundos. Esto simula latencia, es decir, un tiempo de espera.

- Y... ¿Qué pasa con el flujo del programa durante esos 3 segundos? Ahí esta el punto: setTimeout es una función asíncrona. Esto es así porque, durante esos 3 segundos, el flujo del programa se sigue ejecutando. No es necesario esperar a que la función setTimeout termine de ejecutar su callback para que la próxima tarea empiece a ejecutarse.

- Es decir, el callback de setTimeout es una tarea NO BLOQUEANTE. Veamos:


	console.log("Inicio");
	
	function sumar(a, b, callback) {
	    console.log("Estamos al inicio de la función sumar");
	    
	    let rta;
	
	    setTimeout(() => {
	        if (typeof a === "number" && typeof b === "number") {
	            rta = a + b;
	            callback(null, rta);
	        } else {
	            callback("Parámetros inválidos para la suma", null);
	        }
	    }, 3000);
	
	    console.log("Estamos al final de la función sumar");
	
	    return rta;
	}
- Esta sería una función "sumar" asíncrona, la cual está simulando, mediante un callback, lo que sería una promesa. Tiene un setTimeout para generar una latencia, es decir, un tiempo de espera ficticio. 
	
	let retorno = sumar(5, 8);
	
	let retorno = sumar(5, 8, (error, respuesta) => {
	    if (error) {
	        console.error(error);
	    } else {
	        console.log("La suma es " + respuesta);
	    }
	});
	
	console.log(retorno);
	console.log("Fin");

- En este caso, invocamos a "sumar" pasándole un callback. Ese callback va a ser esa arrow function, la cual recibe como primer parámetro un error, y como segundo una respuesta correcta. Si el error es un truthy, lo muestra por consola. Y si el error es un falsy, pasa a mostrar por consola la respuesta válida recibida.

- Eso último que acabo de decir es literalmente la definición de promesa. Una promesa es un fragmento de código que puede tener dos salidas, una buena y una mala. Y nosotros nos encargamos de recibir su valor (ya sea "bueno" o "malo"), y hacer algo con él.
	

- Al ejecutar todo esto, lo que vamos a ver en consola va a ser:

Inicio
Estamos al inicio de la función sumar
Estamos al final de la función sumar
undefined
Fin
La suma es 13


- Como vemos, cuando queremos mostrar lo que devuelve sumar() por consola, aparece "undefined". Esto es así porque, a esa altura, el retorno de "rta" no tiene valor. ¿Y por qué? Fácil: esto es así porque setTimeout hace que su callback (es decir, la función que hace la suma a+b y le asigna su valor a rta) se ejecute al cabo de 3 segundos reales. Y como es asíncrono, todo el resto del flujo del programa se sigue ejecutando -SIN ESPERAR- a que se termine el callback de setTimeout.


> Web Apis, Callback Queue y el Event Loop

- Dentro de la página que dijimos antes para ver el funcionamiento del intérprete de JavaScript, tenemos que hacer la prueba de copiar y pegar el código anterior (el de la función sumar asíncrona, que tiene dentro un setTimeOut y recibe un callback).

- Para que funcione bien, no podemos usar funciones anónimas. Por ende, no podemos usar arrow functions. Así que en vez de usar funciones anónimas, les ponemos nombres, así:

	setTimeout(function miSetTimeOut() { } ...
	sumar(5, 8, function miCallback(error, respuesta) { } ...

- Al hacer esta prueba, vamos a ver cómo entra en juego la sección "Web Apis" y "Callback Queue":

- Vamos a ver que todo el código se ejecuta en el Call Stack como antes, pero que cuando llega a la función llamada "miSetTimeOut", es decir, cuando llega al callback de la función setTimeout, pasa algo distinto. Lo que pasa es que esa función aparece por un momento en el Call Stack, y después desaparece de ahí para moverse a la sección Web Apis. Ese movimiento de una sección a otra lo lleva a cabo el "Event Loop", que sería como la ruedita que hace va moviendo un fragmento de código de un lugar al otro.

- Cuando la función miSetTimeOut aparece en la sección de Web Apis (la cual es una cola de métodos que se van colocando uno detrás del otro), vamos a ver que empieza a llenar un relojcito verde. Y lo que tarde en llenarse ese reloj, va a ser el tiempo de espera que nosotros le colocamos a la función setTimeOut. Es decir que, en este caso, el reloj verde va a tardar 3 segundos en completarse.

- Una vez que se complete el reloj verde en esos 3 segundos, vamos a ver que la función miSetTimeOut se va de la sección Web Apis para irse a la sección "Callback Queue". Es decir, a la fila de callbacks que se van a ejecutar después. Este movimiento de una sección a otra, como dijimos antes, lo realiza el Event Loop.

- Y acá llega una parte CLAVE a entender: Todas las funciones que lleguen a la Callback Queue, ya están listas para ser ejecutadas. Pero todavía no se ejecutan. ¿Por qué? Porque para ejecutarse, tienen que moverse a la Call Stack, es decir, a la pila de funciones que se ejecutan en el flujo original del programa. Y las funciones que están en el Callback Queue, en este caso, nuestra función miSetTimeOut, se van a mover a la Call Stack en el momento en el que el Call Stack esté vacío.

- Es decir, cuando "Call Stack" ya ejecutó todas sus funciones, es decir, cuando la pila ya está vacía, recién ahi es cuando el Event Loop empieza a trasladar las funciones del Callback Queue al Call Stack. Y a partir de ahí, todo se ejecuta como se hizo siempre.

- Las funciones del Callback Queue pasan al Call Stack una a la vez. En este caso, miSetTimeOut pasa al Call Stack, y si hubiese otra por detrás, esa otra tiene que esperar a que miSetTimeOut desaparezca del Call Stack. Eso siempre es así. El Callback Queue le pasa UNA función al Call Stack SIEMPRE Y CUANDO el Call Stack esté vacío. 

- Con este código vamos a poder ver todo esto mejor:

	console.log("Inicio del programa");
	
	setTimeout(function timeout1() {
	    console.log("Inicio de la función timeout1");
	    console.log("Fin de la función timeout1");
	}, 2000);
	
	setTimeout(function timeout2() {
	    console.log("Inicio de la función timeout2");
	    console.log("Fin de la función timeout2");
	}, 4000);
	
	setTimeout(function timeout3() {
	    console.log("Inicio de la función timeout3");
	    console.log("Fin de la función timeout3");
	}, 5000);
	
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	console.log("Ejecutando...");
	
	
>> Microtask Queue vs. Callback Queue

- Además de la Callback Queue (donde van cosas como setTimeout), hay otra cola llamada Microtask Queue, que tiene mayor prioridad. Acá van las Promesas (Promise.then(), async/await, MutationObserver, etc.). 

- Esto significa que si hay una promesa pendiente y un setTimeout(), la promesa siempre se ejecutará primero, incluso si setTimeout tenía menos tiempo. 

- En simples palabras, las Promise siempre se ejecutan antes que los setTimeout() porque ellas van al Microtask Queue y no al Callback Queue.