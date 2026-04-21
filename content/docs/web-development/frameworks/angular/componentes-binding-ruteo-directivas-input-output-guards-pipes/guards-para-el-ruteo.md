---
title: "Guards (Para el ruteo)"
---

> Route Guards

- La idea de los Route Guards es manejar cuándo podemos o no acceder a cada ruta, a través de los parámetros que definamos. Es algo similar a los Middlewares de PHP Slim.

- Los Guards son servicios que Angular ejecuta antes de navegar a una ruta. Pueden permitir, bloquear, redirigir o cancelar la navegación en la app.

- Así se crea un guard con el Angular CLI:

	ng g guard guards/logeado

- Después, nos da 4 opciones para elegir qué tipo de Guard vamos a crear.

1. canActivate: Pregunta si el usuario puede o no acceder a la ruta
2. canActivateChild: Similar al anterior, pero a una ruta hija
3. canDeactivate: Pregunta si el usuario puede SALIR de una ruta
4. canMatch: Sirve para checkear que los datos de la ruta estén correctos
5. resolve: Sirve para la recuperación de datos de ruta antes de su activación

- Vamos a hacer un ejemplo de un Guard de logeo. Si está logeado, sobrepasa al guardian. Y sino, no puede. Para eso, creamos el Guard como vimos antes, elegimos CanActivate y codeamos la función que nos aparece por defecto. Va a devolver TRUE o FALSE.

- Antes de codear la función, vamos al archivo de ruteo. En el, nos tenemos que enfocar en el path al que queremos resguardar. O sea, el path que tendrá que tener un guardia previo, que va a definir si podemos acceder a la ruta o no, que generalmente es a un componente 'home', 'bienvenida', etc.

	[lógica del path con su componente], canActivate: [logeadoGuard]

- Esta es la sintaxis. Primero, toda la declaración de nuestro path, y después, seguido de una coma " , ", la nuestro Guard. El cual, primero ponemos su tipo (en este caso canActivate), seguido de " : " y el nombre dle Guard puesto entre corchetes []. Y si quisiéramos poner más Guards en este path, lo hacemos separándolos por " , ".

- Ahora vamos a hacer uno de admin:

	ng g guard guards/admin

- Se mantiene la misma lógica. Se invoca en las rutas, y la función devuelve un bool.

- OJO: Además de devoler un booleano en la función del Guard, yo puedo hacer todo tipo de lógica. Una gran idea es tirar un router.navigate ahí mismo y después retornar false. Entonces si el usuario quiere acceder a algún lugar sin estar logeado, el guard lo puede mandar al login.