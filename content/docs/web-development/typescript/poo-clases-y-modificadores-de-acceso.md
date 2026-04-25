---
title: "POO. Clases y modificadores de acceso"
description: "Programación Orientada a Objetos en TypeScript"
---


## Programación Orientada a Objetos en TypeScript

TypeScript mejora la Programación Orientada a Objetos (POO) en JavaScript agregando tipado estático, modificadores de acceso y más características que hacen que el código sea más seguro, estructurado y fácil de mantener.


## Clases

```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Juan", 25);
persona1.saludar(); // Muestra "Hola, soy Juan y tengo 25 años."
```

Así se ve una clase en TypeScript. Como vemos, es lo mismo que en JavaScript pero tipando atributos y métodos. Esto brinda mayor seguridad, ya que si intentamos asignar un número a la propiedad nombre, eso daría un error. También sirve para tener un mejor autocompletado y detección de errores en el VSCode.


## Modificadores de Acceso (public, private y protected)

En JavaScript no hay control de acceso real como lo hay por ejemplo en C#. Pero en TypeScript, tenemos tres modificadores para definir la visibilidad de propiedades y métodos en una clase.

- ¿Accesible desde la clase? en public SÍ, en private SÍ y en protected SÍ.
- ¿Accesible desde una subclase? en public SÍ, en private NO y en protected NO.
- ¿Accesible desde afuera? en public SÍ, en private SÍ y en protected NO.

Lógicamente, el modificador de acceso por defecto es "public". Entonces, si no especificamos nunca el modificador de acceso, como hicimos en Persona, todo va a ser público. "Private" es lo más restringido posible, porque sólo se puede acceder desde dentro del scope de la propia clase. "Protected" es lo mismo pero al menos permite acceder desde una subclase también, para que los hijos de una clase puedan acceder a ellos.


### Ejemplo con el mod. de acceso Private

```typescript
class CuentaBancaria {
  private saldo: number; // No se puede acceder desde fuera

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(monto: number): void {
    this.saldo += monto;
    console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo}`);
  }

  public mostrarSaldo(): void {
    console.log(`Saldo actual: ${this.saldo}`);
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500); // Muestra "Depósito exitoso. Nuevo saldo: 1500"

console.log(cuenta.saldo); // Va a dar error porque "saldo" es privado
cuenta.mostrarSaldo(); // Muestra "Saldo actual: 1500" porque "mostrarSaldo" es público
```

Private sirve para evitar que los datos sensibles sean modificados directamente desde fuera de la clase, y obliga a usar métodos específicos (como mostrarSaldo) par ainteractuar con los atributos internos.


### Ejemplo con el mod. de acceso Protected

```typescript
class Animal {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  protected hacerSonido(): void {
    console.log("Haciendo un sonido...");
  }
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }

  public ladrar(): void {
    console.log(`${this.nombre} está ladrando 🐶`);
    this.hacerSonido(); // Se puede acceder porque es protected
  }
}

const miPerro = new Perro("Rex");
miPerro.ladrar(); // "Rex está ladrando 🐶"
console.log(miPerro.nombre); // Va a dar error porque "saldo" es protected
```

Protected sirve para que las sublcases (en este caso, Perro) puedan acceder a los métodos y propiedades de su clase padre (en este caso, Animal). Y a la vez, no se exponen al exterior. 


## Readonly

Además de los modificadores de acceso, en TypeScript existe el "readonly" que hace que una propiedad solo se pueda a asignar en el constructor y no se pueda modificar después.

```typescript
class Configuracion {
  readonly version: string;

  constructor(version: string) {
    this.version = version;
  }
}

const config = new Configuracion("1.0.0");
console.log(config.version); // "1.0.0"
config.version = "2.0.0"; // Va a dar error porque no se puede modificar al ser readonly
```

## Getters y Setters (Es igual que en JavaScript)

Como sabemos, en JavaScript existen los get Propiedad() y set Propiedad(). En TypeScript esto funciona exactamente igual, y justamente nos puede servir para que se pueda acceder a atributos privados desde fuera.

```typescript
class Usuario {
  private _edad: number = 0;

  get Edad(): number {
    return this._edad;
  }

  set Edad(valor: number) {
    if (valor >= 0) {
      this._edad = valor;
    } else {
      console.log("La edad no puede ser negativa.");
    }
  }
}

const user = new Usuario();
user.Edad = 25; // Asigna un valor válido
console.log(user.Edad); // Muestra 25
user.edad = -5; // Muestra "La edad no puede ser negativa."
```

- Getter (get) permite obtener el valor de una propiedad privada sin acceder directamente a ella.
- Setter (set) permite validar los datos antes de asignarlos.