---
title: "Memoization (Optimización en valores repetidos)"
description: "Qué es la Memoization y cómo optimizar el rendimiento de funciones pesadas almacenando sus resultados previos."
---


## Memoization (Memorización)

La **Memoization** es un concepto de optimización de rendimiento que consiste en almacenar los resultados de una función para no tener que volver a calcularlos si se invocan de nuevo con los mismos argumentos.

### La lógica detrás del concepto

Si tienes una función pesada que recibe un parámetro `X`, y cada vez que recibe ese mismo parámetro `X` retorna exactamente el mismo resultado... ¿para qué ejecutarla más de una vez? 

Para que la Memoization sea efectiva, la función debe ser **PURA**: si recibe los mismos parámetros, debe retornar siempre el mismo resultado sin efectos secundarios externos. La mayor utilidad ocurre cuando la función realiza cálculos complejos que tardan un tiempo considerable en completarse.

En lugar de re-ejecutar la lógica pesada, guardamos el primer resultado en un objeto o array (caché). Las siguientes veces, simplemente entregamos el valor almacenado casi instantáneamente.

## Escenario: Una función pesada

Supongamos que tenemos una función con bucles anidados que tarda en terminar dependiendo del número que reciba:

```javascript
const hacerAlgo = (num) => {
	let c = 0;
	const a = 20;
	const b = 12;

	for (let i = num - 1; i >= 0; i--) {
		for (let j = i - 1; j >= 0; j--) {
			c += a * b;
		}
	}
	return c;
};
```

Si ejecutamos esta función con un número alto (ej. `60000`), notaremos una demora perceptible en la consola (aproximadamente 2 segundos dependiendo del procesador).

```javascript
const t1 = performance.now();
hacerAlgo(60000);
const t2 = performance.now();
console.log(`Tiempo: ${t2 - t1}ms`); // Aprox 2000ms
```

Si llamamos a esta función 4 veces seguidas con el mismo valor, el programa tardaría 8 segundos en total de forma innecesaria. Aquí es donde aplicamos Memoization.

## Implementación de un Memoizer

Podemos crear una función de orden superior que reciba nuestra función pesada y le añada una capa de caché:

```javascript
let cache = {};

const memoizer = (funcionRecibida) => {
	return (arg) => {
		const index = arg.toString();
		
		if (cache[index] === undefined) {
			console.log("Calculando nueva entrada...");
			cache[index] = funcionRecibida(arg);
		} else {
			console.log("Obteniendo de la caché...");
		}
		
		return cache[index];
	};
};
```

### ¿Cómo funciona este código?

1.  Creamos un objeto `cache` para almacenar los resultados.
2.  `memoizer` recibe nuestra función `hacerAlgo` y retorna otra función (un closure).
3.  La función retornada toma el argumento `arg` y lo usa como clave (`index`).
4.  Si la clave **no existe** en la caché (`undefined`), ejecuta la función pesada y guarda el resultado.
5.  Si la clave **ya existe**, retorna el valor guardado directamente sin ejecutar la lógica pesada.

## Prueba de rendimiento con Memoization

```javascript
const memo = memoizer(hacerAlgo);

console.time("Primera ejecución");
memo(60000); // Tarda ~2 segundos
console.timeEnd("Primera ejecución");

console.time("Segunda ejecución");
memo(60000); // Tarda ¡0! milisegundos (ya estaba en caché)
console.timeEnd("Segunda ejecución");
```

Gracias a la Memoization, pasamos de esperar 8 segundos en total (para 4 llamadas) a esperar solo 2 segundos en la primera llamada, y prácticamente nada en las siguientes. Este es el principio que utilizan muchos frameworks modernos por debajo para evitar re-renderizados o cálculos costosos.