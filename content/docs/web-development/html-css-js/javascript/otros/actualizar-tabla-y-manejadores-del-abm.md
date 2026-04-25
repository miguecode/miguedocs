---
title: "Actualizar tabla y Manejadores del ABM"
description: "Vamos a necesitar una función actualizarTabla por cada cambio que hagamos."
---


Vamos a necesitar una función actualizarTabla por cada cambio que hagamos.

export const actualizarTabla = (contenedor, data)=>{
  while(contenedor.hasChildNodes()){
```typescript
  contenedor.removeElementChild(contenedor.firstElementChild);
```
  }
  //Mientras el contenedor tenga hijos, los voy eliminando uno por uno.

  contenedor.appendChild(crearTabla(data, "white"));
  //Al contenedor le agrego lo que devuelva crearTabla con la lista que recibimos.
};
Esta función también va en el archivo tabla.js, y la vamos a exportar.

Con esto, ya podemos hacer ALTA de personas, y se actualiza automaticamente la tabla.

Aclaración
Es preferible mover el 'window.addEventListener("click", (e) => {...});' al otro archivo .js. 

Ahora vamos a modificar ese if del window.addEventListener para que, al hacer click en una persona de la tabla, nos muestre sus datos cargados en el formulario.

Método find(callback) en los arrays. personas.find(callback)
Devuelve el primer elemento que hace que el callback retorne 'true'. Itera sobre el array de personas y devuelve ese primer elemento que retorne 'true'.

const personaSeleccionada = personas.find((p)=>{
```typescript
return p.id == id;
```
});

O más resumido:     const personaSeleccionada = personas.find( p=> p.id == id);

Antes, vamos a guardar los datos cargados en el localStorage con esta función declarada en contenidos2.js:

function actualizarStorage(clave, data){
```typescript
localStorage.setItem(clave, JSON.stringify(data);
```
};

Y el 'actualizarStorage' lo voy a colocar en los manejadores de crear, modificar y eliminar.
Y para que, al actualizar la página, la tabla esté cargada según el localStorage, tengo que:

if(personas.length) actualizarTabla($divTablaContenedor, personas);
//Si ya hay algo en el LS, quiero que la tabla aparezca cargada.
//Si personas.length fuera 0, eso cuenta como 'false'. Por eso, todo lo que no sea 'false', será true.

Bueno, sigamos con lo de antes: que se vean los datos de la persona seleccionada cargados en el formulario.

function cargarFormPersona(formulario, persona) {
```typescript
formulario.txtId.value = persona.id;
formulario.txtNombre.value = persona.nombre;
formulario.txtApellido.value = persona.apellido;
formulario.txtEmail.value = persona.email;
formulario.rdoGenero.value = persona.genero;
formulario.txtEdad.value = persona.edad;    
```
}
//Con esto, cargamos el formulario con la persona seleccionada de la tabla


Dentro de handlerUpdate... {
```typescript
let index = personas.findIndex((p)=> p.id == modificarPersona.id); 
//Nos guardamos el índice en el array de la persona seleccionada

personas.splice(index, 1, modificarPersona);
//Eliminamos el elemento con índice 'index', y en su lugar colocar el 'modificarPersona'
```
}

Ahora, el Eliminar:

Dentro del evento del click hacemos:

else if(e.target.matches("input[value='Baja Persona']")){
```typescript
handlerDelete(	parseInt($formulario.txtId.value));
```
);}
//Si hicimos click en un input con un 'value' que sea 'Baja Persona', entramos al if en el cual invocamos al handlerDelete. Y a éste, le pasamos una id. Va a ser literalmente la id cargada en el formulario en ese momento (justamente porque para eliminar, antes tuvimos que seleccionar a alguna persona).


Dentro de handlerDelete(id){
```typescript
let index = personas.findIndex((p) => p.id == id);
personas.splice(index, 1);
```
Tomamos el indice, y del array 'personas', eliminamos el elemento con ese indice. Y a diferencia del modificar, no le pasamos tercer parámetro, ya que no vamos a reemplazarlo por ninguno.
```typescript
actualizarStorage("personas", personas);
actualizarTabla($divTablaContenedor, personas);
$formulario.reset();
```
}