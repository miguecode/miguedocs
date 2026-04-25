---
title: "Métodos de Numbers y objeto Math"
description: "Métodos de los numbers en JavaScript"
---


## Métodos de los numbers en JavaScript

- toString() → Devuelve el número como string.

- toFixed(cantDecimales) → Devuelve un string con el número redondeado a la cantidad de decimales indicados.
```text
(3.14159).toFixed(2); // "3.14"
```
- toExponential(cantDecimales) → Devuelve un string con el número en notación científica, con la cantidad de decimales deseados.
```text
(123456).toExponential(2); // "1.23e+5"
```
- toPrecision(significativas) → Devuelve un string con el número con el número total de cifras significativas (no solo decimales).
```text
(3.14159).toPrecision(3); // "3.14"
```
- Number.parseInt(string, base) → Convierte un string en número entero (con base opcional).
```text
Number.parseInt("42"); 	      // 42
Number.parseInt("1010", 2);  // 10
```
- Number.parseFloat(string) → Convierte un string en número con decimales.
```text
Number.parseFloat("3.14");   // 3.14
```
- Number.isNaN(valor) → Verifica si el valor es NaN y que sea realmente de tipo number.

- Number.isInteger(valor) → Devuelve true si el valor es un número entero.

- Number.isFinite(valor) → Devuelve true si el valor es un número finito.

- **Aclaración**: parseInt() y parseFloat() también existen como funciones globales (window.parseInt), pero se recomienda usar Number. para dejar más claro de dónde vienen.


## Math

- Math es un objeto estático de JavaScript el cual contiene utilidades matemáticas. Se usa sin instanciar, y no modifica nada. Lo único que hace es devolver valores nuevos. Veamos las más comunes:

- Math.random() → Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).

- Math.round(x) → Redondea al entero más cercano.
```text
Math.round(4.5); // 5
Math.round(4.4); // 4
```
- Math.floor(x) → Redondea hacia abajo (al entero menor).
```text
Math.floor(4.9); // 4
```
- Math.ceil(x) → Redondea hacia arriba (al entero mayor).
```text
Math.ceil(4.1); // 5
```
- Math.trunc(x) → Elimina los decimales (sin redondear).
```text
Math.trunc(4.9); // 4
```
- Math.abs(x) → Devuelve el valor absoluto.
```text
Math.abs(-7); // 7
```
- Math.max(a, b, ..., n) → Devuelve el mayor valor.
```text
Math.max(4, 10, 8); // 10
```
- Math.min(a, b, ..., n) → Devuelve el menor valor.
```text
Math.min(4, 10, 8); // 4
```
- Math.pow(base, exponente) → Eleva un número a una potencia.
```text
Math.pow(2, 3); // 8
```
- Math.sqrt(x) → Raíz cuadrada.
```text
Math.sqrt(25); // 5
```
- Math.cbrt(x) → Raíz cúbica.
```text
Math.cbrt(8); // 2
```
### Constantes útiles

- Math.PI → π (3.14159…)

- Math.E → Número de Euler

- Math.LN2 → logaritmo natural de 2

- Math.SQRT2 → raíz cuadrada de 2