---
title: "Vagrant"
description: "Vagrant es una aplicación que permite levantar máquinas virtuales en VirtualBox a través de código. Para usar Vagrant, hay que instalarlo y después ejecutar un ..."
---


🚀 Vagrant

Vagrant es una aplicación que permite levantar máquinas virtuales en VirtualBox a través de código. Para usar Vagrant, hay que instalarlo y después ejecutar un vagrant up con un archivo de configuración (Vagrantfile). (Vagrant utiliza VirtualBox para levantar las máquinas virtuales).

🛠️ Pasos Básicos

1. Instalar Vagrant
📥 Lo primero y básico es instalar Vagrant (esto te hace reiniciar la PC).

2. Abrir la Consola
💻 Para correr una consola, necesitamos un programa (en la mayoría de los casos, ya tenemos Windows PowerShell en Windows).

3. Descargar un Vagrantfile
📄 Después, descargamos un Vagrantfile que configura una máquina virtual específica. En el Classroom (de la materia Arquitectura y SO), tenemos 2 ejemplos:
- Uno de GitHub que nos hace correr una máquina Mint con interfaz gráfica (para ver la pantalla).
- Otro ejemplo es un archivo descargado desde Google Drive que corre 2 máquinas, pero solo en modo consola (sin interfaz gráfica).


📂 ¿Cómo Ejecutar un Vagrantfile?

1. Descargar y Navegar al Vagrantfile
📥 Descargar el archivo.
📁 Navegar a la carpeta donde lo descargaste.

2. Abrir PowerShell
🔍 Toca el Vagrantfile y en la barra de rutas de arriba, escribí powershell para abrir la consola en esa ubicación.

3. Ejecutar el Comando
⌨️ En la consola, tipea el comando vagrant up y presiona Enter para empezar.


⏳ Proceso de Levantamiento
- 💻 Una vez que el proceso comience, espera a que termine.
- 🔍 Durante el proceso, si abrís VirtualBox, vemos que aparece la máquina virtual que la consola de Vagrant está creando.
- 🔐 Iniciar Sesión
- 💬 Cuando la máquina se ejecute, te pedirá login (esto puede ser confuso al principio).
- 🔑 Tipea vagrant como nombre de usuario para iniciar sesión.