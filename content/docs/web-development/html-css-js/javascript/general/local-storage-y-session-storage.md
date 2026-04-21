---
title: "Local Storage y Session Storage"
---

 -Local Storage (Almacenamiento local)

- El Local Storage es un lugar persistente del navegador donde podemos almacenar información de objetos y de arrays, en forma de texto. Es decir, con strings en formato "clave": "valor". 

- Para ver el Local Storage, hay que ir a las herramientas del desarrollador e ir a la sección:

	DevTools > Application > Storage > Local storage

- El almacenamiento local es por página, es decir, se queda asociado a la página hasta que nosotros mismos lo borremos. Aunque cerremos la pestaña, cerremos el navegador, o apaguemos nuestra máquina, igualmente la información almacenada en el Local Storage persiste. La única forma de que se vaya es que nosotros mismos la borremos (mediante código, o usando las DevTools, o en los ajustes del navegador).


- Suponiendo que tenemos este objeto en JavaScript:

	const persona = {
		nombre: "Juan",
		edad: 20,
		email: "juancho@gmail.com",
		sexo: "M",
		vacunado: true,
	};

- Vamos a analizar cómo guardar o extraer esto del Local Storage. Los métodos son los siguientes:

localStorage.setItem()		// Guarda en el LS lo que pasemos. Recibe 2 parámetros (Clave y Valor)
localStorage.getItem()		// Extraemos del LS el elemento que queramos. Recibe la key del elemento
localStorage.removeItem()	// Elimina un elemento en específico del LS
localStorage.clear()			// Limpia el LS entero, es decir, elimina todos sus elementos


> Método setItem()

	localStorage.setItem("persona", JSON.stringify(persona));

- SetItem recibe dos strings. El primero va a ser la "key", y el segundo el "value" del elemento que vamos a guardar. En este caso, estamos guardando un elemento con key "persona" y con el valor de nuestro objeto en memoria convertido en un string con notación JSON.


> Método getItem()

	localStorage.getItem("persona");

- GetItem recibe un string. Ese string va a ser el nombre (la key) del Item que queremos extraer del LS. Lo que va a devolver es el string en formato JSON del Item almacenado en LS.

- Con esto, nosotros podemos combinar estos métodos:

	const persona2 = JSON.parse(localStorage.getItem("persona"));

- Ahora persona2 es un Object que tiene el objeto guardado en el LS con key "persona", que es lo que habíamos guardado antes.


> Método removeItem()

	localStorage.removeItem("persona");
	
- RemoveItem recibe un string al igual que getItem. Pero esta vez, en vez de devolverlo, lo elimina.


> Método clear()

	localStorage.clear();

- No hay mucha ciencia. Este método elimina todos los elementos del Local Storage.


> Ahora todo esto, pero con Arrays


	const listaDePersonas = [
		{
			nombre: "Mario",
			edad: 23,
	        email: "Maritoo@gmail.com",
	        sexo: "M",
	        vacunado: true
		},
		{
			nombre: "Lucia",
			edad: 26,
	        email: "luli20@gmail.com",
	        sexo: "F",
	        vacunado: false
		}	
	]


- La lógica es la misma que con objetos. Podemos guardar y extraer arrays con el LS. 

	localStorage.setItem("listaDePersonas", JSON.stringify(listaDePersonas));

- Agregamos el array al LS. Tendrá como "key" listaDePersonas y su "value" será un array con todos los objetos que contenga listaDePersonas. Obviamente, se guarda en forma de string como todo lo que se guarda en el LS.

	let listaDePersonas2 = [];  // Creamos otro array, en este caso vacío

	if (localStorage.getItem("listaDePersonas")) {
		listaDePersonas2 = [...JSON.parse(localStorage.getItem("listaDePersonas"))];
	}

- Si lo que devuelve getItem es un string y no es null, va a entrar al if. Eso quiere decir que logró encontrar un elemento con la key "listaDePersonas". Dentro del if, vamos a volcar toda la información del elemento en el LS, en el array en emmoria listaDePersonas2.

- Para desglosar esa línea, lo que vemos es: listaDePersonas2 = [...]; Es decir, le asignamos un array a listaDePersonas2, el cual es una copia de otro.

- Ese array que estamos copiando, es el que devuelve JSON.parse. Y JSON.parse lo que está parseando es el array que hallamos con su key listaDePersonas.



> Session Storage

- No hay mucha explicación: Session Storage es otro lugar donde almacenar información en el navegador. Es lo mismo que Local Storage pero con una diferencia clave: la información almacenada en el Session Storage no persiste por siempre, sino que se borra en el momento en el cual cerramos la pestaña o el navegador, a diferencia del Local Storage que su información persiste hasta que la borremos manualmente.

- Los métodos del Session Storage funcionan igual que los del localStorage:

- sessionStorage.setItem();
- sessionStorage.getItem();
- sessionStorage.removeItem();
- sessionStorage.clear();