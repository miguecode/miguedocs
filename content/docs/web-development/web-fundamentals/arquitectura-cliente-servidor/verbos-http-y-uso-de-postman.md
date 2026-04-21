---
title: "Verbos HTTP y uso de Postman"
---

> Métodos o Verbos HTTP

1. GET. Solicita información de un recurso.
2. POST. Agregamos nueva información al servidor.
3. PUT. Modificamos información existente en el servidor.
4. PATCH. Modificamos información -parcial- del servidor.
5. DELETE. Eliminamos información del servidor.

Otros: HEAD, OPTIONS, TRACE, CONNECT.


1. HTTP - Método GET

- El método GET es el más básico y común, su objetivo es traernos información del Servidor. A diferencia de los demás verbos HTTP, este no crea, modifica ni elimina ningún elemento del Servidor. Sólo le pide datos.

- El GET es un verbo que, en el navegador, sólo funciona en la barra de búsqueda al armar el URL. De hecho, en la barra de búsqueda del navegador SÓLO puedo hacer GET. Para hacer ejecutar otro tipo de métodos HTTP en el navegador, lo tenemos que hacer programáticamente, mediante HTML o JavaScript. 

- Tenemos la posibilidad de pasarle parámetros (Query Params) de tipo Key-Value, como si fueran un Dictionary. El verbo GET NO tiene Body. 

- El par de nombres/valores es enviado SIEMPRE en la dirección URL (texto claro). No hay otra forma.
Las peticiones GET se pueden almacenar en el caché, permanecen en el historial del navegador, pueden ser marcadas como favoritas, no se debe utilizar cuando se trata de datos confidenciales y tiene limitaciones de longitud de datos (2048 caracteres en la URL máximo).

- La Caché es un tipo de memoria que guarda parte de los recursos que vamos pidiendo. Toda la parte del caché lo maneja el navegador que estemos usando. Por ejemplo, el logo de Google. Lo lógico es que por más peticiones que hagamos, el logo de Google nunca va a cambiar. Por lo tanto, en vez de pedirlo una y otra vez en cada petición que hacemos, directamente lo guarde en la caché la primera vez que lo pida. Y a partir de ese momento, cada vez que vaya a hacer una petición, ese recurso del logo de Google, lo va a tener ya disponible en la caché y no va a necesitar solicitárselo al servidor de Google.

- En los Headers de una petición nosotros podríamos especificar "No Caché". Eso sería pedirle al navegador que la petición que estamos realizando no guarde nada en caché.


2. HTTP - Método POST

- El método POST tiene como objetivo -postear- información en el Servidor. Es decir, agregar datos nuevos.

- El par de keys-values es enviado en el cuerpo del mensaje HTTP, es decir que POST a diferencia de GET, sí tiene Body. Que estos parámetros Key-Value estén dentro del Body, hace que la información no esté en la URL de lo que estamos solicitando. Están más seguros, como si estuvieran dentro de un sobre (aunque sigue siendo necesario usar HTTPS en vez de HTTP para garantizar seguridad). 

- Las peticiones POST, a diferencia de GET: No se almacenan en caché, no permanecen en el navegador, no pueden ser marcadas como favoritas ni tienen restricciones de longitud de datos.


3. HTTP - Método PUT

- El método PUT se usa para actualizar un recurso en el servidor. Es decir, modificar algo ya existente.

- Es similar a PATCH, pero con una diferencia clave: PUT reemplaza el recurso ENTERO. Lo que hace es ir a algún dato del Servidor, y pisarlo por completo.

- Además, si el recurso a sobreescribir no existe, puede crearlo (dependiendo del Servidor).

	 PUT /usuarios/123
	{
	    "nombre": "Juan Pérez",
	    "email": "juan@example.com"
	}

-  Esto sobreescribirá completamente el usuario 123. Si tenía más datos, se van a perder si es que no los volvemos a enviar.


4. HTTP - Método PATCH

- El método PATCH se usa para actualizar PARCIALMENTE un recurso en el servidor. Es decir, modifica una parte de algo ya existente (y no algo entero como PUT).

- Su diferencia con el método PUT es que PATCH no sobreescribe un elemento totalmente, sino que modificar sólo la parte que nosotros realmente queremos sobreescribir. 

	PATCH /usuarios/123
	{
    		"email": "nuevo@example.com"
	}

- Así, solo estamos modificando el email. Y el nombre, que no lo especificamos, sigue quedando igual que como estaba. Si esto fuese con PUT, el "nombre" se perdería, ya que lo tendríamos que agregar.


5. HTTP - Método DELETE

- El método DELETE se usa para eliminar un recurso del srevidor.

- Generalmente no tiene Body, sino que solo tiene la URL del recurso a eliminar.

- Ojo: Algunos servidores no eliminan realmente el recurso, sino que lo marcan como "inactivo".


> Postman

- Postman es una aplicación que sirve para probar el envío de peticiones a un Servidor, y la recepción de respuestas del mismo. Podemos ver toda la información de las Requests y Responses. 

- En el Postman me creé una cuenta (usuario miguelbj - junmigue7@gmail.com).

- Vemos que tenemos un Workspace creado por defecto llamado "My Workspace". Vamos a trabajar ahí. Sin crear colecciones, hicimos una nueva Request llamada "HTTP". Es una Request HTTP que por defecto viene con el verbo GET. Nosotros podemos cambiar al verbo que queramos. Tenemos al lado una barra para escribir la URL en la que queramos trabajar.

- Cuando escribimos la URL (que podría ser https://www.google.com/) o la URL de algún ejercicio nuestro, le damos a Send para enviar la petición. Automáticamente Postman nos va a devolver la respuesta del servidor. 

- En la respuesta podemos ver el Status de la petición, el tiempo que tardó en llegar la respuesta, y el tamaño de la respuesta.

- También podemos ver el Body, las Cookies y los Headers. 

- En "Body" podemos ver distintas formas de visualizar la respuesta. El que importa es Pretty.

- Como sabemos existe la página: https://http.cat/ la cual nos sirve para aprendernos los códigos de respuesta (Status Code) con fotos de gatitos. Vamos a poner esto en el Postman:

	https://http.cat/200

- Si hacemos una petición GET a esa URL, nos va a devolver la imágen del gatito correspondiente al código 200. (Esto es así porque así funciona http.cat). 

- Tenemos los parámetros para modificarlos como queramos, con su Key y Value. También podemos enviar datos modificando el Body. Son independientes.