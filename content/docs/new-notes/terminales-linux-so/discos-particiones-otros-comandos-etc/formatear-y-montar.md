---
title: "Formatear y Montar"
---

Bueno, es increíble como entendí todo. Aprendí a formatear y a montar, y más cosas:

Para formatear lo que tenemos que hacer es escribir sudo mkfs.ext4 /dev/sdb1
Así con cada partición (particiones extendidas no se formatean, lógicas si).

Bueno, una vez que formateamos así lo que tenemos que hacer para montar es:
sudo mount -t ext4 /dev/sdb1 carpeta    //donde pongo 'carpeta' es a la carpeta a donde quiero montar la partición. 
Para desmontar, lo que hago es:
sudo umount carpeta   //ahí ya desmonté.

Montar es fácil... Algo que hay que entender es que en el parcial TODO se hace desde el home, es decir, cada comando lo tiro estando en el home, no puedo entrar a ningun otro subdirectorio. Si quisiera montar en algun subdirectorio de otro directorio haría así:
sudo mount -t ext4 /dev/sdb1 clase07/padre/hijo   //y así, monté la partición en esa ruta (hijo)

Así es como se formatea y se monta.
