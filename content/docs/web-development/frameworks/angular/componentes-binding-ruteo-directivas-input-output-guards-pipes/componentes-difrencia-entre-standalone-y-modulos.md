---
title: "Componentes. Diferencia entre Standalone y Módulos"
description: "Aprende qué es un componente en Angular, cómo configurarlo mediante su decorador y entiende la evolución desde los NgModules hacia los componentes Standalone."
---

## Componentes en Angular

Un **componente** es la unidad lógica mínima en Angular. Cada componente debe representar una única responsabilidad o funcionalidad dentro de la interfaz de usuario. Lo ideal es que sean pequeños, específicos y reutilizables.

Visualmente, podemos imaginar un componente como "una caja" que encapsula tres elementos esenciales:
1.  **Estructura**: Definida en HTML.
2.  **Estilo**: Definido en CSS (o SCSS, Less, etc.).
3.  **Lógica**: Definida en TypeScript.

En una SPA (*Single Page Application*), Angular actualiza únicamente los componentes necesarios cuando detecta cambios en el estado, evitando recargar la página completa y ofreciendo una experiencia de usuario fluida.

## El Decorador `@Component`

En TypeScript, un componente se define mediante una clase decorada con `@Component`. Este decorador recibe un objeto de configuración con propiedades fundamentales:

```typescript
@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, ProfileComponent]
})
export class UserComponent {
  userService = inject(UserService);
  // lógica del componente...
}
```

### Propiedades comunes:

*   **`standalone`**: Un booleano que indica si el componente es independiente (no requiere ser declarado en un `NgModule`).
*   **`selector`**: El nombre de la etiqueta HTML personalizada con la que invocaremos al componente (ej: `<app-user></app-user>`). Se recomienda el prefijo `app-`.
*   **`template` / `templateUrl`**: Define la estructura HTML. Se prefiere `templateUrl` para separar el marcado de la lógica.
*   **`styles` / `styleUrls`**: Define los estilos CSS. `styleUrls` recibe un array de rutas, permitiendo múltiples archivos de estilo.
*   **`imports`**: (Solo en componentes standalone) Array donde importamos otros componentes, directivas o módulos que nuestro componente necesite.

---

## Creación y Organización

### Angular CLI
La forma más rápida de crear un componente es mediante la terminal:

```bash
ng generate component components/mi-componente
# O su versión abreviada:
ng g c components/mi-componente
```

### Separación de archivos
Por convención y mantenimiento, el CLI de Angular separa las partes del componente en archivos físicos distintos:
*   `mi-componente.component.ts` (Lógica)
*   `mi-componente.component.html` (Estructura)
*   `mi-componente.component.css` (Estilos)

> [!TIP]
> Si deseas evitar que el CLI genere archivos de pruebas integradas (`.spec.ts`), puedes añadir `"skipTests": true` en la configuración de esquemas de tu archivo `angular.json`.

---

## Diferencia entre Standalone y Módulos

Angular ha evolucionado desde una arquitectura basada obligatoriamente en módulos (`NgModules`) hacia una basada en componentes **Standalone**.

### NgModules (Arquitectura clásica)
Un módulo es un contenedor lógico que agrupa componentes, directivas y servicios. 
*   Los componentes debían estar "declarados" en un módulo para funcionar.
*   Si un componente necesitaba una librería externa, era el módulo quien debía importarla, creando a veces dependencias innecesarias o archivos `app.module.ts` gigantescos y difíciles de mantener.

### Standalone (Arquitectura moderna)
Un componente Standalone es, en esencia, su propio módulo. 
*   Es **autónomo**: gestiona sus propias dependencias a través de la propiedad `imports`.
*   Reduce el código repetitivo (*boilerplate*) al eliminar la necesidad de crear archivos de módulo adicionales.
*   Es el estándar actual recomendado por el equipo de Angular.

### Migración automática
Si tienes un proyecto antiguo basado en módulos y quieres pasarlo a standalone, Angular ofrece un comando de migración:

```bash
ng generate @angular/core:standalone
```
Este comando analiza el proyecto y convierte automáticamente los componentes y directivas al modelo independiente.