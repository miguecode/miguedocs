---
title: "Eventos en React"
description: "Los eventos son acciones que ocurren en la interfaz del usuario: hacer un clic, mover el mouse, etc."
---


## Eventos en React

Los eventos son acciones que ocurren en la interfaz del usuario: hacer un clic, mover el mouse, etc. Ejemplos de estos pueden ser los siguientes:

*   `onClick` (para clics)
*   `onChange` (para inputs)
*   `onSubmit` (para formularios)
*   `onMouseEnter`, `onMouseLeave` (hover y no-hover)

Vamos a ver cómo manejar un botón al que le hacemos clic. Para hacerlo, vamos a crear un manejador de eventos, que no son ni más ni menos que funciones. Les podemos poner cualquier nombre, pero por convención, suelen empezar con `handle...`. Veamos un ejemplo:

```jsx
const users = [{ id: 1, name: "Juan", description: "..." }]; // Nuestros datos

export const Section = () => {
    const handleClick = () => {
        console.log('Se hizo clic en contactar');
    };

    return (
        <section>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <img src={user.image} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.description}</p>
                        <button onClick={handleClick}>Contactar</button>
                    </div>
                );
            })}
        </section>
    );
}
```

A diferencia de Angular, como vemos acá, al escribir la función a ejecutar en el botón **no le ponemos paréntesis `()` al final**.

Este método `handleClick` puede recibir por parámetro al evento ejecutado:

```javascript
const handleClick = (event) => {
    console.log(event);
};
```

Pero algo más útil y común es que le queramos pasar un dato específico, por ejemplo, el `name` del usuario al que le hicimos clic. Para eso, hacemos lo siguiente en su invocación:

```jsx
<button onClick={() => handleClick(user.name)}>Contactar</button>
```

Como vemos acá, usamos una función flecha en vez de simplemente poner `handleClick(user.name)`. ¿Por qué? Por lo que dijimos antes: en React no hay que ponerle paréntesis `()` a las funciones en la referencia del evento. Si lo hiciéramos así: `onClick={handleClick(user.name)}`, la función se ejecutaría inmediatamente al renderizar, en vez de ejecutarse cuando hagamos clic. Al envolverla en una función flecha, estamos pasando una *referencia* que se ejecutará solo al hacer clic.

Hecho esto, nosotros podríamos recibir el dato así:

```javascript
const handleClick = (userName) => {
    console.log('Se hizo clic en: ' + userName);
};
```

También, para no escribir siempre `user.id`, `user.name`, etc., podríamos desestructurar al objeto `user` en el `map`, así:

```javascript
users.map(({ id, name, description, image }) => {
    // ...
});
```

De esa forma, podemos simplemente usar `{id}`, `{name}`, etc., dentro de nuestro JSX.