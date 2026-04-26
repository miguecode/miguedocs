---
title: "Conexión a Backend: Desde Observables hasta Signals"
description: "Evoluciona tu arquitectura de Angular: aprende a conectar servicios con HttpClient, aplicar adaptadores y gestionar la reactividad usando el Pipe Async o la nueva API de Signals."
---

## Conexión con Backend mediante Servicios

En Angular, la comunicación con APIs externas se centraliza en los **Servicios** para mantener la lógica de negocio separada de la interfaz de usuario. Utilizaremos `HttpClient` para realizar peticiones que devuelven **Observables**, permitiendo una gestión reactiva de los datos.

### Estructura Base del Servicio
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://api.example.com/characters';
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}
```

---

## Adaptadores y Clean Architecture

Un **Adaptador** es una función que transforma la respuesta del servidor (muchas veces con estructuras complejas o nombres de campos incómodos) en un modelo ideal para nuestra aplicación.

### Ejemplo de Adaptador:
```typescript
// character.adapter.ts
export const characterAdapter = (characters: Character[]) => 
  characters.map(c => ({ 
    ...c, 
    name: c.name.toUpperCase() 
  }));
```

### Aplicación en el Servicio:
```typescript
getCharacters(): Observable<Character[]> {
  return this.http.get<Character[]>(this.apiUrl)
    .pipe(map(characterAdapter));
}
```

---

## Evolución de la Suscripción

Existen tres formas principales de consumir estos datos, ordenadas de la menos recomendada a la más moderna:

### 1. Suscripción Manual con `takeUntilDestroyed`
Útil si necesitas procesar los datos en el código TypeScript, pero requiere cuidado para evitar fugas de memoria.
```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

constructor() {
  this.characterService.getCharacters()
    .pipe(takeUntilDestroyed())
    .subscribe(chars => this.characters = chars);
}
```

### 2. El Pipe `async` (La forma estándar)
Angular gestiona la suscripción y desuscripción automáticamente en el HTML.
```html
@let characters = (characters$ | async);

@if (characters) {
  <ul>
    @for (char of characters; track char.id) {
      <li>{{ char.name }}</li>
    }
  </ul>
}
```

### 3. Signals (La nueva forma)
Es el enfoque más limpio y eficiente. Convertimos el Observable en una señal reactiva nativa de Angular usando `toSignal()`.

**En el TypeScript:**
```typescript
import { toSignal } from '@angular/core/rxjs-interop';

// Convertimos el observable en una señal reactiva
characters = toSignal(this.characterService.getCharacters(), { initialValue: [] });
```

**En el HTML:**
```html
<section>
  @let charactersLocal = characters(); <!-- Invocamos la señal como función -->

  @if (charactersLocal.length > 0) {
    <ul>
      @for (char of charactersLocal; track char.id) {
        <li>{{ char.name }}</li>
      }
    </ul>
  } @else {
    <p>Cargando datos con Signals...</p>
  }
</section>
```

Al usar **Signals**, eliminamos la necesidad de manejar manualmente el flujo de RxJS en la vista, obteniendo un código más declarativo, predecible y fácil de depurar.