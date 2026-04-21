---
title: "Configurar Firebase CLI e inicializar proyecto"
---

> Firebase CLI

- Para usar Firebase, lo primero que hay que hacer siempre es instalar el Firebase CLI en nuestro sistema. Lo más cómodo es hacerlo a nivel global. Para eso, usamos el comando: 

	npm install -g firebase-tools

- O para ver si ya lo teníamos instalado, podemos hacer:

	firebase --version

- Una vez instalado, hay que logearnos. Para verificar si ya estamos logeados, podemos hacer:

	firebase login:list

- Y sino, hacemos: 

	firebase login
	
- E iniciamos sesión con Firebase.



> Inicializar Firebase en un proyecto con distintos servicios

- Si ya tenemos Firebase CLI en nuestra máquina y nos logeamos, ya podemos hacer uso del comando:

	firebase init
	
- Esto es un wizard que nos va a hacer distintas preguntas. Una de ellas es la de seleccionar a qué proyecto queremos apuntar. Ahí, lo lógico es que nosotros ya tengamos creado nuestro proyecto en Firebase, o podríamos crearlo ahora mismo con estos mismos comandos.

- Después, nos va a preguntar qué servicios de Firebase queremos usar. Tenemos que seleccionarlos y listo. En base a las opciones que elijamos, después nos va a hacer X preguntas para configurar dichos servicios elegidos. 

- Generalmente, lo que se suele usar es Firestore para la base de datos, Storage para el almacenamiento de contenido multimedia, y Hosting para justamente hostear la web. El otro muy común es Authentication, pero en este caso no vamos a poder agregarlo acá, ya que no aparece en las opciones. Y eso está hecho apropósito ya que Authentication es un servicio que no necesita archivos de configuración locales como Firestore, Storage o Hosting. Es un servicio completamente gestionado desde la consola web, y no requiere reglas (.rules), ni nada que necesitemos versionar. Por eso, Firebase asume que lo vamos a configurar desde la consola web y listo.

[***] OJO: Actualizo a partir de acá. Todo en este apunte está bien a día de hoy (17 de junio 2025), pero hay una cuestión: Actualmente, el servicio Storage es de pago. Si bien es barato o se puede usar de forma gratuita "hasta cierto punto", es obligatorio agregar un medio de pago. Por ende, si no lo vamos a usar, simplemente no lo seleccionamos a la hora de inicializar el proyecto y listo. No pasa nada. Se puede usar Cloudinary o cualquier otro gestor de contenido multimedia. Pero bueno, este apunte va a continuar hablando como si también hubiese incluido Storage.

- Vamos a tener que configurar la ubicación de la base de datos (Firestore) o el Storage. Tenemos que elegir una opción de todas las regiones, y lo lógico es elegir la más cercana a nosotros, para mejorar el rendimiento. En este caso, la más cercana sería southamerica-east1.

- Cuando nos haga escribir los nombres de los archivos para las reglas, dejamos todo como lo ofrece por defecto.

- Otra configuración va a ser la ubicación de nuestro "directorio público", es decir, el lugar donde se hace el build de nuestra aplicación al momento de la producción. Por defecto va a aparecer "public", pero dependiendo de cómo se hace el build de nuestra aplicación, podemos cambiarle el nombre para que coincidan. En Angular, lo normal es tener que cambiarlo a "dist/nuestro-proyecto/browser". Igual no pasa nada si nos olvidamos, es cuestión de cambiarle el nombre a la carpeta después y listo. (Esto se va a explicar más a detalle en el próximo apunte).

- Cuando nos pregunte si queremos configurarla como single-page app (SPA), obviamente decimos SÍ. Y lo de GitHub, no es necesario pero puede ser útil. Yo pongo que NO, pero se puede configurar que sí después usando este comando:

	firebase init hosting:github


- Ahora podemos ver un ejemplo del procedimiento:

You're about to initialize a Firebase project in this directory:

	C:\Users\JUNIOR\Desktop\vital-avellaneda

✔ Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.

✔ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to   
confirm your choices.

Firestore: Configure security rules and indexes files for Firestore
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
Storage: Configure a security rules file for Cloud Storage

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

✔ Please select an option: Use an existing project
✔ Select a default Firebase project for this directory: vital-avellaneda (vital-avellaneda)
i  Using project vital-avellaneda (vital-avellaneda)

=== Firestore Setup
i  firestore: ensuring required API firestore.googleapis.com is enabled...
!  firestore: missing required API firestore.googleapis.com. Enabling now...
+  firestore: required API firestore.googleapis.com is enabled
✔ Please select the location of your Firestore database: southamerica-east1

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory      
and publish them with firebase deploy.

✔ What file should be used for Firestore Rules? firestore.rules

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

✔ What file should be used for Firestore indexes? firestore.indexes.json
+  Wrote firestore.rules
+  Wrote firestore.indexes.json

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

✔ What do you want to use as your public directory? dist/vital-avellaneda
✔ Configure as a single-page app (rewrite all urls to /index.html)? Yes
✔ Set up automatic builds and deploys with GitHub? No
+  Wrote dist/vital-avellaneda/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

✔ What file should be used for Storage Rules? storage.rules
+  Wrote storage.rules

+  Wrote configuration info to firebase.json
+  Wrote project information to .firebaserc

+  Firebase initialization complete!