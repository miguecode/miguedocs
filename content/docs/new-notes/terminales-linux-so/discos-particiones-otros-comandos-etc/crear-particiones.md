---
title: "Crear particiones"
---

Estamos viendo un mini repaso de lo que vimos en la clase 3 (de la teoría)
Esta hablando de cosas copadas (la ram) pero que tendría que volver a ver...

Otra vez lo mismo, es increíble la cantidad de teoría que da... es imposible prestarle atención. Es él 2 horas hablando en monólogo sin parar.


Abrimos el VirtualBox
Para agregar un disco rígido tenemos que ir a la configuración de la máquina a la que le queremos agregar el disco. Vamos a almacenamiento, y en SATA agregamos un disco de tipo DVI, y el tamaño que queramos. Le ponemos el nombre que queramos y listo.

Ahora corremos la máquina y abrimos la consola:

Primero pusimos:
'lsblk'
sta = sata disk a

ls /dev/    nos abre un listado grande
DEV = DEVICE   (NO ES DEVELOPER)
En este listado grande que podemos ver, el profe nos mostró que aparece un 'sda', y algunos 'sda1,2,3'. 'sda' es el disco rígido, y cada unos de los números, ('sda1', 'sda2', etc.) son particiones. Después tenemos un sdb, el cual no tiene números, lo que quiere decir que no tiene particiones y por lo tanto no se puede usar. Nosotros nunca vamos a usar 'sda'. Solo vamos a usar sus particiones.

Ahora lo que nosotros vamos a hacer es crear particiones:

'sudo fdisk'   //nos dice que así no se usa.
SUDO = super usuario hace...  (para tener más privilegios en ciertos comandos, es como si ejecutaramos como administradores)
'sudo fdisk /dev/sda'    // ingresamos 'm' 
Acá nos abre las opciones, ingresamos 'p' y vemos...
Ahora para salir, 'q'

'lsblk' nos muestra eso otra vez...
Y ahora sí:
'sudo fdisk /dev/sdb'  //nos metemos otra vez a esta app pero ahora en 'sdb' en vez de 'sda'
A mi me aparece un warning y me pide ingresar 'w', yo lo hago.
Con 'p' vemos info.

Ahora dentro de la app  'sudo fdisk /dev/sdb' (donde ya estamos...) tenemos que ingresar la opción 'n', con la cual agregamos una nueva partición:
'n'  //agregamos una nueva partición
Ahora nos pide elegir entre crear una partición primaria ('p') o extendida ('e').
Pulsamos 'enter' (significa 'p', ya que es el default)
Ahora nos hace elegir qué número de partición queremos.
Pulsamos 'enter' (significa '1', ya que es el default)
Ahora nos hace elegir el valor del primer sector.
Pulsamos 'enter' (significa '2048', ya que es el default)
Ahora nos vuelev a consultar por el sector, y usamos nuevamente el default.
Pulsamos 'enter' (significa 'p', ya que es el default)

Listo, ya creamos una partición. 
Para ver la info, ingresamos 'p'
Nos aparece la partición que acabamos de crear, con su información. Ahora tenemos que guardarla y para eso usamos el comando 'w'.
'w'   //guardamos la partición que acabamos de crear.
Ahora ponemos 'lsblk' para ver las unidades...
Ahora en 'sdb' se abre una partición llamada 'sdb1' de 20GB
Esto significa que ya creamos la partición pero no podemos usarla. Para usarla primero la tenemos que formatear.
Para hacerlo vamos a usar el comando 'mkfs' = make file system.
'mkfs /dev/sdb1'   //Nos dice que no tenemos permiso, asi que ponemos 'sudo'

'sudo mkfs /dev/sdb1'  //Ahora si nos dejó formatear

Una vez formateado, ya es usable. Si abrimos el explorador de archivos de la máquina, nos aparece en la sección 'devices', la partición que acabamos de crear. A mi en esta máquina me apareció también en el escritorio.

Ahora vamos a hacerlo otra vez, cerramos la máquina, y creamos un disco nuevo. Esta vez de 10GB.

Abrimos la consola, hacemos 'slblk' para ver las unidades y vemos que nos aparece un 'sdc' que es el nuevo disco de 10GB que agregamos recién.
Y ahora hacemos lo mismo que antes: entramos a la app fdisk así:
'sudo fdisk /dev/sdc'
'w'   //guarda lo que hicimos
'sudo fdisk /dev/sdc'
'n'
Nos aparece que tenemos 4 primarias free (libres) para usar. Nosotros usamos siempre primarias. Entonces le damos a 'enter' que significa el default primaria.
Ahora nos pregunta qué partición queremos, le damos a 'enter' para elegir la default y listo.
Ahora nos pregunta sobre el primer sector, también usamos 'enter'.
Ahora en el último sector podemos ingresar esto:
'+5G'
Listo, ahora le damos a 'p' para que imprima y veamos la info.

En la info vamos a ver que ambos pesan 5GB. Esto es porque el disco que creamos le pusimos de tamaño 10GB, y al primero le indicamos que pese 5GB. Y al segundo, le dimos default, que sería el resto (5). 

Ahora si le damos a 'n' para hacer otra partición, nos va a decir que quedan sólo 3 frees porque ya hicimos una primaria.  Ahora el default es 2, le damos a 'enter'. Ahora otra vez 'enter'. Y ya en el último sector podemos poner un tamaño. Nosotros en este caso el damos 'enter'.
Listo, ahora le damos a 'p' para ver como quedaron.

Para finalizar, ponemos 'w' para guardar todos los cambios hechos.

Ahora vamos a formatear ambas particiones:
'sudo mkfs /dev/sdc1'
'sudo mkfs /dev/sdc2

Listo, ya nos aparecen ambas particiones en el explorador de archivos (en devices) (y en esta máquina, aparecen también en el escritorio).

Ahora el profe nos enseñó a borrar un disco. Vamos a borrar sdb.
Para esto tenemos que entrar a la app fdisk.
'sudo fdisk /dev/sdb'   
'd'
Nos pregunta cual borrar y la elegimos. 
Siempre al final tenemos que ingresar 'w' para guardar los cambios. Si hacemos 'q' sin guardar los cambios, se deshacerán.

Una vez borrada, nosotros podemos volver a crear particiones en este mismo disco. El profe nos pidió que creemos uno de 10, otro de 5, y otro en default(que volvería a ser 5, ya que 10+5+5=20).