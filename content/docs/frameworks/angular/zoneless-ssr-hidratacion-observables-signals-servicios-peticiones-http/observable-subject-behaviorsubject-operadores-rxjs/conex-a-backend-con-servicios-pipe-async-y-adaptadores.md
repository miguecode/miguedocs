---
title: "Conexión a Backend: Servicios, Adaptadores y Pipe Async"
description: "Aprende a integrar peticiones HTTP en tus servicios de Angular, utilizar adaptadores para una arquitectura limpia y gestionar suscripciones eficientemente mediante el Pipe Async."
---

## Conectando el Backend con Servicios

En Angular, la comunicación con servicios externos se gestiona a través del módulo `HttpClient`. Para mantener una arquitectura limpia y escalable, centralizamos estas peticiones en **Servicios**, delegando la lógica de negocio y la transformación de datos fuera de los componentes.

### Configuración Base del Servicio

Para comenzar, inyectamos el `HttpClient` en nuestro servicio:

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

  // Obtener personajes (GET)
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  // Actualizar personaje (PUT)
  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(this.apiUrl, character);
  }

  // Eliminar personaje (DELETE)
  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

---

## Patrón Adaptador (Clean Architecture)

Los **Adaptadores** son funciones intermedianas que transforman la respuesta "cruda" del backend en un formato que nuestra aplicación consuma cómodamente. Esto desacopla nuestra lógica de la estructura de datos externa, facilitando el mantenimiento si la API cambia en el futuro.

### Definición del Adaptador
```typescript
// character.adapter.ts
export const characterAdapter = (characters: Character[]): Character[] => 
  characters.map(c => ({
    ...c,
    name: c.name.toUpperCase() // Transformación de negocio
  }));
```

### Aplicación en el Servicio con `pipe`
```typescript
import { map } from 'rxjs/operators';

getCharacters(): Observable<Character[]> {
  return this.http.get<Character[]>(this.apiUrl)
    .pipe(
      map(characterAdapter) // Usamos el adaptador dentro del flujo de RxJS
    );
}
```

---

## Gestión Eficiente de Suscripciones

Suscribirse manualmente a un Observable (`.subscribe()`) conlleva el riesgo de **fugas de memoria** (*memory leaks*) si no nos desuscribimos al destruir el componente. Existen dos formas modernas de solucionar esto:

### 1. Operador `takeUntilDestroyed()` (TypeScript)
Este operador de Angular (v16+) automatiza la desuscripción cuando el componente, directiva o servicio se destruye.

```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export class ListaComponent {
  characters: Character[] = [];

  constructor() {
    inject(CharacterService).getCharacters()
      .pipe(takeUntilDestroyed()) // Desuscripción automática
      .subscribe(chars => this.characters = chars);
  }
}
```

### 2. Pipe Async (HTML) - La mejor práctica
Es la forma más limpia y recomendada. Angular se encarga de la suscripción, la actualización de la vista y la desuscripción automática al final del ciclo de vida.

**En el TypeScript:**
```typescript
// No nos suscribimos aquí, solo guardamos la referencia al flujo
characters$ = inject(CharacterService).getCharacters();
```

**En el HTML (Sintaxis Moderna):**
```html
<section>
  <!-- El pipe async resuelve el observable y @let guarda el valor -->
  @let characters = (characters$ | async);

  @if (characters) {
    <ul>
      @for (char of characters; track char.id) {
        <li>{{ char.name }}</li>
      }
    </ul>
  } @else {
    <p>Cargando personajes...</p>
  }
</section>
```

El **Pipe Async** es intrínsecamente reactivo: cada vez que el servidor emite nuevos datos, el DOM se actualiza automáticamente sin una sola línea de código manual de actualización de variables.