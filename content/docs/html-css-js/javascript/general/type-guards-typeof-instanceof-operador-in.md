---
title: "Type Guards (typeof, instanceof, operador in)"
description: "Identifica el tipo de una variable en tiempo de ejecución para aplicar lógica específica mediante Narrowing."
---

## Type Guards

Los **Type Guards** (guardianes de tipo) son expresiones o funciones JavaScript que le permiten al motor identificar el tipo de una variable en tiempo de ejecución dentro de un contexto determinado. Básicamente, son herramientas que permiten hacer **Narrowing** (reducir o especificar el tipo mediante lógica programática).

Aunque este concepto es sumamente potente en TypeScript debido a su sistema de tipos estático, en JavaScript puro sigue siendo fundamental para validar datos antes de operar con ellos.

Existen 4 formas principales de implementar Type Guards:

## 1. Typeof Guard (Primitivos)

Se utiliza para evaluar tipos de datos primitivos en tiempo de ejecución.

```javascript
function procesar(valor) {
  if (typeof valor === "string") {
    // Aquí JavaScript sabe que 'valor' es un string
    console.log(valor.toUpperCase());
  } else if (typeof valor === "number") {
    // Aquí sabe que es un número
    console.log(valor.toFixed(2));
  }
}
```

> [!NOTE]
> Recuerda que `typeof` devuelve `"function"` para las funciones y `"object"` para `null` (bug histórico).

## 2. Instanceof Guard (Instancias de clases)

Sirve para validar si un objeto es una instancia de una clase específica o de una clase que hereda de ella.

```javascript
class Perro {
  ladrar() { console.log("¡Guau!"); }
}

class Gato {
  maullar() { console.log("¡Miau!"); }
}

function hacerSonido(animal) {
  if (animal instanceof Perro) {
    animal.ladrar(); 
  } else if (animal instanceof Gato) {
    animal.maullar();
  }
}
```

Funciona únicamente con objetos creados a través de clases (o funciones constructoras) y no con interfaces (en el caso de TypeScript).

## 3. Operador `in` (Chequeo de propiedades)

Devuelve `true` si el objeto contiene la propiedad especificada. Es muy útil para trabajar con objetos literales que no provienen de una clase.

```javascript
function mostrarInfo(persona) {
  if ("salario" in persona) {
    // Si tiene la propiedad salario, asumimos que es un empleado
    console.log("Salario:", persona.salario);
  } else if ("compras" in persona) {
    // Si tiene compras, es un cliente
    console.log("Total compras:", persona.compras);
  }
}
```

## 4. Type Guards personalizados (Funciones)

Podemos crear nuestras propias funciones de validación. En TypeScript, esto se potencia con el predicado de tipo `is`.

```typescript
// Ejemplo con sintaxis de TypeScript para ilustrar el concepto de predicado
function esAdmin(persona): persona is Admin {
  return persona.tipo === "admin";
}

function saludar(persona) {
  if (esAdmin(persona)) {
    // Gracias al guard personalizado, aquí se accede a 'permisos' con seguridad
    console.log("Permisos:", persona.permisos);
  } else {
    console.log("Hola", persona.nombre);
  }
}
```

En este caso, la clave es el retorno de la función. Si devuelve `true`, el compilador (y nuestra lógica) entiende que la variable es del tipo esperado.