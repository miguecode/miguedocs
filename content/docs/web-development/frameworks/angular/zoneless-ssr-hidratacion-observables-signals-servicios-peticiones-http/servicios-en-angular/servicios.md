---
title: "Servicios en Angular"
description: "Aprende qué son los servicios, cómo implementan el patrón Singleton para compartir información y por qué son fundamentales para la lógica de negocio y la conexión con el backend."
---

## ¿Qué son los Servicios?

Los **Servicios** son clases especializadas en Angular diseñadas para manejar tareas que no deberían estar ligadas a la vista de un componente específico. Sus funciones principales son:

1.  **Compartir información**: Actuar como puente entre distintos componentes de la aplicación.
2.  **Lógica de Negocio**: Centralizar cálculos, validaciones y procesamiento de datos.
3.  **Conexión Externa**: Gestionar peticiones a APIs, bases de datos (como Firebase) o integración con librerías externas.

---

## El Patrón Singleton

Por defecto, los servicios en Angular implementan el patrón **Singleton**. Esto significa que existe una **única instancia** de la clase en toda la aplicación.

*   **Persistencia**: A diferencia de los componentes, que nacen y mueren al cambiar de URL, el servicio permanece vivo mientras la aplicación esté abierta.
*   **Estado compartido**: Si un componente modifica una propiedad en el servicio, cualquier otro componente que acceda a ese servicio verá el cambio inmediatamente, ya que todos están utilizando la misma instancia.

### Inyección de Dependencias
Para usar un servicio en un componente, utilizamos el decorador `@Injectable` y la función `inject()`:

```typescript
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root' // Define que el servicio sea Singleton y esté disponible globalmente
})
export class AuthService {
  isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }
}
```

**Uso en el componente:**
```typescript
export class MiComponente {
  private authService = inject(AuthService);

  check() {
    console.log(this.authService.isAuthenticated);
  }
}
```

---

## Métodos Estáticos vs. Instancia

Aunque lo ideal en Angular es aprovechar la Inyección de Dependencias (DI), existe la posibilidad de usar métodos estáticos si el servicio no requiere acceder a propiedades de su propia clase.

*   **Cuando usar Instancia**: Si necesitas acceder a variables como `this.isAuthenticated`. Es el estándar de Angular.
*   **Cuando usar Static**: Si el método es una función pura (ej: un conversor de moneda o un formateador de texto) que no depende del estado del servicio.

```typescript
export class UtilsService {
  // Método de instancia
  calcularIva(precio: number) {
     return precio * 0.21;
  }

  // Método estático
  static capitalizar(texto: string) {
    return texto.toUpperCase();
  }
}
```

---

## Creación y Configuración

Para generar un servicio rápidamente desde la terminal:
```bash
ng generate service services/nombre-del-servicio
```

### Propiedad `providedIn`
*   **`'root'`**: Es la opción predeterminada y recomendada. Crea una única instancia global (Singleton) que se carga de forma diferida (*lazy loaded*) solo cuando se usa por primera vez.
*   **Otras opciones**: En configuraciones avanzadas, se puede limitar el alcance del servicio a un módulo o componente específico, permitiendo tener múltiples instancias si fuera necesario.