---
title: "Introducción a PHP"
description: "PHP (Hypertext Pre Processor)"
---


## PHP (Hypertext Pre Processor)

- Es un lenguaje de código abierto muy popular en el ámbito del desarrollo web el cual se puede incrustar fácilmente en código HTML. 

- Es muy popular. El 77% de los sitios web incluyen PHP.

- Es multiplataforma, es decir que puede correr en más de un SO (Windows, Linux, Mac). El código PHP es 'invisible' al navegador y tiene capacidad para conectarse a base de datos y para expandir su potencial con plugins.

- PHP, a diferencia de otros lenguajes, necesita un intérprete el cual devuelva en tiempo de ejecución una 'salida' (una respuesta).

Ahora que vamos a usar PHP, vamos a levantar nuestro propio servidor, y a la vez, vamos a ser clientes de nuestro servidor, ya que nosotros mismos le vamos a enviar peticiones para probarlo. Es lo que hacemos cuando levantamos un servidor usando JSON Server.

'Web' es un mundo. Es un paradigma de lo que se puede hacer dentro de ese universo. No quiere decir únicamente que vamos a hacer un HTML con botoncitos para poder hacer algo. Nosotros vamos a estar del lado del Servidor, lo que hoy en día se denomina 'Backend'. No importa el Frontend, no importa el Cliente. Nosotros vamos a enfocar en el lado de atrás del mostrador.

### ¿Cómo funciona en ese sentido PHP?

Cuando el cliente hace una petición, el servidor ejecuta el intérprete de PHP (en nuestro caso). Éste compila el código fuente, que genera el sitio web (no necesariamente). 
Y el resultado, es enviado al navegador del cliente. Obviamente no todos los servidores deben ser PHP. En nuestro caso sí va a ser así.

Para esto, nosotros no vamos a trabajar en una página web con HTML, sino que vamos a usar Postman para manejar los datos del servidor y las peticiones del cliente.