---
title: "Middlewares 1"
description: "Un Middleware es un mediador o asistente que permite la comunicación e interacción entre dos sistemas (aplicaciones, hardware, SO, etc.)."
---


## 🧱 Middlewares

Un **Middleware** es un mediador o asistente que permite la comunicación e interacción entre dos sistemas (aplicaciones, hardware, SO, etc.). En el contexto de las APIs, actúa como un filtro o interceptor de peticiones.

En PHP y Slim 4, los middlewares implementan la interfaz **PSR-15**.

---

### 🚀 ¿Cómo funciona un Middleware?

El requisito fundamental de un middleware es que **debe invocar al siguiente componente** en la cadena (ya sea otro middleware o la ruta final) pasando los objetos **Request** y **Response**.

1. **Intercepción:** La petición del cliente llega al middleware.
2. **Procesamiento "Antes":** El middleware puede validar datos, autenticar usuarios o modificar el Request.
3. **Delegación:** Pasa el control al siguiente eslabón.
4. **Procesamiento "Después":** Una vez que la ruta generó una respuesta, el middleware puede volver a actuar sobre ella antes de enviarla al cliente.

> [!NOTE]
> Un middleware permite desacoplar la lógica de validación o seguridad del **Controller**. Por ejemplo, el controlador no necesita saber si el usuario está logueado; el middleware se encarga de esa validación antes de que la petición llegue al controlador.

---

### 🛠️ Middlewares en Slim 4

Slim utiliza un patrón de **Capas de Cebolla (Onion Architecture)**. Los middlewares rodean la aplicación principal:

- **Nivel Aplicación:** El middleware se ejecuta en **todas** las peticiones de la API.
- **Nivel Ruta:** El middleware solo se ejecuta cuando se accede a una URL específica.
- **Nivel Grupo:** Se aplica a un conjunto de rutas relacionadas (ej: todas las rutas `/admin`).

#### El efecto rebote (LIFO)
La primera capa por la que entra la petición es la **última** por la que sale la respuesta. Imagina que vas entrando al centro de una cebolla y luego vuelves a salir hacia la superficie.

| Fase | Orden de ejecución |
| :--- | :--- |
| **Entrada (Request)** | Desde el middleware más externo hacia el más interno. |
| **Salida (Response)** | Desde el middleware más interno hacia el más externo. |

#### Usos comunes:
- **Autenticación:** Verificar tokens JWT.
- **CORS:** Permitir peticiones desde otros dominios.
- **Logging:** Registrar cada petición que llega al servidor.
- **Parseo de datos:** Preparar los cuerpos de las peticiones (JSON, XML).