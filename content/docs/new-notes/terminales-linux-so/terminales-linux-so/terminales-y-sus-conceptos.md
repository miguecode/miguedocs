---
title: "Terminales y sus conceptos"
description: "📚 Este apunte explica qué son y cómo se relacionan los siguientes conceptos."
---


## Introducción

📚 Este apunte explica qué son y cómo se relacionan los siguientes conceptos.

- Terminal de Windows
- Diferencias entre "Terminal", "Shell" y "CLI"
- PowerShell
- Linux
- Ubuntu (bash y zsh)

📚 Este apunte es útil leerlo de arriba hacia abajo, para seguir el hilo de la explicación.

📚 Para entender más sobre Linux, Unix, GNU y relacionados, es mejor el apunte llamado "Linux y su explicación". El cual está en esta misma carpeta.


## Terminal de Windows

Terminal de Windows es una aplicación de Windows que se instala fácilmente en la Microsoft Store. Es una interfaz de terminal personalizable y moderna, que soporta múltiples pestañas y la posibilidad de usar distintos perfiles como PowerShell, CMD o WSL.

## Diferencias entre "Terminal", "Shell" y "CLI"

- **Terminal**: Es el programa o aplicación que nos permite interactuar con una shell. La terminal actúa como una interfaz gráfica o de texto que muestra la salida y nos permite escribir comandos.
Ejemplos de terminales: Terminal de Windows (la primera que nombramos en este apunte), GNOME Terminal para Linux, iTerm2 en macOS, o Warp, que es una terminal moderna que utiliza IA.

- **Shell**: Es el intérprete de comandos que traduce lo que escribimos en instrucciones que el sistema operativo puede ejecutar. Las shells más comunes son Bash, Zsh y PowerShell. Una shell es el "cerebro" detrás de la terminal la cual procesa los comandos. Su traducción literal es "cáscara".

- **CLI (Command-Line Interface)**: Es el concepto general de interactuar con el sistema operativo mediante una línea de comandos, en lugar de una interfaz gráfica. La terminal y la shell juntas, conforman lo que es la CLI.


## PowerShell

PowerShell es una shell potente, que está diseñada principalmente para la administración de sistemas Windows, y también permite automatizar tareas y crear scripts complejos. Si bien es útil para esto último, los desarrolladores web suelen preferir shells de Linux, como Bash.

## Linux

Linux es un núcleo/kernel, de código abierto que forma parte de la familia de sistemas operativos GNU/Linux. Le da vida a muchas distribuciones (distros), como por ejemplo, Ubuntu. Es muy popular en el desarrollo web debido a su flexibilidad, seguridad y herramientas modernas. Sus shells más comunes son Bash y Zsh.

## Ubuntu

Ubuntu es una de las distribuciones de Linux más populares. Su shell por defecto es Bash, aunque muchos desarrolladores optan por Zsh para una experiencia más personalizada.

## WSL

- WSL (Windows Subsystem for Linux) permite correr un entorno Linux completo dentro de Windows, especialmente para usar su terminal y herramientas como si estuvieramos, por ejemplo, en Ubuntu.

- Su objetivo principal es ese, permitirnos a los desarolladores usar herramientas y scripts Linux sin necesidad de instalar una máquina virtual o cambiarnos de sistema operativo.

- Su uso común es correr la terminal, instalar software Linux (como Node.js, Python, Git, Docker), manejar archivos y scripts, probar servidores locales, etc.

- Es bastante liviano ya que no es una máquina virtual completa. No corre todo el sistema operativo GNU/Linux, sino que sólo utiliza el núcleo/kernel Linux y aplicaciones. Esto hace que use menos recursos que una VM tradicional. Solo consume recursos cuando lo usamos.


## ¿Cómo funciona WSL?

- **Capa de traducción**: WSL crea una capa que permite que las llamadas al sistema de Linux se traduzcan para Windows. Esto hace que comandos y programas de Linux se ejecuten correctamente.

- **Kernel Linux real**: A partir de WSL 2, ahora tenemos un kernel Linux completo, aunque sigue ejecutándose dentro de Windows. Esto es lo que permite usar herramientas como si estuviéramos en Ubuntu.

- Antes, esto era impensable, ya que Windows y Linux son sistemas muy diferentes. Pero Microsoft ha cambiado su enfoque, abrazando más al open source y facilitando el desarrollo cruzado. Esto responde a una necesidad del mercado: muchos desarrolladores trabajan en Windows pero necesitan Linux para ciertos proyectos. Y ahora, en lugar de usar máquinas virtuales pesadas o cambiar de sistema operativo, se puede tener lo mejor de ambos mundos. Si uno trabaja en Windows, con WSL puede tener las ventajas de la terminal de Linux y sus herramientas.


## Volvamos a Ubuntu

Por defecto, Ubuntu usa bash (Bourne Again Shell), pero podríamos cambiarlo a zsh.

- **Bash**: Es el Shell más común en sistemas Linux y macOS. Se usa para ejecutar comandos, scripts y programas.

- **Zsh**: es una versión mejorada de bash, con más funcionalidades por defecto como: Autocompletado más inteligente y sugerencias de comandos. Además de temas y personalización (por ejemplo, usando oh-my-zsh).

Básicamente, bash sirve para más simplicidad. Pero si se quiere más personalización y herramientas "out-of-the-box", es mejor zsh.


## Extra: la terminal Warp

Es una terminal moderna que implementa IA para mejorar la experiencia del usuario. Todavía no tiene cobertura para Windows pero próximamente tendrá.