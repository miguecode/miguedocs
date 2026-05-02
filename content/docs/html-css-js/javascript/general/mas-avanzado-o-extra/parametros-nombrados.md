---
title: "Parámetros nombrados"
description: "Cómo usar la técnica de parámetros nombrados mediante la desestructuración de objetos para crear funciones más legibles y escalables."
---


## Parámetros Nombrados

Los **parámetros nombrados** son una técnica en la que, en lugar de pasar múltiples argumentos individuales a una función, se le pasa un **único objeto** que es desestructurado internamente por la función.

### ¿Cuándo usar esta técnica?

Es especialmente recomendable cuando una función recibe más de tres o cuatro parámetros, o cuando sabemos que el número de argumentos podría aumentar en el futuro. Esta práctica nos brinda tres beneficios clave:

1.  **Escalabilidad**: Podemos agregar nuevos parámetros sin romper las llamadas existentes a la función.
2.  **Legibilidad**: Al invocar la función, queda claro qué significa cada valor (no dependemos solo del orden).
3.  **Seguridad**: Evitamos errores comunes al confundir el orden de los parámetros (como intercambiar `age` con `sex`).

## Ejemplo: Comparativa

### Forma tradicional (Basada en posición)

En este caso, debemos respetar estrictamente el orden. Si queremos omitir la edad pero pasar el trabajo, nos vemos obligados a enviar un `undefined` intermedio.

```javascript
function createPerson(name, lastName, sex, age = 18, job) {
	// lógica...
}

createPerson("Miguel", "Gil", "Masculino", undefined, "Programador");
```

### Usando parámetros nombrados (Basada en objeto)

Al usar un objeto desestructurado, el orden deja de importar y el código se vuelve mucho más explícito.

```javascript
function createPerson({ name, lastName, sex, age = 18, job } = {}) {
	// lógica...
}

// Llamada clara y ordenada
createPerson({
	name: "Miguel",
	lastName: "Gil",
	sex: "Masculino",
	job: "Programador" 
    // age se omitió, por defecto será 18
});
```

En la definición de la función, cada propiedad se extrae automáticamente del objeto recibido. Si falta alguna propiedad que no tiene valor por defecto, se cargará como `undefined`.

## Manejo de errores: Objeto opcional

Un error común al usar esta técnica es llamar a la función sin pasarle ningún argumento:

```javascript
createPerson(); // Lanzaría un TypeError: Cannot destructure property...
```

Esto ocurre porque el motor intenta desestructurar algo que no existe (`undefined`). Para solucionarlo, asignamos un **objeto vacío por defecto** al parámetro de la función:

```javascript
function createPerson({ name, lastName, age = 18 } = {}) {
    // Si no se pasa nada, el parámetro es {} por defecto
    // y la desestructuración no falla.
}
```

Al agregar `= {}`, hacemos que pasar un objeto sea opcional. Si no se envía nada, los valores internos simplemente se evaluarán como `undefined` (o su valor por defecto) sin romper la ejecución del programa.