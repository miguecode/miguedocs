---
title: "Herencia y Propiedades en Clases"
description: "Herencia con clases"
---

## Herencia con clases

Vamos a ver cómo se aplica herencia con la sintaxis de clase, pero NO como se aplica en funciones constructoras. La herencia en funciones constructoras se llama herencia prototípica y eso lo vemos en otro apunte. En este caso vamos a ver herencia con clases.

```javascript
class Animal {
	constructor(tipo, edad, sexo) {
		this.tipo = tipo;
		this.edad = edad;
		this.sexo = sexo;
	}

	saludar() {
		console.log(`Tipo: ${this.tipo} - Sexo: ${this.sexo} - Edad: ${this.edad}`);
	};

	dormir() {
		console.log("ZzZzZ");
	}
}

class Mascota extends Animal {
	constructor(nombre, tipo, edad, sexo, vacunado) {
		super(tipo, edad, sexo);
		this.nombre = nombre;
		this.vacunado = vacunado;
	}

	saludar() { /* ... */ }; 
	cagar() { /* ... */ };
}

const mascota1 = new Mascota("Lolo", "perro", 9, "macho", true);
```

Analicemos la primer línea de la declaración Mascota:

```javascript
class Mascota extends Animal
```

Lógicamente, esto significa que Mascota hereda de Animal. O que Mascota se extiende de Animal, es decir, es una extensión de esa clase padre.

A diferencia de la herencia en funciones constructoras, en las clases no es necesario usar call, apply o bind. Sino que simplemente usamos "super". Super hace referencia a la clase de la cual nos estamos extendiendo, que en este caso sería la clase base Animal.

```javascript
super(tipo, edad, sexo); 	// Así se hace en clases
```

**Es lo mismo que**:

```javascript
Animal.call(this, tipo, edad, sexo)  // Así se hace en funciones constructoras
```

Es importante que si una clase hija tiene un constructor, es obligatorio llamar a super() antes de usar this, ya que this en una subclase no está definido hasta que se invoque a super(), entonces JavaScript lanzará un error. Entonces, siempre que declaremos un constructor en una clase hija, su primer línea tiene que ser el super().

## Propiedades

```javascript
class Animal2 {
	constructor(tipo, edad, sexo){
		this.tipo = tipo;
		this.edad = edad;
		this.sexo = sexo;
	}

	set Edad(value) {  // Es una función, pero al tener el "set" adelante, funciona como PROPIEDAD
		// Validaciones			
		this.edad = value;
	}
	get Edad() {         // Es una función, pero al tener el "get" adelante, funciona como PROPIEDAD
		// Validaciones			
		return this.edad;
	}
}
```

Ahora, Edad es una propiedad virtual de Animal2.

```javascript
const animal2 = new Animal2("perro", 14, "macho");
```

| Código | Explicación |
| :--- | :--- |
| `animal2.Edad = 10;` | Usamos el "SET" de la propiedad Edad para asignarle un valor |
| `let edad = animal2.Edad;` | Usamos el "GET" de la propiedad Edad para recibir su valor |

Y hay que entender que al usar un set o un get, literalmente estamos ejecutando esas funciones. Entonces, nosotros podemos escribir código en ellas, y se van a ejecutar. Obviamente esto sirve para crear validaciones o modificaciones adicionales.

```javascript
set Edad(value) {
	if (value > 17) {
		this.edad = value;
	}
}

animal2.Edad = 16;  // Llamamos correctamente al setter Edad, pero no pasará la validación
```

En este caso, estamos intentado setear "16" en la propidad edad de animal2. Pero no lo estamos consiguiendo. Ya que cuando usamos el set Edad, estamos pasandole un 16. Y la función tiene una validación que, si el valor que le pasamos no es mayor a 17, entonces no le asigna el valor que le pasamos.

Por ende, en este caso la propidad "edad" de animal2, NO va a ser 16.

**Lógicamente, hacer esto sería distinto**:

```javascript
animal2.edad = 16;  // Asignamos -directamente- el valor 16 en la propiedad "edad"
```

En este caso no estamos usando "Edad", es decir, el setter Edad. Sino que estamos modificando directamente a la propiedad "edad" de animal2. Así que en este caso no hay ningún tipo de validación previa, y efectivamente `animal2.edad` va a pasar a tener el valor 16 que le asignamos.