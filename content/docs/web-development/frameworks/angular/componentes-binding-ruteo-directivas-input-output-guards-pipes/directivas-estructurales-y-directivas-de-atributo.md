---
title: "Directivas Estructurales y Directivas de Atributo"
description: "Descubre el poder de las directivas en Angular para extender la funcionalidad del HTML, modificando la estructura del DOM o el comportamiento de los elementos."
---

## Directivas en Angular

Las directivas son una de las características más potentes de Angular, ya que permiten extender la funcionalidad de los elementos del DOM. Básicamente, le brindan capacidades extra a una etiqueta HTML que antes no tenía. Existen dos tipos principales de directivas: **estructurales** y **de atributo**.

1.  **Directivas estructurales**: Modifican la estructura del DOM (añaden, eliminan o manipulan elementos).
2.  **Directivas de atributo**: Modifican la apariencia o el comportamiento de un elemento existente, pero no su estructura en el árbol del DOM.

### Angular CLI
Para generar una nueva directiva desde la terminal:

```bash
ng generate directive directives/mi-directiva
```

---

## Directivas de Estructura (Estructurales)

Se reconocen fácilmente porque se escriben con un asterisco (`*`) delante de su nombre en el HTML. Se encargan de determinar si un elemento se renderiza o cuántas veces debe repetirse.

*   **`*ngIf`**: Condicional. Si la expresión es *truthy*, el elemento se renderiza; de lo contrario, se elimina del DOM.
*   **`*ngFor`**: Bucle. Renderiza el elemento tantas veces como elementos haya en una colección.
*   **`*ngSwitch`**: Actúa como un switch de programación, renderizando un sub-elemento basado en una coincidencia de valor.

```html
<div *ngIf="isVisible">Este mensaje solo se ve si isVisible es true</div>

<ul>
  <li *ngFor="let item of items">{{ item.name }}</li>
</ul>
```

### El uso de `else` con `ng-template`
El `*ngIf` permite manejar una alternativa visual mediante bloques de plantilla:

```html
<div *ngIf="isLoggedIn; else loginBuffer">Bienvenido, Usuario</div>

<ng-template #loginBuffer>
  <p>Por favor, inicia sesión para continuar.</p>
</ng-template>
```

> [!TIP]
> En versiones modernas de Angular (v17+), se recomienda usar la nueva **Control Flow Syntax** (`@if`, `@for`, `@switch`) en lugar de las directivas estructurales clásicas, ya que es más performante y legible.

### Ejemplo: Directiva Estructural Personalizada
Podemos crear una directiva que muestre contenido según el tamaño de la pantalla:

```typescript
@Directive({
  standalone: true,
  selector: '[appShowOnSize]'
})
export class ShowOnSizeDirective implements OnInit {
  @Input('appShowOnSize') size: 'small' | 'medium' | 'large' = 'large';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.updateView();
    window.addEventListener('resize', () => this.updateView());
  }

  private updateView() {
    const width = window.innerWidth;
    this.viewContainer.clear();

    if (this.shouldShow(width)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private shouldShow(width: number): boolean {
    if (this.size === 'small' && width < 600) return true;
    if (this.size === 'medium' && width >= 600 && width <= 1024) return true;
    if (this.size === 'large' && width > 1024) return true;
    return false;
  }
}
```

Uso en HTML:
```html
<div *appShowOnSize="'small'">Solo me veo en móviles</div>
```

---

## Directivas de Atributo

Estas directivas no quitan ni ponen elementos, solo cambian sus propiedades (clases, estilos, eventos). Se escriben generalmente entre corchetes `[]` cuando reciben datos.

*   **`[ngClass]`**: Añade o quita clases CSS de forma dinámica.
*   **`[ngStyle]`**: Aplica estilos en línea dinámicamente.

### Ejemplo: Directiva de Atributo Personalizada (Highlight)
Una directiva que resalta un texto cuando pasamos el ratón por encima:

```typescript
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
```

Uso en HTML:
```html
<p [appHighlight]="'cyan'">Pasa el mouse para resaltar este párrafo en cian.</p>
```

El decorador **`@HostListener`** es clave aquí: permite que la directiva "escuche" eventos del elemento donde ha sido aplicada y reaccione ejecutando lógica de TypeScript.