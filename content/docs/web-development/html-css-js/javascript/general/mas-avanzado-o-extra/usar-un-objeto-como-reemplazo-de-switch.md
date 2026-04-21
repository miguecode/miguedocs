---
title: "Usar un objeto como reemplazo de Switch"
---

> Usar un objeto como reemplazo de Switch

- Algo a lo que estamos acostumbrados al programar es a que, cuando vemos muchos "if else", cambiarlos por un switch. Es lógico, porque para eso fue creado el switch. Pero hay veces en las que es mejor simplemente dejar los if else, o sino, usar un OBJETO. Esto último es algo similar a un enumerado. Vamos a verlo.


> Supongamos que tenemos esta situación, hecha con distintos IF-ELSE:

	const adversario = "Iron-Man";
	let loki = "";
	
	if (adversario === "Iron-Man") {
		loki = "Magneto";
	} else if (adversario === "Hulk") {
		loki = "Thanos"";
	} else if (adversario === "Thor") {
		loki = "Odin";
	} else {
		loki = "Loki";
	}
	

> Si usamos el condicional switch, quedaría así:

	const adversario = "Iron-Man";
	let loki = "";

	switch (adversario) {
		case "Iron-Man":
			loki = "Magneto";
			break;
			
		case "Hulk":
			loki = "Odin";
			break;
	
		case "Thor":
			loki = "Odin";
			break;
	
		default:
			loki = "Loki";
	}

- Esto funciona perfecto, y no hay ningún problema en hacerlo. De hecho, termina siendo un poco más "visual" si se quiere, que usar tantos if-else juntos. Pero vamos a ver una opción más limpia y escalable, usando un objeto.


> La alternativa del objeto

	const adversario = "Iron-Man";

	const LOKI_DISFRACES = {
		"Iron-Man": "Magneto",
		"Thor": "Odin",
		"Hulk", "Thanos"
	}
	
	const LOKI_DEFAULT_DISFRAZ = "Loki";

	const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ;
	
	console.log(loki); // Vamos a recibir el disfraz "Magneto"


- Así, todo es más claro visualmente, y encima es más fácil de escalar, ya que con una sola línea podemos agregar una entrada nueva a nuestro objeto LOKI_DISFRACES. También lo podríamos exportar para usarlo en otro archivo. 

- Por convención, los nombres de estos objetos se escriben en mayúsculas y separados por " _ ". Es decir, SNAKE_UPPER_CASE (no sé si se llama así). 

- Y así como lo hicimos en este caso con strings, cabe decir que lo podemos hacer con cualquier otro tipo de valores, hasta con funciones, veamos:

	const LOKI_FUNCTIONS = {
		"Iron-Man": () => { Alguna funcionalidad },
		"Thor": () => { Alguna funcionalidad },
		"Hulk": () => { Alguna funcionalidad },
	}
	
	const LOKI_DEFAULT_FUNCTION = () => { Alguna funcionalidad }
	
	const loki = LOKI_FUNCTIONS[adversario] ? LOKI_FUNCTIONS[adversario]() : LOKI_DEFAULT_FUNCTION();

- Esto sería lo mismo de antes, pero usando funciones. Obviamente, como en todo objeto, las "keys" sí tienen que ser siempre strings. Pero si usáramos un Map, por ejemplo, ahí podríamos hacer que las keys sean de otros tipos también.