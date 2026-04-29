---
title: "Control Flow Syntax (Bloques @if, @for, @switch)"
description: "Descubre la nueva sintaxis de control de flujo de Angular, una forma más limpia, rápida y legible de manejar la estructura del DOM sin directivas tradicionales."
---

## Control Flow Syntax (Bloques)

Históricamente, Angular ha utilizado directivas estructurales como `*ngIf`, `*ngFor` y `*ngSwitch` para manipular el DOM. A partir de **Angular 17**, se introdujo oficialmente la **Control Flow Syntax**, una nueva forma de manejar la lógica del template mediante bloques integrados en el compilador.

Esta sintaxis ofrece ventajas significativas:
*   **Mayor legibilidad**: Se asemeja más a la sintaxis nativa de JavaScript.
*   **Sin importaciones**: No necesitas importar `CommonModule` o directivas específicas para usarlos.
*   **Mejor rendimiento**: El compilador de Angular optimiza estos bloques de forma nativa.
*   **Lazy rendering**: Es la base para utilizar características avanzadas como los bloques `@defer`.

---

## Bloque `@if` (Reemplazo de `*ngIf`)

El bloque `@if` permite manejar condicionales de forma mucho más limpia, eliminando la necesidad de usar elementos `<ng-template>` para el caso de `else`.

```html
@if (isVisible) {
  <div>El contenido es visible.</div>
} @else if (isPending) {
  <div>Cargando datos...</div>
} @else {
  <div>El contenido está oculto.</div>
}
```

---

## Bloque `@for` (Reemplazo de `*ngFor`)

El bloque `@for` es extremadamente eficiente y soluciona uno de los problemas comunes de `*ngFor`: la obligatoriedad de seguir un identificador para optimizar el rendimiento.

```html
<ul>
  @for (person of persons; track person.id) {
    <li>{{ person.name }}</li>
  }
</ul>
```

### La importancia de `track`
En la nueva sintaxis, la expresión **`track`** es obligatoria. Esto permite que Angular identifique de forma única cada elemento de la lista y sepa exactamente qué parte del DOM actualizar cuando los datos cambian, mejorando drásticamente el rendimiento del renderizado.

### Bloque `@empty`
Podemos definir un estado visual por defecto para los casos en los que la lista que intentamos recorrer esté vacía:

```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No hay elementos disponibles en la lista.</li>
  }
</ul>
```

---

## Bloque `@switch` (Reemplazo de `*ngSwitch`)

El bloque `@switch` simplifica la lógica de múltiples condiciones eliminando el bindeo de atributos y las directivas de caso:

```html
@switch (userRole) {
  @case ('admin') {
    <app-admin-dashboard />
  }
  @case ('editor') {
    <app-editor-panel />
  }
  @default {
    <app-user-view />
  }
}
```

Al ser una sintaxis integrada directamente en el lenguaje de plantillas de Angular (DSL), estos bloques son procesados antes de que el código llegue al navegador, lo que resulta en una aplicación más ligera y rápida.