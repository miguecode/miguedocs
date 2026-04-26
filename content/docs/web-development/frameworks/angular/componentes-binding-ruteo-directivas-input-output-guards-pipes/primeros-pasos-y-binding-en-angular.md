---
title: "Primeros pasos y Binding en Angular"
description: "Comienza tu camino en Angular aprendiendo los conceptos fundamentales de sincronización entre el componente y la vista mediante el sistema de Binding."
---

## Primeros pasos en el Componente Base

Para empezar a trabajar en Angular, primero debemos limpiar el archivo principal de nuestra aplicación: `app.component.html`. Generalmente, dejaremos únicamente la etiqueta del ruteador:

```html
<router-outlet />
```

En el archivo de lógica (`app.component.ts`), veremos la clase decorada con `@Component`. Aquí, el **`selector`** es el nombre de la etiqueta HTML personalizada que invoca a este componente (ej: `<app-root></app-root>`). También configuraremos el `templateUrl` y el `styleUrls` para vincular los archivos físicos de estructura y estilo.

---

## Envío de Información entre Template y Lógica

Angular permite una comunicación fluida entre el HTML y el TypeScript. Si definimos un atributo en nuestra clase, podemos mostrarlo en el HTML usando la técnica de **Interpolación** (llaves dobles `{{ }}`).

### Ejemplo básico
**Lógica (`app.component.ts`):**
```typescript
export class AppComponent {
  title = "Mi Primer Título";
}
```

**Template (`app.component.html`):**
```html
<h1>{{ title }}</h1>
```

Si queremos que un campo de texto modifique esta variable en tiempo real, necesitamos el **Two-Way Binding** (`[(ngModel)]`). Para usarlo, es obligatorio importar el **`FormsModule`** en el array de `imports` de nuestro componente.

---

## Sistema de Binding en Angular

El **Binding** es el mecanismo que permite sincronizar la lógica con el template. Existen cuatro tipos principales según la dirección del flujo de datos:

| Tipo | Sintaxis | Dirección | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Interpolación** | `{{ valor }}` | TS ──► HTML | Mostrar texto dinámico o resultados simples. |
| **Property Binding** | `[propiedad]` | TS ──► HTML | Enlazar atributos del DOM (src, disabled, etc.). |
| **Event Binding** | `(evento)` | HTML ──► TS | Escuchar clics, teclado y otros eventos del usuario. |
| **Two-Way Binding** | `[(ngModel)]` | TS ◄─► HTML | Sincronización bidireccional (formularios). |

### 1. Interpolación: `{{ ... }}`
Se usa para enviar texto desde la lógica hacia la vista de forma unidireccional. Solo sirve para mostrar contenido textual, no para modificar propiedades de las etiquetas. Admite expresiones simples:
```html
<p>{{ title.toUpperCase() }}</p>
```

### 2. Property Binding: `[propiedad]="valor"`
Permite enlazar dinámicamente propiedades del DOM o de otros componentes. A diferencia de la interpolación, este sí permite modificar atributos reales:
```html
<img [src]="imgUrl" [alt]="imgDescription">
<button [disabled]="!isFormValid">Enviar</button>
```

### 3. Event Binding: `(evento)="función()"`
Permite que el HTML dispare métodos definidos en nuestro archivo TypeScript al ocurrir una interacción del usuario.
```html
<button (click)="guardarDatos()">Guardar</button>
```

### 4. Two-Way Binding: `[(ngModel)]`
Conocido popularmente como **"Banana in a Box"**, combina el enlace de propiedad y el de evento. Permite que, si el usuario escribe en un campo, la variable en TS se actualice, y que si el TS cambia el valor de la variable, el input también se actualice simultáneamente.

```html
<input [(ngModel)]="userName" placeholder="Escribe tu nombre">
<p>Hola, {{ userName }}</p>
```
Este bindeo es la base de la reactividad en los formularios clásicos de Angular.