---
title: "Arrays. Aclaraciones y 'as const'"
---

> Arrays en TypeScript

- En esencia, los arrays funcionan exactamente igual que como lo hacen en JavaScript. Pero algo que tenemos que saber es cómo es su tipo en TypeScript. En JS eran simplemente "array". Pero en TS es algo más detallado:

	const miArray = [1, 2, 3, 4];
	
- En este caso, no especificamos de qué tipo es miArray, pero TS lo infiere por lo que le asignamos. Así que, a este punto, miArray es de tipo " number[] ". Es decir, un array de numbers.

	const miArray: number[] = [1, 2, 3, 4];
	
- Sería lo mismo que hacer esto. En este caso, ahora sí estamos indicando nosotros mismos de qué tipo es miArray, y obtenemos el mismo resultado que antes.


>> Pero si hacemos esto:

	const miArray: [number] = [1, 2, 3, 4];  // Esto da ERROR

- No podemos hacer esto, ya que si nosotros ponemos que myArray es de tipo [number], eso significa que es un array que contiene UN SÓLO number. Entonces si le ponemos más de 1, da error. Tenemos que poner number[].

	const miArray: [number, string] = [1, "Pepe"];  // Esto es válido

- En este caso, miArray es un array que contiene UN number y UN string. Y no puede contener nada más.


>> Arrays con distintos tipos:

	const miArray: [number | boolean] = [1, 2, true, 3, false, 4]; // Esto es válido

- En este caso, miArray es de tipo: [number | boolean], es decir, un array que contiene números O booleanos. Y puede tener todos los que queramos. Distinto sería si hiciésemos esto:

	const miArray: number[] | boolean[] = [1, 2, true, 3, false, 4]; // Esto da ERROR

- En este caso, miArray es una variable que puede ser de tipo number[] o de tipo boolean[]. Es decir, puede ser un array de números o de booleanos. Es uno o el otro, NO es lo mismo que [number | boolean].



> El "as const"

	const colores = ["rojo", "amarillo", "verde"] as const;

- En este caso, el "as const" provoca que el array colores sea de tipo: readonly ["rojo", "amarillo", "verde"]. Esto sería lo mismo que si hiciéramos esto:

	const colores = readonly ["rojo", "amarillo", "verde"];
	
- Como vimos en el apunte de los tipos de datos, readonly es un tipo de dato avanzado (propio de TypeScript). El readonly hace referencia a propiedades inmutables, es decir, que no se pueden modificar nunca.

- TypeScript siempre trata de inferir. Eso significa que si nosotros tenemos un array con 3 strings, va a determinar que la variable es un array de strings. Y si le agregamos un número a ese array, entonces va a inferir que el tipo es un array de strings o números [string | number].

- Hasta ahí está bien, pero si le agregamos el "as const", hace que TypeScript deje de inferir. Es como decirle que ESOS son los valores. Entonces se genera un "snapshot" de qué tiene exactamente el array dentro. Y justamente eso es un tipo de dato readonly.

- Si yo ahora quisiera CAMBIAR uno de los valores, ya no voy a poder:

	const colores = ["rojo", "amarillo", "verde"] as const;
	colores[0] = "violeta";   // Esto da ERROR


- Todo esto nos puede servir para:

function obtenerConfiguracion() {
	return {
		modo: "prod",
		version: "1.0.0",
		opciones: {
			depuracion: false,
		},
	} as const;
}

- El "as const" hace que el retorno sea readonly. Por ende, esos valores no se van a poder cambiar.

	const configuracion = obtenerConfiguracion();
	configuracion.opciones.depuracion = true; // Esto da ERROR