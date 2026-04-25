---
title: "Formularios Parte 2. Submit y el Envío de Datos"
description: "Como sabemos, nosotros usamos la etiqueta Form para contener a los controles de formulario (Inputs, Labels, Selects, Input de tipo Submit...). El fin de esto es..."
---


## Envío de datos

- Como sabemos, nosotros usamos la etiqueta Form para contener a los controles de formulario (Inputs, Labels, Selects, Input de tipo Submit...). El fin de esto es obtener DATOS, los cuales nos va a brindar el usuario. Y con esos datos, nosotros vamos a hacer cierta acción (o sólo guardarlos, no importa). 

- Entonces, por eso es importante el atributo "value" de cada input. Porque eso es con lo que nos vamos a quedar, con el valor de cada input. Cada uno de esos valores van a ser los datos con los que vamos a interactuar o almacenar. 

- Una vez que el usuario ingrese los valores en las inputs, las tiene que enviar. Y para eso, lo más común del mundo es pulsar un botón, el cual se va a encargar de enviar los datos. Ese botón puede crearse de dos maneras distintas: Con HTML nativo o con JavaScript.

- Como nosotros estamos viendo HTML, vamos a ver la manera nativa de HTML de hacerlo, pero también vamos a ver la forma de de hacerlo JavaScript, que en realidad es la vía ideal para hacer todo esto.


## Etiqueta `<input>` de tipo `<submit>` (La forma de HTML nativo)

- Esta es la forma de enviar datos usando HTML. Si nosotros ponemos una input de tipo submit, lo que vamos a ver es un BOTÓN, el cual va a tener la funcionalidad de enviar datos. Este botón está directamente relacionado con la etiqueta `<form>`, de la que es parte. Es decir que, si nosotros ponemos una input de tipo submit fuera de un contenedor `<form>`, vamos a ver el botón, pero no va a tener ninguna funcionalidad.

```typescript
<input type="submit">
```
- Por defecto -en español- el botón va a decir "Enviar". Nosotros podemos cambiar esa palabra, cambiando el "value" del input. 

```typescript
<input type="submit" value="Finalizar formulario">
```
- **Ahora vamos a lo importante**: Por defecto, el input de tipo submit va a realizar la acción de "disparar" el envío del formulario. Y esto tiene relación directa con JavaScript, ya que esta "acción de disparar", hace referencia a un EVENTO. Y como sabemos, en JavaScript manejamos eventos. Bueno, en este caso, nuestro elemento `<form>` va a tener un evento de tipo "submit", el cual se dispara cuando nosotros pulsamos la input de tipo submit.

- Veamos un ejemplo de lo que pasa al hacer clic en la input de tipo submit:

`<form>`
```typescript
<input type="text" name="nombre">
<input type="email" name="correo">
<input type="submit" value="Esta es la input de tipo submit">
```
`</form>`

- Si ponemos "Juan" en el el primer input, "juancito@gmail.com" en el segundo, y después hacemos clic en el submit, vamos a ver que la URL nos queda así:

[La URL en la que estábamos]?nombre=Juan&correo=juancito%40gmail.com

- Ese '?' significa que a partir de ahí, vienen los parámetros. Cada parámetro se separa con "&". Y los parámetros son los "name" y "values" que estamos enviando. Su estructura es:

?["name" del input]=["value" del input]&["name" del input]=["value" del input]
?nombre=Juan&correo=juancito%40gmail.com

- En vez de una "@" vamos a ver que aparece "%40". Esto es por un tema de caracteres de la URL.


### Usar la etiqueta button en vez de input

- Sí, esto es posible y también es una buena práctica. Por defecto, si nosotros ponemos una etiqueta `<button>` dentro de un `<form>`, ese botón va a tener el atributo type="submit". Y sí, cumple exactamente la misma funcionalidad que tener una input de type="submit". Es exactamente lo mismo. De hecho, hasta puede ser mejor semánticamente que el elemento sea un button y no una input. Y si quisiéramos que el botón no sea submit, simplemente ponemos button type="button".


## Envío de datos mediante JavaScript (Y no HTML de forma nativa)

- Ese comportamiento de apretar la input de tipo submit y que se dispare el evento es algo que ocurría y era común antes, cuando todavía no se usaba JS. Es una función nativa de HTML, y nosotros no vamos a trabajar con esto ya que no es lo ideal. Lo ideal es usar JavaScript.

- Vamos a ver cómo podemos hacer el envío y recepción de datos mediante JavaScript:

- Primero, nos creamos nuestro archivo script.js y tomamos algún elemento `<form>`

const formulario = document.forms[0]; 

- En este caso, "document.forms[]" es un array de elementos `<form>` existentes en el HTML. Al poner [0], nos estamos refiriendo al primer elemento de ese array, es decir, al primer form (y en este caso, el único).

- Y una vez que ya tenemos la dirección de memoria del elemento guardada dentro de nuestra variable constante llamada "formulario", vamos a agregar un escuchador al evento submit del que hablamos antes. Para recordarlo, habíamos dicho que los elementos `<form>` tienen un evento llamado "submit". Veamos:

formulario.addEventListener('submit', (e) => {
```typescript
e.preventDefault();
console.log("Hola, funcionó el envío de información");
```
});

- En esta función, como dijimos antes, "submit" es el nombre del evento. Y esa variable "e" es el evento recibido (el evento submit que vamos a recibir). Podríamos ponerle cualquier otro nombre a "e". Pero la tendencia es sólo usar la e.

- La función "e.preventDefault()" lo que hace es cortar el comportamiento por defecto del evento (que en este caso, sería el envío del submit). Al cortarlo, evitamos que HTML realice la acción predeterminada que siempre intenta hacer al hacer clic en la input de tipo submit. Eso es importante hacerlo ya que nosotros NO queremos que HTML lo trabaje de forma nativa. Lo queremos manpular nosotros con JS.

- En otras palabras, eso se puede leer como "Cuando el formulario lance el evento "submit", realizá la siguiente función: [La función que pusimos entre { }]. En este caso, la función es una "arrow function", que es la conocida expresión lambda. Esta función tiene como parámetro una variable llamada "e" que recibe a un event, y después tira un console.log().

- Esto quiere decir que nosotros pudimos haberlo también hecho así:

function FrenarEventoYConfirmarEnvio(evento) {
```typescript
evento.preventDefault();
console.log("Hola, funcionó el envío de información");
```
}

formulario.addEventListener('submit', FrenarEventoYConfirmarEnvio(evento));


## Atributo "method" de la etiqueta `<form>`

- El atributo "method" hace referencia al verbo que va a realizar la petición del formulario. Por defecto, es GET. Así que si no especificamos el atributo, su valor va a ser GET. Pero también podría ser POST, que es necesario de colocar para cuando los datos a ingresar son sensibles o modifican algo en el servidor. Esto es así ya que, cuando usamos GET, como vimos antes, los "name" y "value" de las input se ponen en la URL. Y eso es cero seguro. Si usamos POST, los datos se envían en el cuerpo de la petición, y no en la URL.

```typescript
<form method="POST">
	...
</form>
```
### ¿Cuándo cambiar GET por POST?

- Si los datos NO son sensibles y se pueden compartir fácilmente → GET está bien.
- **Ejemplo**: Formularios de búsqueda (?q=palabra).

- Si los datos SON sensibles o modifican algo en el servidor → POST es obligatorio.
- **Ejemplo**: Registro de usuarios, envío de contraseñas, pagos.


## Atributo "action" de la etiqueta `<form>`

- El atributo "action" de la etiqueta `<form>` lo que hace es que, cuando se hace el submit, nos manda una página que le indiquemos, con los datos que contenga el formulario. Por defecto, el valor de action es la misma URL en la que estamos. Por eso, por lo general, no especificamos este atributo.

```typescript
<form action="https://ejemplo.com/procesar">
```
### Otros atributos de la etiqueta `<form>`

name - Sirve para identificar al formulario en el DOM
enctype - Define cómo se codifican los datos. Sirve para cuando vamos a enviar archivos
autocomplete - Es lo mismo que explicamos antes, por defecto viene en "on", pero podemos ponerlo en "off" para que no se autocompleten las inputs del formulario
novalidate - Desactiva la validación de HTML5, es útil si sólo queremos manejar la validación con JS
target - Define dónde se abre la respuesta del formulario (puede ser _self, _blank, _parent o _top)

- Ejemplo básico de "name"

```typescript
<form name="registro">
```
- Con eso, nosotros podríamos estar en JS y acceder al formulario así:

```typescript
const form = document.forms["registro"];
```
## Relación con el Backend

- Con lo que vimos, nosotros podemos ejecutar de forma nativa una petición de tipo POST o GET. Esas peticiones se las hace el Frontend al Backend.

- El Backend es el que recibe y el que VALIDA lo que recibe del Frontend. 