---
title: "Unidades de medida (px, vw, vh, em, rem, y otras)"
description: "Unidades relativas y absolutas"
---


## Unidades relativas y absolutas

- La diferencia entre una unidad ABSOLUTA y una RELATIVA, es que a la unidad absoluta "no le importa nada", entonces, dependiendo el valor que tenga, siempre va a tener el mismo tamaño. Y las unidades relativas, van a depender de otro elemento o contenedor. Si su elemento dependiente es más o menos grande, eso va a influir en la medida.

- **Unidades absolutas**: px, cm, mm, in, pt, y pc.
- **Unidades relativas**: vh, vw, em, rem y porcentajes %.

### Píxeles (px)

- La unidad absoluta más utilizada son los PÍXELES (px). Ojo: los píxeles no son unidades 100% absolutas. Antiguamente, sí lo eran. Porque antes, un pixel en CSS era un pixel en la pantalla. Pero ahora, no siempre es así. Porque ahora hay muchas resoluciones distintas. Entonces, una pantalla 4K va a tener más píxeles. Aún así, se la considera una unidad absoluta. Pero hay que entender que no es del todo así.


### Viewport (vh y vw)

- El Viewport es una medida relativa la cual hace referencia a lo que estamos viendo. Es decir, depende del tamaño real de la pantalla que podemos visualizar. Si achicamos o agrandamos nuestra pantalla (como por ejemplo, al rotar un celular), va a cambiar el valor de nuestro Viewport. Las unidades de medida para el viewport son dos: vh (viewport height) (toda la altura del viewport) o vw (viewport width) (toda la anchura del viewport).

- Así como existen vh y vw, también están "vmin" y "vmax". 

vmin → Elige el menor valor entre vw y vh.
vmax → Elige el mayor valor entre vw y vh.

- El "vh" en los dispositivos móviles puede llegar a ser problemático, porque algunas barras del navegador (como la URL u otras opciones) pueden afectar a su altura

- **Si nosotros ponemos un container cuyo height sea**: height: 100vh, esto tiene sentido. Ya que le estamos indicando que el contenedor (un div) debe ocupar el 100% de la pantalla todo el tiempo, de arriba hacia abajo. PERO esto puede generarnos scroll, cosa que no tendría sentido... y, ¿Por qué? Esto es por el famoso margin: 8px que viene por defecto en el body. Los navegadores, como dijimos, tienen sus propios estilos por defecto. Y ese pequeño margin se lo pone siempre al body. Por eso, nosotros lo que tendríamos que hacer, es sobreescribírselo a 0px, para que no moleste.


### Porcentajes (%)

- Los porcentajes son una unidad RELATIVA del contenedor padre. Es decir, si el ancho del padre son 100px, el 50% del hijo serían 50px de ancho. 


### EM y REM

- **Primero, veamos cómo funciona la medida "em"**: Se trata de una medida RELATIVA al tamaño del font-size del elemento padre más cercano que encuentre. Se cree que "em" proviene de la palabra "elemento", pero no es oficial.

- Nosotros sabemos que los navegadores, por defecto, usan 16px para el font-size. Pero esto no significa necesariamente que 1em = 16px. A 1em le corresponde el valor del font-size de algún contenedor o algún elemento padre que tenga. El más cercano. Si no tiene ninguno, va a ser el body o el html. Entonces:

.contenedor {
```text
font-size: 20px;
```
}

.contenedor h1 {
```text
font-size: 1em;
```
}

- De esta forma, 1em equivale a 20px. Esto es porque lo que le estamos diciendo es "queremos que nuestro h1 tenga un font-size de 1em", y ese 1em, va a tomar el valor del font-size del elemento padre más cercano que encuentre. En este caso, su contenedor padre. Así que, en este caso, 1em = 20px. Y si pusiéramos 2em, sería el doble (40px). 3em el triple, y así.

- ¿Entonces, qué hace REM? La medida rem significa "root em", y es RELATIVA al tamaño del font-size del elemento BODY. Es decir que, a diferencia de em, rem no le presta atención al contenedor o elemento padre, sino que le presta atención específicamente al BODY. Entonces:

body {
```text
font-size: 16px;  // Este es el valor por defecto que aplican los navegadores
```
}

.contenedor {
```text
font-size: 24px;
```
}

.contenedor h1 {
```text
font-size: 1rem;
```
}

- En este caso, el font-size del h1 va a ser 16px. Ya que, en este caso, 1rem = 16px. Porque 16px es el font-size del body. Si el h1 en vez de tener "1rem", tuviese "1em", el valor sería 24px. Porque tomaría el valor del contenedor. 

- Y lógicamente, esto no significa que siempre 1rem = 16px. Porque nosotros podemos cambiar el font-size del body a nuestro gusto. Y el rem se basaría en ese valor.

- REM es muy útil para crear diseños escalables, ya que mantiene la consistencia incluso si el usuario cambia el tamaño de fuente de su navegador o de su dispositivo.

- Una forma de calcular cuántos em o rem serían tantos píxeles, es hacer la división por la cantidad de font-size del contenedor padre o body. Es decir: si yo tengo un max-width de 800px y lo quiero pasar a "em", tengo que hacer 800 / [valor del font-size del contenedor padre]. Y el resultado, va a ser la cantidad de "em" que debería colocar para igualar los 800px. Pero si lo quiero pasar a rem, tengo que hacer 800 / [valor del font-size del body].

- En VSC hay una extensión llamada "px to rem". Sirve para hacer el pase de px a rem automáticamente usando ALT + Z. 


### Las nuevas medidas svh, lvh y dvh

- Estas tres unidades son variaciones modernas de vh (viewport height), y surgieron para mejorar el comportamiento en diferentes contextos, especialmente en dispositivos móviles.

- El problema que tiene vh es con los dispositivos móviles. No es algo grave, pero como dijimos antes, siempre pasa eso de que la barra de búsqueda del navegador ocupa espacio, y eso puede tapar elementos de la página. Para eso se crearon svh lvh y dvh.

- Comparación rápida

Unidad	Significado	Cuándo usarla
vh	Altura del viewport (pero no siempre precisa en móviles)	Diseño general en desktop
| svh | Altura mínima posible del viewport | Evitar que la UI se agrande en móviles |
| --- | --- | --- |
| lvh | Altura máxima posible del viewport | Aprovechar toda la pantalla cuando la barra se oculta |
| dvh | Altura dinámica del viewport | Mantener el diseño adaptado en tiempo real |


## Reset CSS y Normalize CSS

- Reset CSS y Normalize CSS fueron dos conceptos que buscaban facilitar la creación de estilos, sin que los estilos por defecto del navegador molesten. Primero apareció el Reset, que lo que hacía era cargarse a la mayoría de estilos del navegador. Si bien en ese momento tenía sentido, con el tiempo dejó de ser buena práctica, ya que se cargaba estilos que podían ser útiles. Así que después apareció Normalize, que es como Reset pero un poco más coherente con qué estilos debe resetear y cuáles no. Tiene sentido usarlo, pero la verdad es que hoy en día la mayoría de frameworks como Tailwind CSS ya tienen incorporado algo similar. Por ejemplo, Tailwind usa preflight.css, que es como Normalize.

- Hay otros enfoques más modernos, como el CSS Modern Reset. Es más flexible y liviano.