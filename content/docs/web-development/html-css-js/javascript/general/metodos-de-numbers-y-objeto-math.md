---
title: "Métodos de Numbers y objeto Math"
description: "Descubre los métodos de los números y las utilidades del objeto Math en JavaScript."
---

## Métodos de los numbers en JavaScript

Los números en JavaScript tienen varios métodos integrados para facilitar su manipulación:

*   **`toString()`**: Devuelve el número como un string.
*   **`toFixed(cantDecimales)`**: Devuelve un string con el número redondeado a la cantidad de decimales indicados.
    ```javascript
    (3.14159).toFixed(2); // "3.14"
    ```
*   **`toExponential(cantDecimales)`**: Devuelve un string con el número en notación científica.
    ```javascript
    (123456).toExponential(2); // "1.23e+5"
    ```
*   **`toPrecision(significativas)`**: Devuelve un string con el número total de cifras significativas (no solo decimales).
    ```javascript
    (3.14159).toPrecision(3); // "3.14"
    ```
*   **`Number.parseInt(string, base)`**: Convierte un string en número entero (con base opcional).
    ```javascript
    Number.parseInt("42"); 	      // 42
    Number.parseInt("1010", 2);  // 10
    ```
*   **`Number.parseFloat(string)`**: Convierte un string en número con decimales.
    ```javascript
    Number.parseFloat("3.14");   // 3.14
    ```
*   **`Number.isNaN(valor)`**: Verifica si el valor es `NaN` y que sea realmente de tipo number.
*   **`Number.isInteger(valor)`**: Devuelve `true` si el valor es un número entero.
*   **`Number.isFinite(valor)`**: Devuelve `true` si el valor es un número finito.

> [!NOTE]
> `parseInt()` y `parseFloat()` también existen como funciones globales (`window.parseInt`), pero se recomienda usar el prefijo `Number.` para dejar más claro de dónde provienen y evitar confusiones.

## El objeto Math

`Math` es un objeto estático de JavaScript que contiene utilidades matemáticas comunes. Se usa sin instanciar (no necesitas hacer `new Math()`) y no cambia los valores originales, sino que devuelve resultados nuevos.

### Métodos comunes de Math

*   **`Math.random()`**: Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
*   **`Math.round(x)`**: Redondea al entero más cercano.
    ```javascript
    Math.round(4.5); // 5
    Math.round(4.4); // 4
    ```
*   **`Math.floor(x)`**: Redondea hacia abajo (al entero menor).
    ```javascript
    Math.floor(4.9); // 4
    ```
*   **`Math.ceil(x)`**: Redondea hacia arriba (al entero mayor).
    ```javascript
    Math.ceil(4.1); // 5
    ```
*   **`Math.trunc(x)`**: Elimina los decimales sin redondear.
    ```javascript
    Math.trunc(4.9); // 4
    ```
*   **`Math.abs(x)`**: Devuelve el valor absoluto de un número.
    ```javascript
    Math.abs(-7); // 7
    ```
*   **`Math.max(a, b, ..., n)`**: Devuelve el valor más alto entre los parámetros.
    ```javascript
    Math.max(4, 10, 8); // 10
    ```
*   **`Math.min(a, b, ..., n)`**: Devuelve el valor más bajo entre los parámetros.
    ```javascript
    Math.min(4, 10, 8); // 4
    ```
*   **`Math.pow(base, exponente)`**: Eleva un número a una potencia.
    ```javascript
    Math.pow(2, 3); // 8
    ```
*   **`Math.sqrt(x)`**: Devuelve la raíz cuadrada de un número.
    ```javascript
    Math.sqrt(25); // 5
    ```
*   **`Math.cbrt(x)`**: Devuelve la raíz cúbica.
    ```javascript
    Math.cbrt(8); // 2
    ```

### Constantes útiles

*   **`Math.PI`**: El valor de π (3.14159…).
*   **`Math.E`**: El número de Euler.
*   **`Math.LN2`**: Logaritmo natural de 2.
*   **`Math.SQRT2`**: Raíz cuadrada de 2.