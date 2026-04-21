---
title: "API REST, Framework Slim"
---

API REST

REST: Representational State Transfer
Es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP.

REST nos permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo o cliente que entienda HTTP, por lo que es increíblemente más simple y convencional que otras alternativas que se han usado en los últimos diez años como SOAP y XML-RPC.

Por lo tanto, REST es el tipo de arquitectura más natural y estándar para crear APIs para servicios orientados a Internet.

Una API es una interfaz que conecta dos cosas. Es una forma de comunicarse, estableciendo un contrato. Las APIS se consumen y están en todos lados. No es más que una forma de comunicar.
A partir de ahora todas las aplicaciones que hagamos van a ser APIS.

REST es un protocolo cliente/servidor SIN ESTADO:
HTTP no maneja estados, cada mensaje HTTP contiene toda la info. necesaria para comprender la petición. Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes.

REST es un conjunto de operaciones bien definidas:
Las cuales se aplican a todos los recursos de información: HTTP en sí define un conjunto pequeño de operaciones, las más importantes son POST, GET, PUT y DELETE.

COMPOSER
Composer es una herramienta para la gestión de dependencias en PHP. Permite declarar las bibliotecas de las que depende tu proyecto y las administrará (instalará/actualizará) para vos. Es el símil de NPM en JS.

FRAMEWORK
Un Framework es un marco de trabajo. Se usan en todos lados.

El framework nos ayuda a abstraernos, es decir, el framework hace un monton de cosas sin que nosotros sepamos cómo lo hace. Está armado y pensado para que nosotros lo usemos. Es un marco de trabajo y hay que respetarlo como tal porque sino va a romper. 
Slim Framework
Slim es un micro framework de PHP. Es micro porque es muy acotado y conciso en lo que quiere hacer. Generalmente los frameworks son más amplios.

Ayuda a escribir rápidamente aplicaciones Web y APIs sencillas pero poderosas. En esencia, Slim es un despachador que recibe una solicitud HTTP, invoca una rutina de devolución de llamada apropiada y devuelve una respuesta HTTP.


El comando 'Composer install' nos trae la carpeta vendor, la cual la necesitamos si o si.
Es como el node.js que haciamos en JS con el npm. Esto lo hacemos después de haber instalado composer en la pc. Obviamente ese comando lo tenemos que tirar en la terminal de nuestro proyecto. Basicamente lo que estamos haciendo es instalar el composer dentro de nuestro proyecto, para que podamos tenerlo disponible ahí.

A la hora de instalar Composer, tildamos la palomita de lo que decía de la ruta de PHP y 
con la palomita del proxy no hacemos nada, la ignoramos.

Para corregir un posible error relacionado a las rutas existen 2 soluciones:
En el readme del proyecto clonado lo explica con una solución menos eficiente (es la línea de código que especifica la ruta raíz). 

La solución más eficiente es escribir este comando en la terminal:

php -S localhost:666 -t app

Basicamente eso sirve para forzar a que siempre entre a la carpeta 'app', independientemente de dónde la tengamos en nuestro directorio. Siempre se va a levantar el servidor ahí.

Para ver en el navegador:
localhost:666

Con esa direccion directamente nos muestra el index.php de la app

Y a partir de ahora, podemos directamente probarlo con Postman con cualquiera de los 
métodos que vemos definidos en las rutas del index.php.


app->addBodyParsingMiddleware();
Esta línea de código hace que podamos usar PUT sencillamente, es lo que haciamos en el parcial 1 con el 'link' que poniamos para guardar lo que recibiamos en PUT en una variable $datosPUT.


https://github.com/flippiJS/slim-php-mysql-deployment
Ese es el repo que tendriamos que usar de base. 

Este repo nuevo es muy similar a lo que vimos antes en el Ejemplo CDs.
Vemos que tiene los ejemplos de get y post, faltaria que agreguemos el de put y delete
(para eso solamente agregamos las 2 lineas que faltan, el put llama a modificarUsuario y delete llama a eliminarUsuario).

Dato curioso:
el 'env' es simplemente un archivo donde se guardan datos que van a cambiar dependiendo de la maquina
que levante el proyecto, pero que no deberian alterar a mi proyecto. env es enviroment. 

$_ENV hace referencia a las variables de la maquina. Por lo tanto cuando vamos a la clase

Obviamente lo de env esta dentro del gitignore, porque no es algo que tengamos que subir a ningun lado.
