---
title: "Local Storage y Session Storage"
description: "Cómo persistir datos en el navegador usando LocalStorage y SessionStorage."
---


## Local Storage (Almacenamiento local)

El Local Storage es un lugar persistente del navegador donde podemos almacenar información de objetos y de arrays en forma de texto. Es decir, con strings en formato "clave": "valor". 

Para ver el Local Storage, hay que ir a las herramientas del desarrollador e ir a la sección:

```text
DevTools > Application > Storage > Local storage
```

El almacenamiento local es por página, es decir, se queda asociado a la página hasta que nosotros mismos lo borremos. Aunque cerremos la pestaña, cerremos el navegador, o apaguemos nuestra máquina, la información almacenada en el Local Storage persiste. La única forma de que se vaya es que nosotros mismos la borremos (mediante código, usando las DevTools, o en los ajustes del navegador).

### Métodos principales

Suponiendo que tenemos este objeto en JavaScript:

```javascript
const persona = {
	nombre: "Juan",
	edad: 20,
	email: "juancho@gmail.com",
	sexo: "M",
	vacunado: true,
};
```

Los métodos disponibles para interactuar con el almacenamiento son:

| Método | Descripción |
| :--- | :--- |
| `setItem(key, value)` | Guarda un elemento en el almacenamiento. |
| `getItem(key)` | Extrae el valor asociado a una clave. |
| `removeItem(key)` | Elimina un elemento específico. |
| `clear()` | Borra todo el contenido del almacenamiento. |

## Uso del Local Storage

### Método `setItem()`

```javascript
localStorage.setItem("persona", JSON.stringify(persona));
```

`setItem` recibe dos strings: la "key" (clave) y el "value" (valor). En este caso, estamos guardando un elemento con clave "persona" y con el valor de nuestro objeto convertido en string JSON mediante `JSON.stringify`.

### Método `getItem()`

```javascript
const personaGuardada = localStorage.getItem("persona");
```

`getItem` recibe el nombre de la clave que queremos extraer. Devuelve el string almacenado. Para convertirlo de vuelta a un objeto útil, usamos `JSON.parse`:

```javascript
const personaRecuperada = JSON.parse(localStorage.getItem("persona"));
```

Ahora `personaRecuperada` es un objeto real de JavaScript con el que podemos trabajar.

### Método `removeItem()`

```javascript
localStorage.removeItem("persona");
```

Elimina el elemento asociado a esa clave del almacenamiento local.

### Método `clear()`

```javascript
localStorage.clear();
```

Elimina absolutamente todos los elementos guardados en el Local Storage de ese sitio web.

---

## Trabajando con Arrays

La lógica es idéntica para los arrays. 

```javascript
const listaDePersonas = [
	{ nombre: "Mario", edad: 23 },
	{ nombre: "Lucia", edad: 26 }	
];

// Guardar array
localStorage.setItem("listaDePersonas", JSON.stringify(listaDePersonas));

// Recuperar array
let listaRecuperada = [];
const dataEnStorage = localStorage.getItem("listaDePersonas");

if (dataEnStorage) {
	listaRecuperada = JSON.parse(dataEnStorage);
    // También se puede usar el spread operator si queremos una copia:
    // listaRecuperada = [...JSON.parse(dataEnStorage)];
}
```

## Session Storage

El **Session Storage** funciona de forma idéntica al Local Storage (mismos métodos), pero con una diferencia clave: **la información no es persistente**. Los datos en Session Storage se borran automáticamente cuando se cierra la pestaña o el navegador. Es útil para datos temporales que solo importan durante la sesión actual del usuario.

| Métodos de Session Storage |
| :--- |
| `sessionStorage.setItem()` |
| `sessionStorage.getItem()` |
| `sessionStorage.removeItem()` |
| `sessionStorage.clear()` |