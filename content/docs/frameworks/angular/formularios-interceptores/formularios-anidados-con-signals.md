---
title: "Formularios anidados con Signals"
description: "Aprende a gestionar formularios complejos y dinámicos en Angular utilizando FormArray, componentes anidados y la potencia de las Signals para la reactividad."
---

## Introducción a Formularios Anidados

En aplicaciones reales, a menudo necesitamos formularios que manejen listas dinámicas de elementos (como una lista de productos en una factura o tareas en un proyecto). En Angular, esto se logra mediante **FormArray** y la anidación de **FormGroups**.

### Estructura de Datos
Primero definimos la interfaz que tendrá cada elemento (item) de nuestro formulario:

```typescript
export interface ItemForm {
  id: FormControl<number>;
  name: FormControl<string>;
  value: FormControl<number>;
}

// Un tipo para representar el grupo de cada item
export type CustomFormGroup = FormGroup<ItemForm>;
```

### Componente Padre (Contenedor)
El componente principal contendrá el `FormArray` y la lógica para añadir o calcular valores.

```typescript
export class FormParentComponent {
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    items: this.fb.array<CustomFormGroup>([]),
  });

  // Getter para facilitar el acceso al array en el HTML
  get items() {
    return this.form.controls.items;
  }

  // Convertimos los cambios del formulario en una Signal
  itemsChanges = toSignal(this.form.valueChanges);

  // Selector computado para el valor total
  totalValue = computed(() => {
    const data = this.itemsChanges();
    return data?.items?.reduce((total, item) => total + (Number(item?.value) || 0), 0) || 0;
  });

  addItem() {
    const id = this.items.length + 1;
    const itemForm = this.fb.group<ItemForm>({
      id: this.fb.control(id),
      name: this.fb.control("", { validators: [Validators.required] }),
      value: this.fb.control(0, { validators: [Validators.required] }),
    });
    this.items.push(itemForm);
  }
}
```

---

## Componente de Item Anidado

Delegar la lógica de cada ítem en un componente hijo mejora la mantenibilidad de formularios grandes.

```typescript
@Component({
  selector: 'app-form-child',
  template: `
    <div [formGroup]="formGroup()">
      <app-custom-input
        [control]="formGroup().controls.name"
        formControlName="name"
      />
      <app-custom-input
        [control]="formGroup().controls.value"
        formControlName="value"
      />
    </div>
  `
})
export class FormChildComponent {
  formGroup = input.required<FormGroup<ItemForm>>();
}
```

---

## Integración con ControlValueAccessor

Para crear inputs personalizados que sean compatibles con Angular Forms, implementamos la interfaz **`ControlValueAccessor`**.

```typescript
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true,
  }]
})
export class CustomInputComponent implements ControlValueAccessor {
  control = input.required<FormControl<any>>();

  onTouched = () => {};
  onChange = (_value: any) => {};

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable();
  }
}
```

---

## Caso Real: Factura con Productos

Para entender mejor este concepto, podemos imaginar "item" como un **Producto de una Factura**:

1.  **FormGroup Principal**: Representa la Factura.
2.  **FormArray (`items`)**: Es la lista de productos que el cliente compró.
3.  **Hijos (`FormChild`)**: Cada fila de la tabla de la factura donde escribimos el nombre y el precio del producto.
4.  **Signals**: Se usan para recalcular automáticamente el **Total de la Factura** cada vez que el usuario cambia un precio o añade un producto nuevo.

### Resumen Visual de la Jerarquía
```text
form = {
  items: [
    { id: 1, name: 'Mouse', value: 5000 },
    { id: 2, name: 'Teclado', value: 7000 }
  ]
}
```

Al usar esta arquitectura, cada mini-formulario (`FormGroup`) dentro del array tiene sus propias validaciones delegadas a los componentes hijos, manteniendo el código del componente principal limpio y enfocado en la lógica de negocio global.