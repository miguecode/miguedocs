---
title: "Middlewares 1"
---

Middleware
Abstrayendonos de las APIS, un Middleware es un asistente para una aplicación que permite interactuar o comunicarse entre dos aplicaciones/programas de software/redes/hardware/SO, etc. Lo que sea. Un Middleware es un mediador entre dos de esos tipos de cosas, el cual permite la interacción/comunicación.
Un middleware implementa la interface PSR15.

Requisito para crear un middleware: El middleware DEBE invocar al siguiente middleware y pasarle los objetos Request y Response como argumentos. 

La respuesta del middleware va a ir a 2 lugares: o hacia alguna de nuestras rutas, o hacia el cliente, o hacia otro middleware. ¿Cómo llega? En caso de que un middleware derive en una de nuestras rutas, lo que el middleware devuelva como respuesta, nuestras rutas lo van a recibir como Request. En vez de recibirlo directamente del cliente, el request pasa por el middleware, el middleware lo procesa y da una respuesta, y esa respuesta, nuestra ruta lo toma como request y sigue el proceso.

Hubo un cambio en el medio del request del cual no se ocupó nuestro controller, sino que el mediador (el middleware).


Middleware en Slim 4
En Slim podemos ejecutar código antes y después de una llamada a nuestra API REST, es decir, manipular el Request y el Response como queramos en los Middleware, tanto antes de la llegada a la API REST, como después. En los middleware podemos hacer validaciones de que por ejemplo el usuario exista o no en la DB, o que los datos sean correctos, etc.

Posibles usos: proteger la aplicación de la falsificación de solicitudes cruzadas, autenticar las solicitudes antes de ejecutar su aplicación, etc.

Entonces, basicamente un middleware es como un bloque de código validador, que se puede aplicar a cada una de las peticiones que hacemos al servidor. Cada vez que hacemos una petición, lo que mandamos pasa por el middleware y realiza una acción con eso (ya sea validar u otra cosa). 

Un middleware lo podemos poner a nivel aplicación, cosa que se ejecute siempre en cualquier momento, o a nivel ruta, entonces sólo aplica a esa ruta específica. 

Slim añade middleware como capas que rodean su aplicación principal. Cada middleware es una capa por la cual tiene que pasar nuestra Request para llegar al centro, que sería nuestra aplicación. Y no solo al llegar, sino también al irse. Es decir, un middleware actúa antes de llegar a la ruta como después de haber entrado. 

Entonces la primer capa por la que entra, va a ser la última por la que sale. Es un efecto rebote. Las capas más grandes rodean a las anteriores.