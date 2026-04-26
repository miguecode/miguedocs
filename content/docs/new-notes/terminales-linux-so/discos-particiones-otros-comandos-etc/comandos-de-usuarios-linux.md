---
title: "Comandos de usuarios (Linux)"
description: "Pasando en limpio, cuando llegamos a la parte de crear usuarios y grupos, tenemos que codear lo siguiente:"
---


## Introducción

Pasando en limpio, cuando llegamos a la parte de crear usuarios y grupos, tenemos que codear lo siguiente:

*** CREAR GRUPO ***
sudo groupadd grupo123

*** CREAR USUARIOS ***
sudo useradd -m -s /bin/bash -c "Es un comentario, poné el nombre de user" -g grupo123 NombreDeUser123

*** CHECKEO ***
sudo grep NombreDeUser123 /etc/shadow
sudo grep NombreDeUser123 /etc/passwd
sudo grep NombreDeUser123 /etc/grupo123

*** MOVER USUARIO A GRUPO ***
sudo adduser NombreDeUser123 grupo123

*** PONERLE PASSWORD A LOS USUARIOS ***
sudo passwd NombreDeUser123

*** DARLE PERMISOS SUDO A LOS USUARIOS ***
sudo visudo
- **Editar el User privilege specification**: 
root ALL=(ALL:ALL) ALL
NombreDeUser123ALL=(ALL:ALL) ALL   //Agregar esto con cada usuario

*** ENTRAR CON OTRO USUARIO ***
su NombreDeUser123  //Nos pide la password, la ingresamos

cd   //Tiramos un 'cd' para ir al home

Hacemos un mkdir para guardar el montaje de los discos...
sudo mkdir Disco01
sudo mkdir Disco02

*** MONTAR ***
Leé bien la consigna. Generalmente te pide montar un lvm con un usuario y otro con otro.

Acá para saber bien la primer ruta es lo mismo que antes, tirá un sudo lvs para ver a cual lvm le corresponde cada grupo y listo. Tirás el grupo con el lvm que pide el ejercicio.

| sudo mount /dev/vg10G/lvm1 | /home/NombreUsuario123/Disco01 |
| --- | --- |
| sudo mount /dev/vg6G/lvm2 | /home/NombreUsuario123/Disco02 |

-- Aclaración --
| ls -l | //Ver los permisos |
| --- | --- |
| ls -l archivo.txt | //Ver los permisos del archivo |

Ya en el home (cd), creamos un archivo:
echo ''hola!'' > saludar.txt
history > saludar.txt
ls -s > saludar.txt
man ls para ver que info podemos cargar...

*** CAMBIARLE LOS PERMISOS AL ARCHIVO ***
chmod 740 saludar.txt
El número depende de lo que pida el ejercicio.
Cargar algo... history > saludar.txt

*** VER EL ARCHIVO ***
sudo less /home/NombreDeUsuario123/saludar.txt