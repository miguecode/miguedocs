---
title: "Single Source of Truth con Signals (Parte 1)"
description: "Aprende a implementar el patrón de Única Fuente de Verdad en Angular utilizando Signals y Mapas para gestionar el estado de forma reactiva, eficiente y escalable."
---

## Arquitectura: Single Source of Truth (SSoT)

La arquitectura de **Única Fuente de Verdad** establece que cualquier dato necesario para la aplicación debe residir en un único lugar centralizado. En Angular moderno, esto se logra combinando **Servicios** con **Signals**.

A diferencia del flujo tradicional (donde los componentes transforman los observables de los servicios), aquí el servicio posee una propiedad `state` que es la señal definitiva del estado actual. Los componentes simplemente "consumen" lo que el servicio ya tiene procesado y actualizado.

---

## Estrategia OnPush y Reactividad Directa

Para maximizar el rendimiento, esta arquitectura se apoya en la estrategia de detección de cambios **OnPush**:

```typescript
@Component({
  ...
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente { ... }
```

### ¿Por qué OnPush + Signals?
Con `OnPush`, Angular solo revisa el componente si cambian sus entradas (`@Input`), si hay un evento de usuario o si una señal vinculada cambia su valor. Al conectar varios componentes a la misma Signal en el servicio, Angular actualizará **únicamente** esos componentes cuando la señal cambie, ignorando el resto del árbol. Esto es la base del funcionamiento **Zoneless** (sin Zone.js).

---

## Implementación del Servicio Character

Vamos a crear un servicio donde el estado de nuestros personajes se gestione mediante un `Map` dentro de una `Signal`.

### Estructura del Estado
```typescript
import { signal, Injectable } from '@angular/core';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  // Nuestra Fuente de Verdad
  state = signal({
    characters: new Map<number, Character>(), // ID -> Objeto Character
  });

  constructor() {
    this.loadInitialData();
  }
}
```

### ¿Por qué un Map?
Utilizar un `Map` en lugar de un `Array` ofrece ventajas significativas:
*   **Acceso Directo**: Buscar un personaje por ID es instantáneo (`O(1)`).
*   **Sin Duplicados**: El mapa garantiza que no haya dos personajes con el mismo ID.
*   **Inmutabilidad**: Para que la Signal detecte cambios, debemos crear un **nuevo Map** (cambio de referencia), lo cual encaja perfectamente con el flujo de reactividad de Angular.

---

## Inicialización del Estado

Para poblar nuestra señal por primera vez, simulamos una petición al backend usando el operador `of()` de RxJS.

```typescript
import { of } from 'rxjs';

private loadInitialData(): void {
  const mockCharacters: Character[] = [
    { id: 1, name: 'John', lastName: 'Doe', age: 30 },
    { id: 2, name: 'Jane', lastName: 'Smith', age: 25 },
  ];

  // Simulamos un observable (como el que devolvería http.get)
  of(mockCharacters).subscribe(result => {
    const newMap = new Map<number, Character>();
    
    // Transformamos el array en un Map
    result.forEach(char => newMap.set(char.id, char));
    
    // PISAMOS el estado anterior con la nueva referencia
    this.state.set({ characters: newMap });
  });
}
```

### La importancia del cambio de referencia
Las Signals solo disparan la actualización de la UI cuando detectan que el valor (o la referencia del objeto) ha cambiado. Modificar un objeto interno sin cambiar su referencia **no** disparará cambios:

```typescript
// ❌ INCORRECTO: No dispara cambios en la UI
this.state().characters.set(3, newChar); 

// ✅ CORRECTO: Creamos una nueva instancia del mapa y la seteamos
const updatedMap = new Map(this.state().characters);
updatedMap.set(3, newChar);
this.state.set({ characters: updatedMap });
```

---

## Métodos de Consulta
Para que los componentes puedan leer los datos de forma sencilla, exponemos métodos que transforman el mapa interno en formatos visuales (como arrays):

```typescript
getFormattedCharacters(): Character[] {
  // Convertimos los valores del mapa en un array plano
  return Array.from(this.state().characters.values());
}
```

En la segunda parte, exploraremos cómo añadir, editar y eliminar elementos de esta Fuente de Verdad de forma reactiva y eficiente.