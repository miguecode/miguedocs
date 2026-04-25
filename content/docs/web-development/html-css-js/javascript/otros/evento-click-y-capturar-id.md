---
title: "Evento Click y capturar ID"
description: "Ahora, en el archivo 'tabla.js' vamos a crear otras funciones."
---


Ahora, en el archivo 'tabla.js' vamos a crear otras funciones.

Primero, en la función de crearCuerpo, cuando vamos a recorrer cada 'key' de cada elemento, por cada td que creamos le vamos a agregar un evento de click. Haríamos:

td.addEventListener("click", handlerClick); 

function handlerClick(){
```typescript
console.log("Click");
```
}

Basicamente estamos haciendo esto: le agregamos a cada 'td' un evento escuchador. Por primer parámetro, le pasamos el evento "click". Es decir que, ese evento se va a disparar cada vez que hagamos 'click' en algún 'td'. Y cada vez que se dispare el evento, se va a ejecutar la función que va a recibir por segundo parámetro. Esa función se va a llamar 'handlerClick'. Es decir, manejador de click. Y es una función que nosotros mismos vamos a codear. En este caso, cada vez que se ejecuta, muestra por consola la palabra "Click".

Ahora, queremos hacer que cada vez que hacemos click en un 'td', capturemos su id.

'e' es por 'event' y es un parámetro que tienen todos los escuchadores de eventos. Sirve para ver la información sobre ese evento. A nosotros lo que nos importa es su 'target', el cual nos muestra quién es el emisor del evento. En este caso, el 'td'.

function handlerClick(e){
```typescript
console.log(e); //Muestra toda la info sobre el evento
console.log(e.target); //Muestra al emisor del evento
```
}

Lógicamente, nosotros no queremos apuntar al 'td', sino a la 'tr' de cada elemento. Pero esto no es tan simple como sólo ponerle el addEventListener al 'tr' en vez de al 'td'. Porque nos va a seguir mostrando que el target es el td.
Baus nos habló de que los eventos tienen 2 fases: la fase de contacto y la de burbuja. La de contacto es cuando lo que hicimos es llegar al target exacto y la burbuja es cuando se va al exterior.

Cuando hacemos click en una td, estamos haciendo click al mismo tiempo en todos sus padres. O sea, hacemos click en un body, en una section, en una tabla, en un tbody, en un tr, y finalmente en el td. Ese es el orden de las capas en la captura. Es el anidamiento del HTML. 

Por defecto, la captura siempre se va a hacer al elemento más anidado de todos. Por eso es que, si le ponemos el evento escuchador al 'tr', igualmente nos va a devolver el 'td'. Nosotros tenemos que cambiar este comportamiento. Para eso, el addEvenListener tiene un tercer parámetro, el cual es un booleano (true/false) el cual alterna este comportamiento por default. Si no le colocamos nada en el tercer parámetro, por defecto va en 'false'.

Ahora usamos 3 manejadores, para probar esto que estamos explicando: handlerClickTabla, handlerClickTr y handlerClickTd.

Entonces, cada vez que le doy click a un 'td' en la tabla, se disparan los 3 manejadores. El de la tabla, el tr y el de td. Y el primero en dispararse es el 'td', es decir, el más anidado. Los está capturando en burbuja. Va desde el más adentro hacia el más afuera.
Cuando le ponemos el tercer parámetro en 'true', cambiamos ese comportamiento para que no esté en modo burbuja, sino en modo captura. Entonces, el evento se ejecuta exactamente en el elemento que especificamos.

Aclaración
OJO: El target inevitablemente SIEMPRE va a ser el elemento inferior, es decir, el más anidado de todos (en este caso el td) Lo que nosotros podemos modificar es en qué momento actuar.

Ahora, vamos a dejar sólo al manejador del td y vamos a capturar la referencia del tr así:

const tr = e.target.parentElement; 
console.log(tr); //Va a mostrar la 'tr' en la que haga click

'parentElement' va a ser el tr. Es literalmente el elemento padre del 'e.target' (del td).

Ahora quiero conseguir la id del 'tr'. Así:
const id = e.target.parentElement.getAttribute("data-id");   //Opción 1
const id = e.target.parentElement.dataset.id;   //Opción 2

Esto está bien pero no tan bien. Lo que estamos haciendo es crear 30 manejadores exactamente iguales (30 porque son 30 filas en la tabla), es decir, por cada elemento de la tabla estamos asignando un manejador de Click. Esto es mejorable con la 'delegación de eventos'.

Para esto, vamos a sacar el addEventListener del forEach de los 'td'. Ya que ahí es donde estaba creando a los 30 manejadores. Ahora, lo que vamos a hacer es usar un único addEventListener en 'window'.

Entonces, fuera de crearTabla, tiro esta función:

window.addEventListener("click", e =>{
```typescript
console.log("Hiciste Click");
```
});

Con esto, cada vez que hago click en cualquier parte de la pantalla, se va a disparar el evento.

window.addEventListener("click", e =>{
```typescript
if(e.target.matches("td")){
	console.log("Hiciste Click");
}
```
});
Ahora, el evento 'click' sólo se dispara cuando hago click en una `<td>`.
'Matches' funciona así: devuelve un booleano true o false, dependiendo de si 'matchea' (encuentra) una ocurrencia del elemento que le pasemos.

window.addEventListener("click", e =>{
```typescript
if(e.target.matches("td")){
	console.log("Hiciste Click en un td.");
}else{
    console.log("Hiciste Click fuera de un td.");
}
```
});

De esta forma, estamos usando un sólo manejador de click. Es directamente el manejador de eventos de window. Demos click donde demos, se dispara el evento. Y dependiendo de lo que 'matchee', vamos a hacer algo o no.