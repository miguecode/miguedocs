---
title: "Modo Estricto (Use Strict)"
---

 > Modo Estricto (Use Strict o Strict Mode)

- El modo estricto corrige muchos errores silenciosos de JavaScript. En realidad, más alla de corregirlos, nos avisa de ellos. Es decir, en vez de dejar pasar algo que podría ser un error del programador, hace que se lance una excepción avisando de dicho error (en tiempo de ejecución).

- Convierte errores de JavaScript en excepciones.
- Mejora la optimización de los errores y consigue mejores tiempos de ejecución.
- Evita ciertas malas prácticas y sintaxis propensas a errores, no permitidas en versiones modernas del lenguaje (ES5+). Esto hace un código más seguro y predecible.


> Entonces... ¿Por qué no viene activado por defecto?

- No viene por defecto simple y llanamente porque rompería compatibilidad con millones de sitios web antiguos. No es más que eso. Cuando se introdujo el Use Strict en ES5 (año 2009-2010), ya había un montón de código viejo escrito sin preocuparse por estas reglas. Entonces, el activarlo por defecto haría que muchos scripts dejen de funcionar de un día para el otro.

- Por eso, el modo estricto es opcional y debe activarse manualmente.

- Y aunque no lo parezca, SÍ. Es una buena idea usarlo. De hecho, es mucho más usado de lo que parece, y hay un motivo claro: muchas veces no lo vemos. Cuando usamos frameworks de JavaScript modernos (o hasta cuando usamos TypeScript), se usa el Use Strict de forma automática, sin que nosotros lo veamos explícito.

- Aparte, cuando usamos módulos en JS (con import y export), el modo estricto se activa automáticamente, sin tener que agregarlo manualmente. 

- En código moderno o profesional, se estila y se espera usarlo. En especial en librerías y proyectos grandes. De hecho, muchos linters como ESLint lo recomiendan o incluso lo exigen.


> Ejemplo de su funcionalidad

- Por ejemplo, en las variables hay que indicar si son var, let o const, SIEMPRE:

	nombre = "Juan" // Sin el use strict, nombre va a ser "var" por defecto
	
	nombre = "Juan" // Con el use strict, esto provoca una EXCEPCIÓN, no podemos omitir el tipo de variable


> Cómo activar el modo estricto

- Para hacerlo, tenemos que ir a nuestro scope global (window) del archivo JavaScript, y en la primera línea escribir "use strict", así:

	"use strict";  // Con esta simple línea, activamos el modo estricto
	
	nombre = "Juan"; // Lanza una excepción, nombre is not defined

- Ojo, en realidad podemos colocar el "use strict" otras partes de nuestro código, pero siempre tiene que ser en la primer línea de un scope. Y a partir de él es cuando se activa el modo estricto.



> Entonces, ¿Qué hace el Use Strict técnicamente?

👀 Si usamos el Modo Estricto, JavaScript va a lanzar una excepción si...

1. Intentamos declarar variables sin indicar "var", "let", o "const" (lo que ya explicamos).

2. Intentamos modificar propiedades que fueron definidas como no modificables (non-writable) usando el método Object.defineProperty().

3. Intentamos agregar propiedades a un objeto al que se le aplicó Object.preventExtensions().

4. Intentamos agregar propiedades a un string.

5. Intentamos ponerle dos parámetros con el mismo nombre a una misma función.

6. Intentamos eliminar una variable de tipo no primitivo, haciendo "delete miObjeto".

7. Intentamos declarar una variable cuyo nombre es el mismo que el de una palabra reservada.

8. Intentamos usar "this" dentro de una función sin que esté ligada a un objeto (es decir, no forma parte de una propiedad o clase). En modo estricto,"this" será "undefined" en vez de apuntar al objeto global (window).

9.  Intentamos usar números octales sin una "o" adelante, o si intentamos usar "with".

10. Intentamos declarar variables llamadas "arguments" o "eval".

11. Intentamos asignar valores a propiedades de un getter sin setter.

12. Intentamos declarar variables dentro de `eval` y usarlas fuera.

13. Intentamos modificar los parámetros de una función y esperar que arguments se actualice (ya no se sincronizan).