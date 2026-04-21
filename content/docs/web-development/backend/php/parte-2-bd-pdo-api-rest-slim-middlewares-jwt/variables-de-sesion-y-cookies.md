---
title: "Variables de Sesión y Cookies"
---

Variables de Sesión
De acá nace el término "Iniciar Sesión".
Una sesión sería como una relación entre el usuario actual y las peticiones que éste realiza. A esas peticiones se les da una identificación y se guardan en una sesión.

Las variables de Sesión son una forma de guardar info. de un usuario particular, que puede ser usada en distintas páginas del sitio Web. Esta información NO se almacena en el Cliente.
Dado que HTTP no mantiene el estado entre páginas, la utilización de variables de sesión permite mantener información acerca de un sólo usuario, y están disponibles para todas las páginas del sitio Web. Por defecto, las variables de sesión duran hasta que el susuario cierra el navegador.

Una sesión se inicia con la función PHP: session_start();
Dicha función debe estar declarada en cada script al que deseamos utilizar con variables de sesión. Estas variables se establecen con la variable super global de PHP: $_SESSION
$_SESSION es una variable super global, es un array asociativo con la información de la Sesión activa.

session_start();
$_SESSION["CLAVE"] = "VALOR";

Si el session_start() encuentra que ya existe una sesión abierta, va a trabajar con ella. Sino, crea una nueva.

La mayoria de las sesiones establecen una clave de usuario en el Cliente, que es algo como:
765487cf34ert8dede5a562e4f3a7e12
Cuando una sesión se abre en otra página, se examina el equipo para obtener una clave de usuario y si hay una coincidencia, se accede a esa sesión. Si no, se inicia una nueva.

session_start();
echo $_SESSION["CLAVE"];

Destruir
session_unset();      // Remover todas las variables de sesión
Remover las variables de sesión sería como reiniciar los datos de una sesión existente.
session_destroy();   // Destruir la sesión
Destruir la sesión directamente la cierra y se pierde toda vinculación previa.

La Sesión se mantiene viva durante la Request que estamos haciendo en Postman. Cuando nosotros cerramos una pestaña de una Request, en ese momento se destruye la sesión.

La forma de identificar una Sesión es con una Cookie. Es ese código largo de números y letras.

Cookies
El Servidor le da una Cookie al Cliente. Es la forma de identificar una sesión. Obliga a escribirlo y a mandarlo en la cabecera cada vez que haga una Request nueva. El Servidor le dice al Cliente que se guarde una Cookie y que se la envíe cada vez que le quiera mandar una Request nueva.

Entonces, la Cookie sirve para identificar al usuario. Una Cookie es un pequeño archivo con información clave-valor, que el Servidor guarda en el Cliente.

Esa información suele ser bastante chica y suele ser algo muy particular o específico. Una de las Cookies más conocidas es la de Sesión, que les permite a los servidores relacionar una Sesión del lado del Backend, con el lado del Cliente.

La cookie, entonces, va a viajar siempre en cada Request.

Ultimamente se le está dando mucho valor al tema de las Cookies. Lo que hacen las cookies es guardar información de lo que hacemos en la página; cantidad de clicks, mapa de calor, lo que clickeamos y lo que no, etc. Es como que reconocen un modelo de comportamiento. Recopilan estos datos con el fin de darnos una mejor experiencia. Pero a veces es excesivo la cantidad de cookies que utiliza la web, las cuales ocupan espacio en la memoria del navegador. Por eso es que ahora generalmente aparece el cartel para aceptar o no este comportamiento.

Las 'Key' de las Cookies basicamente son todas ID, que sólo las va a entender el Backend, es decir, el Servidor. Nosotros como clientes no vamos a ver algo legible o entendible.

Setear una cookie
setcookie();
Define una cookie para ser enviada junto con el resto de los headers de HTTP. Entonces la cookie va a viajar entre las peticiones y respuestas.

Lo único obligatorio en las cookies es que tengan seteado un nombre. "name". Todo lo demás es opcional. Si existe algún tipo de salida anterior a la llamada de setcookie(), fallará y retorna FALSE. Si se ejecuta correctamente, devuele TRUE (esto no indica si el usuario aceptó la cookie o no).

setcookie(name, [value], [expire], [path], [domain], [secure], [httponly]);
setcookie($cookie_name, $cookie_value, time() + (86400*30), "/");

$_COOKIES
Es una variavle super global. Es un array asociativo que contiene elementos cargados al script actual a través del método POST. Tiene estos 3 elementos:
["name"] - Nombre de la cookie
["value"] - Valor de la cookie (este valor se guarda en el Cliente)
["expire"] - Tiempo en el que expira la cookie (es una fecha Unix)

Las cookies están del lado del Cliente. Por eso es que nosotros no podemos eliminarlas, ya que es algo propio de la máquina del Cliente y no tenemos ese permiso. Pero para eliminarla podríamos hacer lo siguiente:

Nosotros no tenemos la potestad de borrar una cookie, pero podemos forzar a que el Cliente lo haga. Para hacer esto, le ponemos un tiempo de expiración ya pasado. Entonces volvemos a setear la misma cookie y la seteamos en vacío.

setcookie("TestCookie2", " ", time()-3600);
setcookie("TestCookie3", " ", time()-3600, "/cookie/", "test.com", 1);

Aclaración
Cerrar el Postman es como cerrar el navegador. Al hacerlo, expiran las cookies creadas.
