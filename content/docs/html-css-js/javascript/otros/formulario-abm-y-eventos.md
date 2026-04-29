---
title: "Formulario ABM y eventos"
description: "Bien. Ahora vamos a hacer un formulario para una Alta Baja y Modificación de personas."
---

Ahora vamos a hacer un formulario para una Alta, Baja y Modificación de personas.

Creamos un `<form>` con algunas entradas. Todo muy básico. A la tabla la movimos a un `div` el cual va a estar en una sección. Y en otra sección, va a estar el formulario.

Al formulario le vamos a agregar un escuchador de evento `submit` así:

```javascript
const $formulario = document.forms[0];  // document.forms es un array que contiene a todos los formularios existentes en el HTML

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();   // Elimino el comportamiento por defecto del evento
  console.log("Enviando...");
});
```

`submit` es el nombre del evento y `e` es el evento recibido. Lo que dice esa línea es: Cuando el formulario lance el evento submit, realizá esta acción: [función]. En este caso la función es una función 'arrow' o 'flecha', que es la conocida expresión lambda. Tiene como parámetro una `e` que recibe a un event, y después tira un `console.log()`.

## localStorage

Vamos a comentar la importación de la data `personas` y vamos a trabajar con el `localStorage`.

```javascript
import { personas as personasMockaroo } from "../data/personas.js";

// Ahora, personas tiene un alias llamado 'personasMockaroo'.

localStorage.setItem("personas", JSON.stringify(personasMockaroo));
// Seteo en el localStorage un elemento con 'key' llamada 'personas'. Y su valor, va a ser todo el array de personas que me importo de 'personas.js'.
// Como ya le hice el set, ya puedo comentar la línea. Sabemos que los elementos del LS siempre se mantienen hasta que yo mismo los borre.

const personas = JSON.parse(localStorage.getItem("personas")) || [];
```

Operador de cortocircuito de JS: Si lo primero es nulo, se asigna lo segundo después del `||`. En el segundo (el `[]`), estamos asignando un array vacío para la const personas. Entonces, en caso de existir el elemento de key 'personas', o sea que no devuelve null, va a tomar el valor que devuelva ese parseo de JSON.

Ahora limpiamos el LocalStorage para que quede vacío.

## Función Constructora Persona

Vamos a crear un archivo `persona.js` el cual va a tener la función constructora de Persona.

```javascript
export function Persona(id, nombre, apellido, email, genero, edad) {
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.genero = genero;
  this.edad = edad;
}
```

Está hecha de forma muy básica. Baus nos dice que debería tener getter, setter, propiedades, lo que sea. Podría haber herencia, etc. Pero esto es para hacerlo rápido.

Importamos a la función constructora:

```javascript
import { Persona } from "./persona.js";
```

## Lógica del Submit

```javascript
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const { txtId, txtNombre, txtApellido, txtEmail, txtGenero, txtEdad } = $formulario;
  // $formulario contiene los 'names' de las inputs
  // Desestructuramos a $formulario, guardando sus atributos 'txtId', 'txtNombre', etc. en cada constante que creamos.

  if (txtId.value === "") {
    // Persona nueva (ya que no tiene ID)
    const personaNueva = new Persona(Date.now(), txtNombre.value, txtApellido.value,
      txtEmail.value, txtGenero.value, parseInt(txtEdad.value));
    
    handlerCreate(personaNueva);
  } else {
    // Modificar persona (ya que tiene ID)
    // Lógica para update...
  }
});
```

Analizamos el valor de `txtId`. Si es `""`, significa que esa persona todavía no fue cargada en el array, ya que no tiene ID todavía. Por lo tanto, se trata de una persona nueva que debemos hacerle el alta. Para eso, simplemente creamos una `const personaNueva` y le asignamos lo que devuelva la función constructora `Persona`.

## Manejadores (CRUD)

Creamos 3 funciones para el ABM:

```javascript
function handlerCreate(nuevaPersona) {
  personas.push(nuevaPersona);
  // Agregamos el elemento recibido al array
}

function handlerUpdate(modificarPersona) {
  // Lógica para actualizar
}

function handlerDelete(id) {
  // Lógica para eliminar
}
```