---
title: "Conex. a Backend con Servicios. Pipe Async y Adaptadores"
description: "Conexión con Backend mediante Servicios"
---


## Conexión con Backend mediante Servicios

- En este apunte vamos a ver cómo crear un servicio que se conecta con el backend mediante peticiones HTTP (HttpClient), haciendo uso de los Observables, y cómo mostrarlos por pantalla en el HTML. Vamos a ver qué es un adaptador, y cómo podemos desuscribirnos de los Observables de distintas formas.

- **OJO**: Este apunte tiene su "Versión con Signals", la nueva característica de Angular, que sirve mucho para el tema que vamos a tratar ahora. Ese apunte está en la carpeta de los apuntes de Signals. En realidad, es lo mismo que esto, no cambia nada. Lo único que lo diferencia con este apunte es que al final agrega la solución con signals.

- Primero, vamos a crear un servicio llamado Character.

```typescript
@Injectable({
	provideIn: 'root'
})
export class CharacterService {
	private apiUrl = 'https://api.example.com/characters';
	private http = inject(HttpClient);
}
```
- HttpClient es un módulo que nos va a brindar funcionalidades para hacer peticiones al backend.

- Vamos a crear un modelo para nuestro personaje, en un archivo llamado character.model.ts:

```typescript
export interface Character { id: number, name: string, lastName: string, age: number }
```
- Volvamos a nuestro servicio Character. Vamos a crear un método para recibir, modificar y eliminar a los personajes, los cuales van a devolver datos de tipo Observable. De esta forma, manejamos la reactividad.

```sql
getCharacters(): Observable<Character[]> {
	return this.http.get<Character[]>(this.apiUrl);		
}
updateCharacters(character: Character): Observable<Character> {
	return this.http.put<Character>(`${this.apiUrl}`, character);
}
deleteCharacter(id: number): Observable<void> {
	return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
```
- Tanto get() como put() y delete(), son métodos de HttpClient que devuelven Observables.

- Ahora, vamos a usar pipe() para usar operadores RxJS, cosa que vimos en otros apuntes. Veamos:

```typescript
getCharacters(): Observable<Character[]> {
	return this.http.get<Character[]>(this.apiUrl).pipe(map(characters => {
		return characters.map(c => ({ ...c, name: c.name.toUpperCase() }));
	}));		
}
```
- En este ejemplo, vemos que a la hora de retornar un array de Character, antes de hacerlo lo vamos a modificar un poco. Hacemos un map, en el que lo que se devuelve es el mismo caracter, pero en su propiedad "name" hacemos que sea su propio "name", pero pasado a mayúsculas. Entonces, cuando hacemos el get(), el Observable va a retornar una lista de personajes con su propiedad "name" en mayúsculas.


## Adaptadores

- Los adaptadores sirven para comunicar la lógica de nuestra aplicación con entidades externas. Son parte del patrón llamado Clean Architecture (arquitectura limpia). Con lo que acabamos de hacer, vamos a mostrar cómo podríamos usar un adaptador. Es decir, vamos a encapsular la lógica del pipe() que hicimos recién, en un archivo separado.

- Vamos a crear un archivo llamado character-adapter.ts, y en él vamos a definir una función así:

```typescript
export const characterAdapter = (characters: Character[]) => 
	characters.map((c) => ({ ...c, name: c.name.toUpperCase()}));
```
- characterAdapter es una arrow function, que recibe como parámetro un array de Character's, y retorna un nuevo array de Character pero haciéndole un map. Cada elemento de este nuevo array de personajes va a ser un objeto con todas las propiedades y valores del propio personaje, pero modificando su propiedad "name" (pasándolo a mayúsculas).
- En este archivo podríamos poner todos nuestros adaptadores. Esto es muy útil para comunicarse con la entidad externa de una forma sencilla y escalable. 

- Ahora, podríamos ir a nuestra función getCharacters() y usar el adaptador:

```typescript
getCharacters(): Observable<Character[]> {
	return this.http.get<Character[]>(this.apiUrl)
	.pipe(map(characterAdapter));
}
```
- Finalmente, usemos nuestra función getCharacters, para obtener nuestros personajes:

```typescript
export class NuevoComponenteComponent {
	characterService: CharacterService = inject(CharacterService);
	characters: Character[] = [] as Character[];

	constructor() {
		this.characterService.getCharacters().subscribe((chars) => {
			this.characters = chars;
		});
	}
}
```
- Hasta acá, esto funciona perfectamente. Pero tenemos un problema: por temas de rendimiento y buenas prácticas, nosotros siempre tenemos que desuscribirnos de los observables. Y en este caso, nunca lo estamos haciendo. Vamos a ver las formas tradicionales de hacerlo.


## Desuscribirse del Observable

### Usando el método takeUntilDestroyed() (la forma clásica)

```typescript
constructor() {
	this.characterService.getCharacters()
	.pipe(takeUntilDestroyed())
	.subscribe((chars) => {
		this.characters = chars;
	});
}
```
- TakeUntilDestroyed() es un operador de RxJS que viene desde Angular 16. Nos permite automatizar la desuscripción de un observable cuando el componente se destruye. Sirve para no tener que usar manualmente el hook ngOnDestroy() y un Subject, que antes era la forma tradicional. Así se evita el memory leak.

- Eso sería todo, literalmente agregamos ese método y listo. Una vez que el componente se destruya, también se va a desuscribir del Observable. Si bien funciona, hay otras alternativas con mejor rendimiento.


### Usando pipe async

- **Antes, entendamos ¿Qué es el Pipe Async?**: Es un pipe de Angular que podemos usar directamente en el HTML para trabajar con Observables o Promesas. Se suscribe automáticamente al observable y muestra el valor sin que nosotros nos sucribamos manualmente con lógica (código TypeScript). Veamos:
```typescript
// En el TypeScript:
characters$: Observable<Character[]> = this.characterService.getCharacters();

// En el HTML:
@let characters = characters$ | async;
```
- Como vemos, en el TypeScript lo que hacemos es quedarnos con el Observable que nos devuelve getCharacters(), y guardarlo en una variable characters$. Pero no hacemos nada. Lo que sí hacemos es usarlo en el HTML: creamos una variable en el template usando el bloque @let.

- El " | async " es un pipe de Angular que nos hace leer la línea así: "Declaro una variable characters y le asigno el valor emitido por el observable characters$, usando el async pipe para suscribirme automáticamente, y desuscribirme cuando el componente deja de existir".

- El pipe async es reactivo, o sea, cada vez que el observable characters$ emite un valor nuevo, lo refleja en el DOM.

- **De hecho, esto podemos mostrarlo así**: 

```typescript
<section>
  @let characters = characters$ | async;

  @if (characters) {
    <ul>
      @for (char of characters) {
        <li>{{ char.name }}</li>
      }
    </ul>
  }
</section>
```
- De esta forma, mostramos una lista con todos los personajes de forma reactiva. Si esto lo hicieramos sin usar el pipe async, sería esto:

```html
// En el TypeScript
characters: Character[] = [];

constructor() {
  this.characterService.getCharacters().subscribe(chars => {
    this.characters = chars;
  });
}

// En el HTML
<div *ngFor="let char of characters">
  {{ char.name }}
</div>
```