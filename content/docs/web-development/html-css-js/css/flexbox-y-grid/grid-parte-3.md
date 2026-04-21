---
title: "Grid - Parte 3"
---

>> Áreas de Grid

- Suponiendo que queremos hacer un template entero para la página. Podemos hacer que el header sea una fila que ocupe todas las columnas (de la línea 1 a la -1), el footer lo mismo, etc. Esto es muy típico y muchas páginas estan hechas así. Pero no es lo ideal.

- La propiedad grid-area nos permite definir nombres para distintas secciones de nuestra página:

.container header {
	grid-area: header;
}

.container aside {
	grid-area: aside;
}

.container main {
	grid-area: content;
}

.container footer {
	grid-area: footer;
}

- Gracias a esos nombres, nosotros podemos hacer esto en el contenedor grid:

.container {
	display: grid;
	// grid-template-columns: 1fr 1fr 1fr; // Ya no lo usamos
	// grid-template-rows: 35px 1fr 100px; // Ya no lo usamos
	min-height: 100vh;
	
	grid-template-areas:
		"header header header"
		"sidebar content content"
		"footer footer footer"
}

- La propiedad grid-template-areas es muy poderosa. Literalmente nos hace DIBUJAR la grilla, con sólo escribirla. Basado en ese ejemplo, estaríamos teniendo 3 columnas y 3 filas. Y cada elemento aparece en el lugar que nosotros mismos escribimos. Con esto nos ahorramos de pensar "la línea 1 hasta la 3...".

@media (width > 400px) {
	.container {
		grid-template-areas: 
			"header header header"
			"sidebar content content"
			"footer footer footer"
	}
}

- Y así, lo hacemos responsive para celulares. Si en algún lugar ponemos un punto " . ", significa que no queremos que haya nada. Así:

	grid-template-areas: 
		"header header ."
		"sidebar content content"
		". footer footer"

- Ahora, donde hay puntitos " . ", va a aparecer la posición vacía. El lugar va a seguir ahí, existiendo. Pero sin contenido. 


>> Alinear elementos con Grid

- Así como lo hacemos en flexbox, con grid también podemos alinear los elementos. Y lo hacemos con la propiedad "align-items". Esta propiedad es del contenedor grid. Su valor por defecto es "normal", el cual funciona prácticamente igual que el "stretch". O sea, estirando a los elementos a lo largo de toda la posición en la que estén. Los valores de align items son los típicos: start, end, center, space-between, space-around, space-evenly. De esta forma, todos los elementos de la grid se van a alinear según la propiedad "align-items". 

.container {
	... otras propiedades de grid ...
	align-items: center; // Todos los elementos van centrados en cada hueco de la grid
}

- Pero supongamos que queremos que un elemento tenga un alineación distinta. Bueno, al igual que en flex, tenemos la propiedad "align-self". Esta propiedad es propia de cada elemento de la grid. 

.container div:first-child {
	align-self: end;
}

- Importante: NO CONFUNDIR la alineación DEL ELEMENTO con la alineación del HUECO en la GRID.


>> Alinear a la grid como tal

- Con las propiedades "justify-content" y "align-content", las cuales son propias del contenedor grid, vamos a poder alinear a la grid. Ojo: esto es literalmente alinear la grilla. No a los elementos dentro de la grilla. Esa es la diferencia con align-items. Estas propiedades, como en flex, tienen los típicos valores: start, end, center, etc.

- "justify-content" va a alinear el contenido de forma horizontal. Y "align-content", de forma vertical.

- Por ende, si le ponemos "center" a las dos propiedades, estaríamos centrando a la grilla en ambos ejes, vertical y horizontal, así:

.container {
	display: grid;
	justify-content: center;
	align-content: center;
}

- Y suponiendo que queremos ponerle el mismo valor a las dos propiedades, podemos abreviarlo usando una sola, llamada "place-content", así:

.container {
	display: grid;
	place-content: center;
}

- Un truco para recordar la diferencia es que "content" es singular. Por ende, se refiere sólo a la grilla. En cambio, "items" es plural. Se refiere a cada elemento.