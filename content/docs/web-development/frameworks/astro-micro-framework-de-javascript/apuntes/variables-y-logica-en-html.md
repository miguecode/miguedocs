---
title: "Variables y lógica en HTML"
---

> Uso de variables en el HTML

- Como vimos anteriormente, en la parte lógica de nuestro archivo astro (--- ---), podemos crear variables normalmente, ya que es código JS/TS. Y esas variables pueden usarse 'en vivo' en la estructura HTML. Esto es muy útil para una mejor reutilización en el código. 

- Esto es así ya que podemos reutilizar la misma variable en distintos lugares del HTML. Por ende, si quisiéramos modificar su valor, lo hacemos sólo en la asignación de la variable, y no en todas las partes del HTML donde la hayamos usado. Esa es la idea principal; que el HTML no tenga valores hardcodeados, sino que use variables. Y que esas variables tengan el valor a usar.

- Para mejorar eso, también podríamos usar objetos para organizarlo, por ejemplo así:


---
const pageTitle = "About Me";

const identity = {
	firstName: "Miguel",
	country: "Argentina",
	occupation: "Web Developer",
	hobbies: ["movies", "soccer", "coding"],
}

const skills = ["HTML", "JavaScript", "CSS", "Astro"];
---

<h1>{pageTitle}</h1>

<ul>
	<li> Mi nombre es: {identity.firstName} </il>
	<li> Mi país es: {identity.country} </il>
	<li> Mi ocupación es: {identity.occupation} </il>
</ul>

<p>Mis Skills son:</p>

<ul>
	{skills.map((skill) => <li>{skill}</li>)}
</ul>


> Renderizando con condiciones en HTML

- Para mostrar esto, vamos a crear 2 variables booleanas:

---
const happy = true;
const finished = false;
const goal = 3;
---

Y en el HTML, hacemos esto:

{happy && <p>¡Estoy feliz!</p>}

- En este caso, la tag 'p' siempre va a ser verdadera. Ya que es un elemento HTML que está ahí, que nosotros creamos. Pero la variable 'happy' podría no ser verdadera. En este caso sí lo es porque lo pusimos en 'true'. 

- De esa forma, se va a renderizar ese párrafo. Si 'happy' es false, no se va a renderizar.

{finished && <p>Tutorial terminado.</p>}

- Como finished es false, no se va a mostrar ese párrafo.

{goal === 3 ? <p>Terminé el tutorial en 3 días</p> : <p>No terminé el tutorial en 3 días</p>}

- Acá estamos usando un operador ternario. Si goal es igual a 3, se renderiza lo que esté antes del ':'. Si no es igual a 3, se renderiza lo que está después del ':'.