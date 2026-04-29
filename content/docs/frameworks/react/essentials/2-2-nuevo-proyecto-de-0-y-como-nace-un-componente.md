---
title: "2-2. Nuevo proyecto de 0 y cómo nace un Componente"
description: "¿Cómo se genera un proyecto con React desde 0?"
---


## ¿Cómo se genera un proyecto con React desde 0?

En el apunte anterior vimos cómo crear una app React con Vite. Ya tenemos el proyecto creado con todas sus carpetas y archivos. Además del package.json, gitignore, y el vite.config.js, lo que nos importa ahora a nosotros es la carpeta SRC. Acá viene lo técnico y lo que nosotros vamos a tocar.

Lo primero a ver es nuestro archivo index.html. Es literalmente el HTML base de nuestro sitio. Si lo vemos bien, vamos a ver una cosita clave. La etiqueta div que se muestra dentro de body:

```html
<div id="root"></div>
```
Si hacemos memoria, esto es lo que vimos al principio. El "React primitivo", donde creábamos un elemento div, el cual lo capturábamos en JS y hacíamos que, mediante la biblioteca de React, se convierta en nuestro elemento Root. Y en base a él, vamos a renderizar todos los elementos de nuestra aplicación. Bueno, todo eso es lo que hacemos ahora, pero sin darnos cuenta, ya que se hace automático.

Y otra cosa que vemos en este archivo es que se vincula mediante la etiqueta script, a un archivo llamado main.jsx. Sí, este va a ser nuestro primer archivo JSX, que es la sintaxis que explicamos anteriormente. La línea es:

```html
<script type="module" src="/src/main.jsx"></script>
```

Si vamos a este archivo, vamos a encontrarnos con el Entry Point de nuestra app. De acá nace todo lo que se ve en pantalla. Es lo que vemos de base en nuestro root.

Si prestamos atención a los imports, vamos a ver algo muy curioso también. Estamos haciendo dos imports: uno a React y otro a ReactDOM, que no por casualidad, son los mismos imports que hacíamos cuando vimos lo que era el React primitivo. Solo que esta vez, el "from", está en otro lugar. Ya que ahora lo tenemos instalado en nuestro proyecto dentro de node_modules. No tenemos que extraerlo desde afuera. Lo instalamos nosotros gracias a Vite y npm.

Además de esos dos imports, también aparece un llamado App, y un archivo CSS. App es nuestro primer componente, y es la base de lo que muestra root. App es el componente que va a ser padre de todos los demás componentes en la app. Más adelante vamos a ver cómo crear componentes y demás. Porque sí, como dijimos antes, React está basado en componentes. 

Y por si fuera poco, vamos a ver algo todavía más curioso: Hacemos uso del método createRoot() del objeto ReactDOM! Sí, exactamente lo mismo que hacíamos en el React primitivo. Solo que ahora, "no nos damos cuenta". Literalmente está tomando al elemento `<div>` con id "root" que vimos en el archivo index.html. Y de este elemento root que crea, usa su método render(), que también vimos en el React primitivo. 

Como vimos en un principio, nosotros podríamos simplemente tener esto:

```typescript
const root = ReactDOM.createRoot(document.getElementyById('root'));
root.render("Hola Mundo!");
```

Y funcionaría perfectamente! De hecho, vamos a ir desglosando de menor a mayor lo que podemos ir haciendo en este método render(). Lo más básico es esto: un simple string que diga Hola Mundo!, para que se renderice en pantalla.

Y... ¿Qué es lo que podíamos hacer ahora? Mostrar elementos. Y de hecho, como ahora estamos en un archivo JSX, podemos usar la siguiente sintaxis:

```typescript
root.render(
	<button>	Boton 1</button>
)
```
Esto funciona. Y si quisieramos agregar más botones...

```typescript
root.render(
	<>
		<button> Boton 1</button>
		<button> Boton 2</button>
		<button> Boton 3</button>
	</>
)
```

Esto NO funciona. Porque como dijimos, render() solo puede recibir UN elemento. Porque JSX es JavaScript extendido. Y render es un método que recibe solo un parámetro. En este caso estaría recibiendo 3, y eso rompe. Entonces, lo que podíamos hacer era envolver nuestros 3 elementos button en un elemento div. Eso funcionaría perfectamente. Pero... estaríamos obligados a crear un `<div>` en nuestro HTML, cosa que quiza no queremos hacer. Para esto es que React tiene los Fragments, que son bloques "invisibles":

```typescript
root.render(
	<React.Fragment>
		<button> Boton 1</button>
		<button> Boton 2</button>
		<button> Boton 3</button>
	</React.Fragment>
)
```

Esto funcionaría perfectamente. Pero, a ver... ¿Y si nosotros queremos que los 3 botones tengan un ícono SVG diferente? Tendríamos que insertarle la etiqueta SVG a cada elemento. Y el código se haría larguísimo... Y si quiero agregar párrafos, títulos, inputs...? Sería terrible tener que escribir todo acá. 


## Y por esto es que aparecen... los Componentes

Ante esta problemática, de tener que escribir cada elemento de forma manual uno por uno y sin poder reutilizar nada, es que aparecen LOS COMPONENTES. Los componentes, en concepto, son como los de Astro o como los de Angular: fragmentos/partes de código separados e individuales, que todos juntos conforman la interfaz de nuestra página. 

Y... ¿Técnicamente? Un componente en React es una función de JavaScript, la cual, nos va a retornar elementos a renderizar. Es decir: Así como a render() le pasamos UN elemento a renderizar, nosotros vamos a crear funciones, cuyo objetivo es retornar UN elemento a renderizar. Estas funciones JavaScript que retornan elementos a renderizar, son los llamados Componentes. Esto es clave y la base del desarrollo en React. Sin componentes tendríamos que hacer todo manual uno por uno, y todo en un mismo lugar. Una pesadilla.

```typescript
const createButton = ({text}) => {
	return (
		<button>	{ text }</button>
	)
}

root.render(
	<React.Fragment>
		{createButton({ text: 'Hola' })}
		{createButton({ text: 'Chau' })}
		{createButton({ text: 'Salud' })}
	</React.Fragment>
)
```

Como vemos, creamos una función llamada createButton(). Que lo que hace, es simplemente recibir un objeto con la propiedad 'text', y retornar un elemento a renderizar. Y en render(), como estamos usando JSX, nosotros podemos escribir código JavaScript al usar las llaves { }. Así es como invocamos a la función createButton(), y le pasamos un objeto distinto a cada una. Esto funciona perfecto! Nos renderiza los 3 botones, cada uno con su texto.

**Obvio que esto es mucho mejor que lo anterior**: estamos reutilizando código, y dejando el render() mucho más legible. Pero... todavía no es perfecto. Porque createButton(), si bien está haciendo como si fuese un componente, no llega a serlo. Para serlo, su nombre tiene que estar escrito -obligatoriamentecon mayúscula inicial. Es decir, debería llamarse Createbutton. Por esto es que por convención, se usa el PascalCase. Y además de esto, y mejor todavía, tiene que tener un nombre que no sea un verbo, tiene que llamarse de forma declarativa y autodefinida, como si fuese una tag HTML. En este caso, nuestro componente se debería llamar Button. Y al estar en PascalCase, se diferenciaría de la tag HTML `<button>`. Nosotros vamos a usar la función (componente) Button().

Entonces, estrictamente, para que sea un componente la función tiene que estar escrita en PascalCase. Por ejemplo, CreateButton(). Pero por convención, además de eso, también tiene que tener un nombre declarativo, que no sea un verbo. Por eso, lo correcto sería que se llame Button. Los nombres hay que pensarlos como si fuesen etiquetas HTML.

```typescript
const Button = ({text}) => {
	return (
		<button>	{ text }</button>
	)
}

root.render(
	<React.Fragment>
		<Button text="Hola">
		<Button text="Chau">
		<Button text="Salud">
	</React.Fragment>
)
```

Como vemos, la forma de invocarlo ahora es como si fuesen una etiqueta HTML, usando los <>, y pasandole las propiedades en forma de atributos. Es decir, ya no hacemos {text: 'Hola'}, sino que ahora es un atributo text="Hola". Estos atributos, son llamados Props (propiedades) de nuestro componente Button.

Esto sería la introducción a QUÉ es exactamente un componente, y cómo funcionan. En el siguiente apunte vamos a ver más sobre esto.