---
title: "Instalación de Angular y creación de un proyecto"
description: "Guía completa para configurar tu entorno de desarrollo, instalar Angular CLI y crear tu primera aplicación desde cero."
---

## Requisitos Previos: Node.js y npm

Antes de instalar Angular, necesitas tener instalado **Node.js** en tu sistema, el cual incluye automáticamente **npm** (Node Package Manager).

Para verificar si ya los tienes instalados, abre una terminal y ejecuta:
```bash
node -v
npm -v
```

Si no los tienes o necesitas actualizarlos, descarga la versión **LTS** (Long Term Support) desde la página oficial de [nodejs.org](https://nodejs.org/).

---

## Instalación de Angular CLI

El **Angular CLI** (*Command Line Interface*) es una herramienta de línea de comandos fundamental que nos permite automatizar la creación de componentes, servicios, la ejecución de pruebas y el despliegue de nuestra aplicación.

Para instalarlo de forma global en tu equipo, ejecuta el siguiente comando:
```bash
npm install -g @angular/cli
```

A partir de este momento, tendrás acceso al comando **`ng`**, que es el punto de entrada para todas las herramientas de Angular.

---

## Creación de un Nuevo Proyecto

Para iniciar una nueva aplicación, navega en la terminal hasta la carpeta donde quieras ubicar el código y ejecuta:
```bash
ng new mi-primer-proyecto
```

El asistente te hará un par de preguntas sobre el formato de estilos (CSS, SCSS) y si deseas habilitar el renderizado en el servidor (SSR).

### Posibles errores al instalar (Windows)
Si al usar el comando `ng` en la terminal de PowerShell recibes un error sobre **políticas de seguridad**, es probable que necesites habilitar la ejecución de scripts. Ejecuta el siguiente comando como administrador:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## Comandos Esenciales

Una vez creado el proyecto, los comandos más utilizados son:

*   **Levantar el servidor de desarrollo**:
    ```bash
    ng serve -o
    ```
    *(El parámetro `-o` abre automáticamente el navegador en `http://localhost:4200/`)*.

*   **Actualizar el CLI a la última versión**:
    ```bash
    npm install -g @angular/cli@latest
    ```

*   **Consultar la versión instalada**:
    ```bash
    ng version
    ```

> [!NOTE]
> Instalar `@angular/cli` globalmente solo instala la "herramienta de gestión". Las librerías reales del framework Angular se descargan dentro de la carpeta `node_modules` de cada proyecto específico al ejecutar `ng new`.