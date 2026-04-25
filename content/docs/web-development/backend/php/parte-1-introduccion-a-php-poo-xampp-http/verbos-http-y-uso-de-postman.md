---
title: "Verbos HTTP y uso de Postman"
description: "HTTP - Método GET"
---


HTTP - Método GET
El GET es un verbo que, en el navegador, sólo funciona en la barra de búsqueda al armar el URL. De hecho, en la barra de búsqueda del navegador SÓLO puedo hacer GET. Para hacer ejecutar otro tipo de métodos HTTP en el navegador, lo tenemos que hacer programáticamente, mediante HTML o JS. 

Tenemos la posibilidad de pasarle parámetros (Query Params) de tipo Key-Value, como si fueran un Dictionary. El verbo GET NO tiene Body. 
El par de nombres/valores es enviado SIEMPRE en la dirección URL (texto claro). No hay otra forma.
Las peticiones GET se pueden almacenar en el caché, permanecen en el historial del navegador, pueden ser marcadas como favoritas, no se debe utilizar cuando se trata de datos confidenciales y tiene limitaciones de longitud de datos (2048 caracteres en la URL máximo).

Caché: es un tipo de memoria que guarda parte de los recursos que vamos pidiendo. Toda la parte del caché lo maneja el navegador que estemos usando. Por ejemplo, el logo de Google. Lo lógico es que por más peticiones que hagamos, el logo de Google nunca va a cambiar. Por lo tanto, en vez de pedirlo una y otra vez en cada petición que hacemos, directamente lo guarde en la caché la primera vez que lo pida. Y a partir de ese momento, cada vez que vaya a hacer una petición, ese recurso del logo de Google, lo va a tener ya disponible en la caché y no va a necesitar solicitarselo al servidor de Google.
Nosotros podríamos, en los Headers a la hora de hacer la petición, podríamos especificar No Caché. Es decir, que no guarde nada en la caché.


HTTP - Método POST
El par de nombres/valores es enviado en el cuerpo del mensaje HTTP, es decir que POST a diferencia de GET, sí tiene Body. Que estos parámetros Key-Value estén dentro del Body, hace que la información no esté en la URL de lo que estamos solicitando. Están más seguros, como si estuvieran dentro de un sobre. No es completamente seguro, pero sí lo es más.
Las peticiones POST, a diferencia de GET:
No se almacenan en caché, no permanecen en el navegador, no pueden ser marcadas como favoritas ni tienen restricciones de longitud de datos.

HTTP - Manejo de Formularios
Tanto GET como POST crean un array asociativo.
Dicho array contiene pares de clave-valor, donde las claves son los nombres (atributo name) de los controles del formulario y los valores son la entrada de datos del usuario.

PHP particularmente, utiliza las 'super globales' $_GET (array pasado por GET), $_POST (array pasado por POST) y $_REQUEST (array asociativo que contiene $_GET, $_POST y $_COOKIE) para recolectar datos prevenientes de un Form. Super globales significa que son variables que están presentes todo el tiempo y son accesibles para todos los archivos php.

Aclaración
Siempre que hago una petición, sea con el método que sea, se va a ejecutar el script. 

$_GET es una variable que SIEMPRE nos va a mostrar lo que viene en la URL. Es un array asociativo que sus valores van a ser los parámetros que tenga la URL.

Para hacer POST podemos usar Postman. Postman es un cliente parametrizable y configurable, que nos sirve para hacer pruebas de Peticiones a un Servidor.

Aclaración
En el Postman me creé una cuenta (usuario miguelbj - junmigue7@gmail.com)

Vemos que tenemos un Workspace creado por defecto llamado 'My Workspace'. Vamos a trabajar ahí. Sin crear colecciones, hicimos una nueva Request llamada 'HTTP'. Es una Request HTTP que por defecto viene con el verbo GET. Nosotros podemos cambiar al verbo que queramos. Tenemos al lado una barra para escribir la URL en la que queramos trabajar.

Cuando escribimos la URL (que podría ser https://www.google.com/) o la URL de algún ejercicio nuestro, le damos a Send para enviar la petición. Automaticamente Postman nos va a devolver la respuesta del servidor. 

En la respuesta podemos ver el Status de la petición, el tiempo que tardó en llegar la respuesta, y el tamaño de la respuesta.
Podemos ver el Body, las Cookies y los Headers. 

En 'Body' podemos ver distintas formas de visualizar la respuesta. El que importa es Pretty.

Como sabemos existe la página: https://http.cat/ la cual nos sirve para aprendernos los códigos de respuesta (Status Code) con fotos de gatitos. Vamos a poner esto en el Postman.

Si ponemos la URL así:
https://http.cat/200

Nos va a devolver la imágen del gatito correspondiente al código 200. (Esto es así porque así funciona http.cat). 

Tenemos los parámetros para modificarlos como queramos, con su Key y Value. También podemos enviar datos modificando el Body. Son independientes.