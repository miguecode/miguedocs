---
title: "Diferencia entre comillas dobles y simples"
description: "En JavaScript y TypeScript podemos usar comillas dobles, simples y backticks ."
---


## Diferencia entre comillas dobles " " y simples ' '

En JavaScript y TypeScript podemos usar comillas dobles " ", simples ' ' y backticks `  ` .

Los backticks se usan para los template strings (`  Hola, esta es mi ${variable} ` ). 

La realidad es que no hay diferencia alguna entre las comillas dobles y las simples. Elegir uno u otro va a ser una cuestión de estilos. Lo que importa es no mezclar. Si vamos a usar siempre dobles, tienen que ser siempre dobles. Y si vamos a usar siempre simples, que sean siempre simples.

Eso sí, hay veces donde capaz tengamos que cambiar, ya que si queremos un string que tenga dentro comillas dobles, entonces el string va a tener que estar entre comillas simples. Y al revés igual: si queremos que un string tenga dentro comillas simples, entonces el string va a tener que estar entre comillas dobles.

**Eso sí**: en HTML y en CSS, la preferencia es usar comillas dobles, por más que las simples funcionan igual. Entonces, basado en esto, uno puede concluir en que, quizá sea más práctico usar comillas dobles en JS y TS también, como para mantener siempre un mismo estilo. Pero bueno, eso va a depender del equipo de trabajo o del gusto del programador. 

### En resumen 

Lenguaje	|	' ' vs " "			|			``  (backticks) |
| --- | --- | --- |
| JS / TS | Son lo mismo. Se elige por estilo. | Usar cuando necesitamos variables o multilínea |
| HTML | Preferentemente, comillas dobles | No existen los backticks |
| CSS | Preferentemente, comillas dobles | No existen los backticks |