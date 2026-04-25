---
title: "Crear particiones y otras carpetas"
description: "Más y más teoría. Esta vez un poco más 'digerible' ya que tocó temas de archivos y discos."
---


Más y más teoría. Esta vez un poco más 'digerible' ya que tocó temas de archivos y discos.

Nos mandó a crearnos un disco rígido de 20GB en una máquina virtual y hacer lo que nos pide el ejercicio de la clase 5 del classroom.
Hicimos una boludez, pero no la pude terminar por culpa de que se me apagó la pc 2 veces porque se me trababa... mirá la clase devuelta tranqui que es fácil (e importante).

Bueno, ahora como ejercicio creamos un disco de 5GB. Primero hicimos una partición primaria de 2GB y ahora una extendida todo default. Cuando hacemos lsblk, vemos que en el tamaño de la extendida figura '1K'.

Ahora hacemos otro fdisk, y cuando ingresamos 'n', vemos que en las opciones ya no aparece la extendida, ahora aparece 'lógica'. Creamos una y le damos 1GB de memoria. Después creamos otra, y le damos todo el resto.
Hasta ahora lo que hicimos fue una partición primaria, y después una partición extendida, a la cual la dividimos en 2.
Si hacemos lsblk, vamos a ver que nos aparecen los 'sdc...' discontinuados, es decir, 'sdc1, 2, 5, 6'.  Esto ocurre por lo siguiente:
Nosotros sólo podemos tener 4 particiones primarias, por eso se guarda los lugares sdc1, sdc2, sdc3 y sdc4, a nosotros nos aparece sdc1 que sería nuestra primera partición primaria. Al tener una partición extendida, esta ocupa el lugar de sdc2, y todas sus divisiones, es decir, las particiones lógicas, empiezan a contarse desde el 5. Entonces tenemos sdc5 (la primer partición lógica) y sdc6 (la segunda). Hay que aclarar siempre que LAS PARTICIONES EXTENDIDAS SON INUTILIZABLES. Las que hay que usar son las lógicas (las cuales son ilimitadas, no sólo 4).

Cosas a entender: cuando creamos una partición extendida, ya no podemos crear más primarias, a partir de ahora solo podemos hacer lógicas (las lógicas, son las particiones que están dentro de la partición extendida que creamos). Si nosotros hacemos una partición extendida de 10GB, podríamos por ejemplo hacer 2 lógicas de 5GB cada una. Pero no podemos pasarnos de esos 10. Cuando formateamos, no tenemos que formatear la partición extendida, sino que tenemos que ir formateando una por una sus particiones lógicas (es decir, sus divisiones). Y lo mismo al montar, no podemos montar la extendida, tenemos que montar cada lógica.





Sobre la creación de mkdir:
Tenes que entender que las { } marcan todo lo que va a tener adentro una carpeta, es decir todo lo que va después del / .
Dentro de las { }, lo que separa cada carpeta son las ' , '. Por lo tanto:

mkdir -p Nacion/{prov{1..3}/ciudad,caba} //Este comando me va a crear una carpeta Nacion la cual va a tener adentro 3 carpetas prov 1, 2 y 3, donde cada una de estas carpetas va a tener adentro una carpeta 'ciudad'. Y además, la carpeta Nacion va a tener una carpeta 'caba'.

mkdir -p Nacion/prov{1..3}/{ciudad,caba} //Este comando me va a crear una carpeta Nacion la cual va a tener adentro 3 carpetas prov 1, 2 y 3, donde cada una de estas carpetas va a tener adentro dos carpetas, una llamada 'ciudad' y otra 'caba'.


En este caso, formatear sdc2 no se puede, el 1, el 5 y el 6 sí. 

Ingresamos:
sudo mkfs.ext4 /dev/sdc     // Esto serviría para formatear al disco, cosa que eliminaría todo lo que tiene y habría que volver a hacer particiones etc.
