---
title: "Animaciones"
description: "Aprende a dar vida a tus componentes de Angular mediante el uso de disparadores, estados y transiciones para mejorar la experiencia de usuario."
---

## Animaciones en Angular

Para habilitar el sistema de animaciones en Angular, primero debemos registrar el proveedor correspondiente en nuestro archivo de configuración global (`app.config.ts` o `main.ts`):

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations() // Habilita el soporte para BrowserAnimationsModule
  ]
};
```

---

## Definición de una Animación

Las animaciones se definen generalmente fuera del decorador `@Component` como constantes, para mantener el archivo limpio, y luego se asignan al array `animations`.

### Método 1: Basado en Estados (Abierto/Cerrado)

Este método cambia las propiedades CSS según el valor de una variable.

```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

export const mostrarOcultarAnimacion = trigger('mostrarOcultarTrigger', [
  state('abierto', style({
    opacity: 1,
    height: '*' // Altura automática
  })),
  state('cerrado', style({
    opacity: 0,
    height: '0px'
  })),
  transition('abierto <=> cerrado', [
    animate('0.5s ease-in-out')
  ])
]);
```

**Uso en el HTML:**
```html
<div [@mostrarOcultarTrigger]="isOpen ? 'abierto' : 'cerrado'">
  <p>Contenido que se anima...</p>
</div>
```

> [!WARNING]
> Este método solo oculta visualmente el elemento. El elemento **sigue existiendo en el DOM**, lo que puede causar problemas si tiene botones interactivos o enlaces que deberían estar deshabilitados.

---

## Método 2: Animaciones de Entrada y Salida (`:enter` / `:leave`)

Este es el método recomendado si utilizas directivas como `*ngIf` o bloques `@if`, ya que anima al elemento mientras se **añade o elimina del DOM**.

```typescript
export const entradaSalidaAnimacion = trigger('fadeSlide', [
  // :enter es un alias para la transición 'void => *'
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  // :leave es un alias para la transición '* => void'
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
  ])
]);
```

### Aplicación en el Template

Para usar estas animaciones, simplemente aplicamos el disparador con el símbolo `@` en el elemento que está siendo controlado por un condicional:

```html
@if (isVisible) {
  <div @fadeSlide class="alerta">
    ¡Este elemento se anima al aparecer y al desaparecer del DOM!
  </div>
}
```

### Conceptos clave:
1.  **`trigger`**: Nombre de la animación que identificamos en el HTML.
2.  **`state`**: Define los estilos fijos para un nombre de estado específico.
3.  **`transition`**: Define cómo se debe realizar el cambio entre dos estados.
4.  **`animate`**: Especifica la duración y el tipo de curva (*easing*) de la transición.
5.  **`:enter` y `:leave`**: Alias para manejar elementos que entran o salen de la vista de forma dinámica.