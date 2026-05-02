---
title: "Lenguajes Interpretados, No Interpretados y Compilados"
description: "Un lenguaje interpretado es aquel en el que el código fuente es ejecutado línea por línea directamente por un intérprete en tiempo de ejecución..."
---


## Lenguaje Interpretado

Un lenguaje interpretado es aquel en el que el código fuente es ejecutado línea por línea directamente por un intérprete en tiempo de ejecución, sin necesidad de ser compilado previamente a un código de máquina.

**Ejemplos**: JavaScript, Python, Ruby, PHP, Perl, Bash, Lua

#### Ventajas 

- **Portabilidad**: Se puede ejecutar el mismo código en diferentes plataformas siempre que tengan un intérprete.
- **Flexibilidad**: Facilita la depuración y los cambios rápidos, ya que no necesitas recompilar.

#### Desventajas

- **Velocidad**: Generalmente, es más lento que los lenguajes compilados debido a la sobrecarga de la interpretación en tiempo de ejecución. O sea, necesita ejecutarse línea por línea.

### Lenguaje Compilado

Un lenguaje compilado es aquel que su código necesita ser transformado a código de máquina por un compilador antes de ser ejecutado.

El compilador traduce todo el código fuente a un archivo ejecutable antes de la ejecución.

**Ejemplos**: C, C++, Rust, Go, Swift, Fortran, Pascal

#### Ventajas

- **Velocidad**: El código compilado suele ejecutarse más rápido porque ya está en lenguaje máquina (formato binario), listo para ser ejecutado por el procesador. 

- **Sencillez**: No dependen de un intérprete en tiempo de ejecución.

- **Optimización**: Los compiladores pueden optimizar el código para mejorar el rendimiento.

#### Desventajas

- **Menos flexibilidad**: Cambios en el código requieren recompilación, lo que puede ser más lento durante el desarrollo.


### Lenguaje Híbrido o Semi-Compilado (o Bytecode)

**Algunos lenguajes combinan ambos enfoques**: primero se compilan a un código intermedio (bytecode) y después son interpretados o ejecutados por una máquina virtual (VM).

**Ejemplos**: Java (compilado a bytecode que corre en la JVM),  C# (compilado a bytecode que corre en el .NET CLR, Kotlin, Scala, Dart).

#### Ventajas

- **Portabilidad**: Como el bytecode es independiente de la plataforma, se puede ejecutar el mismo código en cualquier lugar que tenga una VM compatible.

- **Rendimiento**: Con la compilación JIT, el rendimiento puede ser cercano al de lenguajes compilados.


## ¿Y TypeScript?

TypeScript es un lenguaje de programación que no es interpretado ni compilado en el sentido tradicional. Sino, que es un lenguaje transpilado.

Esto es así ya que un transpiler (como el compilador de TypeScript: tsc), se va a encargar de transpilar (convertir) el código TS a código JavaScript puro.
Y como se transforma a código JS, después ese código tiene que ser interpretado y ejecutado por un motor de JS (V8, SpiderMonkey, etc.).
En resumen, a TS se lo podría clasificar como un lenguaje transpilado a un lenguaje interpretado (JS).


## Resumen

- **Interpretados**: Ejecutan el código directamente (ej., JavaScript, Python).

- **Compilados**: Transforman el código a ejecutables antes de la ejecución (ej., C, C++).

- **Híbridos/Semi-Compilados**: Compilan a bytecode intermedio, ejecutado por una máquina virtual (ej., Java, C#).