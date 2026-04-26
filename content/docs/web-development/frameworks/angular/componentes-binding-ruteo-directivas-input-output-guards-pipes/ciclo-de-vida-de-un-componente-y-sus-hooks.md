---
title: "Ciclo de vida de un Componente y sus Hooks"
description: "Aprende a dominar el ciclo de vida de los componentes en Angular mediante el uso estratégico de sus 8 hooks fundamentales."
---

## Ciclo de vida de los componentes (Hooks)

Los **hooks** son una característica fundamental que nos brinda Angular para ejecutar lógica en momentos específicos de la existencia de un componente. Por ejemplo, si un usuario navega de un componente a otro, podemos ejecutar una función de "salida" antes de que el componente desaparezca. 

Conocer estos momentos clave nos permite controlar cuándo inicializar datos, cuándo reaccionar a cambios en las propiedades de entrada (@Input) y cuándo limpiar recursos para evitar fugas de memoria. Angular cuenta con **8 hooks** principales en total.

`ngOnInit` es el ejemplo más conocido, ya que se ejecuta cuando el componente se inicializa por primera vez.

## Implementación de un Hook

Para usar un hook, la buena práctica dicta que nuestra clase debe implementar la interfaz correspondiente que Angular provee.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: '...'
})
export class MiComponente implements OnInit {
  // Implementamos la interfaz OnInit
  ngOnInit(): void {
    console.log('El componente se ha inicializado correctamente.');
  }
}
```

Al especificar `implements OnInit`, TypeScript nos exigirá incluir el método `ngOnInit` dentro de la clase, lo que previene errores y mejora la legibilidad del código. Esta lógica aplica para todos los hooks (ej: `implements OnDestroy`, `implements OnChanges`, etc.).

---

## Etapas y Hooks del Ciclo de Vida

A continuación se presentan los 8 hooks ordenados temporalmente, agrupados en 4 etapas principales:

### 1. Inicialización (Creación)

1.  **`ngOnChanges(changes: SimpleChanges)`**: Se ejecuta antes que `ngOnInit` y cada vez que cambia un valor en una propiedad de entrada (`@Input`).
2.  **`ngOnInit()`**: Se ejecuta una única vez después del primer `ngOnChanges`. Es el lugar ideal para peticiones HTTP iniciales.
3.  **`ngDoCheck()`**: Se ejecuta en cada ciclo de detección de cambios de Angular, inmediatamente después de `ngOnInit` o `ngOnChanges`.

### 2. Contenido Proyectado (`<ng-content>`)

4.  **`ngAfterContentInit()`**: Se ejecuta una sola vez después de que Angular proyecte el contenido externo en el componente.
5.  **`ngAfterContentChecked()`**: Se ejecuta después de cada chequeo del contenido proyectado.

### 3. Vista del Componente

6.  **`ngAfterViewInit()`**: Se ejecuta una vez cuando la vista del componente (y sus hijos) se ha renderizado completamente. Es el momento seguro para manipular el DOM.
7.  **`ngAfterViewChecked()`**: Se ejecuta tras cada chequeo de la vista del componente y sus hijos.

### 4. Destrucción

8.  **`ngOnDestroy()`**: Se ejecuta justo antes de que Angular destruya el componente. **Es vital** para desuscribirse de Observables, limpiar timers o liberar recursos.

> [!IMPORTANT]
> Durante la vida del componente, los hooks **`ngOnChanges`**, **`ngDoCheck`**, **`ngAfterContentChecked`** y **`ngAfterViewChecked`** pueden ejecutarse múltiples veces si se detectan cambios de estado o entradas. Los hooks terminados en `Init` solo ocurren una vez por instancia.