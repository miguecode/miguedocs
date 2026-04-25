---
title: "NPM, JSON Server, versiones"
description: "JSON Server es un paquete de JavaScript que nos permite, sin utilizar una base de datos, levantar un servidor que guarda un archivo JSON como fuente de datos, e..."
---


## JSON Server

- JSON Server es un paquete de JavaScript que nos permite, sin utilizar una base de datos, levantar un servidor que guarda un archivo JSON como fuente de datos, es decir, la data. Y a esta data, le podemos hacer peticiones con verbos HTML: GET, POST, PUT, DELETE.

```text
npm -v
// Muestra la versión de npm

node -v
// Muestra la versión de Node
```
- Tener npm nos va a permitir descargarnos paquetes de la página npmjs.com. Esta página es el mayor repositorio de paquetes de JavaScript del mundo. Aca está todo el repositorio para compartir, es como el supermercado de JS. Y npm nos sirve para administrar todo este conjunto de archivos. 

- Buscamos "json-server". Allí, podemos ver toda la información del Json Server. Recordemos que lo vamos a usar para el desarrollo. Una vez que instalemos JSON Server en nuestro proyecto, pasaría a ser una dependencia de nuestra aplicación. Y a su vez, JSON Server va a tener sus propias dependencias, que son otras aplicaciones o paquetes que JSON Server necesita para funcionar.

```text
npm install json-server
```
- Con ese comando, ya tenemos instalado el paquete en nuestro proyecto.

 
### Versiones

- Semantic Versioning (Versionado semántico)

```text
18.14.0 [18 = major] [14 = minor] [0 = patch]
```
- **Major**: Cambios -muy- radicales en la aplicación.  
- **Minor**: Cambios no tan radicales, la aplicación funciona igual, pero agrega funciones nuevas.
- **Patch**: Es literalmente un parche, es decir, el arreglo de un bug. 

- Hay que tener en cuenta que en nuestros proyectos pueden ocurrir conflictos de versiones: imaginemos que yo tengo una aplicación la cual es dependiente de un paquete X el cual lo instalé en su versión 18.14.0. Y tiempo después, ahora estoy con una nueva aplicación la cual va a nacesitar aquel paquete X también. Y cuando lo voy a instalar, veo que ahora ese paquete X tiene una versión 20.0.0, es decir, más actual. Cuando yo lo instale, va a ocurrir el problema de que, mi aplicación anterior, la cual dependía de la versión 18.14.0 del paquete X, ya no va a funcionar. Yo lo que tengo que hacer es que tanto la versión 18 como la 20 del paquete X, convivan al mismo tiempo en mi máquina.

- **Para eso existen los entornos (environment)**: es como si cada aplicación tuviera su propia carpeta, y en esa carpeta tiene que estar el paquete X en su versión correspondiente, con todas las demás herramientas que hacen que la aplicación funcione. Sería su "enviroment" (entorno). Y cada aplicación tendría el suyo.


### Uso de NPM

- **Las instalaciones se pueden hacer a 3 niveles**: global, usuario y proyecto. A nosotros, en este caso, nos interesa hacerlo a invel de proyecto.

```text
npm init 
npm install json-server
```
- De esa forma, transformamos a nuestro proyecto en un proyecto administrado por npm, que sería como cuando hacemos que una carpeta funcione como repositorio GIT.

```text
npm install -g json-server
Lo instala globalmente, permitiendo usar el comando json-server en cualquier proyecto.

npm install json-server 
Lo instala solo en el proyecto actual, lo cual es más recomendable.
```
- Una vez que hicimos npm init, nos hace preguntas que debemos completar:
- **El nombre**: por default tendrá el mismo nombre de la carpeta, y debe ser todo en minúsculas y sin espacios. Se pueden separar las palabras usando '-', como:  json-server.
- **La versión**: por default es la 1.0.0, pero podríamos especificar la que queramos.
- **La descripción**: la descripción de la aplicación.
- **El punto de entrada (entry point)**: es el archivo por el cual inicia la ejecución de la aplicación (por default es 'index.js').
- **Comandos para testing (test command)**: lo completamos si queremos.
- **Repositorio GIT**: completamos con la URL del repositorio GIT, si es que tenemos alguno.
- **Palabras clave (keywords)**: son palabras clave que tengan que ver con la aplicación, así la gente la puede encontrar al buscar esas palabras.
- **El autor**: literalmente el autor de la aplicación.
- **La licencia**: por defecto es 'ISC'.

- Después de cargar todo, respondemos con "y" para confirmar.

- Ahora se crea un "package.json", este archivo es como si fuera el archivo .git invisible de una carpeta que funciona como repositorio GIT. En package.json, figura toda la información que especificamos a la hora de crear el repositorio npm. El nombre, la versión, descripción, etc.

- Si voy a dejar todo cargado por defecto, entonces lo podría hacer de forma automática así:

```text
npm init -y 
```
- El '-y' hace que el repositorio se cree con todos los valores por default.

- Todo esto del npm init sirve para crear ese archivo "package.json". Es literalmente lo que hace. Si nosotros borramos ese archivo, tendríamos que hacer el "npm init" devuelta.

- Ahora, todo lo que nosotros instalemos se va a instalar únicamente dentro de este proyecto en particular, que funciona como un paquete npm. De esta forma hacemos el control de versiones. Ya que, yo podría en esta carpeta instalarme un paquete X en su versión 18, y en otra carpeta que también sea un repositorio npm, me podría instalar el mismo paquete X pero en otra versión. Y ambas carpetas van a seguir funcionando sin errores de compatibilidad.

```text
npm install json-server @[version]
Con el '@' adelante, podemos especificar qué versión queremos instalar de un paquete.
```
- Siempre que instalamos algo, se crea una carpeta "node_modules". Ahí es donde va a estar todo el código de terceros que instalemos. Esto sirve para que ese código no contamine al nuestro. Una vez que instalamos algo por primera vez, si vamos al package.json, vamos a ver que se agregó una nueva key: "dependencias", y justamente, dentro de las dependencias va a aparecer el paquete que acabamos de instalar, con su versión correspondiente. Y esto es así porque ahora, nuestra aplicación DEPENDE de ese paquete.
Por defecto, siempre se va a instalar la última versión. Quedaría así:

```typescript
"dependencies": {
	"json-server": "^0.17.3"
}
```
- Ese " ^ " significa que si el día de mañana hacemos un npm install, y hay una versión con un "minor" o un "patch" superior, lo va a actualizar. Si yo quisiera que instale exactamente la misma sin actualizarse, le saco el " ^ ".

- Así como están las dependencies, que son paquetes que se necesitan en producción, también estan las devDependencies, que son paquetes solo para el desarrollo (nodemon, eslint). Estas últimas son opcionales para el desarrollador que esté usando el código, pero no obligatorio para su funcionamiento.


- Además de "node_modules" también aparece un package-lock.json. Es un archivo que contiene a todas las dependencias del "json-server". Cada paquete que instalamos, como dijimos, tiene sus propias dependencias. Y las dependencias del json-server tiene sus propias dependencias, y esas dependencias tienen más dependencias, y así. Por eso usamos npm, que se encarga de administrar exactamente lo que necesitamos sin necesidad de instalar toda esa "saraza".

- Hay que entender que nosotros, cuando queremos subir nuestro proyecto a GIT, sólo tenemos que subir nuestro código. Es decir, no tenemos que subir el código de terceros, ya que no tiene sentido; eso es algo que nosotros podemos instalar rapidamente gracias a npm. Por eso existe ".gitignore". Gitignore es un archivo en el cual podemos escribir el directorio del archivo que queremos ignorar. Entonces, cuando hagamos un pusheo o alguna modificación, git va a ignorar esa carpeta/archivo. 

- Cada cosa que no queramos subir a git (como archivos de configuración, contraseñas, etc), lo ponemos en el .gitignore. Por ejemplo:

```text
/node_modules
```
- Si escribimos eso dentro de nuestro ".gitignore", cada vez que hagamos un pusheo al repositorio con GIT, la carpeta "node_modules" NO se incluye. Es decir, se ignora y no se sube. 

- Ahora si nosotros nos descargamos o clonamos el repositorio de nuestro proyecto, lo que tenemos que hacer siempre es abrir la terminal (en nuestra carpeta), y hacer:

```text
npm install
```
- Y así, automaticamente nos creamos la carpeta node_modules con todo lo que necesita nuestro proyecto. 

- Aclaración
- Un módulo es un archivo de JavaScript que dentro tiene variables, funciones o clases. Es como un repositorio para organizar mi aplicación, donde guardo variables, funciones o clases las cuales van a ser consumidas (importadas) desde otros archivos de la aplicación.