---
title: "Comandos LVM"
---

lsblk   // ver los discos y sus particiones

*** Particionar discos ***
sudo fdisk /dev/sdb   >  'n'  >  etc    'w' para guardar
sudo fdisk /dev/sdc    >  'n'  >  etc    'w' para guardar

*** Cambiar tipo de partición ***
sudo fdisk /dev/sdb    >  't'  >  8e   (En todas las particiones)  'w' para guardar
sudo fdisk /dev/sdc    >  't'  >  8e    (En todas las particiones)  'w' para guardar

*** Crear Volumenes Físicos***
sudo pvcreate /dev/sdb1 /dev/sdb2 /dev/sdc1  //Así con todas las particiones
sudo pvs // ver los volumenes físicos

*** Crear Grupos *** *** RECIÉN ACA ES CUANDO HAY QUE COMBINAR PARTICIONES ***
--- sudo vgcreate vg10G /dev/sdc1 /dev/sdd2 ... como sea
--- sudo vgcreate vg5G /dev/sdb1  /dev/sdd1 ... como sea
Crear los grupos dependiendo de lo que pida el ejercicio.
sudo vgs // ver grupos

*** Crear Volumenes Lógicos ***
sudo lvcreate -l +100%FREE -n lvm1 vg10G  
sudo lvcreate -l +100%FREE -n lvm2 vg6G
Así con todos los grupos...
sudo lvs // ver volumenes

*** Formatear las particiones logicas (lvs) en ext4 ***
Para saber cómo tirar el mkfs, tirá antes un 'sudo vls' y así ves como va la ruta
sudo mkfs.ext4 /dev/vg10G/lvm1
sudo mkfs.ext4 /dev/vg6G/lvm2    