---
title: "Configurar Firebase CLI e Inicializar Proyecto"
description: "Guía paso a paso para instalar las herramientas de Firebase, autenticarte en tu sistema e inicializar los servicios de Hosting, Firestore y Storage en tu proyecto Angular."
---

## Instalación de Firebase CLI

Para interactuar con los servicios de Firebase desde tu computadora, es necesario instalar las **Firebase Tools** mediante npm. Se recomienda hacerlo de forma global para tener acceso a los comandos desde cualquier directorio.

```bash
npm install -g firebase-tools
```

### Verificación y Login
Puedes verificar si ya tienes las herramientas instaladas consultando la versión:
```bash
firebase --version
```

Para autenticarte con tu cuenta de Google, utiliza el comando de login:
```bash
firebase login
```
*Si deseas ver qué cuentas ya están autenticadas en tu equipo, puedes usar `firebase login:list`.*

---

## Inicialización del Proyecto (`firebase init`)

Una vez logueado, navega a la raíz de tu proyecto Angular e inicia el asistente de configuración:

```bash
firebase init
```

### El Asistente de Configuración (Wizard)
Este comando iniciará un proceso interactivo donde deberás tomar varias decisiones:

1.  **Selección de Características**: Usa la barra espaciadora para seleccionar los servicios que necesites. Los más comunes son:
    *   **Firestore**: Si necesitas una base de datos NoSQL.
    *   **Hosting**: Para desplegar tu aplicación en la web.
    *   **Storage**: Para guardar archivos (imágenes, PDFs).
2.  **Asociación de Proyecto**: Elige "Use an existing project" y selecciona el proyecto que previamente creaste en la [Consola de Firebase](https://console.firebase.google.com/).
3.  **Configuración de Firestore**: Elige la región más cercana a ti (ej: `southamerica-east1` para baja latencia en Sudamérica).
4.  **Configuración de Hosting**:
    *   **Public Directory**: Cambia el valor por defecto (`public`) a la ruta de salida de tu build de Angular, por ejemplo: `dist/mi-proyecto/browser`.
    *   **Single-Page App**: Responde **YES**. Esto permitirá que Angular maneje el ruteado de las URLs.
    *   **GitHub Deploys**: Opcional. Permite configurar acciones automáticas al hacer push a una rama.

---

## Archivos Generados por Firebase

Tras completar el asistente, Firebase creará automáticamente varios archivos en la raíz de tu proyecto:

*   **`.firebaserc`**: Almacena el ID del proyecto vinculado. Es fundamental para que el CLI sepa a dónde subir los archivos al ejecutar un deploy.
*   **`firebase.json`**: El archivo de configuración principal. Aquí se definen las rutas de la base de datos, las reglas de alojamiento y las cabeceras del servidor.
*   **`firestore.rules`** y **`storage.rules`**: Archivos donde definirás los permisos de lectura y escritura (Seguridad) para tus datos y archivos.
*   **`firestore.indexes.json`**: Define los índices necesarios para consultas complejas en tu base de datos.

### Próximos pasos
Una vez inicializado el proyecto, el CLI ya está listo para trabajar. Sin embargo, para que tu código Angular pueda interactuar con la base de datos o la autenticación desde el navegador, deberás instalar las librerías oficiales:

```bash
npm install firebase @angular/fire
```
*Esto se detallará en las guías específicas de integración con Angular.*