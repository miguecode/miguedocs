---
title: "Pipes (Para mostrar datos modificados)"
description: "'Pipe' significa tubería. La idea de los pipes en Angular es tomar un dato desde la lógica (TypeScript), y antes de mostrarlo en pantalla (en el HTML), modifica..."
---


## Pipes ( símbolo | )

- "Pipe" significa tubería. La idea de los pipes en Angular es tomar un dato desde la lógica (TypeScript), y antes de mostrarlo en pantalla (en el HTML), modificarlo. Es decir, hacerlo pasar por un tubo que lo va am odificar. 

- Obviamente, esta descripción recuerda al método pipe() de los Observable. Pero esto NO TIENE NADA QUE VER con eso. Es decir, son dos cosas distintas, aunque su definición sea la misma. Una cosa es el método pipe() de los Observables, y otra cosa son los pipes de Angular, que son elementos que se crean por el Angular CLI y que se escriben en el código HTML con la sintaxis " | nombrePipe ". Ese " | " hace referencia a un tubo/pipe.

- Los datos que pasen por el pipe se van a modificar de forma puramente visual. Es decir, no se modifica literalmente el dato, solamente se transforma para verse distinto en la vista, pero sigue siendo lo mismo todo el tiempo.

- Por ejemplo, el DNI. Yo lo que quiero y lo que me conviene, es guardar el DNI como un numero de 8 digitos, sin los "puntitos". Sin embargo, cuando yo quiero mostrarle el DNI al usuario por pantalla, estéticamente es mejor que SÍ aparezcan esos 2 puntitos. Entonces, con un pipe lo puedo hacer.

- Los Pipes, entonces, son visuales. Cuando yo pase mi DNI por un Pipe, antes de mostrarlo visualmente, el Pipe se va a encargar de agregarle esos puntitos.

```typescript
43596276     // El DNI guardado en la BD
... Pasa por un Pipe ...
43.596.276   // El DNI que le muestro al usuario

Jueves 6 de Junio
Date -> pipe -> Día Día de Mes (por ejemplo)
Date -> pipe -> 06/06/2024 (por ejemplo)
```
- También podemos tener un pipe que reciba un string, y que si es muy largo, lo corte y le ponga unos '...' al final. O uno que estilice el valor de un precio según su moneda...


## Pipes de Angular

- Angular ya tiene sus propios Pipes incorporados. Vamos a ver algunos:

### UpperCasePipe: Transforma el string a mayúsculas (como dijimos, sólo visualmente)

```typescript
<h1>{{ title | uppercase }}</h1>
```
### CurrencyPipe: Sirve para mostrar valores de dinero.

```typescript
<h1>Dinero: {{ dinero | currency }}</h1>
```
- "dinero" es una de mis variables creadas en código TypeScript. Supongamos que el valor de esta variable es 1000, en ese caso, visualmente se va a mostrar:
```typescript
Dinero: $1000.00
```
- A currency le podemos pasar distintos parámetros, para configurarlo a nuestro gusto, por ejemplo:

```typescript
<h1>Dinero: {{ dinero | currency: "EUR" }}</h1>
```
- Así, lo mostramos en tipo EURO


### JsonPipe: Sirve para mostrar la información de un JSON.

```typescript
<p>{{ myJson | json }}</p>
```
- Así como ponemos un pipe, podríamos poner todos los que queramos:

```typescript
	<h1>{{ miValor | unPipe | otroPipe | tercerPipe | cuartoPipe }}</h1>
```
## Crear nuestro propio Pipe

- Ahora, nosotros vamos a crear Pipes. Para esto, podemos usar el comando de Angular CLI:

```typescript
ng g pipe pipes/textoLargo
```
- **En nuestro texto-largo.pipe.ts vamos a tener esto**: 

```typescript
@Pipe({
	name: 'textoLargo',
	standalone: true,
})

transform(value: unknow,    ..) {
	return null;
}
```
- En "value" vamos a obtener el valor del dato que vamos a transformar, y el return va a ser el dato transformado que vamos a devolver. En este caso, lo vamos a hacer así:

```typescript
transform(value: string, ...args: any[]): string {
	if (value.length > 10) {
		let newValue = value.slice(0, 10);
		return newValue + '...';
	}

	return value;
}
```
- **Vamos, entonces, a combinar pipes así**: 

```typescript
<h1> {{ title | textoLargo | uppercase }}  </h1>
```
- **Ahora vamos a cambiarlo un poco**: 

```typescript
transform(value: string, puntos: boolean): string {
	if (value.length > 10) {
		let newValue = value.slice(0, 10);

		if (puntos) {
			newValue += '...';
		}

		return newValue;
	}

	return value;
}
```
- **Entonces lo llamamos así**: 

```typescript
<h1> {{ title | textoLargo : true | uppercase }}  </h1>
```
- Otra cosa que podemos hacer es pasarle un 'max', para establecer el máximo de caracteres para que se convierta en textoLargo... o pasarle un string que sea el valor del texto agregado, por ejemplo pasarle un 'Ver Más'... etc. Por cierto, nosotros podemos hacer que estos argumentos sean opcionales, poniendo un ? en cada variable que creo en la declaración de la función transform o dandoles un valor por defecto, así:

```typescript
transform(value: string, puntos: boolean = true, max: number = 10): string {}
```