---
title: "Input y Output. Comunicación entre componentes"
description: "@Input y @Output (Comunicación entre componentes)"
---


## @Input y @Output (Comunicación entre componentes)

- @Input y @Output son una característica muy útil de Angular, que no son ni más ni menos que dos decoradores. En este caso, decoradores de propiedad (Property Decorators). Su función es llevar a cabo la comunicación entre componentes (que se compartan datos entre sí).

- Para ver cómo podemos comunicar dos componentes distintos, vamos a crear un componente Padre, Hijo y HijoMostrar. Antes que nada, vamos a hacer que el componente padre importe a sus dos hijos en su archivo de lógica (TypeScript), y los muestre a ambos en su template (HTML), haciendo esto:

```typescript
<app-hijo-input></app-hijo-input>
<app-mostrar-></app-mostrar->
```
- Al invocar al componente `<app-padre>` dentro del HTML del componente app.component, estamos haciendo que AppComponent CONTENGA al componente 'padre'. Por lo tanto, el componente 'padre' va a ser hijo de App-Component. Y así con los demás: Los componentes Hijo y Mostrar son hijos del componente Padre, y serían "nietos" del componente AppComponent (el componente base de nuestra aplicación).

- Algo importante a decir es que este método de comunicación entre componentes siempre tiene la necesidad de que el padre invoque al hijo. Es decir, el componente padre llama, mediante su template HTML, al componente hijo. Y a partir de esa llamada se establece el intercambio de información. Esto es así con los @Input y @Output. Si nosotros quisieramos que la comunicación se de sin invocaciones de por medio, tendríamos que usar otros métodos relacionados a la reactividad en Angular (Servicios, RxJS, Observables, Signals, y demás).

- Ahora, la idea del Input-Output es ver CÓMO podemos pasarle datos desde el componente padre al componente hijo, y viceversa. Los @Input y @Output van a estar SIEMPRE en los componente hijo que quieran comunicarse con su padre. Sin ninguna excepción.

- **Un resumen visual sería el siguiente**: 

Decorador	Partida    ---->     Destino
____________________________________________
| @Input | PADRE | ----> | HIJO |
| --- | --- | --- | --- |
| @Output | HIJO | ----> | PADRE |

* Los @Input y @Output van siempre en el HIJO.
* Los elementos pasados en el HTML van siempre en el PADRE.

- Lo que vemos en este gráfico es que, cuando queremos pasar información del PADRE hacia el HIJO, tenemos que colocar el @Input en el componente Hijo. En cambio, si queremos pasar información del HIJO hacia el PADRE, tenemos que colocar el @Output en el componente Hijo. 

- Para recordarlo más fácil, "input" significa "entrada". Es decir, la información le esta "entrando" al componente Hijo, de parte de su componente padre. En cambio, cuando es "output", significa "salida". Es decir, la información está saliendo del componente hijo, dirigida hacia su componente padre.


## @Input (Hijo recibe información del Padre)

- Como dijimos, "input" significa "entrada". Es decir, al componente hijo le está ENTRANDO información del padre. Vamos a ver cómo se hace: 

```typescript
export class HijoInputComponent {
	@Input() variableHijo: string = 'por defecto';
}
```
- La sintaxis de @Input y @Output no tiene nada de especial: son simples decoradores. Y como sabemos, los decoradores pueden decorar propiedades de una clase. En este caso, estamos creando una propiedad llamada "variableHijo", la cual es de tipo string. Bueno, lo que hacemos poniéndole @Input() es asociarle dicho decorador, el cual, va a extender su funcionalidad (como todo decorador). 

- Y... ¿Qué funcionalidad le da el decorador @Input a la propiedad variableHijo? Le da la funcionalidad de recibir un valor, directo desde el padre. Entonces, el valor de "variableHijo" lo va a recibir desde su componente padre, va a ser la variable donde almacenemos la información recibida del componente padre.

- Para hacer la prueba y verlo por pantalla, vamos a poner esta línea en el HTML del hijo:

```typescript
<p>La variable tiene el valor: {{ variableHijo }}</p>
```
- Ahora, nos falta ver cómo hace el componente padre para pasarle un valor a esa variable llamada "variableHijo". Para eso, primero vamos al TypeScript del componente Padre:

```typescript
export class PadreComponent {
	variableInformacion: string = "Esto le tiene que llegar al hijo";
}
```
- Como vemos, nos creamos una variable de tipo string. Nuestro objetivo es que el valor de esta variable vaya a parar a la variable "variableHijo" del componente Hijo. Esto lo hacemos yendo al HTML del componente padre:

```typescript
<app-hijo-input [variableHijo]="variableInformacion" </app-hijo-input>
```
- Como vemos, estamos usando el Property Binding, uno de los bindeos que ya conocemos. De esta forma, estamos invocando al componente hijo y le estamos diciendo que: "A la variable 'variableHijo', del componente que estoy invocando, le voy a pasar el valor guardado en mi variable llamada 'variableInformacion'".

- Y listo. Ahora, en el HTML del hijo, donde pusimos {{ variableHijo }}, el mensaje que se va a ver es "Ejemplo". Esto es porque la variable "variableInformacion" con valor 'Esto le tiene que llegar al hijo' que hicimos en el padre, está PISANDO a la de variableHijo que hicimos en el hijo.



## @Output (Hijo envía información al Padre)

- La dinámica del @Output es un poco distinta a la de @Input. Acá tenemos que usar objetos de tipo EventEmitter porque la idea es que cuando el componente hijo necesita avisarle algo al padre, lo hace a través de un EVENTO, el cual él mismo va a emitir. Primero vamos a crear una input de tipo texto en el HTML de nuestro componente Hijo, así:

```typescript
<input type="text" [(ngModel)]="nombre">
<button (click)="agregarEmitido()>Agregar</button>
```
- **En el TypeScript del hijo, hacemos lo siguiente**: 

```typescript
nombre: string = "";
@Output() eventoDesdeHijo = new EventEmitter<string>();

agregarEmitido() {
	this.eventoDesdeHijo.emit(this.nombre);
}
```
- Acá lo que hacemos es crear una variable "nombre" de tipo string, la cual va a cambiar su valor en función de lo que el usuario ingrese en la input de tipo texto, esto sabemos que funciona así gracias al Two Way Binding [(ngModel)]. Después, podemos ver la declaración del decorador @Output, que va a decorar a una variable llamada eventoDesdeHijo. Esta variable va a ser un objeto de tipo EventEmitter, que recibe un genérico (al que siempre tenemos que especificarle `<string>`). 

- Después creamos un método "agregarEmitido", el cual se llama así porque "agregar" es la funcionalidad que vamos a buscar en este ejemplo (agregar el nombre del hijo a un array del padre). Y lo de "emitido" es porque es un evento que estamos emitiendo desde el hijo. Para hacerlo, usamos el objeto que declaramos antes llamado "eventoDesdeHijo", y de él usamos el método "emit". Este método lo que hace es, justamente, emitir el evento. Y podemos pasarle los argumentos que queramos: y ahí está la magia. Porque eso que va a recibir por parámetro el método "emit", va a ser la información que le llegue al padre. Y por eso, en este caso, lo que le pasamos es el valor de la variable "nombre". Así que el hijo lo que está haciendo es emitir un evento al cual le está almacenando información (una variable "nombre"). El padre va a escuchar que el hijo emitió un evento, y va a recibir esa variable de tipo "nombre" en él.

- Por este lado ya tenemos todo hecho, como dijimos, la gracia de la comunicación del hijo hacia el padre es que el hijo emita un evento, y el padre haga algo en base a la información que el hijo incluye en el evento emitido.

- Así que ahora, en el componente Padre vamos a crear un array en su TypeScript:

```typescript
arrayNombres: string[] = [];

recibirAgregar(nombreRecibido: string) {
	this.arrayNombres.push(nombreRecibido);
	console.log(this.arrayNombres);
}
```
- Como vemos, creamos el arrayNombres que es donde vamos a querer guardar el nombre recibido por el Hijo. Y lo que importa es el método recibirAgregar(), ya que este va a ser el método que se va a ejecutar en el momento en el que el componente Hijo emite su evento. Pero esa vinculación la vamos a hacer ahora en el HTML:

`<app-hijo-input>`[variableHijo]="variableInformacion" (eventoDesdeHijo)="recibirAgregar($event)"`</app-hijo-input>`

- Lo que hicimos fue invocar al hijo, agregándole un Event Binding (evento)="función()". En este caso, el evento es la variable del componente hijo llamada eventoDesdeHijo, y la función es la del componente padre, llamada recibirAgregar(). Dicho recibirAgregar() necesita siempre recibir un parámetro "$event", porque es al lugar a donde van a parar todos los argumentos que pase el componente hijo. En este caso, sería el string del nombre.

- **OJO**: También podemos ver que aparece el [variableHijo]="variableInformacion". Eso no tiene nada que ver con lo que estamos haciendo ahora, simplemente quedó del ejemplo anterior con @Input cuando el padre le pasaba info. al hijo. Pero lo dejamos como para demostrar que se pueden hacer ambas cosas a la vez (Obviamente, con el componente hijo declarando a todos los @Input o @Output que quiera).


## Tips extra

- Se pueden renombrar las inputs, en caso de que queramos que el nombre que usamos en el Padre sea distinto al nombre real de la propiedad del hijo. Eso se haría así:

```typescript
@Input('aliasPadre') variableHijo: string;
```
- **Y después, en el padre invocaríamos así**: 

```typescript
<app-hijo-input [aliasPadre]="valor">
```
- Otro tip es que podemos marcar un input como opcional usando "?" en el HTML del Padre, para evitar errores por si no siempre queremos pasar información:

```typescript
<app-hijo-input [variableHijo]="variableInformacion"?>
```