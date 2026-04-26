---
title: "Conexión entre HTML, CSS y JS (Defer y Load)"
description: "El navegador, que en la arquitectura Cliente-Servidor sería el cliente, lo primero que va a hacer es solicitar un archivo HTML. O sea, cuando vamos a Google.com..."
---


## Conexión entre HTML, CSS y JS (Defer y Load)

El navegador, que en la arquitectura Cliente-Servidor sería el cliente, lo primero que va a hacer es solicitar un archivo HTML. O sea, cuando vamos a Google.com, nuestro navegador -el cliente-, va a hacer una solicitud del index.html al servidor de Google. Y eso es lo único que va a recibir, el archivo index.html. No recibe ni archivos CSS ni JS. 

Pero, si sólo recibe el archivo index.html sin el CSS ni el JS, ¿Cómo puede ser? Bueno, esto es porque como dijimos, el navegador interpreta al HTML línea por línea. Entonces, cuando llega a la etiqueta `<head>`, empieza a encontrarse con referencias a otros archivos distintos al HTML. Archivos que pueden ser .CSS, .JS, imágenes, fuentes, etc. Y eso se va a traducir en nuevas solicitudes. Veamos ejemplos:

```html
<head>
    <link rel="stylesheet" href="./css/estilos.css"> 
    <script src="./js/scripts.js"></script>
</head>
```

Cuando el navegador llega a este tipo de líneas en el HTML, lo que hace es realizar una nueva solicitud al servidor, que en este caso va a ser a los nuevos archivos/recursos "estilos.css" y "scripts.js". 

Y así con todos los recursos que se soliciten en la etiqueta `<head>`. Entonces, el servidor le va a entregar estos recursos al navegador (es decir, al cliente), y de forma asíncrona, los va a interpretar. Y como sabemos, en la estructura básica de cualquier página HTML, el head viene antes que el body. Esto puede ser malo para los archivos JS por lo siguiente:

Si la etiqueta que va a referenciar a un archivo JS, `<script>`, está declarada sin atributos, el navegador descarga el archivo y lo ejecuta inmediatamente. Sin dar tiempo a que el HTML termine de cargarse. Esto es un problema ya que, si el archivo JS intenta apuntar a elementos del DOM que todavía no existen, no va a poder. Justamente, porque todavía no se cargó todo el HTML. Es decir, estaríamos intentando referenciar elementos que ni siquiera existen. 

Nosotros en nuestro archivo JS vamos a crear variables ya sea para capturar botones, guardar direcciones de memoria, eventos, lo que sea. Pero en el momento en el que se empieza a ejecutar ese archivo JS (de forma asíncrona), todavía NO existen tales botones o elementos. Es decir: un botón "Saludar" se crea recién en la línea 20 de nuestro JS. Pero el linkeo al archivo JS lo hacemos mucho antes, en el `<head>`. Por lo tanto, cuando vaya a leer línea a línea el archivo JS, el botón Saludar "NO" existirá, porque todavía no se cargó en el DOM. Veamos:

### HTML
```html
<head>
    <script src="script.js"></script>
</head>
<body>
    <button id="saludar">Saludar</button>
</body>
```

### JavaScript

```javascript
document.getElementById("saludar").addEventListener("click", function() {
    alert("¡Hola!");
});
```

Este código JavaScript no va a funcionar, ya que el intento de referenciar a un elemento con ID "saludar", va a dar null. Ya que ese elemento todavía no existe. Esto tiene distintas soluciones.


## Soluciones

1. Poner el `<script>` al final del `<body>` (NO es la IDEAL)

```html
<body>
    <button id="saludar">Saludar</button>
    <script src="./js/scripts.js"></script>
</body>
```

Si sacamos la etiqueta `<script>` de `<head>`, y la ponemos al final del `<body>`, vamos a solucionar el problema anterior. Ya que le estamos dando tiempo a que se construya todo el DOM antes de ejecutar el JS. Esta no es la mejor solución, ya que estamos mezclando lógica (JavaScript) con estructura (HTML). Y si tuviésemos más de un script, se volvería desordenado. Hay que ver otras opciones.


2. Usar el atributo "defer" (SÍ es la IDEAL)

```html
<head>
    <script defer src="./js/scripts.js"></script>
</head>
```

Lo que hace defer es descargar el archivo JS mientras se procesa el HTML, pero NO lo ejecuta inmediatamente. Sino que lo que hace es ESPERAR a que todo el DOM esté listo. Y si hay varios `<script defer>`, los ejecuta en orden.

Esta es la mejor solución ya que se mantiene el orden del código, evitando bloqueos y asegurando que el script se ejecute solo cuando el DOM ya esté totalmente construido.


3. Usar el elevento DOMContentLoad (NO es la IDEAL)

```javascript
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saludar").addEventListener("click", function() {
        alert("¡Hola!");
    });
});
```

Esta es la opción más "programática". Con el uso de este evento, nos aseguramos que el script empiece a funcionar una vez que el DOM ya esté totalmente construido. Todo el código JS que vayamos a escribir tiene que estar dentro de esa arrow function.

No es la mejor opción porque si el archivo JS es grande, puede afectar a la carga de la página. La mejor opción es usar el atributo "defer" en la etiqueta `<script>`