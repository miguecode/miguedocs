---
title: "Usar un objeto como reemplazo de Switch"
description: "Cómo es el patrón de diseño Object Lookup en JavaScript para sustituir bloques Switch complejos por objetos más limpios y escalables."
---


## Introducción

En programación, estamos acostumbrados a reemplazar múltiples bloques `if-else` por un `switch`. Es una mejora lógica, pero existe una alternativa aún más limpia, profesional y escalable: utilizar un **Objeto Literal** como mapa de búsqueda (*Object Lookup*).

## Situación con `if-else`

Supongamos que tenemos una lógica que asigna un valor basado en un adversario:

```javascript
const adversario = "Iron-Man";
let loki = "";

if (adversario === "Iron-Man") {
	loki = "Magneto";
} else if (adversario === "Hulk") {
	loki = "Thanos";
} else if (adversario === "Thor") {
	loki = "Odin";
} else {
	loki = "Loki";
}
```

## Solución con `switch`

El `switch` mejora visualmente la estructura, pero sigue siendo un bloque de control rígido que tiende a crecer verticalmente:

```javascript
const adversario = "Iron-Man";
let loki = "";

switch (adversario) {
	case "Iron-Man":
		loki = "Magneto";
		break;
	case "Hulk":
		loki = "Thanos";
		break;
	case "Thor":
		loki = "Odin";
		break;
	default:
		loki = "Loki";
}
```

## La mejor alternativa: El Objeto Literal

Usar un objeto nos permite tratar a las condiciones como datos en lugar de como bifurcaciones de código. Es más fácil de leer, de mantener y de exportar a otros módulos.

```javascript
const adversario = "Iron-Man";

// Diccionario de disfraces
const LOKI_DISFRACES = {
	"Iron-Man": "Magneto",
	"Thor": "Odin",
	"Hulk": "Thanos"
};

const LOKI_DEFAULT_DISFRAZ = "Loki";

// Accedemos a la propiedad de forma dinámica
const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ;

console.log(loki); // "Magneto"
```

Por convención, estos objetos de configuración se suelen escribir en `SNAKE_UPPER_CASE` para indicar que son constantes mapeadas.

### Usando funciones como valores

Este patrón no se limita a cadenas de texto; podemos ejecutar funciones enteras de forma dinámica:

```javascript
const LOKI_ACCIONES = {
	"Iron-Man": () => console.log("Atacando con magnetismo"),
	"Thor": () => console.log("Usando el rayo"),
	"Hulk": () => console.log("Aplastando"),
};

const LOKI_ACCION_DEFAULT = () => console.log("Engañando");

// Ejecutamos la función si existe, de lo contrario ejecutamos la default
const ejecutarAccion = LOKI_ACCIONES[adversario] || LOKI_ACCION_DEFAULT;
ejecutarAccion();
```

Este enfoque reduce la complejidad ciclomática del código y permite escalar la lógica simplemente añadiendo entradas al objeto, sin tocar la estructura del algoritmo principal.
