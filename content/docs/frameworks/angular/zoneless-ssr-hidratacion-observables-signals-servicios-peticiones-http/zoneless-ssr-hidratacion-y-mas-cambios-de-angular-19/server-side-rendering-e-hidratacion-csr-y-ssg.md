---
title: "Modos de Renderizado: SSR, CSR, SSG e Hidratación"
description: "Comprende la arquitectura de renderizado de Angular: desde el Server Side Rendering y la Hidratación hasta el renderizado en cliente y la generación de sitios estáticos."
---

## Server Side Rendering (SSR)

El **Server Side Rendering** es una técnica donde el servidor genera el contenido HTML completo de una página antes de enviarlo al navegador. En lugar de recibir un archivo vacío, el usuario recibe una página lista para ser visualizada.

### Flujo de Trabajo: Tradicional vs. SSR

1.  **Sin SSR (Renderizado en Cliente)**:
    *   El navegador recibe un HTML vacío (`<app-root>`).
    *   Descarga y ejecuta archivos JavaScript pesados.
    *   Angular construye el DOM desde cero en el navegador.
    *   *Resultado*: El usuario ve una pantalla en blanco o un "Loading" prolongado.

2.  **Con SSR (Server Side Rendering)**:
    *   El servidor pre-renderiza la aplicación y genera el HTML completo con datos.
    *   El navegador recibe el HTML y lo muestra instantáneamente.
    *   Angular se inicia en segundo plano y realiza la **Hidratación**.
    *   *Resultado*: Carga visual instantánea y excelente rendimiento para SEO.

---

## Hidratación: Dando vida al HTML

La **Hidratación** es el proceso mediante el cual Angular toma el HTML estático enviado por el servidor y lo convierte en una aplicación interactiva sin destruir lo que ya está en pantalla.

*   **Enchufe Lógico**: Angular busca los componentes existentes en el HTML y les "conecta" los Event Listeners, estados y lógica de JavaScript.
*   **Sin Parpadeos**: Evita que el contenido desaparezca y vuelva a aparecer (un problema común en implementaciones antiguas de SSR).

> [!TIP]
> Una metáfora útil: El **SSR** es quien construye y pinta la casa antes de que te mudes. La **Hidratación** es quien conecta la electricidad, el agua y pone los muebles para que la casa sea habitable.

### SSR vs. Hidratación
| Característica | SSR (Servidor) | Hidratación (Cliente) |
| :--- | :--- | :--- |
| **Acción** | Genera el HTML inicial con datos. | Conecta la lógica al HTML existente. |
| **Beneficio** | Mejora el SEO y la velocidad visual. | Evita redibujar el DOM inútilmente. |

---

## Estructura de un Proyecto con SSR (Angular 17+)

Desde la versión 17, el SSR ya no es un añadido externo (como Angular Universal), sino una característica integrada. Al activarlo, Angular crea un servidor **Express** automático.

```text
src/
├── main.ts              # Entrada para el navegador
├── main.server.ts       # Entrada para el servidor
├── server.ts            # Servidor Express generado
├── app/
    ├── app.routes.ts        # Rutas de navegación
    ├── app.routes.server.ts # Modos de renderizado por ruta (SSR, CSR, SSG)
```

---

## Comparativa: ¿Qué modo elegir?

Dependiendo de la ruta o tipo de aplicación, Angular permite alternar entre distintos modos de renderizado:

### 1. Client Side Rendering (CSR)
Es el modo tradicional. Todo sucede en el navegador.
*   **Uso Ideal**: Aplicaciones privadas tras un login (Dashboards, paneles de control), donde el SEO no importa.
*   **Ventaja**: Menor carga de procesamiento para el servidor.

### 2. Static Site Generation (SSG)
Las páginas se renderizan una sola vez durante el proceso de construcción (*Build Time*).
*   **Uso Ideal**: Páginas que cambian poco (Blogs, documentación, FAQ, Landing Pages).
*   **Ventaja**: Velocidad extrema y seguridad (son archivos estáticos).

### 3. Server Side Rendering (SSR)
Las páginas se generan en el servidor en cada petición del usuario.
*   **Uso Ideal**: E-commerce, redes sociales o cualquier sitio con contenido altamente dinámico que requiere SEO.
*   **Ventaja**: Contenido actualizado al segundo y máxima compatibilidad con rastreadores de búsqueda.