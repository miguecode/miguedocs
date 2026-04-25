---
title: "Single Source of Truth Architecture - Parte 2"
description: "Cómo conectarnos a este Servicio"
---


## Cómo conectarnos a este Servicio

- Para que nuestro pueda usar el Servicio, hacemos esto:

```typescript
// En el TypeScript
characterService = inject(CharacterService);

characters: Signal<Character[] | undefined> = computed(() =>
	this.characterService.getFormattedCharacters();
);

// En el HTML
@let charactersLocal = characters();

@for (character of charactersLocal; track character.id) {
	{{ character.name }}
}
```
- Y listo. Así, el componente se ve a actualizar siempre ante cualquier cambio en el backend. Vamos a explicar qué es ese método computed():

- computed() es una función de Angular (desde la API de Signals) que nos permite crear una signal derivada, es decir, una señal que calcula su valor automáticamente en base a otras signals. Se actualiza automáticamente cada vez que cambia alguna de las signals de las que depende. Es como un getter reactivo. Veamos un ejemplo:

```typescript
const count = signal(2);

const double = computed(() => count() * 2);
console.log(double()); // Muestra 4

count.set(5);
console.log(double()); // Muestra 10 → se recalcula automáticamente
```
- Entonces, en este caso, "double" va a ser una Signal, la cual depende del valor de OTRA Signal, en este caso, "count". El valor de double se va a actualizar automáticamente cada vez que cambie el de count, sin que nosotros tengamos que ejecutar nada de forma manual. Se hace sólo de forma automática.

- **En nuestro ejemplo anterior**: 

```typescript
characters: Signal<Character[] | undefined> = computed(() =>
  this.characterService.getFormattedCharacters()
);
```
- Acá lo que está pasando es que estamos creando una signal derivada llamada characters, la cual se recalcula automáticamente cada vez que cambia el valor de otra signal. En este caso, el valor de la signal "state" del servicio CharacterService. Esto es así ya que el método getFormattedCharacters() accede al state() (que es una signal), y como computed() se alimenta de eso, reacciona automáticamente a los cambios.


## Otros métodos de nuestro Servicio

- Así como ya hicimos getFormattedCharacters() para conectarnos a la Signal principal, y getCharacters() para inicializar el servicio, vamos a ver otros métodos útiles: updateCharacters(), deleteCharacter() y GetCharacterById().


### Método updateCharacter()

- Este método lógicamente sirve para modificar un personaje en específico. Entonces, se lo tenemos que pasar ya modificado por parámetro. OJO: El enfoque de este método va a ser como si nosotros tuviésemos que hacer una petición HTTP para, obviamente, realizar la modificación en el backend. Entonces, como ya sabemos, vamos a usar el método of() para crear un Observable. Porque ahora estamos haciéndolo SIN base de datos, entonces no necesitamos hacer ninguna petición http. Pero en caso de que sí lo hiciéramos, trabajaríamos con el Observable que devuelva http.put():

```sql
updateCharacter(character: Character): void {
	const updatedCharacter = { ...character };

	of(updatedCharacter).subscribe((result) => {
		this.state.update((state) => {
			const newMap = new Map(state.characters);
			newMap.set(result.id, result);
			return { characters: newMap };
		});
	});

	this.getCharacters(); // Esto puede no ser necesario, pero por las dudas.
}
```
- Como vemos, lo primero que hacemos es copiar el objeto recibido para crear una nueva referencia. Es decir, en vez de usar el "character" recibido, usamos un updatedCharacter, que es literalmente un clon de ese character. Sólo le cambia la referencia (es decir, por más de que tengan los mismos valores, físicamente son 2 objetos distintos). Y esto lo hacemos porque las signals de Angular detectan los cambios por referencia, entonces, si pasamos el mismo objeto sin clonarlo, puede pasar que Angular no detecte el cambio si en realidad no llega a ver un "cambio visible". 


### Método deleteCharacter()

- Mantenemos la misma filosofía de antes. Vamos a simular que a la hora de eliminar al personaje, vamos a hacer una petición HTTP. Por ende, tenemos que manejar el Observable que devolvería el método http.delete(), y eso lo hacemos creando un Observable con el método of(). Si realmente estuviésemos usando http.delete(), no necesitaríamos usar este of(), y directamente nos suscribiríamos al Observable que devuelva http.delete().

- Entonces, en este caso recibimos un id por parámetro, y usamos el método delete() de los Map, que busca por KEYS. Y como todas las keys son las ID's de nuestros personajes, usamos eso para encontrarlo. Después, retornamos el Map actualizado, sin el personaje eliminado.

```sql
deleteCharacter(id: number): void {
	of({ status: 200 }).subscribe(() => {
		state.characters.delete(id);
		return { characters: state.characters };
	}
}
```
### Método getCharacterById()

- Esto no necesita mucha explicación, simplemente devolvemos el personaje con el ID a buscar.

```typescript
getCharacterById(id: number) {
	return this.state().characters.get(id);
}
```