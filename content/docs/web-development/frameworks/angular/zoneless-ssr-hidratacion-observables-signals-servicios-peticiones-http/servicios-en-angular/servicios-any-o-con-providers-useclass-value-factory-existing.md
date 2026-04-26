---
title: "Configuración Avanzada de Servicios y Providers"
description: "Aprende a controlar el ciclo de vida y la inyección de tus servicios usando providedIn: 'any' o personalizando la resolución de dependencias con useClass, useValue, useFactory y useExisting."
---

## Alcance de los Servicios: `providedIn`

La propiedad `providedIn` en el decorador `@Injectable` define qué tan amplia es la cobertura del servicio en la aplicación.

1.  **`providedIn: 'root'`**: Crea una única instancia global (**Singleton**) para toda la aplicación. Se carga de forma diferida (*lazy*) cuando se inyecta por primera vez.
2.  **`providedIn: 'any'`**: Crea una instancia diferente para cada "área funcional" o módulo cargado de forma diferida. Esto permite aislar el estado del servicio entre distintas secciones de la app.

```typescript
@Injectable({
  providedIn: 'any'
})
export class LocalStorageService { ... }
```

---

## El Array `providers` en Componentes

Si registramos un servicio directamente en el array `providers` de un componente (en lugar de usar `providedIn: 'root'`), logramos un **Singleton Local**:

*   El servicio solo es accesible para ese componente y todos sus hijos.
*   Al destruir el componente, la instancia del servicio también se destruye.
*   Permite tener un estado interno aislado que no contamina el sistema global.

```typescript
@Component({
  standalone: true,
  selector: 'app-seccion',
  providers: [FeatureService], // Instancia única para esta sección
  template: `...`
})
export class SeccionComponent { ... }
```

---

## Estrategias de Inyección Avanzadas

Dentro del array `providers`, podemos usar objetos de configuración para alterar cómo Angular resuelve una dependencia.

### 1. `useClass` (Reemplazo de Clase)
Permite inyectar una clase distinta a la solicitada. Es ideal para pruebas unitarias o para cambiar implementaciones según el contexto.

```typescript
providers: [
  // Cuando alguien pida MockDataService, entrégale RealDataService
  { provide: MockDataService, useClass: RealDataService }
]
```

### 2. `useValue` (Inyección de Valores)
Permite inyectar un objeto estático, una constante o una configuración manual. Útil para tokens de API o configuraciones globales.

```typescript
export const API_CONFIG = new InjectionToken<string>('apiUrl');

providers: [
  { provide: API_CONFIG, useValue: 'https://rickandmortyapi.com/api' }
]
```

### 3. `useFactory` (Instanciación Dinámica)
Define una función que actúa como fábrica, permitiendo usar lógica personalizada (e incluso otras dependencias) para crear el servicio.

```typescript
export function dataServiceFactory(env: string) {
  return env === 'prod' ? new ProdService() : new DevService();
}

providers: [
  { 
    provide: DataService, 
    useFactory: () => dataServiceFactory('prod') 
  }
]
```

### 4. `useExisting` (Alias)
Hace que un token apunte a la misma instancia que otro servicio ya existente, evitando crear duplicados innecesarios.

```typescript
providers: [
  // AuthAliasService usará exactamente la misma instancia que AuthService
  { provide: AuthAliasService, useExisting: AuthService }
]
```

---

## Resumen de Estrategias

| Objetivo | Qué usar |
| :--- | :--- |
| **Singleton Global** | `providedIn: 'root'` |
| **Aislar por áreas funcionales** | `providedIn: 'any'` |
| **Aislar en un componente e hijos** | Array `providers: [Service]` |
| **Mocking para Testing** | `useClass` |
| **Inyectar constantes/objetos** | `useValue` |
| **Lógica condicional al crear** | `useFactory` |
| **Reutilizar instancia con otro nombre** | `useExisting` |