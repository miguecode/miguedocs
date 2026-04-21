---
title: "Componentes. Difrencia entre Standalone y Módulos"
---

> Componentes

- Un componente es una unidad lógica mínima. Esto significa que cada componente tiene que representar una única responsabilidad o funcionalidad dentro de la interfaz de usuario. Lo ideal siempre va a ser que un componente sea algo pequeño, específico y reutilizable.

- De esta forma, un componente es como "una cajita" que tiene 3 elementos: estructura, estilo y lógica. Es decir, tiene HTML (u otro lenguaje de marcado), CSS (u otro lenguaje de estilo) y TypeScript (o JavaScript). 

- Una página va a estar conformada por distintos componentes, los cuales se actualizan y actúan de forma individual. La magia de una SPA es que no se recargue todo desde 0 al detectar un cambio, sino que se actualiza el componente específico que debe cambiar. Y no la página entera, esta es la gracia de Angular.

- Como sabemos, en TypeScript existen los decoradores (@Decorador). En la lógica de Angular, un componente se crea mediante una clase, la cual va a tener el decorador @Component. Obviamente, nosotros no vamos a escribir la lógica del decorador @Component, ya que es algo que ya hace Angular. Pero lo que sí tenemos que hacer nosotros, es pasarle un objeto a @Component, el cual va a tener distintas propiedades. Veamos:

	@Component({
		standalone: true,
		selector: 'app-user',
		template: `<app-user-container [userName]="userNameSignal()"/>`,
		imports: [UserProfileComponent]
	})
	export class UserComponent {
		userService = inject(UserService);
		userNameSignal = this.userService.userNameSignal;
	}

- Como vemos, acá estamos creando un componente llamado UserComponent. Es una clase asociada a un decorador @Component, el cual recibe un objeto con distintas propiedades. Hay más propiedades aparte de esas 4, vamos a ver para qué sirven las más comunes: 

1. Standalone: Es un booleano que especifica si se trata de un componente standalone o no. Esto es un tema ya hablando en otros apuntes, pero que un componente sea standalone significa que es un componente independiente, es decir, no es un módulo. No es un conjunto de componentes y su fin es funcionar sólo de forma indivual. 

2. Selector: Es el nombre con el que se va a poder invocar al componente en código HTML. Es decir, si el selector es "pepe", para invocar al componente vamos a tener que usar la etiqueta <pepe></pepe>. Por buenas prácticas, la convención para los selectores es usar el prefijo "app-", con el fin de evitar colisiones con etiquetas HTML nativas. Así que un buen selector puede ser "app-user".

3.1. Template: Es la estructura de nuestro componente. Es decir, literalmente código HTML. Es lo que el usuario va a ver cuando el componente es invocado.

3.2 TemplateUrl: Algo común que se hace, es no usar "template", sino usar "templateUrl". Y a "templateUrl", lo que le tenemos que pasarle es la ruta hacia un archivo HTML, y codificar la estructura ahí. Esto es una buena práctica por una cuestión de separarlo de la lógica. 

4.1. Styles: Son los estilos de nuestro componente. Es decir, literalmente código CSS (u algún otro lenguaje de estilos). Estos estilos se vinculan con el HTML.

4.2. StyleUrls: Es el mismo caso que "template" y "templateUrl". Por una buena práctica de organización y legibilidad, se recomienda usar "styleUrls" en vez de "styles". Hay que decir que, en este caso, styleUrls no recibe un string, sino que recibe un array de strings. Esto es así porque admite más de una ruta, o sea, más de un archivo de estilos.

5. Imports: Va a ser ni más ni menos que un array que importa elementos externos a nuestro componente, como por ejemplo, otros componentes o bibliotecas.


> Cómo crear un componente más rápido

- Gracias a Angular CLI, podemos usar el comando "generate", que es el que podemos usar cada vez que queremos crear un elemento nuevo en Angular, ya sea un componente, servicio, directiva, pipe, entre otros.

	ng generate component components/MiComponente

- Eso se puede abreviar así: "ng g c components/MiComponente". Lo que va a hacer esto es crearnos toda la estructura del componente, como vienen por defecto. 

        "@schematics/angular:component": {
          "style": "css",
          "skipTests": true
        }

- Si colocamos eso del skipTests en el archivo angular.json, hacemos que, al crear un nuevo componente usando Angular CLI, no nos cree el archivo de testing.


> Separación física de archivos

- Una práctica mega común es separar las partes de un componente en archivos. La lógica, la estructura y los estilos:
	- MiComponente.component.ts
	- MiComponente.component.html
	- MiComponente.component.css

- Esta separación física es una convención del CLI de Angular, que mejora la organización del código y la mantenibilidad. Por lo que estuvimos viendo antes, sabemos que nosotros podríamos no tener un archivo HTML ni un archivo CSS, y que esté todo escrito en el TS. Pero claramente, eso no es lo recomendable. 


> Diferencia entre Componentes Standalone y Módulos

- Como dijimos en otro apunte, antes el estándar oficial de Angular era el uso de los módulos. Si bien estos siguen existiendo, ahora la tendencia pasó a ser el uso de componentes Standalone. Por eso, como vimos antes, escribimos la propiedad "standalone: true" a la hora de crear un componente. Pero... ¿Por qué? ¿Cuál es la diferencia entre usar módulos y usar componentes standalone?

>> Módulos

- Un módulo es como una caja contenedora, la cual contiene todo lo que se necesita para llevar a cabo una funcionalidad. Entonces, si teníamos componentes, iban a tener que estar dentro de algún módulo. Además, un módulo puede contener a otro módulo. 

- Así como los componentes tienen su propio decorador @Component, los módulos tienen su propio decorador llamado @ngModule. Este decorador también recibe un objeto con múltiples propiedades, con el fin de configurar el funcionamiento del módulo. Una de sus propiedades es "declarations", donde cada declaración va a ser un componente del módulo. Y en su "imports", va a poder incluir a otros módulos, los cuales también pueden contener a otros módulos o componentes.

- El problema que tenían los módulos era que, si contenían a un componente "ComponentePadre", y ese ComponentePadre contiene dentro de sí a otros componentes, estos últimos iban a ser dependientes también del módulo en el que están dentro. Entonces, si ComponenteHijo importa alguna librería X, el módulo también va a tener que importarlo, por más que ComponenteHijo era el único que necesitaba dicha librería. Todo esto era un poco lío.

>> Componentes Standalone

- Un componente Standalone es un componente que es su propio módulo. Es decir, ya no depende de nadie, ya que de por sí es su propio módulo. Antes, si "ComponenteX" necesitaba importar algo, no podía usar el "imports", ya que no lo tenía. Así que depende de su módulo para hacerlo. Ahora, si el componente es standalone, tiene su propio "imports", y actúa como si fuese su propio módulo. Es independiente. Sólo va a importar lo que él necesita para funcionar.


>> Comando de consola para migrar un proyecto de módulos a standalone:

	ng generate @angular/core:standalone

- Recorre todo el proyecto, y convierte todos los componentes que encuentre a componentes Standalone.