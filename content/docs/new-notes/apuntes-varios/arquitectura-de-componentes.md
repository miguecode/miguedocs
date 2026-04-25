---
title: "Arquitectura de Componentes"
description: "Cómo organizar los componentes"
---


## Cómo organizar los componentes

- La organización de nuestros componentes en nuestra aplicación es importante: hay que seguir buenas prácticas y seguir un principio clave: un componente es una unidad lógica mínima. Mientras más pequeño y reutilizable sea, mejor. 

- Container/Presentational Pattern (Patrón Contenedor/Presentacional)
- Scream Architecture
- Clean Architecture
- Single Source of Truth Architecture


## Container/Presentational Pattern

- Es el patrón de diseño más básico de todos. Define cómo crear interfaces de usuario separando a los componentes en dos tipos: Contenedores y Presentaciones (o Vistas). Vamos a diferenciar cada uno.

1. Containers: También conocidos como "Componentes Inteligentes", se usan para manejar la lógica de negocio y también la comunicación con entidades externas, como servicios o librerías.

2. Presentational: También conocidos como "Componentes tontos" o "de interfaz", se usan simplemente para mostrar y manejar datos en la UI. Estos datos los va a recibir de parte de algún componente Contenedor.


### Ejemplo de componente Contenedor

```typescript
@Component({
	standalone: true,
	selector: 'app-user',
	template: ``<app-user-container [userName]="userNameSignal()"/>`,
	imports: [UserProfileComponent],
})
export class UserComponent {
	userService = inject(UserService);
	userNameSignal = this.userService.userNameSignal;
}
```
- En este caso, UserComponent es un componente Contenedor. ¿Por qué? Porque está inyectando un servicio, es decir, se está comunicando con una entidad externa. Además, en sus imports podemos ver que está importando a un componente llamado UserProfileComponent, que va a ser un componente Presentación.


### Ejemplo de componente Presentación

```html
@Component({
	standalone: true,
	selector: 'app-user-profile',
	template: ``<div>{{ userName }}</div>`,
})
export class UserProfileComponent {
	userName: string = "Miguel";
}
```
- Este es un componente Presentación, ya que realmente no hace nada más que obtener un dato y mostrarlo en pantalla. Por eso se dice que es un "componente tonto". Se encarga de darle vista (presentar) a los datos.