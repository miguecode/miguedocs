---
title: "Netlify y Bootstrap"
description: "Aprende a desplegar tus aplicaciones Angular en Netlify y a integrar Bootstrap mediante diferentes métodos, desde CDN hasta paquetes npm."
---

## Despliegue en Netlify

Existen varias formas de subir un proyecto a Netlify. La forma más profesional es vinculando un repositorio de GitHub (lo cual permite despliegues automáticos al hacer *push*), pero también existe un método manual rápido.

### Método manual (Drag & Drop)

1.  **Generar el Build**: Antes de subir nada, debemos compilar nuestro proyecto de Angular para optimizarlo y "comprimirlo". Ejecutamos en la terminal:
    ```bash
    ng build
    ```
2.  **Localizar los archivos**: Tras finalizar el build, Angular creará una carpeta llamada `dist/`. Dentro encontraremos otra carpeta con el nombre de nuestro proyecto (o simplemente `browser` en versiones recientes).
3.  **Subir a Netlify**: Arrastra esa carpeta final directamente a la zona de carga de Netlify.

> [!CAUTION]
> Este método es poco óptimo para el desarrollo continuo. Si realizas cambios en el código, deberás ejecutar `ng build` y volver a arrastrar la carpeta manualmente. Lo ideal es usar la integración con Git.

### Recomendación sobre repositorios
Al trabajar con Angular, lo ideal es tener **un repositorio por proyecto**. Evita subir una carpeta contenedora con múltiples aplicaciones, ya que esto complica los procesos de CI/CD (Integración y Despliegue Continuo) y duplica innecesariamente archivos pesados como los `node_modules`.

---

## Integración de Bootstrap en Angular

Hay tres formas principales de añadir Bootstrap a tu aplicación:

1.  **CDN**: Copiar los enlaces de CSS y JS de la web oficial y pegarlos en el `index.html`. Es lo más rápido pero menos profesional.
2.  **npm (Instalación local)**: Ejecutar el comando para instalarlo como dependencia del proyecto:
    ```bash
    npm install bootstrap
    ```
    Luego, debes referenciar el archivo CSS en el array `styles` de tu archivo `angular.json`.
3.  **ng-bootstrap / ngx-bootstrap**: Utilizar librerías específicas diseñadas para Angular:
    ```bash
    ng add @ng-bootstrap/ng-bootstrap
    ```
    Este método es el más performante ya que permite importar solo los módulos que necesites (ej: solo el carrusel o solo los modales), optimizando el tamaño final de la aplicación.

---

## Uso de Templates (Ejemplo Jumbotron)

Bootstrap ofrece una sección de **"Examples"** con estructuras ya listas para usar. Un ejemplo clásico es el **Jumbotron**.

### Cómo importar un template:
1.  Descarga el código del ejemplo.
2.  Abre el archivo `index.html` del template en tu editor.
3.  Copia **únicamente** lo que se encuentra dentro de las etiquetas `<body>`. **No incluyas** las etiquetas `<body>` ni `<html>`, ya que tu aplicación Angular ya tiene su propia estructura base.
4.  Pega ese contenido en el archivo `.html` de tu componente de Angular.
5.  Asegúrate de tener Bootstrap correctamente instalado para que los estilos se apliquen de forma automática.