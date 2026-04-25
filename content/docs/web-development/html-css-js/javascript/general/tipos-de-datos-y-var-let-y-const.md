---
title: "Tipos de Datos y Var, Let y Const "
description: "Existen dos categorías principales de tipos de datos:"
---


## Tipos de datos

- Existen dos categorías principales de tipos de datos:

1. Tipos primitivos (se almacenan por valor) (son 7)
2. Tipos no primitivos (objetos) (se almacenan por referencia) (son 3)

- Cabe decir que cuando veamos los apuntes de Objetos y Prototipos, este tema va a salir a flote nuevamente. El tema de los tipos primitivos y no primitivos.


## Tipos primitivos

- Los tipos primitivos son inmutables y se copian POR VALOR. Esto significa que si asignamos una variable a otra, se copia el contenido y no afecta al original. Estos tipos son 7:

Tipo			Descripción					Ejemplo
----------------------------------------------------------------------------------------------
Number		Números enteros y decimales		let edad = 23;
String		Cadenas de texto (Van entre " ")	let nombre = "Juan";
| Boolean | Representa true o false | let esMayor = true; |
| --- | --- | --- |
| Undefined | Variable declarada pero sin valor | let x; |
| Null* | Ausencia intencional de valor | let y = null; |
Symbol		Valores únicos e inmutables		let id = Symbol("id");
BigInt		Números enteros muy grandes	let big = 1234567890123456789n;

* Aclaración sobre Null: La realidad es que null es un tipo de dato primitivo, y por eso lo colocamos acá. Pero hay que saber una cosa, y es que tiene una particularidad que lo distingue de los demás primitivos, y es que si hacemos esto:

```typescript
console.log(typeof null);  // Muestra "object"
```
- Como vemos, el typeof nos dice que null es un objeto. Pero esto es un ERROR, literalmente es un bug muy antiguo de JavaScript, que con el tiempo se decidió no corregir, para evitar romper millones de sitios web antiguos. Pero hay que entender que null se comporta como un tipo de dato primitivo, al igual que los demás.



## Tipos no primitivos (son objetos)

- Estos datos se almacenan POR REFERENCIA, lo que significa que cuando asignamos una variable a otra, ambas apuntan al mismo objeto en memoria. Son variables que guardan direcciones de memoria, por ende, trabajan con la ubicación real del objeto en memoria, y no con valores en el aire como los primitivos.


Tipo			Descripción					Ejemplo
----------------------------------------------------------------------------------------------------
Object		Conjunto de datos clave-valor		let persona = {nombre: "Ana", edad: 25};
Array		Lista ordenada de valores		let numeros = [1, 2, 3];
Function		Bloque de código reutilizable		function sumar(a, b) { return a + b; }

- Los objetos (instancias de Object) se escriben entre { } y los arrays entre [ ].

- Tanto los arrays como las funciones son objetos también. Eso hay que entenderlo. Un array va a ser una instancia de la función constructora/clase Array, y una función va a ser una instancia de la función constructora/clase Function. Y tanto Array como Function, heredan de la función constructora/clase base Object.

- Una aclaración a hacer respecto al tipo Function, es que es un no primitivo especial. Si bien es un objeto como Object y Array, tiene un particularidad y es que SE PUEDE INVOCAR. Por eso:

```typescript
typeof function () {} 	// Muestra "function"
```
- Como vemos, muestra que es una "function", en lugar de "object". Esto es así ya que typeof hace una excepción con las funciones para poder detectarlas más facilmente. Internamente, una función es una instancia de la función constructora/clase Function, que a su vez hereda de Object. Es decir:

```typescript
function saludar() {}
console.log(saludar instanceof Function); // true
console.log(saludar instanceof Object);   // true
```
- Como vemos, toda función es un objeto instanciado por la función constructora/clase Function, la cual hereda de la función constructora/clase Object.



## Diferencia entre Var, Let y Const

- La forma de crear variables puede ser con 3 palabras clave: var, let y const. Veamos sus diferencias.

- **var**: Tiene scope de función, puede ser redeclarada en el mismo ámbito y reasignada.
- **let**: Tiene scope de bloque, puede ser reasignada y no puede ser redeclarada en el mismo ámbito.
- **const**: Tiene scope de bloque, pero su valor no puede ser reasignada y por ende tampoco redeclarada.

```typescript
function ejemplo() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x); 	// 10 (var ignora el bloque y sigue existiendo, tiene alcance a función)
    // console.log(y); // Error (let tiene alcance limitado al bloque)
    // console.log(z); // Error (const tiene alcance limitado al bloque)
}

ejemplo();
```
- En este caso, la variable "x" creada con "var", ignora el bloque { }, y sobrevive fuera de él. En cambio, let y const, al tener alcance de bloque, mueren fuera del bloque { }.

- Hoy en día, usar 'var' no es una práctica recomendada, ya que puede causar problemas de alcance. En su lugar, usamos 'let' para variables que puedan cambiar y 'const' para valores constantes. Aunque 'const' no permite reasignación, sí se puede usar con objetos y arrays, ya que estos pueden mutar internamente.

- Veamos el caso de la re-declaración de variables (que ocurre solo con "var"), que significa que podemos crear una variable, y después crear otra con exactamente el mismo nombre.

- Como vimos, las variables "var" existen dentro de sus scopes. Por lo tanto, puedo hacer esto:

```typescript
var num1 = 20;

if (true) {
	var num1 = 50;
	console.log(num1); 	 // Muestra 50
}

console.log(num1)   // Muestra 20
```
### Aclaraciones de let y const

- "let" y "const" NO permite redeclarar variables con el mismo nombre. Da error.

- Las variables const hay que inicializarlas si o si, o sino da error. Es decir, no podemos declarar una variable const sin darle un valor en esa misma línea.

```typescript
const variable;    // Esto no se puede, da error
variable = 50;
```
- Todas las 'var' van directamente a formar parte de "window". Sin embargo "let" y "const" van a un scope intermedio. No se mezclan con todo lo que contiene window.

- Si yo en una variable voy a guardar una dirección de memoria, no voy a usar let, voy a usar const. Esto es asi basicamente porque "const" no puede cambiar su valor en tiempo de ejecución. Al igual que no tiene sentido que nosotros modifiquemos a una dirección de memoria.

- **Veamos un ejemplo de esto último con const**: 

```typescript
const array1 = ["Hola", "Chau"];	// Creo array1
const array2 = [1, 2, 3];	// Creo array2

array1 = array2;	// Esto da ERROR. Esto no se puede
```
- ¿Por qué no se puede? Porque como dijimos, array1 es una variable que apunta a una dirección de memoria. Y como la declaramos con "const", esa dirección de memoria no puede cambiar nunca. Vamos a apuntar siempre al mismo lugar. Es decir, siempre la misma referencia. Lo que sí puede cambiar es el VALOR UBICADO en esa dirección de memoria. Pero no la dirección de memoria en sí.

- **Si nosotros hiciéramos esto**: 

```typescript
const array1 = ["Hola", "Chau"];	// Creo array1
const array2 = array1;	// Creo array2, asignándole la misma ddm de array1
```
- Esto SÍ funciona, ya que estamos -inicializando- array2 con la misma referencia que array1. Es decir, array1 y array2 son dos variables distintas que apuntan a la misma dirección de memoria. 