---
title: "Introducción a TypeScript"
description: "TypeScript es un lenguaje de programación creado por Microsoft en 2012. Su principal objetivo es mejorar el desarrollo en JavaScript al añadir un tipado más est..."
---



- TypeScript es un lenguaje de programación creado por Microsoft en 2012. Su principal objetivo es mejorar el desarrollo en JavaScript al añadir un tipado más estricto y mejoras en la programación orientada a objetos, lo cual facilita la creación de proyectos grandes y complejos. TypeScript es un "super set" de JavaScript, ya que en sí mismo es JavaScript, pero "con esteroides". De hecho, el código TypeScript se transpila a JavaScript y es compatible con cualquier navegador o entorno que ejecute JavaScript.

- Cuando decimos que TypeScript se -transpila- a JavaScript, estamos diciendo que se -convierte- en JavaScript justo antes de ejecutarse. La transpilación es la transformación de un lenguaje de alto nivel a otro de alto nivel. Entonces, como dijimos, TypeScript es un lenguaje que SIEMPRE se transpila a JavaScript.

- TypeScript es una herramienta para nosotros los desarrolladores. Después, el navegador no va a leer TypeScript, sino que va a leer JavaScript. Entonces, aunque nosotros usemos TS, eso se va a transpilar a JS. 


## ¿Qué tipo de lenguaje es?

- TypeScript es un lenguaje de programación que no es interpretado ni compilado en el sentido tradicional. Sino, que es un lenguaje transpilado. Como dijimos, transpilado a JavaScript. Esto es así ya que un transpiler se va a encargar de transpilar (convertir) el código TypeScript a código JavaScript puro.

- Al transformarse en código JS, ese mismo código después tiene que ser interpretado y ejecutado por un motor de JS (V8, SpiderMonkey, etc.).

- Por ende, a TS se lo podría clasificar como un lenguaje transpilado a un lenguaje interpretado (JS).


## ¿Por qué se creó TypeScript?

- JavaScript es un lenguaje muy flexible y dinámico, pero esta flexibilidad puede generar errores difíciles de encontrar en proyectos grandes o de larga duración. Microsoft inventó TypeScript para ayudar a los desarrolladores a:

- Definir tipos en las variables, funciones, y objetos para tener mayor control sobre el código.
- Detectar errores antes de ejecutar el código, gracias a su sistema de tipado.
- Facilitar el mantenimiento y escalabilidad en proyectos de gran tamaño.


## Características principales de TypeScript

- **Tipado estático**: A diferencia de JavaScript, TypeScript permite definir tipos de datos (como number, string, boolean, etc.). Esto ayuda a evitar errores y a que el código sea más predecible y seguro.

- **Compilación a JavaScript**: Como dijimos antes, TypeScript se transpila a JavaScript. Esto significa que aunque codeemos en TypeScript, al final, el código interpretado y ejecutado va a ser JavaScript, por lo que es compatible con cualquier entorno que use JS.

- **Interfaz y clases**: TypeScript añade características avanzadas como interfaces y modificadores de acceso (public, private, protected) que hacen que el código sea más organizado y estructurado.

- **IntelliSense y autocompletado**: Gracias a los tipos, muchos editores (como Visual Studio Code) pueden ofrecer mejor autocompletado y ayuda contextual, lo cual agiliza mucho el desarrollo.

- **Soporte de ECMAScript**: TypeScript siempre está al día con las nuevas versiones de JavaScript, por lo que permite usar las características más recientes de ECMAScript (como async/await, promises, etc.).


## Similitudes y diferencias con JavaScript

### Similitudes:

- **JavaScript válido**: Cualquier archivo .js es un archivo .ts válido, por lo que se puede empezar a usar TypeScript en cualquier proyecto sin modificar el código JavaScript.

- **Funciones de ES6+**: TypeScript soporta todas las características modernas de JavaScript (ES6 y posteriores), como las arrow functions (=>), template literals (`${}`), promesas, y más.

### Diferencias:

- **Tipado estático vs. tipado dinámico**: JavaScript no tiene tipos estáticos, mientras que TypeScript permite definir tipos para evitar errores de asignación o uso indebido de variables.

- **Interfaces y clases avanzadas**: TypeScript permite definir interfaces y usar modificadores de acceso en clases. Esto es ideal para proyectos grandes y para definir estructuras de datos complejas de forma clara.

- **Chequeo de tipos**: TypeScript realiza un chequeo de tipos en tiempo de desarrollo, lo cual ayuda a encontrar errores antes de ejecutar el código.


## ¿Cuándo usar TypeScript?

- **TypeScript es ideal para proyectos que**: 

- Son grandes y complejos.
- Tienen muchos desarrolladores en equipo.
- Requieren un código más seguro y predecible.
- Quieren aprovechar el poder de los tipos estáticos y las interfaces.

- Para proyectos pequeños, es posible que no sea tan necesario, pero TypeScript siempre aporta un nivel extra de calidad y organización.

- En resumen, TypeScript es una herramienta poderosa para los desarrolladores que buscan más seguridad y productividad en sus proyectos JavaScript. Aunque requiere aprender algunos conceptos nuevos, es una inversión que vale la pena para código a largo plazo. Y como TypeScript es de código abierto, su comunidad sigue creciendo.