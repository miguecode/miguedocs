---
title: "Comandos para PowerShell parte 2"
---

📜 Comandos de la Terminal PowerShell, parte 2 📜


📂 Creando directorios 📂

mkdir ventas/{online,negro}

📁 Esto creó un subdirectorio 'ventas' que adentro tiene otros 2 subdirectorios, 'online' y 'negro'.

mkdir compras/{nacional,internacional,nn}/item{1..6}

📂 Esta línea creó un subdirectorio 'compras' el cual tiene tres subdirectorios: 'nacional', 'internacional' y 'nn'. Cada uno de estos 3 subdirectorios tiene adentro 6 subdirectorios más, llamados 'item1', 'item2', 'item3', 'item4', 'item5' y 'item6'.

mkdir practicando4/carpeta1/{a,b/item{1..5},c,d,e/{xd,lol}}

🗂️ Este es un ejemplo más complejo: creamos una carpeta 'practicando4', que adentro tiene una carpeta llamada 'carpeta1'. Esta, a su vez, tiene más carpetas: 'a', 'b', 'c', 'd' y 'e'. La carpeta 'b' tiene adentro 5 carpetas más, llamadas 'item1', 'item2', 'item3', 'item4' e 'item5'. La carpeta 'e' tiene adentro dos carpetas: 'xd' y 'lol'.


🗑️ Eliminando directorios 🗑️
Si quiero remover más de una carpeta puedo hacer esto:
rm producto usuario
❌ Esto borra 'producto' y 'usuario'.


📁 Creando múltiples directorios 📁
Si quiero crear más de una carpeta puedo hacer esto:
mkdir producto/usuario usuario/fotos
🆕 Esto crea los directorios 'producto/usuario' y 'usuario/fotos'.


📄 Copiando directorios 📄

📋 El cp funciona así:
cp {contenido a copiar} {ruta destino}

Entonces, si hago:
cp saludar.txt carpeta1/plantas/girasol.txt

Lo que hice fue crear en el directorio 'carpeta1/plantas/' un archivo llamado 'girasol.txt' con el contenido de 'saludar.txt'.


🚚 Moviendo directorios 🚚

📂 El mv funciona así:

mv {contenido a mover} {ruta destino}
A diferencia del cp, no crea nada nuevo en el destino, ya que literalmente MUEVE el contenido.

Entonces, si hago:
mv carpeta1/plantas carpeta4

Esto mueve la carpeta 'plantas' (que está dentro de 'carpeta1') hacia dentro de 'carpeta4'.
Para mover más de un elemento:

mv carpeta1 carpeta2 carpeta3 carpeta69 {ruta destino}
📦 Esto mueve 'carpeta1', 'carpeta2', 'carpeta3' y 'carpeta69' a la ruta destino especificada.