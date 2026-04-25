---
title: "Directivas Estructurales y Directivas de Atributo"
description: "Directivas en Angular"
---


## Directivas en Angular

- Las directivas hacen que Angular sea una plataforma estructural, ya que son las que se encargan de brindarle funcionalidad extra a un elemento del DOM, que antes no la tenía. Existen 2 tipos de directivas: las estructurales y las de atributo. Para ambos tipos, Angular ya viene con sus propias directivas, pero lo interesante es que nosotros podemos crear nuestras propias directivas, ya sean estructurales o de atributo. Vamos a diferenciarlas rápidamente:

1. Directivas estructurales: Son las que modifican la estructura del elemento, y por ende, de nuestro DOM.
2. Directivas de atributo: Son las que modifican al componente, pero no a su estructura en el DOM.

- El comando de Angular CLI para crear una directiva es:

```text
ng generate directive directives/miPrimeraDirectiva
```
## Directivas de Estructura (estructurales)

- Las directivas estructurales son aquellas que modifican la estructura del elemento al cual se aplica, y por ende, afectan a la estructura de nuestro DOM. Se usan para determinar si un elemento se renderiza o no, o cuántas veces se renderiza. Ejemplos de directivas estructurales pueden ser *ngIf, *ngFor o *ngSwitch.

*ngIf: Es un condicional que se leería como "Si esto es truthy, el elemento se renderiza. Sino, no".
*ngFor: Es un bucle, va a renderizar al elemento tantas veces como lo indique el for.
*ngSwitch: Como un switch, va a renderizar un elemento u otro dependiendo de cuál sea el valor a jugzar.

- **Se escriben en el código HTML, de esta manera**: 

```html
<div *ngIf=""></div>
<div *ngFor=""></div>
```
- Las directivas estructurales se escriben con un asterisco * adelante.

- **OJO**: Para poder usarlas, las tenemos que importar. Antes, lo que se hacía era importar el módulo CommonModule, el cual contenía a ngIf, ngFor y otros elementos básicos de Angular. Pero ahora, es más eficiente importar directamente lo que vamos a usar, y no todo el CommonModule, así que podemos simplemente importar NgIf, así:

```typescript
@Component({
	imports: [NgIf]
})
```
- El *ngIf también tiene su famoso Else, el cual va de la mano con un `<ng-template>`, veamos:

```html
<div *ngIf="isVisible; else elseBlock">Se ve si isVisible es true</div>
<ng-template #elseBlock">Se ve si isVisible es false, ya que cae en elseBlock</ng-template>
```
- El `<ng-template>` es un elemento del DOM que se renderiza sólo cuando se lo indicamos.

- Otra cosa que existe es el `<ng-container>` es contenido visible, pero que a la hora de renderizarse, se borra. Sirve porque las directivas estructurales tienen una limitación: no se pueden declarar más de una a la vez en el mismo elemento. Entonces, este elemento nos ayuda a jugar con eso y poder aplicar distintas directivas estructurales. Pero la verdad es que es más complicado de lo que debería, así que en reemplazo de eso, apareció la Control Flow Syntax, que la vamos a ver en otro apunte. Spoiler: es escribir los if como si fuesen bloques @if { Elementos } @else { Elementos }.


## Directivas *ngFor y *ngSwitch:

- No tienen mucha ciencia, funcionan como un For y un Switch. El tracbky del For es necesario para evitar errores.

```html
<ul>
	<li *ngFor="let name of names trackby">{{ name }}</p>
</ul>

<div [ngSwitch]="selectedValue">
	<p *ngSwitchCase="'option 1'">Option 1</p>
	<p *ngSwitchCase="'option 2'">Option 2</p>
	<p *ngSwitchCase="'option 3'">Option 3</p>
	<p *ngSwitchDefault>No option selected</p>
</div>
```
### Crear nuestra propia directiva estructural

```typescript
@Directive({
	standalone: true,
	selector: '[appShowOnScreenSize]'
})
export class appShowOnScreenSizeDirective implements OnInit{
	@Input() appShowOnScreenSize: "small" | "medium" | "large";

	constructor() {
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
	}{}

	ngOnInit {
		this.updateView();
		window.addEventListener('resize', this.updateView.bind(this));
	}

	private updateView {
		const width = window.innerWidth;

		this.viewContainer.clear();

		if (this.shouldShowContent(width)) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}

	private shouldContent(width: number): boolean {
		if (this.appShowOnScreenSizeDirective === 'small' && width < 600) {
			return true;
		}

		if (this.appShowOnScreenSizeDirective === 'medium' && width >= 600 width <= 1024) {
			return true;
		}

		if (this.appShowOnScreenSizeDirective === 'large' && width >= 1024) {
			return true;
		}

		return false;
	}
}
```
- Esta directiva es estructural ya que altera a la estructura de nuestro DOM. Para invocarla, tendríamos que hacer lo siguiente en nuestro código HTML:

```html
<div *appShowOnScreenSize="'small'">Contenido para pantallas pequeñas</div>
```
- Como vemos, se le pone un " * " adelante, y va dentro del tag HTML.



## Directivas de Atributos

- Estas directivas modifican cómo se van a ver nuestros elementos HTML. Se tienden a escribir entre []. Un ejemplo de directiva de atributo puede ser ngClass, que se usaría de esta forma en HTML:

```html
<div [ngClass]="{ 'active': isActive }"></div>
```
- Como vemos, se escriben entre corchetes [ ].


### Crear nuestra propia directiva de atributo

@Directive({
```sql
standalone: true,
select: "[appHighlight]"
```
})
export class HightlightDirective {
```typescript
constructor(private el: ElementRef, private renderer: Renderer2) {};
@Input() highlightColor  = '#F00';

@HostListener("mouseenter")
onMouseEnter() {
	this.renderer.setStyle(this.el.nativeElement, "background-color", highlightColor);
}

@HostListener("mouseleave")
onMouseLeave() {
	this.renderer.removeStyle(this.el.nativeElement, "background-color");
}
```
}

- @HostListener es un decorador (en este caso, decorador de método), cuya función es ponerse a escuchar un evento. Y al dispararse, ejecutar el método que está decorando.

- Esta directiva es de atributo ya que no altera a la estructura de nuestro DOM, sino que simplemente actúa en cómo se ve el elemento. En este caso, le cambia el background-color. Para invocar esta directiva, tendríamos que hacer lo siguiente en nuestro código HTML:

```text
<p [appHighlight]="green">Pasa el mouse sobre este elemento para resaltar su contenido</p>
```
- Como vemos, las directivas (tanto estructurales como de atributos) pueden recibir valores por fuera. En este caso, appHighlight va a recibir un color que le pasemos nosotros, y es el color que va a usar para resaltar el elemento. Esto podría servirnos para crear warnings, errores, etc. en formularios. Así, nos evitaríamos usar If o Elses en el HTML.