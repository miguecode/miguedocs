---
title: "Verbos HTTP y uso de Postman"
description: "Los verbos HTTP definen la acción que se desea realizar sobre un recurso. Los más comunes son: GET, POST, PUT, PATCH y DELETE."
---


## Métodos o Verbos HTTP

Los verbos HTTP definen la acción que se desea realizar sobre un recurso. Los más comunes son:

1. **GET:** Solicita información de un recurso. No tiene cuerpo (**Body**).
2. **POST:** Agrega nueva información al servidor.
3. **PUT:** Modifica un recurso existente reemplazándolo por completo.
4. **PATCH:** Modifica parcialmente un recurso existente.
5. **DELETE:** Elimina un recurso del servidor.

*Otros menos comunes:* HEAD, OPTIONS, TRACE, CONNECT.

---

### 1. HTTP - Método GET

- El método **GET** es el más básico. Su objetivo es recuperar información del Servidor. No crea, modifica ni elimina datos.
- En el navegador, es el único método que podemos ejecutar directamente desde la barra de direcciones. Para otros métodos, necesitamos HTML (formularios) o JavaScript (**Fetch/AJAX**).
- Permite pasar parámetros (**Query Params**) en formato Key-Value directamente en la URL.
- **Limitaciones:** Los datos viajan en texto claro en la URL, tiene un límite máximo de caracteres (aprox. 2048) y no debe usarse para información sensible.
- **Caché:** Las peticiones GET pueden almacenarse en el caché del navegador para mejorar el rendimiento (ej: el logo de un sitio que no cambia).

---

### 2. HTTP - Método POST

- El objetivo de **POST** es enviar información al servidor para crear un nuevo recurso.
- A diferencia de GET, los datos viajan en el cuerpo del mensaje (**Body**). Esto permite enviar grandes volúmenes de datos y archivos.
- Es más seguro que GET al no mostrar los datos en la URL, aunque requiere **HTTPS** para garantizar cifrado real.
- **Propiedades:** No se almacena en caché y no permanece en el historial del navegador.

---

### 3. HTTP - Método PUT

- Se utiliza para actualizar un recurso existente.
- **Diferencia clave:** Reemplaza el recurso **ENTERO**. Si envías un objeto incompleto, los campos omitidos podrían borrarse o quedar nulos dependiendo de la implementación del servidor.

```json
PUT /usuarios/123
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com"
}
```

---

### 4. HTTP - Método PATCH

- Se utiliza para actualizaciones **PARCIALES**. 
- Solo modifica los campos que se envían en la petición, manteniendo el resto del recurso intacto.

```json
PATCH /usuarios/123
{
  "email": "nuevo@example.com"
}
```
*En este ejemplo, el nombre del usuario 123 no cambiaría.*

---

### 5. HTTP - Método DELETE

- Se utiliza para eliminar un recurso del servidor.
- Generalmente no requiere un Body, ya que el recurso se identifica mediante la URL (ej: `/usuarios/123`).
- **Eliminación lógica:** Muchos servidores no borran el registro físicamente, sino que lo marcan como "inactivo" o "borrado" en la base de datos.

---

## 🚀 Postman

**Postman** es la herramienta estándar para probar APIs. Permite enviar cualquier tipo de petición HTTP y visualizar la respuesta completa del servidor.

### Conceptos básicos en Postman

- **Workspace:** Espacio de trabajo (ej: *My Workspace*).
- **Request:** Cada pestaña donde configuramos una petición (Método, URL, Headers, Body).
- **Response:** Lo que el servidor devuelve. Incluye:
    - **Status Code:** (Ej: 200 OK, 404 Not Found).
    - **Time:** Tiempo de respuesta.
    - **Size:** Tamaño de los datos recibidos.
    - **Body:** Los datos en sí (generalmente en formato JSON).

### 🐱 Visualizando Status Codes
Una forma divertida de aprender los códigos de estado es usando [http.cat](https://http.cat/).

```text
GET https://http.cat/200
```

Si envías esa petición, Postman te mostrará la imagen del gato correspondiente al código 200 en la pestaña de Response.

> [!TIP]
> En la pestaña **Body** de la respuesta, usa el modo **Pretty** para ver el código (JSON, HTML, etc.) con colores y formato legible.