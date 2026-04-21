---
title: "Recorrer Arrays u Objetos (For, Foreach, Forof, Forin)"
---

> Formas de recorrer Arrays u Objetos

- En estos ejemplos, vamos a usar el método entries() de la función constructora/clase Object. Este método devuelve un array de arrays. Y esos arrays internos del array entries son arrays de 2 elementos: [key, value]. Sirve para representar a cada propiedad y valor del objeto que le queremos recorrer.

- Recordemos que, así como existe el método "entries()" para obtener las entradas de un objeto, también existen "keys()" y "values()". Sus nombres describen literalmente lo que retornan.

- Para verlo claro, esto funciona así:

	const persona = { nombre: "Miguel", edad: 23, vacunado: true };
	
	console.log(Object.entries(persona));  // [["nombre", "Miguel"], ["edad", 23], ["vacunado", true]]
	console.log(Object.keys(persona));      // ["nombre", "edad", "vacunado"]
	console.log(Object.values(persona));   // ["Miguel", 23, true]


- Las formas más comunes son el FOR y el FOREACH. Pero es bueno conocer las demás sintaxis.

For - Realmente no "recorre" elementos, pero sirve para iterar cualquier cosa y como queramos
Foreach - Recorre arrays elemento por elemento, pero NO recorre objetos.
Forin - Recorre arrays elemento por elemento, y SÍ recorre objetos.
Forof - Recorre arrays elemento por elemento, pero NO recorre objetos.


> For [Para cualquier cosa]

	const entradas = Obejct.entries(objeto);

	for (let i = 0; i < entradas.length; i++) {
	    let [key, value] = entradas[i];
	    console.log(key, "-", value);  // Muestro el "key - value" de cada entrada
	    
	    // console.log(entradas[i][0], "-", entradas[i][1]);  // Otra forma de mostrar lo mismo
	};


> Foreach [Sólo para Arrays]

	const entradas = Obejct.entries(objeto);

	entradas.forEach(entrada => {
	    let [key, value] = entrada;
	    console.log(key, "-", value);  // Muestro el "key - value" de cada entrada
	    
	    // console.log(entrada[0], "-", entrada[1]);  // Otra forma de mostrar lo mismo
	});

- El forEach recorre cada elemento del array entradas. Por cada elemento, ejecuta la función que le pasamos, es decir, ejecuta un callback. El primer parámetro de ese callback es justamente el elemento por el que estamos pasando.

- Además del elemento del array, el callback que recibe forEach también permite recibir un segundo parámetro opcional, el cual sería el índice del array:

	entradas.forEach((entrada, indice) => {
	    console.log(indice, entrada[0], "-", entrada[1]);
	});


> Forof [Sólo para Arrays]

	const entradas = Obejct.entries(objeto);

	for (const entrada of entradas) {
	    console.log(entrada[0], "-", entrada[1]);  // Muestro el "key - value" de cada entrada
	}

- Esta forma de recorrer es muy similar al forEach. Es decir, por cada elemento del array entradas, se ejecuta lo que declaramos dentro. Cada elemento se va a representar como "entrada". Ojo: el forof no recibe un callback, sino que directamente ejecuta lo que declaramos en las llaves { }.


> Forin [Para Arrays y Objetos]

	const objeto = { nombre: "Miguel", edad: 23, vacunado: true };

	for (const key in objeto) {
		console.log(key, "-", objeto[key]);
	};

- Forin está hecho para recorrer objetos. Más precisamente, las keys de los objetos. Es decir, los nombres de las propiedades del objeto. Básicamente, forin hace lo que forof no puede hacer. Su sintaxis es igual pero usando el "in" en vez del "of".

- Y además, con forin también podemos recorrer arrays tal cual como lo haríamos con el forof. Pero el forof no puede recorrer objetos como sí lo hace el forin.