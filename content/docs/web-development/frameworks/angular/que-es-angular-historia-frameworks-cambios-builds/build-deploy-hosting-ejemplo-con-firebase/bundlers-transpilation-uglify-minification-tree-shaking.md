---
title: "Bundlers, Transpilation, Uglify, Minification, Tree Shaking"
description: "Preparación y Optimización de Código"
---


## Preparación y Optimización de Código

- Como vimos antes, el proceso de hacer una build de nuestra aplicación sirve para, entre otras cosas, reducir el peso de nuestro proyecto, y así, mejorar su rendimiento. Vamos a ver cómo se consigue esto.

- Cuando desarrollamos una aplicación con frameworks como Angular, React, Vue, etc., estamos escribiendo código que el navegador no puede interpretar directamente (al menos no todo). Por eso, existen herramientas que transforman, empaquetan y optimizan ese código para que sea entendible, liviano y eficiente. Hablando de esas herramientas, vamos a ver distintos conceptos: Los Bundlers, lo que es la transpilación, el uglify, la minification y el tree shaking.


## Bundlers (empaquetadores)

- Un bundler es una herramienta que toma todos los archivos del proyecto (JS, CSS, imágenes, etc.) y los combina en uno o varios archivos finales listos para el navegador. Esto se hace para reducir la cantidad de solicitudes HTTP, organizar mejor las dependencias, y preparar el código para la producción.

- Ejemplos de bundlers pueden ser Webpack (usado por Angular internamente), Vite, Rollup y Parcel.


## Transpilation (Transpilación)

- La transpilación es cuando convertimos código de un lenguaje (o versión) a otro equivalente pero más compatible. En otras palabras, transpilar es convertir código de un lenguaje a otro.

- Esto se hace porque nosotros podemos escribir código moderno (TypeScript, ES6+), pero los navegadores no necesariamente lo van a entender todo. Entonces, transpilamos el código a una versión más antigua de JS (como ES5), que sí entiende cualquier navegador.

- Básicamente, TypeScript es el lenguaje que vamos a usar nosotros como desarrolladores, pero al momento de pasar a producción, lo que le va a llegar al navegador NO es TypeScript, sino que le va a llegar JavaScript. Es decir, nuestro código TS se transpiló a código JS, y así el navegador lo puede interpretar.


## Minification (Minificación)

- La minificación es el proceso de eliminar todos los caracteres innecesarios del código como espacios, saltos de línea, comentarios... también lo que se hace es renombrar variables con nombres largos: (const nombreUsuario → const a).

- Esto se hace con el objetivo de que el archivo pese lo menos posible y cargue rápido.


## Uglify (hacer feo)

- Uglify es como una versión extrema de la minificación. Además de hacer el código más chico, también lo hace ilegible para los humanos. Hace cosas como: 

1. Renombrar variables a nombres sin sentido.
2. Reorganizar el código para que no se entienda nada.
3. Obfuscar (ocultar intención).

- Se usa para proteger la lógica interna del código, y evitar ingeniería inversa (aunque nunca es 100% seguro). 


## Tree Shaking

- "Sacudir el árbol" es una técnica para eliminar automáticamente el código que no se usa. Por ejemplo, si importamos uan librería pero solo usamos uan función, el bundler detecta las otras funciones que no se usan y no las incluye en el archivo final. 

- Lógicamente, esto reduce el peso y la cantidad de código de la aplicación.


## ¿Quién hace todas estas cosas?

- Las herramientas como Webpack, Angular CLI, Vite o esbuild pueden hacer todo lo anterior:


Concepto			Quién lo hace normalmente
______________________________________________________
| Bundling | Webpack, Vite |
| --- | --- |
| Transpiling | TypeScript, Babel |
| Minification | Terser, esbuild |
| Uglify | Terser, UglifyJS |
| Tree Shaking | Webpack, Rollup, Vite |