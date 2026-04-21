---
title: "Ciclo de vida de un Componente y sus Hooks"
---

> Ciclo de vida de los componentes (Hooks)

- Los hooks son una característica que nos brinda Angular y son importantes para especificar qué cosas deben suceder dependiendo del momento. Por ejemplo, si yo paso de un componente a otro en mi página, cuando salgo del componente en el que estaba, se ejecuta una función de salida. Yo podría ahí escribir código (definir un método) para que pase algo en ese preciso momento. Hay 8 hooks en total.

- La idea de los hooks es que podamos ejecutar lógica en momentos clave del ciclo de vida del componente, como al recibir datos nuevos, inicializar la vista o limpiar recursos. No siempre necesitamos usarlos todos, pero conocerlos nos permite tener más control sobre el comportamiento del componente.

- "ngOnInit" es el ejemplo más básico de un hook, ya que hace referencia al inicio de nuestro componente, es decir, al momento en el que se instancia por primera vez. Todos nuestros componentes tienen que pasar por este momento.  


> ngOnInit

	export class MiComponente implements OnInit {
		ngOnInit(): void {
			    console.log('Arrancó el componente "MiComponent"');
		}
	}

- En la declaración de nuestro componente, es decir, en su class, podemos especificar "implements OnInit". Es decir, implementar la interfaz de Angular llamada "OnInit". Si no lo hacemos, va a funcionar igual, y vamos a poder usar la función ngOnInit perfectamente. Pero por respetar las buenas prácticas, se recomienda escribir el "implements OnInit". Si lo agregamos, la interfaz le va a exigir a la clase que incluya al método ngOnInit, y así nos evita el error de no ponerlo.

- Esta misma explicación vale para todos los demás hooks que vamos a ver.


> Otros ejemplos y etapas del ciclo de vida

- Como dijimos, hay muchos hooks distintos aparte del ngOnInit. Y cada uno de ellos hace referencia a un momento distinto del ciclo de vida de nuestro componente. Ahora vamos a ver todos los demás, en orden temporal y separado por 4 etapas:

1) Inicialización (Creación del componente)

1. ngOnChanges(changes: SimpleChanges) {}
- Sí, aunque parezca loco, este hook ocurre antes que el ngOnInit, y se ejecuta cada vez que cambia un @Input del componente, incluso antes de que el componente se inicialice por completo.

2. ngOnInit() {}
- Se ejecuta una única vez, en el momento en el que termina el primer ngOnChanges y el componente se inicializa.

3. ngDoCheck() {}
- Se ejecuta en cada detección de cambios, inmediatamente después de ngOnInit, o después de cualquier ngOnChanges. Es útil para personalizar el chequeo manualmente.


2) Contenido Proyectado (<ng-content>)

4. ngAfterContentInit() {}
- Se ejecuta una sola vez, cuando Angular inserta el contenido proyectado (<ng-content>) en el componente.

5. ngAfterContentChecked() {}
- Se ejecuta después de cada chequeo del contenido proyectado (ng-content). Puede llamarse muchas veces.


3) Vista del Componente

6. ngAfterViewInit() {}
- Se ejecuta una única vez, cuando la vista del componente (y la de sus hijos) ha sido renderizada completamente.

7. ngAfterViewChecked() {}
- Se ejecuta después de cada chequeo de la vista del componente, incluyendo sus componentes hijos.


4) Destrucción del Componente
8. ngOnDestroy() {}
- Se ejecuta justo antes de que el componente se destruya (ideal para limpiar timers, desuscribirse de observables, etc.).


> OJO: Entre medio de todo este ciclo de 8 momentos, los hook ngOnChanges() y ngDoCheck() pueden volver a ejecutarse varias veces si hay cambios en los @Input, o si Angular detecta modificaciones.