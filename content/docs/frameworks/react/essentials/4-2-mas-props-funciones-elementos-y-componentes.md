---
title: "4-2. Más props (Funciones, Elementos y Componentes)"
description: "Pasar funciones como props"
---


## Pasar funciones como props

Como dijimos en el apunte pasado, también se pueden pasar funciones, elementos y hasta otros componentes como props. Primero veamos las funciones. 

¿Por qué querríamos hacer eso? Por ejemplo, para formatear un string como un userName. Si bien no es lo ideal para este ejemplo (porque en realidad esto sirve para callbacks y eventos), existe la alternativa. Por ejemplo:

```typescript
const formatUserName = (userName) => `@${userName}` ;

return (
	<UserCard
		formatUserName={formatUserName}
		userName="Miguel"
	/>
)
```

De esta forma, le estamos pasando una función llamada formatUserName() al componente UserCard. La está literalmente recibiendo como prop. Y al recibirla, la puede simplemente ejecutar cuando quiera. Es como cuando hacemos importación/exportación de una función, y la tenemos disponible para ejecutarla con los (). En este caso, la función le agrega un '@' adelante a cada string que recibe. 

Como dijimos, esto no es lo ideal en este caso. Pero es bueno saber que esto es posible hacerlo. Los componentes pueden recibir funciones desde su padre, y ejecutarlas cuando quieran. En este caso, lo que haría UserCard es mostrar formatUserName() y pasarle por parámetro el userName, que también recibe como prop.


## Pasar elementos como props

Es muy sencillo, podemos pasar elementos de esta forma:

```typescript
const formattedUserName = <span>@miguecode</span>
```
Como vemos, formattedUserName va a ser una variable que contiene UN ELEMENTO. No un componente; un elemento a renderizar. Hay que entender esa diferencia.

### Diferencia entre Componente y Elemento

- **Componente** -> Es como una factoría de elementos. Es una función que al ejecutarla devuelve un elemento.
- **Elemento** -> Es lo que React renderiza. Sí, React técnicamente no renderiza componentes, sino que renderiza los elementos que esos componentes retornan.

Y después, el componente hijo lo recibe sencillamente como {formattedUserName}, y lo puede colocar donde quiera haciendo {formattedUserName} en el return. Así como recibe {children} y lo usa como {children} en el return. 


## Pasar Componentes como props

**Esto es muy sencillo de ver, se hace así**: 

```typescript
<Section element={<OtroComponente />} />
```
En este caso, el componente Section tiene una prop llamada element (podría tener cualquier nombre), y en ella, va a recibir un componente. También podríamos hacer:

```typescript
const elements = (
	<>
		<OtroComponente1 />
		<OtroComponente2 />
		<OtroComponente3 />
	</>
)

<Section element={elements} />
```

## Otra aclaración sobre props

**Las props tienen que ser inmutables**: si nosotros recibimos un "miguel", no tenemos que transformarlo a "@miguel", de forma directa. En todo caso, lo que tenemos que hacer es crear una variable formattedName, que transforme la prop "miguel" recibida, en una nueva variable "@miguel". Esto es una buena práctica en las props de React.

Otra buena práctica también es usar valores por defecto en las props recibidas. Así:

```typescript
export function Component ({ children, userName = 'unknown', color = 'white' }) {

}
```