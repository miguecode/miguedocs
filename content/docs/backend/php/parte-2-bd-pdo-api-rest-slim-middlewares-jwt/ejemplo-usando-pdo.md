---
title: "Ejemplo usando PDO"
description: "Cómo implementar un ABM (Altas, Bajas y Modificaciones) de una entidad utilizando PDO."
---


## 💿 Ejemplo ABM usando PDO

En este apunte veremos cómo implementar un ABM (Altas, Bajas y Modificaciones) de una entidad utilizando **PDO**. Tomaremos como referencia el ejemplo de una entidad `CD`.

> [!IMPORTANT]
> Se recomienda tener a mano el código de referencia en: `php-apuntes-ejercicios/Clase06/EjemploCD/`

---

### 🧱 Patrones y Estructura

#### Patrón Singleton en `AccesoDatos`
La clase `AccesoDatos` implementa el patrón **Singleton**, lo que garantiza que solo exista una única instancia de conexión a la base de datos durante el ciclo de vida de la petición.

- **Constructor Privado:** Evita que otros archivos instancien la clase libremente.
- **`dameUnObjetoAcceso()`:** Método estático que gestiona la instancia única. Si no existe, la crea; si ya existe, devuelve la actual.

#### ¿Qué es un Controller?
El **Controller** es la capa encargada de organizar la lógica de negocio.
1. Recibe la petición.
2. Realiza las validaciones necesarias.
3. Prepara los datos.
4. Invoca a la capa de persistencia (modelo) y devuelve la respuesta.

---

### 🛠️ Métodos de PDO en el Ejemplo

| Método | Descripción |
| :--- | :--- |
| **`fetchAll()`** | Devuelve todos los registros de una consulta. |
| **`fetchAll(PDO::FETCH_CLASS, "cd")`** | Devuelve un array de objetos instanciados como la clase `cd`. |
| **`fetchObject("cd")`** | Devuelve un único objeto instanciado como la clase `cd`. |
| **`execute()`** | Ejecuta la sentencia preparada. Retorna `false` si ocurre un error. |

#### Manejo de respuestas vacías
Si buscamos un registro por ID, el retorno de la consulta podría ser `false` si no existe:

```php
$retorno = Cd::TraerUnCd($id);
if ($retorno === false) {
    // Manejar el error o devolver un mensaje de "No encontrado"
}
return $retorno;
```

---

### 🌐 Interacción con Métodos HTTP

#### El problema de PUT en PHP
A diferencia de `$_GET` y `$_POST`, PHP no tiene una variable nativa `$_PUT`. Para capturar los datos enviados por este método (generalmente en el Body de Postman), debemos parsear el flujo de entrada:

```php
parse_str(file_get_contents("php://input"), $putData);
// A partir de aquí, $putData funciona como nuestro $_PUT
```

#### DELETE
Generalmente se maneja de forma similar a un GET, recibiendo los parámetros (como el ID) a través de la URL (`$_GET`), ya que por estándar no suele llevar un Body.

---

### 💡 Notas Adicionales
- **`die()`**: Esta función detiene inmediatamente la ejecución de todo el script. Útil para depuración agresiva o errores fatales de conexión.
- **`$consulta`**: Una vez ejecutado el `execute()`, este objeto contiene el conjunto de resultados (stream) listos para ser extraídos con `fetch`.