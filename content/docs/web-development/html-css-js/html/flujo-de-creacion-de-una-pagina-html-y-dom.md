---
title: "Flujo de creación de una página. HTML y DOM"
description: "Flujo de creación de una página"
---


## Flujo de creación de una página

- Como sabemos, nosotros vamos a escribir código HTML para crear una página. Después, ese código HTML va a ser interpretado línea por línea por un navegador, como Google Chrome o Mozilla Firefox.

- Una vez que es interpretado, lo que podríamos pensar es que en ese momento se crea -de forma visual- los distintos elementos del sitio, para que los veamos en nuestra pantalla. Esto no es incorrecto, pero en realidad, hay más pasos internos previos, y vamos a verlos paso a paso:

0. El navegador interpreta línea por línea el código HTML.
1. El navegador, a medida que va interpretando línea por línea al código HTML, va construyendo al DOM en segundo plano.
2. El navegador, a medida que va interpretando línea por línea al código HTML, procesa el código CSS que encuentre y va construyendo al CSSOM en segundo plano (Al mismo tiempo que el DOM).
3. A medida que se van creando el DOM y el CSSOM, el navegador los combina a ambos (o lo que tenga en ese momento de ambos), y de esa combinación se genera el Render Tree, que es lo que se usa para dibujar la página.
4. En base al Render Tree, el navegador construye el layout, es decir, calcula las posiciones y tamaños de los elementos.
5. Finalmente, el navegador empieza a pintar la página para que la veamos.

- Los pasos 3, 4 y 5 podrían resumirse en un solo paso, porque ya una vez construidos el DOM y el CSSOM, lo único que sigue es el proceso de empezar a dibujar los elementos analizados. 

- Como la creación del DOM y del CSSOM son en segundo plano, el navegador no espera a que estén completamente construidos para empezar a mostrar contenido. Esto es así porque, a medida que va interpretando código HTML y código CSS, ya empieza a mostrarlo en pantalla, aunque todavía no lo haya interpretado todo. 


- Ahora, vamos a ver qué es el DOM, lo que se construye en segundo plano mientras se interpreta el código HTML:


## El DOM (Document Object Model)

- El DOM es una estructura de árbol basado en nodos, los cuales, van a representar a cada etiqueta de nuestro código HTML. Ojo: El DOM no es lo mismo que el código HTML, sino que es una representación de él, estructurado en memoria.

- En cualquier esquema de árbol hay NODOS. Un nodo no es ni más ni menos que los elementos de la estructura. El padre es un nodo, sus hijos son nodos, el padre del padre un nodo, todo son nodos.

```typescript
	 [Nodo]
	      |
     ______|_______      [Estructura de árbol]
    |			|
[Nodo]	   [Nodo]
```
- En el caso del DOM, entonces, cada uno de estos NODOS van a representar a cada una de las ETIQUETAS del código HTML.

- Después, con JavaScript, nosotros podemos interactuar con el DOM como nosotros queramos, con el fin de hacer que nuestra página sea interactiva, en vez de estática.

- **Por si no quedo claro, repito**: El navegador va a interpretar línea a línea el código HTML. Y en segundo plano, lo que va a hacer es crear el DOM. Y para crearlo, va a tomar e interpretar a cada ETIQUETA HTML que encuentre. Con todas sus propiedades. Y cada una de esas etiquetas con sus propiedades, van a ser representadas por un NODO en la estructura de árbol. Cuando digo "estructura de árbol" me refiero a la jerarquía de "padre > hijo", vista con forma de árbol.

- Y mientras se crea el DOM, también se crea su versión CSS, es decir, el CSSOM:


## El CSSOM (CSS Object Model)

- El CSSOM no es ni más ni menos que una estructura similar al DOM, pero basada en CSS. A medida que se va generando a la par del DOM, estos dos modelos se combinan para formar lo que es el Render Tree, que es lo que realmente se usa para dibujar la página en la pantalla.


## "El otro DOM", o Árbol de Accesibilidad

- Algo que también hay que saber es que, cuando se crea el DOM, en segundo plano, también se va a crear el llamado Árbol de Accesibilidad. Ese segundo DOM que se crea, está basado en el primero, pero eliminando nodos irrelevantes y enriqueciendo la información para tecnologías de asistencia.

- Y eso porque, una persona con alguna discapacidad, o cierta limitación, es muy probable que tenga activada en su dispositivo una función de Accesibilidad. Como por ejemplo, un lector de voz, el cual describa cada elemento de la página en forma de audio, para las personas que no pueden ver bien. Entonces, para estos usuarios, el flujo de creación de la página va a ser algo distinto. Ya que no sólo se crea el DOM original, sino que lo que va a pasar es que se crea el Árbol de Accesibilidad, el cual va a pasar por tecnologías accesibles. Y recién ahí, se visualiza la página.

- **Ojo**: El Árbol de Accesibilidad se crea SIEMPRE, por más que nosotros no tengamos activadas las funciones de accesibilidad, al entrar a una página se va a generar el Árbol de Accesibilidad.


## Los flujos quedarían así:

### Para personas sin discapacidad

[CÓDIGO HTML] -> [NAVEGADOR] -> [DOM] -> [CSSOM] -> [RENDER TREE] -> [VISUALIZACIÓN]

- Se crea el código HTML, pasa a ser interpretado por el navegador, en segundo plano crea el DOM y el CSSOM, estos dos últimos se combinan para generar el Render Tree, y después se empieza a dibujar la página.


### Para personas con discapacidades

[CÓDIGO HTML] -> [NAVEGADOR]  -> [DOM] -> [CSSOM]--> [ÁRBOL DE ACCESIBILIDAD]--> [TECNOLOGÍAS ASISTIVAS] -> [VISUALIZACIÓN O UX]


- Se crea el código HTML, pasa a ser interpretado por el navegador, en segundo plano crea al DOM y al Árbol de Accesibilidad, y después se crea la experiencia de usuario.