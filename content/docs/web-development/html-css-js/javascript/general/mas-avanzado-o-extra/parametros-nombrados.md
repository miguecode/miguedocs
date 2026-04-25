---
title: "Parámetros nombrados"
description: "Se trata de una técnica muy efectiva donde, en lugar de pasar múltiples argumentos a una función, se le pasa un único objeto, el cual va a ser desestructurado d..."
---



- Se trata de una técnica muy efectiva donde, en lugar de pasar múltiples argumentos a una función, se le pasa un único objeto, el cual va a ser desestructurado dentro de la función

- ¿Cuándo hacer esto? Cuando tenemos una función que recibe varios parámetros, y nosotros sabemos que en algún futuro esos parámetros pueden ser más. Es decir, esto es una buena práctica que nos brinda escalabilidad, legibilidad y seguridad. Además, es un concepto que se comporta bien con TypeScript (usando types o interfaces).


## Ejemplo

```typescript
function createPerson(name, lastName, sex, age = 18, job) {
	// ...
}

createPerson("Miguel", "Gil", "Masculino", undefined, "Programador");
```
- Esta sería la forma básica de hacerlo. Si bien esto es correcto, vamos a mejorarlo con los parámetros nombrados. Como dijimos antes, esto lo hacemos ya que esta función tiene varios parámetros, y además, es posible que en algún futuro se escale a más parámetros.

```typescript
function createPerson2({ name, lastName, sex, age = 18, job }) {
	// ...
}
```
- En este caso, como vemos, creamos un createPerson2 la cual está desestructurando un objeto a recibir. Es decir, va a crear las variables name, lastName, sex, age y job. En caso de no recibir alguna, le va a cargar undefined (excepto con age, que le va a cargar 18).

```typescript
createPerson2({
	name: "Miguel",
	lastName: "Gil",
	sex: "Masculino",
	age: 23,
	job: "Programador"
});
```
- Así es como llamaríamos a la función. Esto es mejor ya que si en un futuro queremos agregar más parámetros a la función, nada se va a romper. Y además, es más visual y fácil hacerlo ya que no es necesario pasarlos en orden, ya que tienen un "contrato" por nombre. Es decir, nos brinda la seguridad de que cada parámetro tiene que tener el mismo nombre esperado por la función, y así nos evitamos errores.


## Aclaración importante

- Como sabemos, si pasamos distintos parámetros en el objeto pero nos faltó alguno, se va a tomar como undefined (o como el valor por defecto, como lo hace "age"). Pero... ¿Y si llamamos a la función y no le pasamos nada? Es decir:

```text
createPerson2();
```
- En este caso, nos va a dar TypeError porque se va a intentar desestructurar undefined. Para evitarlo, hacemos esto:

```typescript
function createPerson2({ name, lastName, sex, age = 18, job } = {}) {
	// ...
}
```
- Así, con ese " = {} ", hacemos que pasar o no un objeto sea opcional. Ya que si no se lo pasamos, por defecto le llega un objeto literal vacío { }. Y en ese caso, todos los valores de la persona van a ser undefined.