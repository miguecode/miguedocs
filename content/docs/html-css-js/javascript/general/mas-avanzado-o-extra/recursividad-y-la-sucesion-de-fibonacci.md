---
title: "Recursividad y la Sucesión de Fibonacci"
description: "El concepto de recursividad en JavaScript y cómo aplicarlo para resolver la Sucesión de Fibonacci mediante funciones que se llaman a sí mismas."
---


## La Recursividad

La recursividad es una técnica de programación en la que una función se llama a sí misma una o más veces para resolver un problema. El objetivo es dividir un problema complejo en subproblemas más pequeños y manejables que utilizan la misma lógica.

Toda función recursiva debe cumplir con dos reglas fundamentales:
1.  **Cláusula de escape (Caso base)**: Es una condición de retorno que detiene las llamadas recursivas. Sin ella, la función entraría en un bucle infinito, provocando un error de desbordamiento de pila (*stack overflow*).
2.  **Llamada recursiva**: La función debe invocarse a sí misma con un argumento que la acerque cada vez más al caso base.

> [!NOTE]
> Casi cualquier problema recursivo puede resolverse de forma **iterativa** (usando bucles `for` o `while`). Generalmente, los bucles son más eficientes en términos de rendimiento y memoria, pero la recursividad suele ofrecer soluciones más elegantes y fáciles de leer para ciertos algoritmos.

## Ejemplo: La Sucesión de Fibonacci

La Sucesión de Fibonacci es una serie infinita de números donde cada número es la suma de los dos anteriores:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...`

### Implementación Recursiva

Para resolver esto en código, primero identificamos los casos más simples (los dos primeros números):

```javascript
function fibonacci(n) {
	if (n === 1) return 0; // Primer número de la serie
	if (n === 2) return 1; // Segundo número de la serie

	// Llamada recursiva: sumamos los resultados de las dos posiciones anteriores
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Muestra 3
console.log(fibonacci(7)); // Muestra 8
```

En este ejemplo, si pedimos la posición 5, la función se descompone internamente hasta llegar a los casos base (1 y 2), sumando los resultados de vuelta hacia arriba.

## Optimización con Memoization

El problema de la recursividad pura en Fibonacci es que realiza muchos cálculos redundantes (por ejemplo, para calcular `fib(10)` calcula `fib(5)` muchas veces). Esto hace que la función sea extremadamente lenta con números grandes.

Para optimizarlo, podemos usar **Memoization** (memorización), almacenando los resultados ya calculados en un objeto:

```javascript
function fibonacciMemo(n, memo = {}) {
	// 1. Si ya calculamos este número, lo devolvemos directamente
	if (n in memo) return memo[n];

	// 2. Casos base
	if (n === 1) return 0;
	if (n === 2) return 1;

	// 3. Calculamos y GUARDAMOS el resultado en el objeto 'memo' antes de devolverlo
	memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
	
	return memo[n];
}
```

Al pasar el objeto `memo` en cada llamada, evitamos repetir cálculos. La primera vez que la función encuentra una posición (ej. la 10), realiza el cálculo y lo guarda; las siguientes veces, simplemente lee el valor del objeto, mejorando el rendimiento de forma exponencial.