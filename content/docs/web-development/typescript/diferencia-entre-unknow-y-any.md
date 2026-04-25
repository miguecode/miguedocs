---
title: "Diferencia entre unknow y any"
description: "En TypeScript, unknown y any son tipos especiales, pero cada uno se usa en situaciones distintas y con un propósito diferente.  Any se usa cuando realmente quer..."
---


## Unknow vs Any

- En TypeScript, unknown y any son tipos especiales, pero cada uno se usa en situaciones distintas y con un propósito diferente.  Any se usa cuando realmente queremos evitar la verificación de tipo y unknow se usa cuano queremos permitir flexibilidad como any, pero también queremos tener la seguridad de que se va a verificar el tipo antes de realizar operaciones. Unknow nos obliga a inferir el tipo previo a usarlo.


### Any

- **Usar any es como decir**: "No me importa el tipo de este valor, así que va a ser válido para cualquier operación, sin validación alguna". Any puede guardar cualquier cosa todo el tiempo.

- TypeScript no hace ningún chequeo sobre el tipo cuando lo usamos, osea que podemos realizar cualquier operación sin validación, y TypeScript no nos va a marcar error.

```typescript
let valor: any = "Hola";
valor = 42; // El tipo se cambia sin problema

valor.toFixed(2); // Se puede hacer, pero puede generar errores en ejecución si el tipo no es correcto
```
### Unknown

- Puede almacenar cualquier cosa como any, pero con la restricción de que no se puede usar ese valor directamente sin antes validarlo. 

- Es decir, se le guarda cualquier cosa como any, pero si después queremos hacer algo con el valor, lo tenemos que validar o va a dar error. La validación puede ser con "typeof", "stanceof", o usando la aserción de tipo "as".

```typescript
let valor: unknown = "Hola";
valor = 42;
console.log(valor.toFixed(2)); // Esto va a dar ERROR, porque no estamo validando

if (typeof valor === "number") {
    console.log(valor.toFixed(2)); // Esto sí es válido, porque estamos haciendo una validación previa
}
```
- Entonces, unknown es más seguro que any, ya que nos obliga a hacer validaciones antes de operar con el valor. Eso evita errores en tiempos de ejecución. Básicamente se usa cuando no conocemos de antemano el tipo de un valor, pero queremos forzar la validación antes de usarlo.