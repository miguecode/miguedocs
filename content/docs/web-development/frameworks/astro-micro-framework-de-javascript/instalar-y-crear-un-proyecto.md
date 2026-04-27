---
title: "Instalación y Creación de Proyectos"
description: "Guía rápida para iniciar tu primer proyecto con Astro 5. Requisitos mínimos, comandos de instalación y ejecución del servidor de desarrollo."
---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado **Node.js** (se recomienda la versión 18.17.1 o superior) en tu sistema.

---

## Creando tu primer proyecto

Astro no requiere una instalación global previa. Puedes generar la estructura de tu proyecto directamente utilizando el comando `create-astro`:

```bash
npm create astro@latest
```

> [!NOTE]
> Estos apuntes corresponden a la versión **Astro 5**, lanzada a finales de 2024.

### El asistente de instalación
Durante el proceso, el CLI de Astro te guiará con una serie de preguntas:

1.  **Directorio**: Indica la ruta y el nombre que tendrá la carpeta de tu proyecto.
2.  **Plantilla inicial**: Te preguntará cómo quieres iniciar. La opción recomendada es "Include sample files" (Incluir archivos de ejemplo) para tener una base sobre la cual trabajar.
3.  **Dependencias**: Te preguntará si deseas instalar las dependencias de `npm`. Se recomienda seleccionar **Sí**.
4.  **TypeScript**: Te preguntará si deseas usar TypeScript. Puedes elegir el nivel de "estricticidad" que prefieras.
5.  **Git**: Preguntará si deseas inicializar un repositorio Git. Esto es opcional pero recomendado.

---

## Ejecución del Proyecto

Una vez finalizada la creación, entra en la carpeta de tu proyecto y levanta el servidor de desarrollo local:

```bash
cd nombre-de-tu-proyecto
npm run dev
```

Por defecto, Astro utiliza el puerto **4321**. Podrás ver tu aplicación funcionando en:
[http://localhost:4321/](http://localhost:4321/)