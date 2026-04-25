---
title: "Todo sobre XAMPP"
description: "La 'X' significa que es multiplataforma (es decir, para cualquier SO)."
---


- XAMPP -
La 'X' significa que es multiplataforma (es decir, para cualquier SO).
La 'A' significa Apache, que es el servidor de PHP que vamos a usar. Va a ser el intérprete de nuestro código.
La 'M' significa MariaDB, que es la base de datos MySQL que es la que vamos a usar.
La P es de PHP y la otra P es de Perl. Perl no lo vamos a usar.

XAMPP es un paquete de aplicaciones que nos facilita levantar un servidor Apache (que es el servidor que vamos a utilizar para interpretar nuestro código PHP), levantar un servidor de base de datos MySql, y todo lo que necesitamos para poder utilizar PHP en nuestra máquina.

A esta altura, me instalé XAMPP. El instalador ya viene con todos los componentes necesarios. 'Perl', como no lo vamos a usar, no es necesario.

Hay que darle 'Start' al que dice Apache, justamente para levantar/correr el servidor Apache.

Abrimos el navegador y vamos a esta URL:      http://localhost/dashboard/
Podemos simplemente escribir 'localhost' en la barra y darle a enter, y nos va a llevar ahí. O también podemos poner localhost:80 y darle a enter, y tambien nos lleva. Hay que poner 80 porque es por defecto el puerto con el que estamos levantando el servidor Apache. Esto, en la configuración del XAMPP Control Panel (el XAMPP) lo podemos modificar, para que el puerto sea otro.

Una aclaración sobre los puertos
Puede pasar que se de el error de que el puerto ya este usado. Por ejemplo, capaz que tengo algún programa en mi máquina que me levanta el puerto 80. Entonces cuando quiera levantar al servidor Apache en el mismo puerto 80, me va a decir que no se puede. Eso se resuelve simplemente cambiandole el puerto. Es lo mismo que habiamos visto con el Live Server.

En la carpeta 'xampp', que es donde está instalado XAMPP (ubicada en el disco local C), vamos a tener una carpeta llamada 'htdocs'. A partir de lo que esté aca adentro, es donde inicia la raiz de nuestro servidor. Eso significa que si vamos a '' localhost/ '' estamos yendo a la carpeta 'htdocs'. Así que todo lo que esté dentro de htdocs, va a verse reflejado ahí. 

Dentro de htdocs vamos a hacer una carpeta llamada Clase01. Y dentro de ella, un archivo llamado 'index.php'.
Dentro del index.php, vamos a escribir:

```php
<?php
```
```php
echo "Hola Mundo";
```
?>

Para ver esto reflejado en el navegador tenemos que escribir esto en la URL:

http://localhost/Clase01/index.php/

Aclaraciones
- Como dijimos, localhost accede al contenido de htdocs.
- Apache, por defecto, lo primero que va a ir a buscar siempre va a ser un archivo llamado index.php. Si no lo encuentra, va a buscar un index.html. Y si tampoco lo encuentra, va a dar error.

Se recomienda borrar todo que hay por defecto en htdocs. Literalmente todo. No lo necesitamos, son archivos como para informar que Apache está bien instalado, da igual que estén o no. O sea que, htdocs quedaría vacío y solo tendría la carpeta 'Clase01' que creamos nosotros.