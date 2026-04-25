---
title: "NPM, Json Server, versiones"
description: "Es un paquete de JS que nos permite, sin utilizar DB, levantar un servidor que guarda un archivo JSON como fuente de datos, es decir, la data. Y a esta data, le..."
---


JSON Server
Es un paquete de JS que nos permite, sin utilizar DB, levantar un servidor que guarda un archivo JSON como fuente de datos, es decir, la data. Y a esta data, le podemos hacer peticiones con verbos HTML: GET, POST, PUT, DELETE.

Creamos un nuevo proyecto en el VSC. Vamos a tener una carpeta 'client' y otra 'server'.
Abrimos la carpeta server, y le hacemos clic derecho. Le damos a 'Abrir en terminal integrado'. Eso nos abre la terminal. Nos tenemos que asegurar obviamente de que la terminal se abrió en la carpeta 'server' que queremos utilizar.

npm -v
//Muestra la versión de npm

node -v
//Muestra la versión de Node

Tener 'npm' nos va a permitir descargarnos paquetes de la página npmjs.com. Esta página es el mayor repositorio de paquetes de JavaScript del mundo. Aca está todo el repositorio para compartir, es como el supermercado de JS. Y npm nos sirve para administrar todo este conjunto de archivos. Es lo que sería pip en Python.

Buscamos 'json-server'. Allí, podemos ver toda la información del Json Server. Recordemos que lo vamos a usar para el desarrollo. Una vez que usemos el JSON Server, pasaría a ser una dependencia de nuestra aplicación. Y a su vez, JSON Server va a tener sus propias dependencias. Son otras aplicaciones o paquetes que JSON Server necesita para funcionar.


Versiones
Semantic Versioning (Versionado semántico)
18.14.0 [18 = major] [14 = minor] [0 = patch]
Si hago un cambio MUY radical en mi aplicación, va a cambiar el major. Si es algo menor, como arreglar un bug, es decir, ponerle un parche (un patch), en ese caso el que cambia es el patch. Cuando a una aplicación funciona exactamente igual que antes, pero se le agrega una funcionalidad nueva, se le cambia el minor.

Hay que tener en cuenta que pueden ocurrir conflictos de versiones: imaginemos que yo tengo una aplicación la cual es dependiente de un paquete X el cual lo instalé en su versión 18.14.0. Y tiempo después, ahora estoy con una nueva aplicación la cual va a nacesitar aquel paquete X también. Y cuando lo voy a instalar, veo que ahora ese paquete X tiene una versión 20.0.0, es decir, más actual. Cuando yo lo instale, va a ocurrir el problema de que, mi aplicación anterior, la cual dependía de la versión 18.14.0 del paquete X, ya no va a funcionar. Yo lo que tengo que hacer es que tanto la versión 18 como la 20 del paquete X, convivan al mismo tiempo en mi máquina.

Para eso existen los entornos: es como si cada aplicación tuviera su propia carpeta, y en esa carpeta tiene que estar el paquete X en su versión correspondiente, con todas las demás herramientas que hacen que la aplicación funcione. Sería su 'enviroment' (entorno). Y cada aplicación tendría el suyo.

Las instalaciones se pueden hacer a 3 niveles: global, usuario y proyecto. A nosotros, en este caso, nos interesa hacerlo a invel de proyecto.

npm install json-server
//Lo instalamos a nivel de usuario (no vamos a hacer esto ahora)

npm init 
//Transformamos la carpeta 'server' en un proyecto administrado por npm, sería como cuando hacemos que una carpeta funcione como repositorio GIT.

Una vez que hicimos npm init, nos hace preguntas que debemos completar:
- **El nombre**: por default tendrá el mismo nombre de la carpeta, y debe ser todo en minúsculas y sin espacios. Se pueden separar las palabras usando '-', como:  json-server.
- **La versión**: por default es la 1.0.0, pero podríamos especificar la que queramos.
- **La descripción**: la descripción de la aplicación.
- **El punto de entrada (entry point)**: es el archivo por el cual inicia la ejecución de la aplicación (por default es 'index.js').
- **Comandos para testing (test command)**: lo completamos si queremos.
- **Repositorio GIT**: completamos con la URL del repositorio GIT, si es que tenemos alguno.
- **Palabras clave (keywords)**: son palabras clave que tengan que ver con la aplicación, así la gente la puede encontrar al buscar esas palabras.
- **El autor**: literalmente el autor de la aplicación.
- **La licencia**: por defecto es 'ISC'.

Después de cargar todo, respondemos con 'y' para confirmar.
Ahora se crea un 'package.json', este archivo es como si fuera el archivo .git invisible de una carpeta que funciona como repositorio GIT. En package.json, figura toda la información que especificamos a la hora de crear el repositorio npm. El nombre, la versión, descripción, etc.

Si voy a dejar todo cargado por defecto, entonces lo podría hacer de forma automática así:

npm init -y 

//El '-y' hace que el repositorio se cree con todos los valores por default.

Aclaración
Esto sirve para crear ese archivo 'package.json'. Es literalmente lo que hace. Si nosotros borramos ese archivo, tendríamos que hacer el 'npm init' devuelta.

Ahora que hicimos esto, esta carpeta 'server' sería un paquete de npm.
Ahora, todo lo que nosotros instalemos se va a instalar únicamente dentro de esta carpeta server, que funciona como un paquete npm. De esta forma hacemos el control de versiones. Ya que, yo podría en esta carpeta server instalarme un paquete X en su versión 18, y en otra carpeta que también sea un repositorio npm, me podría instalar el mismo paquete X pero en otra versión. Y ambas carpetas van a seguir funcionando sin errores de compatibilidad.

npm install json-server
//Instalamos el 'json-server' en esta carpeta 'server' (el cual lo traemos de npmjs.com)

Dato aparte
npm install json-server @[version]
//Con el '@' adelante, podemos especificar qué versión queremos instalar de un paquete.

Siempre que instalamos algo, se crea una carpeta 'node_modules'. Ahí va a estar todo el código de terceros que instalemos. Esto sirve para que ese código no contamine al nuestro. Una vez que instalamos algo por primera vez, si vamos al package.json, vamos a ver que se agregó una nueva key: 'dependencias', y justamente, dentro de las dependencias va a aparecer el paquete que acabamos de instalar, con su versión correspondiente. Y esto es así porque ahora, nuestra aplicación DEPENDE de ese paquete.
Por defecto, siempre se va a instalar la última versión. Quedaría así:

"dependencies": {
```typescript
"json-server": "^0.17.3"
```
}
//Ese ' ^ ' significa que si el día de mañana hacemos un npm install, y hay una versión con un 'minor' o un 'patch' superior, lo va a actualizar. Si yo quisiera que instale exactamente la misma sin actualizarse, le saco el ^.

Además de 'node_modules' también aparece un package-lock.json. Es un archivo que contiene a todas las dependencias del 'json-server'. Cada paquete tiene sus propias dependencias. Y las dependencias del json-server tiene sus propias dependencias, y esas dependencias tienen más dependencias, y así. Por eso usamos npm, se encarga de administrar exactamente lo que necesitamos sin necesidad de instalar toda esa 'saraza'.

Hay que entender que nosotros, cuando queremos subir nuestro proyecto a GIT, sólo tenemos que subir nuestro código. Es decir, no tenemos que subir el código de terceros, ya que no tiene sentido; eso es algo que nosotros podemos instalar rapidamente gracias a npm. Por eso existe '.gitignore'. Gitignore es un archivo en el cual podemos escribir el directorio del archivo que queremos ignorar. Entonces, cuando hagamos un pusheo o alguna modificación, git va a ignorar esa carpeta/archivo. 
Cada cosa que no queramos subir a git (como archivos de configuración, contraseñas, etc), lo ponemos en el .gitignore.

/node_modules
//Escribimos eso dentro del archivo llamado '.gitignore', y así nunca le damos bola a la carpeta 'node_modules', que es donde está todo el código de terceros.

Ahora si nosotros nos descargamos o clonamos el repo de nuestra aplicación, nos paramos en 'server', abrimos la terminal, y hacemos:

npm install
//Y así automaticamente nos tira el node_modules con todo lo que necesita la aplicación.


Aclaración
Un módulo es un archivo de JS que dentro tiene variables, funciones o clases. Es como un repositorio para organizar mi aplicación, donde emboco variables, funciones o clases las cuales van a ser consumidas (importadas) desde otros archivos de la aplicación.