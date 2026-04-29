---
title: "Build, Deploy y Hosting (Ejemplo con Firebase)"
description: "Aprende el flujo de trabajo completo para llevar tu aplicación Angular a producción: desde la optimización del build hasta el despliegue automático en Firebase Hosting."
---

## Conceptos Fundamentales: Build, Deploy y Hosting

Para llevar una aplicación al mundo real, debemos entender tres procesos clave que a menudo se confunden:

1.  **Build (Construcción)**: Es el proceso de transformar el código de desarrollo en un paquete optimizado para producción. Durante este paso, Angular utiliza técnicas como *Bundling, Transpiling, Minification* y *Tree Shaking* para reducir el peso de los archivos al mínimo posible.
2.  **Hosting (Alojamiento)**: Es el servicio donde residen físicamente los archivos de tu aplicación (como Firebase, Netlify o Vercel). Es el "servidor" que entrega tu web cuando alguien ingresa la URL.
3.  **Deploy (Despliegue)**: Es la acción de subir tus archivos optimizados (la build) al servicio de hosting. Es el puente entre tu computadora y el servidor público.

---

## El Proceso de Build en Angular

Para generar la versión de producción de tu aplicación, utiliza el siguiente comando:

```bash
ng build --configuration production
```

Angular generará una carpeta llamada `dist/` en la raíz de tu proyecto. Dentro de ella, la estructura típica será:

```text
dist/
└── mi-proyecto/
    ├── browser/  <-- 🌟 Contiene los archivos finales (HTML, JS, CSS) que lee el navegador.
    └── server/   <-- Solo aparecerá si has habilitado SSR (Server Side Rendering).
```

### ¿Por qué usar el modo producción?
El parámetro `--configuration production` (o `-c production`) asegura que Angular aplique optimizaciones máximas:
*   **Minificación**: Elimina espacios y renombra variables para ahorrar espacio.
*   **Tree Shaking**: Elimina automáticamente el código que no estás utilizando.
*   **AOT (Ahead-of-Time)**: Pre-compila las plantillas para que el navegador no tenga que hacerlo.
*   **Limpieza**: Elimina `console.log` y comentarios innecesarios.

---

## Despliegue en Firebase Hosting

Firebase facilita enormemente el despliegue de aplicaciones estáticas. Una vez configurado el proyecto, el despliegue se resume en un comando:

```bash
firebase deploy
```

### Configuración del directorio público
Es vital que Firebase sepa exactamente dónde está tu carpeta de build. Esto se define en el archivo **`firebase.json`**:

```json
{
  "hosting": {
    "public": "dist/nombre-de-tu-proyecto/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## Pro Tip: Automatiza con Scripts

Puedes agilizar el proceso de actualizar tu web creando un script personalizado en tu archivo **`package.json`**:

```json
"scripts": {
  "deploy-prod": "ng build -c production && firebase deploy --only hosting"
}
```

Ahora, solo necesitas ejecutar:
```bash
npm run deploy-prod
```

### ¿Para qué sirve `--only hosting`?
Este comando le indica a Firebase que **solo** suba los archivos de la web, ignorando cambios en la base de datos (Firestore), reglas de seguridad o funciones (Cloud Functions). Esto hace que el proceso de despliegue sea mucho más rápido y seguro si solo has modificado la interfaz visual.