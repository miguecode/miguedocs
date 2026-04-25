---
title: "Eventos"
description: "Los eventos son acciones que ocurren en la interfaz del usuario: hacer un clic, mover el mouse, etc. Ejemplos de estos pueden ser los siguientes:"
---



- Los eventos son acciones que ocurren en la interfaz del usuario: hacer un clic, mover el mouse, etc. Ejemplos de estos pueden ser los siguientes:

```text
onClick (para clics)
onChange (para inputs)
onSubmit (para forms)
onMouseEnter, onMouseLeave (hover y no-hover)
```
- Vamos a ver cómo manejar un botón al que le hacemos clic. Para hacerlo, vamos a crear un manejador de eventos, que no son ni más ni menos que funciones. Les podemos poner cualquier nombre, pero por convención, suelen empezar con 'handle...'. Veamos un ejemplo:

```html
const users = [{ }, { }, { }]; // Nuestros datos que podrían venir de un Backend

export const Section = () => {

	const handleClick = ()= > {
		console.log('Se hizo clic en contactar');
	}

	return (
		<section>
			{
				users.map(user => {
					return (
						<div key= { user.id }>
							<img src={ userImg } />
							<h2>{ user.name }</h2>
							<p>{ user.description }</p>
							<button onClick={ handleClick }>Contactar</button>
						</div>
					)
				})
			}
		</section>
	)
}
```
- A diferencia de Angular, como vemos acá, al escribir la función a ejecutar en el botón no le ponemos paréntesis () al final.

- Este método handleClick puede recibir por parámetro al evento ejecutado:

```typescript
const handleClick = (event) => {
	console.log(event);
}
```
- Pero algo más útil y común, es que le queramos pasar un objeto, justamente, el 'user' al que le hicimos clic. Para eso, hacemos lo siguiente en su invocación:

```typescript
<button onClick={ () => handleClick(user.name )}>Contactar</button>
```
- Como vemos acá, hicimos una función flecha en vez de simplemente hacer handleClick(user.name) ¿Por qué? Por lo que dijimos antes de que en React no hay que ponerle paréntesis () a las funciones en estos casos. Porque si lo hacemos, se va a ejecutar apenas se lea, en vez de ejecutarse cuando le hacemos clic en este caso. Hecho esto, nosotros podríamos:

```typescript
const handleClick = (userName) => {
	console.log('Se hizo clic en: ' + userName);
}
```
- También, para no escribir siempre user.name, user.id, user.image, user.age, user.lastName, podríamos desestructurar al objeto user en el map, así:

```typescript
users.map(({id, name. description. image})) => { ... }
```
- De esa forma, podemos simplemente poner {id}, {name}, {lastName} y demás.