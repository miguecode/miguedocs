---
title: "HTTP, peticiones, respuestas"
description: "HTTP es un protocolo el cual está diseñado para permitir comunicaciones entre Clientes y Servidores. Es decir, funciona como un protocolo de pedido-respuesta entre Cliente y Servidor y es el más utilizado de todos."
---


## Protocolo

Un protocolo es un conjunto de reglas que indican cómo se realiza una comunicación. Es como el idioma en el que se van a comunicar el Cliente y el Servidor. En el caso de la transferencia de datos, Internet utiliza HTTP para transmitir páginas Web.

## HTTP (Hypertext Transfer Protocol)

HTTP es un protocolo el cual está diseñado para permitir comunicaciones entre Clientes y Servidores. Es decir, funciona como un protocolo de pedido-respuesta entre Cliente y Servidor y es el más utilizado de todos. Además, existe HTTPS que es lo mismo, pero con más seguridad (encriptación).

En PHP hay hipertexto y HTTP permite enviarlo. Hipertexto es un texto enriquecido, es decir, que tiene distintas características según su formato.

### Aclaración
Un navegador web PUEDE ser el Cliente. Pero no obligatoriamente debe serlo. Es decir, yo podría actuar como Cliente desde una consola de comandos o desde un programa como Postman. Por ejemplo, podríamos hacer una petición a google.com mediante una terminal.

Si el Servidor necesitara consultar a otro Servidor (hacerle una petición), entonces en ese caso también cumpliría el rol de cliente hasta recibir la respuesta. Todo esto es síncrono. El cliente siempre debe esperar la respuesta del servidor.

HTTP es el protocolo que permite el envío entre Cliente y Servidor. Es como si Cliente y Servidor estuvieran en estaciones de tren distintas. Y yo quiero llevar algo de un punto al otro. Independientemente de qué quiera llevar en el tren, el tren es el método de transporte. Es decir, HTTP sería ese tren que comunica a Cliente y Servidor. HTTPs sería lo mismo que HTTP, pero la información que lleva transportada en el tren está mas blindada que en HTTP. Eso sirve para los datos sensibles (contraseñas, domicilios, lo que sea).

Cuando vamos a 'Inspeccionar' y entramos a Network, toda esa lista de elementos que vemos, son PETICIONES HTTP. Las cuales estamos haciendo nosotros (el cliente) mediante nuestro navegador, a un servidor cualquiera. Si entramos a google.com, le hicimos una petición a Google.
Al presionar 'Enter' para acceder, vamos a ver en Network que van a aparecer distintas Requests (peticiones). 
La primera de todas, llamada www.google.com, es la que hicimos nosotros. Nosotros entonces, le hicimos una petición GET al index.html de google.com Y lo que provocó esa petición, es que, para poder armar a ese index, el navegador tenga que hacer más peticiones. Es decir, para armar a ese index.html, necesitó más recursos (archivos .js, imagenes, lo que sea). Los cuales los solicitó mediante más peticiones.

### Aclaración

```text
Petición = Request // Respuesta = Response
```

Lo primero que va a traer un servidor va a ser un archivo index.html. El cual va a tener el punto de entrada de la aplicación (entry point).

### Aclaración
Una IP es una identificación de un Servidor dentro de una determinada Red. No es como un DNI, ya que la IP puede cambiar constantemente. Todas las IP tienen su Dominio, que es su nombre de fantasía. Para una persona es más fácil recordar un nombre en letras simples, que una dirección IP que son números. Entonces, el Dominio sería la traducción de la Dirección IP. Dominio = IP

Las peticiones y respuestas tienen cabeceras.

En la sección General vamos a ver la Request URL, el método, status code, etc.
Vamos a ver que hay Response Headers (las cabeceras de la respuesta del Servidor) y Request Headers (las cabeceras de nuestra petición). Los headers son clave-valor con diversa información. 

Gran parte de los Response Headers y los Request Headers los hace el propio navegador.
Los Headers (cabeceras) es toda la metadata. Tiene información útil.
