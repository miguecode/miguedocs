---
title: "Introducción a JavaScript"
description: "JavaScript es un lenguaje de programación interpretado, dinámico, de alto nivel y de tipado débil."
---


## Introducción

JavaScript es un lenguaje de programación interpretado, dinámico, de alto nivel y de tipado débil. Se utiliza principalmente para crear interactividad en las páginas web, ya que permite modificar dinámicamente el contenido, reaccionar a eventos del usuario y realizar operaciones complejas en el navegador.

## Características principales

### 1. Es interpretado
Se ejecuta directamente en el navegador sin necesidad de compilación previa, lo que permite cambios y pruebas rápidas en el flujo de desarrollo.

### 2. Es de tipado dinámico
Significa que podemos cambiar los tipos de las variables en tiempo de ejecución. No estamos atados a un tipo fijo una vez declarada la variable.

```javascript
let dato = "Hola Mundo";
dato = 2;
console.log(typeof dato); // Muestra "number"
```

Esto demuestra la naturaleza dinámica del lenguaje: cambiamos el tipo de la variable `dato` de un string a un number. En lenguajes estáticos (como C# o TypeScript), esto no sería posible sin generar un error.

### 3. Es de tipado débil
No es obligatorio indicar el tipo de dato al declarar variables, ya que JavaScript realiza la **coerción de tipos**. El motor convierte automáticamente los tipos cuando lo considera necesario para completar una operación:

```javascript
console.log("5" + 2);   // "52" (convierte el 2 en string y concatena)
console.log("5" - 2);   // 3    (convierte el "5" en número y resta)
console.log(true + 1);  // 2    (true se convierte en 1)
```

El lenguaje deduce el tipo necesario según el contexto, a diferencia de los lenguajes de tipado fuerte donde las operaciones entre tipos distintos suelen estar restringidas.

### 4. Es de alto nivel
Se abstrae de los detalles del hardware (manejo de memoria, punteros, registros, etc.). Nos permite enfocarnos en resolver problemas lógicos con una sintaxis entendible para el ser humano, sin preocuparnos por tareas de bajo nivel (como ocurre en Assembly o C).

### 5. Es multi-paradigma
Maneja más de una forma para resolver problemas o estructurar programas:
*   **Programación Orientada a Objetos (POO)**: Mediante prototipos (y clases en ES6).
*   **Programación Funcional**: Uso de funciones puras, callbacks, y métodos como `map`, `filter`, `reduce`.
*   **Programación Basada en Eventos**: Reacción a acciones como clicks o scrolls.

### 6. Es Case Sensitive
Distingue entre mayúsculas y minúsculas. No es lo mismo una variable llamada `miVariable` que una llamada `mivariable`.

## Otras características importantes

*   **Basado en Prototipos**: A diferencia de lenguajes como Java, utiliza prototipos para la herencia y reutilización de código (aunque ES6 introdujo la palabra clave `class` para facilitar la sintaxis).
*   **Orientado a Eventos**: Responde dinámicamente a interacciones del usuario.
*   **Universal**: Se ejecuta en cualquier navegador moderno, independientemente del sistema operativo.
*   **Asíncrono**: Gracias a los callbacks, promesas y `async/await`, permite realizar tareas en segundo plano sin bloquear el hilo principal.

## Usos más comunes

*   Creación de páginas web interactivas.
*   Desarrollo de aplicaciones robustas mediante frameworks (React, Angular, Vue).
*   Desarrollo del lado del servidor (Backend) con Node.js.
*   Creación de APIs y microservicios.

## Historia y curiosidades

*   **Origen**: Creado en 1995 por **Brendan Eich** en Netscape Communications. Fue diseñado inicialmente en solo 10 días para complementar HTML.
*   **Nombres anteriores**: Originalmente se llamó **Mocha**, luego **LiveScript**, y finalmente JavaScript por una estrategia de marketing (aprovechando la popularidad de Java).
*   **JavaScript != Java**: A pesar del nombre, son lenguajes completamente distintos con filosofías y usos diferentes.

## Hola Mundo

```javascript
console.log("Hola Mundo!");
alert("Hola Mundo!");
```