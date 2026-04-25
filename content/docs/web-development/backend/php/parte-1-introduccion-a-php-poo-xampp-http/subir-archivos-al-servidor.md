---
title: "Subir archivos al Servidor"
description: "Persistir Información"
---


Persistir Información

Subir archivos al Servidor
Para poder subir archivos al Servidor, es necesario crear un formulario en HTML que le permita a los usuarios seleccionar un archivo. Obviamente usando el input type ="file". 'Form' tiene que quedar así: 
<form action="upload.php" method "post" enctype="multipart/form-data">

El método del formulario debe ser POST. El enctype especifica el contenido/tipo a usarse cuando se envía el formulario. Sin esos requerimientos, la subida de archivos no funcionará.

Esta es la forma más antigua, actualmente dejó de ser tan usado.

Ahora, del lado del Servidor, vamos a tratar esa subida de archivos (ya sea con la forma más antigua o con otra), usando la variable global $_FILES.
Vamos a tener que mover el archivo subido desde su ubicación temporal, a la ubicación definitiva dentro del Servidor.

$destino = "uploads/" . $_FILES["archivo"]["name"];
move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);

Cuando PHP recibe el archivo, lo guarda en una carpeta temporal. Entonces, si nosotros queremos que ese archivo persista por siempre en el Servidor, nosotros lo tenemos que mover hacia dentro del propio Servidor.

Para nosotros, el archivo va a ser un objeto. Va a tener un nombre, un tamaño, un nombre temporal y otras características.

move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
Esta línea es una función de PHP que nos va a permitir mover el archivo. Como primer parámetro, recibe el nombre temporal del archivo. Y como dijimos, el archivo es un objeto. Por lo tanto, tiene su propio atributo ["tmp_name"], que es su nombre temporal. Por eso es que accedemos a él así:
$_FILES["archivo"]["tmp_name"]
El array asociativo $_FILES contiene un elemento ["archivo"], el cual es un objeto que tiene un atributo ["tmp_name"]

Y como segundo parámetro, va a ser el destino. Significa en qué parte del Servidor lo quiero guardar. 

$_FILES es una variable super global (esto es algo propio de PHP). Es un array asociativo de elementos cargados al script actual a través del método POST.
Tiene los siguientes elementos/keys:
"name" - nombre del archivo (con su extensión).
"type" - tipo del archivo (dado por el navegador).
"tmp_name" - carpeta temporal donde se guardará el archivo subido.
"error" - código de error (si es 0, no hubo errores).
"size" - tamaño del archivo medido en bytes.

Aclaración
Las validaciones SIEMPRE deben estar de ambos lados del mostrador: es decir, del Frontend y del Backend.

Como dijimos antes, hacerlo mediante HTML está algo obsoleto. Por eso nosotros lo vamos a hacer mediante Postman de la siguiente forma:

Tenemos que ponerlo en método POST, y en Body ponemos form-data. Cuando vamos a escribir una key, en este caso le ponemos 'archivo', y vamos a ver que puede estar en modo 'Text' o modo 'File'. Si ponemos File, nos va a hacer seleccionar un archivo desde nuestro explorador de archivos del SO.

Ojo
Cuidado con hacer esto en un index.php ya que, tenemos que tomarnos el trabajo de escribir 'index.php' en la URL del Postman. Es decir, tenemos que explicitar index.php en la URL.