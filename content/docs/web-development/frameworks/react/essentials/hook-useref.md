---
title: "Hook useRef"
---

> El Hook UseRef

- Este hook nos sirve para que una variable de estado de un componente cambie, pero que no se re-renderice el componente. Como explicamos antes, React re-renderiza un componente una vez que escucha un cambio en él. En este caso, nosotros vamos a crear valores que, a pesar de que cambien, React no va a re-renderizar el componente.

- Al igual que con todos los hooks, hay que importarlo:

	import { useRef } from 'react';

- La función es muy similar al useState:

	const ref = useRef(0);   // Le seteamos un valor inicial de 0 a nuestra "variable de referencia"

	const handleIncreaseRef = () => {
		ref.current++;
		console.log(ref);
	}


- Entonces, esto es muy similar a useState, pero sin re-renderizar el componente. 

- Y uno podría decir... ¿Y entonces, por qué no simplemente uso una variable de JavaScript y listo? Bueno, eso es porque si el componente se re-renderiza en algún momento, esa variable de JavaScript se va a resetear a su valor inicial. Es decir, no es persistente. En cambio, las variables de referencia que creamos con el hook useRef, SÍ persisten. Y por más que el componente se re-renderice, el valor no se reinicia.