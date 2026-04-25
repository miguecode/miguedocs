---
title: "Desestructuración, Módulos, import y export"
description: "Desestructuración de objetos y arrays"
---


## Desestructuración de objetos y arrays

- Imaginemos que tenemos el siguiente objeto literal

```typescript
const persona = {
      nombre: "Juan",
      apellido: "Perez",
      edad: 30
}
```
- **Nosotros podemos desestructurarlo haciendo esto**: 
```typescript
let nombre = persona.nombre;
let apellido = persona.apellido;
let edad = persona.edad;
```
- Eso sería lo más básico, pero en JavaScript hay una mejor forma de hacerlo:

```typescript
let { nombre, apellido, edad } = persona;
```
- Este es el desestructurador de objetos. Para que funcione, el nombre de la variable tiene que ser el mismo que el nombre de la propiedad. Y da igual el orden en el que escribamos las variables. Yo podría hacer let { edad, apellido, nombre } y aun así va a asignar los valores correspondientes correctamente.

- **Pero es más flexible todavía**: si queremos, también podemos hacer que la variable que creamos tenga un nombre distinto a la propiedad. Y también podemos establecer valores por defecto. Así:

```typescript
let { nombre: firstName, apellido: lastName, peso = 70 } = persona;

console.log(firstName);  	// Muestra "Juan"
console.log(lastName);   	// Muestra "Pérez"
console.log(peso);       	// Muestra 30 (se asigna el valor por defecto)
```
- En este caso, las variables creadas son firstName, lastName y edad. A las dos primeras se le asignan los valores de la propiedad nombre y apellido, y a "peso", se le pueden asignar dos valores. Por defecto, establecimos que sea 70. El valor por defecto sólo se aplica si es que al momento de desestructurar el elemento no se encuentra ninguna propiedad llamada "peso". Entonces, como en este caso no hay, se usa el valor por defecto. Si "persona" tuviese la propiedad "peso" con algún valor, entonces se usaría ese.


- Esto también se puede hacer con arrays

```typescript
const lista = [23, 56, 43];
let [a, b, c] = lista; 	// En vez de llaves, ahora son corchetes [ ]
```
- En este caso, lo que estamos haciendo es crear 3 variables: "a = 23", "b = 56" y "c = 43".

- **También podemos omitir valores, así**: 

```typescript
const lista = [23, 56, 43, 78, 90];

let [a, , c, , e] = lista;  
console.log(a, c, e);  // Muestra 23 43 90
```
- En este caso, cuando desestructuramos al array lista, estamos capturando sólo el 23, el 43 y el 90. Omitimos al 56 y 78. Por eso hacemos [a, , c, , e]

```typescript
const lista = [1, 2, 3, 4, 5];
const [a, b] = lista;

console.log(a); // Muestra 1
console.log(b); // Muestra 2
```
- Si el array tiene más elementos que las variables que estamos declarando, se van a asignar sólo de acuerdo a la cantidad de variables que creamos. En este caso, el 3, 4 y 5 quedarían sin variables.

```typescript
const array = [1, 2];
const [variable1, variable2, variable3, variable4] = array;

console.log(variable1); // Muestra 1
console.log(variable2); // Muestra 2
console.log(variable3); // Muestra undefined
console.log(variable4); // Muestra undefined
```
- Si declaramos más variables que elementos existen en el array, las que sobren van a quedar undefined.


## Módulos, export e import

- Los módulos son nativos de JavaScript, y funcionan gracias a las palabras clave "export" e "import". Serían como nuestras librerías de JavaScript. Es decir, archivos JavaScript que contienen funciones, objetos, arrays, clases, etc. cuyo propósito es ser reutilizados por otros archivos JavaScript. 

- Si yo quiero que un archivo JavaScript exporte una función, hago uso de export:

```typescript
export function sumar(a, b) {
      return a + b;
}
```
- Y en el otro archivo, para importarla, se usa import:

```typescript
import { [elemento] } from "[la ruta de donde esté el archivo]";

import { sumar } from "./matematicas.js";
```
- De esta forma, tenemos la posibilidad de usar "sumar", y podemos hacer:

```text
console.log(sumar(3, 5));  // No escribimos el "matematicas. ''
```
- Con la importación nativa de JavaScript, sigue siendo el navegador quien solicita el archivo al servidor, pero ahora es el archivo scripts.js el que decide cuándo y cómo cargarlo.

- Y para que todo esto funcione, tenemos que especificar el tipo de script que le linkeamos al HTML y ponerle type="module". En el `<head>` del archivo HTML, hacemos el linkeo al archivo JS así:

```html
<script src="./scripts.js" type="module"></script>
```
- Y esto se hace en el script IMPORTADOR. Es decir, en el archivo JavaScript que va a importar elementos de otros archivos JavaScript.

- Por cierto, al poner type="module" en la etiqueta script, hace que no sea necesario agregarle el atributo booleano "defer". Porque ya lo incluye implícitamente.

- También podemos usar alias para las importaciones, usando "as", así:

```typescript
import { sumar as add, restar as subtract } from "./matematicas.js";

console.log(add(10, 5));   		// Muestra 15
console.log(subtract(10, 5));	// Muestra 5
```
- De esta forma, renombramos al elemento que desestructuramos.

- Y así como exportamos e importamos funciones, lo mismo podemos hacer con objetos, clases o arrays. Veamos un ejemplo de una clase con funciones estáticas, esto es muy común:

```typescript
export class Calculadora {
    static sumar(a, b) { return a + b; }
    static restar(a, b) { return a - b; }
}
```
- **Y después, lo importamos y usamos así**: 
```typescript
import { Calculadora } from "./matematicas.js";

console.log(Calculadora.sumar(3, 4));  // Muestra 7
```
### Otras formas de exportar o importar

- Otra opción es que, si vamos a exportar más de un elemento, podemos exportar todo en una línea. Le sacamos todos los "export" a los elementos, y usamos uno sólo así:

```typescript
export { sumar, restar, multiplicar, dividir }; 
```
- De esta forma, estamos literalmente exportando un objeto, el cual va a tener esos elementos.
- **Y para importar, hago lo mismo que antes**: 

```typescript
import { sumar, restar, multiplicar, dividir } from "./matematicas.js";
```
### También se puede hacer exportación por default, ya sea individual o grupalmente:

- **De forma individual**: 

```typescript
export default function sumar();
```
- **De forma grupal**: 

```typescript
export default { sumar, restar, multiplicar, dividir };
```
- **Y cuando importamos, hacemos**: 

```typescript
import matematicas from "./matematicas.js";
```
- Con el "default", lo que hacemos es importar todo directamente dentro de una variable que estamos creando llamada "matematicas", así que la usaríamos haciendo esto:

```text
matematicas.sumar(2, 4);
```
- La diferencia entre "default" y "no default" es que el intérprete lo primero que cuelga y que tiene disponible es lo que sea default. Lo que no lo es, lo va a interpretar en el momento en que lo lea por primera vez al hacer el barrido.

- También podemos usar " * " al importar, para importar todo el módulo.

Importación		Forma		Ejemplo
--------------------------------------------------------------------------------------------
Por nombre		{ }			import { sumar, restar } from "./matematicas.js";
Por defecto		sin { }		import matematicas from "./matematicas.js";
Todo el módulo	* as			import * as math from "./matematicas.js";


### ¿Qué export usar?

- Lo óptimo, por una cuestión de performance y de lógica básica, es que sólo importemos lo que vayamos a usar. Entonces, si en nuestro código solamente vamos a hacer uso de la función sumar y restar, y no vamos a usar multiplicar ni dividir, no tenemos que traernos a todo el objeto matematicas. Nos traemos solamente a sumar y restar, así:

import { sumar, restar } from "./matematicas.js";