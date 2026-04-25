---
title: "History API (Navegar hacia atrás, adelante, etc)"
description: "La History API nos permite interactuar con el historial del navegador sin recargar la página. Es especialmente útil en Single Page Applications (SPA), donde cam..."
---


##  History API

- La History API nos permite interactuar con el historial del navegador sin recargar la página. Es especialmente útil en Single Page Applications (SPA), donde cambiamos vistas o rutas sin hacer una navegación tradicional. 

- Cuando usamos frameworks como Angular, React (con React Router), o Vue Router, o cualquier sistema de ruteo en frameworks modernos, por debajo están usando la History API del navegador.

- Es decir, cuando estamos en Angular y vamos a hacer ruteo, podemos ver algo así:

```text
this.router.navigate(['/perfil']);
```
- Cuando en realidad, por debajo, está ocurriendo esto:

```text
history.pushState(...);
```
- Esto quiere decirnos que el framework nos hace de azúcar sintáctico, ya que "nos esconde" todo el manejo del History API (la API que vamos a aprender ahora).



## ¿Qué hace exactamente la API?

- Nos permite movernos hacia atrás o adelante en las páginas web que estamos visitando (literalmente el botón de ir hacia atrás o adelante).

- Nos permite leer, agregar y reemplazar entradas del historial. Y también escuchar cambios en él.


## Métodos para navegar por el historial

### Back y Forward

```text
history.back();	// Va una página hacia atrás (como si el usuario tocara el botón "atrás")
history.forward(); // Va una página hacia adelante (como si el usuario tocara el botón "adelante")
```
### Go

```text
history.go(n);  // "n" puede ser -1, 0 o 1.
```
- Va a una página en el historial relativa a la posición actual.
```text
n = -1 → una atrás
n = 1 → una adelante
n = 0 → recarga la página actual
```
### La propiedad length

```text
history.length; // Nos da la cantidad total de entradas en el historial de la pestaña actual
```
- Ojo, no nos dice cuántas veces podemos ir hacia atrás o adelante, sino simplemente el total de entradas.


## Modificar el historial -sin recargar-

- Los métodos pushState() y replaceState() nos permiten cambiar la URL del navegador sin hacer una nueva navegación y sin recargar la página. Esto lo podemos checkear con la propiedad "state". Veamos:

### pushState(state, title, url)

```typescript
history.pushState({ pagina: "perfil" }, "", "/perfil");
```
- Así, agregamos una nueva entrada al historial. Como vemos, recibe 3 parámetros: state, title y url.
state: objeto con info. opcional que queremos guardar.
title: hoy en día no se usa, hay que poner "" (string vacío).
url: la nueva URL que aparecerá en la barra (tiene que ser de mi mismo dominio)

- Esto es ideal para cuando el usuario cambia de vista en un SPA y queremos que la URL cambie, y que pueda volver con el botón de "atrás".


### replaceState(state, title, url)

```typescript
history.replaceState({ pagina: "perfil" }, "", "/perfil");
```
- Funciona exactamente igual que pushState, pero NO AGREGA una nueva entrada, sino que reemplaza la actual. Se usa para cambiar la URL sin alterar el historial del usuario.

- Es ideal si cargamos una página con un parámetro feo y lo queremos cambiar por una URL más limpia.

### Propiedad state

```typescript
const estado = history.state;
```
- Esto devuelve el objeto state guardado con pushState o replaceState.


## Evento popstate

```typescript
window.addEventListener("popstate", (event) => {
  console.log("Volviste a una entrada del historial:", event.state);
});
```
- El evento popstate se dispara cuando el usuario usa los botones "atrás" o "adelante". Ojo: NO se dispara con los métodos pushState ni replaceState, sólo se dispara con navegación manual del usuario o con history.go().

-  Es útil para reaccionar a cambios de URL y actualizar la vista en una SPA.


## Ejemplo completo

```typescript
// Cambiar de vista a /perfil
history.pushState({ vista: "perfil" }, "", "/perfil");

// Reaccionar a que el usuario vuelva con el botón "atrás"
window.addEventListener("popstate", (e) => {
  console.log("Vista anterior:", e.state?.vista);
});
```