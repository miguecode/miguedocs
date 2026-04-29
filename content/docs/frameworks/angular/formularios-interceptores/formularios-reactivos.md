---
title: "Formularios Reactivos"
description: "Aprende a dominar los formulaios reactivos en Angular, la forma más potente y escalable de gestionar la entrada de datos, validaciones y estados dinámicos."
---

## Introducción a los Formularios

En Angular existen dos formas principales de trabajar con formularios:

1.  **Formularios basados en plantillas (*Template-driven*)**: Para casos muy sencillos donde la lógica reside mayormente en el HTML.
2.  **Formularios reactivos (*Reactive Forms*)**: Para escenarios profesionales, complejos y con validaciones dinámicas.

Para usar formularios reactivos, es necesario importar tanto `FormsModule` como **`ReactiveFormsModule`** en los `imports` de tu componente o módulo.

---

## Creación de un Formulario Reactivo

Los formularios reactivos se basan en un modelo de datos definido en el TypeScript. Utilizamos **`FormBuilder`** para crear instancias de **`FormGroup`** y **`FormControl`**.

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({ ... })
export class RegisterComponent implements OnInit {
  // Inyectamos FormBuilder
  private fb = inject(FormBuilder);
  
  // Declaramos el grupo del formulario
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      edad: [null, [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado ✅', this.form.value);
      // Aquí procesaríamos los datos (ej: enviar a una API)
    } else {
      console.log('Formulario inválido ❌');
      this.form.markAllAsTouched(); // Marca todos como tocados para mostrar errores
    }
  }
}
```

### Validaciones e Indicadores de Estado
Los validadores pueden devolver un objeto de error (si la validación falla) o `null` (si es correcta). El método `markAllAsTouched()` es vital para forzar la visualización de errores si el usuario intenta enviar el formulario sin haber interactuado con todos los campos.

---

## Vinculación en el HTML (Vista)

Para conectar la lógica con la vista, usamos las directivas `[formGroup]` y `formControlName`.

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div>
    <label>Nombre completo</label>
    <input type="text" formControlName="nombreCompleto" />
    @if (form.get('nombreCompleto')?.touched && form.get('nombreCompleto')?.invalid) {
      <span class="error">El nombre es obligatorio.</span>
    }
  </div>

  <div>
    <label>Correo electrónico</label>
    <input type="email" formControlName="correo" />
    @if (form.get('correo')?.touched) {
      @if (form.get('correo')?.hasError('required')) {
        <span class="error">El correo es obligatorio.</span>
      }
      @if (form.get('correo')?.hasError('email')) {
        <span class="error">El formato del correo no es válido.</span>
      }
    }
  </div>

  <button type="submit" [disabled]="form.pending">Registrarse</button>
</form>
```

### Estados del Formulario
Angular rastrea automáticamente el estado de cada campo:
*   **`touched` / `untouched`**: ¿El usuario hizo clic/foco en el campo?
*   **`dirty` / `pristine`**: ¿El valor del campo ha cambiado desde su inicio?
*   **`valid` / `invalid`**: ¿Cumple con todas las reglas de validación?
*   **`pending`**: ¿Hay alguna validación asíncrona en curso?

---

## Validaciones Personalizadas

Puedes crear tus propias funciones de validación para reglas de negocio específicas:

```typescript
import { AbstractControl, ValidationErrors } from '@angular/forms';

function sinEspacios(control: AbstractControl): ValidationErrors | null {
  const tieneEspacios = (control.value || '').includes(' ');
  return tieneEspacios ? { contieneEspacios: true } : null;
}

// Uso en la definición del control:
// nombreCompleto: ['', [Validators.required, sinEspacios]]
```

En el HTML, podrías detectarlo así:
```html
@if (form.get('nombreCompleto')?.hasError('contieneEspacios')) {
  <span class="error">El nombre no puede contener espacios.</span>
}
```

### Métodos útiles
*   **`form.reset()`**: Limpia los valores y resetea los estados de validación.
*   **`this.form.get('campo')?.disable()`**: Deshabilita un control específico dinámicamente.
*   **`this.form.get('campo')?.setValue('Nuevo Valor')`**: Actualiza el valor de un campo programáticamente.