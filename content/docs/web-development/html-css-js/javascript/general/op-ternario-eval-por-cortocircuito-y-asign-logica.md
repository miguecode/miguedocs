---
title: "Op. Ternario, Eval. por Cortocircuito y Asign. Lógica"
description: "Operador Ternario (If-Else resumido)"
---


## Operador Ternario (If-Else resumido)

- El operador ternario es una forma de escribir un IF-ELSE de forma más rápida. La idea es que, al escribir menos código, podamos resumir todo en una sola línea.

```typescript
[condición] ? [se ejecuta si es true] : [se ejecuta si es false];
```
- **Veamos un ejemplo fácil**: 

```typescript
let edad = 20;
let resultado = edad > 17 ? "Mayor de edad" : "Menor de edad";	

console.log(resultado); // Muestra "Mayor de edad"
```
- Generalmente, esto lo resolveríamos haciendo un típico if-else. Pero así se hace más rápido.


## Evaluación por cortocircuito 

- La evaluación por cortocircuito hace uso de distintos operadores lógicos: 

- || (OR)
- && (AND)
- ?? (Nullish Coalescing)


```typescript
*** Resumen visual rápido de cada uno ***
```
| valor1 || valor2 | --> Se devuelve el primer valor truthy que encuentre |
| --- | --- |
| valor1 && valor2 | --> Se devuelve el primer valor falsy que encuentre |
```typescript
valor1 ?? valor2      --> Se devuelve el primer valor no nullish que encuentre (el primero que no sea null o undefined)
```
### Operador || (OR)

```typescript
const personas = JSON.parse(localStorage.getItem("personas")) || [];
```
- En este caso, lo que hacemos es que el array personas tenga 2 posibles valores: el primero o el que va después de ||. Si el primero es un valor falsy, se retorna el segundo. Es decir, un array vacío. Y si los dos son falsy, se retorna el último valor evaluado.

- **Entonces, y para que se entienda fácil**: lo que hace el operador || es retornar el primer valor truthy que encuentre. Y si no hay ninguno, se retorna el último. Los distintos valores truthy y false que existen están en otro apunte.

- Una forma rápida de conocer los truthy y los falsy es simplemente recordar cuáles son los valores falsy: false, null, undefined, 0, "" y NaN. Y todo lo que no sean esos valores, es truthy. Por cierto, los nullish son null y undefined.

```typescript
console.log(false || "Miguel");  	 // Muestra "Miguel" porque false es falsy
console.log(null || "hola");   	 // Muestra "hola" porque null es falsy
console.log(undefined || true);  // Muestra true porque undefined es falsy
console.log(0 || 42);          	 // Muestra 42 porque 0 es falsy
console.log("" || "default");  	 // Muestra "default" porque "" es falsy
console.log(NaN || 666);  		 // Muestra 666 porque NaN es falsy
console.log("JS" || "CSS");		 // Muestra "JS" porque "JS" es truthy
console.log(null || undefined);  // Muestra undefined (los dos son falsy)
```
### Operador && (AND) [Es lo mismo que || pero al revés]

- Este operador es exactamente igual que el || pero invertido. Entonces, lo que hace es retornar el primer valor falsy que encuentre. Y si no encuentra ninguno, retorna el último que evalúa.

```typescript
console.log("Hola" && "Mundo");  	// Muestra "Mundo" (porque los dos son truthy pero "Mundo" fue el último
console.log(0 && "Mundo");       	// Muestra 0 (porque 0 es falsy)
console.log(5 && undefined);       	// Muestra undefined (porque 5 es truthy y undefined falsy)
```
### El Operador ?? (Nullish Coalescing)

- Este operador solo usa el valor derecho si el izquierdo es null o indefined (es decir, si es nullish). O sea, devuelve el primer valor no-nullish que encuentre (Es decir, lo primero que no sea null ni undefined). Como los dos operadores anteriores, si no encuentra ningún valor no-nullish, retorna el último que evalúa.

```typescript
console.log(0 || "default");  	// 0 (porque 0 no es null ni undefined)
console.log(false || "default");  	// false (porque false no es null ni undefined)
console.log(null ?? "default");  	// "default"
console.log(undefined ?? "default"); // "default"
console.log(undefined ?? null); // null (porque los dos son nullish pero null fue el último evaluado)
```
## Asignación Lógica

- La asignación lógica sirve como atajo para asignar valores basados en condiciones específicas. También hace uso de &&, || y ??. Pero en este caso lo hacen acompañados de =

```typescript
*** Resumen visual rápido de cada uno ***
```
| variable ||= valor | --> Si variable es falsy, se le asigna valor |
| --- | --- |
| variable &&= valor | --> Si variable es truthy, se le asigna valor |
| variable ??= valor | --> Si variable es nullish, se le asigna valor |


```typescript
let x = false;
x ||= 10;  // Si x es falsy, se le asigna 10
console.log(x); // Muestra 10

let y = 5;
y &&= 20;  // Si y es truthy, se le asigna 20
console.log(y); // Muestra 20

let z = null;
z ??= "valor por defecto"; // Si z es null o undefined (o sea, nullish), se le asigna "valor por defecto"
console.log(z); // Muestra "valor por defecto"
```
## Optional Chaining (?.)

- Permite acceder a propiedades de objetos anidados sin lanzar error si una parte es null o undefined. Ojo: es similar pero no es lo mismo que sólo poner ? después de una variable. Eso significa "si es null, no marques el error". Pero en este caso, el "?." está hecho para propiedades de objetos, diciendo "si existe la propiedad, accedé, y si no existe, devolvé undefined".

```typescript
const persona = {
	nombre: "Carlos",
	direccion: {
		ciudad: "Buenos Aires",
	},
};

console.log(persona.direccion?.ciudad);  // Muestra "Buenos Aires"
console.log(persona.trabajo?.empresa);   // Muestra undefined (Sin tirar error!)
```
- Trabajo no existe dentro de persona, y aún así pudimos hacer el console.log normalmente mostrando undefined. Esto no podríamos lograrlo sin el "?".

```typescript
console.log(persona.trabajo.empresa); // Esto sí muestra error
```
## Doble Negación (!!)

- El !! se usa para transformar un valor a booleano. Ese booleano va a ser true o false, dependiendo de si el valor es truthy o falsy. Veamos:

```typescript
let valor1 = "hola";
let valor2 = 0;
let valor3;

let resultado1 = !!valor1; // resultado1 queda en true
let resultado2 = !!valor2; // resultado1 queda en false
let resultado3 = !!valor3; // resultado1 queda en false
```