---
title: "Pipes (Dando formato a los datos)"
description: "Aprende a usar los pipes en Angular para transformar y dar formato a los datos en la vista de manera sencilla y eficiente."
---

## Pipes (Símbolo `|`)

El término **Pipe** significa "tubería". En Angular, la idea de un pipe es tomar un dato desde la lógica (TypeScript) y, antes de mostrarlo en pantalla (HTML), transformarlo visualmente. Es como hacer pasar el dato por un tubo que modifica su apariencia sin alterar el valor original almacenado en la memoria o la base de datos.

> [!NOTE]
> No confundas los pipes de la vista con el método `.pipe()` de los Observables de RxJS. Aunque comparten nombre, los pipes de Angular son herramientas de formato para los templates.

### ¿Por qué usarlos?
El objetivo principal es la separación de responsabilidades. Por ejemplo, te conviene guardar un DNI como un número de 8 dígitos puro (`43596276`), pero al usuario le resulta más legible verlo con puntos (`43.596.276`). El pipe se encarga de esa transformación visual en el momento del renderizado.

Otros ejemplos comunes:
*   **Fechas**: Transformar un objeto `Date` en un formato legible (`06/06/2024`).
*   **Precios**: Añadir símbolos de moneda y decimales uniformes.
*   **Texto**: Acortar strings muy largos añadiendo puntos suspensivos ("Ver más...").

---

## Pipes integrados en Angular

Angular ya incluye varios pipes listos para usar. Estos son algunos de los más comunes:

### `UpperCasePipe` y `LowerCasePipe`
Transforman el texto a mayúsculas o minúsculas.
```html
<h1>{{ title | uppercase }}</h1>
```

### `CurrencyPipe`
Ideal para mostrar valores monetarios. Admite parámetros para configurar la moneda y el formato.
```html
<p>Precio: {{ total | currency:'EUR' }}</p>
<!-- Resultado: €1,000.00 -->
```

### `JsonPipe`
Muy útil durante el desarrollo para depurar y ver el contenido de un objeto literal o array directamente en el HTML.
```html
<pre>{{ usuarioObjeto | json }}</pre>
```

---

## Crear un Pipe Personalizado

Para crear tu propio pipe, utiliza el CLI de Angular:

```bash
ng generate pipe pipes/truncate
```

Esto generará una clase con el decorador **`@Pipe`** y el método **`transform`**:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  // El primer parámetro es el valor a transformar
  // Los siguientes son argumentos opcionales del pipe
  transform(value: string, limit: number = 10, trail: string = '...'): string {
    if (!value) return '';
    
    if (value.length > limit) {
      return value.substring(0, limit) + trail;
    }
    
    return value;
  }
}
```

### Cómo usarlo en el HTML
Podemos pasarle parámetros usando los dos puntos (`:`) y encadenar varios pipes juntos:

```html
<!-- Recortar a 20 caracteres y luego pasar a mayúsculas -->
<p>{{ descripcionLarga | truncate:20:' (leer más)' | uppercase }}</p>
```

### Parámetros opcionales
En el método `transform`, puedes definir valores por defecto o usar el signo `?` para marcar argumentos como opcionales:
```typescript
transform(value: string, showPoints: boolean = true, maxChars?: number): string {
  // lógica...
}
```