---
title: "Protocolo HTTP y Peticiones - Respuestas"
description: "Un protocolo es un conjunto de reglas que indican cómo se realiza una comunicación. Es como el idioma en el que se van a comunicar el Cliente y el Servidor."
---


## Protocolo

Un protocolo es un conjunto de reglas que indican cómo se realiza una comunicación. Es como el idioma en el que se van a comunicar el Cliente y el Servidor. En el caso de la transferencia de datos, Internet utiliza HTTP para transmitir páginas Web.


## HTTP (Hypertext Transfer Protocol) (Protocolo de Transferencia de Hipertexto)
 
- HTTP es un protocolo el cual está diseñado para permitir comunicaciones entre Clientes y Servidores. Hace que las solicitudes (Requests) y respuestas (Responses) tengan un determinado formato a seguir y respetar, con el fin de que la comunicación sea efectiva. Es el más utilizado de todos, y tiene su variación "HTTPS", que es exactamente lo mismo, pero con más seguridad, gracias a usar TLS (Transport Layer Security) para encriptar los datos y evitar que puedan ser interceptados por atacantes.

- Hipertexto significa texto enriquecido, es decir, un texto que tiene distintas características según su formato.

- Es como si Cliente y Servidor estuvieran en estaciones de tren distintas, y yo quiero llevar algo de un punto al otro. Independientemente de qué quiera llevar en el tren, el tren es el método de transporte. Es decir, HTTP sería ese tren que comunica a Cliente y Servidor. HTTPS sería lo mismo que HTTP, pero la información que lleva transportada en el tren está mas blindada que en HTTP. Eso sirve para los datos sensibles (contraseñas, domicilios, lo que sea).

- Entonces, HTTP establece la FORMA que debe tener una Request y una Response. 


## Formato de las Requests y Responses

En la informática, las comunicaciones se hacen mediante PAQUETES. En el caso de HTTP, cada Request se hace mediante un paquete que va a tener una estructura determinada, cuyas partes más importantes son: Method, URL, Header y Body:

1. Method: Establece qué metodo/verbo HTTP se usará.
2. URL: Especificamos con qué servicio o recurso queremos comunicarnos.
3. Header: Ciertas especificaciones importantes para poder llevar a cabo la comunicación. Por ejemplo, puede ser un archivo JSON con distinta información que queremos enviar.
4. Body: Este campo es opcional, pero sirve para incluir algunos objetos, textos u otros datos que queramos enviar en la Request.

Los paquetes de las Responses tienen una forma muy similar a la de las Request. Estos están conformados por Status Codes, Header y Body:

1. Status Code: Le permiten al cliente saber cómo salió su solicitud (si salió bien, mal, más o menos, y el motivo). Por ejemplo, 201, 204, 400, 401, etc.
2. Header: Lo mismo que en la Request.
3. Body: Lo mismo que en la Request.


## Ver la información de las Requests y Responses en una página

Si abrimos las herramientas del desarrollador en algún sitio web, podemos ir a:

```text
DevTools > Network
```

- En esta pestaña vamos a ver distinta información, y la lista de Requests (peticiones HTTP). Estas peticiones son las que nosotros (Cliente) le estamos enviando al Servidor, mediante el navegador.

- Al presionar acceder a un sitio, por ejemplo Google, vamos a ver que en Network van a aparecer distintas Requests (peticiones HTTP). La primera de todas, llamada www.google.com, es la que hicimos nosotros. Es decir, le hicimos una petición GET al archivo index.html de google.com. Y lo que provoca esa petición, es que, para poder armar la página, el navegador tenga que hacer más peticiones. Es decir, para armar la página HTML, va a necesitar más recursos del Servidor (como archivos .js, css, videos, imagenes, lo que sea). Entonces, todo se traduce en más peticiones.

- Generalmente, lo primero que trae un servidor va a ser un archivo index.html. El cual va a tener el punto de entrada de la aplicación (entry point).

- Ahora, centremonos en la lista de requests que encontramos en Network, las cuales las podemos filtrar por tipo (JS, CSS, Media, etc.) Al hacer clic en alguna, se despliega toda una sección de datos de esa misma petición. Nosotros podemos ver la información de cada una de las requests realizadas, principalmente sus cabeceras (Headers).

- Al ver las cabeceras de alguna request, vamos a ver que tenemos 3 apartados: "General", "Response Headers" y "Request Headers". 

- En la sección General vamos a ver la Request URL, el método, status code, etc.

- En las otras dos secciones, vamos a ver diversa información en formato clave-valor.

- Gran parte de los Response Headers y los Request Headers los hace el propio navegador. Los Headers (cabeceras) es toda la metadata. Tiene información útil.


## Métodos o Verbos HTTP (Explicados en otro apunte)

- GET. Solicita información de un recurso.
- POST. Agregamos nueva información al servidor.
- PUT. Modificamos información existente en el servidor.
- PATCH. Modificamos información -parcial- del servidor.
- DELETE. Eliminamos información del servidor.