---
title: "Herencia Prototípica (Herencia en Fun. Constructoras)"
description: "Herencia Prototípica"
---

## Herencia Prototípica

Para aplicar herencia en JavaScript, tenemos que trabajar con prototipos. Por eso se llama herencia prototípica. Pero vamos a ir desglosando este tema paso a paso:

Vamos a tener dos funciones constructoras Animal y Mascota:

```javascript
function Animal(tipo, edad, sexo) {
	this.tipo = tipo;
	this.edad = edad;
	this.sexo = sexo;
}

const animal = new Animal("vaca", 3, "F");
console.log(animal);
```

Recordemos que al ser un ciudadano de primera clase, la función constructora Animal también es un objeto. Por lo tanto, como cualquier objeto, tiene dentro un objeto llamado prototype.

```javascript
Animal.prototype.saludar = function () {
	console.log(` Tipo: ${this.tipo} - Sexo: ${this.sexo} - Edad: ${this.edad}` ); 
};

Animal.prototype.dormir = function () {
	console.log(` Soy un animal y estoy durmiendo` ); 
};
```

Le agregamos dos métodos a la función constructora/clase Animal. Y ahora, "saludar" y "dormir" están dentro del objeto prototype. Es decir, dentro de Animal.prototype. Esto lo habíamos visto en el apunte de funciones constructoras/clases.

**Ahora, creemos Mascota**:

```javascript
function Mascota (nombre, tipo, edad, sexo, vacunado) {
	Animal.call(this, tipo, edad, sexo);   // Le pasamos el "this" de Mascota a la f.c Animal
	this.nombre = nombre;
	this.vacunado = vacunado;
}

Mascota.prototype.sonar = function(sonido) {
    console.log(sonido);
}

const mascota1 = new Mascota("Lolo", "perro", 9, "macho", true);
```

A este punto, conseguimos que Mascota herede correctamente las propiedades de Animal, es decir, "tipo", "edad" y "sexo". Como Animal y Mascota son distintos scopes, cada uno tiene su propio "this", y por eso es que usamos el método call (así como también pudimos haber usado apply o bind). Además, le agregamos un método "sonar" a su prototipo.

Lo que hacemos en la línea: `Animal.call(this, tipo, edad, sexo);` es ejecutar la función constructora Animal, pero sin que use su propio this. Es decir, hacemos que Animal no genere su propio this como haría normalmente, sino que use el this que le pasamos nosotros como primer parámetro. ¿Y qué this le pasamos por primer parámetro? El this de Mascota. Por eso, justamente, le pasamos "this", ya que estamos en el scope de Mascota.

Entonces, cuando ejecutamos el call, el código lo que hace es pasar por el scope de "Animal", y cada vez que lee "this.tipo", "this.edad" y "this.sexo", en realidad ese "this" no es el this de Animal (el suyo). Sino que va a ser el this de Mascota, ya que es el this que le pasamos con el método "call". A esto se lo llama unificar los this, estoy haciendo que this.nombre, this.vacunado, this.tipo, this.edad y this.sexo estén colgados a la misma referencia que el this.tipo, this.edad y el this.sexo.

Pero como dijimos al principio, con esto lo único que hicimos fue heredar las propiedades. Pero esto todavía no es herencia prototípica, porque los prototipos siguen siendo distintos. Es decir, Mascota en realidad todavía no puede acceder a los métodos de Animal. Y... ¿Por qué? Bueno, eso es porque Animal tiene sus métodos anidados dentro de su objeto prototype. Es decir, dentro de Animal.prototype. Y Mascota, si bien hereda las propiedades de Animal, no hereda su prototipo, sino que tiene uno distinto (Mascota.prototype). Y en ese prototipo Mascota.prototype, no están los métodos de Animal.prototype.

**Vamos a ver cómo solucionar esto**:

## Herencia Prototípica 

Como vimos recién, Mascota heredó correctamente las propiedades de Animal, con el fin de poder reutilizarlas. Eso está perfecto, pero hay un problema: a Mascota le falta heredar los MÉTODOS de Animal.

```javascript
mascota1.saludar(); // No funciona, Mascota no tiene "saludar". Lo tiene Animal. 
mascota1.dormir(); // No funciona, Mascota no tiene "dormir". Lo tiene Animal. 
```

Como vemos, Mascota no tiene el método saludar() ni dormir(). Esto es así porque esos dos métodos están dentro de Animal.prototype. Y Mascota no tiene ese prototipo, tiene Mascota.prototype. Entonces lo que tenemos que hacer es conectar esos dos prototipos.

**Y para eso, vamos a ver la siguiente función**:

## Función setPrototypeOf

La función Object.setPrototypeOf() es un método del objeto Object, que sirve para conectar dos prototipos. Vamos a probarlo:

```javascript
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
```

El primer parámetro es el prototipo de la función constructora/clase hija, y el segundo, el del padre. En este caso, conectamos el prototipo de Mascota con el de Animal. Así que ahora, Mascota tiene el prototype de Animal, y por lo tanto va a poder acceder a los métodos "saludar" y "dormir", a los que antes no podía. Y el método "sonar", también lo sigue teniendo disponible, ya que ese siempre lo tuvo en su propio prototipo.

```javascript
mascota1.sonar(); // Funciona ya que Mascota siempre tuvo este método en su prototipo 
mascota1.saludar(); // Ahora funciona gracias a que conectamos los dos prototipos 
mascota1.dormir(); // Ahora funciona gracias a que conectamos los dos prototipos 
```

Esto que hicimos recién es la verdadera HERENCIA PROTOTÍPICA, es decir, hicimos que el prototipo Mascota herede del prototipo Animal. También se le dice "armar la cadena prototipal".

```javascript
console.log(animal1);
console.log(mascota1);
```

Acá podemos ver como Mascota ahora contiene al prototype Animal (el cual contiene al prototype Object). Y obviamente a su vez, Animal, contiene el prototype Object.

**La cadena prototipal, internamente quedaría así**:

mascota1 ---> Mascota.prototype ---> Animal.prototype ---> Object.prototype

**Veamos este detalle**:

```javascript
console.log(mascota1);    // Muestra: Mascota { tipo: "raton", edad: 2, sexo: "M", etc. }
```

Eso que está entre { } es un objeto. Y lo que podemos ver con las herramientas del desarrollador, es que ese objeto de tipo Object fue construido por la función constructora Mascota.

**Y cuando hacemos**:

```javascript
console.log(animal1);    // Muestra: Animal { tipo: "raton", edad: 2, sexo: "M", etc. }
```

Eso que está entre { } es un objeto. Y lo que podemos ver con las herramientas del desarrollador, es que ese objeto de tipo Object fue construido por la función constructora Animal.

Para redondear el tema de la Herencia Prototípica:

Como vimos, cuando usamos "call" (o apply, o bind) para pasarle el "this" de Mascota a Animal, lo que hacemos es aprovecharnos de las propiedades de Animal, para que también las posea Mascota. Pero no lo hacemos así con los métodos. Entonces, para que Mascota reutilice los métodos de Animal, lo que hacemos es engancharle el prototype. Y para eso usamos el método:

```javascript
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
```

## "Sobreescribir" un método

Como vimos, Animal.prototype tiene dentro un método llamado saludar. Y con la herencia prototípica, conseguimos que Mascota se conecte a ese Animal.prototype y por ende, pueda acceder a saludar. Ahora, lo que vamos a hacer es que Mascota.prototype tenga su propia función saludar:

```javascript
Mascota.prototype.saludar = function () {
    console.log(`Tipo: ${this.tipo} - Nombre: ${this.nombre} - Sexo: ${this.sexo} - Edad: ${this.edad} - Vacunado: ${this.vacunado ? "vacunado" : "no vacunado"}`);
};
```

De esta forma, "sobreescribimos" al método saludar. Que en realidad, no es que literalmente lo sobreescribimos, sino que lo -ocultamos- dentro del contexto de Mascota.prototype. Es decir, si bien ahora Mascota.prototype tiene su propio método saludar() el cual es distinto al de Animal.prototype, el saludar() de Animal.prototype sigue existiendo y podemos seguir ejecutándolo manualmente.

```javascript
mascota1.saludar(); 	// Ejecuta el método de Mascota.prototype (el que creamos recién)
```

## Otra forma de heredar prototipos

Otra forma común de establecer la herencia prototípica es usando Object.create:

```javascript
Mascota.prototype = Object.create(Animal.prototype);
Mascota.prototype.constructor = Mascota;
```

Como vimos en esa segunda línea, es buena práctica reasignar el constructor. Es importante para que el constructor sea Mascota, y no Animal.

### Diferencias entre Object.create y Object.setPrototypeOf

Object.create crea un nuevo objeto basado en el prototipo de Animal, sin modificar el prototipo original de Mascota.

Object.setPrototypeOf modifica directamente el prototipo de Mascota.prototype, lo cual puede afectar el rendimiento en algunos casos.