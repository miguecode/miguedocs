---
title: "Métodos con callbacks (Map, Filter, Reduce, Splice, Sort, Find, Some)"
---

> Métodos de Arrays con callbacks

- Estos métodos (excepto splice) tienen la particularidad de que reciben un callback. Es decir, reciben una función como parámetro, y a esa función que reciben como parámetro la van a ejecutar una vez por cada elemento que tenga el array. Si tiene 5 elementos, la función se ejecuta 5 veces con cada uno de ellos.

- Si bien todos comparten esa funcionalidad, cada uno tiene sus detalles y diferencias:

- array.map(c)       // Crea y devuelve un nuevo array, cuyos elementos van a ser todos los "return"
- array.filter(c) 	     // Crea y devuelve un nuevo array, cuyos elementos van a ser los que retornen true
- array.reduce(c)  // Devuelve un único elemento del array
- array.sort(c) 	    // Ordena los elementos de un array. Devuelve el mismo array, pero ordenado
- array.find(c) 	    // Devuelve el primer elemento del array que retorne true
- array.some(c)    // Devuelve true o false, dependiendo de si algún elemento del array retorna true o no
- array.splice()	   // Elimina elementos de un array. Crea y devuelve un nuevo array con todo lo eliminado


> Método map()

- Map crea y devuelve un nuevo array desde 0. Cada elemento de ese nuevo array lo va a obtener gracias al  cada "return" de la función que reciba. Es decir, del callback. Y como dijimos, esa función se va a ejecutar por cada elemento que tenga el array.
	
- Los parámetros de la función callback (la que le pasamos) son 3. El primero siempre va a ser el elemento del array por el que estamos pasando, el segundo va a ser el índice del elemento, y el tercero va a ser el propio array. No es necesario que le pasemos los 3 parámetros obligatoriamente. Podemos sólo pasar el primero.
	
	callback(element, index, array)
	
- Veamos un ejemplo:

	const vec = [2, 4, 5, 6, 7, 8];

	const duplicados = vec.map((elemento => {
		if (elemento % 2) {
			return elemento;
		} else {
			return elemento * 2;	
		}
	});

- Esta función retorna a los elementos pares multiplicados por 2. Si no es par, lo retorna normal.

- La variable "elemento" va a guardar a, justamente, el elemento del array por el que estamos pasando. Primero sería el 2, después el 4, y así con los demás.

	const duplicados = vec4.map(e => e % 2 ? e * 2 : e);

- Esta es una forma más corta de escribirlo. Hace lo mismo, pero simplificamos al callback usando un operador ternario. Además, como la función la escribimos en una sola línea, podemos sacarle las llaves { }, y la palabra return. Así, la función va a retornar literalmente lo que quede escrito. Y como le estamos pasando UN sólo parámetro, también podemos sacarle los paréntesis.


> Método filter()

- Filter crea y devuelve un nuevo array desde 0. Si el callback retorna true, se agrega ese elemento al nuevo array. Si devuelve false, se omite, no se agrega, y se pasa al próximo elemento.

- El callback de filter también tiene esta firma:

	callback(element, index, array)

	const pares = vec.filter((e)=>{
		return e % 2 === 0;
	})

- Esta función retorna true o false dependiendo de si el número es par o no. Si es true, el elemento se agrega al nuevo array que va a devolver filter().

	const pares = vec.filter(e => e % 2 === 0);
	
- Esta es una forma más corta de escribirlo. Hace lo mismo, pero simplificamos al callback todavía más: Como la función la escribimos en una sola línea, podemos sacarle las llaves { }, y la palabra return. Así, la función va a retornar literalmente lo que quede escrito. Y como le estamos pasando UN sólo parámetro, también podemos sacarle los paréntesis.

- Además del callback, el método fitler también tiene un segundo parámetro opcional, al cual nos podemos referir a el como "this".

	vec.filter([función], [valorArbitrario]);    // A valorArbitrario vamos a acceder a el como 'this'.

- Sirve por si necesitamos algún valor externo.


> Método reduce()

- Reduce devuelve un único elemento. Puede ser un objeto, un número, un string, lo que sea, pero uno sólo. Y no puede devolver un array. Recibe 2 parámetros: un callback y un valor inicial. El callback puede recibir hasta 4 parámetros: callback(prev, actual, index, array).

	vecValores = [34, 20, 45, 10];
	const total = vecValores.reduce( (prev, actual) => {
		return prev + actual;
	}, 0);

- En la primer iteración del callback, "prev" va a valer 0, ya que es el valor inicial que le estamos pasando a "reduce" como segundo parámetro. Y "actual" va a ser 34. Es decir, el primer elemento.

- Esto quiere decir que en la primer iteración va a retornar 34. Y ese "34" que retorna, va a ser el valor de "prev" en la siguiente iteración. Y así con todo el array. En la segunda iteración, "prev" será 34 y "actual" será 20, es decir, el valor que sigue. 20+34 es 54. Retorna 54 y ese "54" es lo que valdrá "prev" en la siguiente iteración. Y así con todo. El último return de reduce será lo que le devuelva a "total".

	console.log(total);  // Va a devolver 109, que es la suma de todos los valores del vecValores

- Si no especificamos el valor inicial como segundo parámetro de reduce, lo que va a pasar es que en la primera iteración, "prev" va a tomar el valor del primer elemento y "actual" el del segundo. Por eso poner como valor inicial 0 y no poner ningún valor inicial, es lo mismo.

	const total = vecValores.reduce((p, a) => p + a, 0);

- Esta es una forma más corta de escribirlo. Hace lo mismo, pero simplificamos al callback todavía más: Como la función la escribimos en una sola línea, podemos sacarle las llaves { }, y la palabra return. Así, la función va a retornar literalmente lo que quede escrito.


> Combinando métodos

	const vec = ["pepe", "carlos", "ana", "luisa"]; 
	const total = vec.filter(n => n.length > 4).reduce((p, a) => p + a.length, 0);

- En este ejemplo, tenemos un array de nombres. Creamos una "total" que va a tomar el valor que le devuelva filter y reduce. Primero, "filter" va a crear un array filtrado, es decir, crea un array el cual sólo va a tener los nombres cuya cantidad de letras sea mayor a 4. Y a ese array que crea filter, le hace un "reduce". Reduce va a devolver un valor en base al array que acaba de crear filter. Este valor lo va a calcular sumando las letras de todos los nombres de ese array filtrado creado por filter. Y el valor se va a guardar en "total".

- De hecho, podríamos simplificar aún más esto, eliminando la declaración del array con los nombres.

	const total = ["pepe", "carlos", etc].filter(n => n.length > 4).reduce((p, a) => p + a.length, 0);

- Lógicamente, todos estos métodos que estamos viendo pueden combinarse de todas las formas que queramos. Ya que al fin y al cabo, siempre estamos trabajando con arrays. 


> Método sort()

- Sort sirve, justamente, para ordenar un array. Sort puede recibir un callback (el cual devuelve 1, -1 o 0), o puede no recibir ningún callback. Si no le pasamos callback, lo que va a hacer por defecto es ordenar a los elementos del array de forma ascendente, así:
	
	const vec = [3, 5, 2, 0, 9, 7];
	vec.sort();
	
	console.log(vec); 	// Ahora, podemos ver que vec es ["0", "2", "3", "5", "7", "9"] 
	
- Como vemos, usar el sort() sin callback funciona, pero tiene un problema con los números, y es que los pasa a string. Por eso NO ES RECOMENDABLE. 
	
- Ahora, vamos a ver un ejemplo usando un callback para realizar un ordenamiento personalizado.
	
- El callback que recibe el método sort, va a ser el comparador. Sort se encarga de que, por cada elemento de "vec", se ejecute la función comparadora. La cual, dependiendo de su return (1, -1 o 0), hace o no el "swap". 

	nombres.sort((a, b) => {
		return a.length - b.length;
	});

- O más resumido:

	nombres.sort((a, b) => a.length - b.length);
	
- Esta es una forma más corta de escribirlo. Hace lo mismo, pero simplificamos al callback todavía más: Como la función la escribimos en una sola línea, podemos sacarle las llaves { }, y la palabra return. Así, la función va a retornar literalmente lo que quede escrito.

- Cabe aclarar que sort() modifica (ordena) al array original. Es decir, no crea un array nuevo desde 0 y lo devuelve, sino que directamente altera al original. Esto muchas veces puede ser incómodo, así que, con el tiempo, apareció un nuevo método llamado toSorted(), que hace exactamente lo mismo que sort() pero sin modificar al array original.
	
	
> Método find()
	
- Find devuelve el primer elemento de un array que retorne "true". Cuando ya devolvió dicho elemento, deja de analizar a todos los demás. Este último detalle es clave (y positivo) de cara al performance.
	
	const user4 = users.find(u => u.id === 4);
	console.log(user4); // Muestra { id: 4, nombre: "Lucía" }

> Método some()

- Some devuelve true o false, dependiendo de si algún elemento de todo el array retorna "true". Cuando ya encuentra un elemento que retorna true, devuelve true y deja de analizar a los demás. Si no encuentra ninguno, retorna false. Eso de dejar de analizar a los demás cuando ya encontró algún "true", es positivo para el performance.

	const hayStock = productos.some(p => p.stock > 0);
	console.log(hayStock); // Muestra true
	
	
> Método splice()

- Cabe decir, antes que nada, que el uso de este método no es muy recomendado. Es engorroso. Y que con el tiempo, apareció un nuevo método llamado toSpliced(), que hace lo mismo que este, pero sin modificar al array original.

- Splice, a diferencia de los demás, no recibe una función como parametro. Lo que hace es devolver un nuevo array desde 0. Este nuevo array va a contener a los elementos que elimine del array original. Su criterio para eliminar es con un índice inicial (su primer parámetro).

- Splice recibe 2 parámetros, que serán 2 índices del array. El primer parámetro sera el "start" y el segundo parámetro sera la "cantidad de elementos a eliminar" (deleteCount), incluyendo al índice inicial.

	const vec = [34, 20, 45, 10, 88, 3];
	vec.splice(2, 2);

- En este caso, el start será el índice 2 (elemento 45), y la cantidad de elementos a eliminar van a ser 2. (incluyendo el start). Por lo tanto, se va a eliminar el índice 2 (45) y el índice 3 (10). Por lo tanto los elementos eliminados son el 45 y el 10.

- Entonces, splice va a devolver un nuevo array que será: [45, 10]. Obviamente, esto es opcional, no es obligatorio que guardemos lo que devuelve. Podemos usar este método simplemente para eliminar elementos de un array y listo.

- Extra: el método splice() también puede agregar elementos en una posición específica en el lugar en donde eliminamos (o no) elementos. Por ejemplo:

	vec.splice(1, 0, "nuevo"); // Inserta "nuevo" en la posición 1
	console.log(vec); // [34, "nuevo", 20, 88, 3]

- En este caso, como el deleteCount (es decir, el segundo parámetro) es 0, no estamos eliminando nada, y sólo agregamos el elemento string "nuevo". 