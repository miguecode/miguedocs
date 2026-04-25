---
title: "Tablas, Details y Summary, y Dialog"
description: "Esto significa que el uso actual de las tablas es para cuando queremos realmente hacer una tabla, como las que vemos en Excel. O para hacer un calendario, por e..."
---


## ¿Para qué se usa `<table>`?

- Originalmente, la etiqueta `<table>` fue creada para estructurar el esqueleto de nuestra página. Delimitando dónde está el header, las distintas secciones, el footer, y cuánto espacio ocupa cada parte.

- Hoy en día, ya no tiene sentido usar `<table>` para eso, ya que existe Grid CSS (y también Flexbox).

- Esto significa que el uso actual de las tablas es para cuando queremos realmente hacer una tabla, como las que vemos en Excel. O para hacer un calendario, por ejemplo. O sea, lo que antes se usaba como técnica para estructurar la página, ahora sólo se usa para crear tablas.


## Etiqueta `<table>`

- La etiqueta `<table>` va a ser la contenedora de toda la tabla. Dentro de ella, vamos a poder colocar los siguientes elementos, para construirla:

- **thead (Table Head) (Fila de Encabezado)**: Contendrá una `<tr>` (Fila), la cual tendrá `<th>` (Encabezados)
- th (Table Header) (Encabezado)
- **tbody (Cuerpo de la Tabla)**: Contendrá las `<tr>` (Filas), las cuales también tendrán `<td>` (Celdas)
- tr (Table Row) (Fila)
- td (Table Cell) (Celda)
- **tfoot (pie de tabla)**: Contendrá una `<tr>` (Fila), la cual también tendrá `<td>` (Celdas)

- Hay que entender que las tablas en HTML, son sólo filas. Realmente no estamos trabajando con columnas y filas. Son sólo filas y celdas. 

- Dentro de `<table>`, por lógica siempre vamos a tener un `<thead>`, el cual va a ser el contenedor de una fila (`<tr>`), y que esa fila va a tener encabezados (`<th>`).

- Después del thead, viene el `<tbody>`, el cual va a ser el contenedor de todas las demás filas (`<tr>`), las cuales van a contener distintas celdas (`<td>`).

- Y después del tbody (y este es más opcional), viene el `<tfoot>`. El cual contiene una fila (`<tr>`), que también contiene distintas celdas (`<td>`).

`<table>`
```typescript
<thead>
	<tr>
		<th></th>
		<th></th>
		<th></th>
	</tr>
</thead>
<tbody>
	<tr>
		<td></td>	
		<td></td>	
		<td></td>	
	</tr>
	<tr>
		<td></td>	
		<td></td>	
		<td></td>	
	</tr>
	<tr>
		<td></td>	
		<td></td>	
		<td></td>	
	</tr>
</tbody>
<tfoot>
	<tr>
		<td></td>	
		<td></td>	
		<td></td>
	</tr>
</tfoot>
```
`</table>`

- Las etiquetas `<td>` tienen dos atributos opcionales que son "rowspan" y "colspan". El primero sirve para indicar cuántas filas queremos que ocupe la celda en la tabla. Entonces, podemos hacer que se vea más alta, ya que ocupa más de una fila. Y colspan es lo mismo pero hacia los costados, ya que ocupan más de una "columna". rowspan="2" colspan="4"

- **En CSS, el uso de la propiedad border-collapse**: collapse; sirve para que los bordes no se vean repetidos.


## Details y Summary

- Estas dos etiquetas trabajan en conjunto y buscan ocultar y mostrar cierto contenido, de forma interactiva con un botón que despliega el contenido oculto.

- Details va a ser el elemento contenedor, y summary el elemento que siempre va a estar visible, y representa al contenido oculto. 

`<details>`
```typescript
<summary>¿Qué necesito llevar?</summary>
<ul>
	<li>Short de baño</li>
	<li>Toalla</li>
	<li>Bronceador solar</li>
</ul>
```
`</details>`


## Dialog

`<dialog open>`¡Holaaaa!`</dialog>`

- El dialog es como un texto modal, ya que cuando aparece, se pone por encima de todo el HTML y te inhabilita el poder interactuar con los demás elementos. Es como un alert, un prompt, o un confirm, entre otros (aunque estos últimos son propios de JS, no de HTML).

- Cuando un atributo se especifica dentro de una etiqueta HTML, es porque va a tener el valor 'true'. Si no aparece, es porque está en false.

- Por eso, se pone simplemente `<dialog open>` en vez de <dialog open=true>

- **Para que funcione, hay que usar JS**: 

<dialog id="miDialogo">
```typescript
<p>¡Este es un modal nativo de HTML!</p>
<button id="cerrar">Cerrar</button>
```
`</dialog>`

<button id="abrir">Abrir diálogo`</button>`

`<script>`
```typescript
const dialogo = document.getElementById("miDialogo");
document.getElementById("abrir").onclick = () => dialogo.showModal();
document.getElementById("cerrar").onclick = () => dialogo.close();
```
`</script>`