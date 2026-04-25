---
title: "Objetos. Cómo se crean, y qué son los Keys-Values"
description: "Objetos en JavaScript"
---


## Objetos en JavaScript

- Un objeto es un tipo de dato no primitivo, el cual funciona como un contenedor de propiedades y valores (key-value). En la teoría de las estructuras de datos, un objeto de JavaScript se comporta como una Hash Table.

- Hay 3 formas de declarar un objeto en JavaScript. Pero antes de verlas, hay que entender algo clave. Hay un apunte que habla sobre los Wrapper Objects y los prototipos. También uno sobre función constructora y clases. Esos dos apuntes tienen relación con este, ya que varias veces vamos a ver la expresión "Object" con mayúscula. Pero tampoco es obligatorio ver todo eso para poder entender esto.

- Por ejemplo, una función también es un objeto en JavaScript.


## 1. Objeto literal (Objeto "On the fly")

```typescript
const objeto1 = { };
console.log(objeto1);  // Muestra { }
```
- Esto nos va a mostrar "{ }" en la consola. Un objeto vacío. Si lo analizamos, vamos a ver que tiene un [Prototype]: Object, el cual dentro tiene un constructor, entre otras cosas. Eso es importante pero lo vamos a ver más adelante.

```typescript
const objetoLiteral = {
    cadena: "Palabra",	// Las keys también pueden escribirse entre comillas " "
    numero: "518",
    array: [2, 4, 1, 7, 9],
    objeto: { a:"Juan", b:18, c:false },
    booleano: true,
    metodo: function() {
        console.log("Hola Mundo");
    },
    metodo2 () {		// Acá, la key va a tener el mismo nombre que la función (es decir, metodo2)
    	console.log("Chau Mundo");
    }
```
| "3D": true, | // "3D" va entre " " porque empieza con un número |
| --- | --- |
| "Una Key": "Algo" | // "Una Key" va entre " " porque tiene un espacio |
```typescript
}

let atributo = "objeto";

console.log(objetoLiteral);
console.log(objetoLiteral.cadena);
console.log(objetoLiteral["cadena"]);
console.log(objetoLiteral[atributo]);
```
- Como vemos, podemos acceder a sus propiedades con el operador " . " o con los [ ].

```typescript
console.log(objetoLiteral["3D"]);
console.log(objetoLiteral["Una Key"]);
```
- En estos dos casos particulares, para acceder a estas propiedades nos vemos obligados a usar los [ ]. El operador " . " no funcionaría para acceder a ellas. Y eso es porque en el caso de la propiedad 3D, su nombre empieza con un número. Entonces, no se puede usar el " . ", y en caso de "Una Key"
- Esta es la única forma de acceder a esas propiedades, con los []. Es así porque no podemos usar el operador " . " para acceder a una propiedad que empieza con un número, y tampoco a una propiedad que tiene un espacio vacío.

- **¿Por qué metodo2 no tiene la sintaxis de Key**: Value, como sí lo tiene metodo1? Por nada en particular, simplemente es otra forma de escribirlo. Es decir, es otra sintaxis, pero con el mismo resultado, ya que en realidad, si no especificamos la key como en metodo2, automáticamente el nombre de la key va a ser el mismo que el de la función, que en este caso es metodo2. Entonces, es como si estuviesemos viendo esto:

```typescript
metodo2: function () {...}
```
### Agregarle propiedades o métodos al objeto

- En JavaScript, podemos agregarle propiedades o métodos a un objeto, de distintas maneras:

objetoLiteral["sexo"] = "M";  // Le creo una propiedad nueva usando los [" "]
objetoLiteral.localidad = "Avellaneda";  // Le creo una propiedad nueva usando el opeardor " . "

objetoLiteral.saludar = function saludar() { console.log("Chau"); };
- Le creo un nuevo método llamado saludar usando el operador " . "

objetoLiteral["presentarse"] = function presentarse() { console.log("Hola!"); };
- Le creo un nuevo método llamado despedir usando los [" "]

### Ejecutar los métodos del objeto

objetoLiteral.despedir();  // Lo ejecutamos con el operador " . "
objetoLiteral["presentarse"]();  // Lo ejecutamos con los [" "]


## 2. Objeto a través de una función constructora

```typescript
const objeto2 = new Object();
console.log(objeto2);
```
- Esto da el mismo resultado que la forma anterior.
```typescript
const objeto3 = new Object(124);
```
- Esto hace que el objeto "objeto3" sea un "Number", con sus características y métodos propios de un número.
```typescript
const objeto4 = new Object("Hola");
```
- Esto hace que el objeto "objeto4" sea un "String", con sus características y métodos propios de un string.
- Como dijimos en la introducción, todo este tema de "Object", "Number", "String" y demás, lo vemos en otro apunte. Es un tema complejo e importante para entender todo a profundidad.


## 3. Objeto a través de Object.create()
```typescript
const objeto7 = Object.create(null);
```
- De esa forma, estamos creando un objeto vacío { } llamado objeto7. Si bien esta forma es válida, es mucho más sencillo usar la primer o segunda forma.



## Keys y Values	

- Como dijimos, los objetos tienen propiedades y métodos. El objeto Object (que además de ser un objeto es una función constructora/clase) tiene 3 métodos útiles: entries, keys y values. Vamos a verlos.

```typescript
const entradas = Object.entries(objetoLiteral);
```
- Entries devuelve un array de arrays. Cada elemento de ese array, es un array que va a tener dentro dos elementos: una key y un value (el nombre de la propiedad, y su valor).
```typescript
console.log(entradas); // Muestra el "key = value" de cada entrada, es decir, cada propiedad
[["nombre", "Juan"], ["apellido", "Perez"], ["edad", 25]]
```
- También existe el array de keys (las claves del objeto, es decir, el nombre de cada propiedad).
```typescript
const keys = Object.keys(objetoLiteral); // Muestra todos los nombres de propiedades del objeto
["nombre", "apellido", "edad"]
```
- Y así como existen el array "Entries" y "Keys", existe el de Values (los valores de cada propiedad)

```typescript
const valores = Object.values(objetoLiteral); // Muestra todos los valores de las propiedades del objeto
["Juan", "Perez", 25]
```
- **Para dejarlo claro**: 

```typescript
const persona = { nombre: "Miguel", edad: 23, vacunado: true };

console.log(Object.entries(persona)); // [["nombre", "Miguel"], ["edad", 23], ["vacunado", true]]
console.log(Object.keys(persona));    // ["nombre", "edad", "vacunado"]
console.log(Object.values(persona));  // ["Miguel", 23, true]
```
## Object.freeze() y Object.seal()

- Como vimos recién, Object tiene las propiedades entries, keys y values (y muchas más). Pero ahora vamos a ver dos métodos que tiene este objeto, que son freeze y seal.

- Estos dos métodos sirven para proteger los objetos, para que no se modifiquen accidentalmente.

- **Object.freeze(objeto)**: Impide que se agreguen, modifiquen o eliminen propiedades.
- **Object.seal(objeto)**: Impide agregar o eliminar propiedades, pero permite modificar valores existentes.

```typescript
const persona = { nombre: "Juan" };
Object.freeze(persona);

persona.nombre = "Pedro"; // No cambia, porque está congelado
console.log(persona.nombre); // Muestra "Juan", es decir, no cambió
```