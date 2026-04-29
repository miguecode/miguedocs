---
title: "Nueva Guía de Estilos: Nombres sin sufijos"
description: "Conoce el cambio en la convención de nombres de Angular: la eliminación de sufijos como .component o .service en archivos y clases para un código más limpio."
---

## Nueva guía de estilos en Angular

En las versiones más recientes de Angular (referenciadas como el ecosistema de Angular 18/19+), se ha introducido un cambio significante en la convención de nombres tanto para los archivos como para las clases de los componentes, directivas, servicios y pipes. La tendencia actual es **eliminar los sufijos descriptivos** para obtener una estructura de archivos más limpia y concisa.

### Comparativa de convenciones

| Arquitectura Clásica | Arquitectura Moderna (Sin sufijos) |
| :--- | :--- |
| `login.component.ts` | `login.ts` |
| `LoginComponent` | `Login` |
| `auth.service.ts` | `auth.ts` |
| `AuthService` | `Auth` |

Bajo esta nueva guía, la clase y el archivo prescinden de la especificación del tipo (component, service, directive, pipe). El contexto del elemento viene dado por su ubicación en carpetas y los decoradores internos (`@Component`, `@Injectable`, etc.).

---

## Cómo revertir a la arquitectura clásica

Si prefieres mantener la nomenclatura tradicional con sufijos (la cual sigue siendo ampliamente utilizada por equipos que prefieren una distinción explícita en el nombre del archivo), puedes configurar tu proyecto para que el Angular CLI siga generando los archivos de la forma clásica.

Para ello, debes modificar el archivo **`angular.json`** y añadir la propiedad `type` o `typeSeparator` dentro del apartado de `schematics`:

```json
{
  "projects": {
    "mi-app": {
      "schematics": {
        "@schematics/angular:component": { "type": "component" },
        "@schematics/angular:directive": { "type": "directive" },
        "@schematics/angular:service": { "type": "service" },
        "@schematics/angular:guard": { "typeSeparator": "." },
        "@schematics/angular:interceptor": { "typeSeparator": "." },
        "@schematics/angular:module": { "typeSeparator": "." },
        "@schematics/angular:pipe": { "typeSeparator": "." },
        "@schematics/angular:resolver": { "typeSeparator": "." }
      }
    }
  }
}
```

Esta configuración asegura que cada vez que ejecutes un comando como `ng generate component`, el CLI añada automáticamente el sufijo `.component` al archivo y a la clase, manteniendo la consistencia con el estilo tradicional de Angular.