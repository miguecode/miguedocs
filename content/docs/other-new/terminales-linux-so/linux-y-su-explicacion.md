---
title: "Linux y su explicación"
description: "Linux es un núcleo (kernel), el corazón de un sistema operativo que gestiona el hardware y permite que el software funcione. Es la base sobre la que se construyen sistemas operativos completos como GNU/Linux, Android y ChromeOS."
---


## Introducción

📚 Este apunte explica qué son y cómo se relacionan los siguientes conceptos.

- Linux
- GNU/Linux
- Distribuciones de GNU/Linux como Ubuntu, Debian o Fedora
- Unix
- macOS
- Android
- iOS

📚 Es útil leerlo de arriba hacia abajo, para seguir el hilo de la explicación.


## Linux

Linux es un núcleo/kernel. Y un núcleo o kernel, es la parte central de un sistema que se comunica directamente con el hardware y gestiona recursos como la memoria, el CPU y los dispositivos. Es decir, es el corazón de un sistema operativo, y actúa como interfaz entre el hardware y el software. Eso es el núcleo/kernel. Y eso mismo es Linux: un núcleo/kernel.

(Vale aclarar que, kernel y núcleo significan exactamente lo mismo. Kernel es en inglés y núcleo en español. Pero en el ámbito de la programación, es más común decirle simplemente "kernel" para simplificar).

```text
Hardware  `<--->` Núcleo/Kernel  `<--->`  Software
```

Esto quiere decir, entonces, que Linux NO es un sistema operativo por sí mismo. Ya que necesita otras herramientas para ser útil: como gestores de archivos, entornos gráficos, etc.

Para hacer una analogía, pensemos en el motor de un auto: Es esencial, es la parte principal. Pero en sí, el motor no es un auto completo. Linux sería el "motor" del auto. Es decir, el "motor" o la parte "esencial" del sistema operativo.


## GNU/Linux

- GNU/Linux es el término correcto para referirse a un sistema operativo, el cual combina el núcleo/kernel Linux con las herramientas del proyecto GNU (como el shell Bash, compiladores y librerías).

- **Para seguir la analogía**: Si Linux es el motor, GNU/Linux es el auto completo que incluye el motor, la carrocería, y todo lo necesario para funcionar.

- Si bien es correcto decir "GNU/Linux es un sistema operativo", técnicamente suena mejor: "GNU/Linux es una familia de sistemas operativos".

- Cuando alguien dice "Yo uso Linux", en realidad debería decir: "Yo uso una distribución de GNU/Linux".

- **Entonces, GNU/Linux se conforma por**: El Proyecto GNU, el núcleo/kernel Linux, y otros proyectos de software. Y de este sistema operativo llamado GNU/Linux, nacen las distribuciones que serán utilizadas por los usuarios: Ubuntu, Debian, Fedora, Arch Linux...

- **OJO con ese último item**: Una persona PUEDE decir "Yo uso GNU/Linux". Sí, es totalmente correcto. Pero para ser más específico, podría decir: "Yo uso Ubuntu, la cual es una distro de GNU/Linux". ¿Y esto por qué? Porque usar GNU/Linux implica automáticamente que estás usando una distro de GNU/Linux.

#### Aclaraciones

- **GNU/Linux se puede pronunciar como**: "Ñu Linux" o más simplemente "Ge Ene U Linux".
- **GNU son las siglas de**: "GNU, Not Unix", que en español sería: "GNU no es Unix".
- El logo del Proyecto GNU es un ñu (un ñu es un animal parecido a un toro).
- El logo de Linux es un pingüino.


## Distribuciones de GNU/Linux

- Las distribuciones (o también llamadas distros) son Sistemas Operativos completos, los cuales están basados en el núcleo/kernel Linux y en las herramientas de GNU, más otros programas y configuraciones específicas. Es decir, son sistemas operativos que nacen de la familia de sistemas operativos GNU/Linux.

- **Ejemplos de estas distribuciones son**: Ubuntu, Debian, Fedora y Arch Linux.

- **Siguiendo con la analogía de los autos**: Si GNU/Linux es un auto genérico, las distribuciones son distintas marcas y modelos de ese auto, cada una con características y accesorios únicos (Ubuntu podría ser un auto cómodo y fácil de manejar, mientas que Arch es más técnico y personalizable).


## Unix

- Unix es el ancestro de Linux. Pero Unix no es sólo un núcleo, es un sistema operativo completo de los años 70. Inspiró a Linux, pero son sistemas distintos.

- Linux es similar a Unix (por eso se le suele llamar "Unix-like"), pero no es una copia exacta.


## macOS

- macOS es un sistema operativo completo desarrollado por Apple. Pertenece a la familia Unix ya que está basado en Darwin, que a su vez es una variante de Unix certificada.

- Su núcleo/kernel es XNU (que sus siglas significan X is Not Unix). Combina elementos de Mach y BSD (la cual es una versión de Unix).

- Está excluido del ecosistema GNU, pero tiene muchas herramientas de código abierto.

- Está optimizado para hardware de Apple (MacBooks, iMacs).


## Android

- Android es un sistema operativo completo para dispositivos móviles, desarrollado por Google. Pertenece a la familia de sistemas basados en Linux, pero NO es GNU/Linux, ya que no usa las herramientas de GNU.

- Su núcleo/kernel Linux, modificado para trabajar en dispositivos móviles.

- Aunque usa Linux como kernel, tiene su propia capa de software (Dalvik/ART) y API que lo diferencian de las distros tradicionales.

- Es el SO más usando en smartphones.


## iOS

- iOS es un sistema operativo completo desarrollado por Apple para dispositivos móviles (iPhones, iPads). Al igual que macOS, iOS se basa en Darwin, y por lo tanto también petenece a la familia Unix.

- Su núcleo/kernel es XNU (el mismo que macOS) adaptado a dispositivos móviles.

- iOS es un sistema altamente optimizado para hardware móvil de Apple.

- Comparte muchos componentes con macOS, pero con una interfaz y funcionalidad diferente.