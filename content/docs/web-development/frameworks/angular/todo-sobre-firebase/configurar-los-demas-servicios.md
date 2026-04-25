---
title: "Configurar los demás servicios"
description: "Vincular los servicios de Firebase"
---


## Vincular los servicios de Firebase

- Si ya tenemos instalado e inicializado nuestro proyecto con Firebase y Firebase CLI, podemos vincular nuestro proyecto en código con el proyecto en Firebase. Para el Hosting, el apunte pasado ya bastaba. Pero para el Firestore, Authentication y Storage, hay que hacer unas cosas más.

- Como dijimos, hoy en día Storage es de pago, así que no lo vamos a explicar acá.


## Instalar Firebase y Angular Fire

- Primero, tenemos que instalar firebase en el proyecto, así:

```typescript
npm install firebase
```
- Y también tenemos que instalar Angular Fire, que es una librería de Angular hecha para trabajar con Firebase:

```typescript
npm install @angular/fire
```
- Esto último podría mostrar errores de compatibilidad en la consola, ya que podría pasar que nuestra versión de Angular no está tan actualizada como para instalar la versión más actual de Angular Fire. Entonces acá tenemos que buscar balance. Para ello, lo ideal sería actualizar Angular, y después instalar Angular Fire. O sino, no actualizar Angular pero instalar una versión de Angular Fire no tan actual, es decir, una que sea compatible con la versión de Angular que queramos usar en ese caso.


## Vincular el proyecto

- Si ya hicimos estas dos instalaciones, podemos seguir con vincular el proyecto a los servicios de Firebase.

- Primero, algo importante es crear los archivos de entorno, donde tenemos que colocar nuestras claves. Así que dentro de "src/" pero fuera de "app/", vamos a crear una carpeta "environments/". En ella creamos dos archivos: environment.ts y environment.prod.ts, que se tienen que ver así:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_DOMINIO.firebaseapp.com',
    projectId: 'TU_PROJECT_ID',
    storageBucket: 'TU_BUCKET',
    messagingSenderId: '...',
    appId: '...',
  },
};
```
- El otro archivo tiene que estar igual pero con "production: true".

- Si estamos usando Angular, también tenemos que ir al archivo "angular.json", ir a la sección "production", y en ese objeto colocar una nueva entrada así:

```typescript
"fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
```
- Esto para vincular los archivos de entorno con la configuración de producción. Y listo.

- Una vez que hicimos esto y completamos los archivos con las KEYS de nuestro proyecto de Firebase, tenemos que ir invocar e importar las cosas que vamos a requerir, provenientes de Firebase. Para hacerlo en Angular, originalmente iríamos al archivo app.module.ts, pero ahora eso ya no va. Así que vamos al app.config.ts, y hacemos esto:

```typescript
// app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
	... los demás providers...
    // 🔥 Firebase Providers
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
```
- De esta manera, ya podemos hacer uso del servicio Authentication de Firebase.