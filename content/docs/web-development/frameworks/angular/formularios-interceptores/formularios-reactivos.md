---
title: "Formularios Reactivos"
---

> Formularios

- En Angular tenemos 2 formas de trabajar con formularios:

1. Formularios basados en plantillas
2. Formularios reactivos

- Dependiendo de la complejidad del formulario vamos a usar una forma u otra. Si queremos algo sencillo, los formularios basados en plantillas son los más básicos. Pero para algo más PRO, vamos a ver los formularios reactivos. Para los formularios siempre tenemos que importar los módulos FormsModule y ReactiveFormsModule.


> Formularios Reactivos

- En un componente donde queramos usar un formulario, vamos a crearlo usando FormBuilder y FormGroup.

export class RegisterComponent implements OnInit { 
	form: FormGroup; // Declaramos nuestro formulario llamado "form", y de tipo FormGroup

	constructor(private fb: FormBuilder) {} // Declaramos un creador de formularios llamado "fb", de tipo FormBuilder
	
	ngOnInit(): void { ... }
}
	
- Y en ese ngOnInit, le damos valor a nuestra variable "form". Para ello, usamos el método de FormBuilder llamado group:

	ngOnInit(): void {
	    this.form = this.fb.group({
	      nombreCompleto: new FormControl(null, Validators.required),
	      correo: new FormControl(null, Validators.compose([
	        Validators.required,
	        Validators.email
	      ])),
	      clave: new FormControl(null, Validators.compose([
	        Validators.required,
	        Validators.minLength(6)
	      ])),
	      edad: new FormControl(null, Validators.compose([
	        Validators.required,
	        Validators.min(18)
	      ]))
	    });
	  }
	  
- En este caso, lo que hacemos es usar el método group() de nuestro FormBuilder (la variable fb). Con este método indicamos cuál va a ser cada controlador de nuestro formulario (es decir, cada entrada/input). Para eso, le pasamos por parámetro un objeto. En este objeto, cada entrada va a ser un control de nuestro formulario (es decir, cada input a completarse). Como vemos, vamos a crearlos con el constructor de clase llamado FormControl, el cual recibe como primer parámetro, el valor por defecto del control, y después, un segundo parámetro opcional que va a ser un método llamado "Validators.compose()". Este método nos permite anidar distintas validaciones.

- Los Validators tienen 2 tipos de retorno, si el validator devuelve un objeto, es porque está devolviendo un error. Es decir, nos va a mostrar que falló la validación. Entonces, si devuelve el objeto MinLengthValidator, va a mostrar ese error.


>> Abreviación de sintaxis

- Si bien lo que explicamos recién está bien, hay una forma abreviada de declarar los controles, que es omitir el "new FormControl()", y directamente declarar un array. El funcionamiento va a ser el mismo, pero la sintaxis resume usar el constructor de forma explícita, veamos:

	this.form = this.fb.group({
	  nombreCompleto: [null, Validators.required],
	  correo: [null, [Validators.required, Validators.email]],
	  clave: [null, [Validators.required, Validators.minLength(6)]],
	  edad: [null, [Validators.required, Validators.min(18)]]
	});

- Como vemos, es lo mismo pero pasando un array en vez de usar el constructor de FormControl. El resultado final es el mismo.


- Ahora, vamos a crear un método de envío de datos. Es la función que se va a ejecutar cuando el usuario envíe el formulario.

	  onSubmit(): void {
	    if (this.form.valid) {
	      console.log('Formulario enviado ✅', this.form.value);
	      // Aca hacemos lo que necesitemos con los datos
	    } else {
	      console.log('Formulario inválido ❌');
	      this.form.markAllAsTouched(); // Muestra errores si no se tocaron los campos
	    }
	  }

- "Valid" es una propiedad booleana de los FormGroup. Si todos los FormControl del formulario son válidos, entonces "valid" va a ser true. Sino, va a ser false. Entonces, acá hacemos la validación. Y la gracia es que todos los valores ingresados por el usuario en cada control del formulario van a estar dentro de "form.value". Así que los sacamos de ahí, y ya con eso hacemos lo que queramos (como enviarlo a una API).

- El método form.markAllAsTouched() lo que hace es literalmente eso, marca como "touched" a todos los controles de nuestro formulario. Es decir, los marca como que el usuario interactuó con ellos. Y... ¿Por qué? Lo vamos a ver un poco más adelante en el HTML, y es que cuando un control de formulario ya fue "touched", es decir, ya fue tocado, se lo toma como que puede estar erróneo. Entonces, si ya está touched, se analiza si su valor actual es válido o no. Y si no lo es, se muestra el error. Lo que hace entonces este método, es primeramente marcar a todos como touched.


> HTML de este formulario

- Todo lo que hicimos está muy bien en cuanto a la lógica (TypeScript), pero ahora hay que respaldarlo en la vista del usuario, ya que nos tenemos que "conectar" a los controles de forma correcta.

	<form [formGroup]="form" (ngSubmit)="onSubmit()">
	  <div>
	    <label>Nombre completo</label>
	    <input type="text" formControlName="nombreCompleto" />
	    <span *ngIf="form.get('nombreCompleto')?.touched && form.get('nombreCompleto')?.invalid">
	      El nombre es obligatorio.
	    </span>
	  </div>
	
	  <div>
	    <label>Correo electrónico</label>
	    <input type="email" formControlName="correo" />
	    <span *ngIf="form.get('correo')?.touched && form.get('correo')?.hasError('required')">
	      El correo es obligatorio.
	    </span>
	    <span *ngIf="form.get('correo')?.touched && form.get('correo')?.hasError('email')">
	      El formato del correo no es válido.
	    </span>
	  </div>
	
	  <div>
	    <label>Contraseña</label>
	    <input type="password" formControlName="clave" />
	    <span *ngIf="form.get('clave')?.touched && form.get('clave')?.hasError('required')">
	      La contraseña es obligatoria.
	    </span>
	    <span *ngIf="form.get('clave')?.touched && form.get('clave')?.hasError('minlength')">
	      La contraseña debe tener al menos 6 caracteres.
	    </span>
	  </div>
	
	  <div>
	    <label>Edad</label>
	    <input type="number" formControlName="edad" />
	    <span *ngIf="form.get('edad')?.touched && form.get('edad')?.hasError('required')">
	      La edad es obligatoria.
	    </span>
	    <span *ngIf="form.get('edad')?.touched && form.get('edad')?.hasError('min')">
	      Debés ser mayor de edad (18+).
	    </span>
	  </div>
	
	  <button type="submit">Registrarse</button>
	</form>

- Bien, vamos por partes. Primero, en la declaración del <form> indicamos lo más importante: la vinculación con la lógica. Al hacer [formGroup]="form", lo que hacemos es decirle a la lógica TypeScript: "Che, ese formulario llamado "form" que tenés ahí, va a ser este que estoy declarando acá en la vista". Y el (ngSubmit)="onSubmit()" es vincular el evento de Submit, el cual se ejecuta cuando hacemos clic en el botón de confirmar del final, con la función onSubmit() que creamos en el TypeScript.

- Después, lo que hacemos es claro: Creamos distintas inputs, cada una con su label y su type, y lo más importante: el formControlName="". En este último atributo es donde tenemos que poner el mismo nombre que le pusimos al formControl en la lógica TypeScript. Se trata de vincular cada entrada/input del HTML, con cada formControl de la lógica.

- Y algo que agregamos también es un span para mostrar un posible error. En este caso está hecho de forma muy sencilla, básicamente lo que hacemos es un ngIf (que podría ser un bloque @if), en el que si el formulario tiene algún error claro, lo mostramos por escrito en el span. Para esto último usamos el método get() de los formularios en TypeScript: 

	form.get("elFormControl")
	
- Así obtenemos cada control de formulario que queramos (si no lo tiene, es null). Después, una vez que ya accedimos al control de formulario, también podemos acceder a distintas propiedades y métodos, por ejemplo la propiedad touched, la cual es un booleano. Si el control fue tocado, se pone en true, y sino, en false. Y también está el más útil, que es el método hasError(). Este método devuelve true o false dependiendo de si encuentra un error o no en la validación que le pasamos por parámetro.


> Otras formas de acceder a datos del formulario

- Además de "hasError(tipoDeError)", también podemos acceder de forma directa a los errores así:

	form.get('correo')?.errors?.['email'];
	
- Otros estados del formulario además de valid y touched pueden ser:

- dirty: indica si el valor cambió desde que se cargó el formulario.
- pristine: lo contrario a dirty.
- pending: útil si hacemos validaciones asíncronas.
- status: puede ser 'VALID', 'INVALID', 'PENDING', 'DISABLED'.

- Podemos resetear el formulario así:

	form.reset();

- Podemos deshabilitar un campo así:

	({ value: null, disabled: true })	
	
- También podemos desactivar o activar campos dinámicamente:
	
	this.form.get('edad')?.disable();
	this.form.get('edad')?.enable();
	

> Crear una validación personalizada

- Obviamente, podemos crear nuestros propios "validators", por ejemplo:

	function sinEspacios(control: AbsctractControl): ValidationErrors | null {
		const tieneEspacios = (control.value || '').includes(' ');
		return tieneEspacios ? { contieneEspacios: true }: null;
	}

- Lo usaríamos así en la lógica:

	nombreCompleto: [null, [Validators.required, sinEspacios]];

- Y así en el HTML:

	<span *ngIf="form.get('nombreCompleto')?.hasError('contieneEspacios')">
	  El nombre no puede contener espacios.
	</span>