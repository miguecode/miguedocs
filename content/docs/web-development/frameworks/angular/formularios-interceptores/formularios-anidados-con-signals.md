---
title: "Formularios anidados con Signals"
description: "Formularios anidados y con Signals"
---


## Formularios anidados y con Signals

```typescript
export interface ItemForm {
	id: FormControl<number>,
	name: FormControl<string>,
	value: FormControl<number>,
}

export type CustomFormGroup = FormGroup<ItemForm>;

export class FormParentComponent {
	fb = inject(NonNullableFormBuilder);

	form: FormGroup<{ items: FormArray<CustomFormGroup> }> = this.fb.group({
		items: this.fb.array<CustomFormGroup>([]),
	});
}
```
- Nuestro formulario principal (el llamado "form"), va a ser un contenedor de formularios. Es decir, su array de items va a ser un formulario por cada item. Cada formulario tiene un ID, un nombre y un valor.

```typescript
get items() {
	return this.form.controls.items;
}

itemsChanges = toSignal(this.form.valueChanges);


addItem() {
	const id = this.items.length + 1;
	const itemForm = this.fb.group<itemForm>({
		id: this.gb.control(id),
		name: this.fb.control("", { validators: [Validators.required] }),
		value: this.fb.control(0, { validators: [Validators.required] }),
	})
}
```
- **Y en HTML**: 

```html
<div>
	<button (click)="addItem()">Agregar Item</button>

	@for (formGroup of items(); track formGroup.controls.id.value) {

	}
</div>
```
## FormChild

- Ahora, vamos a crear un componente llamado formChild. La idea es que ahora, por cada item, es decir, por cada formulario, ESTE va a ser nuestro formulario. El formChild se va a ocupar de ser cada uno de esos FormGroup.

```typescript
export class FormChildComponent {
	formGroup = input.required<FormGroup<ItemForm>>();
}
```
- **Y en HTML**: 

```html
<div [formGroup]="formGroup()">
	<!-- Ahora sí, aca trabajamos con cada input -->

</div>
```
- Vamos a crear un nuevo componente, llamado CustomInput:

```typescript
@Component({
	...
	providers: [{
		provide: NG_VALUE_ACCESOR,
		useExisting: forwardRef(() => CustomInputComponent),
		multi: true,
	}]
})
export class CustomInputComponent implements ControlValueAccesor {
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

	setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.control().disable() : this.control().enable();
	}
}
```
- **Y en el HTML, hacemos**: 

```html
@let localControl = control();

<input [formControl]="localControl" (blur)="onTouched()" />

@if (localControl.invalid && (localControl.dirty || localControl.touched)) {
	<div class="error-messages">
		@if (localControl.errors?.['required']) {
			<span>Este campo es obligatorio</ span>
		}
	</ div>
}
```
- **Ahora, en el FormChild, hacemos**: 

```typescript
import: [CustomInputComponent]
```
- **Y en su HTML**: 

```html
<div [formGroup]="formGroup()">
	<app-custom-input
	[control]="formGroup().controls.name"
	formControlName="name"
	/>

	<app-custom-input
	[control]="formGroup().controls.value"
	formControlName="value"
	/>
</ div>
```
- Y si volvemos al HTML del primer formulario que hacíamos (en FormParentComponent) lo podemos dejar así:

```html
<div>
	<button (click)="addItem()">Agregar Item</button>

	@for (formGroup of form.controls.items.controls; track formGroup.controls.id.value) {
		<app-form-child [formGroup]="formGroup" />
	}
</div>
```
- **Y en su TS, hay que hacer unos retoques más**: 

```typescript
totalValue = computed(() => {
	const value = this.itemChanges()?.items?.reduce((total, item) => total + (Number(item?.value) || 0), 0);
	return value;
});









///// Charla con CHATGPT

¡Perfecto! 🔥 Gracias por compartir todo eso, está buenísimo lo que estás viendo. A ver, vamos paso por paso para entender la idea general y después vamos a ir bajando a tierra cada parte de lo que escribiste 💡.
```
🧠 ¿Qué son formularios anidados y por qué usarlos?
Imaginá este caso real:
Estás creando un formulario para cargar una factura. La factura tiene:

Datos del cliente.

Y una lista de productos que el cliente compró.

Cada producto tiene:

Un ID

Un nombre

Un precio

💡 En este escenario, lo que tenés es un formulario padre con un array de formularios hijos. Cada uno de esos "formularios hijos" representa un producto distinto que se cargó en esa factura.

⚠️ Y eso es justamente lo que estás viendo: el formulario principal tiene una propiedad items que es un FormArray, y cada elemento de ese array es un FormGroup con la estructura de un item/producto.

🧱 Estructura general del ejemplo que anotaste
📌 1. ItemForm (la forma de cada ítem)
ts
Copiar
Editar
export interface ItemForm {
  id: FormControl`<number>`;
  name: FormControl`<string>`;
  value: FormControl`<number>`;
}
Representa un solo ítem/producto del formulario.

📌 2. FormGroup principal
ts
Copiar
Editar
form: FormGroup<{ items: FormArray`<CustomFormGroup>` }> = this.fb.group({
  items: this.fb.array`<CustomFormGroup>`([]),
});
Ese form tiene una única propiedad items, que es un FormArray. Cada elemento del array es un FormGroup`<ItemForm>`, o sea, un formulario completo para un ítem.

📌 3. Agregar ítems dinámicamente
ts
Copiar
Editar
addItem() {
  const id = this.items.length + 1;
  const itemForm = this.fb.group`<ItemForm>`({
```typescript
id: this.fb.control(id),
name: this.fb.control("", { validators: [Validators.required] }),
value: this.fb.control(0, { validators: [Validators.required] }),
```
  });
  this.items.push(itemForm);
}
Esto te permite agregar ítems dinámicamente al array. Lo que sería como agregar productos a una factura, o tareas a una lista, etc.

👶 ¿Y por qué usar un componente hijo?
Cuando tenés muchos campos repetitivos, es mejor delegar la lógica de cada ítem en un componente hijo, así:

html
Copiar
Editar
@for (formGroup of items(); track formGroup.controls.id.value) {
  <app-form-child [formGroup]="formGroup" />
}
Y FormChild simplemente trabaja con el formGroup que le pasás y pinta sus inputs.

✨ ¿Y por qué usar CustomInputComponent?
Esto es para crear un input completamente personalizado, pero compatible con Angular Forms (por eso implementa ControlValueAccessor). Te permite:

Controlar cómo se escribe el valor en el input.

Controlar cómo se informa que fue tocado.

Mostrar errores personalizados.

Es muy útil si querés crear, por ejemplo, un input con estilos especiales, iconos, máscaras, etc.

🧠 Resumen visual
ts
Copiar
Editar
form = {
  items: [
```typescript
{ id: 1, name: 'Mouse', value: 5000 },
{ id: 2, name: 'Teclado', value: 7000 },
...
```
  ]
}
Cada item de items es un FormGroup con sus controles. Y en la vista, iterás sobre esos items y para cada uno, pintás un FormChild que renderiza los inputs.

¿Querés que te arme un mini ejemplo visual como si fuera una factura o carrito de compras para que veas cómo esto se aplica en un caso concreto? También te puedo explicar con un diagrama o comparar contra un formulario no anidado. Vos decime qué preferís 🙌






Tú dijiste:
ah... o sea que todo el tiempo en el ejemplo este cada vez que se habla de "Item" es refiriendonos a producto o al Item de una factura? Yo pensaba en "item" como una palabra en general, no en un producto


ChatGPT Plus
¡Exactamente! 😄 En este contexto, "item" es una palabra genérica, pero la intención práctica del ejemplo es mostrar algo tipo “producto en una factura” o “tarea en una lista”. Gentleman Programming usó item como nombre neutral, pero la estructura es idéntica a lo que usarías para representar productos en un carrito, facturas, servicios, tareas, etc.

💬 Entonces sí:
Cada vez que ves algo como:

ts
Copiar
Editar
form: FormGroup<{ items: FormArray`<CustomFormGroup>` }>
...podés leerlo mentalmente como:

ts
Copiar
Editar
// formulario con una lista de productos
form: FormGroup<{ productos: FormArray`<FormularioDeProducto>` }>
Y todo lo demás también cobra más sentido:

addItem() 👉 sería agregarProducto()

ItemForm 👉 sería ProductoForm

FormChildComponent 👉 sería ProductoFormComponent

🧠 En resumen:
"item" es una abstracción. Lo importante es que cada "item" es una entidad repetible, con una forma estructurada (como producto, tarea, servicio, contacto, etc.), y por eso te conviene tenerlo como un formulario anidado.

¿Querés que te ayude a "rebautizar" todo el ejemplo con un caso más real como una factura, para que te quede más claro cómo usarlo en tu propio código? Puedo convertirlo todo a un caso de "Factura con Productos". 🔁🧾






¡Perfecto! Vamos a traducir el ejemplo completo a un caso real de una Factura con Productos. Vas a ver cómo todo se acomoda mucho mejor en la cabeza una vez que cambiamos los nombres abstractos por algo realista. 🧠💡

🧾 CASO REAL: Factura con Productos
✅ Estructura de cada producto (antes llamado Item):
ts
Copiar
Editar
export interface ProductoForm {
  id: FormControl`<number>`;
  nombre: FormControl`<string>`;
  precio: FormControl`<number>`;
}

export type ProductoFormGroup = FormGroup`<ProductoForm>`;
✅ Componente padre: FacturaComponent
ts
Copiar
Editar
@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FormChildComponent], // ahora representa un producto
})
export class FacturaComponent {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
```typescript
productos: this.fb.array<ProductoFormGroup>([]),
```
  });

  get productos() {
```typescript
return this.form.controls.productos;
```
  }

  productosChanges = toSignal(this.form.valueChanges);

  addProducto() {
```typescript
const id = this.productos.length + 1;
const productoForm = this.fb.group<ProductoForm>({
  id: this.fb.control(id),
  nombre: this.fb.control('', { validators: [Validators.required] }),
  precio: this.fb.control(0, { validators: [Validators.required] }),
});

this.productos.push(productoForm);
```
  }

  total = computed(() => {
```typescript
const data = this.productosChanges();
return data?.productos?.reduce((acc, prod) => acc + (prod?.precio ?? 0), 0) || 0;
```
  });
}
✅ HTML de FacturaComponent
html
Copiar
Editar
`<div>`
  `<h2>`Factura`</h2>`
  <button (click)="addProducto()">Agregar producto`</button>`

  @for (formGroup of productos(); track formGroup.controls.id.value) {
```typescript
<app-producto-form [formGroup]="formGroup" />
```
  }

  `<h3>`Total: {{ total() }}`</h3>`
`</div>`
✅ Componente hijo: ProductoFormComponent (antes FormChild)
ts
Copiar
Editar
@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule],
})
export class ProductoFormComponent {
  formGroup = input.required<FormGroup`<ProductoForm>`>();
}
HTML:
html
Copiar
Editar
<div [formGroup]="formGroup()">
  <app-custom-input
```typescript
[control]="formGroup().controls.nombre"
formControlName="nombre"
```
  />
  <app-custom-input
```typescript
[control]="formGroup().controls.precio"
formControlName="precio"
```
  />
`</div>`
✅ Componente CustomInputComponent (sin cambios, solo cambia el contexto)
Este es el mismo, pero ahora lo estás usando para los campos nombre y precio.

ts
Copiar
Editar
@Component({
  selector: 'app-custom-input',
  standalone: true,
  providers: [{
```typescript
provide: NG_VALUE_ACCESSOR,
useExisting: forwardRef(() => CustomInputComponent),
multi: true,
```
  }],
})
export class CustomInputComponent implements ControlValueAccessor {
  control = input.required<FormControl`<any>`>();

  onTouched = () => {};
  onChange = (_value: any) => {};

  writeValue(value: any): void {
```typescript
if (value !== this.control().value) {
  this.control().setValue(value, { emitEvent: false });
}
```
  }

  registerOnChange(fn: any): void {
```typescript
this.onChange = fn;
```
  }

  setDisabledState(isDisabled: boolean): void {
```typescript
isDisabled ? this.control().disable() : this.control().enable();
```
  }
}
HTML:
html
Copiar
Editar
@let localControl = control();

<input [formControl]="localControl" (blur)="onTouched()" />

@if (localControl.invalid && (localControl.dirty || localControl.touched)) {
  <div class="error-messages">
```typescript
@if (localControl.errors?.['required']) {
  <span>Este campo es obligatorio</span>
}
```
  `</div>`
}
🎯 Ahora todo tiene mucho más sentido:
Estás creando una Factura que tiene una lista de productos.

Cada producto tiene su propio mini-formulario para validación individual.

Usás FormArray para poder agregar/quitar productos dinámicamente.

Usás Signals para reaccionar al formulario completo y calcular, por ejemplo, el total de la factura.