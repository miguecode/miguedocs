---
title: "Etiquetas obsoletas y etiquetas no recomendadas"
---

> Etiquetas Obsoletas en HTML

- A lo largo del tiempo han existido muchas etiquetas HTML que en su momento eran útiles y se solían usar para cumplir ciertos propósitos, pero después, aparecieron nuevas etiquetas o características que las reemplazaron. Entonces, quedaron en desuso u obsoletas. 

- Usar etiquetas obsoletas es una mala práctica por un tema de compatibilidad y accesibilidad. 

- La mayoría de estas etiquetas se volvieron obsoletas en parte por tener un propósito enfocado a estilar elementos. Con la aparición de CSS, ya no tiene sentido ni es correcto usar esas etiquetas. 

- Y pasa exactamente lo mismo con los atributos. Hay atributos que se dedican a estilar ciertos elementos, cosa que ya no tiene sentido ni es buena práctica usar. 


>> Vamos a ver ejemplos de etiquetas obsoletas.

<font>
	Esta fuente está personalizada.
</font>
- Font se usaba para, justamente, personalizar la fuente. 

<center>
	Este texto está centrado.
</center>
- Center se usaba para centrar elementos en la pantalla.

<blink>
	Este texto titila.
</blink>
- Blink se usaba para hacer que el texto titile.

<big>
	Este texto es más grande.
</big>
- Big se usaba para que el texto sea más grande.

<strike>
	Este texto está tachado.
</strike>
- La etiqueta <strike> se usaba para tachar texto y se reemplazó por <del>, ya que tiene un significado semántico.

<tt>
	console.log("Este texto es código!");
</tt>
- La etiqueta <tt> se usaba para enfatizar en que el texto iba a ser código (de cualquier lenguaje), entonces lo que hacía era poner la fuente "monospace". Ahora, esta etiqueta se reemplazó por <code>, que tiene el mismo propósito y es semánticamente correcta. 

<isindex prompt="Buscar en la página:">
- La etiqueta <isindex> se usaba para agregar un campo de búsqueda. Se reemplazó por <input type="search"> dentro de un <form>.

<marquee behavior="scroll" direction="left">
  Este texto se desplaza de izquierda a derecha.
</marquee>
- Se usaba para hacer que el texto se desplace animado, ahora esto se hace con CSS.

<menu>
	<li>Inicio</li>
	<li>Servicios</li>
	<li>Contacto</li>
</menu>
- Se usaba para indicar una lista de navegación. En HTML4 está obsoleta, pero en HTML5 existe con un propósito diferente. Para el propósito que tenía antes, ahora se usa <ul> u otra etiqueta de lista.

<noframes>
	Tu navegador no soporta frames.
</noframes>
- Se usaba para decirle al usuario que su navegador no soportaba <frameset>. Ahora se usa <iframe>.



> Etiquetas NO obsoletas, pero ya no recomendadas

- Estas etiquetas, si bien siguen funcionando, su uso no es recomendado. Veamos ejemplos.


<u>Texto subrayado</u>
- La etiqueta <u> no es recomendable. Es mejor usar <span> y después estilar con CSS usando la propiedad text-decoration: underline.

<b>Texto en negrita</b> 
- La etiqueta </b> no es recomendable. La gran mayoría de las veces es mejor usar <strong> (ya que es semántico), y después estilar con CSS.

<i>Texto en itálica</i>
- La etiqueta <i> no es recomendable. Se usaba para poner texto en cursiva. Se reemplazó por <em>, ya que tiene un significado semántico.

<s>Este texto está tachado</s>
- La etiqueta <s> no es recomendable. Se usaba para tachar texto sin indicar si es un error o un cambio. Se reemplazó por <del> que sí indica contenido eliminado, o por <span> estilando con CSS si es sólo visual.

<small>Este texto es más pequeño</small>
- La etiqueta <small> no es recomendable. Se usaba para achicar el tamaño del texto. Es mejor usar <span> y estilar con la propiedad CSS font-size: smaller.