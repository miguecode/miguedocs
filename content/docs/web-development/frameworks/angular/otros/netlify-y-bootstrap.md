---
title: "Netlify y Bootstrap"
description: "Hostear en Netlify"
---


### Hostear en Netlify

Si bien existe una mejor forma de hacerlo, es decir, vinculando el proyecto a un repositorio de GitHub, ahora vamos a ver otra forma de hacerlo mucho más BURDA, es decir, no la ideal.

Primero, vamos a BUILDEAR el proyecto. ¿Por qué? Porque nosotros no vamos a subir literalmente todas las carpetas de la app Angular, tenemos que pseudocompilarlo para que este código pase a "comprimirse". Para hacerlo, vamos a poner este comando en la terminal:

ng build

Una vez que termine de hacerse el build, vamos a ver que nos crea una carpeta llamada "dist". Dentro de esa carpeta, va a aparecer una carpeta "browser". Esa carpeta "browser" es la que tenemos que ARRASTRAR al Netlify. De esa forma se inicia el deploy y vamos a tener la web subida.

Esta es la forma menos óptima de hacerlo. Si hacemos cambios en algun archivo, habría que hacer build otra vez. Obviamente lo lógico es hacerlo con GIT como ya lo sé hacer (la misma Netlify te indica cómo hacerlo, es sencillo).


## Aclaración importante
Cuando vamos a subir una app de Angular a Github, tiene que ser una app por cada repositorio. Es decir, en un repositorio no deberíamos subir una carpeta con todos nuestros proyectos Angular, eso provocaría que se suban más de una vez los mismos archivos innecesariamente.



## Bootstrap
Para aplicar Bootstrap a nuestros proyectos hay 3 maneras. La primera es copiar el link del cdn y pegarlo en nuestro index.html. Otra forma es usar el comando ' npm install bootstrap@5.3.3 '. De esta forma, lo instalamos localmente.

La tercer forma es poner el comando:

ng add @ng ... -habría que buscar el comando-

La diferencia es que este está pensado para Angular. Eso serviría para importarlo con módulos para no traerme todo el Bootstrap entero, es decir, yo voy a elegir qué módulo de Bootstrap quiero usar, y lo importo. Serviría para que rinda más. Ojo: si bien sería lo más performante, no se pide hacer esto.


## Templates
Ahora vamos a la página de Bootstrap, y vamos a ir a la sección 'examples'. Vamos a descargarlos todos. Nos va a descargar una carpeta de ejemplos. Son todos templates. El que se recomienda usar es el que se llama Jumbotron

Bien. Vamos a ver que Jumbotron tiene un archivo HTML llamado index. Lo abrimos con VSC y nos vamos a copiar SÓLO lo que esta dentro del body. Pero literalmente, es decir, la etiqueta de apertura y cierre de body tampoco debe estar. Sólo va el contenido del mismo. Esto es así porque nosotros ya tenemos nuestro propio body en nuestro HTML.