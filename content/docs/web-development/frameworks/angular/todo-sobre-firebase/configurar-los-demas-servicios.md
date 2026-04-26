---
title: "Vincular Servicios de Firebase en Angular"
description: "Aprende a integrar Firestore, Authentication y otros servicios de Firebase en tu aplicación Angular mediante el uso de Angular Fire y variables de entorno."
---

## Introducción

Una vez que tienes inicializada tu aplicación con el CLI de Firebase, el siguiente paso es vincular los servicios (como Base de Datos y Autenticación) directamente en tu código fuente. Mientras que el Hosting solo requiere el CLI para funcionar, servicios como Firestore y Auth necesitan librerías específicas para que Angular pueda comunicarse con ellos.

---

## Instalación de Dependencias

Para integrar Firebase con Angular de forma profesional, necesitamos instalar dos paquetes fundamentales:

1.  **`firebase`**: El SDK oficial de Google para JavaScript.
2.  **`@angular/fire`**: La librería oficial que adapta el SDK de Firebase al ecosistema de Angular (usando Observables y Dependency Injection).

Ejecuta el siguiente comando en la raíz de tu proyecto:

```bash
npm install firebase @angular/fire
```

> [!TIP]
> Si encuentras errores de compatibilidad, asegúrate de que tu versión de Angular sea compatible con la versión de Angular Fire que intentas instalar. Puedes forzar una versión específica si es necesario (ej: `npm install @angular/fire@^17.0.0`).

---

## Configuración de Variables de Entorno

Nunca debemos exponer nuestras claves de API directamente en el código de los componentes. Para ello, utilizamos los archivos de entorno de Angular.

1.  Crea la carpeta `src/environments/` si no existe.
2.  Crea el archivo **`environment.ts`** (Desarrollo):

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO_ID",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
  }
};
```

3.  Crea el archivo **`environment.prod.ts`** (Producción) con los mismos datos pero con `production: true`.

### Reemplazo de archivos en `angular.json`
Para que Angular cambie automáticamente entre el archivo de desarrollo y el de producción al hacer el build, asegúrate de tener esta configuración en tu **`angular.json`**:

```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}
```

---

## Registro de Providers en `app.config.ts`

En las versiones modernas de Angular (v17+), ya no usamos `AppModule`. En su lugar, registramos los servicios de Firebase en el archivo de configuración global:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... otros providers (router, etc)
    
    // 🔥 Inicialización de Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    
    // 🔥 Servicios específicos
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
```

Con esta configuración, ya puedes inyectar los servicios de Auth o Firestore en tus componentes y empezar a interactuar con los datos de Firebase de forma reactiva.