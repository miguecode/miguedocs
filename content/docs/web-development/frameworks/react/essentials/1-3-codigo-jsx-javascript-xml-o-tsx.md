---
title: "1-3. Código JSX (JavaScript XML) (o TSX)"
description: "Su nombre viene de JavaScript XML (pero no XML real, sino una sintaxis similar). Si en vez de JSX nos referimos a TSX, es exactamente lo mismo pero en TypeScrip..."
---


## ¿Qué es JSX?

- Su nombre viene de JavaScript XML (pero no XML real, sino una sintaxis similar). Si en vez de JSX nos referimos a TSX, es exactamente lo mismo pero en TypeScript. Y sí, es lo mismo, ya que como sabemos, TS se transpila a JS. Los archivos pasarían de ser .jsx a .tsx.

- JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a XML ( -> HTML) pero dentro de un archivo JavaScript. No es HTML puro, pero su sintaxis es MUY parecida a HTML. Y es código que siempre necesita ser transpilado a JavaScript para que el navegador lo entienda.

- **Ojo con esta última afirmación**: "JSX es código que siempre necesita ser transpilado a JavaScript". Esto es así, y es muy importante saberlo: JSX NO es HTML. JSX, por debajo, es JavaScript. Todo lo que escribimos en JSX, se transpila a JavaScript, es decir, se transforma en lenguaje JavaScript puro. Así como pasa con TypeScript, que en realidad es JavaScript ya que se transpila a él, JSX hace exactamente lo mismo.

- Y lógicamente, esa transpilación no la hacemos nosotros ni mucho menos: de eso se encargan herramientas como Babel, SWC, Webpack, Vite, Next.js y demás.

- **De hecho, si entramos al Playground de SWC (https**: //swc.rs/playground), y escribimos código JSX en el lado del Input, vamos a ver que en lado del Output, el código aparece en JavaScript puro. Porque así se lleva a cabo la transpilación. Eso mismo ocurre cuando codeamos en TypeScript. Pero nosotros no lo vemos.


- Como dijimos en el apunte anterior, JSX es esencial para un uso eficiente de React: hace que no sea primitivo, brindándonos mayor legibilidad, productividad y mantenimiento. 

- **Veamos un ejemplo sencillo de código JSX**: 

```html
const name = 'Miguel';
<h1>Hola, {name}!</h1>
```
- Como vemos, uno podría decir que esto es HTML sin más. Pero en JSX, esto es una etiqueta muy similar a HTML llamada `<h1>`, la cual está mostrando un simple string 'Hola, ', pero que después agrega código JavaScript. Sí, en JSX, lo que está entre llaves { } es código JavaScript embebido. Y en este caso, 'nombre' es una variable de JavaScript que guarda un string. Y es totalmente válido mostrarlo de esta manera.


## Diferencias clave con HTML

1. Cierre de etiquetas: Todas las etiquetas en JSX deben cerrarse, incluso aquellas que no se cierran en HTML, como `<br>`, que en JSX se escribe como `<br />`.
2. Atributos: Por ejemplo, el atributo class en HTML se escribe como className en JSX. Y tienen que estar en camelCase.
3. Expresiones en llaves: Se usa { } para insertar código JavaScript, no para pasar el string de una llave. 


## Conclusión

- JSX es una extensión de sintaxis de JS. Justamente, es JS pero con una letra más, que referencia a XML, un lenguaje de marcado. JSX es la forma estándar y más productiva para usar React.

- Como dijimos, para que los navegadores entiendan código JSX, necesitan transpilarlo a JS. Y nosotros no vamos a hacer eso. De eso se van a encargar otras herramientas. Lo que vamos a ver en próximos apuntes, es cómo usar esas herramientas, específicamente, vamos a ir con Vite, que es un empaquetador de aplicaciones web, que en este caso se encargaría perfectamente de transpilar JSX a JS, y es la opción más popular.