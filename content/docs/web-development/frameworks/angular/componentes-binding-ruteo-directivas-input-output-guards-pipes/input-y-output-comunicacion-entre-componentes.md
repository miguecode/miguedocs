---
title: "Input y Output. Comunicación entre componentes"
description: "Aprende a comunicar componentes en Angular mediante los decoradores @Input y @Output para el intercambio de datos entre padres e hijos."
---

## @Input y @Output (Comunicación entre componentes)

En Angular, la forma estándar de comunicar un componente padre con sus componentes hijos es a través de los decoradores **`@Input`** y **`@Output`**. Básicamente, permiten que los datos "viajen" a través del árbol de componentes.

### Conceptos clave:
*   **`@Input()`**: Se utiliza para que el componente hijo **reciba** información desde el padre.
*   **`@Output()`**: Se utiliza para que el componente hijo **emita** eventos o datos hacia el padre.

| Decorador | Flujo de datos | Dirección | Ubicación del código |
| :--- | :--- | :--- | :--- |
| **`@Input`** | Entrada | Padre ──► Hijo | Declarado en el Hijo |
| **`@Output`** | Salida | Hijo ──► Padre | Declarado en el Hijo |

> [!IMPORTANT]
> Tanto el `@Input` como el `@Output` se declaran siempre en el componente **Hijo**. El componente **Padre** es quien decide qué enviar o qué escuchar desde su archivo HTML.

---

## @Input: De Padre a Hijo

"Input" significa entrada. Le estamos indicando al componente hijo que existe una propiedad lista para recibir un valor externo.

### En el componente Hijo (TypeScript):
```typescript
import { Component, Input } from '@angular/core';

@Component({ ... })
export class HijoComponent {
  @Input() nombreHijo: string = 'Invitado'; // Valor por defecto
}
```

### En el componente Padre (HTML):
Aquí es donde ocurre la magia mediante el **Property Binding** (`[]`). Le pasamos el valor de una variable del padre a la propiedad del hijo.

```html
<app-hijo [nombreHijo]="variableDelPadre"></app-hijo>
```

El valor de `variableDelPadre` "pisará" el valor por defecto del hijo, permitiendo que el componente hijo se renderice con la información actualizada.

---

## @Output: De Hijo a Padre

La comunicación hacia arriba es un poco distinta: el hijo no "pisa" variables del padre, sino que **emite un evento** que el padre debe estar escuchando.

### En el componente Hijo (TypeScript):
Usamos un objeto de tipo `EventEmitter` para disparar el evento.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({ ... })
export class HijoComponent {
  @Output() avisarAlPadre = new EventEmitter<string>();

  enviarMensaje() {
    this.avisarAlPadre.emit('¡Hola Papá!'); // Emitimos el dato
  }
}
```

### En el componente Padre:
1.  **TypeScript**: Definimos un método para recibir el dato.
2.  **HTML**: Usamos el **Event Binding** (`()`) sobre el selector del hijo.

**TypeScript (Padre):**
```typescript
recibirNotificacion(mensaje: string) {
  console.log('El hijo dice:', mensaje);
}
```

**HTML (Padre):**
```html
<app-hijo (avisarAlPadre)="recibirNotificacion($event)"></app-hijo>
```
El objeto **`$event`** es fundamental: contiene la información que el hijo pasó dentro del método `.emit()`.

---

## Tips Avanzados

### Aliases (Sobrenombres)
Puedes hacer que el nombre que el padre ve en el HTML sea diferente al nombre que usas internamente en el componente hijo:
```typescript
@Input('pseudoNombre') nombreReal: string;
```
En el padre: `<app-hijo [pseudoNombre]="valor"></app-hijo>`

### Inputs Requeridos (Angular 16+)
Ahora puedes obligar al padre a que pase un valor, de lo contrario Angular mostrará un error de compilación:
```typescript
@Input({ required: true }) propiedadObligatoria: string;
```

### ¿Cuándo NO usar Input/Output?
Este método es ideal para relaciones **directas** (Padre-Hijo). Si necesitas comunicar componentes que están muy lejos entre sí o que no tienen una relación de jerarquía, lo mejor es utilizar **Servicios**, **Signals** o **RxJS**.