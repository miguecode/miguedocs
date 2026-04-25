---
title: "Interfaces y comparación con Clases. Y Shapes"
description: "Una interface en TypeScript sirve para definir la forma (estructura) que debe tener un objeto. Es como un contrato: si un objeto 'implementa' una interface, est..."
---


## Interfaces

Una interface en TypeScript sirve para definir la forma (estructura) que debe tener un objeto. Es como un contrato: si un objeto "implementa" una interface, está obligado a tener exactamente las propiedades y tipos definidos en ella. Pero es sólo eso. Es decir, no tienen lógica interna, es sólo marcar una estructura a respetar.

### **Sirven para**: 
- Definir una estructura en objetos, clases o arrays.
- Definir la forma de funciones (qué deben recibir y qué deben retornar).
- Tener reutilización y consistencia en tipos grandes o repetitivos.

**Veamos un ejemplo básico**: 

```typescript
interface Persona {
  nombre: string;
  apellido?: string; // El " ? " significa que puede o no tener apellido
  edad: number;
  saludar(): void;
}

const persona1: Persona = {
  nombre: "Lucas",
  edad: 23,
  saludar() {
    console.log("Hola!");
  },
};
```

TypeScript se asegura de que persona1 tenga todas las propiedades que la interface requiere.

**Vamos a ver un ejemplo de interfaz de función**: 

```typescript
interface Operacion {
  (a: number, b: number): number;
}

const suma: Operacion = (x, y) => x + y;
```

En este caso, como suma implementa la interfaz Operacion, está obligado a cumplir con lo que tiene la interfaz, que en este caso es una función que recibe 2 parámetros de tipo number, y que retorna un number.

**Veamos otro ejemplo, usando objetos**: 

```typescript
interface Diccionario {
  [clave: string]: string;
}

const dic: Diccionario = {
  hola: "hello",
  mundo: "world",
};
```

En este caso, creamos una interfaz Diccionario, la cual indica que va a tener propiedades string con valores string también. Después, le implementamos Diccionario a "dic", para que cumpla con esas reglas.

**Las interfaces también se pueden heredar, así**: 

```typescript
interface Animal {
  nombre: string;
}

interface Perro extends Animal {
  raza: string;
}

const miPerro: Perro = {
  nombre: "Toby",
  raza: "Labrador",
};
```

### Clases implementando interfaces

Las clases pueden implementar interfaces, de la siguiente manera:

```typescript
interface SerVivo {
  respirar(): void;
}

class Humano implements SerVivo {
  respirar() {
    console.log("Respirando...");
  }
}
```

En este caso, la clase Humano implementa a SerVivo, eso significa que Humano está obligado a tener un método respirar() y que devuelva void. Es decir, tiene ese contrato firmado y debe cumplirlo o da error.

## ¿Interfaces o clases? ¿Cuándo usar cada una?

|Característica				|				Interfaces	|	Clases |
| --- | --- | --- |
| Únicamente definen estructura				|				✅ Sí		|				❌ No (tienen lógica también) |
| Se usan para tipar objetos y contratos |				✅ Sí		|				⚠️ Posible, pero no ideal |
| Pueden extender otras interfaces |				✅ Sí		|				✅ Sí |
| Soportan implementación múltiple				|				✅ Sí		|				❌ No (solo una clase base) |
| Tienen lógica interna (constructores, métodos)	|				❌ No		|				✅ Sí |
| Se instancian con new						|				❌ No		|				✅ Sí |

**Conviene usar interfaces cuando**: 
- Solo necesitamos definir la forma de un objeto (como un contrato).
- Queremos que varias clases u objetos cumplan con la misma estructura.
- Necesitamos tipar funciones, objetos, arrays, etc.
- Estamos trabajando con tipos de datos puros, sin necesidad de lógica interna.

**Conviene usar clases cuando**: 
- Necesitamos crear instancias (new Clase()).
- Necesitamos lógica, métodos, constructores.
- Estamos trabajando con POO y jerarquías de herencia reales.
- Queremos encapsular comportamientos y estado.


### Resumen visual

```typescript
// Interface → define estructura
interface Usuario {
  nombre: string;
  edad: number;
}

// Clase → define estructura y lógica
class Usuario {
  constructor(public nombre: string, public edad: number) {}

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
```

## Shapes en TypeScript

```text
Shape = Forma/Formato
```

Las clases, las interfaces y los métodos tienen SHAPES. Es decir, formatos.

**Veamos una clase Persona**: 

```typescript
class Persona {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}
}
```

El scope de la clase Persona (lo que está entre llaves {}), es su Shape.

Ahora, veamos una interfaz llamada PersonaInterface:

```typescript
interface PersonaInterface {
	name: string;

	getName(): string;
	setName(name: string): void;
}
```

Como podemos ver, la clase Persona y la interfaz PersonaInterface tienen el mismo formato, es decir, el mismo shape. Esto significa que nosotros podemos hacer esto tranquilamente:

```typescript
const persona: Persona = new Persona(name: "Miguel");
let personaPosible: PersonaInterface = persona;
```

Eso no dará error, funciona bien. Y es así ya que la clase y la interfaz tienen el mismo shape.
De hecho, si yo creara una clase llamada Persona2 y le copio y pego el mismo shape que tiene la clase Persona, voy a poder hacer exactamente lo mismo. Hay que saber que esto es posible y no imposible.
