---
title: "Single Source of Truth con Signals (Parte 2)"
description: "Aprende a consumir la Fuente de Verdad usando señales computadas y a implementar métodos de actualización (CRUD) reactivos asegurando la inmutabilidad de los datos."
---

## Consumo del Servicio en el Componente

Para que un componente utilice los datos del servicio de forma reactiva, lo ideal es crear una **señal computada** (`computed`). Esto asegura que el componente se actualice automáticamente cada vez que el estado global del servicio cambie.

```typescript
import { Component, inject, computed, Signal } from '@angular/core';
import { CharacterService } from './character.service';

@Component({ ... })
export class PersonajesListComponent {
  private characterService = inject(CharacterService);

  // Señal derivada: reacciona cada vez que state() cambie en el servicio
  characters: Signal<Character[]> = computed(() =>
    this.characterService.getFormattedCharacters()
  );
}
```

### Visualización en el HTML
Utilizamos el bloque `@let` para obtener el valor de la señal una sola vez y recorrerlo con `@for`:

```html
<section>
  @let lista = characters();

  @for (char of lista; track char.id) {
    <article>
      <h3>{{ char.name }} {{ char.lastName }}</h3>
      <p>Edad: {{ char.age }}</p>
    </article>
  } @empty {
    <p>No hay personajes disponibles.</p>
  }
</section>
```

---

## ¿Qué es `computed()`?

La función `computed()` crea una señal de **solo lectura** cuyo valor depende de otras señales. 
*   **Reactividad Automática**: Si alguna de las señales utilizadas dentro del `computed` cambia, se marca como sucia y se recalcula en el siguiente acceso.
*   **Eficiencia**: Solo se ejecuta si los valores de los que depende han cambiado realmente.

```typescript
const precio = signal(100);
const conIva = computed(() => precio() * 1.21);

console.log(conIva()); // 121
precio.set(200);
console.log(conIva()); // 242 (recalculado automáticamente)
```

---

## Métodos CRUD en la Arquitectura SSoT

Para modificar los datos, el servicio debe asegurar que se cree una **nueva referencia** del mapa interno, disparando así la reactividad de todas las señales computadas que dependen de él.

### 1. Actualizar/Editar (`updateCharacter`)
Cuando recibimos un personaje editado, actualizamos el mapa creando una copia previa para mantener la inmutabilidad:

```typescript
updateCharacter(character: Character): void {
  // Simulamos una petición HTTP exitosa
  of(character).subscribe((res) => {
    this.state.update((current) => {
      const updatedMap = new Map(current.characters);
      updatedMap.set(res.id, res);
      return { characters: updatedMap };
    });
  });
}
```

### 2. Eliminar (`deleteCharacter`)
Buscamos el personaje por su clave (ID) y lo removemos creando un nuevo mapa:

```typescript
deleteCharacter(id: number): void {
  // Simulamos respuesta de éxito del backend
  of({ status: 200 }).subscribe(() => {
    this.state.update((current) => {
      const updatedMap = new Map(current.characters);
      updatedMap.delete(id);
      return { characters: updatedMap };
    });
  });
}
```

### 3. Consultar por ID (`getCharacterById`)
Este es un acceso directo de lectura síncrona:

```typescript
getCharacterById(id: number): Character | undefined {
  return this.state().characters.get(id);
}
```

> [!IMPORTANT]
> El uso de **`state.update()`** es preferible al `set()` cuando necesitamos el valor previo del estado para construir el nuevo, garantizando que el flujo de datos sea atómico y predecible.