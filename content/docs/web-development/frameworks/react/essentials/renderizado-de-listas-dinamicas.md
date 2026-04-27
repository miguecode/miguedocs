---
title: "Renderizado de listas dinámicas"
description: "Vamos a ver un ejemplo de cómo mostrar una lista de elementos cargados de forma lógica. Lo mismo que hacíamos en Angular con un @for o un *ngFor."
---

## Renderizado de listas dinámicas

Vamos a ver un ejemplo de cómo mostrar una lista de elementos cargados de forma lógica. Lo mismo que hacíamos en Angular con un @for o un *ngFor.

```typescript
const frutas = ['manzana', 'pera', 'naranja'];

export const Section = () => {
	return (
		<ul>
			{
				frutas.map(fruta => {
					return <li>{ fruta }</li>
				})
			}
		</ul>
	)
}
```
Recordemos que el método "map" de los arrays recorre cada elemento del mismo, y por cada uno de ellos ejecuta una función, recibiéndolo por parámetro. En este caso, por cada elemento del array "frutas", retornamos un elemento `<li>`, que directamente muestra el string.

Si esto fuese un objeto, haríamos el famoso "fruta.name" para mostrar su valor.

Algo propio de React es que necesita una 'key única' para renderizar correctamente una lista. La 'key' es básicamente un ID de la fruta. Algo que no se puede repetir. Esto es muy parecido a lo que pasa en Angular; visualmente no cambia nada, pero de forma interna mejora mucho el rendimiento. El famoso "track".

```typescript
export const Section = () => {
	return (
		<ul>
			{
				frutas.map(fruta => {
					return <li key = { fruta }>{ fruta }</li>
				})
			}
		</ul>
	)
}

```
Como vemos, en este caso la key de una fruta va a ser literalmente él mismo, el string fruta. No hay ID's como tal. Pero funciona igual. Obviamente que si en vez de que cada fruta sea un simple string, fuera un objeto, la key debería ser algo como: key = { fruta.id }.

Y como sabemos, en las funciones flecha, cuando todo el cuerpo está en una sola línea, podemos ahorrarnos el "return" y las llaves, y nos quedaría así:

```typescript
frutas.map(fruta => <li key = { fruta }>{ fruta }</li>)
```

## Ejemplo con usuarios

```typescript
const users = [
	{
		id: 1,
		name: 'Juan Pérez',
		description: 'Frontend Developer',	
	},
	{
		...
	},
]

export const Section = () => {
	return (
		<section>
			{
				users.map(user => {
					return (
						<div key= { user.id }>
							<img src={ userImg } />
							<h2>{ user.name }</h2>
							<p>{ user.description }</p>
						</div>
					)
				})
			}
		</section>
	)
}
```

Como vemos, las imágenes en React no se pueden llamar con el típico string de ruta en el atributo src. Sino que, siempre hay que importarlas. Y por eso, usamos JavaScript en el SRC. Para importarla, haríamos:

```typescript
import userImg from '../../assets/foto.png'
```

Si no queremos hacer esto, y seguir usando el string normal, la imagen tiene que estar en la carpeta 'public'.