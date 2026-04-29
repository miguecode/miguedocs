---
title: "History API (Navegar hacia atrás, adelante, etc)"
description: "Aprende a interactuar con el historial del navegador mediante la History API, esencial para la navegación en Single Page Applications (SPA)."
---

## History API

La **History API** nos permite interactuar con el historial del navegador sin necesidad de recargar la página. Es la herramienta fundamental sobre la cual se construyen los sistemas de ruteo de frameworks modernos como Angular, React (React Router) o Vue Router.

Cuando en un framework como Angular hacemos:
```javascript
this.router.navigate(['/perfil']);
```
Por debajo, el framework utiliza métodos de esta API, funcionando como un "azúcar sintáctico" que oculta la complejidad del ruteo nativo.

## ¿Qué nos permite hacer esta API?

*   Navegar programáticamente hacia atrás o hacia adelante.
*   Leer, agregar o reemplazar entradas en el historial de navegación.
*   Escuchar cambios en el historial para reaccionar a la navegación del usuario.

## Métodos de navegación

### Back, Forward y Go

Permiten mover al usuario por el historial acumulado en la pestaña actual.

```javascript
history.back();	   // Una página hacia atrás (botón "atrás")
history.forward(); // Una página hacia adelante (botón "adelante")

history.go(n);     // Navegación relativa
```

Para el método `history.go(n)`, el parámetro `n` determina el movimiento:
*   **`-1`**: Retrocede una página.
*   **`1`**: Avanza una página.
*   **`0`**: Recarga la página actual.

### Propiedad `length`

```javascript
console.log(history.length);
```
Devuelve la cantidad total de entradas en el historial de la pestaña actual. No indica cuántas veces podemos ir hacia atrás, sino el tamaño total de la pila de navegación.

## Modificar el historial sin recargar

Los métodos `pushState` y `replaceState` son la clave de las SPAs, ya que permiten cambiar la URL en la barra de direcciones sin provocar una recarga del navegador.

### `pushState(state, title, url)`

Agrega una **nueva** entrada al historial.

```javascript
history.pushState({ pagina: "perfil" }, "", "/perfil");
```

1.  **`state`**: Un objeto con información opcional que queramos asociar a esta entrada.
2.  **`title`**: Actualmente la mayoría de navegadores lo ignoran; se suele pasar un string vacío `""`.
3.  **`url`**: La nueva URL que se mostrará en la barra (debe pertenecer al mismo dominio).

### `replaceState(state, title, url)`

Funciona igual que `pushState`, pero **reemplaza** la entrada actual en lugar de añadir una nueva. Es ideal para limpiar URLs (ej: quitar parámetros de búsqueda feos) sin ensuciar la navegación del usuario.

```javascript
history.replaceState({ pagina: "home" }, "", "/home");
```

### Propiedad `state`

```javascript
const estadoActual = history.state;
```
Devuelve el objeto `state` asociado a la entrada actual del historial (el que hayamos guardado previamente con `pushState` o `replaceState`).

## Evento `popstate`

Este evento se dispara en el objeto `window` cuando el usuario navega a través de su historial mediante los botones del navegador o `history.go()`.

> [!IMPORTANT]
> El evento `popstate` **no** se dispara al llamar a `pushState()` o `replaceState()`. Solo ocurre ante acciones del usuario o navegación automática relativa.

```javascript
window.addEventListener("popstate", (event) => {
  console.log("Cambiando de ruta en el historial. Estado:", event.state);
});
```

## Ejemplo completo de uso

```javascript
// Simulamos el cambio de vista a /perfil guardando datos en el estado
history.pushState({ vista: "perfil" }, "", "/perfil");

// Preparamos la App para reaccionar si el usuario presiona el botón "atrás"
window.addEventListener("popstate", (e) => {
  if (e.state?.vista === "perfil") {
    console.log("Cargando componentes del perfil...");
  } else {
    console.log("Volviendo al inicio...");
  }
});
```