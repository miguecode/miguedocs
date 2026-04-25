---
title: "Recursividad y la Sucesión de Fibonacci "
description: "La recursividad es una técnica de programación en la que una función se llama a sí misma una o más veces, para resolver un problema. Esto con el fin de reutiliz..."
---


## La Recursividad

- La recursividad es una técnica de programación en la que una función se llama a sí misma una o más veces, para resolver un problema. Esto con el fin de reutilizarse a sí misma, y así dividir el problema en subproblemas más chicos.

- Lo más importante de una función recursiva es que tenga una cláusula de escape, para evitar el típico bucle infinito. Con cláusula de escape nos referimos a que tenga algún retorno. Es decir, si nosotros tenemos una función saludar(), la cual, en su desarrollo, se llama a sí misma, entonces la función saludar se va a ejecutar infinitas veces sin parar, y nos va a romper todo el programa, ya que nunca se va a terminar de ejecutar saludar(). Por eso es obligatorio que las funciones recursivas tengan una cláusula de escape.

- Otro punto MUY importante a tener en cuenta es que cada función recursiva, tiene su versión "iterativa" o "de bucle". Es decir, todo lo que hacemos de forma recursiva, lo podríamos hacer también usando algún bucle de iteración como un FOR. Y... ¿Qué es mejor? Depende del caso, pero generalmente usar el bucle es una mejor opción, ya que optimiza más el rendimiento al no tener que llamar más de una vez a una misma función.


### Ejemplo con la Sucesión de Fibonacci

- Esto es un ejercicio clásico de la programación, y se trata de recrear la Sucesión de Fibonacci, y ¿Qué es eso? Es una serie de números, en la cual cada número es la suma de los 2 números anteriores, es decir:

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, etc.
```
- Empieza con 0, 1, y a partir de ahí empieza el patrón. El tercer número es un 1 ya que se suman los 2 anteriores: 0 + 1. Y así constantemente hasta el infinito.

- Vamos a usar la recursividad para crear una función que lleve a cabo esta secuencia de números. OJO: Usar la recursividad para la Sucesión de Fibonacci NO es la mejor opción. La mejor opción es usar un simple bucle FOR (por lo que explicamos al principio del apunte). Pero en este caso, vamos a ver cómo se hace con recursividad, es decir, con una función que se llama a sí misma:

```typescript
function fibonacci (n) {
	if (n === 1) return 0; // Cláusula de escape
	if (n === 2) return 1; // Cláusula de escape
}
```
- Como vemos, esas son las famosas cláusulas de escape (return's). Es un punto MUY IMPORTANTE a recordar en las funciones recursivas: TIENEN que tener una cláusula de escape clara, y preferentemente al inicio de la función. Esto para evitar un bucle innecesario.

- Ahora sí, veamos la lógica completa de la función y por qué es recursiva:

```typescript
function fibonacci (n) {
	if (n === 1) return 0; // Cláusula de escape
	if (n === 2) return 1; // Cláusula de escape

	return fibonacci(n - 1) + fibonacci(n - 2); // Acá esta la recursividad, ya que llamamos a la misma función
}

fibonacci(1); // Va a devolver 0
fibonacci(2); // Va a devolver 1
fibonacci(3); // Va a devolver 1
fibonacci(4); // Va a devolver 2
fibonacci(5); // Va a devolver 3
```
- Como vemos, la función fibonacci() lleva a cabo la recursividad. ¿Por qué? Porque es una función que se llama a ella misma en su desarrollo. Y con esta lógica que hicimos, podemos ir mostrando cada posición de la Sucesión Fibonacci. La primer posición es un 0, la segunda un 1, la tercera un 1, y así. El punto en su lógica está en encontrar el fibonacci del número anterior, y sumarlo al fibonacci del anterior a ese. Es decir, sumar los 2 números anteriores de la serie. De esa forma obtenemos todos los números bajo ese patrón. También es importante tener los dos primeros retornos, ya que son los primeros a tomar en cuenta. A partir de ellos, se pueden hacer el resto de cálculos.

- Un truco práctico para resolver este tipo de problemas lógicos es siempre pensar en las primeras soluciones, las más simples. Y a partir de ahí, encontrar la lógica para continuar. Por ejemplo, en este caso empezamos con dos "if" sencillos. Porque si vemos la Sucesión Fibonacci, ya vemos que el primer número es un 0 y el segundo un 1. Entonces, con dos simples IF podemos retornar el valor correcto: si recibe un 1, retorno 0. Y si recibe 2, retorno 1. Y a partir de ahí, empiezo a pensar cómo llegar a los próximos resultados correctos.


## La optimización y La Memoization

- En otro de nuestros apuntes hablamos sobre la Memoization. No vamos a hacer eso acá, pero sí vamos a ver un ejemplo. Con esta función recursiva que hicimos, nos va a pasar que cuando le pasamos números muy muy grandes, va a tardar más en responder. Porque tiene que hacer muchos cálculos (literalmente se va a ejecutar la función muchísimas veces por la recursividad). Entonces, en términos de performance, eso no va a ser lo ideal.

- **Usando la Memoization, podríamos hacer esto**: 

```typescript
const memo = { };

function fibonacciMemo(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n === 1) return 0; // Podríamos poner n <= 1 para que cubra los números negativos
	if (n === 2) return 1;

	return memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
}
```
- De esta forma, creamos un objeto literal vacío llamado "memo", al cual le vamos a pasar a la función recursiva como segundo parámetro. La lógica de la función y la idea es exactamente el mismo, pero con una diferencia clave: Antes que empiece a ejecutarse como lo haría normalmente, nos hacemos una pregunta. El "n" recibido, ¿Ya existe como una "key" dentro del objeto "memo"? Si es así, retornamos su "value". Y sino, continuamos con la ejecución.

- Al final, cuando retornamos, no sólo devolvemos el valor, sino que además LO GUARDAMOS dentro de memo[n]. Entonces, estamos creando una propiedad dentro del objeto memo, llamada "n", cuyo valor va a ser el resultado del cálculo que hacemos a la derecha.

- De eso se trata la memoization, de -memorizar- valores que ya obtuvimos antes, para evitarnos de hacer otra vez lo mismo. Es decir, se trata de optimizar.