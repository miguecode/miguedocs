---
title: "Introducción a JavaScript"
---

> Introducción a JavaScript

- JavaScript es un lenguaje de programación interpretado, dinámico, de alto nivel y de tipado débil. Se utiliza principalmente para crear interactividad en las páginas web, ya que permite modificar dinámicamente el contenido, reaccionar a eventos del usuario y realizar operaciones complejas en el navegador.

- Desglosemos sus características:

1) Es interpretado. 

- Es interpretado ya que se ejecuta directamente en el navegador sin necesidad de compilación, lo que permite cambios y pruebas rápidas.


2) Es de tipado dinámico, o simplemente "es dinámico".

- Que sea un lenguaje dinámico (o sea, no estático) significa que podemos cambiar los tipos de las variables en tiempo de ejecución. 

	let string = "Hola Mundo";
	string = 2;
	typeof string; // Muestra "number"

- Esto demuestra que JavaScript es un lenguaje de programación dinámico. Le cambiamos el tipo a la variable "string", ya que pasó de ser un string a ser un number. Esto, en un lenguaje estático, no es posible (como por ejemplo TypeScript o C#).


3) Es de tipado débil.

- Va de la mano con el punto anterior, pero no es exactamente lo mismo. Que el lenguaje sea de tipado débil significa que no es obligatorio indicar el tipo de dato de las variables a la hora de declararlas, ya que JavaScript lleva a cabo la coerción de tipos. Es decir, convierte automáticamente los tipos de datos cuando lo considera necesario, aunque a veces lo haga de formas inesperadas. Veamos:

	console.log("5" + 2);   // "52" → convierte el number 2 en string, y concatena: "5" + "2" = "52"
	console.log("5" - 2);   // 3 → convierte el string a a number, realizando 5 - 2 = 3
	console.log(true + 1);  // 2 → true se convierte en 1, y realiza "1 + 1". Es decir, queda en number

- Esto nos demuestra que el lenguaje deduce de qué tipo tiene que ser cada cosa, sin que nosotros necesariamente lo especifiquemos. Esto en lenguajes de tipado fuerte no es posible.


4) Es de alto nivel.

- Es un lenguaje de alto nivel porque se abstrae de los detalles del hardware (como el manejo de memoria, punteros, registros, etc.). Permite enfocarnos en resolver problemas lógicos sin preocuparnos por tareas de bajo nivel. Además, tiene una sintaxis generalmente entendible para el ser humano. Lenguajes como C o Assembly son ejemplos de lenguajes de bajo nivel.


5) Es multi-paradigma (POO, funcional y basada en eventos).

- Multi-paradigma significa que el lenguaje maneja más de un paradigma, es decir, más de una forma para resolver problemas, o de crear programas. Estos paradigmas pueden ser:

- Programación orientada a objetos (POO) → Con clases, objetos, herencia.
- Programación funcional → Con funciones puras, funciones como datos, map, filter, reduce, etc.
- Basada en eventos → Reacciona a acciones del usuario, como clicks, scrolls o teclas presionadas.


6) Es Case Sensitive (Upper and Lower Case).

- Esto es sencillo, significa que no es lo mismo una variabe llamada "MiVariable" que una llamada "Mivariable". Lo mismo con las funciones, clases, y demás.


> Otras Características importantes:

- A diferencia de lenguajes como Java, JavaScript está basado en prototipos, es decir, utiliza prototipos en lugar de clases tradicionales para la herencia y reutilización de código.

- JavaScript es orientado a eventos, lo que significa que puede responder a interacciones del usuario, como clics o desplazamientos.

- Puede ser ejecutado en cualquier navegador web moderno, sin importar el sistema operativo o dispositivo.

- Con funciones como los callbacks y promesas, JavaScript permite realizar múltiples tareas a la vez, lo que es ideal para aplicaciones en tiempo real. A todo esto se le llama asincronía.

- Es uno de los lenguajes más populares y utilizados en desarrollo web, con una vasta cantidad de librerías y frameworks disponibles.


> Usos más comunes

- Creación de páginas web interactivas.
- Desarrollo de aplicaciones web mediante frameworks como React, Angular, y Vue.js.
- Creación de APIs del lado del servidor con Node.js.

- JavaScript es el pilar del desarrollo web moderno, permitiendo experiencias de usuario más interactivas y ricas. Su capacidad para ejecutarse en prácticamente cualquier entorno, junto con su naturaleza dinámica y potente, lo convierte en una herramienta esencial para desarrolladores web.


> Detalles adicionales

- JavaScript fue inicialmente conocido como Mocha y luego como LiveScript antes de recibir su nombre actual.
- A pesar de las similitudes de nombre, Java y JavaScript no están relacionados.
- Desde su creación, ha evolucionado constantemente, con nuevas versiones (ECMAScript) que han mejorado el lenguaje.


> ¿Cuándo y por qué fue creado?

- JavaScript fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape Communications. Fue diseñado para hacer que las páginas web fueran interactivas y ofrecer dinamismo a las páginas estáticas que se usaban en esa época. Inicialmente, su desarrollo fue rápido, tomando solo 10 días, con el objetivo de complementar las funcionalidades de HTML.


> Hola Mundo

	console.log("Hola Mundo!");
	alert("Hola Mundo!");