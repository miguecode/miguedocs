---
title: "Formularios Parte 1. Inputs y Controles de Form"
---

> Formularios

- En el desarrollo web, los formularios son una pieza clave. Es una forma de pedirle todo tipo de datos al usuario. Para esto, HTML tiene distintas etiquetas.

- El objetivo de un formulario es RECIBIR DATOS que el usuario nos va a enviar. Y después, con esos datos, podemos realizar cierta acción (o sólo almacenarlos, no importa). Este tema del "envío de datos" se va a ver en el próximo apunte a este. Acá, vamos a ver los distintos controles de formulario.


> Etiqueta <form>

- La etiqueta <form> construye un formulario, que va a ser un contenedor de controles de formulario. Estos controles de formulario, en su mayoría, van a ser etiquetas <input>. Pero también hay otros controles como <label>, <select> y <textarea>. Los vamos a ver también en este apunte. 


> Etiqueta <input>

- La etiqueta <input> (entrada) es la que le va a pedir datos al usuario. Son elementos interactivos (generalmente de texto), donde el usuario puede cargar información o algo que quiera colocar. Un elemento input no es nada sin su TYPE. Type es el atributo en el cual nosotros tenemos que especificar qué tipo de input vamos a usar (texto, email, contraseña, checkbox's, radio's, números, números de teléfono, rangos, fechas, archivos, colores, y otros). 

- <input> es una self-closing tag, es decir, es una etiqueta que no necesita etiqueta de cierre.

	<input type="text"> 

- Text es el tipo más común de todos. Es para escribir texto plano, sin más.

- Veamos tipos:

submit - Es un botón, cuyo propósito es dar por finalizado el formulario, enviando los datos ingresados
email - Es como text, pero nos obliga a que haya una @, y que después de la @, haya algo más
password - Es como text, pero lo que escribimos sale con puntitos
checkbox - Es un botoncito que puede estar "checked" o no
radio - Similar al checkbox, pero con una funcionalidad más exluyente
number - Sólo permite introducir números
tel - Es para poner números de teléfono
range - Es una barrita que se puede mover para indicar un rango
date - Selecciona una fecha específica
file - Es un botón que al tocarlo nos abre el explorador de archivos, para seleccionar alguno
color - Selecciona un color
url - Es para poner URL's
month - Selecciona un mes y un año, pero no un día
week - Selecciona una semana específica del año
datetime-local - Selecciona una fecha y hora específica sin zona horaria
image - Es un botón cuya apariencia será literalmente una imagen que carguemos

> Atributos de toda input

1. Name. Es el identificador de los inputs, define cómo se va a llamar la variable que va a almacenar el dato ingresado en la input. Los "name" no pueden repetirse. Cada input dentro de un contenedor <form> tiene que tener un name distinto para que después sus valores sean enviados correctamente.

<input type="text" name="username">


2. Required. El atributo required (requerido) indica que la input necesita tener algún valor antes de completar el formulario. Sin esta input, no podemos completar el formulario.

<input type="email" required>


3. Placeholder. Muestra un texto de ejemplo o de ayuda en el input. En realidad, no todos los inputs tienen placeholder, es más común de las entradas con texto.

<input type="text" placeholder="Tu nombre de usuario">


4. Value. Este es el valor real de lo que ingresamos en la input. Es decir, si a una input de texto el usuario le coloca "Juan", entonces el atributo value de esa input va a ser "Juan".

<input type="text" placeholder="Tu nombre de usuario">


5. Disabled. Este atributo, si aparece en una input, indica que está deshabilitada, y por ende, no se pueda interactuar con ella de ninguna manera, ni siquiera copiar o seleccionar su texto.

<input type="text" disabled>


- Veamos más, explicadas de forma más rápida:

- Readonly. Hace que la input sea de sólo lectura y por ende, no se pueda escribir. Pero a diferencia de disabled, se puede seleccionar o copiar su texto. <input type="text" readonly>

- Autocomplete="off". Por defecto, muchas inputs de texto vienen con autocomplete="on", que lo que hace es autocompletar con valores que ya se ingresaron previamente en esa input. Si ponemos autocomplete="off", deshabilitamos esa función. <input type="text" autocomplete="off"> Pero ojo, hay que saber que no todos los navegadores respetan este atributo.

- Autocomplete tiene más valores aparte de "off" y "on", por ejemplo, "name", "email" "tel", entre otros. Y lógicamente, hacen que el autocompletado muestre ese tipo de opciones.



- Existen más atributos, que algunos son más propios dependiendo de la input. Por ejemplo:

- Para text, existen minleght y maxlenght, para limitar el tamaño del texto: minlength="3" maxlenght="14"
- Para los checkbox, un atributo obvio es "checked", que indica que la opción está seleccionada. Este tipo de input comúnmente se vincula con una etiqueta <label> (explicada más adelante).
- Para los radio, el atributo "name" tiene una función particular: Si hay más de un radio con el mismo "name", esto hace que sean autoexcluyentes. Es decir, si uno esta "checked", el otro no puede estarlo. Y también cabe aclarar, aunque sea obvio, que su valor ingresado es el que tengan en el atributo "Value", que no es lo mismo que la "leyenda" o <label> que tenga el check como tal. Por eso, en los radio hay que especificar el "value", y linkearlos a una etiqueta <label> (explicada más adelante).
- Para los number y los range, están los atributos "min", "max", y lógicamente, "value".
- Para tel, está el atributo "pattern", que es muy útil para validar el patrón o el formato que debe tener el número de teléfono. El valor de "pattern" lo tenemos que definir. Por ejemplo: pattern="[0-9]{9}"
- Para los file, lo que ocurre es que nos abre el explorador de archivos y nos deja elegir un archivo cualquiera. Con los atributos podríamos setearle que se abra en una carpeta en específico, y que sólo acepte cierto tipo de archivo en específico.Esto lo hacemos con "accept" así:
accept="video/*" /// accept="image/png, image/jpg"


> Etiqueta <label>

- La etiqueta <label> sirve para indicar algo, como una leyenda. Su función es meramente visual (y de accesibilidad), y puede linkearse a una input. Esto se hace con el atributo for="[ID de la input]". Un uso común de los label es con las input de tipo text o checkbox (para que sea más sencillo hacerles clic). Si linkeamos un label a un checkbox (u otro tipo de input), al hacer clic en el label, se va a activar o desactivar el checkbox linkeado (o se va a enfocar a la input linkeada). 

	<label for="nombre">Nombre:</label>
	<input type="text" id="nombre" name="nombre">
   
	<input type="checkbox" id="acepto" name="acepto">
	<label for="acepto">Acepto los términos y condiciones</label>
	
	<p>Selecciona tu género:</p>
	<input type="radio" id="masculino" name="genero" value="masculino">
	<label for="masculino">Masculino</label>
	
	<input type="radio" id="femenino" name="genero" value="femenino">
	<label for="femenino">Femenino</label>


- En este ejemplo, si hacemos clic en el label (El texto "Nombre:"), se va a hacer FOCUS en el input con id "nombre", ya que están linkeados.

> Etiqueta <select>

- Al igual que <input>, esta etiqueta es un control de formulario. Por ende, tiende a estar dentro de una etiqueta contenedora <form>. Sirve para seleccionar una opción. Dentro de <select> van etiquetas <option>, como si se tratara de una lista. Cada "option" tiene el atributo "value" que es lo que se manda como request. También tiene el atributo booleana "selected", que sería como el "checked" de los checkbox.

<label for="pais">Selecciona tu país:</label>
<select id="pais" name="pais">
	<option value="ar">Argentina</option>
	<option value="es">España</option>
	<option value="mx" selected>México</option>
	<option value="cl">Chile</option>
</select>

> Etiqueta <textarea>

- Es un cuadrado de texto multilínea, en el cual podemos escribir una cantidad de texto mayor. Es como "text", pero más grande y ampliable. Podemos hacer que sólo se extienda hacia abajo o sólo hacia los costados, usando CSS.

	<form>
		<label for="comentario">Escribe tu comentario:</label>
		<textarea id="comentario" name="comentario" 
		rows="5" cols="40" placeholder="Escribir el mensaje..."></textarea>
	</form>


> Algo clave en los formularios es la input de tipo "submit", y el atributo "method" o "action" de la etiqueta form. Esto se verá en el siguiente apunte. Habla sobre cómo se maneja el ENVÍO DE DATOS del formulario.
	

> Etiqueta <datalist> junto a Input con atributo "list" (Poco usado)

	<input list="paises">
	<datalist id="paises">
		<option value="Argentina">Un gran país</option>
		<option value="Brasil">Un caluroso país</option>
		<option value="Chile">Un delgado país</option>
	</datalist>

- Es como una input de texto que se puede escribir, pero muestra un autocompletado con las opciones que nosotros ponemos. El "value" es el valor real que se le va a mandar al servidor, y el otro texto es como una descripción de la opción elegida. En este caso, ambos serán visibles para el usuario. Es un control de formulario muy poco usado, ya que se suele usar más <select>.

- Se tiene que hacer así, como en el ejemplo, vinculando la etiqueta datalist con una input.


> Etiquetas <fieldset> y <legend>

- La etiqueta <fieldset> es un elemento contenedor que sirve para agrupar inputs relacionados. Y la etiqueta <legend>, la cual es opcional, se ubica justo debajo del inicio de un contenedor <fieldset>. Sirve para darle un título o una leyenda a este grupo de inputs.

	<fieldset>
		<legend>Información Personal</legend>
		<label for="nombre">Nombre:</label>
		<input type="text" id="nombre" name="nombre">
		<label for="edad">Edad:</label>
		<input type="number" id="edad" name="edad">
	</fieldset>