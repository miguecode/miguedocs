---
title: "Single Source of Truth Architecture - Parte 1"
description: "Single Source of Truth Architecture (Arquitectura del único lugar de la verdad)"
---


## Single Source of Truth Architecture (Arquitectura del único lugar de la verdad)

- Esta arquitectura nos dice que cualquier cosa que se necesite en la aplicación la vamos a tener en un único lugar. Para esto, vamos a crear el famoso servicio CharacterService con el que veníamos trabajando antes, pero en este caso haciendo más uso de Signals. En los ejemplos que vimos antes, usabamos Observables en el servicio. Lo que también hicimos fue usar Observables en el servicio, pero después en el componente transformar el Observable a Signal. 

- Pero lo que vamos a ver con la Single Source of Thruth Architecture, es un servicio que también va a tener Observables, pero que en este caso todo nace de una propiedad "estado", la cual va a ser una Signal. Obviamente, esta propiedad estado va a estar SIEMPRE actualizada a último momento, brindandonos reactividad. Esa es la gracia.


## ChangeDetectionStrategy en OnPush por componente

- Antes de seguir con la creación de nuestro servicio, veamos una cosita sobre el ChangeDetectionStrategy en OnPush. Esto es algo de lo que hablamos anteriormente, pero vamos a recordar un poco:

```typescript
@Component({
	... Las otras propiedades ...

	changeDetection: ChangeDetectionStrategy.OnPush,
})
```
- Como lo hablamos en otros apuntes, el ChangeDetectionStrategy en "OnPush", es una nueva característica de Angular para mejorar todavía más el rendimiento a la hora de detectar cambios en nuestra aplicación. Con esto, sólo 3 cosas van a hacer cambios en nuestra aplicación:

1. Parámetros de entrada
2. Cambios por interacción del usuario (como hacer clic en un botón)
3. Cambios por llamadas asíncronas (como un Observable)

- El uso de Signals va de la mano con esta nueva detección de cambios, ya que ayuda a que el OnPush pueda funcionar. Esto reemplaza en gran parte a Zone.js, es decir, es Zoneless (Sin Zone.js). Como dije, esto ya lo hablamos en mayor profundidad en otros apuntes. 

- Y... ¿Por qué? Esto es así porque si nosotros tenemos 2 o 3 componentes linkeados a una misma Signal, cuando esta última CAMBIE, sólo esos 2 o 3 componentes van a poder verse afectados, ya que son los únicos escuchando dicha Signal. Esto hace que los cambios sean más directos.

- **Y ojo**: no es OBLIGATORIO que usemos Signals si pusimos el changeDetection en OnPush, pero sí es lo ideal. Es decir, si todavía no nos queremos animar a usarlas, igualmente sigue siendo bueno que agreguemos esa línea del OnPush.


## Creación del Servicio Character

- **Ahora sí, vamos a crear el servicio**: 

```typescript
@Injectable({
	provideIn: 'root',
})
export class CharacterService {
	state = signal({
		characters: new Map<number, Character>(),	
	});
}
```
- Como vemos, el servicio va a tener una propiedad llamada "state". Esta propiedad state va a ser de tipo Signal. Como sabemos, los Signal se crean con la función signal(). En este caso, lo que le pasamos por parámetro a signal() va a ser un objeto. Este objeto va a tener a su vez una propiedad llamada "characters", la cual va a ser de tipo Map, cuya "key" va a ser siempre de tipo number, y su "value" va a ser siempre de tipo Character. Esa "key" de tipo number va a ser la ID del Character, y el "value" obviamente va a ser el propio Character.

- Con esto, podemos ver que "state" (estado) va a ser nuestra famosa "Source of Thruth". Es una Signal, y como toda Signal, accedemos a ella como si fuese una función (con paréntesis ()). Y de esta Signal es de donde vamos controlar a todos nuestros personajes.

- Ahora, vamos a crear un método para hacer un GET de los personajes:

```typescript
getFormattedCharacters() {
	return Array.from(this.state().characters.values());
}
```
- Este método devuelve un ARRAY. Este array lo obtenemos accediendo al Map llamado "characters" de nuestra Signal llamada "state", a la cual, como dijimos recién, se la accede con paréntesis () como si fuese una función. Y de ese Map llamado "characters", nos quedamos con sus "values", es decir, con cada uno de los Character que guardamos ahí. Y dichos "values" los transformamos a array usando Array.from(), y lo retornamos. Eso es todo.

- El values() va con paréntesis también () porque "values()" justamente es un método propio de los Map. Lo único que hace es devolver un iterable de todos sus valores. Sin más, es lo mismo. Esto es tan simple como esto:

```typescript
const map = new Map<number, string>();
map.set(1, 'Hola');
map.set(2, 'Chau');

const values = Array.from(map.values()); 
console.log(values); // Muestra ['Hola', 'Chau']
```
- Ahora, vamos a crear un método llamado getCharacters(). Este método lo vamos a usar para inicializar al Servicio. Es decir, para darle el valor inicial de personajes al "state". Va a ser la primer información recibida. Lo lógico sería que lo obtengamos desde el Backend mediante a una petición HTTP. Pero en este caso, para verlo más claro, vamos a usar un array hardcodeado llamado mockCharacters.

```typescript
getCharacters(): void {
	const mockCharacters: Character[] = [
		{ id: 1, name: 'John', lastName: 'Doe', age: 30 },
		{ id: 2, name: 'Juan', lastName: 'Perez', age: 20 },
	]

	of(mockCharacters)
	.subscribe(result => {
		const newMap = new Map<number, Character>();
		result.forEach((character) => newMap.set(character.id, character));
		this.state.set({ characters: newMap });
	});
}
```
- Este método, como va a inicializar al servicio, tiene que llamarse al momento en el que se crea dicho servicio. Como es un servicio singleton, va a existir una única instancia de él compartida por todos aquellos que lo inyecten. Así que:

```typescript
constructor() {
	this.getCharacters();
}
```
- Llamamos al método en el constructor. De esta manera, al momento de construir el servicio va a inicializarse con toda la información que necesita, poblando a nuestra signal llamada "state".


- Ahora sí, expliquemos más cómo funciona dicho método getCharacters:

- Primero, creamos un simple array con Characters. Como dijimos, esto en realidad lo deberíamos obtener desde el Backend, mediante una petición HTTP (usando el método get() de la biblioteca HttpClient). Y ahí esta la clave con lo que sigue: Cuando usamos el método get() de HttpClient, o cualquier otro verbo HTTP, lo que vamos a recibir siempre es un OBSERVABLE. Es decir, cuando hacemos el famoso "http.get(api)", lo que se retorna es un Observable.

- Como en este caso NO recibimos un Observable desde ningún lado, ya que no estamos haciendo ninguna petición y solo manejamos un array hardcodeado, vamos a hacer uso del método of(). Of() es un método que sirve para crear un Observable, el cual emite los valores que le pasamos como argumento, y después completa automáticamente (ejecuta el método complete()) dicho Observable. Para entenderlo veamos un ejemplo:

```typescript
import { of } from 'rxjs';
const obs$ = of(1, 2, 3); // Creamos un Observable el cual va a emitir 1, 2 y 3 en orden.

obs$.subscribe({
  next: (val) => console.log(val), // next va a ser una función que recibe como parámetro lo que emite el Observable
  complete: () => console.log('Completado')
});

- **Por consola se va a mostrar esto**: 
1
2
3
Completado
```
- Como vemos, primero creamos un Observable llamado obs$, el cual va a emitir 3 valores: 1, 2 y 3. Nos suscribimos a él, y al método suscribe() le pasamos un "objeto controlador", que determina qué hacer en cada caso. Por cada emisión del obs$, se va a ejecutar la función que le asiganmos a la propiedad "next". Dicha función va a recibir por parámetro todo lo que emita el obs$. Entonces, primero va a recibir un 1, después un 2 y después un 3. Y lo que va a hacer la función es mostrarlos por consola. Sin más. Y cuando el obs$ ejecute su complete(), se ejecuta la función asignada a la propiedad "complete", la cual simplemente muestra "Completado" por consola. Como dijimos antes, crear un Observable con of() lo que hace es emitir los valores que le pasamos por parámetro, y una vez que ya los emitió, ejecuta complete().


- De esta forma, basandonos en nuestro ejemplo anterior, cuando hacemos of(mockCharacters) estamos creando un Observable el cual va emitir un único valor: el array llamado mockCharacters. Y después ejecuta el complete(). Obviamente, un Observable así no tiene gracia alguna porque ya sabemos lo que tiene mockCharacters, pero como dijimos antes, esto es una simulación en caso de que nosotros NO sepamos lo que es mockCharacters, y la lista de personajes la estemos obteniendo por una petición HTTP (la cual devuelve un Observable). En ese caso, no necesitaríamos usar el método of() para crear un Observable, porque ya nos lo devuelve el http.get().


- ¿Y qué hacemos exactamente con el mockCharacters? Recordemos lo que pusimos:

```typescript
of(mockCharacters)
.subscribe(result => {
	const newMap = new Map<number, Character>();
	result.forEach((character) => newMap.set(character.id, character));
	this.state.set({ characters: newMap });
});
```
- Nos suscribimos al Observable que creamos con of(), y tomamos su emisión atrapándola en una variable llamada "result". Es decir, el array mockCharacters que está emitiendo nuestro observable creado con of() va a parar en la variable "result". Entonces, a este array result lo recorremos, pasando por cada elemento de él (que va a ser cada Character). Y acá la idea es: Cada Character que nos encontremos en este array, lo tenemos que agregar a nuestra propiedad STATE, es decir, a la Signal de nuestro servicio, a nuestra "Source of Truth". Esto lo hacemos con esas 3 líneas:

```typescript
	const newMap = new Map<number, Character>();
	result.forEach((character) => newMap.set(character.id, character));
	this.state.set({ characters: newMap });
```
- Como vemos, estamos creando un nuevo Map desde 0, al cual le agregamos todo lo que tiene mockCharacters. Recordemos que en este caso mockCharacters es un array hardcodeado de characters, pero que en la práctica real, va a ser un Observable que nosotros no sabemos qué contiene, ya que va a ser la respuesta de nuestra petición HTTP. Entonces, nuestro newMap va a quedar con toda la información actualizada de la base de datos. Así que lo único que nos queda es que este newMap sea el nuevo valor de nuestra signal "state", es decir, tiene que reemplazar al valor actual. Por eso es que usamos el método set() de las signals, el cual PISA al valor anterior, es decir, lo reemplaza. 

- Y... ¿Por qué creamos un nuevo Map que reemplaza al anterior, en vez de simplemente modificar al Map que ya teníamos? Esto es porque las signals sólo reaccionan ante cambios de referencia, y no ante modificaciones. Es decir, si nosotros tenemos como valor actual un Map llamado "characters", si después yo lo que hago es agregarle una nueva entrada a ese Map, la signal no va a reaccionar. Ya que el Map "characters" sigue siendo el mismo objeto, es decir, sigue teniendo la misma referencia. Para que la signal reaccione al cambio tenemos que literalmente pisar el valor anterior, que sería el Map "characters".

- Con un ejemplo visual vamos a entender ese comportamiento:

```typescript
this.state().characters.set(5, newCharacter); // ❌ NO se dispara ningún cambio en la Signal

const newMap = new Map(this.state().characters);
newMap.set(5, newCharacter);
this.state.set({ characters: newMap }); // ✅ SÍ se dispara el cambio en la Signal
```
## Cómo conectarnos a este Servicio y más métodos del servicio Character
- Todo eso va a estar en la parte 2, en el apunte siguiente.