---
title: "API REST, Framework Slim"
description: "REST es un estilo arquitectónico para diseñar servicios web que se basa en el protocolo HTTP."
---


## 🌐 API REST

### REST: Representational State Transfer
Es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar **HTTP**. Permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo o cliente que entienda HTTP, lo que la hace mucho más simple y convencional que alternativas como SOAP o XML-RPC.

> [!NOTE]
> REST es la arquitectura más natural y estándar para crear APIs para servicios orientados a Internet.

- **¿Qué es una API?** Es una interfaz que conecta dos sistemas, estableciendo un "contrato" de comunicación. A partir de ahora, todas las aplicaciones que desarrollemos serán APIs.
- **Sin estado (Stateless):** Cada mensaje HTTP contiene toda la información necesaria para comprender la petición. Ni el cliente ni el servidor necesitan recordar estados previos.
- **Operaciones definidas:** Se apoya en los métodos estándar de HTTP: **POST**, **GET**, **PUT** y **DELETE**.

---

### 📦 Composer
**Composer** es el gestor de dependencias para PHP (el equivalente a NPM en JavaScript). Permite declarar las bibliotecas que tu proyecto necesita y las administra (instala/actualiza) por vos.

### 🏗️ Framework
Un **Framework** es un marco de trabajo. Nos ayuda a abstraernos de tareas repetitivas, permitiendo que nos enfoquemos en la lógica de negocio. Debe respetarse su estructura para evitar errores.

---

### 🚀 Slim Framework
**Slim** es un **micro-framework** de PHP. Se llama "micro" porque es acotado y conciso, ideal para escribir rápidamente APIs sencillas pero poderosas. Actúa como un despachador que recibe una solicitud HTTP, invoca una rutina y devuelve una respuesta.

#### Instalación y uso básico
El comando para traer las dependencias (dentro de la carpeta `vendor`) es:

```bash
composer install
```

Este comando debe ejecutarse en la terminal de nuestro proyecto una vez instalado Composer en el sistema.

#### Solución a problemas de rutas
Una solución eficiente para forzar que el servidor siempre entre a la carpeta de la aplicación (`app`) es ejecutar:

```bash
php -S localhost:666 -t app
```

Para visualizarlo en el navegador, accedemos a:
```text
http://localhost:666
```

---

### 🛠️ Detalles de Implementación

- **Middleware de Parseo:** 
  ```php
  $app->addBodyParsingMiddleware();
  ```
  Esta línea permite procesar peticiones **PUT** de forma sencilla, permitiendo acceder a los datos recibidos (generalmente mediante una variable `$datosPUT`).

- **Variables de Entorno (`.env`):**
  Un archivo `.env` (*environment*) guarda datos sensibles o configuraciones específicas de la máquina local que no deben compartirse (como credenciales de BD). 
  - Se accede a ellas mediante la variable global `$_ENV`.
  - **Importante:** Este archivo debe estar incluido en el `.gitignore` para no subirlo al repositorio.

- **Base de despliegue:**
  Puedes usar como base el siguiente repositorio: [slim-php-mysql-deployment](https://github.com/flippiJS/slim-php-mysql-deployment)

  Este repositorio ya contiene ejemplos de **GET** y **POST**. Solo faltaría agregar las rutas para **PUT** (modificar) y **DELETE** (eliminar).o que tengamos que subir a ningun lado.
