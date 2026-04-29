---
title: "Build, Deploy y Hosting. Con ejemplo de Firebase"
description: "Build, Deploy y Hosting"
---


## Build, Deploy y Hosting

Una build o construcción es el proceso de pasar a producción una aplicación, comprimiéndola y optimizándola lo máximo posible y de forma automática. Esto se logra modificando el contenido de los archivos del proyecto (y hasta omitiendo los que no deberíamos "subir". En este proceso se suelen llevar a cabo técnicas como Bundling, Transpiling, Minification, Uglify o Tree Shaking. De estos últimos hablamos en otro apunte, pero básicamente sirven para, justamente, reducir el peso de un proyecto lo máximo posible.

Lógicamente, el motivo principal de hacer un build es que lo vamos a publicar en la web. Y sí, para publicar nuestra aplicación a la web, necesitamos tener una build de la misma. Y acá llega el concepto del Hosting, es decir, alojar nuestro sitio. Para esto, tenemos que usar alguna plataforma que sirva para hostear sitios web, como puede ser Netlify, Firebase, Vercel, Supabase, entre otros. 

Lógicamente, nosotros no vamos a querer que TODOS nuestros archivos del proyecto estén subidos de forma pública, y por eso es que hacemos el build, que es lo que realmente vamos a subir a Netlify, Firebase o los demás.

Y... ¿Qué es el deploy? El deploy es el DESPLIEGUE, de nuestra aplicación. Es decir, el proceso de publicar nuestra build en una plataforma de hosting, y se podría leer como: "Tengo mi aplicación, creo una build de ella, es decir, la buildeo, y después hago el deploy en alguna plataforma de hosting, es decir, 'la deployeo' o 'la despliego'".



## Build en Angular

Para crear una build de nuestra aplicación Angular, usamos el siguiente comando:

```bash
ng build
```
Después de esto, Angular se va a encargar de crearnos una carpeta llamada "dist". En ella, entre otros archivos, vamos a ver 2 carpetas principales: browser y server (si la aplicación es no-SSR no va a aparecer la carpeta server). Lo que importa es nuestra carpeta browser, ya que es la que vamos a usar para desplegar la aplicación:

```text
dist/
├── mi-proyecto/
│   	├── browser/ ← 🌟Los archivos estáticos (HTML, JS, CSS, etc.)
```
| │ | ├── server/  |
| --- | --- |
| │ | ├── ... otros |

Como vemos, "browser" va a ser la carpeta que necesitan interpretar los navegadores. Así que esa es la que vamos a usar para hostear nuestra aplicación en Netlify, Firebase, Vercel, o cualquiera de estos.

Desde Angular 16, hacer "ng build" compila la build en modo producción por defecto, pero para hacerlo de una forma más explícita y óptima, se recomienda hacer:

```bash
ng build --configuration production
```
**O resumido**: 

```bash
ng build -c production
```
Hacerlo así, nos garantiza totalmente que el build se va a hacer en modo producción, hasta si estamos en un entorno de desarrollo o si tenemos varias configuraciones.

Pero... ¿Qué nos da el modo producción? Nos da mejor performance en nuestra aplicación, ya que:


- Minifica el código
- Elimina console.logs y debugger
- Optimiza assets
- Tree shaking (sacar código no usado)
- Compresión más eficiente

## Deploy en Firebase

Esto es muy sencillo. Lo único que hay que hacer es usar este comando:

```bash
firebase deploy
```
Y listo, ahora si vamos a la consola web de Firebase y vamos a la sección Hosting, vamos a ver los enlaces que nos llevan a nuestro sitio desplegado. Sin más.

Aunque sí, obviamente y como hablamos antes en este apunte, la ruta en donde nosotros hacemos nuestro build de la aplicación tiene que coincidir con la que le indicamos a Firebase qué tiene que hostear. En el archivo "firebase.json", vamos a encontrar:

```typescript
"hosting": {
    "public": "dist/vital-avellaneda/browser",
    ... otras ...
```
Ese es un ejemplo correcto de cómo indicar la carpeta donde se hace el build.


## Truco para agilizar el proceso build-deploy

Como vemos, cada vez que vayamos a querer actualizar los cambios de nuestra app, tendríamos que hacer la build y después el deploy. Bueno, podríamos resumir esos dos pasos en uno, creando un script en el archivo "package.json":

```typescript
"scripts": {
	...otros...
	"deploy-fb": "ng build && firebase deploy --only hosting"
}
```
**Entonces, podemos usar el comando**: 

```bash
npm run deploy-fb
```
Y se van a ejecutar ambos comandos en uno (el ng build y el firebase deploy --only-hosting).

Y... ¿Qué es el --only-hosting?  Este comando le dice a Firebase: "Desplegá solo la parte de Hosting. No toques Firestore, Storage, ni nada más.". Así como existe el --only-hosting, también están:

```bash
firebase deploy --only firestore
firebase deploy --only auth
firebase deploy --only hosting,firestore
```
En resumen, usar --only es una buena práctica cuando queremos controlar exactamente qué se sube, y así hacer que el deploy se haga más rápido.