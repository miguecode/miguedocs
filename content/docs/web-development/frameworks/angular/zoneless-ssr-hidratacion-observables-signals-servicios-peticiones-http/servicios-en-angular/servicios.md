---
title: "Servicios"
description: "Los servicios son elementos de Angular muy potentes, usados para:"
---



- Los servicios son elementos de Angular muy potentes, usados para:

1. Compartir información entre los distintos elementos de la aplicación
2. Conectarse a entidades externas
3. Manejar la lógica de negocios

- Un servicio es muy importante porque sirve para llevar a cabo el patrón Singleton (aunque no es obligatorio que sea así). Y... ¿Qué quiere decir Singleton? Veamos:

- **SINGLETON**: Significa que hay una ÚNICA instancia del Servicio. Y además, esa instancia se comparte a través de la app. La información que contiene el servicio se comparte a través de toda la app. Como vimos en otro apunte con @Input y @Output, ese es un método para compartir información entre componentes con una estructura de padre-hijo. Con los servicios también podemos compartir información pero de forma Singleton, es decir, un sólo elemento (el servicio) se comunica con todos los demás elementos a la vez. Como una relación de uno a muchos o viceversa.

- Generalmente, un componente está muy ligado a una URL. Entonces, si la URL deja de existir, se borra el componente con toda su información. Esto no nos va a pasar con un Servicio.

- **Para crear un Servicio, podemos usar el comando**: 

```typescript
ng generate service services/MiServicio
```
- **Veamos un ejemplo**: 

```typescript
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	login() {
		console.log("usuario no autenticado");
	}
}
```
- Como vemos, un servicio es una clase con un decorador @Injectable. La forma de usar sus métodos y propiedades es creando una instancia del servicio (o no, ahora lo vamos a ver).

- **La propiedad providedIn**: 'root', es la que hace que nuestro servicio sea Singleton, ya que va a ubicar a la clase AuthService ne el root de la aplicación. Esto hace que sea de una única instancia, la cual se va a compartir con todas las entidades de nuestra aplicación.

- Como dijimos, si algún componente quisiera usar el método login del servicio, tendría que instanciarlo así:

```typescript
const authService = inject(AuthService);
authService.login();
```
- **Si bien esto está perfecto, hay un detalle**: nosotros también podríamos hacer que AuthService, como clase que es, tenga métodos estáticos. De hecho, ese mismo método login podría ser estático, porque no está usando elementos de instancia. Entonces, podríamos hacer esto:

```typescript
static login() {
	console.log("usuario no autenticado");
}
```
- Así, un componente no va a necesitar instanciar el servicio, sino que directamente accede con AuthService.login(). Esto una buena práctica que, si es posible, hagamos que los métodos sean estáticos. Así nos ahorramos instanciar. Hay que saber llevar a cabo ambas dinámicas: Si no necesito elementos de instancia, que el método sea estático. Si necesito, que no sea estático. 

- Lógicamente, si tenemos un método que necesita usar otros elementos de la instancia, no vamos a poder hacer que el método sea estático. Por ejemplo:

```typescript
export class AuthService {
	isAuthenticated: boolean = false;

	static login() {
		console.log(this.isAuthenticated);
	}
}
```
- Como los servicios son Singleton, lo que va a pasar es que: Cada vez que alguna entidad de nuestra aplicación cree una instancia de la clase AuthService, Angular se va a preguntar ¿Ya existe una instancia de AuthService? Entonces, si ya existe, no va a crear otra. Va a usar la misma que ya está creada y ubicada en el root de nuestra aplicación (gracias al providedIn: 'root'). Esto quiere decir que la propiedad "isAuthenticated" va a tener el mismo valor en cada entidad de nuestra aplicación, ya que todas las entidades van a estar trabajando con la misma instancia de AuthService.

- Si el valor de "isAuthenticated" cambia, todos los componentes que estén accediendo a dicha propiedad "isAuthenticated", van a reflejar ese cambio. Porque todos están accediendo a la misma instancia de AuthService, la única que existe.


## Propiedad providedIn

- Como dijimos antes, la propiedad providedIn con valor 'root' es la que define el comportamiento Singleton de nuestro servicio. Si nosotros cambiamos ese valor a, por ejemplo 'any', esto cambia. Son otras formas de hacer funcionar el servicio. La realidad es que esto que vimos acá es lo más común y usado, pero en el siguiente apunte vamos a ver las demás variaciones.